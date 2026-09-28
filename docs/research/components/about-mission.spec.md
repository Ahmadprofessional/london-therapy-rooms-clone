# AboutSection + MissionSection Specification

## Overview
- **Target files:** `src/components/AboutSection.tsx`, `src/components/MissionSection.tsx` (share a layout: badge image column + text column; you may create a shared internal helper in either file)
- **Screenshots:** `docs/design-references/section-03.png` (about), `section-14.png` (mission)
- **Interaction model:** static; fadeIn entrance; button hover.
- **Raw sections:** 03 (about, id `Aboutus`), 14 (mission, id `vision`)

## About (raw 03)
- `<section id="Aboutus">` margin 80px 0. Boxed container max-width 1140px centered (at 1440: margin 0 150px). Two columns: left 429px (≈37.6%), right 711px (≈62.4%).
- Left col padding 10px: the UK Therapy Rooms member badge `<a href={MEMBER_BADGE.href} target=_blank>` with `<img>` 409×313 (max-width 100%).
- Right col padding 5px 0 0 20px:
  - h2 "About US": Poppins italic 500 32px/41.6px, color `#282828`, margin-bottom 20px.
  - h2 "Health & Skin Clinic": same type, color `#a48b65`; widget margin-top -14px.
  - Text: Open Sans 300 16px/26.4px `#282828`, two blocks (each its own line block), widget margin-top ~-7px, margin-bottom 20px.
  - Button "Learn more": bg `#a48b65`, white, Poppins 500 16px/16px, padding 15px 30px, radius 5px → `ABOUT.cta.href`. Hover bg `#282828`.

## Mission (raw 14)
- `<section id="vision">`. Same two-column pattern at 1440: container 170→1270 (1100px): left col 414px with the same badge (vertically centered in the column), right col 686px.
- h2 "Our mission and vision at": Poppins italic 500, color `#282828` (see outline for exact size); h2 "Health & Skin Clinic" color `#a48b65`.
- Paragraphs: Open Sans 300 16px/26.4px — two paragraphs with a blank line between.
- Button "ENQUIRE" gold → `#Contact`, hover `#282828`.
- Check the appended outline for exact paddings/margins of the mission section — they differ slightly from About.

## Content
`ABOUT`, `MISSION`, `MEMBER_BADGE` from `@/data/site`. Wrap sections in `<Reveal>` (`@/components/Reveal`).

## Responsive
- ≤767: stack — badge first (full width, ≈298px tall block at 390, image centered), then text with padding ≈ 0 30px; headings ~32px still; About section total ≈766px tall at 390.
- Tablet 768: see full-tablet-768.png (columns stay side by side or stack — verify in image).

## Exact computed styles (getComputedStyle outline, desktop 1440px)
Format: tag.classes | [widget] | box=x,y,w,h (page coords) | non-default computed props | TEXT/IMG/HREF/SVG. Image paths already mapped to local /images/...

```
# section 3 id=Aboutus visible=true
section.elementor-section.elementor-top-section.elementor-element | box=0,738,1440,333 | fontSize:16px; fontWeight:200; fontFamily:Poppins, sans-serif; lineHeight:26.4px; color:rgb(40, 40, 40); margin:80px 0px; position:relative | SETTINGS={"animation":"fadeIn"}
  div.elementor-container.elementor-column-gap-default | box=150,738,1140,333 | margin:0px 150px; maxWidth:1140px; display:flex; position:relative
    div.elementor-widget-wrap.elementor-element-populated | box=150,738,429,333 | padding:10px; display:flex; flexWrap:wrap; position:relative
      div.elementor-element.elementor-widget.elementor-widget-html | [html.default] | box=160,748,409,313 | position:relative
        a | box=160,890,409,25 | fontSize:18px; lineHeight:29.7px; color:rgb(226, 140, 31); display:inline | HREF=https://www.uktherapyrooms.co.uk/united-kingdom/london/therapy-room/wimpole-street-harley-street-newly-decorated-treatment-consulting-rooms-to-rent-in-harley-street-area-w1g-0eb-next-to-wigmore-pharmacy?from=badge
          img | box=160,748,409,313 | maxWidth:100%; display:inline; overflow:clip | IMG=https://ik.imagekit.io/uktherapyrooms/images/images/member-badge.jpeg (1678x1286) alt=""
    div.elementor-widget-wrap.elementor-element-populated | box=579,738,711,333 | padding:5px 0px 0px 20px; display:flex; flexWrap:wrap; position:relative
      div.elementor-element.elementor-widget.elementor-widget-heading | [heading.default] | box=599,743,691,42 | margin:0px 0px 20px; position:relative
        h2.elementor-heading-title.elementor-size-default | box=599,743,691,42 | fontSize:32px; fontWeight:500; fontStyle:italic; lineHeight:41.6px | TEXT="About US"
      div.elementor-element.elementor-widget.elementor-widget-heading | [heading.default] | box=599,804,691,28 | margin:0px 0px 20px; position:relative
        div.elementor-widget-container | box=599,790,691,42 | margin:-14px 0px 0px
          h2.elementor-heading-title.elementor-size-default | box=599,790,691,42 | fontSize:32px; fontWeight:500; fontStyle:italic; lineHeight:41.6px; color:rgb(164, 139, 101) | TEXT="Health & Skin Clinic"
      div.elementor-element.elementor-widget.elementor-widget-text-editor | [text-editor.default] | box=599,852,691,125 | fontWeight:300; fontFamily:"Open Sans", sans-serif; margin:0px 0px 20px; position:relative
        div.elementor-widget-container | box=599,845,691,132 | margin:-6.90625px 0px 0px
          div | box=599,845,691,53 |  | TEXT="We are proud to provide our practitioners state of the art treatment and London therapy rooms to rent."
          div | box=599,898,691,79 |  | TEXT="Situated in the heart of Marylebone, our clinic has been fitted to the highest standard possible. It is a calming and therapeutic environment, housing some of the best dedicated and established therapy experts under one room……."
      div.elementor-element.elementor-align-left.elementor-button-info | [button.default] | box=599,997,691,46 | textAlign:left; position:relative
        a.elementor-button.elementor-button-link.elementor-size-sm | box=599,997,151,46 | fontWeight:500; lineHeight:16px; color:rgb(255, 255, 255); textAlign:center; backgroundColor:rgb(164, 139, 101); padding:15px 30px; display:inline-block; borderRadius:5px | HREF=https://londontherapyroomstorent.com/about/
          span.elementor-button-content-wrapper | box=629,1012,91,16 | display:flex; justifyContent:center; gap:5px
            span.elementor-button-text | box=629,1012,91,16 |  | TEXT="Learn more"```
```
# section 14 id=vision visible=true
section.elementor-section.elementor-top-section.elementor-element | box=0,4239,1440,529 | fontSize:16px; fontWeight:200; fontFamily:Poppins, sans-serif; lineHeight:26.4px; color:rgb(40, 40, 40); margin:80px 0px; position:relative | SETTINGS={"animation":"fadeIn"}
  div.elementor-container.elementor-column-gap-default | box=170,4239,1100,529 | margin:0px 170px; maxWidth:1100px; display:flex; position:relative
    div.elementor-widget-wrap.elementor-element-populated | box=170,4239,414,529 | padding:10px; display:flex; flexWrap:wrap; alignItems:center; position:relative
      div.elementor-element.elementor-widget.elementor-widget-html | [html.default] | box=180,4353,394,302 | position:relative
        a | box=180,4489,394,25 | fontSize:18px; lineHeight:29.7px; color:rgb(226, 140, 31); display:inline | HREF=https://www.uktherapyrooms.co.uk/united-kingdom/london/therapy-room/wimpole-street-harley-street-newly-decorated-treatment-consulting-rooms-to-rent-in-harley-street-area-w1g-0eb-next-to-wigmore-pharmacy?from=badge
          img | box=180,4353,394,302 | maxWidth:100%; display:inline; overflow:clip | IMG=https://ik.imagekit.io/uktherapyrooms/images/images/member-badge.jpeg (1678x1286) alt=""
    div.elementor-widget-wrap.elementor-element-populated | box=584,4239,686,529 | padding:5px 0px 0px 20px; display:flex; flexWrap:wrap; position:relative
      div.elementor-element.elementor-widget.elementor-widget-heading | [heading.default] | box=604,4244,666,42 | margin:0px 0px 20px; position:relative
        h2.elementor-heading-title.elementor-size-default | box=604,4244,666,42 | fontSize:32px; fontWeight:500; fontStyle:italic; lineHeight:41.6px | TEXT="Our mission and vision at"
      div.elementor-element.elementor-widget.elementor-widget-heading | [heading.default] | box=604,4306,666,21 | margin:0px 0px 20px; position:relative
        div.elementor-widget-container | box=604,4285,666,42 | margin:-21px 0px 0px
          h2.elementor-heading-title.elementor-size-default | box=604,4285,666,42 | fontSize:32px; fontWeight:500; fontStyle:italic; lineHeight:41.6px; color:rgb(164, 139, 101) | TEXT="Health & Skin Clinic"
      div.elementor-element.elementor-widget.elementor-widget-text-editor | [text-editor.default] | box=604,4346,666,356 | fontWeight:400; fontFamily:"Open Sans", sans-serif; margin:0px 0px 20px; position:relative
        div.elementor-widget-container | box=604,4333,666,369 | margin:-13.3125px 0px 0px
          div | box=604,4333,666,158 |  | TEXT="We strive to provide to all our clients with a relaxing environment and safe space to practice to our practitioners and their clients. We empower our practitioners and help them meet their aspirations and support each other. Our location Based in central London, only 2 minutes walk from Bond Street Station and 5 minutes walk from Oxford Circus underground which makes a very easy access to the public transport. Mayfair is only few minutes walk."
          div | box=604,4518,666,185 |  | TEXT="Our London therapy rooms to rent, each exuding a serene and uncluttered ambience, are designed to promote a sense of safety and relaxation, essential for the therapeutic relationship to flourish with the other practitioners and their clients. The rooms are with full natural light, and the new and comfortable furniture enhances the overall experience of luxury. Unlike their previous experiences, therapists here won’t encounter the stress of quick handovers or neglected spaces. Everything is meticulously maintained, clean allowing therapists to focus on their clients."
      div.elementor-element.elementor-align-left.elementor-button-info | [button.default] | box=604,4722,666,46 | textAlign:left; position:relative
        a.elementor-button.elementor-button-link.elementor-size-sm | box=604,4722,126,46 | fontWeight:500; lineHeight:16px; color:rgb(255, 255, 255); textAlign:center; backgroundColor:rgb(164, 139, 101); padding:15px 30px; display:inline-block; borderRadius:5px | HREF=https://londontherapyroomstorent.com/#Contact
          span.elementor-button-content-wrapper | box=634,4737,66,16 | display:flex; justifyContent:center; gap:5px
            span.elementor-button-text | box=634,4737,66,16 |  | TEXT="ENQUIRE"```
