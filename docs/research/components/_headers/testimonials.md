# Testimonials Specification (feedback band + carousel)

## Overview
- **Target file:** `src/components/Testimonials.tsx` (client)
- **Screenshots:** `docs/design-references/section-20.png` (feedback band), `section-21.png` (carousel + photo)
- **Interaction model:** time-driven carousel (autoplay 2000ms, slide 500ms, loop, pause on hover).
- **Raw sections:** 20 (band), 21 (carousel)

## Feedback band (raw 20)
- Full-width bg `#282828`, height 159px at 1440. Container 1140; left col 458px, right col 682px (vertically centered row, top 7149 → band has ~40px top padding).
- Left: "Positive Feedback" Poppins italic 500 ~18px `#e28c1f`; "from other practitioners" Poppins italic 500 ~28px white (see outline).
- Right: body text Open Sans 300 ~15px/26px white (`FEEDBACK.body`).

## Carousel row (raw 21)
- Margin-top ~42px after band. Row spans x 21→1419 (≈1398px wide, almost full width): left col 563px dark panel (bg `#282828`, height 347px), right col 835px image (`TESTIMONIAL_SIDE_IMAGE` — verify in outline; it is the waiting-area photo, cover/center).
- Testimonial slide (centered in dark panel, text white):
  - Optional title (bold).
  - Quote: Poppins italic 300 ~15px/24px white, centered, max-width ~380px.
  - Name: Poppins 700 ~13px white; date: Poppins 300 ~13px white.
- Carousel: one slide visible, horizontal slide transition 500ms, autoplay every 2000ms, infinite, pause on hover. No arrows/dots visible (verify outline for pagination).
- Content: `TESTIMONIALS` in data order.

## Responsive
- ≤767: band stacks (heading block then text, padding 30px); carousel panel full width ~622px tall dark, image column hidden.
