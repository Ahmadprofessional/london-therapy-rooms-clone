"use client";

import { useCallback, useState } from "react";
import Image from "next/image";
import { ROOM_CARDS, ROOM_CARDS_HEADING } from "@/data/site";
import type { RoomCard } from "@/types/content";
import { SparklesIcon, ArrowRightIcon } from "@/components/icons";
import { Reveal } from "@/components/Reveal";
import { GalleryPopup } from "@/components/GalleryPopup";
import { SectionReveal } from "@/components/SectionReveal";
import { motion } from "framer-motion";

function RoomCardColumn({
  card,
  index,
  onOpen,
}: {
  card: RoomCard;
  index: number;
  onOpen: () => void;
}) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-10% 0px" }}
      transition={{ duration: 0.6, ease: "easeOut", delay: index * 0.15 }}
      className="group relative flex flex-col justify-between overflow-hidden rounded-3xl border border-[#a48b65]/25 bg-white p-6 sm:p-8 shadow-[0_10px_35px_rgba(0,0,0,0.06)] transition-all duration-300 hover:border-[#a48b65]/60 hover:shadow-[0_20px_50px_rgba(164,139,101,0.18)] hover:-translate-y-1"
    >
      {/* Top Image Preview with Hover Zoom */}
      <div className="relative mb-6 aspect-[16/10] w-full overflow-hidden rounded-2xl bg-[#faf8f5]">
        <Image
          src={card.hoverImage}
          alt={card.title}
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          loading="lazy"
          className="object-contain object-center transition-transform duration-700 ease-out group-hover:scale-108 filter brightness-[0.95]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-70 transition-opacity duration-300 group-hover:opacity-40" />

        {/* Room Number Tag */}
        <div className="absolute top-3 left-3 rounded-full bg-black/60 px-3 py-1 text-xs font-semibold text-white backdrop-blur-md border border-white/10">
          Suite 0{index + 1}
        </div>

        {/* Photo Count Badge */}
        <div className="absolute bottom-3 right-3 rounded-full bg-[#a48b65]/90 px-2.5 py-1 text-[11px] font-medium text-white backdrop-blur-md">
          {card.gallery.length} Photos
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-1 flex-col justify-between">
        <div>
          <h3 className="mb-3 text-2xl font-normal text-[#282828] group-hover:text-[#a48b65] transition-colors">
            {card.title}
          </h3>
          <p className="mb-6 text-sm sm:text-base font-light leading-relaxed text-[#555555]">
            {card.body}
          </p>
        </div>

        {/* Actions */}
        <div className="flex flex-wrap items-center justify-between gap-3 pt-4 border-t border-black/5">
          <button
            type="button"
            onClick={onOpen}
            className="inline-flex items-center gap-2 rounded-full border border-[#a48b65]/40 bg-[#faf8f5] px-5 py-2.5 text-xs sm:text-sm font-medium text-[#282828] transition-all duration-200 hover:border-[#a48b65] hover:bg-[#a48b65] hover:text-white"
          >
            <span>View Gallery</span>
            <ArrowRightIcon className="h-3.5 w-3.5" />
          </button>

          <a
            href="#Contact"
            className="text-xs sm:text-sm font-medium text-[#a48b65] hover:underline flex items-center gap-1"
          >
            <span>Enquire Rates</span>
            <span>&rarr;</span>
          </a>
        </div>
      </div>
    </motion.div>
  );
}

export function RoomCardsSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const close = useCallback(() => setOpenIndex(null), []);

  return (
    <>
      <Reveal as="section" className="relative py-16 md:py-24 bg-[#faf8f5]">
        <div className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="mb-12 md:mb-16 text-center">
            <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-[#a48b65]/30 bg-white px-4 py-1.5 text-xs font-semibold tracking-widest text-[#a48b65] uppercase">
              <SparklesIcon className="h-3.5 w-3.5" />
              <span>PREMIER SUITES OVERVIEW</span>
            </div>
            <SectionReveal>
              <h2 className="text-3xl font-normal tracking-tight text-[#282828] sm:text-4xl md:text-5xl">
                {ROOM_CARDS_HEADING}
              </h2>
            </SectionReveal>
          </div>

          {/* Cards 2x2 Grid */}
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:gap-10">
            {ROOM_CARDS.map((card, index) => (
              <RoomCardColumn
                key={card.title}
                card={card}
                index={index}
                onOpen={() => setOpenIndex(index)}
              />
            ))}
          </div>
        </div>
      </Reveal>

      {/* Lightbox Modal */}
      <GalleryPopup
        images={openIndex !== null ? ROOM_CARDS[openIndex].gallery : []}
        open={openIndex !== null}
        onClose={close}
      />
    </>
  );
}

export default RoomCardsSection;
