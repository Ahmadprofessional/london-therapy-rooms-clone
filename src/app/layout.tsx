import type { Metadata } from "next";
import { Poppins, Open_Sans, Roboto } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
});

const roboto = Roboto({ variable: "--font-roboto", subsets: ["latin"], weight: ["400"] });

const openSans = Open_Sans({
  variable: "--font-open-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
});

export const metadata: Metadata = {
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
    <html lang="en-US" className={`${poppins.variable} ${openSans.variable} ${roboto.variable}`}>
      <body>{children}</body>
    </html>
  );
}
