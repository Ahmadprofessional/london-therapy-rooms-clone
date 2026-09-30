import { SiteHeader } from "@/components/SiteHeader";
import { Hero } from "@/components/Hero";
import { AboutSection } from "@/components/AboutSection";
import { RoomDetailsSection } from "@/components/RoomDetailsSection";
import { RoomCardsSection } from "@/components/RoomCardsSection";
import { MissionSection } from "@/components/MissionSection";
import { ScrollToTop } from "@/components/ScrollToTop";
import dynamic from "next/dynamic";

// Lazy-load heavy below-the-fold sections to reduce initial JS bundle
const Practitioners = dynamic(() => import("@/components/Practitioners"), { ssr: true });
const Testimonials = dynamic(() => import("@/components/Testimonials"), { ssr: true });
const ContactSection = dynamic(() => import("@/components/ContactSection"), { ssr: true });
const GalleryStrip = dynamic(() => import("@/components/GalleryStrip"), { ssr: true });
const SiteFooter = dynamic(() => import("@/components/SiteFooter"), { ssr: true });

// Section order follows docs/research/PAGE_TOPOLOGY.md
export default function Home() {
  return (
    <>
      <SiteHeader />
      <main>
        <Hero />
        <AboutSection />
        <RoomDetailsSection />
        <RoomCardsSection />
        <MissionSection />
        <Practitioners />
        <Testimonials />
        <ContactSection />
        <GalleryStrip />
      </main>
      <SiteFooter />
      <ScrollToTop />
    </>
  );
}
