import { SiteHeader } from "@/components/SiteHeader";
import { Hero } from "@/components/Hero";
import { AboutSection } from "@/components/AboutSection";
import { RoomDetailsSection } from "@/components/RoomDetailsSection";
import { RoomCardsSection } from "@/components/RoomCardsSection";
import { MissionSection } from "@/components/MissionSection";
import { Practitioners } from "@/components/Practitioners";
import { Testimonials } from "@/components/Testimonials";
import { ContactSection } from "@/components/ContactSection";
import { GalleryStrip } from "@/components/GalleryStrip";
import { SiteFooter } from "@/components/SiteFooter";
import { ScrollToTop } from "@/components/ScrollToTop";

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
