# SiteFooter + ScrollToTop Specification

## Overview
- **Target files:** `src/components/SiteFooter.tsx`, `src/components/ScrollToTop.tsx` (client)
- **Screenshots:** `docs/design-references/section-25.png` (footer), `section-26.png` (copyright), `room1-accordion-open.png` (scroll-to-top visible at right)
- **Interaction model:** static + hover; scroll-to-top appears on scroll.
- **Raw sections:** 25 (footer), 26 (copyright bar)

## Footer (raw 25)
- Full width bg `#282828`, height 307px at 1440; content row at y+70 (padding ~70px top). Container 1140 (x 150→1290), 4 columns: 347 / 223 / 328 / 242px.
  1. Logo (`LOGO`, ~180px wide), address text (Poppins 300 ~12px white), social icons (gold `#a48b65` ~16px; hover white).
  2. "Quicklinks" heading Poppins 600 ~15px white; vertical menu (`NAV_LINKS`, Poppins 300 ~12px white, line gap ~20px; "Home" active in `#a48b65`; hover gold).
  3. "Contact Us" heading; icon list (MapMarkerIcon + ADDRESS → MAPS_HREF, PhoneAltIcon + PHONE_LANDLINE, MobileAltIcon + PHONE_MOBILE, EnvelopeIcon + EMAIL), Poppins 300 ~14px white, icons white ~12px.
  4. Empty column.
- Note: the NAV "About Us" link goes to the external about page.

## Copyright (raw 26)
- bg `#282828`, height 71px. Divider line (1px, light grey/white ~ `#ffffff` 40%?) across container, then "© Copyright digi focus. Alright Reserved" Poppins 300 ~13px white, left aligned.

## ScrollToTop
- Fixed bottom 30px right 30px (verify from screenshot: small square ~30×30), bg `#046bd2`, radius 2px, white ScrollTopArrowIcon rotated 180° (~15px). Hidden at top; shown after scrollY > 300 (fade). Click → smooth scroll to top.

## Responsive
- ≤767: columns stack, padding 0 30px; col 4 hidden; copyright centered.
