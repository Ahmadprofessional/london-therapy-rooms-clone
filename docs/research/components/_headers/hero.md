# Hero Specification

## Overview
- **Target file:** `src/components/Hero.tsx` (client component)
- **Screenshots:** `docs/design-references/section-02.png`, `full-desktop-1440.png` (top), `mobile-header.png`
- **Interaction model:** time-driven background slideshow + fadeIn entrance.
- **Raw section:** 02

## Layout / computed styles
- `<section>`: `position: relative; margin-top: -170px; padding: 100px;` height 686px at 1440 (content-driven). Background = slideshow layer (absolute inset 0, overflow hidden, z 0) + overlay (absolute inset 0, bg `rgb(5,5,5)`, opacity 0.45).
- Inner container: max 1240px, `min-height: 467px`, flex, align-items center. Widget wrap padding-top 89px.
- Eyebrow h2: "London Therapy Rooms  to" (two spaces verbatim) — Poppins italic 500 32px/41.6px, color `#e3e3e2`, center, margin-bottom 20px, widget has padding-top ~37px.
- H1: two lines "Rent in Marylebone, Harley Street District" / "Central London , W1G 0EB" (a `<br>` between) — Poppins italic 500 50px/70px, color `#fff`, center, margin-bottom 20px. At 1440 the text wraps to 3 lines (box 1240×210): "Rent in Marylebone, Harley Street / District Central London , / W1G 0EB" — the h1 widget is narrower; constrain width so it wraps like the screenshot (≈ max-width 820px centered works).
- Buttons row: container max 1140px (margin 0 50px), two 50% columns with 10px padding; left button aligned right, right button aligned left (they meet in the middle with 20px gap).
  - BOOK NOW: bg `#a48b65`, white, Poppins 500 18px/18px, padding 15px 30px, radius 5px, → `#Contact`. Hover bg `#282828`.
  - ENQUIRE: bg `#282828`, same type, → `#Contact`. Hover bg `#a48b65`.

## Slideshow behavior
- Slides `HERO.slides` (3 images), each full-bleed `background-size: cover; background-position: 50% 50%`.
- Each slide shows 5000ms; crossfade 500ms (opacity), infinite loop. Implement with state + setInterval and stacked absolutely-positioned divs with `transition: opacity 500ms`.
- Section also has fadeIn entrance (wrap content in `<Reveal>` or apply to section).

## Content
`HERO` from `@/data/site`.

## Responsive
- Tablet/mobile: padding reduces; at 390 section height ≈709 starting under header; eyebrow ~20px, H1 ~ 30px/40px (see mobile-header.png: H1 wraps over 4 lines "Rent in Marylebone, Harley / Street / District Central London , / W1G 0EB"), buttons stay side by side (BOOK NOW 140px-ish, ENQUIRE). Use padding 100px 10px at mobile; margin-top still -170px (mobile header is ~201px tall, so use -201px? The mobile header total is 58+143=201; the hero top at 390 is y=51 → margin-top -150px on mobile).
