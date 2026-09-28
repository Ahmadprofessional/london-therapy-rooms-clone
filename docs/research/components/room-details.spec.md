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

## Exact computed styles (getComputedStyle outline, desktop 1440px)
Format: tag.classes | [widget] | box=x,y,w,h (page coords) | non-default computed props | TEXT/IMG/HREF/SVG. Image paths already mapped to local /images/...

```
# section 4 id=Rooms visible=true
section.elementor-section.elementor-top-section.elementor-element | box=0,1151,1440,158 | fontSize:16px; fontWeight:200; fontFamily:Poppins, sans-serif; lineHeight:26.4px; color:rgb(40, 40, 40); margin:0px 0px 50px; position:relative | SETTINGS={"animation":"fadeIn"}
  div.elementor-container.elementor-column-gap-default | box=150,1151,1140,158 | margin:0px 150px; maxWidth:1140px; display:flex; position:relative
    div.elementor-widget-wrap.elementor-element-populated | box=150,1151,1140,158 | padding:10px; display:flex; flexWrap:wrap; position:relative
      div.elementor-element.elementor-widget.elementor-widget-heading | [heading.default] | box=160,1161,1120,43 | textAlign:center; margin:0px 0px 20px; position:relative
        h2.elementor-heading-title.elementor-size-default | box=160,1161,1120,43 | fontSize:33px; fontWeight:500; fontStyle:italic; lineHeight:42.9px; color:rgb(0, 0, 0) | TEXT="CONSULTING ROOMS"
      div.elementor-element.elementor-widget.elementor-widget-heading | [heading.default] | box=160,1224,1120,75 | textAlign:center; position:relative
        div.elementor-widget-container | box=160,1213,1120,86 | margin:-11.1875px 0px 0px
          h2.elementor-heading-title.elementor-size-default | box=160,1213,1120,86 | fontSize:22px; fontWeight:500; fontStyle:italic; lineHeight:28.6px; color:rgb(0, 0, 0) | TEXT="AVAILABLE FOR PRACTITIONERS
Treatment & London Therapy rooms to rent available
from as low as £25 per hour or Full-time options are also available"```
```
# section 5 id= visible=true
section.elementor-section.elementor-top-section.elementor-element | box=0,1379,1440,483 | fontSize:16px; fontWeight:200; fontFamily:Poppins, sans-serif; lineHeight:26.4px; color:rgb(40, 40, 40); margin:70px 0px; position:relative | SETTINGS={"animation":"fadeIn"}
  div.elementor-container.elementor-column-gap-no | box=170,1379,1100,483 | maxWidth:1100px; display:flex; position:relative
    div.elementor-widget-wrap.elementor-element-populated | box=170,1379,550,483 | backgroundColor:rgb(164, 139, 101); padding:36px 70px 23px; display:flex; flexWrap:wrap; position:relative
      div.elementor-element.elementor-widget.elementor-widget-heading | [heading.default] | box=240,1415,410,26 | margin:0px 0px 20px; position:relative
        h3.elementor-heading-title.elementor-size-default | box=240,1415,410,26 | fontSize:20px; fontWeight:500; lineHeight:26px; color:rgb(0, 0, 0) | TEXT="Room 1 Dimensions"
      div.elementor-element.elementor-widget.elementor-widget-heading | [heading.default] | box=240,1461,410,0 | margin:0px 0px 20px; position:relative
        div.elementor-widget-container | box=240,1436,410,22 | margin:-24.5938px 0px 0px
          h3.elementor-heading-title.elementor-size-default | box=240,1436,410,22 | fontSize:17px; fontWeight:500; lineHeight:22.1px; color:rgb(255, 255, 255) | TEXT="4.71m x 3.41m"
      div.elementor-element.elementor-widget.elementor-widget-heading | [heading.default] | box=240,1481,410,18 | margin:0px 0px 20px; position:relative
        div.elementor-widget-container | box=240,1473,410,26 | margin:-8.1875px 0px 0px
          h3.elementor-heading-title.elementor-size-default | box=240,1473,410,26 | fontSize:20px; fontWeight:500; lineHeight:26px; color:rgb(0, 0, 0) | TEXT="Suitable For"
      div.elementor-element.elementor-widget__width-initial.elementor-icon-list--layout-traditional | [icon-list.default] | box=240,1519,367,95 | maxWidth:89.539%; position:relative
        div.elementor-widget-container | box=240,1508,367,106 | margin:-11px 0px 0px
          li.elementor-icon-list-item | box=240,1508,367,26 | display:flex; alignItems:center; position:relative
            svg.e-font-icon-svg.e-far-dot-circle | box=240,1514,14,14 | margin:0px 3.5px 0px 0px; overflow:hidden | SVG=<svg aria-hidden="true" class="e-font-icon-svg e-far-dot-circle" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="M256 56c110.532 0 200 89.451 200 200 0 110.532-89.451 200-200 200-110.532 0-200-89.451-200-200 0-110.532 89.451-200 200-200m0-48C119.033 8 8 119.033 8 256s111.033 248 248 248 248-111.033 248-248S392.967 8 256 8zm0 168c-44.183 0-80 35.817-80 80s35.817 80 80 80 80-35.817 80-80-35.817-80-80-80z"></path></svg>
            span.elementor-icon-list-text | box=258,1508,97,26 | color:rgb(255, 255, 255); padding:0px 0px 0px 5px | TEXT="Osteopathy"
          li.elementor-icon-list-item | box=240,1534,367,26 | display:flex; alignItems:center; position:relative
            svg.e-font-icon-svg.e-far-dot-circle | box=240,1540,14,14 | margin:0px 3.5px 0px 0px; overflow:hidden | SVG=<svg aria-hidden="true" class="e-font-icon-svg e-far-dot-circle" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="M256 56c110.532 0 200 89.451 200 200 0 110.532-89.451 200-200 200-110.532 0-200-89.451-200-200 0-110.532 89.451-200 200-200m0-48C119.033 8 8 119.033 8 256s111.033 248 248 248 248-111.033 248-248S392.967 8 256 8zm0 168c-44.183 0-80 35.817-80 80s35.817 80 80 80 80-35.817 80-80-35.817-80-80-80z"></path></svg>
            span.elementor-icon-list-text | box=258,1534,115,26 | color:rgb(255, 255, 255); padding:0px 0px 0px 5px | TEXT="Physiotherapy"
          li.elementor-icon-list-item | box=240,1560,367,26 | display:flex; alignItems:center; position:relative
            svg.e-font-icon-svg.e-far-dot-circle | box=240,1567,14,14 | margin:0px 3.5px 0px 0px; overflow:hidden | SVG=<svg aria-hidden="true" class="e-font-icon-svg e-far-dot-circle" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="M256 56c110.532 0 200 89.451 200 200 0 110.532-89.451 200-200 200-110.532 0-200-89.451-200-200 0-110.532 89.451-200 200-200m0-48C119.033 8 8 119.033 8 256s111.033 248 248 248 248-111.033 248-248S392.967 8 256 8zm0 168c-44.183 0-80 35.817-80 80s35.817 80 80 80 80-35.817 80-80-35.817-80-80-80z"></path></svg>
            span.elementor-icon-list-text | box=258,1560,127,26 | color:rgb(255, 255, 255); padding:0px 0px 0px 5px | TEXT="Beauty Therapy"
          li.elementor-icon-list-item | box=240,1587,367,26 | display:flex; alignItems:center; position:relative
            svg.e-font-icon-svg.e-far-dot-circle | box=240,1593,14,14 | margin:0px 3.5px 0px 0px; overflow:hidden | SVG=<svg aria-hidden="true" class="e-font-icon-svg e-far-dot-circle" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="M256 56c110.532 0 200 89.451 200 200 0 110.532-89.451 200-200 200-110.532 0-200-89.451-200-200 0-110.532 89.451-200 200-200m0-48C119.033 8 8 119.033 8 256s111.033 248 248 248 248-111.033 248-248S392.967 8 256 8zm0 168c-44.183 0-80 35.817-80 80s35.817 80 80 80 80-35.817 80-80-35.817-80-80-80z"></path></svg>
            span.elementor-icon-list-text | box=258,1587,171,26 | color:rgb(255, 255, 255); padding:0px 0px 0px 5px | TEXT="Aesthetic Treatments"
      div.elementor-element.elementor-widget__width-initial.elementor-icon-list--layout-traditional | [icon-list.default] | box=240,1613,378,106 | maxWidth:92.273%; position:relative
        li.elementor-icon-list-item | box=240,1613,378,26 | display:flex; alignItems:center; position:relative
          svg.e-font-icon-svg.e-far-dot-circle | box=240,1619,14,14 | margin:0px 3.5px 0px 0px; overflow:hidden | SVG=<svg aria-hidden="true" class="e-font-icon-svg e-far-dot-circle" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="M256 56c110.532 0 200 89.451 200 200 0 110.532-89.451 200-200 200-110.532 0-200-89.451-200-200 0-110.532 89.451-200 200-200m0-48C119.033 8 8 119.033 8 256s111.033 248 248 248 248-111.033 248-248S392.967 8 256 8zm0 168c-44.183 0-80 35.817-80 80s35.817 80 80 80 80-35.817 80-80-35.817-80-80-80z"></path></svg>
          span.elementor-icon-list-text | box=258,1613,144,26 | color:rgb(255, 255, 255); padding:0px 0px 0px 5px | TEXT="Massage Therapy"
        li.elementor-icon-list-item | box=240,1640,378,26 | display:flex; alignItems:center; position:relative
          svg.e-font-icon-svg.e-far-dot-circle | box=240,1646,14,14 | margin:0px 3.5px 0px 0px; overflow:hidden | SVG=<svg aria-hidden="true" class="e-font-icon-svg e-far-dot-circle" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="M256 56c110.532 0 200 89.451 200 200 0 110.532-89.451 200-200 200-110.532 0-200-89.451-200-200 0-110.532 89.451-200 200-200m0-48C119.033 8 8 119.033 8 256s111.033 248 248 248 248-111.033 248-248S392.967 8 256 8zm0 168c-44.183 0-80 35.817-80 80s35.817 80 80 80 80-35.817 80-80-35.817-80-80-80z"></path></svg>
          span.elementor-icon-list-text | box=258,1640,151,26 | color:rgb(255, 255, 255); padding:0px 0px 0px 5px | TEXT="Nutritional Therapy"
        li.elementor-icon-list-item | box=240,1666,378,26 | display:flex; alignItems:center; position:relative
          svg.e-font-icon-svg.e-far-dot-circle | box=240,1672,14,14 | margin:0px 3.5px 0px 0px; overflow:hidden | SVG=<svg aria-hidden="true" class="e-font-icon-svg e-far-dot-circle" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="M256 56c110.532 0 200 89.451 200 200 0 110.532-89.451 200-200 200-110.532 0-200-89.451-200-200 0-110.532 89.451-200 200-200m0-48C119.033 8 8 119.033 8 256s111.033 248 248 248 248-111.033 248-248S392.967 8 256 8zm0 168c-44.183 0-80 35.817-80 80s35.817 80 80 80 80-35.817 80-80-35.817-80-80-80z"></path></svg>
          span.elementor-icon-list-text | box=258,1666,165,26 | color:rgb(255, 255, 255); padding:0px 0px 0px 5px | TEXT="Medical Consultants"
        li.elementor-icon-list-item | box=240,1692,378,26 | display:flex; alignItems:center; position:relative
          svg.e-font-icon-svg.e-far-dot-circle | box=240,1699,14,14 | margin:0px 3.5px 0px 0px; overflow:hidden | SVG=<svg aria-hidden="true" class="e-font-icon-svg e-far-dot-circle" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="M256 56c110.532 0 200 89.451 200 200 0 110.532-89.451 200-200 200-110.532 0-200-89.451-200-200 0-110.532 89.451-200 200-200m0-48C119.033 8 8 119.033 8 256s111.033 248 248 248 248-111.033 248-248S392.967 8 256 8zm0 168c-44.183 0-80 35.817-80 80s35.817 80 80 80 80-35.817 80-80-35.817-80-80-80z"></path></svg>
          span.elementor-icon-list-text | box=258,1692,161,26 | color:rgb(255, 255, 255); padding:0px 0px 0px 5px | TEXT="Functional Medicine"
      div.elementor-element.elementor-widget__width-initial.elementor-widget | [ucaddon_uc_icon_accordion.default] | box=240,1719,410,50 | maxWidth:111.908%; position:relative
        div.elementor-widget-container | box=240,1727,410,42 | margin:8.1875px 0px 0px
          div.uc_ac_box.elementor-repeater-item-3b96039 | box=240,1727,410,42 | overflow:hidden
            div.uc-heading.uc_trigger | box=240,1727,410,42 | display:flex; alignItems:center
              div.ue_title | box=240,1736,353,25 | fontSize:15px; fontWeight:600; lineHeight:24.75px; color:rgb(0, 0, 0) | TEXT="Room Breakdown (click to expand)"
              div.ue_expand_inside | box=608,1727,42,42 | lineHeight:16px; color:rgb(191, 191, 191); display:flex; justifyContent:center; alignItems:center
                i.fas.fa-plus | box=622,1739,14,16 | fontWeight:900; fontFamily:"Font Awesome 6 Free"; display:inline-block | ICON=fas fa-plus
                i.fas.fa-minus | box=0,0,0,0 | fontWeight:900; fontFamily:"Font Awesome 6 Free"; display:inline-block | ICON=fas fa-minus
            div.uc_content | box=0,0,0,0 | color:rgb(255, 255, 255); backgroundColor:rgb(0, 0, 0); padding:20px
              div.elementor-container.elementor-column-gap-default | box=0,0,0,0 | margin:0px auto; maxWidth:1140px; display:flex; position:relative
                div.elementor-widget-wrap.elementor-element-populated | box=0,0,0,0 | padding:10px; display:flex; flexWrap:wrap; position:relative
                div.elementor-widget-wrap.elementor-element-populated | box=0,0,0,0 | padding:10px; display:flex; flexWrap:wrap; position:relative
      div.elementor-element.elementor-button-info.elementor-align-left | [button.default] | box=240,1769,410,66 | textAlign:left; position:relative
        div.elementor-widget-container | box=240,1789,410,46 | margin:20px 0px 0px
          a.elementor-button.elementor-button-link.elementor-size-sm | box=240,1789,126,46 | fontWeight:500; lineHeight:16px; color:rgb(255, 255, 255); textAlign:center; backgroundColor:rgb(0, 0, 0); padding:15px 30px; display:inline-block; borderRadius:5px | HREF=https://londontherapyroomstorent.com/#Contact
            span.elementor-button-content-wrapper | box=270,1804,66,16 | display:flex; justifyContent:center; gap:5px
              span.elementor-button-text | box=270,1804,66,16 |  | TEXT="ENQUIRE"
    div.elementor-widget-wrap.elementor-element-populated.e-swiper-container | box=720,1379,550,483 | display:flex; flexWrap:wrap; position:relative
      div.elementor-element.elementor--h-position-center.elementor--v-position-middle | [slides.default] | box=720,1379,550,483 | position:relative; zIndex:10
        div.elementor-slides-wrapper.elementor-main-swiper.swiper | box=720,1379,550,483 | overflow:hidden; zIndex:1
          div.swiper-wrapper.elementor-slides | box=720,1379,550,483 | display:flex; position:relative; zIndex:1; transform:matrix(1, 0, 0, 1, 0, 0)
            div.elementor-repeater-item-2fa0381.swiper-slide.swiper-slide-duplicate | box=720,1379,550,483 | overflow:hidden; position:relative; opacity:0; transform:matrix(1, 0, 0, 1, 0, 0)
              div.swiper-slide-bg | box=720,1379,550,483 | backgroundImage:url("/images/2024/08/IMG-20240826-WA0037.jpg"); backgroundSize:cover; backgroundPosition:50% 50%; minHeight:100%
              div.swiper-slide-inner | box=720,1379,550,483 | color:rgb(255, 255, 255); textAlign:center; backgroundPosition:50% 50%; padding:50px; display:flex; justifyContent:center; alignItems:center; position:absolute
                div.swiper-slide-contents.animated.fadeInUp | box=995,1620,0,0 | maxWidth:66%; opacity:0.621369; transform:matrix(1, 0, 0, 1, 0, 0)
            div.elementor-repeater-item-bd50e0a.swiper-slide.swiper-slide-duplicate | box=720,1379,550,483 | overflow:hidden; position:relative; opacity:0; transform:matrix(1, 0, 0, 1, -550, 0)
              div.swiper-slide-bg | box=720,1379,550,483 | backgroundImage:url("/images/2024/08/IMG-20240826-WA0027.jpg"); backgroundSize:cover; backgroundPosition:50% 50%; minHeight:100%
              div.swiper-slide-inner | box=720,1379,550,483 | color:rgb(255, 255, 255); textAlign:center; backgroundPosition:50% 50%; padding:50px; display:flex; justifyContent:center; alignItems:center; position:absolute
                div.swiper-slide-contents.animated.fadeInUp | box=995,1620,0,0 | maxWidth:66%; opacity:0.621369; transform:matrix(1, 0, 0, 1, 0, 0)
            div.elementor-repeater-item-bb1d340.swiper-slide.swiper-slide-duplicate | box=720,1379,550,483 | overflow:hidden; position:relative; opacity:0; transform:matrix(1, 0, 0, 1, -1100, 0)
              div.swiper-slide-bg | box=720,1379,550,483 | backgroundImage:url("/images/2024/08/IMG-20240826-WA0025.jpg"); backgroundSize:cover; backgroundPosition:50% 50%; minHeight:100%
              div.swiper-slide-inner | box=720,1379,550,483 | color:rgb(255, 255, 255); textAlign:center; backgroundPosition:50% 50%; padding:50px; display:flex; justifyContent:center; alignItems:center; position:absolute
                div.swiper-slide-contents.animated.fadeInUp | box=995,1620,0,0 | maxWidth:66%; opacity:0.621369; transform:matrix(1, 0, 0, 1, 0, 0)
            div.elementor-repeater-item-706ab2a.swiper-slide.swiper-slide-duplicate | box=720,1379,550,483 | overflow:hidden; position:relative; opacity:0; transform:matrix(1, 0, 0, 1, -1650, 0)
              div.swiper-slide-bg | box=720,1379,550,483 | backgroundImage:url("/images/2024/08/IMG-20240826-WA0038.jpg"); backgroundSize:cover; backgroundPosition:50% 50%; minHeight:100%
              div.swiper-slide-inner | box=720,1379,550,483 | color:rgb(255, 255, 255); textAlign:center; backgroundPosition:50% 50%; padding:50px; display:flex; justifyContent:center; alignItems:center; position:absolute
                div.swiper-slide-contents.animated.fadeInUp | box=995,1620,0,0 | maxWidth:66%; opacity:0.621369; transform:matrix(1, 0, 0, 1, 0, 0)
            div.elementor-repeater-item-2fa0381.swiper-slide | box=720,1379,550,483 | overflow:hidden; position:relative; opacity:0; transform:matrix(1, 0, 0, 1, -2200, 0)
              div.swiper-slide-bg | box=720,1379,550,483 | backgroundImage:url("/images/2024/08/IMG-20240826-WA0037.jpg"); backgroundSize:cover; backgroundPosition:50% 50%; minHeight:100%
              div.swiper-slide-inner | box=720,1379,550,483 | color:rgb(255, 255, 255); textAlign:center; backgroundPosition:50% 50%; padding:50px; display:flex; justifyContent:center; alignItems:center; position:absolute
                div.swiper-slide-contents.animated.fadeInUp | box=995,1620,0,0 | maxWidth:66%; opacity:0.621369; transform:matrix(1, 0, 0, 1, 0, 0)
            div.elementor-repeater-item-bd50e0a.swiper-slide.swiper-slide-prev | box=720,1379,550,483 | overflow:hidden; position:relative; opacity:0; transform:matrix(1, 0, 0, 1, -2750, 0)
              div.swiper-slide-bg | box=720,1379,550,483 | backgroundImage:url("/images/2024/08/IMG-20240826-WA0027.jpg"); backgroundSize:cover; backgroundPosition:50% 50%; minHeight:100%
              div.swiper-slide-inner | box=720,1379,550,483 | color:rgb(255, 255, 255); textAlign:center; backgroundPosition:50% 50%; padding:50px; display:flex; justifyContent:center; alignItems:center; position:absolute
                div.swiper-slide-contents.animated.fadeInUp | box=995,1620,0,0 | maxWidth:66%; opacity:0.621369; transform:matrix(1, 0, 0, 1, 0, 0)
            div.elementor-repeater-item-bb1d340.swiper-slide.swiper-slide-visible | box=720,1379,550,483 | overflow:hidden; position:relative; transform:matrix(1, 0, 0, 1, -3300, 0)
              div.swiper-slide-bg.elementor-ken-burns--active | box=720,1379,550,483 | backgroundImage:url("/images/2024/08/IMG-20240826-WA0025.jpg"); backgroundSize:cover; backgroundPosition:50% 50%; minHeight:100%
              div.swiper-slide-inner | box=720,1379,550,483 | color:rgb(255, 255, 255); textAlign:center; backgroundPosition:50% 50%; padding:50px; display:flex; justifyContent:center; alignItems:center; position:absolute
                div.swiper-slide-contents.animated.fadeInUp | box=995,1620,0,0 | maxWidth:66%; opacity:0.621369; transform:matrix(1, 0, 0, 1, 0, 0)
            div.elementor-repeater-item-706ab2a.swiper-slide.swiper-slide-next | box=720,1379,550,483 | overflow:hidden; position:relative; opacity:0; transform:matrix(1, 0, 0, 1, -3850, 0)
              div.swiper-slide-bg | box=720,1379,550,483 | backgroundImage:url("/images/2024/08/IMG-20240826-WA0038.jpg"); backgroundSize:cover; backgroundPosition:50% 50%; minHeight:100%
              div.swiper-slide-inner | box=720,1379,550,483 | color:rgb(255, 255, 255); textAlign:center; backgroundPosition:50% 50%; padding:50px; display:flex; justifyContent:center; alignItems:center; position:absolute
                div.swiper-slide-contents.animated.fadeInUp | box=995,1620,0,0 | maxWidth:66%; opacity:0.621369; transform:matrix(1, 0, 0, 1, 0, 0)
            div.elementor-repeater-item-2fa0381.swiper-slide.swiper-slide-duplicate | box=720,1379,550,483 | overflow:hidden; position:relative; opacity:0; transform:matrix(1, 0, 0, 1, -4400, 0)
              div.swiper-slide-bg | box=720,1379,550,483 | backgroundImage:url("/images/2024/08/IMG-20240826-WA0037.jpg"); backgroundSize:cover; backgroundPosition:50% 50%; minHeight:100%
              div.swiper-slide-inner | box=720,1379,550,483 | color:rgb(255, 255, 255); textAlign:center; backgroundPosition:50% 50%; padding:50px; display:flex; justifyContent:center; alignItems:center; position:absolute
                div.swiper-slide-contents.animated.fadeInUp | box=995,1620,0,0 | maxWidth:66%; opacity:0.621369; transform:matrix(1, 0, 0, 1, 0, 0)
            div.elementor-repeater-item-bd50e0a.swiper-slide.swiper-slide-duplicate | box=720,1379,550,483 | overflow:hidden; position:relative; opacity:0; transform:matrix(1, 0, 0, 1, -4950, 0)
              div.swiper-slide-bg | box=720,1379,550,483 | backgroundImage:url("/images/2024/08/IMG-20240826-WA0027.jpg"); backgroundSize:cover; backgroundPosition:50% 50%; minHeight:100%
              div.swiper-slide-inner | box=720,1379,550,483 | color:rgb(255, 255, 255); textAlign:center; backgroundPosition:50% 50%; padding:50px; display:flex; justifyContent:center; alignItems:center; position:absolute
                div.swiper-slide-contents.animated.fadeInUp | box=995,1620,0,0 | maxWidth:66%; opacity:0.621369; transform:matrix(1, 0, 0, 1, 0, 0)
            div.elementor-repeater-item-bb1d340.swiper-slide.swiper-slide-duplicate | box=720,1379,550,483 | overflow:hidden; position:relative; opacity:0; transform:matrix(1, 0, 0, 1, -5500, 0)
              div.swiper-slide-bg | box=720,1379,550,483 | backgroundImage:url("/images/2024/08/IMG-20240826-WA0025.jpg"); backgroundSize:cover; backgroundPosition:50% 50%; minHeight:100%
              div.swiper-slide-inner | box=720,1379,550,483 | color:rgb(255, 255, 255); textAlign:center; backgroundPosition:50% 50%; padding:50px; display:flex; justifyContent:center; alignItems:center; position:absolute
                div.swiper-slide-contents.animated.fadeInUp | box=995,1620,0,0 | maxWidth:66%; opacity:0.621369; transform:matrix(1, 0, 0, 1, 0, 0)
            div.elementor-repeater-item-706ab2a.swiper-slide.swiper-slide-duplicate | box=720,1379,550,483 | overflow:hidden; position:relative; opacity:0; transform:matrix(1, 0, 0, 1, -6050, 0)
              div.swiper-slide-bg | box=720,1379,550,483 | backgroundImage:url("/images/2024/08/IMG-20240826-WA0038.jpg"); backgroundSize:cover; backgroundPosition:50% 50%; minHeight:100%
              div.swiper-slide-inner | box=720,1379,550,483 | color:rgb(255, 255, 255); textAlign:center; backgroundPosition:50% 50%; padding:50px; display:flex; justifyContent:center; alignItems:center; position:absolute
                div.swiper-slide-contents.animated.fadeInUp | box=995,1620,0,0 | maxWidth:66%; opacity:0.621369; transform:matrix(1, 0, 0, 1, 0, 0)
          span.swiper-notification | box=720,1379,0,0 | position:absolute; right:550px; bottom:483px; zIndex:-1000; opacity:0```
```
# section 7 id= visible=true
section.elementor-section.elementor-top-section.elementor-element | box=0,1932,1440,483 | fontSize:16px; fontWeight:200; fontFamily:Poppins, sans-serif; lineHeight:26.4px; color:rgb(40, 40, 40); margin:70px 0px; position:relative | SETTINGS={"animation":"fadeIn"}
  div.elementor-container.elementor-column-gap-no | box=170,1932,1100,483 | maxWidth:1100px; display:flex; position:relative
    div.elementor-widget-wrap.elementor-element-populated.e-swiper-container | box=170,1932,550,483 | display:flex; flexWrap:wrap; position:relative
      div.elementor-element.elementor--h-position-center.elementor--v-position-middle | [slides.default] | box=170,1932,550,483 | position:relative; zIndex:10
        div.elementor-slides-wrapper.elementor-main-swiper.swiper | box=170,1932,550,483 | overflow:hidden; zIndex:1
          div.swiper-wrapper.elementor-slides | box=170,1932,550,483 | display:flex; position:relative; zIndex:1; transform:matrix(1, 0, 0, 1, 0, 0)
            div.elementor-repeater-item-bb1d340.swiper-slide.swiper-slide-duplicate | box=170,1932,550,483 | overflow:hidden; position:relative; opacity:0; transform:matrix(1, 0, 0, 1, 0, 0)
              div.swiper-slide-bg | box=170,1932,550,483 | backgroundImage:url("/images/2026/09/M1.png"); backgroundSize:cover; backgroundPosition:50% 50%; minHeight:100%
              div.swiper-slide-inner | box=170,1932,550,483 | color:rgb(255, 255, 255); textAlign:center; backgroundPosition:50% 50%; padding:50px; display:flex; justifyContent:center; alignItems:center; position:absolute
                div.swiper-slide-contents.animated.fadeInUp | box=445,2173,0,0 | maxWidth:66%; opacity:0.621369; transform:matrix(1, 0, 0, 1, 0, 0)
            div.elementor-repeater-item-9e30089.swiper-slide.swiper-slide-duplicate | box=170,1932,550,483 | overflow:hidden; position:relative; opacity:0; transform:matrix(1, 0, 0, 1, -550, 0)
              div.swiper-slide-bg | box=170,1932,550,483 | backgroundImage:url("/images/2026/09/M2.png"); backgroundSize:cover; backgroundPosition:50% 50%; minHeight:100%
              div.swiper-slide-inner | box=170,1932,550,483 | color:rgb(255, 255, 255); textAlign:center; backgroundPosition:50% 50%; padding:50px; display:flex; justifyContent:center; alignItems:center; position:absolute
                div.swiper-slide-contents.animated.fadeInUp | box=445,2173,0,0 | maxWidth:66%; opacity:0.621369; transform:matrix(1, 0, 0, 1, 0, 0)
            div.elementor-repeater-item-706ab2a.swiper-slide.swiper-slide-duplicate | box=170,1932,550,483 | overflow:hidden; position:relative; opacity:0; transform:matrix(1, 0, 0, 1, -1100, 0)
              div.swiper-slide-bg | box=170,1932,550,483 | backgroundImage:url("/images/2026/09/M3.jpg"); backgroundSize:cover; backgroundPosition:50% 50%; minHeight:100%
              div.swiper-slide-inner | box=170,1932,550,483 | color:rgb(255, 255, 255); textAlign:center; backgroundPosition:50% 50%; padding:50px; display:flex; justifyContent:center; alignItems:center; position:absolute
                div.swiper-slide-contents.animated.fadeInUp | box=445,2173,0,0 | maxWidth:66%; opacity:0.621369; transform:matrix(1, 0, 0, 1, 0, 0)
            div.elementor-repeater-item-5855482.swiper-slide.swiper-slide-duplicate | box=170,1932,550,483 | overflow:hidden; position:relative; opacity:0; transform:matrix(1, 0, 0, 1, -1650, 0)
              div.swiper-slide-bg | box=170,1932,550,483 | backgroundImage:url("/images/2026/09/M4.png"); backgroundSize:cover; backgroundPosition:50% 50%; minHeight:100%
              div.swiper-slide-inner | box=170,1932,550,483 | color:rgb(255, 255, 255); textAlign:center; backgroundPosition:50% 50%; padding:50px; display:flex; justifyContent:center; alignItems:center; position:absolute
                div.swiper-slide-contents.animated.fadeInUp | box=445,2173,0,0 | maxWidth:66%; opacity:0.621369; transform:matrix(1, 0, 0, 1, 0, 0)
            div.elementor-repeater-item-684d746.swiper-slide.swiper-slide-duplicate | box=170,1932,550,483 | overflow:hidden; position:relative; opacity:0; transform:matrix(1, 0, 0, 1, -2200, 0)
              div.swiper-slide-bg | box=170,1932,550,483 | backgroundImage:url("/images/2026/09/M5.png"); backgroundSize:cover; backgroundPosition:50% 50%; minHeight:100%
              div.swiper-slide-inner | box=170,1932,550,483 | color:rgb(255, 255, 255); textAlign:center; backgroundPosition:50% 50%; padding:50px; display:flex; justifyContent:center; alignItems:center; position:absolute
                div.swiper-slide-contents.animated.fadeInUp | box=445,2173,0,0 | maxWidth:66%; opacity:0.621369; transform:matrix(1, 0, 0, 1, 0, 0)
            div.elementor-repeater-item-af45469.swiper-slide.swiper-slide-duplicate | box=170,1932,550,483 | overflow:hidden; position:relative; opacity:0; transform:matrix(1, 0, 0, 1, -2750, 0)
              div.swiper-slide-bg | box=170,1932,550,483 | backgroundColor:rgb(187, 187, 187); backgroundImage:url("/images/2026/09/M3.jpg"); backgroundSize:cover; backgroundPosition:50% 50%; minHeight:100%
              div.swiper-slide-inner | box=170,1932,550,483 | color:rgb(255, 255, 255); textAlign:center; backgroundPosition:50% 50%; padding:50px; display:flex; justifyContent:center; alignItems:center; position:absolute
                div.swiper-slide-contents.animated.fadeInUp | box=445,2173,0,0 | maxWidth:66%; opacity:0.621369; transform:matrix(1, 0, 0, 1, 0, 0)
            div.elementor-repeater-item-bb1d340.swiper-slide | box=170,1932,550,483 | overflow:hidden; position:relative; opacity:0; transform:matrix(1, 0, 0, 1, -3300, 0)
              div.swiper-slide-bg | box=170,1932,550,483 | backgroundImage:url("/images/2026/09/M1.png"); backgroundSize:cover; backgroundPosition:50% 50%; minHeight:100%
              div.swiper-slide-inner | box=170,1932,550,483 | color:rgb(255, 255, 255); textAlign:center; backgroundPosition:50% 50%; padding:50px; display:flex; justifyContent:center; alignItems:center; position:absolute
                div.swiper-slide-contents.animated.fadeInUp | box=445,2173,0,0 | maxWidth:66%; opacity:0.621369; transform:matrix(1, 0, 0, 1, 0, 0)
            div.elementor-repeater-item-9e30089.swiper-slide.swiper-slide-prev | box=170,1932,550,483 | overflow:hidden; position:relative; opacity:0; transform:matrix(1, 0, 0, 1, -3850, 0)
              div.swiper-slide-bg | box=170,1932,550,483 | backgroundImage:url("/images/2026/09/M2.png"); backgroundSize:cover; backgroundPosition:50% 50%; minHeight:100%
              div.swiper-slide-inner | box=170,1932,550,483 | color:rgb(255, 255, 255); textAlign:center; backgroundPosition:50% 50%; padding:50px; display:flex; justifyContent:center; alignItems:center; position:absolute
                div.swiper-slide-contents.animated.fadeInUp | box=445,2173,0,0 | maxWidth:66%; opacity:0.621369; transform:matrix(1, 0, 0, 1, 0, 0)
            div.elementor-repeater-item-706ab2a.swiper-slide.swiper-slide-visible | box=170,1932,550,483 | overflow:hidden; position:relative; transform:matrix(1, 0, 0, 1, -4400, 0)
              div.swiper-slide-bg.elementor-ken-burns--active | box=170,1932,550,483 | backgroundImage:url("/images/2026/09/M3.jpg"); backgroundSize:cover; backgroundPosition:50% 50%; minHeight:100%
              div.swiper-slide-inner | box=170,1932,550,483 | color:rgb(255, 255, 255); textAlign:center; backgroundPosition:50% 50%; padding:50px; display:flex; justifyContent:center; alignItems:center; position:absolute
                div.swiper-slide-contents.animated.fadeInUp | box=445,2173,0,0 | maxWidth:66%; opacity:0.621369; transform:matrix(1, 0, 0, 1, 0, 0)
            div.elementor-repeater-item-5855482.swiper-slide.swiper-slide-next | box=170,1932,550,483 | overflow:hidden; position:relative; opacity:0; transform:matrix(1, 0, 0, 1, -4950, 0)
              div.swiper-slide-bg | box=170,1932,550,483 | backgroundImage:url("/images/2026/09/M4.png"); backgroundSize:cover; backgroundPosition:50% 50%; minHeight:100%
              div.swiper-slide-inner | box=170,1932,550,483 | color:rgb(255, 255, 255); textAlign:center; backgroundPosition:50% 50%; padding:50px; display:flex; justifyContent:center; alignItems:center; position:absolute
                div.swiper-slide-contents.animated.fadeInUp | box=445,2173,0,0 | maxWidth:66%; opacity:0.621369; transform:matrix(1, 0, 0, 1, 0, 0)
            div.elementor-repeater-item-684d746.swiper-slide | box=170,1932,550,483 | overflow:hidden; position:relative; opacity:0; transform:matrix(1, 0, 0, 1, -5500, 0)
              div.swiper-slide-bg | box=170,1932,550,483 | backgroundImage:url("/images/2026/09/M5.png"); backgroundSize:cover; backgroundPosition:50% 50%; minHeight:100%
              div.swiper-slide-inner | box=170,1932,550,483 | color:rgb(255, 255, 255); textAlign:center; backgroundPosition:50% 50%; padding:50px; display:flex; justifyContent:center; alignItems:center; position:absolute
                div.swiper-slide-contents.animated.fadeInUp | box=445,2173,0,0 | maxWidth:66%; opacity:0.621369; transform:matrix(1, 0, 0, 1, 0, 0)
            div.elementor-repeater-item-af45469.swiper-slide | box=170,1932,550,483 | overflow:hidden; position:relative; opacity:0; transform:matrix(1, 0, 0, 1, -6050, 0)
              div.swiper-slide-bg | box=170,1932,550,483 | backgroundColor:rgb(187, 187, 187); backgroundImage:url("/images/2026/09/M3.jpg"); backgroundSize:cover; backgroundPosition:50% 50%; minHeight:100%
              div.swiper-slide-inner | box=170,1932,550,483 | color:rgb(255, 255, 255); textAlign:center; backgroundPosition:50% 50%; padding:50px; display:flex; justifyContent:center; alignItems:center; position:absolute
                div.swiper-slide-contents.animated.fadeInUp | box=445,2173,0,0 | maxWidth:66%; opacity:0.621369; transform:matrix(1, 0, 0, 1, 0, 0)
            div.elementor-repeater-item-bb1d340.swiper-slide.swiper-slide-duplicate | box=170,1932,550,483 | overflow:hidden; position:relative; opacity:0; transform:matrix(1, 0, 0, 1, -6600, 0)
              div.swiper-slide-bg | box=170,1932,550,483 | backgroundImage:url("/images/2026/09/M1.png"); backgroundSize:cover; backgroundPosition:50% 50%; minHeight:100%
              div.swiper-slide-inner | box=170,1932,550,483 | color:rgb(255, 255, 255); textAlign:center; backgroundPosition:50% 50%; padding:50px; display:flex; justifyContent:center; alignItems:center; position:absolute
                div.swiper-slide-contents.animated.fadeInUp | box=445,2173,0,0 | maxWidth:66%; opacity:0.621369; transform:matrix(1, 0, 0, 1, 0, 0)
            div.elementor-repeater-item-9e30089.swiper-slide.swiper-slide-duplicate | box=170,1932,550,483 | overflow:hidden; position:relative; opacity:0; transform:matrix(1, 0, 0, 1, -7150, 0)
              div.swiper-slide-bg | box=170,1932,550,483 | backgroundImage:url("/images/2026/09/M2.png"); backgroundSize:cover; backgroundPosition:50% 50%; minHeight:100%
              div.swiper-slide-inner | box=170,1932,550,483 | color:rgb(255, 255, 255); textAlign:center; backgroundPosition:50% 50%; padding:50px; display:flex; justifyContent:center; alignItems:center; position:absolute
                div.swiper-slide-contents.animated.fadeInUp | box=445,2173,0,0 | maxWidth:66%; opacity:0.621369; transform:matrix(1, 0, 0, 1, 0, 0)
            div.elementor-repeater-item-706ab2a.swiper-slide.swiper-slide-duplicate | box=170,1932,550,483 | overflow:hidden; position:relative; opacity:0; transform:matrix(1, 0, 0, 1, -7700, 0)
              div.swiper-slide-bg | box=170,1932,550,483 | backgroundImage:url("/images/2026/09/M3.jpg"); backgroundSize:cover; backgroundPosition:50% 50%; minHeight:100%
              div.swiper-slide-inner | box=170,1932,550,483 | color:rgb(255, 255, 255); textAlign:center; backgroundPosition:50% 50%; padding:50px; display:flex; justifyContent:center; alignItems:center; position:absolute
                div.swiper-slide-contents.animated.fadeInUp | box=445,2173,0,0 | maxWidth:66%; opacity:0.621369; transform:matrix(1, 0, 0, 1, 0, 0)
            div.elementor-repeater-item-5855482.swiper-slide.swiper-slide-duplicate | box=170,1932,550,483 | overflow:hidden; position:relative; opacity:0; transform:matrix(1, 0, 0, 1, -8250, 0)
              div.swiper-slide-bg | box=170,1932,550,483 | backgroundImage:url("/images/2026/09/M4.png"); backgroundSize:cover; backgroundPosition:50% 50%; minHeight:100%
              div.swiper-slide-inner | box=170,1932,550,483 | color:rgb(255, 255, 255); textAlign:center; backgroundPosition:50% 50%; padding:50px; display:flex; justifyContent:center; alignItems:center; position:absolute
                div.swiper-slide-contents.animated.fadeInUp | box=445,2173,0,0 | maxWidth:66%; opacity:0.621369; transform:matrix(1, 0, 0, 1, 0, 0)
            div.elementor-repeater-item-684d746.swiper-slide.swiper-slide-duplicate | box=170,1932,550,483 | overflow:hidden; position:relative; opacity:0; transform:matrix(1, 0, 0, 1, -8800, 0)
              div.swiper-slide-bg | box=170,1932,550,483 | backgroundImage:url("/images/2026/09/M5.png"); backgroundSize:cover; backgroundPosition:50% 50%; minHeight:100%
              div.swiper-slide-inner | box=170,1932,550,483 | color:rgb(255, 255, 255); textAlign:center; backgroundPosition:50% 50%; padding:50px; display:flex; justifyContent:center; alignItems:center; position:absolute
                div.swiper-slide-contents.animated.fadeInUp | box=445,2173,0,0 | maxWidth:66%; opacity:0.621369; transform:matrix(1, 0, 0, 1, 0, 0)
            div.elementor-repeater-item-af45469.swiper-slide.swiper-slide-duplicate | box=170,1932,550,483 | overflow:hidden; position:relative; opacity:0; transform:matrix(1, 0, 0, 1, -9350, 0)
              div.swiper-slide-bg | box=170,1932,550,483 | backgroundColor:rgb(187, 187, 187); backgroundImage:url("/images/2026/09/M3.jpg"); backgroundSize:cover; backgroundPosition:50% 50%; minHeight:100%
              div.swiper-slide-inner | box=170,1932,550,483 | color:rgb(255, 255, 255); textAlign:center; backgroundPosition:50% 50%; padding:50px; display:flex; justifyContent:center; alignItems:center; position:absolute
                div.swiper-slide-contents.animated.fadeInUp | box=445,2173,0,0 | maxWidth:66%; opacity:0.621369; transform:matrix(1, 0, 0, 1, 0, 0)
          span.swiper-notification | box=170,1932,0,0 | position:absolute; right:550px; bottom:483px; zIndex:-1000; opacity:0
    div.elementor-widget-wrap.elementor-element-populated | box=720,1932,550,483 | backgroundColor:rgb(164, 139, 101); padding:2px 70px 5px; display:flex; flexWrap:wrap; position:relative
      div.elementor-element.elementor-widget.elementor-widget-heading | [heading.default] | box=790,1934,410,38 | margin:0px 0px 20px; position:relative
        div.elementor-widget-container | box=790,1946,410,26 | margin:12.2969px 0px 0px
          h3.elementor-heading-title.elementor-size-default | box=790,1946,410,26 | fontSize:20px; fontWeight:500; lineHeight:26px; color:rgb(0, 0, 0) | TEXT="Room 2 Dimensions"
      div.elementor-element.elementor-widget.elementor-widget-heading | [heading.default] | box=790,1992,410,0 | margin:0px 0px 20px; position:relative
        div.elementor-widget-container | box=790,1967,410,22 | margin:-24.5938px 0px 0px
          h3.elementor-heading-title.elementor-size-default | box=790,1967,410,22 | fontSize:17px; fontWeight:500; lineHeight:22.1px; color:rgb(255, 255, 255) | TEXT="3.4m x 2.97m"
      div.elementor-element.elementor-widget.elementor-widget-heading | [heading.default] | box=790,2012,410,10 | margin:0px 0px 20px; position:relative
        div.elementor-widget-container | box=790,1996,410,26 | margin:-16.3906px 0px 0px
          h3.elementor-heading-title.elementor-size-default | box=790,1996,410,26 | fontSize:20px; fontWeight:500; lineHeight:26px; color:rgb(0, 0, 0) | TEXT="Suitable For"
      div.elementor-element.elementor-widget__width-initial.elementor-icon-list--layout-traditional | [icon-list.default] | box=790,2042,367,112 | maxWidth:89.539%; position:relative
        div.elementor-widget-container | box=790,2022,367,132 | margin:-20px 0px 0px
          li.elementor-icon-list-item | box=790,2022,367,26 | display:flex; alignItems:center; position:relative
            svg.e-font-icon-svg.e-far-dot-circle | box=790,2028,14,14 | margin:0px 3.5px 0px 0px; overflow:hidden | SVG=<svg aria-hidden="true" class="e-font-icon-svg e-far-dot-circle" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="M256 56c110.532 0 200 89.451 200 200 0 110.532-89.451 200-200 200-110.532 0-200-89.451-200-200 0-110.532 89.451-200 200-200m0-48C119.033 8 8 119.033 8 256s111.033 248 248 248 248-111.033 248-248S392.967 8 256 8zm0 168c-44.183 0-80 35.817-80 80s35.817 80 80 80 80-35.817 80-80-35.817-80-80-80z"></path></svg>
            span.elementor-icon-list-text | box=808,2022,97,26 | color:rgb(255, 255, 255); padding:0px 0px 0px 5px | TEXT="Osteopathy"
          li.elementor-icon-list-item | box=790,2048,367,26 | display:flex; alignItems:center; position:relative
            svg.e-font-icon-svg.e-far-dot-circle | box=790,2054,14,14 | margin:0px 3.5px 0px 0px; overflow:hidden | SVG=<svg aria-hidden="true" class="e-font-icon-svg e-far-dot-circle" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="M256 56c110.532 0 200 89.451 200 200 0 110.532-89.451 200-200 200-110.532 0-200-89.451-200-200 0-110.532 89.451-200 200-200m0-48C119.033 8 8 119.033 8 256s111.033 248 248 248 248-111.033 248-248S392.967 8 256 8zm0 168c-44.183 0-80 35.817-80 80s35.817 80 80 80 80-35.817 80-80-35.817-80-80-80z"></path></svg>
            span.elementor-icon-list-text | box=808,2048,115,26 | color:rgb(255, 255, 255); padding:0px 0px 0px 5px | TEXT="Physiotherapy"
          li.elementor-icon-list-item | box=790,2074,367,26 | display:flex; alignItems:center; position:relative
            svg.e-font-icon-svg.e-far-dot-circle | box=790,2081,14,14 | margin:0px 3.5px 0px 0px; overflow:hidden | SVG=<svg aria-hidden="true" class="e-font-icon-svg e-far-dot-circle" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="M256 56c110.532 0 200 89.451 200 200 0 110.532-89.451 200-200 200-110.532 0-200-89.451-200-200 0-110.532 89.451-200 200-200m0-48C119.033 8 8 119.033 8 256s111.033 248 248 248 248-111.033 248-248S392.967 8 256 8zm0 168c-44.183 0-80 35.817-80 80s35.817 80 80 80 80-35.817 80-80-35.817-80-80-80z"></path></svg>
            span.elementor-icon-list-text | box=808,2074,171,26 | color:rgb(255, 255, 255); padding:0px 0px 0px 5px | TEXT="Aesthetic Treatments"
          li.elementor-icon-list-item | box=790,2101,367,26 | display:flex; alignItems:center; position:relative
            svg.e-font-icon-svg.e-far-dot-circle | box=790,2107,14,14 | margin:0px 3.5px 0px 0px; overflow:hidden | SVG=<svg aria-hidden="true" class="e-font-icon-svg e-far-dot-circle" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="M256 56c110.532 0 200 89.451 200 200 0 110.532-89.451 200-200 200-110.532 0-200-89.451-200-200 0-110.532 89.451-200 200-200m0-48C119.033 8 8 119.033 8 256s111.033 248 248 248 248-111.033 248-248S392.967 8 256 8zm0 168c-44.183 0-80 35.817-80 80s35.817 80 80 80 80-35.817 80-80-35.817-80-80-80z"></path></svg>
            span.elementor-icon-list-text | box=808,2101,144,26 | color:rgb(255, 255, 255); padding:0px 0px 0px 5px | TEXT="Massage Therapy"
          li.elementor-icon-list-item | box=790,2127,367,26 | display:flex; alignItems:center; position:relative
            svg.e-font-icon-svg.e-far-dot-circle | box=790,2133,14,14 | margin:0px 3.5px 0px 0px; overflow:hidden | SVG=<svg aria-hidden="true" class="e-font-icon-svg e-far-dot-circle" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="M256 56c110.532 0 200 89.451 200 200 0 110.532-89.451 200-200 200-110.532 0-200-89.451-200-200 0-110.532 89.451-200 200-200m0-48C119.033 8 8 119.033 8 256s111.033 248 248 248 248-111.033 248-248S392.967 8 256 8zm0 168c-44.183 0-80 35.817-80 80s35.817 80 80 80 80-35.817 80-80-35.817-80-80-80z"></path></svg>
            span.elementor-icon-list-text | box=808,2127,96,26 | color:rgb(255, 255, 255); padding:0px 0px 0px 5px | TEXT="Counselling"
      div.elementor-element.elementor-widget__width-initial.elementor-icon-list--layout-traditional | [icon-list.default] | box=790,2154,378,132 | maxWidth:92.273%; position:relative
        li.elementor-icon-list-item | box=790,2154,378,26 | display:flex; alignItems:center; position:relative
          svg.e-font-icon-svg.e-far-dot-circle | box=790,2160,14,14 | margin:0px 3.5px 0px 0px; overflow:hidden | SVG=<svg aria-hidden="true" class="e-font-icon-svg e-far-dot-circle" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="M256 56c110.532 0 200 89.451 200 200 0 110.532-89.451 200-200 200-110.532 0-200-89.451-200-200 0-110.532 89.451-200 200-200m0-48C119.033 8 8 119.033 8 256s111.033 248 248 248 248-111.033 248-248S392.967 8 256 8zm0 168c-44.183 0-80 35.817-80 80s35.817 80 80 80 80-35.817 80-80-35.817-80-80-80z"></path></svg>
          span.elementor-icon-list-text | box=808,2154,116,26 | color:rgb(255, 255, 255); padding:0px 0px 0px 5px | TEXT="Hypnotherapy"
        li.elementor-icon-list-item | box=790,2180,378,26 | display:flex; alignItems:center; position:relative
          svg.e-font-icon-svg.e-far-dot-circle | box=790,2186,14,14 | margin:0px 3.5px 0px 0px; overflow:hidden | SVG=<svg aria-hidden="true" class="e-font-icon-svg e-far-dot-circle" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="M256 56c110.532 0 200 89.451 200 200 0 110.532-89.451 200-200 200-110.532 0-200-89.451-200-200 0-110.532 89.451-200 200-200m0-48C119.033 8 8 119.033 8 256s111.033 248 248 248 248-111.033 248-248S392.967 8 256 8zm0 168c-44.183 0-80 35.817-80 80s35.817 80 80 80 80-35.817 80-80-35.817-80-80-80z"></path></svg>
          span.elementor-icon-list-text | box=808,2180,121,26 | color:rgb(255, 255, 255); padding:0px 0px 0px 5px | TEXT="Psychotherapy"
        li.elementor-icon-list-item | box=790,2206,378,26 | display:flex; alignItems:center; position:relative
          svg.e-font-icon-svg.e-far-dot-circle | box=790,2213,14,14 | margin:0px 3.5px 0px 0px; overflow:hidden | SVG=<svg aria-hidden="true" class="e-font-icon-svg e-far-dot-circle" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="M256 56c110.532 0 200 89.451 200 200 0 110.532-89.451 200-200 200-110.532 0-200-89.451-200-200 0-110.532 89.451-200 200-200m0-48C119.033 8 8 119.033 8 256s111.033 248 248 248 248-111.033 248-248S392.967 8 256 8zm0 168c-44.183 0-80 35.817-80 80s35.817 80 80 80 80-35.817 80-80-35.817-80-80-80z"></path></svg>
          span.elementor-icon-list-text | box=808,2206,110,26 | color:rgb(255, 255, 255); padding:0px 0px 0px 5px | TEXT="Life coaching"
        li.elementor-icon-list-item | box=790,2233,378,26 | display:flex; alignItems:center; position:relative
          svg.e-font-icon-svg.e-far-dot-circle | box=790,2239,14,14 | margin:0px 3.5px 0px 0px; overflow:hidden | SVG=<svg aria-hidden="true" class="e-font-icon-svg e-far-dot-circle" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="M256 56c110.532 0 200 89.451 200 200 0 110.532-89.451 200-200 200-110.532 0-200-89.451-200-200 0-110.532 89.451-200 200-200m0-48C119.033 8 8 119.033 8 256s111.033 248 248 248 248-111.033 248-248S392.967 8 256 8zm0 168c-44.183 0-80 35.817-80 80s35.817 80 80 80 80-35.817 80-80-35.817-80-80-80z"></path></svg>
          span.elementor-icon-list-text | box=808,2233,151,26 | color:rgb(255, 255, 255); padding:0px 0px 0px 5px | TEXT="Nutritional Therapy"
        li.elementor-icon-list-item | box=790,2259,378,26 | display:flex; alignItems:center; position:relative
          svg.e-font-icon-svg.e-far-dot-circle | box=790,2265,14,14 | margin:0px 3.5px 0px 0px; overflow:hidden | SVG=<svg aria-hidden="true" class="e-font-icon-svg e-far-dot-circle" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="M256 56c110.532 0 200 89.451 200 200 0 110.532-89.451 200-200 200-110.532 0-200-89.451-200-200 0-110.532 89.451-200 200-200m0-48C119.033 8 8 119.033 8 256s111.033 248 248 248 248-111.033 248-248S392.967 8 256 8zm0 168c-44.183 0-80 35.817-80 80s35.817 80 80 80 80-35.817 80-80-35.817-80-80-80z"></path></svg>
          span.elementor-icon-list-text | box=808,2259,165,26 | color:rgb(255, 255, 255); padding:0px 0px 0px 5px | TEXT="Medical Consultants"
      div.elementor-element.elementor-widget__width-initial.elementor-icon-list--layout-traditional | [icon-list.default] | box=790,2286,378,26 | maxWidth:92.273%; position:relative
        li.elementor-icon-list-item | box=790,2286,378,26 | display:flex; alignItems:flex-start; position:relative
          span.elementor-icon-list-icon | box=790,2291,18,14 | display:flex; position:relative; top:5px; bottom:-5px
            svg.e-font-icon-svg.e-far-dot-circle | box=790,2291,14,14 | margin:0px 3.5px 0px 0px; overflow:hidden | SVG=<svg aria-hidden="true" class="e-font-icon-svg e-far-dot-circle" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="M256 56c110.532 0 200 89.451 200 200 0 110.532-89.451 200-200 200-110.532 0-200-89.451-200-200 0-110.532 89.451-200 200-200m0-48C119.033 8 8 119.033 8 256s111.033 248 248 248 248-111.033 248-248S392.967 8 256 8zm0 168c-44.183 0-80 35.817-80 80s35.817 80 80 80 80-35.817 80-80-35.817-80-80-80z"></path></svg>
          span.elementor-icon-list-text | box=808,2286,259,26 | color:rgb(255, 255, 255); padding:0px 0px 0px 5px | TEXT="Functional Medicine Consultants"
      div.elementor-element.elementor-widget__width-initial.elementor-widget | [ucaddon_uc_icon_accordion.default] | box=790,2312,410,42 | maxWidth:111.908%; position:relative
        div.uc_ac_box.elementor-repeater-item-3b96039 | box=790,2312,410,42 | overflow:hidden
          div.uc-heading.uc_trigger | box=790,2312,410,42 | display:flex; alignItems:center
            div.ue_title | box=790,2321,353,25 | fontSize:15px; fontWeight:600; lineHeight:24.75px; color:rgb(0, 0, 0) | TEXT="Room Breakdown (click to expand)"
            div.ue_expand_inside | box=1158,2312,42,42 | lineHeight:16px; color:rgb(191, 191, 191); display:flex; justifyContent:center; alignItems:center
              i.fas.fa-plus | box=1172,2324,14,16 | fontWeight:900; fontFamily:"Font Awesome 6 Free"; display:inline-block | ICON=fas fa-plus
              i.fas.fa-minus | box=0,0,0,0 | fontWeight:900; fontFamily:"Font Awesome 6 Free"; display:inline-block | ICON=fas fa-minus
          div.uc_content | box=0,0,0,0 | color:rgb(255, 255, 255); backgroundColor:rgb(0, 0, 0); padding:20px
            div.elementor-container.elementor-column-gap-default | box=0,0,0,0 | margin:0px auto; maxWidth:1140px; display:flex; position:relative
              div.elementor-widget-wrap.elementor-element-populated | box=0,0,0,0 | padding:10px; display:flex; flexWrap:wrap; position:relative
              div.elementor-widget-wrap.elementor-element-populated | box=0,0,0,0 | padding:10px; display:flex; flexWrap:wrap; position:relative
      div.elementor-element.elementor-button-info.elementor-align-left | [button.default] | box=790,2354,410,53 | textAlign:left; position:relative
        div.elementor-widget-container | box=790,2361,410,46 | margin:7px 0px 0px
          a.elementor-button.elementor-button-link.elementor-size-sm | box=790,2361,126,46 | fontWeight:500; lineHeight:16px; color:rgb(255, 255, 255); textAlign:center; backgroundColor:rgb(0, 0, 0); padding:15px 30px; display:inline-block; borderRadius:5px | HREF=https://londontherapyroomstorent.com/#Contact
            span.elementor-button-content-wrapper | box=820,2376,66,16 | display:flex; justifyContent:center; gap:5px
              span.elementor-button-text | box=820,2376,66,16 |  | TEXT="ENQUIRE"```
```
# section 9 id= visible=true
section.elementor-section.elementor-top-section.elementor-element | box=0,2485,1440,499 | fontSize:16px; fontWeight:200; fontFamily:Poppins, sans-serif; lineHeight:26.4px; color:rgb(40, 40, 40); margin:70px 0px; position:relative | SETTINGS={"animation":"fadeIn"}
  div.elementor-container.elementor-column-gap-no | box=170,2485,1100,499 | maxWidth:1100px; display:flex; position:relative
    div.elementor-widget-wrap.elementor-element-populated | box=170,2485,550,499 | backgroundColor:rgb(164, 139, 101); padding:41px 70px 36px; display:flex; flexWrap:wrap; position:relative
      div.elementor-element.elementor-widget.elementor-widget-heading | [heading.default] | box=240,2526,410,26 | margin:0px 0px 20px; position:relative
        h3.elementor-heading-title.elementor-size-default | box=240,2526,410,26 | fontSize:20px; fontWeight:500; lineHeight:26px; color:rgb(0, 0, 0) | TEXT="Room 3 Dimensions"
      div.elementor-element.elementor-widget.elementor-widget-heading | [heading.default] | box=240,2572,410,0 | margin:0px 0px 20px; position:relative
        div.elementor-widget-container | box=240,2547,410,22 | margin:-24.5938px 0px 0px
          h3.elementor-heading-title.elementor-size-default | box=240,2547,410,22 | fontSize:17px; fontWeight:500; lineHeight:22.1px; color:rgb(255, 255, 255) | TEXT="2.81m x 2.27m"
      div.elementor-element.elementor-widget.elementor-widget-heading | [heading.default] | box=240,2592,410,18 | margin:0px 0px 20px; position:relative
        div.elementor-widget-container | box=240,2584,410,26 | margin:-8.1875px 0px 0px
          h3.elementor-heading-title.elementor-size-default | box=240,2584,410,26 | fontSize:20px; fontWeight:500; lineHeight:26px; color:rgb(0, 0, 0) | TEXT="Suitable For"
      div.elementor-element.elementor-widget__width-initial.elementor-icon-list--layout-traditional | [icon-list.default] | box=240,2630,367,95 | maxWidth:89.539%; position:relative
        div.elementor-widget-container | box=240,2619,367,106 | margin:-11px 0px 0px
          li.elementor-icon-list-item | box=240,2619,367,26 | display:flex; alignItems:center; position:relative
            svg.e-font-icon-svg.e-far-dot-circle | box=240,2625,14,14 | margin:0px 3.5px 0px 0px; overflow:hidden | SVG=<svg aria-hidden="true" class="e-font-icon-svg e-far-dot-circle" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="M256 56c110.532 0 200 89.451 200 200 0 110.532-89.451 200-200 200-110.532 0-200-89.451-200-200 0-110.532 89.451-200 200-200m0-48C119.033 8 8 119.033 8 256s111.033 248 248 248 248-111.033 248-248S392.967 8 256 8zm0 168c-44.183 0-80 35.817-80 80s35.817 80 80 80 80-35.817 80-80-35.817-80-80-80z"></path></svg>
            span.elementor-icon-list-text | box=258,2619,97,26 | color:rgb(255, 255, 255); padding:0px 0px 0px 5px | TEXT="Osteopathy"
          li.elementor-icon-list-item | box=240,2645,367,26 | display:flex; alignItems:center; position:relative
            svg.e-font-icon-svg.e-far-dot-circle | box=240,2651,14,14 | margin:0px 3.5px 0px 0px; overflow:hidden | SVG=<svg aria-hidden="true" class="e-font-icon-svg e-far-dot-circle" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="M256 56c110.532 0 200 89.451 200 200 0 110.532-89.451 200-200 200-110.532 0-200-89.451-200-200 0-110.532 89.451-200 200-200m0-48C119.033 8 8 119.033 8 256s111.033 248 248 248 248-111.033 248-248S392.967 8 256 8zm0 168c-44.183 0-80 35.817-80 80s35.817 80 80 80 80-35.817 80-80-35.817-80-80-80z"></path></svg>
            span.elementor-icon-list-text | box=258,2645,115,26 | color:rgb(255, 255, 255); padding:0px 0px 0px 5px | TEXT="Physiotherapy"
          li.elementor-icon-list-item | box=240,2671,367,26 | display:flex; alignItems:center; position:relative
            svg.e-font-icon-svg.e-far-dot-circle | box=240,2678,14,14 | margin:0px 3.5px 0px 0px; overflow:hidden | SVG=<svg aria-hidden="true" class="e-font-icon-svg e-far-dot-circle" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="M256 56c110.532 0 200 89.451 200 200 0 110.532-89.451 200-200 200-110.532 0-200-89.451-200-200 0-110.532 89.451-200 200-200m0-48C119.033 8 8 119.033 8 256s111.033 248 248 248 248-111.033 248-248S392.967 8 256 8zm0 168c-44.183 0-80 35.817-80 80s35.817 80 80 80 80-35.817 80-80-35.817-80-80-80z"></path></svg>
            span.elementor-icon-list-text | box=258,2671,127,26 | color:rgb(255, 255, 255); padding:0px 0px 0px 5px | TEXT="Beauty Therapy"
          li.elementor-icon-list-item | box=240,2698,367,26 | display:flex; alignItems:center; position:relative
            svg.e-font-icon-svg.e-far-dot-circle | box=240,2704,14,14 | margin:0px 3.5px 0px 0px; overflow:hidden | SVG=<svg aria-hidden="true" class="e-font-icon-svg e-far-dot-circle" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="M256 56c110.532 0 200 89.451 200 200 0 110.532-89.451 200-200 200-110.532 0-200-89.451-200-200 0-110.532 89.451-200 200-200m0-48C119.033 8 8 119.033 8 256s111.033 248 248 248 248-111.033 248-248S392.967 8 256 8zm0 168c-44.183 0-80 35.817-80 80s35.817 80 80 80 80-35.817 80-80-35.817-80-80-80z"></path></svg>
            span.elementor-icon-list-text | box=258,2698,171,26 | color:rgb(255, 255, 255); padding:0px 0px 0px 5px | TEXT="Aesthetic Treatments"
      div.elementor-element.elementor-widget__width-initial.elementor-icon-list--layout-traditional | [icon-list.default] | box=240,2724,378,106 | maxWidth:92.273%; position:relative
        li.elementor-icon-list-item | box=240,2724,378,26 | display:flex; alignItems:center; position:relative
          svg.e-font-icon-svg.e-far-dot-circle | box=240,2730,14,14 | margin:0px 3.5px 0px 0px; overflow:hidden | SVG=<svg aria-hidden="true" class="e-font-icon-svg e-far-dot-circle" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="M256 56c110.532 0 200 89.451 200 200 0 110.532-89.451 200-200 200-110.532 0-200-89.451-200-200 0-110.532 89.451-200 200-200m0-48C119.033 8 8 119.033 8 256s111.033 248 248 248 248-111.033 248-248S392.967 8 256 8zm0 168c-44.183 0-80 35.817-80 80s35.817 80 80 80 80-35.817 80-80-35.817-80-80-80z"></path></svg>
          span.elementor-icon-list-text | box=258,2724,144,26 | color:rgb(255, 255, 255); padding:0px 0px 0px 5px | TEXT="Massage Therapy"
        li.elementor-icon-list-item | box=240,2751,378,26 | display:flex; alignItems:center; position:relative
          svg.e-font-icon-svg.e-far-dot-circle | box=240,2757,14,14 | margin:0px 3.5px 0px 0px; overflow:hidden | SVG=<svg aria-hidden="true" class="e-font-icon-svg e-far-dot-circle" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="M256 56c110.532 0 200 89.451 200 200 0 110.532-89.451 200-200 200-110.532 0-200-89.451-200-200 0-110.532 89.451-200 200-200m0-48C119.033 8 8 119.033 8 256s111.033 248 248 248 248-111.033 248-248S392.967 8 256 8zm0 168c-44.183 0-80 35.817-80 80s35.817 80 80 80 80-35.817 80-80-35.817-80-80-80z"></path></svg>
          span.elementor-icon-list-text | box=258,2751,151,26 | color:rgb(255, 255, 255); padding:0px 0px 0px 5px | TEXT="Nutritional Therapy"
        li.elementor-icon-list-item | box=240,2777,378,26 | display:flex; alignItems:center; position:relative
          svg.e-font-icon-svg.e-far-dot-circle | box=240,2783,14,14 | margin:0px 3.5px 0px 0px; overflow:hidden | SVG=<svg aria-hidden="true" class="e-font-icon-svg e-far-dot-circle" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="M256 56c110.532 0 200 89.451 200 200 0 110.532-89.451 200-200 200-110.532 0-200-89.451-200-200 0-110.532 89.451-200 200-200m0-48C119.033 8 8 119.033 8 256s111.033 248 248 248 248-111.033 248-248S392.967 8 256 8zm0 168c-44.183 0-80 35.817-80 80s35.817 80 80 80 80-35.817 80-80-35.817-80-80-80z"></path></svg>
          span.elementor-icon-list-text | box=258,2777,165,26 | color:rgb(255, 255, 255); padding:0px 0px 0px 5px | TEXT="Medical Consultants"
        li.elementor-icon-list-item | box=240,2803,378,26 | display:flex; alignItems:center; position:relative
          svg.e-font-icon-svg.e-far-dot-circle | box=240,2810,14,14 | margin:0px 3.5px 0px 0px; overflow:hidden | SVG=<svg aria-hidden="true" class="e-font-icon-svg e-far-dot-circle" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="M256 56c110.532 0 200 89.451 200 200 0 110.532-89.451 200-200 200-110.532 0-200-89.451-200-200 0-110.532 89.451-200 200-200m0-48C119.033 8 8 119.033 8 256s111.033 248 248 248 248-111.033 248-248S392.967 8 256 8zm0 168c-44.183 0-80 35.817-80 80s35.817 80 80 80 80-35.817 80-80-35.817-80-80-80z"></path></svg>
          span.elementor-icon-list-text | box=258,2803,161,26 | color:rgb(255, 255, 255); padding:0px 0px 0px 5px | TEXT="Functional Medicine"
      div.elementor-element.elementor-widget__width-initial.elementor-widget | [ucaddon_uc_icon_accordion.default] | box=240,2830,410,50 | maxWidth:111.908%; position:relative
        div.elementor-widget-container | box=240,2838,410,42 | margin:8.1875px 0px 0px
          div.uc_ac_box.elementor-repeater-item-3b96039 | box=240,2838,410,42 | overflow:hidden
            div.uc-heading.uc_trigger | box=240,2838,410,42 | display:flex; alignItems:center
              div.ue_title | box=240,2847,353,25 | fontSize:15px; fontWeight:600; lineHeight:24.75px; color:rgb(0, 0, 0) | TEXT="Room Breakdown (click to expand)"
              div.ue_expand_inside | box=608,2838,42,42 | lineHeight:16px; color:rgb(191, 191, 191); display:flex; justifyContent:center; alignItems:center
                i.fas.fa-plus | box=622,2850,14,16 | fontWeight:900; fontFamily:"Font Awesome 6 Free"; display:inline-block | ICON=fas fa-plus
                i.fas.fa-minus | box=0,0,0,0 | fontWeight:900; fontFamily:"Font Awesome 6 Free"; display:inline-block | ICON=fas fa-minus
            div.uc_content | box=0,0,0,0 | color:rgb(255, 255, 255); backgroundColor:rgb(0, 0, 0); padding:20px
              div.elementor-container.elementor-column-gap-default | box=0,0,0,0 | margin:0px auto; maxWidth:1140px; display:flex; position:relative
                div.elementor-widget-wrap.elementor-element-populated | box=0,0,0,0 | padding:10px; display:flex; flexWrap:wrap; position:relative
                div.elementor-widget-wrap.elementor-element-populated | box=0,0,0,0 | padding:10px; display:flex; flexWrap:wrap; position:relative
      div.elementor-element.elementor-button-info.elementor-align-left | [button.default] | box=240,2880,410,66 | textAlign:left; position:relative
        div.elementor-widget-container | box=240,2900,410,46 | margin:20px 0px 0px
          a.elementor-button.elementor-button-link.elementor-size-sm | box=240,2900,126,46 | fontWeight:500; lineHeight:16px; color:rgb(255, 255, 255); textAlign:center; backgroundColor:rgb(0, 0, 0); padding:15px 30px; display:inline-block; borderRadius:5px | HREF=https://londontherapyroomstorent.com/#Contact
            span.elementor-button-content-wrapper | box=270,2915,66,16 | display:flex; justifyContent:center; gap:5px
              span.elementor-button-text | box=270,2915,66,16 |  | TEXT="ENQUIRE"
    div.elementor-widget-wrap.elementor-element-populated.e-swiper-container | box=720,2485,550,499 | display:flex; flexWrap:wrap; position:relative
      div.elementor-element.elementor--h-position-center.elementor--v-position-middle | [slides.default] | box=720,2485,550,499 | position:relative; zIndex:10
        div.elementor-slides-wrapper.elementor-main-swiper.swiper | box=720,2485,550,499 | overflow:hidden; zIndex:1
          div.swiper-wrapper.elementor-slides | box=720,2485,550,499 | display:flex; position:relative; zIndex:1; transform:matrix(1, 0, 0, 1, 0, 0)
            div.elementor-repeater-item-2fa0381.swiper-slide.swiper-slide-duplicate | box=720,2485,550,499 | overflow:hidden; position:relative; opacity:0; transform:matrix(1, 0, 0, 1, 0, 0)
              div.swiper-slide-bg | box=720,2485,550,499 | backgroundImage:url("/images/2026/09/S1.png"); backgroundSize:cover; backgroundPosition:50% 50%; minHeight:100%
              div.swiper-slide-inner | box=720,2485,550,499 | color:rgb(255, 255, 255); textAlign:center; backgroundPosition:50% 50%; padding:50px; display:flex; justifyContent:center; alignItems:center; position:absolute
                div.swiper-slide-contents.animated.fadeInUp | box=995,2734,0,0 | maxWidth:66%; opacity:0.621369; transform:matrix(1, 0, 0, 1, 0, 0)
            div.elementor-repeater-item-bd50e0a.swiper-slide.swiper-slide-duplicate | box=720,2485,550,499 | overflow:hidden; position:relative; opacity:0; transform:matrix(1, 0, 0, 1, -550, 0)
              div.swiper-slide-bg | box=720,2485,550,499 | backgroundImage:url("/images/2026/09/S4.png"); backgroundSize:cover; backgroundPosition:50% 50%; minHeight:100%
              div.swiper-slide-inner | box=720,2485,550,499 | color:rgb(255, 255, 255); textAlign:center; backgroundPosition:50% 50%; padding:50px; display:flex; justifyContent:center; alignItems:center; position:absolute
                div.swiper-slide-contents.animated.fadeInUp | box=995,2734,0,0 | maxWidth:66%; opacity:0.621369; transform:matrix(1, 0, 0, 1, 0, 0)
            div.elementor-repeater-item-bb1d340.swiper-slide.swiper-slide-duplicate | box=720,2485,550,499 | overflow:hidden; position:relative; opacity:0; transform:matrix(1, 0, 0, 1, -1100, 0)
              div.swiper-slide-bg | box=720,2485,550,499 | backgroundImage:url("/images/2026/09/S3.png"); backgroundSize:cover; backgroundPosition:50% 50%; minHeight:100%
              div.swiper-slide-inner | box=720,2485,550,499 | color:rgb(255, 255, 255); textAlign:center; backgroundPosition:50% 50%; padding:50px; display:flex; justifyContent:center; alignItems:center; position:absolute
                div.swiper-slide-contents.animated.fadeInUp | box=995,2734,0,0 | maxWidth:66%; opacity:0.621369; transform:matrix(1, 0, 0, 1, 0, 0)
            div.elementor-repeater-item-d4f893e.swiper-slide.swiper-slide-duplicate | box=720,2485,550,499 | overflow:hidden; position:relative; opacity:0; transform:matrix(1, 0, 0, 1, -1650, 0)
              div.swiper-slide-bg | box=720,2485,550,499 | backgroundImage:url("/images/2026/09/S2.png"); backgroundSize:cover; backgroundPosition:50% 50%; minHeight:100%
              div.swiper-slide-inner | box=720,2485,550,499 | color:rgb(255, 255, 255); textAlign:center; backgroundPosition:50% 50%; padding:50px; display:flex; justifyContent:center; alignItems:center; position:absolute
                div.swiper-slide-contents.animated.fadeInUp | box=995,2734,0,0 | maxWidth:66%; opacity:0.621369; transform:matrix(1, 0, 0, 1, 0, 0)
            div.elementor-repeater-item-347dae0.swiper-slide.swiper-slide-duplicate | box=720,2485,550,499 | overflow:hidden; position:relative; opacity:0; transform:matrix(1, 0, 0, 1, -2200, 0)
              div.swiper-slide-bg | box=720,2485,550,499 | backgroundImage:url("/images/2026/09/S4.png"); backgroundSize:cover; backgroundPosition:50% 50%; minHeight:100%
              div.swiper-slide-inner | box=720,2485,550,499 | color:rgb(255, 255, 255); textAlign:center; backgroundPosition:50% 50%; padding:50px; display:flex; justifyContent:center; alignItems:center; position:absolute
                div.swiper-slide-contents.animated.fadeInUp | box=995,2734,0,0 | maxWidth:66%; opacity:0.621369; transform:matrix(1, 0, 0, 1, 0, 0)
            div.elementor-repeater-item-7139648.swiper-slide.swiper-slide-duplicate | box=720,2485,550,499 | overflow:hidden; position:relative; opacity:0; transform:matrix(1, 0, 0, 1, -2750, 0)
              div.swiper-slide-bg | box=720,2485,550,499 | backgroundColor:rgb(187, 187, 187); backgroundImage:url("/images/2026/09/S6.png"); backgroundSize:cover; backgroundPosition:50% 50%; minHeight:100%
              div.swiper-slide-inner | box=720,2485,550,499 | color:rgb(255, 255, 255); textAlign:center; backgroundPosition:50% 50%; padding:50px; display:flex; justifyContent:center; alignItems:center; position:absolute
                div.swiper-slide-contents.animated.fadeInUp | box=995,2734,0,0 | maxWidth:66%; opacity:0.621369; transform:matrix(1, 0, 0, 1, 0, 0)
            div.elementor-repeater-item-2fa0381.swiper-slide | box=720,2485,550,499 | overflow:hidden; position:relative; opacity:0; transform:matrix(1, 0, 0, 1, -3300, 0)
              div.swiper-slide-bg | box=720,2485,550,499 | backgroundImage:url("/images/2026/09/S1.png"); backgroundSize:cover; backgroundPosition:50% 50%; minHeight:100%
              div.swiper-slide-inner | box=720,2485,550,499 | color:rgb(255, 255, 255); textAlign:center; backgroundPosition:50% 50%; padding:50px; display:flex; justifyContent:center; alignItems:center; position:absolute
                div.swiper-slide-contents.animated.fadeInUp | box=995,2734,0,0 | maxWidth:66%; opacity:0.621369; transform:matrix(1, 0, 0, 1, 0, 0)
            div.elementor-repeater-item-bd50e0a.swiper-slide.swiper-slide-prev | box=720,2485,550,499 | overflow:hidden; position:relative; opacity:0; transform:matrix(1, 0, 0, 1, -3850, 0)
              div.swiper-slide-bg | box=720,2485,550,499 | backgroundImage:url("/images/2026/09/S4.png"); backgroundSize:cover; backgroundPosition:50% 50%; minHeight:100%
              div.swiper-slide-inner | box=720,2485,550,499 | color:rgb(255, 255, 255); textAlign:center; backgroundPosition:50% 50%; padding:50px; display:flex; justifyContent:center; alignItems:center; position:absolute
                div.swiper-slide-contents.animated.fadeInUp | box=995,2734,0,0 | maxWidth:66%; opacity:0.621369; transform:matrix(1, 0, 0, 1, 0, 0)
            div.elementor-repeater-item-bb1d340.swiper-slide.swiper-slide-visible | box=720,2485,550,499 | overflow:hidden; position:relative; transform:matrix(1, 0, 0, 1, -4400, 0)
              div.swiper-slide-bg.elementor-ken-burns--active | box=720,2485,550,499 | backgroundImage:url("/images/2026/09/S3.png"); backgroundSize:cover; backgroundPosition:50% 50%; minHeight:100%
              div.swiper-slide-inner | box=720,2485,550,499 | color:rgb(255, 255, 255); textAlign:center; backgroundPosition:50% 50%; padding:50px; display:flex; justifyContent:center; alignItems:center; position:absolute
                div.swiper-slide-contents.animated.fadeInUp | box=995,2734,0,0 | maxWidth:66%; opacity:0.621369; transform:matrix(1, 0, 0, 1, 0, 0)
            div.elementor-repeater-item-d4f893e.swiper-slide.swiper-slide-next | box=720,2485,550,499 | overflow:hidden; position:relative; opacity:0; transform:matrix(1, 0, 0, 1, -4950, 0)
              div.swiper-slide-bg | box=720,2485,550,499 | backgroundImage:url("/images/2026/09/S2.png"); backgroundSize:cover; backgroundPosition:50% 50%; minHeight:100%
              div.swiper-slide-inner | box=720,2485,550,499 | color:rgb(255, 255, 255); textAlign:center; backgroundPosition:50% 50%; padding:50px; display:flex; justifyContent:center; alignItems:center; position:absolute
                div.swiper-slide-contents.animated.fadeInUp | box=995,2734,0,0 | maxWidth:66%; opacity:0.621369; transform:matrix(1, 0, 0, 1, 0, 0)
            div.elementor-repeater-item-347dae0.swiper-slide | box=720,2485,550,499 | overflow:hidden; position:relative; opacity:0; transform:matrix(1, 0, 0, 1, -5500, 0)
              div.swiper-slide-bg | box=720,2485,550,499 | backgroundImage:url("/images/2026/09/S4.png"); backgroundSize:cover; backgroundPosition:50% 50%; minHeight:100%
              div.swiper-slide-inner | box=720,2485,550,499 | color:rgb(255, 255, 255); textAlign:center; backgroundPosition:50% 50%; padding:50px; display:flex; justifyContent:center; alignItems:center; position:absolute
                div.swiper-slide-contents.animated.fadeInUp | box=995,2734,0,0 | maxWidth:66%; opacity:0.621369; transform:matrix(1, 0, 0, 1, 0, 0)
            div.elementor-repeater-item-7139648.swiper-slide | box=720,2485,550,499 | overflow:hidden; position:relative; opacity:0; transform:matrix(1, 0, 0, 1, -6050, 0)
              div.swiper-slide-bg | box=720,2485,550,499 | backgroundColor:rgb(187, 187, 187); backgroundImage:url("/images/2026/09/S6.png"); backgroundSize:cover; backgroundPosition:50% 50%; minHeight:100%
              div.swiper-slide-inner | box=720,2485,550,499 | color:rgb(255, 255, 255); textAlign:center; backgroundPosition:50% 50%; padding:50px; display:flex; justifyContent:center; alignItems:center; position:absolute
                div.swiper-slide-contents.animated.fadeInUp | box=995,2734,0,0 | maxWidth:66%; opacity:0.621369; transform:matrix(1, 0, 0, 1, 0, 0)
            div.elementor-repeater-item-2fa0381.swiper-slide.swiper-slide-duplicate | box=720,2485,550,499 | overflow:hidden; position:relative; opacity:0; transform:matrix(1, 0, 0, 1, -6600, 0)
              div.swiper-slide-bg | box=720,2485,550,499 | backgroundImage:url("/images/2026/09/S1.png"); backgroundSize:cover; backgroundPosition:50% 50%; minHeight:100%
              div.swiper-slide-inner | box=720,2485,550,499 | color:rgb(255, 255, 255); textAlign:center; backgroundPosition:50% 50%; padding:50px; display:flex; justifyContent:center; alignItems:center; position:absolute
                div.swiper-slide-contents.animated.fadeInUp | box=995,2734,0,0 | maxWidth:66%; opacity:0.621369; transform:matrix(1, 0, 0, 1, 0, 0)
            div.elementor-repeater-item-bd50e0a.swiper-slide.swiper-slide-duplicate | box=720,2485,550,499 | overflow:hidden; position:relative; opacity:0; transform:matrix(1, 0, 0, 1, -7150, 0)
              div.swiper-slide-bg | box=720,2485,550,499 | backgroundImage:url("/images/2026/09/S4.png"); backgroundSize:cover; backgroundPosition:50% 50%; minHeight:100%
              div.swiper-slide-inner | box=720,2485,550,499 | color:rgb(255, 255, 255); textAlign:center; backgroundPosition:50% 50%; padding:50px; display:flex; justifyContent:center; alignItems:center; position:absolute
                div.swiper-slide-contents.animated.fadeInUp | box=995,2734,0,0 | maxWidth:66%; opacity:0.621369; transform:matrix(1, 0, 0, 1, 0, 0)
            div.elementor-repeater-item-bb1d340.swiper-slide.swiper-slide-duplicate | box=720,2485,550,499 | overflow:hidden; position:relative; opacity:0; transform:matrix(1, 0, 0, 1, -7700, 0)
              div.swiper-slide-bg | box=720,2485,550,499 | backgroundImage:url("/images/2026/09/S3.png"); backgroundSize:cover; backgroundPosition:50% 50%; minHeight:100%
              div.swiper-slide-inner | box=720,2485,550,499 | color:rgb(255, 255, 255); textAlign:center; backgroundPosition:50% 50%; padding:50px; display:flex; justifyContent:center; alignItems:center; position:absolute
                div.swiper-slide-contents.animated.fadeInUp | box=995,2734,0,0 | maxWidth:66%; opacity:0.621369; transform:matrix(1, 0, 0, 1, 0, 0)
            div.elementor-repeater-item-d4f893e.swiper-slide.swiper-slide-duplicate | box=720,2485,550,499 | overflow:hidden; position:relative; opacity:0; transform:matrix(1, 0, 0, 1, -8250, 0)
              div.swiper-slide-bg | box=720,2485,550,499 | backgroundImage:url("/images/2026/09/S2.png"); backgroundSize:cover; backgroundPosition:50% 50%; minHeight:100%
              div.swiper-slide-inner | box=720,2485,550,499 | color:rgb(255, 255, 255); textAlign:center; backgroundPosition:50% 50%; padding:50px; display:flex; justifyContent:center; alignItems:center; position:absolute
                div.swiper-slide-contents.animated.fadeInUp | box=995,2734,0,0 | maxWidth:66%; opacity:0.621369; transform:matrix(1, 0, 0, 1, 0, 0)
            div.elementor-repeater-item-347dae0.swiper-slide.swiper-slide-duplicate | box=720,2485,550,499 | overflow:hidden; position:relative; opacity:0; transform:matrix(1, 0, 0, 1, -8800, 0)
              div.swiper-slide-bg | box=720,2485,550,499 | backgroundImage:url("/images/2026/09/S4.png"); backgroundSize:cover; backgroundPosition:50% 50%; minHeight:100%
              div.swiper-slide-inner | box=720,2485,550,499 | color:rgb(255, 255, 255); textAlign:center; backgroundPosition:50% 50%; padding:50px; display:flex; justifyContent:center; alignItems:center; position:absolute
                div.swiper-slide-contents.animated.fadeInUp | box=995,2734,0,0 | maxWidth:66%; opacity:0.621369; transform:matrix(1, 0, 0, 1, 0, 0)
            div.elementor-repeater-item-7139648.swiper-slide.swiper-slide-duplicate | box=720,2485,550,499 | overflow:hidden; position:relative; opacity:0; transform:matrix(1, 0, 0, 1, -9350, 0)
              div.swiper-slide-bg | box=720,2485,550,499 | backgroundColor:rgb(187, 187, 187); backgroundImage:url("/images/2026/09/S6.png"); backgroundSize:cover; backgroundPosition:50% 50%; minHeight:100%
              div.swiper-slide-inner | box=720,2485,550,499 | color:rgb(255, 255, 255); textAlign:center; backgroundPosition:50% 50%; padding:50px; display:flex; justifyContent:center; alignItems:center; position:absolute
                div.swiper-slide-contents.animated.fadeInUp | box=995,2734,0,0 | maxWidth:66%; opacity:0.621369; transform:matrix(1, 0, 0, 1, 0, 0)
          span.swiper-notification | box=720,2485,0,0 | position:absolute; right:550px; bottom:499px; zIndex:-1000; opacity:0```
