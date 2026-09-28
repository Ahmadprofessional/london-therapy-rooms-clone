export interface NavLink {
  label: string;
  href: string;
}

export interface SocialLink {
  label: "Facebook" | "Instagram";
  href: string;
}

export interface RoomDetail {
  /** "Room 1 Dimensions" */
  title: string;
  /** "4.71m x 3.41m" */
  dimensions: string;
  /** Suitable-for list, split into the columns the live site renders */
  suitableFor: string[][];
  /** "Room Breakdown (click to expand)" accordion: two columns of equipment */
  breakdown: [string[], string[]];
  /** Autoplay fade slider images (local /images/... paths) */
  slides: string[];
  /** Image column position on desktop */
  imageSide: "left" | "right";
}

export interface RoomCard {
  title: string;
  body: string;
  /** Default card background colour */
  background: string;
  /** Body text colour */
  textColor: string;
  /** Image revealed on hover (background-size: cover) */
  hoverImage: string;
  /** Hover overlay colour (opacity 0.5) */
  hoverOverlay: string;
  /** Images shown in the "View All Images" popup slider */
  gallery: string[];
}

export interface Practitioner {
  name: string;
  /** Italic subtitle (h4); may contain line breaks ("\n") */
  role?: string;
  /** Paragraphs */
  bio: string[];
  image: string;
  imageWidth: number;
  imageHeight: number;
}

export interface Testimonial {
  /** Optional bold title line shown above the quote */
  title?: string;
  quote: string;
  name: string;
  date: string;
}

export interface GalleryImage {
  src: string;
  width: number;
  height: number;
}
