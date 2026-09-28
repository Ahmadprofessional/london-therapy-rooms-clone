# SiteHeader Specification

## Overview
- **Target file:** `src/components/SiteHeader.tsx` (client component)
- **Screenshots:** `docs/design-references/section-00.png` (top bar), `section-01.png` (nav), `nav-hover.png`, `mobile-header.png`, `mobile-menu-open.png`, `header-scroll-0.png`
- **Interaction model:** static layout; hover on nav links + social icons; click-driven hamburger menu below 1025px. NOT sticky — scrolls away with page (verified at scrollY 0/150/600).
- **Raw sections:** 00 (top bar), 01 (nav bar)

## DOM Structure
`<header>` containing two full-width bars, both `position: relative; z-index: 10`, stacked. The hero that follows has `margin-top: -170px` so both bars sit on top of the hero photo (their backgrounds are semi-transparent black overlays).
1. **Top bar** (h 41px, padding 0 100px): absolute overlay div bg `#000` opacity 0.74. Inner 1240px row, two 50% columns (margin-top 5px, align center):
   - Left: phone link (`tel:078%201847%204041`): phone-alt SVG 16×16 (color `#e28c1f`, margin-right 4px, in a 20px-wide span) + text "078 1847 4041" white, Poppins 300 15px/24.75px, padding-left 5px.
   - Right (text-align right): Facebook + Instagram icons, each 36×36 inline-flex centered, icon 18px, color `#e28c1f`, bg transparent, radius 10%, gap 5px. Hover: color `#fff`.
2. **Nav bar** (h ≈101px, padding 0 100px 4px): overlay bg `#000` opacity 0.5. Row: logo column 297.6px wide (24% of 1240), nav column rest.
   - Logo: `LOGO` from data, rendered 161×96 (max-width 67% of 244px widget), link to `/`.
   - Menu: ul flex, items margin-right 15px (last 0). Links: Poppins 300 18px/18px, padding 15px, color white, height 48px. Active "Home": color `#a48b65`.
   - Underline pseudo: `::after` 3px tall, bg `#a48b65`, at bottom of link. Default opacity 0 width 10px; hover → opacity 1, width 100%. Active link always full-width, opacity 1. `transition: 0.2s linear`.

## Mobile (< 1025px)
- Menu list hidden; hamburger toggle shown at the right (margin-left auto): MenuIcon 25px, color `#e28c1f`, padding 7.7px.
- Click → toggle icon becomes CloseIcon with a 2px `#e28c1f` border box; a dropdown panel appears (position absolute, below the toggle, left aligned with column, ~165px wide at 390, z-index high): bg `#fff`, each link Poppins 300 18px, padding 15px, color `#282828`, separated by 1px `#c4c4c4` lines; active "Home" color `#a48b65` with a 3px gold bottom border. Clicking a link closes the menu.
- At 390: top bar padding 0 30px (columns 165 each), phone text 18px; nav bar logo left, toggle below/right (see mobile-header.png). Logo ~ 90px wide.

## States & Behaviors
- Nav link hover: underline grows (see above), color stays white.
- Social icons hover: `#e28c1f` → `#ffffff`.
- Phone link hover: icon color → `#282828` (from hover rules).

## Content
Use `NAV_LINKS`, `SOCIAL_LINKS`, `PHONE_MOBILE`, `PHONE_MOBILE_HREF`, `LOGO` from `@/data/site`. Icons: `PhoneAltIcon, FacebookIcon, InstagramIcon, MenuIcon, CloseIcon` from `@/components/icons`.

## Responsive
- Desktop 1440: as above. Tablet ≤1024: hamburger. Mobile 390: bars padding 0 30px.
