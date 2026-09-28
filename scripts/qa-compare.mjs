// Visual QA: screenshots the original and the clone at the same widths and writes side-by-side strips.
// Usage: node scripts/qa-compare.mjs [cloneUrl]   (default http://localhost:3000)
import { chromium } from "playwright";
import sharp from "sharp";
import fs from "node:fs/promises";

const ORIGINAL = "https://londontherapyroomstorent.com/";
const CLONE = process.argv[2] || "http://localhost:3000";
const OUT = "docs/qa";
await fs.mkdir(OUT, { recursive: true });

const browser = await chromium.launch();

async function shoot(url, width, file) {
  const page = await browser.newPage({ viewport: { width, height: 900 } });
  await page.goto(url, { waitUntil: "networkidle", timeout: 120000 });
  await page.evaluate(async () => {
    for (let y = 0; y < document.body.scrollHeight; y += 400) { window.scrollTo(0, y); await new Promise(r => setTimeout(r, 100)); }
    window.scrollTo(0, 0);
  });
  await page.waitForTimeout(1500);
  // Freeze entrance animations so both sides are fully visible
  await page.addStyleTag({ content: ".elementor-invisible,.reveal{opacity:1!important;animation:none!important}" });
  await page.screenshot({ path: file, fullPage: true });
  await page.close();
}

for (const w of [1440, 390]) {
  const a = `${OUT}/original-${w}.png`, b = `${OUT}/clone-${w}.png`;
  await shoot(ORIGINAL, w, a);
  await shoot(CLONE, w, b);
  const [ma, mb] = await Promise.all([sharp(a).metadata(), sharp(b).metadata()]);
  const H = Math.max(ma.height, mb.height), gap = 20;
  const pad = async (f, m) => sharp(f).extend({ bottom: H - m.height, background: "#ff00ff" }).png().toBuffer();
  await sharp({ create: { width: ma.width + mb.width + gap, height: H, channels: 3, background: "#ff00ff" } })
    .composite([{ input: await pad(a, ma), left: 0, top: 0 }, { input: await pad(b, mb), left: ma.width + gap, top: 0 }])
    .png().toFile(`${OUT}/side-by-side-${w}.png`);
  // Chunk into viewable slices
  const step = w === 1440 ? 1400 : 2400;
  for (let top = 0, i = 0; top < H; top += step, i++) {
    await sharp(`${OUT}/side-by-side-${w}.png`).extract({ left: 0, top, width: ma.width + mb.width + gap, height: Math.min(step, H - top) })
      .resize({ width: w === 1440 ? 1600 : 820 }).toFile(`${OUT}/sbs-${w}-${String(i).padStart(2, "0")}.png`);
  }
  console.log(w, "original", ma.height, "clone", mb.height);
}
await browser.close();
