# BEHAVIORS — londontherapyroomstorent.com

Captured 2026-09-28 with Playwright + in-app browser. Raw data: `docs/research/raw/*.json`.

## Global
- **No smooth-scroll library** (no Lenis/Locomotive). Native scroll. Anchor links (#Rooms, #PRACTITIONERS, #vision, #Contact) jump to sections.
- **Entrance animations:** 29 elements use Elementor `fadeIn` (opacity 0 → 1), `animation-duration: 1.25s`, no delay. Triggered when the element enters the viewport (Elementor waypoints). Implemented via `<Reveal>` (`src/components/Reveal.tsx`). Sections with it: hero, about, rooms intro, room details, room cards, mission, practitioners, contact etc. (all top sections have `"animation":"fadeIn"` in settings).
- **Scroll-to-top button** (Astra theme): fixed bottom-right (≈30px from right, 30px from bottom), bg `#046bd2`, white chevron-up, appears after scrolling down.

## Header (top bar + nav)
- **NOT sticky.** Both bars are `position: relative; z-index: 10` and scroll away. Captured at scrollY 0/150/600 — identical styles.
- Both bars overlay the hero: hero has `margin-top: -170px`.
- Top bar: black overlay opacity 0.74. Nav bar: black overlay opacity 0.5.
- **Nav link hover:** color stays white; an underline (`::after`, 3px, `#a48b65`) grows from 10px/opacity 0 to full width/opacity 1. `transition: 0.2s linear`. Active (Home) link: color `#a48b65` with full-width 3px gold underline.
- **Mobile (<1025px):** nav collapses to a hamburger (fa-align-justify, 25px, color `#e28c1f`, padding 7.7px). Click → dropdown panel below toggle: white bg, width 165px (absolute), links 18px Poppins 300, padding 15px, color `#282828` (active `#a48b65`), 1px separators (`#c4c4c4`-ish grey), active item shows gold underline. Toggle icon switches to close (×) with orange border.

## Hero
- **Time-driven background slideshow**: 3 images (WA0037, WA0040, WA0024), `slide_duration: 5000ms`, `transition: fade`, `transition_duration: 500ms`, loop. `background-size: cover; background-position: 50% 50%`.
- Overlay `rgb(5,5,5)` opacity 0.45.

## Room detail blocks (Room 1/2/3)
- **Image slider** (right/left half): time-driven, `autoplay_speed 3000ms`, `transition: fade`, `transition_speed 500ms`, infinite, pause on hover. No arrows, no dots.
- **"Room Breakdown (click to expand)" accordion** — click-driven. Plus icon (fa-plus, gray `#ffffff99`-ish on gold, 15px) switches to minus when open. Content panel: bg `#000`, padding 20px, 2-column list with white fa-check icons, Poppins 200 16px/26.4px white. Opens with jQuery slideDown (~300ms). Only one open at a time per block (closeothers=true). Section height grows from 483px to 1120px when open.
- ENQUIRE button (black bg `#000`, white text) → #Contact; hover bg `#282828`.

## Room cards ("Our London Therapy Rooms to Rent")
- **Hover (CSS)**: card column gets a background image (cover, center) + overlay at opacity 0.5 (black for dark cards, white for light cards). `transition: background 0.3s, border 0.3s, border-radius 0.3s, box-shadow 0.3s`.
  - Room 1 → WA0038 + black overlay; Room 2 → WA0047 + white overlay; Room 3 → WA0026 + black overlay; Waiting Area → WA0015 + white overlay.
- **"View All Images" button** (gold `#a48b65`, hover `#282828`) → click opens a popup modal:
  - Backdrop `rgba(0,0,0,0.8)`; dialog 640×420, white 10px frame (padding), image slider fills it.
  - Slider: `transition: slide`, speed 500ms, autoplay 3000ms, infinite, arrows + dots (`navigation: both`). Arrows: eicon chevrons 25px `rgba(237,237,237,0.9)`. Dots: 6px, black.
  - Close button: × top-right (top 20px, right 20px), 18px, color `#e28c1f`. ESC and backdrop click close.

## Testimonials
- Testimonial carousel: **time-driven**, 1 slide visible, loop, autoplay 2000ms, speed 500ms, pause on hover/interaction, space between 10px. 7 items (see `src/data/site.ts`).

## Gallery strip (above footer)
- 5-column grid (tablet 2, mobile 1), gap 10px, aspect 4:3 (object-fit cover). Lazyloaded.
- Hover: overlay `rgba(0,0,0,0.5)` fades in (350ms). Click opens lightbox (link_to file) — implement a simple lightbox.

## Contact form
- Fields: First Name / Last Name (50/50), Email, Phone No, Profession, Which room? (select: Select Room, Room 1–3), Detail of your enquiry (textarea). Submit "Send" full-width gold, hover bg `#000`.
- Out of scope: real submission. Show a fake success state.

## Buttons (hover)
- Gold buttons → `#282828` (About, room cards, mission, form Send → `#000`).
- Dark hero ENQUIRE (`#282828`) → `#a48b65`.
- Room ENQUIRE (black) → `#141414`/`#282828`.
- Social icons: top bar orange → white; footer gold → white; contact black → gold.

## Responsive
- Breakpoints (Elementor defaults): tablet ≤1024px, mobile ≤767px.
- Desktop container: sections use 1140px boxed content (margin 0 150px at 1440) or 1240 full-width with 100px padding (header).
- ≤1024: header nav → hamburger.
- ≤767: every multi-column section stacks to 1 column in DOM order. Room blocks: text panel then image (Room 2: image first then text, as DOM order). Testimonial image column hidden. Footer 4 cols → stacked.
