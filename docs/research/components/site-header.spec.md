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

## Exact computed styles (getComputedStyle outline, desktop 1440px)
Format: tag.classes | [widget] | box=x,y,w,h (page coords) | non-default computed props | TEXT/IMG/HREF/SVG. Image paths already mapped to local /images/...

```
# section 0 id= visible=true
section.elementor-section.elementor-top-section.elementor-element | box=0,0,1440,41 | fontSize:16px; fontWeight:200; fontFamily:Poppins, sans-serif; lineHeight:26.4px; color:rgb(40, 40, 40); padding:0px 100px; position:relative; zIndex:10 | SETTINGS={"background_background":"classic"}
  div.elementor-background-overlay | box=0,0,1440,41 | backgroundColor:rgb(0, 0, 0); position:absolute; opacity:0.74
  div.elementor-widget-wrap.elementor-element-populated | box=100,5,620,36 | margin:5px 0px 0px; display:flex; flexWrap:wrap; alignItems:center; position:relative
    div.elementor-element.elementor-icon-list--layout-traditional.elementor-list-item-link-full_width | [icon-list.default] | box=100,11,620,25 | position:relative
      li.elementor-icon-list-item | box=100,11,620,25 | display:flex; alignItems:center; position:relative
        a | box=100,11,620,25 | fontSize:15px; fontWeight:300; lineHeight:24.75px; color:rgb(226, 140, 31); display:flex; alignItems:center | HREF=tel:078%201847%204041
          svg.e-font-icon-svg.e-fas-phone-alt | box=100,15,16,16 | margin:0px 4px 0px 0px; overflow:hidden | SVG=<svg aria-hidden="true" class="e-font-icon-svg e-fas-phone-alt" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="M497.39 361.8l-112-48a24 24 0 0 0-28 6.9l-49.6 60.6A370.66 370.66 0 0 1 130.6 204.11l60.6-49.6a23.94 23.94 0 0 0 6.9-28l-48-112A24.16 24.16 0 0 0 122.6.61l-104 24A24 24 0 0 0 0 48c0 256.5 207.9 464 464 464a24 24 0 0 0 23.4-18.6l24-104a24.29 24.29 0 0 0-14.01-27.6z"></path></svg>
          span.elementor-icon-list-text | box=120,11,103,25 | color:rgb(255, 255, 255); padding:0px 0px 0px 5px | TEXT="078 1847 4041"
  div.elementor-widget-wrap.elementor-element-populated | box=720,5,620,36 | margin:5px 0px 0px; display:flex; flexWrap:wrap; alignItems:center; position:relative
    div.elementor-element.e-grid-align-right.elementor-shape-rounded | [social-icons.default] | box=720,5,620,36 | position:relative
      div.elementor-widget-container | box=720,5,626,36 | textAlign:right; margin:0px -6.1875px 0px 0px
        div.elementor-social-icons-wrapper.elementor-grid | box=720,5,626,36 | display:inline-block; justifyContent:center; gap:0px 5px
          a.elementor-icon.elementor-social-icon.elementor-social-icon-facebook | box=1269,5,36,36 | fontSize:18px; lineHeight:18px; color:rgb(226, 140, 31); textAlign:center; backgroundColor:rgba(255, 255, 255, 0); display:inline-flex; justifyContent:center; alignItems:center; borderRadius:10% | HREF=https://www.facebook.com/share/g/158eL7HqPD/?mibextid=wwXIfr
            span.elementor-screen-only | box=1287,4,1,1 | margin:-1px; overflow:hidden; position:absolute; right:53.3125px; bottom:37px; left:567.688px | TEXT="Facebook"
            svg.e-font-icon-svg.e-fab-facebook | box=1278,14,18,18 | overflow:hidden; position:relative | SVG=<svg aria-hidden="true" class="e-font-icon-svg e-fab-facebook" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z"></path></svg>
          a.elementor-icon.elementor-social-icon.elementor-social-icon-instagram | box=1310,5,36,36 | fontSize:18px; lineHeight:18px; color:rgb(226, 140, 31); textAlign:center; backgroundColor:rgba(255, 255, 255, 0); display:inline-flex; justifyContent:center; alignItems:center; borderRadius:10% | HREF=https://www.instagram.com/therapy_rooms_to_let?igsh=dGduNmoxYm9wc29t
            span.elementor-screen-only | box=1328,4,1,1 | margin:-1px; overflow:hidden; position:absolute; right:12.3125px; bottom:37px; left:608.688px | TEXT="Instagram"
            svg.e-font-icon-svg.e-fab-instagram | box=1319,14,18,18 | overflow:hidden; position:relative | SVG=<svg aria-hidden="true" class="e-font-icon-svg e-fab-instagram" viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg"><path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2```
```
# section 1 id= visible=true
section.elementor-section.elementor-top-section.elementor-element | box=0,41,1440,101 | fontSize:16px; fontWeight:200; fontFamily:Poppins, sans-serif; lineHeight:26.4px; color:rgb(40, 40, 40); padding:0px 100px 4px; position:relative; zIndex:10 | SETTINGS={"background_background":"classic"}
  div.elementor-background-overlay | box=0,41,1440,101 | backgroundColor:rgb(0, 0, 0); position:absolute; opacity:0.5
  div.elementor-widget-wrap.elementor-element-populated | box=100,37,1240,101 | margin:-4px 0px 0px; display:flex; flexWrap:wrap; alignItems:center; position:relative
    section.elementor-section.elementor-inner-section.elementor-element | box=100,39,1240,99 | margin:2px 0px 0px; position:relative
      div.elementor-widget-wrap.elementor-element-populated | box=100,42,298,96 | margin:2.96875px 0px 0px; display:flex; flexWrap:wrap; alignItems:center; position:relative
        div.elementor-element.elementor-widget__width-initial.elementor-widget | [site-logo.default] | box=100,42,244,96 | maxWidth:82%; position:relative
          a.elementor-clickable | box=100,42,244,96 | fontSize:18px; lineHeight:29.7px; color:rgb(226, 140, 31); display:inline | HREF=https://londontherapyroomstorent.com/
            div.hfe-site-logo-container | box=100,42,244,96 | textAlign:left
              img.hfe-site-logo-img.elementor-animation- | box=100,42,161,96 | maxWidth:67%; display:inline; overflow:clip | IMG=/images/2024/09/logo-Copypng-11-11-11-11-300x179.png (300x179) alt="logo - Copypng-11-11-11-11"
      div.elementor-widget-wrap.elementor-element-populated | box=398,39,942,99 | display:flex; flexWrap:wrap; alignItems:center; position:relative
        div.elementor-element.elementor-widget__width-initial.hfe-nav-menu__align-left | [navigation-menu.default] | box=398,65,939,48 | maxWidth:99.635%; position:relative
          div.hfe-nav-menu.hfe-layout-horizontal.hfe-nav-menu-layout | box=398,65,939,48 | display:flex; flexDirection:column; justifyContent:flex-start
            div.hfe-nav-menu__toggle.elementor-clickable | box=0,0,0,0 | fontSize:22px; lineHeight:22px; color:rgb(73, 76, 79); margin:0px 0px 0px auto; borderRadius:3px; position:relative; opacity:0
              span.screen-reader-text | box=0,0,0,0 | margin:-1px; overflow:hidden; position:absolute | TEXT="Menu"
              div.hfe-nav-menu-icon | box=0,0,0,0 | color:rgb(226, 140, 31); textAlign:center; padding:7.7px; display:inline-block
                svg.e-font-icon-svg.e-fas-align-justify | box=0,0,0,0 | fontSize:25px; lineHeight:25px; display:inline; overflow:hidden | SVG=<svg aria-hidden="true" class="e-font-icon-svg e-fas-align-justify" viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg"><path d="M432 416H16a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h416a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16zm0-128H16a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h416a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16zm0-128H16a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h416a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16zm0-128H16A16 16 0 0 0 0 48v32a16 16 0 0 0 16 16h416a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16z"></path></svg>
            ul.hfe-nav-menu | box=398,65,797,48 | margin:0px 141.656px 0px 0px; display:flex; flexWrap:wrap; justifyContent:flex-start
              li.menu-item.menu-item-type-post_type.menu-item-object-page | box=398,65,83,48 | fontSize:16px; lineHeight:26.4px; margin:0px 15px 0px 0px; display:list-item; position:relative
                a.hfe-menu-item | box=398,65,83,48 | fontSize:18px; fontWeight:300; lineHeight:18px; color:rgb(164, 139, 101); padding:15px; display:flex; justifyContent:space-between; alignItems:center | TEXT="Home" | HREF=https://londontherapyroomstorent.com/
              li.menu-item.menu-item-type-post_type.menu-item-object-page | box=496,65,109,48 | fontSize:16px; lineHeight:26.4px; margin:0px 15px 0px 0px; display:list-item; position:relative
                a.hfe-menu-item | box=496,65,109,48 | fontSize:18px; fontWeight:300; lineHeight:18px; color:rgb(255, 255, 255); padding:15px; display:flex; justifyContent:space-between; alignItems:center | TEXT="About Us" | HREF=https://londontherapyroomstorent.com/about/
              li.menu-item.menu-item-type-custom.menu-item-object-custom | box=620,65,91,48 | fontSize:16px; lineHeight:26.4px; margin:0px 15px 0px 0px; display:list-item; position:relative
                a.hfe-menu-item | box=620,65,91,48 | fontSize:18px; fontWeight:300; lineHeight:18px; color:rgb(255, 255, 255); padding:15px; display:flex; justifyContent:space-between; alignItems:center | TEXT="Rooms" | HREF=https://londontherapyroomstorent.com/#Rooms
              li.menu-item.menu-item-type-custom.menu-item-object-custom | box=727,65,178,48 | fontSize:16px; lineHeight:26.4px; margin:0px 15px 0px 0px; display:list-item; position:relative
                a.hfe-menu-item | box=727,65,178,48 | fontSize:18px; fontWeight:300; lineHeight:18px; color:rgb(255, 255, 255); padding:15px; display:flex; justifyContent:space-between; alignItems:center | TEXT="Our Practitioners" | HREF=https://londontherapyroomstorent.com/#PRACTITIONERS
              li.menu-item.menu-item-type-custom.menu-item-object-custom | box=919,65,132,48 | fontSize:16px; lineHeight:26.4px; margin:0px 15px 0px 0px; display:list-item; position:relative
                a.hfe-menu-item | box=919,65,132,48 | fontSize:18px; fontWeight:300; lineHeight:18px; color:rgb(255, 255, 255); padding:15px; display:flex; justifyContent:space-between; alignItems:center | TEXT="Our Mission" | HREF=https://londontherapyroomstorent.com/#vision
              li.menu-item.menu-item-type-custom.menu-item-object-custom | box=1066,65,129,48 | fontSize:16px; lineHeight:26.4px; display:list-item; position:relative
                a.hfe-menu-item | box=1066,65,129,48 | fontSize:18px; fontWeight:300; lineHeight:18px; color:rgb(255, 255, 255); padding:15px; display:flex; justifyContent:space-between; alignItems:center | TEXT="Contact Us" | HREF=https://londontherapyroomstorent.com/#Contact```
