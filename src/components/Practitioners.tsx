"use client";

import Image from "next/image";
import { PRACTITIONERS_INTRO, PRACTITIONER_ROWS } from "@/data/site";
import type { Practitioner } from "@/types/content";
import { Reveal } from "@/components/Reveal";
import { SparklesIcon, ShieldCheckIcon } from "@/components/icons";
import { SectionReveal } from "@/components/SectionReveal";
import { motion } from "framer-motion";

function PractitionerCard({ p, index }: { p: Practitioner; index: number }) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-10% 0px" }}
      transition={{ duration: 0.6, ease: "easeOut", delay: (index % 3) * 0.15 }}
      className="group relative flex flex-col justify-between overflow-hidden rounded-3xl border border-[#a48b65]/20 bg-white p-6 sm:p-8 shadow-[0_10px_30px_rgba(0,0,0,0.04)] transition-all duration-300 hover:border-[#a48b65]/50 hover:shadow-[0_15px_40px_rgba(164,139,101,0.14)] hover:-translate-y-1"
    >
      {/* Top Section: Avatar & Specialty */}
      <div>
        <div className="mb-6 flex flex-col sm:flex-row items-center sm:items-start gap-5">
          {/* Avatar with Gold Ring Frame */}
          <div className="relative h-24 w-24 sm:h-28 sm:w-28 shrink-0 overflow-hidden rounded-full border-2 border-[#a48b65]/40 bg-[#faf8f5] p-1 shadow-md transition-all duration-300 group-hover:border-[#a48b65] group-hover:scale-105">
            <div className="relative h-full w-full overflow-hidden rounded-full">
              <Image
                src={p.image}
                alt={p.name}
                fill
                sizes="112px"
                loading="lazy"
                className="object-cover object-center"
              />
            </div>
          </div>

          {/* Name & Title */}
          <div className="text-center sm:text-left flex-1 min-w-0">
            <div className="mb-1 flex items-center justify-center sm:justify-start gap-1.5 text-xs font-semibold text-[#a48b65] uppercase tracking-wider">
              <ShieldCheckIcon className="h-3.5 w-3.5" />
              <span>Verified Specialist</span>
            </div>

            <h3 className="text-xl sm:text-2xl font-normal text-[#282828] group-hover:text-[#a48b65] transition-colors">
              {p.name}
            </h3>

            {p.role && (
              <div className="mt-1.5 inline-block rounded-lg bg-[#faf8f5] border border-[#a48b65]/20 px-2.5 py-1 text-xs font-medium text-[#282828]/80 leading-snug">
                {p.role.split("\n").join(" · ")}
              </div>
            )}
          </div>
        </div>

        {/* Bio Text */}
        <div className="space-y-2.5 text-sm sm:text-[15px] font-light leading-relaxed text-[#555555] border-t border-black/5 pt-4">
          {p.bio.map((para, i) => (
            <p key={i}>{para}</p>
          ))}
        </div>
      </div>

      {/* Card Footer: Location Note */}
      <div className="mt-6 flex items-center justify-between border-t border-black/5 pt-4 text-xs text-[#888888]">
        <span>Harley Street Clinic</span>
        <a
          href="#Contact"
          className="font-medium text-[#a48b65] hover:underline"
        >
          Book Consultation &rarr;
        </a>
      </div>
    </motion.div>
  );
}

export function Practitioners() {
  const allPractitioners = PRACTITIONER_ROWS.flat();

  return (
    <section id="PRACTITIONERS" className="relative py-16 md:py-24 bg-[#faf8f5] scroll-mt-20">
      <div className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8">
        {/* Intro */}
        <Reveal className="mb-12 md:mb-16 text-center">
          <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-[#a48b65]/30 bg-white px-4 py-1.5 text-xs font-semibold tracking-widest text-[#a48b65] uppercase">
            <SparklesIcon className="h-3.5 w-3.5" />
            <span>ESTABLISHED MEDICAL &amp; THERAPY EXPERTS</span>
          </div>

          <SectionReveal>
            <h2 className="mb-4 text-3xl font-normal tracking-tight text-[#282828] sm:text-4xl md:text-5xl">
              {PRACTITIONERS_INTRO.heading}
            </h2>
          </SectionReveal>

          <SectionReveal delay={0.1}>
            <p className="mx-auto max-w-2xl text-base font-light leading-relaxed text-[#555555] sm:text-lg">
              Our clinic houses established, internationally acclaimed doctors, surgeons, therapists, and aesthetic
              practitioners dedicated to the highest standard of patient care.
            </p>
          </SectionReveal>
        </Reveal>

        {/* Practitioners Responsive Grid */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-8">
          {allPractitioners.map((p, index) => (
            <PractitionerCard key={p.name} p={p} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Practitioners;
