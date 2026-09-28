// Recon: full-page screenshots at 3 widths + per-section computed-style dumps + asset inventory.
import { chromium } from "playwright";
import fs from "node:fs/promises";

const URL = "https://londontherapyroomstorent.com/";
const OUT_IMG = "docs/design-references";
const OUT_DATA = "docs/research/raw";
await fs.mkdir(OUT_IMG, { recursive: true });
await fs.mkdir(OUT_DATA, { recursive: true });

const browser = await chromium.launch();

async function open(width, height = 900) {
  const page = await browser.newPage({ viewport: { width, height }, deviceScaleFactor: 1 });
  await page.goto(URL, { waitUntil: "networkidle", timeout: 90000 });
  // Scroll through so lazy images + entrance animations fire
  await page.evaluate(async () => {
    for (let y = 0; y < document.body.scrollHeight; y += 400) { window.scrollTo(0, y); await new Promise(r => setTimeout(r, 120)); }
    window.scrollTo(0, 0);
  });
  await page.waitForTimeout(1500);
  await page.evaluate(() => document.querySelectorAll(".elementor-invisible").forEach(e => e.classList.remove("elementor-invisible")));
  return page;
}

for (const [name, w] of [["desktop", 1440], ["tablet", 768], ["mobile", 390]]) {
  const page = await open(w);
  await page.screenshot({ path: `${OUT_IMG}/full-${name}-${w}.png`, fullPage: true });
  // Section boxes at this width (for responsive notes)
  const boxes = await page.evaluate(() => [...document.querySelectorAll(".elementor-top-section")].filter(s => s.offsetHeight > 0).map((s, i) => {
    const r = s.getBoundingClientRect();
    const cols = [...s.querySelectorAll(":scope > .elementor-container > .elementor-column")].map(c => { const b = c.getBoundingClientRect(); return [Math.round(b.left), Math.round(b.top + scrollY), Math.round(b.width), Math.round(b.height)]; });
    return { i, id: s.id, top: Math.round(r.top + scrollY), h: Math.round(r.height), cols };
  }));
  await fs.writeFile(`${OUT_DATA}/boxes-${w}.json`, JSON.stringify(boxes, null, 1));
  if (w !== 1440) { await page.close(); continue; }

  // ---------- Desktop deep extraction ----------
  const sections = await page.evaluate(() => {
    const props = ["fontSize","fontWeight","fontFamily","fontStyle","lineHeight","letterSpacing","color","textTransform","textDecoration","textAlign","backgroundColor","backgroundImage","backgroundSize","backgroundPosition","padding","margin","width","height","maxWidth","minHeight","display","flexDirection","flexWrap","justifyContent","alignItems","gap","gridTemplateColumns","borderRadius","borderTop","borderBottom","borderLeft","borderRight","boxShadow","overflow","position","top","right","bottom","left","zIndex","opacity","transform","transition","objectFit","filter","textShadow"];
    const skip = new Set(["none","normal","auto","0px","rgba(0, 0, 0, 0)","0px none rgb(0, 0, 0)","static","visible","start","0s"]);
    const def = {};
    function styles(el) {
      const cs = getComputedStyle(el), o = {};
      for (const p of props) { const v = cs[p]; if (v && !skip.has(v) && !/^0px none/.test(v) && !(p === "transition" && v === "all")) o[p] = v; }
      const b = el.getBoundingClientRect(); o._box = [Math.round(b.left), Math.round(b.top + scrollY), Math.round(b.width), Math.round(b.height)];
      return o;
    }
    function walk(el, d) {
      if (d > 14) return null;
      const own = [...el.childNodes].filter(n => n.nodeType === 3).map(n => n.textContent.trim()).join(" ").trim();
      const node = { tag: el.tagName.toLowerCase(), cls: (el.getAttribute("class") || "").split(/\s+/).filter(c => !/^elementor-element-[0-9a-f]+$/.test(c)).slice(0, 4).join(" ") };
      if (el.dataset.widget_type) node.widget = el.dataset.widget_type;
      if (el.dataset.settings) node.settings = el.dataset.settings.slice(0, 600);
      if (own) node.text = own.slice(0, 600);
      if (el.tagName === "IMG") node.img = { src: el.currentSrc || el.src, alt: el.alt, nw: el.naturalWidth, nh: el.naturalHeight };
      if (el.tagName === "A") node.href = el.getAttribute("href");
      if (["INPUT","SELECT","TEXTAREA"].includes(el.tagName)) node.field = { type: el.type, name: el.name, placeholder: el.placeholder, required: el.required };
      if (el.tagName === "svg" || el.tagName === "SVG") { node.svg = el.outerHTML.slice(0, 3000); node.s = styles(el); return node; }
      if (el.tagName === "I") node.icon = el.className;
      node.s = styles(el);
      const kids = [...el.children].filter(c => !["SCRIPT","STYLE","NOSCRIPT","BR"].includes(c.tagName));
      if (kids.length) node.c = kids.slice(0, 40).map(c => walk(c, d + 1)).filter(Boolean);
      return node;
    }
    return [...document.querySelectorAll(".elementor-top-section")].map((s, i) => ({ i, id: s.id, visible: s.offsetHeight > 0, tree: walk(s, 0) }));
  });
  for (const s of sections) await fs.writeFile(`${OUT_DATA}/section-${String(s.i).padStart(2, "0")}.json`, JSON.stringify(s, null, 1));

  // Section screenshots
  const secHandles = await page.$$(".elementor-top-section");
  for (let i = 0; i < secHandles.length; i++) {
    const box = await secHandles[i].boundingBox();
    if (!box || box.height < 2) continue;
    await secHandles[i].screenshot({ path: `${OUT_IMG}/section-${String(i).padStart(2, "0")}.png` }).catch(() => {});
  }

  // Asset inventory
  const assets = await page.evaluate(() => ({
    images: [...new Set([...document.querySelectorAll("img")].flatMap(i => [i.currentSrc || i.src, ...(i.srcset ? [] : [])]))],
    bg: [...new Set([...document.querySelectorAll("*")].map(e => getComputedStyle(e).backgroundImage).filter(b => b.includes("url(")))],
    anchorsToImages: [...new Set([...document.querySelectorAll("a[href]")].map(a => a.href).filter(h => /\.(jpe?g|png|webp|gif)$/i.test(h)))],
    swiperSlides: [...document.querySelectorAll(".swiper-slide-bg, .elementor-slide-bg, [data-background]")].map(e => e.getAttribute("data-background") || getComputedStyle(e).backgroundImage),
    favicons: [...document.querySelectorAll('link[rel*="icon"]')].map(l => ({ href: l.href, rel: l.rel, sizes: l.sizes?.toString() })),
    meta: { title: document.title, description: document.querySelector('meta[name=description]')?.content, og: [...document.querySelectorAll('meta[property^="og:"]')].map(m => [m.getAttribute("property"), m.content]) },
    fontFaces: [...document.styleSheets].flatMap(ss => { try { return [...ss.cssRules].filter(r => r.type === 5).map(r => r.cssText.slice(0, 300)); } catch { return []; } }),
  }));
  await fs.writeFile(`${OUT_DATA}/assets.json`, JSON.stringify(assets, null, 1));

  // Header scroll states + hover rules
  const headerStates = {};
  for (const y of [0, 150, 600]) {
    await page.evaluate(y => window.scrollTo(0, y), y); await page.waitForTimeout(700);
    headerStates[y] = await page.evaluate(() => [0, 1].map(i => { const s = [...document.querySelectorAll(".elementor-top-section")][i]; const c = getComputedStyle(s); return { cls: s.className, position: c.position, top: c.top, bg: c.backgroundColor, h: s.offsetHeight, rectTop: Math.round(s.getBoundingClientRect().top) }; }));
    await page.screenshot({ path: `${OUT_IMG}/header-scroll-${y}.png`, clip: { x: 0, y: 0, width: 1440, height: 200 } });
  }
  await fs.writeFile(`${OUT_DATA}/header-states.json`, JSON.stringify(headerStates, null, 1));

  const hoverRules = await page.evaluate(() => [...document.styleSheets].flatMap(ss => { try { return [...ss.cssRules].filter(r => r.selectorText && /:hover|:focus/.test(r.selectorText) && /elementor-(\d|element-[0-9a-f])|post-\d/.test(r.selectorText)).map(r => r.cssText.slice(0, 400)); } catch { return []; } }));
  await fs.writeFile(`${OUT_DATA}/hover-rules.json`, JSON.stringify(hoverRules, null, 1));

  // Keyframes actually defined (for entrance anims)
  const keyframes = await page.evaluate(() => [...document.styleSheets].flatMap(ss => { try { return [...ss.cssRules].filter(r => r.type === 7 && /fadeIn|slide|zoom|kenBurns/i.test(r.name)).map(r => r.cssText.slice(0, 400)); } catch { return []; } }));
  await fs.writeFile(`${OUT_DATA}/keyframes.json`, JSON.stringify(keyframes, null, 1));
  await page.close();
}

await browser.close();
console.log("done");
