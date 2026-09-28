# Hero Specification

## Overview
- **Target file:** `src/components/Hero.tsx` (client component)
- **Screenshots:** `docs/design-references/section-02.png`, `full-desktop-1440.png` (top), `mobile-header.png`
- **Interaction model:** time-driven background slideshow + fadeIn entrance.
- **Raw section:** 02

## Layout / computed styles
- `<section>`: `position: relative; margin-top: -170px; padding: 100px;` height 686px at 1440 (content-driven). Background = slideshow layer (absolute inset 0, overflow hidden, z 0) + overlay (absolute inset 0, bg `rgb(5,5,5)`, opacity 0.45).
- Inner container: max 1240px, `min-height: 467px`, flex, align-items center. Widget wrap padding-top 89px.
- Eyebrow h2: "London Therapy Rooms  to" (two spaces verbatim) — Poppins italic 500 32px/41.6px, color `#e3e3e2`, center, margin-bottom 20px, widget has padding-top ~37px.
- H1: two lines "Rent in Marylebone, Harley Street District" / "Central London , W1G 0EB" (a `<br>` between) — Poppins italic 500 50px/70px, color `#fff`, center, margin-bottom 20px. At 1440 the text wraps to 3 lines (box 1240×210): "Rent in Marylebone, Harley Street / District Central London , / W1G 0EB" — the h1 widget is narrower; constrain width so it wraps like the screenshot (≈ max-width 820px centered works).
- Buttons row: container max 1140px (margin 0 50px), two 50% columns with 10px padding; left button aligned right, right button aligned left (they meet in the middle with 20px gap).
  - BOOK NOW: bg `#a48b65`, white, Poppins 500 18px/18px, padding 15px 30px, radius 5px, → `#Contact`. Hover bg `#282828`.
  - ENQUIRE: bg `#282828`, same type, → `#Contact`. Hover bg `#a48b65`.

## Slideshow behavior
- Slides `HERO.slides` (3 images), each full-bleed `background-size: cover; background-position: 50% 50%`.
- Each slide shows 5000ms; crossfade 500ms (opacity), infinite loop. Implement with state + setInterval and stacked absolutely-positioned divs with `transition: opacity 500ms`.
- Section also has fadeIn entrance (wrap content in `<Reveal>` or apply to section).

## Content
`HERO` from `@/data/site`.

## Responsive
- Tablet/mobile: padding reduces; at 390 section height ≈709 starting under header; eyebrow ~20px, H1 ~ 30px/40px (see mobile-header.png: H1 wraps over 4 lines "Rent in Marylebone, Harley / Street / District Central London , / W1G 0EB"), buttons stay side by side (BOOK NOW 140px-ish, ENQUIRE). Use padding 100px 10px at mobile; margin-top still -170px (mobile header is ~201px tall, so use -201px? The mobile header total is 58+143=201; the hero top at 390 is y=51 → margin-top -150px on mobile).

## Exact computed styles (getComputedStyle outline, desktop 1440px)
Format: tag.classes | [widget] | box=x,y,w,h (page coords) | non-default computed props | TEXT/IMG/HREF/SVG. Image paths already mapped to local /images/...

```
# section 2 id= visible=true
section.elementor-section.elementor-top-section.elementor-element | box=0,-28,1440,686 | fontSize:16px; fontWeight:200; fontFamily:Poppins, sans-serif; lineHeight:26.4px; color:rgb(40, 40, 40); padding:100px; margin:-170px 0px 0px; position:relative | SETTINGS={"background_background":"slideshow","animation":"fadeIn","background_slideshow_gallery":[{"id":667,"url":"https:\/\/londontherapyroomstorent.com\/wp-content\/uploads\/2024\/08\/IMG-20240826-WA0037.jpg"},{"id":670,"url":"https:\/\/londontherapyroomst
  div.elementor-background-slideshow.swiper.swiper-fade | box=0,-28,1440,686 | overflow:hidden; position:absolute; zIndex:0
    div.swiper-wrapper | box=0,-28,1440,686 | display:flex; position:relative; zIndex:1; transform:matrix(1, 0, 0, 1, 0, 0)
      div.elementor-background-slideshow__slide.swiper-slide.swiper-slide-duplicate | box=0,-28,1440,686 | overflow:hidden; position:relative; opacity:0; transform:matrix(1, 0, 0, 1, 0, 0)
        div.elementor-background-slideshow__slide__image | box=0,-28,1440,686 | backgroundImage:url("/images/2024/08/IMG-20240826-WA0037.jpg"); backgroundSize:cover; backgroundPosition:50% 50%
      div.elementor-background-slideshow__slide.swiper-slide.swiper-slide-duplicate | box=0,-28,1440,686 | overflow:hidden; position:relative; opacity:0; transform:matrix(1, 0, 0, 1, 1440, 0)
        div.elementor-background-slideshow__slide__image | box=0,-28,1440,686 | backgroundImage:url("/images/2024/08/IMG-20240826-WA0040.jpg"); backgroundSize:cover; backgroundPosition:50% 50%
      div.elementor-background-slideshow__slide.swiper-slide.swiper-slide-duplicate | box=0,-28,1440,686 | overflow:hidden; position:relative; opacity:0; transform:matrix(1, 0, 0, 1, 2880, 0)
        div.elementor-background-slideshow__slide__image | box=0,-28,1440,686 | backgroundImage:url("/images/2024/08/IMG-20240826-WA0024.jpg"); backgroundSize:cover; backgroundPosition:50% 50%
      div.elementor-background-slideshow__slide.swiper-slide.swiper-slide-prev | box=0,-28,1440,686 | overflow:hidden; position:relative; opacity:0; transform:matrix(1, 0, 0, 1, 4320, 0)
        div.elementor-background-slideshow__slide__image | box=0,-28,1440,686 | backgroundImage:url("/images/2024/08/IMG-20240826-WA0037.jpg"); backgroundSize:cover; backgroundPosition:50% 50%
      div.elementor-background-slideshow__slide.swiper-slide.swiper-slide-visible | box=0,-28,1440,686 | overflow:hidden; position:relative; transform:matrix(1, 0, 0, 1, 5760, 0)
        div.elementor-background-slideshow__slide__image | box=0,-28,1440,686 | backgroundImage:url("/images/2024/08/IMG-20240826-WA0040.jpg"); backgroundSize:cover; backgroundPosition:50% 50%
      div.elementor-background-slideshow__slide.swiper-slide.swiper-slide-next | box=0,-28,1440,686 | overflow:hidden; position:relative; opacity:0; transform:matrix(1, 0, 0, 1, 7200, 0)
        div.elementor-background-slideshow__slide__image | box=0,-28,1440,686 | backgroundImage:url("/images/2024/08/IMG-20240826-WA0024.jpg"); backgroundSize:cover; backgroundPosition:50% 50%
      div.elementor-background-slideshow__slide.swiper-slide.swiper-slide-duplicate | box=0,-28,1440,686 | overflow:hidden; position:relative; opacity:0; transform:matrix(1, 0, 0, 1, 8640, 0)
        div.elementor-background-slideshow__slide__image | box=0,-28,1440,686 | backgroundImage:url("/images/2024/08/IMG-20240826-WA0037.jpg"); backgroundSize:cover; backgroundPosition:50% 50%
      div.elementor-background-slideshow__slide.swiper-slide.swiper-slide-duplicate | box=0,-28,1440,686 | overflow:hidden; position:relative; opacity:0; transform:matrix(1, 0, 0, 1, 10080, 0)
        div.elementor-background-slideshow__slide__image | box=0,-28,1440,686 | backgroundImage:url("/images/2024/08/IMG-20240826-WA0040.jpg"); backgroundSize:cover; backgroundPosition:50% 50%
      div.elementor-background-slideshow__slide.swiper-slide.swiper-slide-duplicate | box=0,-28,1440,686 | overflow:hidden; position:relative; opacity:0; transform:matrix(1, 0, 0, 1, 11520, 0)
        div.elementor-background-slideshow__slide__image | box=0,-28,1440,686 | backgroundImage:url("/images/2024/08/IMG-20240826-WA0024.jpg"); backgroundSize:cover; backgroundPosition:50% 50%
    span.swiper-notification | box=0,-28,0,0 | position:absolute; right:1440px; bottom:685.781px; zIndex:-1000; opacity:0
  div.elementor-background-overlay | box=0,-28,1440,686 | backgroundColor:rgb(5, 5, 5); position:absolute; opacity:0.45
  div.elementor-container.elementor-column-gap-no | box=100,72,1240,486 | minHeight:467px; display:flex; alignItems:center; position:relative
    div.elementor-widget-wrap.elementor-element-populated | box=100,72,1240,486 | padding:89px 0px 0px; display:flex; flexWrap:wrap; position:relative
      div.elementor-element.elementor-widget.elementor-widget-heading | [heading.default] | box=100,161,1240,79 | textAlign:center; margin:0px 0px 20px; position:relative
        div.elementor-widget-container | box=100,161,1240,79 | padding:37.1875px 0px 0px
          h2.elementor-heading-title.elementor-size-default | box=100,198,1240,42 | fontSize:32px; fontWeight:500; fontStyle:italic; lineHeight:41.6px; color:rgb(227, 227, 226) | TEXT="London Therapy Rooms  to"
      div.elementor-element.elementor-widget.elementor-widget-heading | [heading.default] | box=100,260,1240,210 | textAlign:center; margin:0px 0px 20px; position:relative
        h1.elementor-heading-title.elementor-size-default | box=100,260,1240,210 | fontSize:50px; fontWeight:500; fontStyle:italic; lineHeight:70px; color:rgb(255, 255, 255) | TEXT="Rent in Marylebone, Harley Street District
Central London , W1G 0EB"
      div.elementor-container.elementor-column-gap-default | box=150,490,1140,68 | margin:0px 50px; maxWidth:1140px; display:flex; position:relative
        div.elementor-widget-wrap.elementor-element-populated | box=150,490,570,68 | padding:10px; display:flex; flexWrap:wrap; position:relative
          div.elementor-element.elementor-align-right.elementor-button-info | [button.default] | box=160,500,550,48 | textAlign:right; position:relative
            a.elementor-button.elementor-button-link.elementor-size-sm | box=549,500,161,48 | fontSize:18px; fontWeight:500; lineHeight:18px; color:rgb(255, 255, 255); textAlign:center; backgroundColor:rgb(164, 139, 101); padding:15px 30px; display:inline-block; borderRadius:5px | HREF=https://londontherapyroomstorent.com/#Contact
              span.elementor-button-content-wrapper | box=579,515,101,18 | display:flex; justifyContent:center; gap:5px
                span.elementor-button-text | box=579,515,101,18 |  | TEXT="BOOK NOW"
        div.elementor-widget-wrap.elementor-element-populated | box=720,490,570,68 | padding:10px; display:flex; flexWrap:wrap; position:relative
          div.elementor-element.elementor-align-left.elementor-button-info | [button.default] | box=730,500,550,48 | textAlign:left; position:relative
            a.elementor-button.elementor-button-link.elementor-size-sm | box=730,500,135,48 | fontSize:18px; fontWeight:500; lineHeight:18px; color:rgb(255, 255, 255); textAlign:center; backgroundColor:rgb(40, 40, 40); padding:15px 30px; display:inline-block; borderRadius:5px | HREF=https://londontherapyroomstorent.com/#Contact
              span.elementor-button-content-wrapper | box=760,515,75,18 | display:flex; justifyContent:center; gap:5px
                span.elementor-button-text | box=760,515,75,18 |  | TEXT="ENQUIRE"```
