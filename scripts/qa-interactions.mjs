// Interaction QA on the clone: accordion, popup slider, card hover, slideshow timing, mobile menu, scroll-to-top.
import { chromium } from "playwright";
const URL = process.argv[2] || "http://localhost:3100/";
const OUT = "docs/qa";
const b = await chromium.launch();
const p = await b.newPage({ viewport: { width: 1440, height: 900 } });
await p.goto(URL, { waitUntil: "networkidle" });
const log = (k, v) => console.log(k.padEnd(28), typeof v === "string" ? v : JSON.stringify(v));

// Hero slideshow advances
const heroOpacity = () => p.evaluate(() => [...document.querySelectorAll("section")][0].querySelectorAll("[style*='background-image']").length);
log("hero slide layers", await heroOpacity());

// Accordion
const acc = p.getByRole("button", { name: /Room Breakdown/ }).first();
await acc.scrollIntoViewIfNeeded();
const before = await acc.evaluate(e => e.closest("section").offsetHeight);
await acc.click(); await p.waitForTimeout(700);
const after = await acc.evaluate(e => e.closest("section").offsetHeight);
log("accordion section h", { before, after, expanded: await acc.getAttribute("aria-expanded") });
await acc.evaluate(e => e.closest("section").scrollIntoView());
await p.screenshot({ path: `${OUT}/clone-accordion-open.png` });
await acc.click(); await p.waitForTimeout(700);

// Card hover
const cardBtn = p.getByRole("button", { name: "View All Images" }).first();
await cardBtn.scrollIntoViewIfNeeded(); await p.waitForTimeout(300);
const card = cardBtn.locator("xpath=ancestor::*[contains(@class,'group')][1]");
await card.hover(); await p.waitForTimeout(600);
await p.screenshot({ path: `${OUT}/clone-card-hover.png` });

// Popup
await cardBtn.click(); await p.waitForTimeout(800);
const dlg = await p.evaluate(() => { const d = document.querySelector("[role=dialog]"); if (!d) return null; const r = d.getBoundingClientRect(); return { w: Math.round(r.width), h: Math.round(r.height) }; });
log("popup dialog", dlg);
await p.screenshot({ path: `${OUT}/clone-popup.png` });
await p.keyboard.press("Escape"); await p.waitForTimeout(500);
log("popup closed by ESC", await p.evaluate(() => !document.querySelector("[role=dialog]")));

// Scroll-to-top visibility
await p.evaluate(() => window.scrollTo(0, 3000)); await p.waitForTimeout(600);
log("scrolltop visible", await p.evaluate(() => { const bt = [...document.querySelectorAll("button")].find(x => getComputedStyle(x).position === "fixed"); return bt ? getComputedStyle(bt).opacity : "none"; }));

// Mobile menu
const m = await b.newPage({ viewport: { width: 390, height: 844 } });
await m.goto(URL, { waitUntil: "networkidle" });
await m.getByRole("button", { name: /menu/i }).first().click(); await m.waitForTimeout(500);
await m.screenshot({ path: `${OUT}/clone-mobile-menu.png` });
log("mobile menu links visible", await m.evaluate(() => [...document.querySelectorAll("header a")].filter(a => a.offsetWidth && /About Us|Rooms|Contact/.test(a.textContent)).length));
log("mobile horizontal overflow", await m.evaluate(() => document.documentElement.scrollWidth - innerWidth));
await b.close();
