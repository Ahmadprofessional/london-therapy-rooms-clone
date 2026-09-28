import { chromium } from "playwright";
import fs from "node:fs/promises";
const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });
await page.goto("https://londontherapyroomstorent.com/", { waitUntil: "networkidle", timeout: 90000 });
const res = [];
for (let i = 0; i < 4; i++) {
  const b = page.locator("a", { hasText: "View All Images" }).nth(i);
  await b.scrollIntoViewIfNeeded(); await b.click(); await page.waitForTimeout(2500);
  res.push(await page.evaluate(() => {
    const ms = [...document.querySelectorAll(".elementor-popup-modal")].filter(m => getComputedStyle(m).display !== "none");
    const m = ms[ms.length - 1];
    const slides = [...m.querySelectorAll(".swiper-slide:not(.swiper-slide-duplicate) .swiper-slide-bg")].map(e => getComputedStyle(e).backgroundImage.replace(/^url\("|"\)$/g, ""));
    const arrow = m.querySelector(".elementor-swiper-button"); const dot = m.querySelector(".swiper-pagination-bullet"); const dotA = m.querySelector(".swiper-pagination-bullet-active");
    const cb = m.querySelector(".dialog-close-button");
    return { slides, bgSize: getComputedStyle(m.querySelector(".swiper-slide-bg")).backgroundSize,
      arrow: arrow && { color: getComputedStyle(arrow).color, fs: getComputedStyle(arrow).fontSize, svg: arrow.innerHTML.slice(0, 400) },
      dot: dot && { bg: getComputedStyle(dot).backgroundColor, op: getComputedStyle(dot).opacity, w: getComputedStyle(dot).width }, dotA: dotA && { bg: getComputedStyle(dotA).backgroundColor, op: getComputedStyle(dotA).opacity },
      close: cb && { color: getComputedStyle(cb).color, fs: getComputedStyle(cb).fontSize, top: getComputedStyle(cb).top, right: getComputedStyle(cb).right, bg: getComputedStyle(cb).backgroundColor } };
  }));
  await page.keyboard.press("Escape"); await page.waitForTimeout(800);
}
await fs.writeFile("docs/research/raw/popups.json", JSON.stringify(res, null, 1));
console.log(JSON.stringify(res.map(r => ({ ...r, arrow: r.arrow && { ...r.arrow, svg: r.arrow.svg.slice(0, 120) } })), null, 1));
await browser.close();
