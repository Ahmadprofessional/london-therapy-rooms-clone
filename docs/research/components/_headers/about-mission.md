# AboutSection + MissionSection Specification

## Overview
- **Target files:** `src/components/AboutSection.tsx`, `src/components/MissionSection.tsx` (share a layout: badge image column + text column; you may create a shared internal helper in either file)
- **Screenshots:** `docs/design-references/section-03.png` (about), `section-14.png` (mission)
- **Interaction model:** static; fadeIn entrance; button hover.
- **Raw sections:** 03 (about, id `Aboutus`), 14 (mission, id `vision`)

## About (raw 03)
- `<section id="Aboutus">` margin 80px 0. Boxed container max-width 1140px centered (at 1440: margin 0 150px). Two columns: left 429px (≈37.6%), right 711px (≈62.4%).
- Left col padding 10px: the UK Therapy Rooms member badge `<a href={MEMBER_BADGE.href} target=_blank>` with `<img>` 409×313 (max-width 100%).
- Right col padding 5px 0 0 20px:
  - h2 "About US": Poppins italic 500 32px/41.6px, color `#282828`, margin-bottom 20px.
  - h2 "Health & Skin Clinic": same type, color `#a48b65`; widget margin-top -14px.
  - Text: Open Sans 300 16px/26.4px `#282828`, two blocks (each its own line block), widget margin-top ~-7px, margin-bottom 20px.
  - Button "Learn more": bg `#a48b65`, white, Poppins 500 16px/16px, padding 15px 30px, radius 5px → `ABOUT.cta.href`. Hover bg `#282828`.

## Mission (raw 14)
- `<section id="vision">`. Same two-column pattern at 1440: container 170→1270 (1100px): left col 414px with the same badge (vertically centered in the column), right col 686px.
- h2 "Our mission and vision at": Poppins italic 500, color `#282828` (see outline for exact size); h2 "Health & Skin Clinic" color `#a48b65`.
- Paragraphs: Open Sans 300 16px/26.4px — two paragraphs with a blank line between.
- Button "ENQUIRE" gold → `#Contact`, hover `#282828`.
- Check the appended outline for exact paddings/margins of the mission section — they differ slightly from About.

## Content
`ABOUT`, `MISSION`, `MEMBER_BADGE` from `@/data/site`. Wrap sections in `<Reveal>` (`@/components/Reveal`).

## Responsive
- ≤767: stack — badge first (full width, ≈298px tall block at 390, image centered), then text with padding ≈ 0 30px; headings ~32px still; About section total ≈766px tall at 390.
- Tablet 768: see full-tablet-768.png (columns stay side by side or stack — verify in image).
