# RoomsIntro + RoomDetail Specification

## Overview
- **Target files:**
  - `src/components/RoomsIntro.tsx` — "CONSULTING ROOMS" heading block (id `Rooms`)
  - `src/components/FadeSlider.tsx` — reusable autoplay crossfade background-image slider (client)
  - `src/components/RoomBreakdownAccordion.tsx` — "Room Breakdown (click to expand)" accordion (client)
  - `src/components/RoomDetail.tsx` — one room block (props: `room: RoomDetail`)
  - `src/components/RoomDetailsSection.tsx` — renders RoomsIntro + the 3 `ROOM_DETAILS`
- **Screenshots:** `docs/design-references/section-04.png`, `section-05.png` (room 1), `section-07.png` (room 2), `section-09.png` (room 3), `room1-accordion-open.png`
- **Interaction model:** time-driven slider (fade) + click-driven accordion.
- **Raw sections:** 04 (intro), 05 / 07 / 09 (rooms 1/2/3). Raw 06/08/10 are hidden duplicates — ignore.

## RoomsIntro (raw 04)
- Section margin-bottom 50px, container 1140 boxed, padding 10px, center text, black `#000`.
- h2 "CONSULTING ROOMS": Poppins italic 500 33px/42.9px, margin-bottom 20px.
- h2 sub: Poppins italic 500 22px/28.6px, 3 lines joined with `<br>`; widget margin-top -11px. Use `ROOMS_INTRO`.

## RoomDetail (raw 05/07/09)
- Section: boxed container 1100px (at 1440: x 170→1270), two 550px columns, height 483 (room 3: 499), margin-bottom ~70px between rooms (1379→1932 = 553 step).
- **Text panel** (bg `#a48b65`, padding 41px 70px 36px-ish — confirm in outline):
  - "Room 1 Dimensions": Poppins 500 20px/26px `#000`.
  - Dimensions "4.71m x 3.41m": Poppins 500 17px/22.1px `#fff`, directly under.
  - "Suitable For": Poppins 500 20px `#000`, margin-top ~20px.
  - Suitable-for list(s): each `room.suitableFor` column rendered as a vertical icon-list. On desktop the lists render **stacked** one after another (visually one continuous list, see screenshots). Item: DotCircleIcon (white, ~12px) + text Poppins 300 ~15px white, line-height ~26px.
  - Accordion (see below).
  - ENQUIRE button: bg `#000`, white Poppins 500 ~16px, padding 12px 30px, radius 3px-5px → `#Contact`. Hover bg `#141414`.
- **Image panel**: `<FadeSlider images={room.slides} />` filling the column height (cover, center). Room 2 has the image on the LEFT (`imageSide`).

## FadeSlider
- Props: `images: string[]`, `interval=3000`, `speed=500`, `className`. Stacked absolutely-positioned divs with background-image cover/center; active opacity 1, others 0, `transition: opacity {speed}ms`. Pause on hover. No arrows/dots. Loops.

## RoomBreakdownAccordion
- Header row: flex, cursor pointer, title "Room Breakdown (click to expand)" Poppins 600 15px `#000`; right side expand icon PlusIcon (closed) / MinusIcon (open), ~15px, color white at 60% opacity. Header padding 0, no bg.
- Content (open): bg `#000`, padding 20px, margin-top ~10px, two columns (≈161px + 208px inside 410px), each a vertical list of `CheckIcon` (white, 14px) + item text Poppins 200 16px/26.4px white. Items wrap inside their narrow column (as in `room1-accordion-open.png`).
- Open/close animates height (slideDown ~300ms). Use a height transition (grid-template-rows 0fr→1fr or measured height).
- Content = `room.breakdown`.

## Content
`ROOMS_INTRO`, `ROOM_DETAILS` from `@/data/site`; types from `@/types/content`; icons from `@/components/icons`. Wrap each block in `<Reveal>`.

## Responsive
- ≤767: columns stack in DOM order (Room 1: text then image; Room 2: image then text; Room 3: text then image). Text panel padding ≈ 50px 30px; image panel height ≈483px full width. Suitable-for lists stay stacked.
- Tablet 768: see full-tablet-768.png.
