# PAGE TOPOLOGY — londontherapyroomstorent.com (single page, ~9155px tall at 1440)

Raw section index = `docs/research/raw/section-NN.json` / `outline-NN.txt`. All flow content (no fixed/sticky except scroll-to-top).

| # | Raw | Name | Desktop y / h | Interaction | Component |
|---|-----|------|---------------|-------------|-----------|
| 1 | 00 | Top bar (phone + socials) | 0 / 41 | static + hover | `SiteHeader` |
| 2 | 01 | Nav bar (logo + menu) | 41 / 101 | hover, mobile click | `SiteHeader` |
| 3 | 02 | Hero (bg slideshow, -170px margin-top → under header) | -28 / 686 | time-driven | `Hero` |
| 4 | 03 | About (#Aboutus) badge + copy | 738 / 333 | static | `AboutSection` |
| 5 | 04 | Consulting rooms intro (#Rooms) | 1151 / 158 | static | `RoomsIntro` |
| 6 | 05 | Room 1 detail (text left, slider right) | 1379 / 483 | time + click | `RoomDetail` |
| 7 | 07 | Room 2 detail (slider left, text right) | 1932 / 483 | time + click | `RoomDetail` |
| 8 | 09 | Room 3 detail (text left, slider right) | 2485 / 499 | time + click | `RoomDetail` |
| – | 06,08,10 | hidden on desktop (responsive duplicates) | – | – | not needed |
| 9 | 11 | "Our London Therapy Rooms to Rent" heading | 3054 / 57 | static | `RoomCardsSection` |
| 10 | 12 | Cards row: Room 1 (dark) / Room 2 (light) | 3161 / 489 | hover + click popup | `RoomCardsSection` |
| 11 | 13 | Cards row: Room 3 (black) / Waiting (light) | 3670 / 489 | hover + click popup | `RoomCardsSection` |
| 12 | 14 | Mission (#vision) badge + copy + ENQUIRE | 4239 / 529 | static | `MissionSection` |
| 13 | 15 | Practitioners intro (#PRACTITIONERS) | 4848 / 124 | static | `Practitioners` |
| 14-17 | 16-19 | Practitioner rows 3/3/3/2 | 5002–7008 | static | `Practitioners` |
| 18 | 20 | Positive feedback dark band | 7109 / 159 | static | `Testimonials` |
| 19 | 21 | Testimonial carousel (dark) + photo | 7311 / 347 | time-driven | `Testimonials` |
| 20 | 22 | "Enquire about..." heading | 7728 / 114 | static | `ContactSection` |
| 21 | 23 | Contact form + info (#Contact) | 7892 / 646 | form | `ContactSection` |
| 22 | 24 | Gallery strip 5-col | 8567 / 210 | hover + lightbox | `GalleryStrip` |
| 23 | 25 | Footer (dark #282828) 4 cols | 8777 / 307 | hover | `SiteFooter` |
| 24 | 26 | Copyright bar | 9084 / 71 | static | `SiteFooter` |
| – | – | Scroll-to-top button (fixed) | – | scroll | `ScrollToTop` |

Z-order: header bars z-index 10 over hero. Popup modal & lightbox above everything.
