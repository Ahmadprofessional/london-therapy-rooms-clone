# ContactSection + GalleryStrip Specification

## Overview
- **Target files:** `src/components/ContactSection.tsx` (client — form state), `src/components/GalleryStrip.tsx` (client — lightbox)
- **Screenshots:** `docs/design-references/section-22.png` (heading), `section-23.png` (form + info), `section-24.png` (gallery)
- **Interaction model:** form (fake submit), gallery hover overlay + click lightbox.
- **Raw sections:** 22 (heading), 23 (form + info, id `Contact`), 24 (gallery)

## Heading (raw 22)
- "Enquire about our London Therapy Rooms": Poppins italic 500 ~36px `#000` centered; "Contact Us" Poppins 500 ~20px `#282828` centered below. Section ~114px.

## Form + info (raw 23, id="Contact")
- Row x 70→1370: two 650px columns.
- Left: form. Labels Poppins 500 ~12px `#000` above inputs. Inputs: white bg, 1px `#818a91`/`#bbb` border (verify), radius 3px, height ~40px, Poppins 14px. First/Last name side by side (50/50, gap 10px); then Email, Phone No, Profession, "Which room?" select (placeholder "Select Room", options Room 1–3, CaretDownIcon at right), "Detail of your enquiry" textarea (~4 rows, placeholder `CONTACT.enquiryPlaceholder`). Submit "Send": full width, bg `#a48b65`, white Poppins 500 ~15px, radius 3px, height ~40px, margin-top ~50px. Hover bg `#000`.
- Under the button on live site there is a reCAPTCHA badge placeholder — omit.
- Fake submit: prevent default, show a success message "Your submission was successful." in green below the button, reset form.
- Right: "Contact Us" h2 Poppins 500 ~28px `#282828`; icon list (Poppins 300 ~18px `#282828`, icons black ~16px): AddressBookIcon + ADDRESS (→ MAPS_HREF), PhoneAltIcon + PHONE_LANDLINE, PhoneAltIcon + PHONE_MOBILE, EnvelopeOutlineIcon + EMAIL (mailto). Then social icons Facebook/Instagram black ~20px (hover gold `#a48b65`).

## GalleryStrip (raw 24)
- Full width (0→1440), 5 equal columns, gap 10px, each tile aspect 4:3 (≈280×210), `object-fit: cover`. Images `GALLERY`.
- Hover: overlay `rgba(0,0,0,0.5)` fades in 350ms.
- Click: lightbox — fixed dark backdrop (`rgba(0,0,0,0.9)`), image contained, prev/next chevrons, close ×, ESC.

## Content
`CONTACT`, `ADDRESS`, `MAPS_HREF`, `PHONE_*`, `EMAIL`, `SOCIAL_LINKS`, `GALLERY` from `@/data/site`.

## Responsive
- ≤767: form column first (padding 0 30px), info below; gallery 1 column (tablet 2 columns).
