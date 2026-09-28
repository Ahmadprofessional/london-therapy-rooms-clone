// Turns docs/research/raw/section-XX.json style trees into compact indented outlines (docs/research/raw/outline-XX.txt).
import fs from "node:fs/promises";

const drop = new Set(["transition","width","height","objectFit"]);
const defaults = { backgroundPosition: "0% 0%", opacity: "1", flexDirection: "row", flexWrap: "nowrap", display: "block" };
const U = s => String(s).replace(/https:\/\/londontherapyroomstorent\.com\/wp-content\/uploads\//g, "/images/");
const files = (await fs.readdir("docs/research/raw")).filter(f => /^section-\d+\.json$/.test(f));
for (const f of files) {
  const sec = JSON.parse(await fs.readFile(`docs/research/raw/${f}`, "utf8"));
  const lines = [`# section ${sec.i} id=${sec.id} visible=${sec.visible}`];
  (function walk(n, d, parentS) {
    if (!n) return;
    const s = { ...n.s }; const box = s._box; delete s._box;
    // drop inherited-identical typographic props to cut noise
    for (const k of Object.keys(s)) if (defaults[k] === s[k] || /^0px solid/.test(s[k]) || (k === 'minHeight' && s[k] === '1px') || drop.has(k) || (parentS && parentS[k] === s[k] && /^(font|line|letter|color|text)/.test(k))) delete s[k];
    const boring = !n.text && !n.img && !n.widget && !n.field && !n.svg && !n.icon && !n.href && Object.keys(s).filter(k => !["width", "height", "display", "position"].includes(k)).length === 0;
    if (!boring) {
      const bits = [n.tag + (n.cls ? "." + n.cls.split(" ").slice(0, 3).join(".") : "")];
      if (n.widget) bits.push(`[${n.widget}]`);
      if (box) bits.push(`box=${box.join(",")}`);
      bits.push(Object.entries(s).map(([k, v]) => `${k}:${U(v)}`).join("; "));
      if (n.text) bits.push(`TEXT="${n.text}"`);
      if (n.img) bits.push(`IMG=${U(n.img.src)} (${n.img.nw}x${n.img.nh}) alt="${n.img.alt}"`);
      if (n.href) bits.push(`HREF=${U(n.href)}`);
      if (n.field) bits.push(`FIELD=${JSON.stringify(n.field)}`);
      if (n.icon) bits.push(`ICON=${n.icon}`);
      if (n.svg) bits.push(`SVG=${n.svg.replace(/\s+/g, " ").slice(0, 700)}`);
      if (n.settings && /animation|background_background|slideshow/.test(n.settings)) bits.push(`SETTINGS=${n.settings.slice(0, 250)}`);
      lines.push("  ".repeat(d) + bits.join(" | "));
    }
    (n.c || []).forEach(c => walk(c, boring ? d : d + 1, n.s));
  })(sec.tree, 0, null);
  await fs.writeFile(`docs/research/raw/outline-${f.slice(8, 10)}.txt`, lines.join("\n"));
}
console.log("ok", files.length);
