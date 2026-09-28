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

## Exact computed styles (getComputedStyle outline, desktop 1440px)
Format: tag.classes | [widget] | box=x,y,w,h (page coords) | non-default computed props | TEXT/IMG/HREF/SVG. Image paths already mapped to local /images/...

```
# section 20 id= visible=true
section.elementor-section.elementor-top-section.elementor-element | box=0,7109,1440,159 | fontSize:16px; fontWeight:200; fontFamily:Poppins, sans-serif; lineHeight:26.4px; color:rgb(40, 40, 40); backgroundColor:rgb(40, 40, 40); padding:40px; position:relative | SETTINGS={"background_background":"classic","animation":"fadeIn"}
  div.elementor-container.elementor-column-gap-no | box=150,7149,1140,79 | margin:0px 110px; maxWidth:1140px; display:flex; position:relative
    div.elementor-widget-wrap.elementor-element-populated | box=150,7149,458,79 | display:flex; flexWrap:wrap; position:relative
      div.elementor-element.elementor-widget.elementor-widget-heading | [heading.default] | box=150,7149,458,22 | margin:0px 0px 20px; position:relative
        h5.elementor-heading-title.elementor-size-default | box=150,7149,458,22 | fontSize:18px; fontWeight:500; fontStyle:italic; lineHeight:21.6px; color:rgb(226, 140, 31) | TEXT="Positive Feedback"
      div.elementor-element.elementor-widget.elementor-widget-heading | [heading.default] | box=150,7190,458,28 | position:relative
        div.elementor-widget-container | box=150,7176,458,42 | margin:-14px 0px 0px
          h3.elementor-heading-title.elementor-size-default | box=150,7176,458,42 | fontSize:32px; fontWeight:500; fontStyle:italic; lineHeight:41.6px; color:rgb(255, 255, 255) | TEXT="from other practitioners"
    div.elementor-widget-wrap.elementor-element-populated | box=608,7149,682,79 | display:flex; flexWrap:wrap; position:relative
      div.elementor-element.elementor-widget__width-initial.elementor-widget | [text-editor.default] | box=608,7149,663,79 | fontWeight:300; fontFamily:"Open Sans", sans-serif; color:rgb(255, 255, 255); maxWidth:97.214%; position:relative
        div.elementor-widget-container | box=614,7149,657,79 | margin:0px 0px 0px 6px
          p | box=614,7149,657,79 |  | TEXT="Everyone who has been in the clinic says that is a beautiful and calming place and their clients love the calming and serene energy on it. The ambience in the clinic is very friendly , its not just a space, its a unique experience to grow your business"```
```
# section 21 id= visible=true
section.elementor-section.elementor-top-section.elementor-element | box=0,7311,1440,347 | fontSize:16px; fontWeight:200; fontFamily:Poppins, sans-serif; lineHeight:26.4px; color:rgb(40, 40, 40); margin:43.1875px 0px 0px; position:relative | SETTINGS={"animation":"fadeIn"}
  div.elementor-container.elementor-column-gap-default | box=21,7311,1398,347 | margin:0px 21px; maxWidth:1398px; display:flex; position:relative
    div.elementor-widget-wrap.elementor-element-populated.e-swiper-container | box=21,7311,563,347 | backgroundColor:rgb(40, 40, 40); padding:30px; display:flex; flexWrap:wrap; position:relative
      div.elementor-element.elementor-testimonial--skin-default.elementor-testimonial--layout-image_inline | [testimonial-carousel.default] | box=51,7341,503,287 | position:relative
        div.elementor-main-swiper.swiper.swiper-initialized | box=64,7341,478,287 | margin:0px 12.5781px; overflow:hidden; zIndex:1
          div.swiper-wrapper | box=-1888,7341,478,287 | display:flex; alignItems:stretch; position:relative; zIndex:1; transform:matrix(1, 0, 0, 1, -1952, 0)
            div.swiper-slide.swiper-slide-duplicate | box=-1888,7341,478,287 | padding:20px; margin:0px 10px 0px 0px; overflow:hidden; position:relative; transform:matrix(1, 0, 0, 1, 0, 0)
              div.elementor-testimonial | box=-1868,7361,438,247 | textAlign:center
                div.elementor-testimonial__text | box=-1868,7361,438,180 | fontSize:15px; fontStyle:italic; lineHeight:22.5px; color:rgb(255, 255, 255) | TEXT="I really loved this clinic, they are very accommodating, the place is very clean and beautiful with every detail. It's very easy to find which is only 2 minutes walk from Bond St station or less than 5mnt walk from Oxford Circus underground, and lot of shops and restaurants close by. There is a parking garage just opposite John Lewis which is only 2mnt walk to the clinic."
                  b | box=-1733,7361,168,21 | fontWeight:700; display:inline | TEXT="Rented Full Day Room"
                div.elementor-testimonial__footer | box=-1868,7566,438,42 | margin:25px 0px 0px; display:flex; justifyContent:center; alignItems:center
                  cite.elementor-testimonial__cite | box=-1691,7566,84,42 | fontSize:14px; lineHeight:21px; display:flex; flexDirection:column
                    span.elementor-testimonial__name | box=-1691,7566,84,21 | fontWeight:700; color:rgb(255, 255, 255) | TEXT="Dr Ridley"
                    span.elementor-testimonial__title | box=-1691,7587,84,21 | color:rgb(255, 255, 255) | TEXT="August 2024"
            div.swiper-slide | box=-1400,7341,478,287 | padding:20px; margin:0px 10px 0px 0px; overflow:hidden; position:relative; transform:matrix(1, 0, 0, 1, 0, 0)
              div.elementor-testimonial | box=-1380,7361,438,157 | textAlign:center
                div.elementor-testimonial__text | box=-1380,7361,438,90 | fontSize:15px; fontStyle:italic; lineHeight:22.5px; color:rgb(255, 255, 255) | TEXT="I rented a room from Sofia she was very friendly and welcoming. The room was very clean and bright in a quiet location.
I would definitely rent there again and recommend anyone to use!"
                div.elementor-testimonial__footer | box=-1380,7476,438,42 | margin:25px 0px 0px; display:flex; justifyContent:center; alignItems:center
                  cite.elementor-testimonial__cite | box=-1203,7476,84,42 | fontSize:14px; lineHeight:21px; display:flex; flexDirection:column
                    span.elementor-testimonial__name | box=-1203,7476,84,21 | fontWeight:700; color:rgb(255, 255, 255) | TEXT="J pill"
                    span.elementor-testimonial__title | box=-1203,7497,84,21 | color:rgb(255, 255, 255) | TEXT="August 2024"
            div.swiper-slide | box=-912,7341,478,287 | padding:20px; margin:0px 10px 0px 0px; overflow:hidden; position:relative; transform:matrix(1, 0, 0, 1, 0, 0)
              div.elementor-testimonial | box=-892,7361,438,202 | textAlign:center
                div.elementor-testimonial__text | box=-892,7361,438,135 | fontSize:15px; fontStyle:italic; lineHeight:22.5px; color:rgb(255, 255, 255) | TEXT="We hired a room for our weekly clients for injections and we require a clean, good hygiene along with aesthetically pleasing clinic looking room. The rooms, waiting area and the toilets in this clinic are very clean. We would highly recommend as the price for the quality of the room you get is
amazing!"
                div.elementor-testimonial__footer | box=-892,7521,438,42 | margin:25px 0px 0px; display:flex; justifyContent:center; alignItems:center
                  cite.elementor-testimonial__cite | box=-722,7521,97,42 | fontSize:14px; lineHeight:21px; display:flex; flexDirection:column
                    span.elementor-testimonial__name | box=-722,7521,97,21 | fontWeight:700; color:rgb(255, 255, 255) | TEXT="PMU by Nisha"
                    span.elementor-testimonial__title | box=-722,7542,97,21 | color:rgb(255, 255, 255) | TEXT="August 2024"
            div.swiper-slide.swiper-slide-prev | box=-424,7341,478,287 | padding:20px; margin:0px 10px 0px 0px; overflow:hidden; position:relative; transform:matrix(1, 0, 0, 1, 0, 0)
              div.elementor-testimonial | box=-404,7361,438,90 | textAlign:center
                div.elementor-testimonial__text | box=-404,7361,438,23 | fontSize:15px; fontStyle:italic; lineHeight:22.5px; color:rgb(255, 255, 255) | TEXT="Very friendly, nice and clean."
                div.elementor-testimonial__footer | box=-404,7408,438,42 | margin:25px 0px 0px; display:flex; justifyContent:center; alignItems:center
                  cite.elementor-testimonial__cite | box=-252,7408,132,42 | fontSize:14px; lineHeight:21px; display:flex; flexDirection:column
                    span.elementor-testimonial__name | box=-252,7408,132,21 | fontWeight:700; color:rgb(255, 255, 255) | TEXT="Aesthetics London"
                    span.elementor-testimonial__title | box=-252,7429,132,21 | color:rgb(255, 255, 255) | TEXT="August 2024"
            div.swiper-slide.swiper-slide-active | box=64,7341,478,287 | padding:20px; margin:0px 10px 0px 0px; overflow:hidden; position:relative; transform:matrix(1, 0, 0, 1, 0, 0)
              div.elementor-testimonial | box=84,7361,438,112 | textAlign:center
                div.elementor-testimonial__text | box=84,7361,438,45 | fontSize:15px; fontStyle:italic; lineHeight:22.5px; color:rgb(255, 255, 255) | TEXT="Lovely place, I definitely recommend this place. The rooms are amazing for a day rental I had here."
                div.elementor-testimonial__footer | box=84,7431,438,42 | margin:25px 0px 0px; display:flex; justifyContent:center; alignItems:center
                  cite.elementor-testimonial__cite | box=246,7431,113,42 | fontSize:14px; lineHeight:21px; display:flex; flexDirection:column
                    span.elementor-testimonial__name | box=246,7431,113,21 | fontWeight:700; color:rgb(255, 255, 255) | TEXT="Henna K"
                    span.elementor-testimonial__title | box=246,7452,113,21 | color:rgb(255, 255, 255) | TEXT="September 2023"
            div.swiper-slide.swiper-slide-next | box=552,7341,478,287 | padding:20px; margin:0px 10px 0px 0px; overflow:hidden; position:relative; transform:matrix(1, 0, 0, 1, 0, 0)
              div.elementor-testimonial | box=572,7361,438,112 | textAlign:center
                div.elementor-testimonial__text | box=572,7361,438,45 | fontSize:15px; fontStyle:italic; lineHeight:22.5px; color:rgb(255, 255, 255) | TEXT="Excellent premises, great location! Very friendly staff, receptionists are great! I highly do recommend this clinic!"
                div.elementor-testimonial__footer | box=572,7431,438,42 | margin:25px 0px 0px; display:flex; justifyContent:center; alignItems:center
                  cite.elementor-testimonial__cite | box=734,7431,113,42 | fontSize:14px; lineHeight:21px; display:flex; flexDirection:column
                    span.elementor-testimonial__name | box=734,7431,113,21 | fontWeight:700; color:rgb(255, 255, 255) | TEXT="NuSkin"
                    span.elementor-testimonial__title | box=734,7452,113,21 | color:rgb(255, 255, 255) | TEXT="September 2023"
            div.swiper-slide | box=1040,7341,478,287 | padding:20px; margin:0px 10px 0px 0px; overflow:hidden; position:relative; transform:matrix(1, 0, 0, 1, 0, 0)
              div.elementor-testimonial | box=1060,7361,438,180 | textAlign:center
                div.elementor-testimonial__text | box=1060,7361,438,113 | fontSize:15px; fontStyle:italic; lineHeight:22.5px; color:rgb(255, 255, 255) | TEXT="Beautiful, spacious and very comfortable room, the couch is very comforting, my patients really love it. The clinic owner is very nice and helpful, nothing is too much trouble to her. I recommend this place."
                  b | box=1074,7361,339,21 | fontWeight:700; display:inline | TEXT="Beautiful Room Right In The Heart Of London"
                div.elementor-testimonial__footer | box=1060,7498,438,42 | margin:25px 0px 0px; display:flex; justifyContent:center; alignItems:center
                  cite.elementor-testimonial__cite | box=1185,7498,187,42 | fontSize:14px; lineHeight:21px; display:flex; flexDirection:column
                    span.elementor-testimonial__name | box=1185,7498,187,21 | fontWeight:700; color:rgb(255, 255, 255) | TEXT="Private Doctors North East"
                    span.elementor-testimonial__title | box=1185,7519,187,21 | color:rgb(255, 255, 255) | TEXT="August 2024"
            div.swiper-slide | box=1528,7341,478,287 | padding:20px; margin:0px 10px 0px 0px; overflow:hidden; position:relative; transform:matrix(1, 0, 0, 1, 0, 0)
              div.elementor-testimonial | box=1548,7361,438,247 | textAlign:center
                div.elementor-testimonial__text | box=1548,7361,438,180 | fontSize:15px; fontStyle:italic; lineHeight:22.5px; color:rgb(255, 255, 255) | TEXT="I really loved this clinic, they are very accommodating, the place is very clean and beautiful with every detail. It's very easy to find which is only 2 minutes walk from Bond St station or less than 5mnt walk from Oxford Circus underground, and lot of shops and restaurants close by. There is a parking garage just opposite John Lewis which is only 2mnt walk to the clinic."
                  b | box=1683,7361,168,21 | fontWeight:700; display:inline | TEXT="Rented Full Day Room"
                div.elementor-testimonial__footer | box=1548,7566,438,42 | margin:25px 0px 0px; display:flex; justifyContent:center; alignItems:center
                  cite.elementor-testimonial__cite | box=1725,7566,84,42 | fontSize:14px; lineHeight:21px; display:flex; flexDirection:column
                    span.elementor-testimonial__name | box=1725,7566,84,21 | fontWeight:700; color:rgb(255, 255, 255) | TEXT="Dr Ridley"
                    span.elementor-testimonial__title | box=1725,7587,84,21 | color:rgb(255, 255, 255) | TEXT="August 2024"
            div.swiper-slide.swiper-slide-duplicate | box=2016,7341,478,287 | padding:20px; margin:0px 10px 0px 0px; overflow:hidden; position:relative; transform:matrix(1, 0, 0, 1, 0, 0)
              div.elementor-testimonial | box=2036,7361,438,157 | textAlign:center
                div.elementor-testimonial__text | box=2036,7361,438,90 | fontSize:15px; fontStyle:italic; lineHeight:22.5px; color:rgb(255, 255, 255) | TEXT="I rented a room from Sofia she was very friendly and welcoming. The room was very clean and bright in a quiet location.
I would definitely rent there again and recommend anyone to use!"
                div.elementor-testimonial__footer | box=2036,7476,438,42 | margin:25px 0px 0px; display:flex; justifyContent:center; alignItems:center
                  cite.elementor-testimonial__cite | box=2213,7476,84,42 | fontSize:14px; lineHeight:21px; display:flex; flexDirection:column
                    span.elementor-testimonial__name | box=2213,7476,84,21 | fontWeight:700; color:rgb(255, 255, 255) | TEXT="J pill"
                    span.elementor-testimonial__title | box=2213,7497,84,21 | color:rgb(255, 255, 255) | TEXT="August 2024"
          span.swiper-notification | box=51,7341,0,0 | position:absolute; right:502.844px; bottom:287px; zIndex:-1000; opacity:0
    div.elementor-widget-wrap | box=584,7311,835,347 | backgroundImage:url("/images/2026/09/Waiting-area-1.png"); backgroundSize:cover; backgroundPosition:50% 50%; display:flex; flexWrap:wrap; position:relative```
