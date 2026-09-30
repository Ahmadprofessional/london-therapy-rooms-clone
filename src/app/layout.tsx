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

export const metadata: Metadata = {
  metadataBase: new URL("https://londontherapyroomstorent.com"),
  title: "London Therapy Rooms to Rent | Prime Locations Available",
  description:
    "Explore a variety of London therapy rooms to rent, perfect for therapists, counsellors, and wellness practitioners. Find your ideal space now!",
  icons: {
    icon: [
      { url: "/seo/cropped-logo-Copypng-11-11-11-11-32x32.png", sizes: "32x32" },
      { url: "/seo/cropped-logo-Copypng-11-11-11-11-192x192.png", sizes: "192x192" },
    ],
    apple: "/seo/cropped-logo-Copypng-11-11-11-11-180x180.png",
  },
  openGraph: {
    title: "Home - London Therapy Rooms to Rent",
    description:
      "Find serene and professional London therapy rooms to rent. Book fully-equipped spaces for counseling, psychotherapy, and wellness services",
    siteName: "London Therapy Rooms To Rent",
    locale: "en_US",
    type: "website",
    images: ["/images/2024/09/logo-Copypng-11-11-11-11-300x179.png"],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en-US"
      suppressHydrationWarning
      className={`${plusJakarta.variable} ${playfair.variable} ${poppins.variable} ${openSans.variable}`}
    >
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
