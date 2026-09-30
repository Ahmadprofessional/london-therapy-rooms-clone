"use client";

import { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import { GALLERY } from "@/data/site";
import { ChevronLeftIcon, ChevronRightIcon, CloseIcon, SparklesIcon } from "@/components/icons";

export function GalleryStrip() {
  const [open, setOpen] = useState<number | null>(null);
  const count = GALLERY.length;

  const close = useCallback(() => setOpen(null), []);
  const prev = useCallback(() => setOpen((i) => (i === null ? i : (i - 1 + count) % count)), [count]);
  const next = useCallback(() => setOpen((i) => (i === null ? i : (i + 1) % count)), [count]);

  useEffect(() => {
    if (open === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      else if (e.key === "ArrowLeft") prev();
      else if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", onKey);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [open, close, prev, next]);

  const current = open === null ? null : GALLERY[open];

  return (
    <section className="relative py-12 bg-white">
      <div className="mx-auto max-w-[1320px] px-4 sm:px-6 lg:px-8 mb-6 text-center">
        <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-[#a48b65]">
          <SparklesIcon className="h-3.5 w-3.5" />
          <span>CLINIC INTERIOR &amp; FACILITIES</span>
        </div>
      </div>

      {/* Photo Grid Strip */}
      <div className="mx-auto max-w-[1320px] px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-5 md:gap-4">
          {GALLERY.map((img, i) => (
            <a
              key={img.src}
              href={img.src}
              onClick={(e) => {
                e.preventDefault();
                setOpen(i);
              }}
              aria-label={`Open clinic interior image ${i + 1}`}
              className="group relative block aspect-[4/3] overflow-hidden rounded-2xl border border-black/5 bg-[#1a1a1a] shadow-sm transition-all duration-300 hover:shadow-lg hover:-translate-y-1 hover:border-[#a48b65]/50"
            >
              <Image
                src={img.src}
                alt={`Clinic interior photo ${i + 1}`}
                fill
                sizes="(max-width: 768px) 50vw, 20vw"
                loading="lazy"
                className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-110 filter brightness-95 group-hover:brightness-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100 flex items-end p-3">
                <span className="text-xs font-medium text-white">View Full &rarr;</span>
              </div>
            </a>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {current && open !== null && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Clinic Image gallery"
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/90 p-4 backdrop-blur-xl animate-in fade-in duration-200"
          onClick={close}
        >
          {/* Close */}
          <button
            type="button"
            aria-label="Close"
            onClick={close}
            className="absolute right-6 top-6 z-20 flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-white/10 text-white transition-all hover:bg-white hover:text-black"
          >
            <CloseIcon className="h-5 w-5 fill-current" />
          </button>

          {/* Prev */}
          <button
            type="button"
            aria-label="Previous image"
            onClick={(e) => {
              e.stopPropagation();
              prev();
            }}
            className="absolute left-4 sm:left-6 top-1/2 z-20 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-white/15 bg-black/60 text-white transition-all hover:bg-[#a48b65] hover:border-[#a48b65] hover:scale-110"
          >
            <ChevronLeftIcon className="h-6 w-6 fill-current" />
          </button>

          {/* Next */}
          <button
            type="button"
            aria-label="Next image"
            onClick={(e) => {
              e.stopPropagation();
              next();
            }}
            className="absolute right-4 sm:right-6 top-1/2 z-20 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-white/15 bg-black/60 text-white transition-all hover:bg-[#a48b65] hover:border-[#a48b65] hover:scale-110"
          >
            <ChevronRightIcon className="h-6 w-6 fill-current" />
          </button>

          {/* Image Container */}
          <div
            className="relative flex h-[75vh] w-[88vw] max-w-5xl items-center justify-center overflow-hidden rounded-3xl"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              key={current.src}
              src={current.src}
              alt={`Gallery image ${open + 1} of ${count}`}
              fill
              sizes="90vw"
              className="object-contain"
              priority
            />
          </div>

          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 rounded-full bg-black/60 px-4 py-1.5 text-xs font-mono font-medium text-white/90 border border-white/10 backdrop-blur-md">
            {open + 1} / {count}
          </div>
        </div>
      )}
    </section>
  );
}

export default GalleryStrip;
