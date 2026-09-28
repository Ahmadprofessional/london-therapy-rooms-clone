# Practitioners Specification

## Overview
- **Target file:** `src/components/Practitioners.tsx`
- **Screenshots:** `docs/design-references/section-15.png` (intro), `section-16.png`, `section-17.png`, `section-18.png`, `section-19.png` (rows)
- **Interaction model:** static; fadeIn entrance.
- **Raw sections:** 15 (intro, id `PRACTITIONERS`), 16–19 (rows of 3, 3, 3, 2)

## Intro (raw 15)
- h2 "OUR PRACTITIONERS": Poppins italic 600 28.83px/37.48px `#000`, centered.
- Sub h2: two lines (`PRACTITIONERS_INTRO.subLines` joined by `<br>`), Poppins italic 500 (see outline for size, ~20px) `#000`, centered.

## Rows (raw 16–19)
- Container 1140 boxed (x 150→1290). Rows 16–18: three 380px columns; row 19: two 570px columns. Row gaps per outline (row tops: 5002, 5455, 6023, 6648).
- Card (each column, centered text):
  - Image: centered, displayed at a fixed small size per card (e.g. Sofia ~100×130; they are rendered at the widths in the outline `box` values — use those exact rendered widths/heights; do NOT upscale). 
  - Name h3: Poppins italic 500 ~22px `#000` (check outline), margin ~10px.
  - Role h4 (optional): Poppins italic 500 15px/18px `#282828` (Anna's: 14px/16.8px). Preserve `\n` line breaks as `<br>`.
  - Bio: Open Sans 300 ~14–15px/~26px, `#282828`-grey, centered; paragraphs separated. NOTE: some bios use different colours/weights in the live site (e.g. Domenic Knight's 2nd paragraph is darker/blue-ish, Kelly Sun etc.) — follow the outline's color values per text node.
- Top-align cards in each row.

## Content
`PRACTITIONERS_INTRO`, `PRACTITIONER_ROWS` from `@/data/site` (`Practitioner` type). Use `next/image` or plain `<img>` with explicit width/height. Wrap rows in `<Reveal>`.

## Responsive
- ≤767: single column, each card full width with ~30px side padding, centered; images keep their small rendered size.
