# Practitioners Specification

## Overview
- **Target file:** `src/components/Practitioners.tsx`
- **Screenshots:** `docs/design-references/section-15.png` (intro), `section-16.png`, `section-17.png`, `section-18.png`, `section-19.png` (rows)
- **Interaction model:** static; fadeIn entrance.
- **Raw sections:** 15 (intro, id `PRACTITIONERS`), 16–19 (rows of 3, 3, 3, 2)

## Intro (raw 15)
- h2 "OUR PRACTITIONERS": Poppins italic 600 28.83px/37.48px `#000`, centered.
- Sub h2: two lines (`PRACTITIONERS_INTRO.subLines` joined by `<br>`), Poppins italic 500 (see outline for size, ~20px) `#000`, centered.

## Rows (raw 16–19)
- Container 1140 boxed (x 150→1290). Rows 16–18: three 380px columns; row 19: two 570px columns. Row gaps per outline (row tops: 5002, 5455, 6023, 6648).
- Card (each column, centered text):
  - Image: centered, displayed at a fixed small size per card (e.g. Sofia ~100×130; they are rendered at the widths in the outline `box` values — use those exact rendered widths/heights; do NOT upscale). 
  - Name h3: Poppins italic 500 ~22px `#000` (check outline), margin ~10px.
  - Role h4 (optional): Poppins italic 500 15px/18px `#282828` (Anna's: 14px/16.8px). Preserve `\n` line breaks as `<br>`.
  - Bio: Open Sans 300 ~14–15px/~26px, `#282828`-grey, centered; paragraphs separated. NOTE: some bios use different colours/weights in the live site (e.g. Domenic Knight's 2nd paragraph is darker/blue-ish, Kelly Sun etc.) — follow the outline's color values per text node.
- Top-align cards in each row.

## Content
`PRACTITIONERS_INTRO`, `PRACTITIONER_ROWS` from `@/data/site` (`Practitioner` type). Use `next/image` or plain `<img>` with explicit width/height. Wrap rows in `<Reveal>`.

## Responsive
- ≤767: single column, each card full width with ~30px side padding, centered; images keep their small rendered size.

## Exact computed styles (getComputedStyle outline, desktop 1440px)
Format: tag.classes | [widget] | box=x,y,w,h (page coords) | non-default computed props | TEXT/IMG/HREF/SVG. Image paths already mapped to local /images/...

```
# section 15 id=PRACTITIONERS visible=true
section.elementor-section.elementor-top-section.elementor-element | box=0,4848,1440,124 | fontSize:16px; fontWeight:200; fontFamily:Poppins, sans-serif; lineHeight:26.4px; color:rgb(40, 40, 40); margin:0px 0px 30px; position:relative | SETTINGS={"animation":"fadeIn"}
  div.elementor-container.elementor-column-gap-default | box=170,4848,1100,124 | margin:0px 170px; maxWidth:1100px; display:flex; position:relative
    div.elementor-widget-wrap.elementor-element-populated | box=170,4848,1100,124 | padding:10px; display:flex; flexWrap:wrap; position:relative
      div.elementor-element.elementor-widget.elementor-widget-heading | [heading.default] | box=180,4858,1080,37 | textAlign:center; margin:0px 0px 20px; position:relative
        h2.elementor-heading-title.elementor-size-default | box=180,4858,1080,37 | fontSize:28.83px; fontWeight:600; fontStyle:italic; lineHeight:37.479px; color:rgb(0, 0, 0) | TEXT="OUR PRACTITIONERS"
      div.elementor-element.elementor-widget.elementor-widget-heading | [heading.default] | box=180,4916,1080,46 | textAlign:center; position:relative
        div.elementor-widget-container | box=180,4905,1080,57 | margin:-10.7969px 0px 0px
          h2.elementor-heading-title.elementor-size-default | box=180,4905,1080,57 | fontSize:22px; fontWeight:500; fontStyle:italic; lineHeight:28.6px; color:rgb(0, 0, 0) | TEXT="Our professionals are friendly, skilled and always here to help you & your loved ones"```
```
# section 16 id= visible=true
section.elementor-section.elementor-top-section.elementor-element | box=0,5002,1440,421 | fontSize:16px; fontWeight:200; fontFamily:Poppins, sans-serif; lineHeight:26.4px; color:rgb(40, 40, 40); margin:0px 0px 90px; position:relative | SETTINGS={"animation":"fadeIn"}
  div.elementor-container.elementor-column-gap-default | box=150,5002,1140,421 | margin:0px 150px; maxWidth:1140px; display:flex; position:relative
    div.elementor-widget-wrap.elementor-element-populated | box=150,5002,380,421 | padding:10px; display:flex; flexWrap:wrap; position:relative
      div.elementor-element.elementor-widget.elementor-widget-image | [image.default] | box=160,5012,360,132 | textAlign:center; margin:0px 0px 20px; position:relative
        img.elementor-animation-grow.attachment-large.size-large | box=160,5012,360,132 | maxWidth:100%; display:inline-block; overflow:clip | IMG=/images/2026/09/me-pic1-Copy.jpg (634x834) alt=""
      div.elementor-element.elementor-widget.elementor-widget-heading | [heading.default] | box=160,5164,360,18 | textAlign:center; margin:0px 0px 20px; position:relative
        h3.elementor-heading-title.elementor-size-default | box=160,5164,360,18 | fontSize:22px; fontWeight:500; fontStyle:italic; lineHeight:17.6px; letterSpacing:-0.4px; color:rgb(0, 0, 0) | TEXT="Sofia Bouzian"
      div.elementor-element.elementor-widget.elementor-widget-heading | [heading.default] | box=160,5202,360,18 | textAlign:center; margin:0px 0px 20px; position:relative
        h4.elementor-heading-title.elementor-size-default | box=160,5202,360,18 | fontSize:15px; fontWeight:500; fontStyle:italic; lineHeight:18px | TEXT="Aesthetic Practitioner"
      div.elementor-element.elementor-widget.elementor-widget-text-editor | [text-editor.default] | box=160,5240,360,173 | fontSize:15px; fontWeight:400; fontFamily:"Open Sans", sans-serif; lineHeight:24.75px; textAlign:center; position:relative
        p | box=160,5240,360,99 |  | TEXT="Founder and Director of Yourhealthfirst Clinic & Health and Skin Clinic London.Aesthetic & Anti-aging Practitioner, Aesthetic Medicine, Skin specialist, Medical Adviser, BSN/ bsS (Hons)PgDip."
        p | box=160,5339,360,74 |  | TEXT="Most recently awarded Best Non-invasive Aesthetics and Medical treatments practitioner in London 2020"
    div.elementor-widget-wrap.elementor-element-populated | box=530,5002,380,421 | padding:10px; display:flex; flexWrap:wrap; position:relative
      div.elementor-element.elementor-widget.elementor-widget-image | [image.default] | box=540,5012,360,132 | textAlign:center; margin:0px 0px 20px; position:relative
        img.elementor-animation-grow.attachment-full.size-full | box=540,5012,360,132 | maxWidth:100%; display:inline-block; overflow:clip | IMG=/images/2025/02/dr.jpg (513x664) alt=""
      div.elementor-element.elementor-widget.elementor-widget-heading | [heading.default] | box=540,5164,360,18 | textAlign:center; margin:0px 0px 20px; position:relative
        h3.elementor-heading-title.elementor-size-default | box=540,5164,360,18 | fontSize:22px; fontWeight:500; fontStyle:italic; lineHeight:17.6px; letterSpacing:-0.4px; color:rgb(0, 0, 0) | TEXT="Dr Olga Gagua"
      div.elementor-element.elementor-widget.elementor-widget-heading | [heading.default] | box=540,5202,360,18 | textAlign:center; margin:0px 0px 20px; position:relative
        h4.elementor-heading-title.elementor-size-default | box=540,5202,360,18 | fontSize:15px; fontWeight:500; fontStyle:italic; lineHeight:18px | TEXT="Acupuncturist"
      div.elementor-element.elementor-widget.elementor-widget-text-editor | [text-editor.default] | box=540,5240,360,124 | fontSize:15px; fontWeight:400; fontFamily:"Open Sans", sans-serif; lineHeight:24.75px; textAlign:center; position:relative
        p | box=540,5240,360,124 |  | TEXT="Dr Gagua is a long-standing and internationally acclaimed specialist in Medical Acupuncture with decades of general practitioner experience, including mostly as a private GP in Harley street and Knightsbridge clinics."
    div.elementor-widget-wrap.elementor-element-populated | box=910,5002,380,421 | padding:10px; display:flex; flexWrap:wrap; position:relative
      div.elementor-element.elementor-widget.elementor-widget-image | [image.default] | box=920,5012,360,132 | textAlign:center; margin:0px 0px 20px; position:relative
        img.elementor-animation-grow.attachment-full.size-full | box=938,5012,324,132 | maxWidth:100%; display:inline-block; overflow:clip | IMG=/images/2025/02/dr777.jpg (324x219) alt=""
      div.elementor-element.elementor-widget.elementor-widget-heading | [heading.default] | box=920,5164,360,18 | textAlign:center; margin:0px 0px 20px; position:relative
        h3.elementor-heading-title.elementor-size-default | box=920,5164,360,18 | fontSize:22px; fontWeight:500; fontStyle:italic; lineHeight:17.6px; letterSpacing:-0.4px; color:rgb(0, 0, 0) | TEXT="Katie Macauley"
      div.elementor-element.elementor-widget__width-initial.elementor-widget | [text-editor.default] | box=920,5202,360,113 | fontWeight:300; fontFamily:"Open Sans", sans-serif; textAlign:center; maxWidth:102.379%; position:relative
        div.elementor-widget-container | box=920,5209,360,106 | margin:7.1875px 0px 0px
          p | box=920,5209,360,79 |  | TEXT="Specialise in making bespoke wigs for clients suffering genetic hair loss, Alopecia, of effects of Chemo."```
```
# section 17 id= visible=true
section.elementor-section.elementor-top-section.elementor-element | box=0,5455,1440,510 | fontSize:16px; fontWeight:200; fontFamily:Poppins, sans-serif; lineHeight:26.4px; color:rgb(40, 40, 40); margin:-57.5938px 0px 115.188px; position:relative | SETTINGS={"animation":"fadeIn"}
  div.elementor-container.elementor-column-gap-default | box=150,5455,1140,510 | margin:0px 150px; maxWidth:1140px; display:flex; position:relative
    div.elementor-widget-wrap.elementor-element-populated | box=150,5455,380,510 | padding:10px; display:flex; flexWrap:wrap; position:relative
      div.elementor-element.elementor-widget.elementor-widget-image | [image.default] | box=160,5465,360,132 | textAlign:center; margin:0px 0px 20px; position:relative
        img.elementor-animation-grow.attachment-large.size-large | box=240,5465,200,132 | maxWidth:100%; display:inline-block; overflow:clip | IMG=/images/2024/08/Anna.jpg (200x300) alt=""
      div.elementor-element.elementor-widget.elementor-widget-heading | [heading.default] | box=160,5617,360,18 | textAlign:center; margin:0px 0px 20px; position:relative
        h3.elementor-heading-title.elementor-size-default | box=160,5617,360,18 | fontSize:22px; fontWeight:500; fontStyle:italic; lineHeight:17.6px; letterSpacing:-0.4px; color:rgb(0, 0, 0) | TEXT="Anna Balcome"
      div.elementor-element.elementor-widget.elementor-widget-heading | [heading.default] | box=160,5655,360,29 | textAlign:center; margin:0px 0px 20px; position:relative
        div.elementor-widget-container | box=160,5650,360,34 | margin:-5px 0px 0px
          h4.elementor-heading-title.elementor-size-default | box=160,5650,360,34 | fontSize:14px; fontWeight:500; fontStyle:italic; lineHeight:16.8px | TEXT="B.S.c ( Hons) MRCPod MFPM RCP Podiatric Surgeon & Podiatrist/Chiropodist (Foot & Ankle )"
      div.elementor-element.elementor-widget.elementor-widget-text-editor | [text-editor.default] | box=160,5704,360,198 | fontSize:15px; fontWeight:400; fontFamily:"Open Sans", sans-serif; lineHeight:24.75px; textAlign:center; position:relative
        p | box=160,5704,360,149 |  | TEXT="Clinic Following her qualification in 1992 at the University of Westminster, Anna Specialised in various podiatric fields that gives her a broad scope of practice that includes treatment of sport injuries, diabetes, paediatrics, the ability to advise and treat surgically if necessary."
        p | box=160,5852,360,50 |  | TEXT="In 2008 Anna was invited to become an Honorary Consultant for St Lukes Hospital for the Clergy."
    div.elementor-widget-wrap.elementor-element-populated | box=530,5455,380,510 | padding:10px; display:flex; flexWrap:wrap; position:relative
      div.elementor-element.elementor-widget.elementor-widget-image | [image.default] | box=540,5465,360,132 | textAlign:center; margin:0px 0px 20px; position:relative
        img.elementor-animation-grow.attachment-full.size-full | box=540,5465,360,132 | maxWidth:100%; display:inline-block; overflow:clip | IMG=/images/2025/02/fopz.png (594x591) alt=""
      div.elementor-element.elementor-widget.elementor-widget-heading | [heading.default] | box=540,5617,360,18 | textAlign:center; margin:0px 0px 20px; position:relative
        h3.elementor-heading-title.elementor-size-default | box=540,5617,360,18 | fontSize:22px; fontWeight:500; fontStyle:italic; lineHeight:17.6px; letterSpacing:-0.4px; color:rgb(0, 0, 0) | TEXT="Foz"
      div.elementor-element.elementor-widget.elementor-widget-heading | [heading.default] | box=540,5655,360,72 | textAlign:center; margin:0px 0px 20px; position:relative
        h4.elementor-heading-title.elementor-size-default | box=540,5655,360,72 | fontSize:15px; fontWeight:500; fontStyle:italic; lineHeight:18px | TEXT="Specialise in Tear Trough Nurse Prescriber Natural Full Face Transformations"
      div.elementor-element.elementor-widget.elementor-widget-text-editor | [text-editor.default] | box=540,5747,360,208 | fontSize:15px; fontWeight:500; fontFamily:"Open Sans", sans-serif; lineHeight:24.75px; textAlign:center; position:relative
        div.elementor-widget-container | box=540,5733,360,223 | margin:-14.3906px 0px 0px
          p | box=540,5733,360,223 |  | TEXT="Has a brilliant reputation of kindness and compassion with hands set to high standard skills performing her best work daily bringing a smile to many faces. She is heavily talented with diverse skills in aesthetics. Foz is trained in complications to assure everyone comfort and safety. Her background leading from mental health the practice is focused on a balanced mind and body giving that extra support every time."
    div.elementor-widget-wrap.elementor-element-populated | box=910,5455,380,510 | padding:10px; display:flex; flexWrap:wrap; position:relative
      div.elementor-element.elementor-widget.elementor-widget-image | [image.default] | box=920,5465,360,132 | textAlign:center; margin:0px 0px 20px; position:relative
        img.elementor-animation-grow.attachment-large.size-large | box=952,5465,296,132 | maxWidth:100%; display:inline-block; overflow:clip | IMG=/images/2025/02/night.jpg (296x314) alt=""
      div.elementor-element.elementor-widget.elementor-widget-heading | [heading.default] | box=920,5617,360,18 | textAlign:center; margin:0px 0px 20px; position:relative
        h3.elementor-heading-title.elementor-size-default | box=920,5617,360,18 | fontSize:22px; fontWeight:500; fontStyle:italic; lineHeight:17.6px; letterSpacing:-0.4px; color:rgb(0, 0, 0) | TEXT="Domenic Knight"
      div.elementor-element.elementor-widget.elementor-widget-heading | [heading.default] | box=920,5655,360,29 | textAlign:center; margin:0px 0px 20px; position:relative
        div.elementor-widget-container | box=920,5650,360,34 | margin:-5px 0px 0px
          h4.elementor-heading-title.elementor-size-default | box=920,5650,360,34 | fontSize:14px; fontWeight:500; fontStyle:italic; lineHeight:16.8px | TEXT="Licensed Master Practitioner of NLP and Hypnotherapy"
      div.elementor-element.elementor-widget.elementor-widget-text-editor | [text-editor.default] | box=920,5704,360,250 | fontSize:15px; fontWeight:400; fontFamily:"Open Sans", sans-serif; lineHeight:24.75px; textAlign:center; position:relative
        div.elementor-widget-container | box=920,5696,360,232 | margin:-7.1875px 0px 0px
          p | box=920,5696,360,103 | backgroundColor:rgb(255, 255, 255); margin:0px 0px 25.6px
            span | box=932,5700,336,95 | fontFamily:Roboto; color:rgb(0, 0, 0); display:inline | TEXT="Licensed Trainer of NLP and Hypnotherapy, Recognised by The General Hypnotherapy Register (GHR), Validated by The General Hypnotherapy Standards Council (GHSC)."
          p | box=920,5825,360,103 | backgroundColor:rgb(255, 255, 255); margin:0px 0px 25.6px
            span | box=930,5829,340,95 | fontFamily:Roboto; color:rgb(0, 0, 0); display:inline | TEXT="Dominic is one of the UK’s most recognised and highly accredited Clinical Hypnotherapists and NLP Master Practitioners, providing relief to those suffering from life-altering conditions."```
```
# section 18 id= visible=true
section.elementor-section.elementor-top-section.elementor-element | box=0,6023,1440,582 | fontSize:16px; fontWeight:200; fontFamily:Poppins, sans-serif; lineHeight:26.4px; color:rgb(40, 40, 40); margin:-57.5938px 0px 100.797px; position:relative | SETTINGS={"animation":"fadeIn"}
  div.elementor-container.elementor-column-gap-default | box=150,6023,1140,582 | margin:0px 150px; maxWidth:1140px; display:flex; position:relative
    div.elementor-widget-wrap.elementor-element-populated | box=150,6023,380,582 | padding:10px; display:flex; flexWrap:wrap; position:relative
      div.elementor-element.elementor-widget.elementor-widget-image | [image.default] | box=160,6033,360,132 | textAlign:center; margin:0px 0px 20px; position:relative
        img.elementor-animation-grow.attachment-full.size-full | box=192,6033,296,132 | maxWidth:100%; display:inline-block; overflow:clip | IMG=/images/2025/02/fer.jpg (296x314) alt=""
      div.elementor-element.elementor-widget.elementor-widget-heading | [heading.default] | box=160,6185,360,18 | textAlign:center; margin:0px 0px 20px; position:relative
        h3.elementor-heading-title.elementor-size-default | box=160,6185,360,18 | fontSize:22px; fontWeight:500; fontStyle:italic; lineHeight:17.6px; letterSpacing:-0.4px; color:rgb(0, 0, 0) | TEXT="Dr Malgorzata Stanzek"
      div.elementor-element.elementor-widget.elementor-widget-text-editor | [text-editor.default] | box=160,6223,360,131 | fontWeight:300; fontFamily:"Open Sans", sans-serif; textAlign:center; position:relative
        div.elementor-widget-container | box=160,6248,360,106 | margin:25.1875px 0px 0px
          p | box=160,6248,360,106 |  | TEXT="Dr Malgorzata Stanzek is a GP and Doctor of Aesthetic Medicine graduated at the School of Aesthetic Medicine and Anti-aging in Warsaw at Polish Medical Association."
    div.elementor-widget-wrap.elementor-element-populated | box=530,6023,380,582 | padding:10px; display:flex; flexWrap:wrap; position:relative
      div.elementor-element.elementor-widget.elementor-widget-image | [image.default] | box=540,6033,360,132 | textAlign:center; margin:0px 0px 20px; position:relative
        img.elementor-animation-grow.attachment-full.size-full | box=540,6033,360,132 | maxWidth:100%; display:inline-block; overflow:clip | IMG=/images/2025/02/dr33.png (450x360) alt=""
      div.elementor-element.elementor-widget.elementor-widget-heading | [heading.default] | box=540,6185,360,18 | textAlign:center; margin:0px 0px 20px; position:relative
        h3.elementor-heading-title.elementor-size-default | box=540,6185,360,18 | fontSize:22px; fontWeight:500; fontStyle:italic; lineHeight:17.6px; letterSpacing:-0.4px; color:rgb(0, 0, 0) | TEXT="Dr Federica Boecklin"
      div.elementor-element.elementor-widget.elementor-widget-heading | [heading.default] | box=540,6223,360,12 | textAlign:center; margin:0px 0px 20px; position:relative
        div.elementor-widget-container | box=540,6218,360,17 | margin:-5px 0px 0px
          h4.elementor-heading-title.elementor-size-default | box=540,6218,360,17 | fontSize:14px; fontWeight:500; fontStyle:italic; lineHeight:16.8px | TEXT="Integrative Medicine Specialist in London"
      div.elementor-element.elementor-widget__width-initial.elementor-widget | [text-editor.default] | box=540,6254,369,211 | fontWeight:300; fontFamily:"Open Sans", sans-serif; textAlign:center; maxWidth:102.379%; position:relative
        div.elementor-widget-container | box=540,6254,369,211 |  | TEXT="Dr Federica Boecklin is a distinguished specialist in integrative medicine based in London, boasting over 30 years of extensive experience. She is renowned for her expertisein integrated cancer care, women’s health, pain management, stress management, children’sand adolescent health, and healthy ageing"
    div.elementor-widget-wrap.elementor-element-populated | box=910,6023,380,582 | padding:10px; display:flex; flexWrap:wrap; position:relative
      div.elementor-element.elementor-widget.elementor-widget-image | [image.default] | box=920,6033,360,132 | textAlign:center; margin:0px 0px 20px; position:relative
        img.elementor-animation-grow.attachment-full.size-full | box=920,6033,360,132 | maxWidth:100%; display:inline-block; overflow:clip | IMG=/images/2025/05/WhatsApp-Image-2025-05-16-at-11.38.15_28d57dcf.jpg (1080x1430) alt=""
      div.elementor-element.elementor-widget.elementor-widget-heading | [heading.default] | box=920,6185,360,18 | textAlign:center; margin:0px 0px 20px; position:relative
        h3.elementor-heading-title.elementor-size-default | box=920,6185,360,18 | fontSize:22px; fontWeight:500; fontStyle:italic; lineHeight:17.6px; letterSpacing:-0.4px; color:rgb(0, 0, 0) | TEXT="Kelly Sun"
      div.elementor-element.elementor-widget.elementor-widget-heading | [heading.default] | box=920,6223,360,29 | textAlign:center; margin:0px 0px 20px; position:relative
        div.elementor-widget-container | box=920,6218,360,34 | margin:-5px 0px 0px
          h4.elementor-heading-title.elementor-size-default | box=920,6218,360,34 | fontSize:14px; fontWeight:500; fontStyle:italic; lineHeight:16.8px | TEXT="Acupuncturist 
BAcC Member with 30 years of experience"
      div.elementor-element.elementor-widget__width-initial.elementor-widget | [text-editor.default] | box=920,6271,360,324 | fontWeight:300; fontFamily:"Open Sans", sans-serif; textAlign:center; maxWidth:102.379%; position:relative
        div.elementor-widget-container | box=920,6278,360,317 | margin:7.1875px 0px 0px
          p | box=920,6278,360,158 |  | TEXT="Qualified in both China and the UK, and have successfully treated many thousands of patients in both countries. My parents were medical doctors in China, and I have built extensively on their experience in both Traditional Chinese and Western medicine."
          p | box=920,6437,360,158 |  | TEXT="Traditional Chinese medicine (TCM) is an ancient form of medicine practiced in China for over 3000 years. The aim of Traditional Chinese medicine, which includes acupuncture, herbal medicine and body-based mindfulness practices is to treat the person as a whole."```
```
# section 19 id= visible=true
section.elementor-section.elementor-top-section.elementor-element | box=0,6648,1440,360 | fontSize:16px; fontWeight:200; fontFamily:Poppins, sans-serif; lineHeight:26.4px; color:rgb(40, 40, 40); margin:-57.5938px 0px 100.797px; position:relative | SETTINGS={"animation":"fadeIn"}
  div.elementor-container.elementor-column-gap-default | box=150,6648,1140,360 | margin:0px 150px; maxWidth:1140px; display:flex; position:relative
    div.elementor-widget-wrap.elementor-element-populated | box=150,6648,570,360 | padding:10px; display:flex; flexWrap:wrap; position:relative
      div.elementor-element.elementor-widget.elementor-widget-image | [image.default] | box=160,6658,550,135 | textAlign:center; margin:0px 0px 20px; position:relative
        img.elementor-animation-grow.attachment-full.size-full | box=301,6658,268,135 | maxWidth:100%; display:inline-block; overflow:clip | IMG=/images/2024/08/dr55.png (268x288) alt=""
      div.elementor-element.elementor-widget.elementor-widget-heading | [heading.default] | box=160,6813,550,18 | textAlign:center; margin:0px 0px 20px; position:relative
        h3.elementor-heading-title.elementor-size-default | box=160,6813,550,18 | fontSize:22px; fontWeight:500; fontStyle:italic; lineHeight:17.6px; letterSpacing:-0.4px; color:rgb(0, 0, 0) | TEXT="Dana Nizomova"
      div.elementor-element.elementor-widget.elementor-widget-text-editor | [text-editor.default] | box=160,6851,550,64 | fontWeight:300; fontFamily:"Open Sans", sans-serif; textAlign:center; position:relative
        div.elementor-widget-container | box=160,6862,550,53 | margin:11px 0px 0px
          p | box=160,6862,550,53 |  | TEXT="Expert in Permanent make up, Semi permanent lip blush, brows and lash line."
    div.elementor-widget-wrap.elementor-element-populated | box=720,6648,570,360 | padding:10px; display:flex; flexWrap:wrap; position:relative
      div.elementor-element.elementor-widget.elementor-widget-image | [image.default] | box=730,6658,550,138 | textAlign:center; margin:0px 0px 20px; position:relative
        img.elementor-animation-grow.attachment-full.size-full | box=793,6658,424,138 | maxWidth:100%; display:inline-block; overflow:clip | IMG=/images/2025/02/drr444.png (504x328) alt=""
      div.elementor-element.elementor-widget.elementor-widget-heading | [heading.default] | box=730,6816,550,18 | textAlign:center; margin:0px 0px 20px; position:relative
        h3.elementor-heading-title.elementor-size-default | box=730,6816,550,18 | fontSize:22px; fontWeight:500; fontStyle:italic; lineHeight:17.6px; letterSpacing:-0.4px; color:rgb(0, 0, 0) | TEXT="Hollie Bryant"
      div.elementor-element.elementor-widget.elementor-widget-heading | [heading.default] | box=730,6854,550,12 | textAlign:center; margin:0px 0px 20px; position:relative
        div.elementor-widget-container | box=730,6849,550,17 | margin:-5px 0px 0px
          h4.elementor-heading-title.elementor-size-default | box=730,6849,550,17 | fontSize:14px; fontWeight:500; fontStyle:italic; lineHeight:16.8px | TEXT="Surgical Wound Specialist"
      div.elementor-element.elementor-widget__width-initial.elementor-widget | [text-editor.default] | box=730,6886,550,112 | fontWeight:300; fontFamily:"Open Sans", sans-serif; textAlign:center; maxWidth:102.379%; position:relative
        div.elementor-widget-container | box=730,6919,550,79 | margin:33px 0px 0px
          p | box=730,6919,550,79 |  | TEXT="Nurser prescriber and professional cosmetic nurse practitioner with 17 years of post-registration experience, is now working in South Wales & Harley Street, London."```
