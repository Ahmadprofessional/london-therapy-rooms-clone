// Downloads every image the page uses into public/, keeping the WordPress year/month folders.
import fs from "node:fs/promises";
import path from "node:path";

const WP = "https://londontherapyroomstorent.com/wp-content/uploads/";
const assets = JSON.parse(await fs.readFile("docs/research/raw/assets.json", "utf8"));
const popups = JSON.parse(await fs.readFile("docs/research/raw/popups.json", "utf8"));
const hover = JSON.parse(await fs.readFile("docs/research/raw/hover-rules.json", "utf8"));

const urls = new Set();
assets.images.forEach(u => urls.add(u));
assets.bg.forEach(b => [...b.matchAll(/url\("([^"]+)"\)/g)].forEach(m => urls.add(m[1])));
assets.anchorsToImages.forEach(u => urls.add(u));
assets.favicons.forEach(f => urls.add(f.href));
popups.forEach(p => p.slides.forEach(u => urls.add(u)));
hover.forEach(r => [...r.matchAll(/url\("([^"]+)"\)/g)].forEach(m => urls.add(m[1])));

function localPath(u) {
  if (u.startsWith(WP)) return path.join("public/images", u.slice(WP.length));
  if (u.includes("member-badge")) return "public/images/uk-therapy-rooms-member-badge.jpeg";
  return path.join("public/images/external", path.basename(new URL(u).pathname));
}

const list = [...urls].filter(u => /^https?:/.test(u));
let ok = 0, fail = [];
for (let i = 0; i < list.length; i += 4) {
  await Promise.all(list.slice(i, i + 4).map(async u => {
    const dest = localPath(u);
    try {
      await fs.access(dest); ok++; return; // already downloaded
    } catch {}
    try {
      const res = await fetch(u);
      if (!res.ok) throw new Error(res.status);
      await fs.mkdir(path.dirname(dest), { recursive: true });
      await fs.writeFile(dest, Buffer.from(await res.arrayBuffer()));
      ok++;
    } catch (e) { fail.push([u, String(e)]); }
  }));
}
// Favicons also go to public/seo
await fs.mkdir("public/seo", { recursive: true });
for (const f of assets.favicons) await fs.copyFile(localPath(f.href), path.join("public/seo", path.basename(f.href))).catch(() => {});
console.log(`downloaded ${ok}/${list.length}`, fail.length ? fail : "");
