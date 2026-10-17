import type { Metadata } from "next";
import { Suspense } from "react";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { ScrollToTop } from "@/components/ScrollToTop";
import { ContactClient } from "./ContactClient";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Enquire about London therapy and consulting rooms to rent in Marylebone, London W1G 0EB. Schedule a tour or check availability.",
  alternates: {
    canonical: "https://londontherapyroomstorent.com/contact",
  },
};

export default function ContactPage() {
  return (
    <>
      <SiteHeader />
      <main className="min-h-screen bg-[#faf8f5] pt-24 sm:pt-28">
        <Suspense
          fallback={
            <div className="min-h-[400px] flex items-center justify-center text-sm text-[#777777]">
              Loading...
            </div>
          }
        >
          <ContactClient />
        </Suspense>
      </main>
      <SiteFooter />
      <ScrollToTop />
    </>
  );
}
