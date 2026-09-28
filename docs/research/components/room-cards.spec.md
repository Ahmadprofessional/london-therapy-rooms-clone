# RoomCardsSection + GalleryPopup Specification

## Overview
- **Target files:**
  - `src/components/GalleryPopup.tsx` — modal with slide carousel (client)
  - `src/components/RoomCardsSection.tsx` — heading + 2×2 card grid (client)
- **Screenshots:** `docs/design-references/section-11.png` (heading), `section-12.png`, `section-13.png`, `rooms-cards-default.png`, `rooms-cards-hover-room1.png`, `popup-room1.png`, `popup-2.png`, `popup-3.png`, `popup-4.png`
- **Interaction model:** CSS hover background reveal + click-to-open popup with autoplay slide carousel.
- **Raw sections:** 11 (heading), 12 (row 1: Room 1, Room 2), 13 (row 2: Room 3, Waiting Area)

## Heading (raw 11)
- "Our London Therapy Rooms to Rent": Poppins italic 500 28.83px/37.48px, color `#e28c1f`, centered; section ~57px tall, spacing ~50px above cards. Use `ROOM_CARDS_HEADING`.

## Card grid (raw 12 + 13)
- Each row: container 1100px (x 170→1270), two 550px columns, height 489px; rows separated by ~20px (3161+489=3650 → 3670).
- **Verify each card's exact background colour, text colour and padding in the appended outline** and update `ROOM_CARDS` in `src/data/site.ts` if the values there differ (Room 1 dark `#282828`?, Room 2 light, Room 3 `#141414`?, Waiting light). Card column padding ≈ 41px 70px 36px (from hover capture: `padding: 41px 70px 36px`, bg in that capture was the element's own).
- Card content (left aligned, starting ~80px from top):
  - RoomIcon ~48px, color `#e28c1f`.
  - Title h3: Poppins 500 25px/32.5px `#e28c1f` (e.g. "Room 1 - Large"), margin ~20px.
  - Body: Open Sans 300 ~15-16px/26px, white on dark cards / `#282828`-ish grey on light cards.
  - "View All Images" button: bg `#a48b65`, white, Poppins 500 ~15px, padding ~12px 24px, radius 3px. Hover bg `#282828`.
- **Hover:** on hovering the card column, background-image = `card.hoverImage` (cover, center) with an overlay `card.hoverOverlay` at opacity 0.5 over it; content stays on top. `transition: background 0.3s`. Implement: absolutely positioned image layer + overlay layer with opacity 0→1 transition 0.3s on group-hover.

## GalleryPopup
- Props: `images: string[]`, `open`, `onClose`.
- Backdrop: fixed inset 0, `rgba(0,0,0,0.8)`, z-50, click closes. ESC closes. Lock body scroll while open.
- Dialog: 640×420 centered (max-width calc(100vw - 20px)), white bg, padding 10px (image area 620×400).
- Slider inside: horizontal **slide** transition 500ms, autoplay 3000ms, infinite, pause on hover. Slides are background-image cover/center.
- Arrows: ChevronLeftIcon/ChevronRightIcon 25px, color `rgba(237,237,237,0.9)`, vertically centered, ~20px from edges.
- Dots: centered near bottom (≈15px from bottom), 6px circles, black; inactive opacity ~0.5, active 1; gap ~12px.
- Close: CloseIcon 18px, color `#e28c1f`, at top 20px / right 20px of dialog (inside), with a white 26px box behind it (see popup-room1.png: the × sits in a small white square with a thin border).
- Fade-in of modal (~300ms).

## Content
`ROOM_CARDS_HEADING`, `ROOM_CARDS` from `@/data/site`; `RoomIcon, ChevronLeftIcon, ChevronRightIcon, CloseIcon` from `@/components/icons`. Wrap rows in `<Reveal>`.

## Responsive
- ≤767: cards stack 1 per row, full width (390), each ≈500px tall, padding ≈ 80px 60px; heading 2 lines centered (see mob slices: "Our London Therapy / Rooms to Rent").
- Popup on mobile: width calc(100vw - 20px), height scaled by aspect 640:420.

## Exact computed styles (getComputedStyle outline, desktop 1440px)
Format: tag.classes | [widget] | box=x,y,w,h (page coords) | non-default computed props | TEXT/IMG/HREF/SVG. Image paths already mapped to local /images/...

```
# section 11 id= visible=true
section.elementor-section.elementor-top-section.elementor-element | box=0,3054,1440,57 | fontSize:16px; fontWeight:200; fontFamily:Poppins, sans-serif; lineHeight:26.4px; color:rgb(40, 40, 40); margin:0px 0px 50px; position:relative | SETTINGS={"animation":"fadeIn"}
  div.elementor-container.elementor-column-gap-default | box=150,3054,1140,57 | margin:0px 150px; maxWidth:1140px; display:flex; position:relative
    div.elementor-widget-wrap.elementor-element-populated | box=150,3054,1140,57 | padding:10px; display:flex; flexWrap:wrap; position:relative
      div.elementor-element.elementor-widget.elementor-widget-heading | [heading.default] | box=160,3064,1120,37 | textAlign:center; position:relative
        h2.elementor-heading-title.elementor-size-default | box=160,3064,1120,37 | fontSize:28.83px; fontWeight:500; fontStyle:italic; lineHeight:37.479px; color:rgb(226, 140, 31) | TEXT="Our London Therapy Rooms to Rent"```
```
# section 12 id= visible=true
section.elementor-section.elementor-top-section.elementor-element | box=0,3161,1440,489 | fontSize:16px; fontWeight:200; fontFamily:Poppins, sans-serif; lineHeight:26.4px; color:rgb(40, 40, 40); margin:0px 0px 80px; position:relative | SETTINGS={"animation":"fadeIn"}
  div.elementor-container.elementor-column-gap-default | box=170,3161,1100,489 | margin:0px 170px; maxWidth:1100px; display:flex; position:relative
    div.elementor-widget-wrap.elementor-element-populated | box=170,3161,550,489 | backgroundColor:rgb(40, 40, 40); padding:80px; display:flex; flexWrap:wrap; position:relative
      div.elementor-background-overlay | box=170,3161,550,489 | backgroundColor:rgb(40, 40, 40); position:absolute
      div.elementor-element.elementor-view-default.elementor-widget | [icon.default] | box=250,3241,390,58 | margin:0px 0px 20px; position:relative
        div.elementor-icon | box=250,3241,50,50 | fontSize:50px; lineHeight:50px; color:rgb(226, 140, 31); textAlign:center; display:inline-block
          svg | box=250,3241,50,50 | overflow:hidden; position:relative | SVG=<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><g id="Outline"><path d="M61,38H37a1,1,0,0,0-1,1v5H7a3,3,0,0,0-3,3,2.966,2.966,0,0,0,.184,1H3a1,1,0,0,0-1,1v8a1,1,0,0,0,1,1H4v3a1,1,0,0,0,1,1H9a1,1,0,0,0,1-1V58h9v3a1,1,0,0,0,1,1h4a1,1,0,0,0,1-1V58H38v3a1,1,0,0,0,1,1h4a1,1,0,0,0,1-1V58H54v3a1,1,0,0,0,1,1h4a1,1,0,0,0,1-1V58h1a1,1,0,0,0,1-1V39A1,1,0,0,0,61,38ZM38,40H60v8H57.816A2.966,2.966,0,0,0,58,47V45a3,3,0,0,0-3-3H47.958a2.954,2.954,0,0,0-2.785,2H38ZM27,48H25.816a2.809,2.809,0,0,0,0-2H47.392C48.34,46,49,46.527,49,47s-.66,1-1.608,1Zm20.792-3.966A.843.843,0,0,1,47.958,44h4.084a.959.959,0,0,1,.958.958v2.084a.959.959,0,0,1-.958.958H50.778A2.524,2.524,0,0,0,51,47,3.263,3.263,0,0,0,47.7
      div.elementor-element.elementor-widget.elementor-widget-heading | [heading.default] | box=250,3320,390,33 | margin:0px 0px 20px; position:relative
        h3.elementor-heading-title.elementor-size-default | box=250,3320,390,33 | fontSize:25px; fontWeight:500; lineHeight:32.5px; color:rgb(226, 140, 31) | TEXT="Room 1 - Large"
      div.elementor-element.elementor-widget.elementor-widget-text-editor | [text-editor.default] | box=250,3372,390,132 | fontWeight:300; fontFamily:"Open Sans", sans-serif; color:rgb(255, 255, 255); margin:0px 0px 20px; position:relative
        p | box=250,3372,390,132 |  | TEXT="Perfect for work, our rooms offer a quiet and comfortable space with all the essentials you need to stay productive. Conveniently located, they provide easy access to everything you need to focus and get things done."
      div.elementor-element.elementor-align-left.elementor-button-info | [button.default] | box=250,3524,390,46 | textAlign:left; position:relative
        a.elementor-button.elementor-button-link.elementor-size-sm | box=250,3524,187,46 | fontWeight:500; lineHeight:16px; color:rgb(255, 255, 255); textAlign:center; backgroundColor:rgb(164, 139, 101); padding:15px 30px; display:inline-block; borderRadius:5px | HREF=#elementor-action%3Aaction%3Dpopup%3Aopen%26settings%3DeyJpZCI6Ijg2NiIsInRvZ2dsZSI6ZmFsc2V9
          span.elementor-button-content-wrapper | box=280,3539,127,16 | display:flex; justifyContent:center; gap:5px
            span.elementor-button-text | box=280,3539,127,16 |  | TEXT="View All Images"
    div.elementor-widget-wrap.elementor-element-populated | box=720,3161,550,489 | backgroundColor:rgb(255, 255, 255); padding:80px; display:flex; flexWrap:wrap; position:relative
      div.elementor-background-overlay | box=720,3161,550,489 | backgroundColor:rgb(238, 238, 238); position:absolute; opacity:0.74
      div.elementor-element.elementor-view-default.elementor-widget | [icon.default] | box=800,3241,390,58 | margin:0px 0px 20px; position:relative
        div.elementor-icon | box=800,3241,50,50 | fontSize:50px; lineHeight:50px; color:rgb(226, 140, 31); textAlign:center; display:inline-block
          svg | box=800,3241,50,50 | overflow:hidden; position:relative | SVG=<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><g id="Outline"><path d="M61,38H37a1,1,0,0,0-1,1v5H7a3,3,0,0,0-3,3,2.966,2.966,0,0,0,.184,1H3a1,1,0,0,0-1,1v8a1,1,0,0,0,1,1H4v3a1,1,0,0,0,1,1H9a1,1,0,0,0,1-1V58h9v3a1,1,0,0,0,1,1h4a1,1,0,0,0,1-1V58H38v3a1,1,0,0,0,1,1h4a1,1,0,0,0,1-1V58H54v3a1,1,0,0,0,1,1h4a1,1,0,0,0,1-1V58h1a1,1,0,0,0,1-1V39A1,1,0,0,0,61,38ZM38,40H60v8H57.816A2.966,2.966,0,0,0,58,47V45a3,3,0,0,0-3-3H47.958a2.954,2.954,0,0,0-2.785,2H38ZM27,48H25.816a2.809,2.809,0,0,0,0-2H47.392C48.34,46,49,46.527,49,47s-.66,1-1.608,1Zm20.792-3.966A.843.843,0,0,1,47.958,44h4.084a.959.959,0,0,1,.958.958v2.084a.959.959,0,0,1-.958.958H50.778A2.524,2.524,0,0,0,51,47,3.263,3.263,0,0,0,47.7
      div.elementor-element.elementor-widget.elementor-widget-heading | [heading.default] | box=800,3320,390,33 | margin:0px 0px 20px; position:relative
        h3.elementor-heading-title.elementor-size-default | box=800,3320,390,33 | fontSize:25px; fontWeight:500; lineHeight:32.5px; color:rgb(226, 140, 31) | TEXT="Room 2 - Medium"
      div.elementor-element.elementor-widget.elementor-widget-text-editor | [text-editor.default] | box=800,3372,390,132 | fontWeight:300; fontFamily:"Open Sans", sans-serif; margin:0px 0px 20px; position:relative
        p | box=800,3372,390,132 |  | TEXT="Perfect for work, our rooms offer a quiet and comfortable space with all the essentials you need to stay productive. Conveniently located, they provide easy access to everything you need to focus and get things done."
      div.elementor-element.elementor-align-left.elementor-button-info | [button.default] | box=800,3524,390,46 | textAlign:left; position:relative
        a.elementor-button.elementor-button-link.elementor-size-sm | box=800,3524,187,46 | fontWeight:500; lineHeight:16px; color:rgb(255, 255, 255); textAlign:center; backgroundColor:rgb(164, 139, 101); padding:15px 30px; display:inline-block; borderRadius:5px | HREF=#elementor-action%3Aaction%3Dpopup%3Aopen%26settings%3DeyJpZCI6Ijg3NSIsInRvZ2dsZSI6ZmFsc2V9
          span.elementor-button-content-wrapper | box=830,3539,127,16 | display:flex; justifyContent:center; gap:5px
            span.elementor-button-text | box=830,3539,127,16 |  | TEXT="View All Images"```
```
# section 13 id= visible=true
section.elementor-section.elementor-top-section.elementor-element | box=0,3670,1440,489 | fontSize:16px; fontWeight:200; fontFamily:Poppins, sans-serif; lineHeight:26.4px; color:rgb(40, 40, 40); margin:-60px 0px 52px; position:relative | SETTINGS={"animation":"fadeIn"}
  div.elementor-container.elementor-column-gap-default | box=170,3670,1100,489 | margin:0px 170px; maxWidth:1100px; display:flex; position:relative
    div.elementor-widget-wrap.elementor-element-populated | box=170,3670,550,489 | backgroundColor:rgb(20, 20, 20); padding:80px; display:flex; flexWrap:wrap; position:relative
      div.elementor-background-overlay | box=170,3670,550,489 | backgroundColor:rgb(20, 20, 20); position:absolute
      div.elementor-element.elementor-view-default.elementor-widget | [icon.default] | box=250,3750,390,58 | margin:0px 0px 20px; position:relative
        div.elementor-icon | box=250,3750,50,50 | fontSize:50px; lineHeight:50px; color:rgb(226, 140, 31); textAlign:center; display:inline-block
          svg | box=250,3750,50,50 | overflow:hidden; position:relative | SVG=<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><g id="Outline"><path d="M61,38H37a1,1,0,0,0-1,1v5H7a3,3,0,0,0-3,3,2.966,2.966,0,0,0,.184,1H3a1,1,0,0,0-1,1v8a1,1,0,0,0,1,1H4v3a1,1,0,0,0,1,1H9a1,1,0,0,0,1-1V58h9v3a1,1,0,0,0,1,1h4a1,1,0,0,0,1-1V58H38v3a1,1,0,0,0,1,1h4a1,1,0,0,0,1-1V58H54v3a1,1,0,0,0,1,1h4a1,1,0,0,0,1-1V58h1a1,1,0,0,0,1-1V39A1,1,0,0,0,61,38ZM38,40H60v8H57.816A2.966,2.966,0,0,0,58,47V45a3,3,0,0,0-3-3H47.958a2.954,2.954,0,0,0-2.785,2H38ZM27,48H25.816a2.809,2.809,0,0,0,0-2H47.392C48.34,46,49,46.527,49,47s-.66,1-1.608,1Zm20.792-3.966A.843.843,0,0,1,47.958,44h4.084a.959.959,0,0,1,.958.958v2.084a.959.959,0,0,1-.958.958H50.778A2.524,2.524,0,0,0,51,47,3.263,3.263,0,0,0,47.7
      div.elementor-element.elementor-widget.elementor-widget-heading | [heading.default] | box=250,3828,390,33 | margin:0px 0px 20px; position:relative
        h3.elementor-heading-title.elementor-size-default | box=250,3828,390,33 | fontSize:25px; fontWeight:500; lineHeight:32.5px; color:rgb(226, 140, 31) | TEXT="Room 3 - Small"
      div.elementor-element.elementor-widget.elementor-widget-text-editor | [text-editor.default] | box=250,3881,390,132 | fontWeight:300; fontFamily:"Open Sans", sans-serif; color:rgb(255, 255, 255); margin:0px 0px 20px; position:relative
        p | box=250,3881,390,132 |  | TEXT="Perfect for work, our rooms offer a quiet and comfortable space with all the essentials you need to stay productive. Conveniently located, they provide easy access to everything you need to focus and get things done."
      div.elementor-element.elementor-align-left.elementor-button-info | [button.default] | box=250,4033,390,46 | textAlign:left; position:relative
        a.elementor-button.elementor-button-link.elementor-size-sm | box=250,4033,187,46 | fontWeight:500; lineHeight:16px; color:rgb(255, 255, 255); textAlign:center; backgroundColor:rgb(164, 139, 101); padding:15px 30px; display:inline-block; borderRadius:5px | HREF=#elementor-action%3Aaction%3Dpopup%3Aopen%26settings%3DeyJpZCI6Ijg4MiIsInRvZ2dsZSI6ZmFsc2V9
          span.elementor-button-content-wrapper | box=280,4048,127,16 | display:flex; justifyContent:center; gap:5px
            span.elementor-button-text | box=280,4048,127,16 |  | TEXT="View All Images"
    div.elementor-widget-wrap.elementor-element-populated | box=720,3670,550,489 | backgroundColor:rgb(255, 255, 255); padding:80px; display:flex; flexWrap:wrap; position:relative
      div.elementor-background-overlay | box=720,3670,550,489 | backgroundColor:rgb(238, 238, 238); position:absolute; opacity:0.74
      div.elementor-element.elementor-view-default.elementor-widget | [icon.default] | box=800,3750,390,58 | margin:0px 0px 20px; position:relative
        div.elementor-icon | box=800,3750,50,50 | fontSize:50px; lineHeight:50px; color:rgb(226, 140, 31); textAlign:center; display:inline-block
          svg | box=800,3750,50,50 | overflow:hidden; position:relative | SVG=<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><g id="Outline"><path d="M61,38H37a1,1,0,0,0-1,1v5H7a3,3,0,0,0-3,3,2.966,2.966,0,0,0,.184,1H3a1,1,0,0,0-1,1v8a1,1,0,0,0,1,1H4v3a1,1,0,0,0,1,1H9a1,1,0,0,0,1-1V58h9v3a1,1,0,0,0,1,1h4a1,1,0,0,0,1-1V58H38v3a1,1,0,0,0,1,1h4a1,1,0,0,0,1-1V58H54v3a1,1,0,0,0,1,1h4a1,1,0,0,0,1-1V58h1a1,1,0,0,0,1-1V39A1,1,0,0,0,61,38ZM38,40H60v8H57.816A2.966,2.966,0,0,0,58,47V45a3,3,0,0,0-3-3H47.958a2.954,2.954,0,0,0-2.785,2H38ZM27,48H25.816a2.809,2.809,0,0,0,0-2H47.392C48.34,46,49,46.527,49,47s-.66,1-1.608,1Zm20.792-3.966A.843.843,0,0,1,47.958,44h4.084a.959.959,0,0,1,.958.958v2.084a.959.959,0,0,1-.958.958H50.778A2.524,2.524,0,0,0,51,47,3.263,3.263,0,0,0,47.7
      div.elementor-element.elementor-widget.elementor-widget-heading | [heading.default] | box=800,3828,390,33 | margin:0px 0px 20px; position:relative
        h3.elementor-heading-title.elementor-size-default | box=800,3828,390,33 | fontSize:25px; fontWeight:500; lineHeight:32.5px; color:rgb(226, 140, 31) | TEXT="Waiting Area"
      div.elementor-element.elementor-widget.elementor-widget-text-editor | [text-editor.default] | box=800,3881,390,106 | fontWeight:300; fontFamily:"Open Sans", sans-serif; margin:0px 0px 20px; position:relative
        p | box=800,3881,390,106 |  | TEXT="Relax in our cozy waiting area, designed with comfort in mind. Enjoy comfortable seating and a calm atmosphere while you wait. Essential amenities are conveniently close by for your convenience."
      div.elementor-element.elementor-align-left.elementor-button-info | [button.default] | box=800,4007,390,62 | textAlign:left; position:relative
        div.elementor-widget-container | box=800,4022,390,46 | margin:15.5938px 0px 0px
          a.elementor-button.elementor-button-link.elementor-size-sm | box=800,4022,187,46 | fontWeight:500; lineHeight:16px; color:rgb(255, 255, 255); textAlign:center; backgroundColor:rgb(164, 139, 101); padding:15px 30px; display:inline-block; borderRadius:5px | HREF=#elementor-action%3Aaction%3Dpopup%3Aopen%26settings%3DeyJpZCI6IjkzMCIsInRvZ2dsZSI6ZmFsc2V9
            span.elementor-button-content-wrapper | box=830,4037,127,16 | display:flex; justifyContent:center; gap:5px
              span.elementor-button-text | box=830,4037,127,16 |  | TEXT="View All Images"```
