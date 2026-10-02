// All copy + asset paths, verbatim from londontherapyroomstorent.com (captured 2026-09-28).
import type { GalleryImage, NavLink, Practitioner, RoomCard, RoomDetail, SocialLink, Testimonial } from "@/types/content";

export const PHONE_MOBILE = "078 1847 4041";
export const PHONE_MOBILE_HREF = "tel:078%201847%204041";
export const PHONE_LANDLINE = "0207 225 3582";
export const PHONE_LANDLINE_HREF = "tel:0207%20225%203582";
export const EMAIL = "info@londontherapyroomstorent.com";
export const ADDRESS = "2 Wimpole Street W1G 0EB / London, UK";
export const MAPS_HREF = "https://maps.app.goo.gl/pS2CLPf6JFyT61ik7";
export const LOGO = { src: "/images/2024/09/logo-Copypng-11-11-11-11-300x179.png", width: 300, height: 179, alt: "logo - Copypng-11-11-11-11" };
export const MEMBER_BADGE = {
  src: "/images/uk-therapy-rooms-member-badge.jpeg",
  width: 1678,
  height: 1286,
  href: "https://www.uktherapyrooms.co.uk/united-kingdom/london/therapy-room/wimpole-street-harley-street-newly-decorated-treatment-consulting-rooms-to-rent-in-harley-street-area-w1g-0eb-next-to-wigmore-pharmacy?from=badge",
};

export const NAV_LINKS: NavLink[] = [
  { label: "Home", href: "#hero" },
  { label: "About Us", href: "#Aboutus" },
  { label: "Rooms & Rates", href: "#Rooms" },
  { label: "Practitioners", href: "#PRACTITIONERS" },
  { label: "Our Mission", href: "#vision" },
  { label: "Contact Us", href: "#Contact" },
];

export const SOCIAL_LINKS: SocialLink[] = [
  { label: "Facebook", href: "https://www.facebook.com/share/g/158eL7HqPD/?mibextid=wwXIfr" },
  { label: "Instagram", href: "https://www.instagram.com/therapy_rooms_to_let?igsh=dGduNmoxYm9wc29t" },
];

export const HERO = {
  eyebrow: "London Therapy Rooms  to",
  titleLines: ["Rent in Marylebone, Harley Street", "District Central London , W1G 0EB"],
  videoSrc: "/videos/hero-section-video.mp4",
  posterImage: "/images/2024/08/IMG-20240826-WA0037.jpg",
  primaryCta: { label: "BOOK NOW", href: "#Contact" },
  secondaryCta: { label: "ENQUIRE", href: "#Contact" },
};

export const ABOUT = {
  heading: "About US",
  subheading: "Health & Skin Clinic",
  paragraphs: [
    "We are proud to provide our practitioners state of the art treatment and London therapy rooms to rent.",
    "Situated in the heart of Marylebone, our clinic has been fitted to the highest standard possible. It is a calming and therapeutic environment, housing some of the best dedicated and established therapy experts under one room…….",
  ],
  cta: { label: "Learn more", href: "https://londontherapyroomstorent.com/about/" },
};

export const ROOMS_INTRO = {
  heading: "CONSULTING ROOMS",
  subLines: [
    "AVAILABLE FOR PRACTITIONERS",
    "Treatment & London Therapy rooms to rent available",
    "from as low as £25 per hour or Full-time options are also available",
  ],
};

const BREAKDOWN_LARGE: [string[], string[]] = [
  ["Electric Couch", "Sink", "1x Desk", "Large Mirror", "1x Desk Chair", "1x Armchair", "Adjustable low rise stool", "1x Examination Lamp", "Fan & Heater", "1x Lamp"],
  ["Couch Roll", "Towels", "1x Pillow", "1x Blanket", "Hand Sanitiser & Antiseptic Disinfectant Spray", "Paper Towels", "Sharps Disposal Container", "Waste Disposal Bin", "General Waste Bin"],
];

export const ROOM_DETAILS: RoomDetail[] = [
  {
    title: "Room 1 Dimensions",
    dimensions: "4.71m x 3.41m",
    suitableFor: [
      ["Osteopathy", "Physiotherapy", "Beauty Therapy", "Aesthetic Treatments"],
      ["Massage Therapy", "Nutritional Therapy", "Medical Consultants", "Functional Medicine"],
    ],
    breakdown: BREAKDOWN_LARGE,
    slides: [
      "/images/new-rooms/room-1/1.webp",
      "/images/new-rooms/room-1/2.webp",
      "/images/new-rooms/room-1/3.webp",
      "/images/new-rooms/room-1/4.webp",
      "/images/new-rooms/room-1/5.webp",
    ],
    imageSide: "right",
  },
  {
    title: "Room 2 Dimensions",
    dimensions: "3.4m x 2.97m",
    suitableFor: [
      ["Osteopathy", "Physiotherapy", "Aesthetic Treatments", "Massage Therapy", "Counselling"],
      ["Hypnotherapy", "Psychotherapy", "Life coaching", "Nutritional Therapy", "Medical Consultants"],
      ["Functional Medicine Consultants"],
    ],
    breakdown: BREAKDOWN_LARGE,
    slides: [
      "/images/new-rooms/room-2/1.webp",
      "/images/new-rooms/room-2/2.webp",
      "/images/new-rooms/room-2/3.webp",
    ],
    imageSide: "left",
  },
  {
    title: "Room 3 Dimensions",
    dimensions: "2.81m x 2.27m",
    suitableFor: [
      ["Osteopathy", "Physiotherapy", "Beauty Therapy", "Aesthetic Treatments"],
      ["Massage Therapy", "Nutritional Therapy", "Medical Consultants", "Functional Medicine"],
    ],
    breakdown: [
      ["Mirrored Wall", "Electric Couch", "Sink", "1x Desk", "1x Desk Chair", "Adjustable low rise stool", "1x Examination Lamp", "Fan & Heater", "1x Lamp"],
      ["Couch Roll", "1x Pillow", "1x Blanket", "Hand Sanitiser & Antiseptic Disinfectant Spray", "Paper Towels", "Sharps Disposal Container", "Waste Disposal Bin", "General Waste Bin"],
    ],
    slides: [
      "/images/new-rooms/room-3/1.webp",
      "/images/new-rooms/room-3/2.webp",
      "/images/new-rooms/room-3/3.webp",
      "/images/new-rooms/room-3/4.webp",
      "/images/new-rooms/room-3/5.webp",
      "/images/new-rooms/room-3/6.webp",
    ],
    imageSide: "right",
  },
  {
    title: "Outside Area",
    dimensions: "Outdoor space",
    suitableFor: [
      ["Relaxation", "Outdoor Breaks", "Fresh Air"]
    ],
    breakdown: [
      ["Outdoor Seating", "Plants", "Fresh Air"],
      ["Quiet Atmosphere", "Natural Light"]
    ],
    slides: [
      "/images/outside-area/1.webp",
      "/images/outside-area/2.webp",
      "/images/outside-area/3.webp",
      "/images/outside-area/4.webp",
      "/images/outside-area/5.webp",
    ],
    imageSide: "left",
  },
];

export const ROOM_CARDS_HEADING = "Our London Therapy Rooms to Rent";

const CARD_BODY =
  "Perfect for work, our rooms offer a quiet and comfortable space with all the essentials you need to stay productive. Conveniently located, they provide easy access to everything you need to focus and get things done.";

// background/textColor/hoverOverlay are refined in the RoomCards spec (docs/research/components/room-cards.spec.md)
export const ROOM_CARDS: RoomCard[] = [
  {
    title: "Room 1 - Large",
    body: CARD_BODY,
    background: "#282828",
    textColor: "#ffffff",
    hoverImage: "/images/new-rooms/room-1/1.webp",
    hoverOverlay: "#000000",
    gallery: [
      "/images/new-rooms/room-1/1.webp",
      "/images/new-rooms/room-1/2.webp",
      "/images/new-rooms/room-1/3.webp",
      "/images/new-rooms/room-1/4.webp",
      "/images/new-rooms/room-1/5.webp",
    ],
  },
  {
    title: "Room 2 - Medium",
    body: CARD_BODY,
    background: "#f1f1f1",
    textColor: "#282828",
    hoverImage: "/images/new-rooms/room-2/1.webp",
    hoverOverlay: "#ffffff",
    gallery: ["/images/new-rooms/room-2/1.webp", "/images/new-rooms/room-2/2.webp", "/images/new-rooms/room-2/3.webp"],
  },
  {
    title: "Room 3 - Small",
    body: CARD_BODY,
    background: "#141414",
    textColor: "#ffffff",
    hoverImage: "/images/new-rooms/room-3/1.webp",
    hoverOverlay: "#000000",
    gallery: [
      "/images/new-rooms/room-3/1.webp",
      "/images/new-rooms/room-3/2.webp",
      "/images/new-rooms/room-3/3.webp",
      "/images/new-rooms/room-3/4.webp",
      "/images/new-rooms/room-3/5.webp",
      "/images/new-rooms/room-3/6.webp",
    ],
  },
  {
    title: "Waiting Area",
    body: "Relax in our cozy waiting area, designed with comfort in mind. Enjoy comfortable seating and a calm atmosphere while you wait. Essential amenities are conveniently close by for your convenience.",
    background: "#f1f1f1",
    textColor: "#282828",
    hoverImage: "/images/new-rooms/waiting-area/1.webp",
    hoverOverlay: "#ffffff",
    gallery: [
      "/images/new-rooms/waiting-area/1.webp",
      "/images/new-rooms/waiting-area/2.webp",
      "/images/new-rooms/waiting-area/3.webp",
    ],
  },
  {
    title: "Outside Area",
    body: "Step outside to our peaceful outdoor space. Perfect for taking a break, getting some fresh air, and relaxing between sessions in a quiet environment.",
    background: "#141414",
    textColor: "#ffffff",
    hoverImage: "/images/outside-area/1.webp",
    hoverOverlay: "#000000",
    gallery: [
      "/images/outside-area/1.webp",
      "/images/outside-area/2.webp",
      "/images/outside-area/3.webp",
      "/images/outside-area/4.webp",
      "/images/outside-area/5.webp",
    ],
  },
];

export const MISSION = {
  heading: "Our mission and vision at",
  subheading: "Health & Skin Clinic",
  paragraphs: [
    "We strive to provide to all our clients with a relaxing environment and safe space to practice to our practitioners and their clients. We empower our practitioners and help them meet their aspirations and support each other. Our location Based in central London, only 2 minutes walk from Bond Street Station and 5 minutes walk from Oxford Circus underground which makes a very easy access to the public transport. Mayfair is only few minutes walk.",
    "Our London therapy rooms to rent, each exuding a serene and uncluttered ambience, are designed to promote a sense of safety and relaxation, essential for the therapeutic relationship to flourish with the other practitioners and their clients. The rooms are with full natural light, and the new and comfortable furniture enhances the overall experience of luxury. Unlike their previous experiences, therapists here won’t encounter the stress of quick handovers or neglected spaces. Everything is meticulously maintained, clean allowing therapists to focus on their clients.",
  ],
  cta: { label: "ENQUIRE", href: "#Contact" },
};

export const PRACTITIONERS_INTRO = {
  heading: "OUR PRACTITIONERS",
  subLines: ["Our professionals are friendly, skilled and always", "here to help you & your loved ones"],
};

/** Rows exactly as laid out on desktop: 3, 3, 3, 2 */
export const PRACTITIONER_ROWS: Practitioner[][] = [
  [
    {
      name: "Sofia Bouzian",
      role: "Aesthetic Practitioner",
      bio: [
        "Founder and Director of Yourhealthfirst Clinic & Health and Skin Clinic London.Aesthetic & Anti-aging Practitioner, Aesthetic Medicine, Skin specialist, Medical Adviser, BSN/ bsS (Hons)PgDip.",
        "Most recently awarded Best Non-invasive Aesthetics and Medical treatments practitioner in London 2020",
      ],
      image: "/images/2026/09/me-pic1-Copy.jpg", imageWidth: 634, imageHeight: 834,
    },
    {
      name: "Dr Olga Gagua",
      role: "Acupuncturist",
      bio: ["Dr Gagua is a long-standing and internationally acclaimed specialist in Medical Acupuncture with decades of general practitioner experience, including mostly as a private GP in Harley street and Knightsbridge clinics."],
      image: "/images/2025/02/dr.jpg", imageWidth: 513, imageHeight: 664,
    },
    {
      name: "Katie Macauley",
      bio: ["Specialise in making bespoke wigs for clients suffering genetic hair loss, Alopecia, of effects of Chemo."],
      image: "/images/2025/02/dr777.jpg", imageWidth: 324, imageHeight: 219,
    },
  ],
  [
    {
      name: "Anna Balcome",
      role: "B.S.c ( Hons) MRCPod MFPM RCP Podiatric Surgeon & Podiatrist/Chiropodist (Foot & Ankle )",
      bio: [
        "Clinic Following her qualification in 1992 at the University of Westminster, Anna Specialised in various podiatric fields that gives her a broad scope of practice that includes treatment of sport injuries, diabetes, paediatrics, the ability to advise and treat surgically if necessary.",
        "In 2008 Anna was invited to become an Honorary Consultant for St Lukes Hospital for the Clergy.",
      ],
      image: "/images/2024/08/Anna.jpg", imageWidth: 200, imageHeight: 300,
    },
    {
      name: "Foz",
      role: "Specialise in Tear Trough\nNurse Prescriber\nNatural Full Face\nTransformations",
      bio: ["Has a brilliant reputation of kindness and compassion with hands set to high standard skills performing her best work daily bringing a smile to many faces. She is heavily talented with diverse skills in aesthetics. Foz is trained in complications to assure everyone comfort and safety. Her background leading from mental health the practice is focused on a balanced mind and body giving that extra support every time."],
      image: "/images/2025/02/fopz.png", imageWidth: 594, imageHeight: 591,
    },
    {
      name: "Domenic Knight",
      role: "Licensed Master Practitioner of NLP and Hypnotherapy",
      bio: [
        "Licensed Trainer of NLP and Hypnotherapy, Recognised by The General Hypnotherapy Register (GHR), Validated by The General Hypnotherapy Standards Council (GHSC).",
        "Dominic is one of the UK’s most recognised and highly accredited Clinical Hypnotherapists and NLP Master Practitioners, providing relief to those suffering from life-altering conditions.",
      ],
      image: "/images/2025/02/night.jpg", imageWidth: 296, imageHeight: 314,
    },
  ],
  [
    {
      name: "Dr Malgorzata Stanzek",
      bio: ["Dr Malgorzata Stanzek is a GP and Doctor of Aesthetic Medicine graduated at the School of Aesthetic Medicine and Anti-aging in Warsaw at Polish Medical Association."],
      image: "/images/2025/02/fer.jpg", imageWidth: 296, imageHeight: 314,
    },
    {
      name: "Dr Federica Boecklin",
      role: "Integrative Medicine Specialist in London",
      bio: ["Dr Federica Boecklin is a distinguished specialist in integrative medicine based in London, boasting over 30 years of extensive experience. She is renowned for her expertisein integrated cancer care, women’s health, pain management, stress management, children’sand adolescent health, and healthy ageing"],
      image: "/images/2025/02/dr33.png", imageWidth: 450, imageHeight: 360,
    },
    {
      name: "Kelly Sun",
      role: "Acupuncturist \nBAcC Member with 30 years of experience",
      bio: [
        "Qualified in both China and the UK, and have successfully treated many thousands of patients in both countries. My parents were medical doctors in China, and I have built extensively on their experience in both Traditional Chinese and Western medicine.",
        "Traditional Chinese medicine (TCM) is an ancient form of medicine practiced in China for over 3000 years. The aim of Traditional Chinese medicine, which includes acupuncture, herbal medicine and body-based mindfulness practices is to treat the person as a whole.",
      ],
      image: "/images/2025/05/WhatsApp-Image-2025-05-16-at-11.38.15_28d57dcf.jpg", imageWidth: 1080, imageHeight: 1430,
    },
  ],
  [
    {
      name: "Dana Nizomova",
      bio: ["Expert in Permanent make up, Semi permanent lip blush, brows and lash line."],
      image: "/images/2024/08/dr55.png", imageWidth: 268, imageHeight: 288,
    },
    {
      name: "Hollie Bryant",
      role: "Surgical Wound Specialist",
      bio: ["Nurser prescriber and professional cosmetic nurse practitioner with 17 years of post-registration experience, is now working in South Wales & Harley Street, London."],
      image: "/images/2025/02/drr444.png", imageWidth: 504, imageHeight: 328,
    },
  ],
];

export const FEEDBACK = {
  eyebrow: "Positive Feedback",
  heading: "from other practitioners",
  body: "Everyone who has been in the clinic says that is a beautiful and calming place and their clients love the calming and serene energy on it. The ambience in the clinic is very friendly , its not just a space, its a unique experience to grow your business",
};

/** Source order of the testimonial carousel (loop, autoplay 2000ms, speed 500ms) */
export const TESTIMONIALS: Testimonial[] = [
  { quote: "I rented a room from Sofia she was very friendly and welcoming. The room was very clean and bright in a quiet location. I would definitely rent there again and recommend anyone to use!", name: "J pill", date: "August 2024" },
  { quote: "We hired a room for our weekly clients for injections and we require a clean, good hygiene along with aesthetically pleasing clinic looking room. The rooms, waiting area and the toilets in this clinic are very clean. We would highly recommend as the price for the quality of the room you get is amazing!", name: "PMU by Nisha", date: "August 2024" },
  { quote: "Very friendly, nice and clean.", name: "Aesthetics London", date: "August 2024" },
  { quote: "Lovely place, I definitely recommend this place. The rooms are amazing for a day rental I had here.", name: "Henna K", date: "September 2023" },
  { quote: "Excellent premises, great location! Very friendly staff, receptionists are great! I highly do recommend this clinic!", name: "NuSkin", date: "September 2023" },
  { title: "Beautiful Room Right In The Heart Of London", quote: "Beautiful, spacious and very comfortable room, the couch is very comforting, my patients really love it. The clinic owner is very nice and helpful, nothing is too much trouble to her. I recommend this place.", name: "Private Doctors North East", date: "August 2024" },
  { title: "Rented Full Day Room", quote: "I really loved this clinic, they are very accommodating, the place is very clean and beautiful with every detail. It's very easy to find which is only 2 minutes walk from Bond St station or less than 5mnt walk from Oxford Circus underground, and lot of shops and restaurants close by. There is a parking garage just opposite John Lewis which is only 2mnt walk to the clinic.", name: "Dr Ridley", date: "August 2024" },
];

export const TESTIMONIAL_SIDE_IMAGE = "/images/2026/09/Waiting-area-1.png";

export const CONTACT = {
  eyebrow: "Enquire about our London Therapy Rooms",
  heading: "Contact Us",
  infoHeading: "Contact Us",
  roomOptions: ["Room 1", "Room 2", "Room 3"],
  enquiryPlaceholder: "If you would like to book a clinic tour , Please provide your preffered day or time.",
};

export const GALLERY: GalleryImage[] = [
  { src: "/images/2024/08/WhatsApp-Image-2024-08-28-at-20.24.10_61bbc31c.jpg", width: 1000, height: 668 },
  { src: "/images/2024/08/WhatsApp-Image-2024-08-28-at-20.23.56_38487895.jpg", width: 1200, height: 1600 },
  { src: "/images/2024/08/IMG-20240826-WA0055.jpg", width: 900, height: 1600 },
  { src: "/images/2024/08/IMG-20240826-WA0054.jpg", width: 1600, height: 951 },
  { src: "/images/2024/08/WhatsApp-Image-2024-08-28-at-20.24.10_33062628.jpg", width: 1190, height: 1588 },
];

export const COPYRIGHT = "© Copyright digi focus. Alright Reserved";
