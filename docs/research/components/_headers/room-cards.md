# RoomCardsSection + GalleryPopup Specification

## Overview
- **Target files:**
  - `src/components/GalleryPopup.tsx` — modal with slide carousel (client)
  - `src/components/RoomCardsSection.tsx` — heading + 2×2 card grid (client)
- **Screenshots:** `docs/design-references/section-11.png` (heading), `section-12.png`, `section-13.png`, `rooms-cards-default.png`, `rooms-cards-hover-room1.png`, `popup-room1.png`, `popup-2.png`, `popup-3.png`, `popup-4.png`
- **Interaction model:** CSS hover background reveal + click-to-open popup with autoplay slide carousel.
- **Raw sections:** 11 (heading), 12 (row 1: Room 1, Room 2), 13 (row 2: Room 3, Waiting Area)

## Heading (raw 11)
- "Our London Therapy Rooms to Rent": Poppins italic 500 28.83px/37.48px, color `#e28c1f`, centered; section ~57px tall, spacing ~50px above cards. Use `ROOM_CARDS_HEADING`.

## Card grid (raw 12 + 13)
- Each row: container 1100px (x 170→1270), two 550px columns, height 489px; rows separated by ~20px (3161+489=3650 → 3670).
- **Verify each card's exact background colour, text colour and padding in the appended outline** and update `ROOM_CARDS` in `src/data/site.ts` if the values there differ (Room 1 dark `#282828`?, Room 2 light, Room 3 `#141414`?, Waiting light). Card column padding ≈ 41px 70px 36px (from hover capture: `padding: 41px 70px 36px`, bg in that capture was the element's own).
- Card content (left aligned, starting ~80px from top):
  - RoomIcon ~48px, color `#e28c1f`.
  - Title h3: Poppins 500 25px/32.5px `#e28c1f` (e.g. "Room 1 - Large"), margin ~20px.
  - Body: Open Sans 300 ~15-16px/26px, white on dark cards / `#282828`-ish grey on light cards.
  - "View All Images" button: bg `#a48b65`, white, Poppins 500 ~15px, padding ~12px 24px, radius 3px. Hover bg `#282828`.
- **Hover:** on hovering the card column, background-image = `card.hoverImage` (cover, center) with an overlay `card.hoverOverlay` at opacity 0.5 over it; content stays on top. `transition: background 0.3s`. Implement: absolutely positioned image layer + overlay layer with opacity 0→1 transition 0.3s on group-hover.

## GalleryPopup
- Props: `images: string[]`, `open`, `onClose`.
- Backdrop: fixed inset 0, `rgba(0,0,0,0.8)`, z-50, click closes. ESC closes. Lock body scroll while open.
- Dialog: 640×420 centered (max-width calc(100vw - 20px)), white bg, padding 10px (image area 620×400).
- Slider inside: horizontal **slide** transition 500ms, autoplay 3000ms, infinite, pause on hover. Slides are background-image cover/center.
- Arrows: ChevronLeftIcon/ChevronRightIcon 25px, color `rgba(237,237,237,0.9)`, vertically centered, ~20px from edges.
- Dots: centered near bottom (≈15px from bottom), 6px circles, black; inactive opacity ~0.5, active 1; gap ~12px.
- Close: CloseIcon 18px, color `#e28c1f`, at top 20px / right 20px of dialog (inside), with a white 26px box behind it (see popup-room1.png: the × sits in a small white square with a thin border).
- Fade-in of modal (~300ms).

## Content
`ROOM_CARDS_HEADING`, `ROOM_CARDS` from `@/data/site`; `RoomIcon, ChevronLeftIcon, ChevronRightIcon, CloseIcon` from `@/components/icons`. Wrap rows in `<Reveal>`.

## Responsive
- ≤767: cards stack 1 per row, full width (390), each ≈500px tall, padding ≈ 80px 60px; heading 2 lines centered (see mob slices: "Our London Therapy / Rooms to Rent").
- Popup on mobile: width calc(100vw - 20px), height scaled by aspect 640:420.
