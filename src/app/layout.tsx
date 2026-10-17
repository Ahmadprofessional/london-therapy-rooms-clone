import type { Metadata } from "next";
import { Poppins, Open_Sans, Playfair_Display, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { SmoothScrolling } from "@/components/SmoothScrolling";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "500"],
  style: ["normal", "italic"],
  display: "swap",
});

const plusJakarta = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  display: "swap",
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  style: ["normal"],
  display: "swap",
});

const openSans = Open_Sans({
  variable: "--font-open-sans",
  subsets: ["latin"],
  weight: ["400"],
  display: "swap",
});

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "London Therapy Rooms to Rent",
  alternateName: "Health & Skin Clinic Marylebone",
  image: "https://www.londontherapyroomstorent.com/images/2024/09/logo-Copypng-11-11-11-11-300x179.png",
  url: "https://www.londontherapyroomstorent.com",
  telephone: "+44 207 225 3582",
  priceRange: "£25 - £45 per hour",
  address: {
    "@type": "PostalAddress",
    streetAddress: "2 Wimpole Street",
    addressLocality: "London",
    postalCode: "W1G 0EB",
    addressCountry: "GB",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 51.5165,
    longitude: -0.1469,
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      opens: "08:00",
      closes: "20:00",
    },
  ],
  sameAs: [
    "https://www.facebook.com/share/g/158eL7HqPD/?mibextid=wwXIfr",
    "https://www.instagram.com/therapy_rooms_to_let?igsh=dGduNmoxYm9wc29t",
  ],
};

export const metadata: Metadata = {
  metadataBase: new URL("https://www.londontherapyroomstorent.com"),
  title: {
    default: "London Therapy Rooms to Rent | Prime Locations Available",
    template: "%s | London Therapy Rooms to Rent",
  },
  description:
    "Explore a variety of London therapy rooms to rent, perfect for therapists, counsellors, and wellness practitioners in Marylebone, Harley Street District W1G 0EB.",
  keywords: [
    "London therapy rooms to rent",
    "therapy room rental London",
    "counselling rooms to rent London",
    "Harley Street therapy rooms",
    "Marylebone consulting rooms",
    "consulting rooms W1",
    "psychotherapy rooms London",
    "treatment rooms to rent London",
  ],
  alternates: {
    canonical: "https://www.londontherapyroomstorent.com",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [
      { url: "/seo/cropped-logo-Copypng-11-11-11-11-32x32.png", sizes: "32x32" },
      { url: "/seo/cropped-logo-Copypng-11-11-11-11-192x192.png", sizes: "192x192" },
    ],
    apple: "/seo/cropped-logo-Copypng-11-11-11-11-180x180.png",
  },
  openGraph: {
    title: "London Therapy Rooms to Rent | Prime Locations Available",
    description:
      "Find serene and professional London therapy rooms to rent. Book fully-equipped spaces for counseling, psychotherapy, and wellness services in Marylebone W1.",
    url: "https://www.londontherapyroomstorent.com",
    siteName: "London Therapy Rooms To Rent",
    locale: "en_GB",
    type: "website",
    images: [
      {
        url: "/images/2024/09/logo-Copypng-11-11-11-11-300x179.png",
        width: 300,
        height: 179,
        alt: "London Therapy Rooms to Rent",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "London Therapy Rooms to Rent | Prime Locations Available",
    description:
      "Serene, fully-equipped consulting and therapy rooms in Marylebone, Harley Street District London W1G 0EB.",
    images: ["/images/2024/09/logo-Copypng-11-11-11-11-300x179.png"],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en-GB"
      suppressHydrationWarning
      className={`${plusJakarta.variable} ${playfair.variable} ${poppins.variable} ${openSans.variable}`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        suppressHydrationWarning
        className="antialiased font-[family-name:var(--font-plus-jakarta)] bg-white text-[#282828] selection:bg-[#a48b65] selection:text-white"
      >
        <SmoothScrolling>
          {children}
        </SmoothScrolling>
      </body>
    </html>
  );
}
