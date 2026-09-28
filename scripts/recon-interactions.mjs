// Captures interactive states: hero slideshow, accordion open, popup gallery, room-card hover, nav hover, mobile menu.
import { chromium } from "playwright";
import fs from "node:fs/promises";

const URL = "https://londontherapyroomstorent.com/";
const IMG = "docs/design-references";
const out = {};
const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });
await page.goto(URL, { waitUntil: "networkidle", timeout: 90000 });
await page.evaluate(() => document.querySelectorAll(".elementor-invisible").forEach(e => e.classList.remove("elementor-invisible")));

// Hero
out.hero = await page.evaluate(() => {
  const s = [...document.querySelectorAll(".elementor-top-section")][2];
  const U = x => x.replace("https://londontherapyroomstorent.com/wp-content/uploads/", "U/");
  const bgs = [...s.querySelectorAll("*")].map(e => [e.className?.toString().slice(0, 80), getComputedStyle(e).backgroundImage]).filter(([, b]) => b.includes("url(")).map(([c, b]) => [c, U(b)]);
  const ss = s.dataset.settings; const cs = getComputedStyle(s);
  const ov = s.querySelector(":scope > .elementor-background-overlay"); const oc = ov && getComputedStyle(ov);
  return { settings: ss, minHeight: cs.minHeight, height: s.offsetHeight, marginTop: cs.marginTop, padding: cs.padding, bgs, overlay: oc && { bg: oc.backgroundColor, opacity: oc.opacity, bgImage: oc.backgroundImage } };
});

// Accordion open
const heading = page.locator(".uc_material_accordion .uc-heading").first();
await heading.scrollIntoViewIfNeeded();
await heading.click();
await page.waitForTimeout(1200);
out.accordionOpen = await page.evaluate(() => {
  const box = document.querySelector(".uc_material_accordion .uc_ac_box"); const c = box.querySelector(".uc_content");
  const r = box.closest(".elementor-top-section").getBoundingClientRect();
  return { active: box.className, contentH: c.offsetHeight, sectionH: Math.round(r.height), style: c.getAttribute("style") };
});
const sec = page.locator(".elementor-top-section").nth(5);
await sec.screenshot({ path: `${IMG}/room1-accordion-open.png` });
await heading.click(); await page.waitForTimeout(800);

// Room card hover (Room 1 - Large)
const card = page.locator(".elementor-top-section").nth(9).locator(".elementor-column").first();
await card.scrollIntoViewIfNeeded(); await page.waitForTimeout(400);
await page.locator(".elementor-top-section").nth(9).screenshot({ path: `${IMG}/rooms-cards-default.png` });
await card.hover(); await page.waitForTimeout(900);
await page.locator(".elementor-top-section").nth(9).screenshot({ path: `${IMG}/rooms-cards-hover-room1.png` });
out.cardHover = await page.evaluate(() => { const c = [...document.querySelectorAll(".elementor-top-section")][9].querySelector(".elementor-column > .elementor-widget-wrap, .elementor-column > .elementor-column-wrap"); const cs = getComputedStyle(c); return { transition: cs.transition, bg: cs.backgroundColor, bgImg: cs.backgroundImage, padding: cs.padding }; });

// Nav hover
const navLink = page.locator(".hfe-nav-menu a.hfe-menu-item").nth(1);
await page.evaluate(() => window.scrollTo(0, 0)); await page.waitForTimeout(300);
out.navBefore = await navLink.evaluate(a => { const c = getComputedStyle(a); return { color: c.color, bg: c.backgroundColor, pad: c.padding, fs: c.fontSize, fw: c.fontWeight, ff: c.fontFamily, transition: c.transition, after: getComputedStyle(a, "::after").cssText || [getComputedStyle(a, "::after").backgroundColor, getComputedStyle(a, "::after").height, getComputedStyle(a, "::after").width, getComputedStyle(a, "::after").opacity].join("|"), before: [getComputedStyle(a, "::before").backgroundColor, getComputedStyle(a, "::before").height, getComputedStyle(a, "::before").width, getComputedStyle(a, "::before").opacity, getComputedStyle(a, "::before").bottom].join("|") }; });
await navLink.hover(); await page.waitForTimeout(600);
out.navAfter = await navLink.evaluate(a => { const c = getComputedStyle(a); return { color: c.color, bg: c.backgroundColor, before: [getComputedStyle(a, "::before").backgroundColor, getComputedStyle(a, "::before").height, getComputedStyle(a, "::before").width, getComputedStyle(a, "::before").opacity].join("|"), after: [getComputedStyle(a, "::after").backgroundColor, getComputedStyle(a, "::after").height, getComputedStyle(a, "::after").width, getComputedStyle(a, "::after").opacity].join("|") }; });
out.navActive = await page.locator(".hfe-nav-menu a.hfe-menu-item").first().evaluate(a => { const c = getComputedStyle(a); return { color: c.color, bg: c.backgroundColor, before: [getComputedStyle(a, "::before").backgroundColor, getComputedStyle(a, "::before").height, getComputedStyle(a, "::before").width, getComputedStyle(a, "::before").opacity, getComputedStyle(a, "::before").bottom, getComputedStyle(a, "::before").left].join("|"), after: [getComputedStyle(a, "::after").backgroundColor, getComputedStyle(a, "::after").height, getComputedStyle(a, "::after").width, getComputedStyle(a, "::after").opacity, getComputedStyle(a, "::after").bottom].join("|") }; });
await page.screenshot({ path: `${IMG}/nav-hover.png`, clip: { x: 0, y: 0, width: 1440, height: 150 } });

// Popup (View All Images, Room 1)
const btn = page.locator("a", { hasText: "View All Images" }).first();
await btn.scrollIntoViewIfNeeded(); await btn.click(); await page.waitForTimeout(2500);
out.popups = [];
out.popups.push(await page.evaluate(() => {
  const U = x => x && x.replace("https://londontherapyroomstorent.com/wp-content/uploads/", "U/");
  const m = document.querySelector(".elementor-popup-modal, .dialog-lightbox-widget, .dialog-widget"); if (!m) return { none: true };
  const msg = m.querySelector(".dialog-message") || m; const cs = getComputedStyle(msg); const mc = getComputedStyle(m);
  return { cls: m.className, overlayBg: mc.backgroundColor, width: cs.width, height: cs.height, bg: cs.backgroundColor, pad: cs.padding, radius: cs.borderRadius, imgs: [...m.querySelectorAll("img")].map(i => U(i.currentSrc || i.src)), bgs: [...m.querySelectorAll("*")].map(e => getComputedStyle(e).backgroundImage).filter(b => b.includes("url(")).map(U), anchors: [...m.querySelectorAll("a[href]")].map(a => U(a.href)), widgets: [...m.querySelectorAll("[data-widget_type]")].map(w => w.dataset.widget_type + " " + (w.dataset.settings || "").slice(0, 400)), text: m.innerText.slice(0, 300), close: m.querySelector(".dialog-close-button")?.outerHTML.slice(0, 300) };
}));
await page.screenshot({ path: `${IMG}/popup-room1.png` });
await page.keyboard.press("Escape"); await page.waitForTimeout(800);
for (const i of [1, 2, 3]) {
  const b = page.locator("a", { hasText: "View All Images" }).nth(i);
  await b.scrollIntoViewIfNeeded(); await b.click(); await page.waitForTimeout(2500);
  out.popups.push(await page.evaluate(() => { const U = x => x && x.replace("https://londontherapyroomstorent.com/wp-content/uploads/", "U/"); const ms = [...document.querySelectorAll(".elementor-popup-modal")].filter(m => getComputedStyle(m).display !== "none"); const m = ms[ms.length - 1]; if (!m) return { none: true }; return { imgs: [...m.querySelectorAll("img")].map(i => U(i.currentSrc || i.src)), anchors: [...m.querySelectorAll("a[href]")].map(a => U(a.href)), widgets: [...m.querySelectorAll("[data-widget_type]")].map(w => w.dataset.widget_type + " " + (w.dataset.settings || "").slice(0, 300)) }; }));
  await page.screenshot({ path: `${IMG}/popup-${i + 1}.png` });
  await page.keyboard.press("Escape"); await page.waitForTimeout(800);
}

// Mobile menu
const m = await browser.newPage({ viewport: { width: 390, height: 844 } });
await m.goto(URL, { waitUntil: "networkidle", timeout: 90000 });
await m.screenshot({ path: `${IMG}/mobile-header.png` });
const toggle = m.locator(".hfe-nav-menu__toggle, .elementor-menu-toggle").first();
out.mobileToggle = await toggle.evaluate(t => ({ html: t.outerHTML.slice(0, 600), color: getComputedStyle(t).color, bg: getComputedStyle(t).backgroundColor, visible: t.offsetWidth > 0 })).catch(e => String(e));
await toggle.click().catch(() => {}); await m.waitForTimeout(1000);
await m.screenshot({ path: `${IMG}/mobile-menu-open.png` });
out.mobileMenu = await m.evaluate(() => { const n = document.querySelector(".hfe-nav-menu__layout-horizontal, nav.hfe-nav-menu, .hfe-dropdown"); const all = [...document.querySelectorAll("nav")].map(n => ({ cls: n.className, disp: getComputedStyle(n).display, bg: getComputedStyle(n).backgroundColor, w: n.offsetWidth, h: n.offsetHeight, pos: getComputedStyle(n).position })); const a = [...document.querySelectorAll("nav a")].filter(a => a.offsetWidth > 0)[0]; const ac = a && getComputedStyle(a); return { navs: all, link: ac && { color: ac.color, bg: ac.backgroundColor, pad: ac.padding, fs: ac.fontSize, border: ac.borderBottom } }; });

await fs.writeFile("docs/research/raw/interactions.json", JSON.stringify(out, null, 1));
await browser.close();
console.log(JSON.stringify(out, null, 1).slice(0, 9000));
