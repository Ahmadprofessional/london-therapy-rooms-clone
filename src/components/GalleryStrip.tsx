"use client";

import { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import { GALLERY } from "@/data/site";
import { ChevronLeftIcon, ChevronRightIcon, CloseIcon } from "@/components/icons";

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
    <section className="relative mt-[28.8px]">
      <div className="grid grid-cols-5 gap-[10px] max-[1024px]:grid-cols-2 max-[767px]:grid-cols-1">
        {GALLERY.map((img, i) => (
          <a
            key={img.src}
            href={img.src}
            onClick={(e) => {
              e.preventDefault();
              setOpen(i);
            }}
            aria-label={`Open gallery image ${i + 1}`}
            className="group relative block aspect-[4/3] overflow-hidden"
          >
            <Image
              src={img.src}
              alt=""
              fill
              sizes="(max-width: 767px) 100vw, (max-width: 1024px) 50vw, 20vw"
              className="object-cover object-center"
            />
            <span
              aria-hidden="true"
              className="absolute inset-0 bg-black/50 opacity-0 transition-opacity duration-[350ms] group-hover:opacity-100"
            />
          </a>
        ))}
      </div>

      {current && open !== null && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Image gallery"
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/90"
          onClick={close}
        >
          <button
            type="button"
            aria-label="Close"
            onClick={close}
            className="absolute right-[15px] top-[15px] z-10 flex h-[44px] w-[44px] items-center justify-center text-white/90 transition-colors hover:text-white"
          >
            <CloseIcon aria-hidden="true" className="h-[24px] w-[24px] fill-current" />
          </button>
          <button
            type="button"
            aria-label="Previous image"
            onClick={(e) => {
              e.stopPropagation();
              prev();
            }}
            className="absolute left-[10px] top-1/2 z-10 flex h-[60px] w-[44px] -translate-y-1/2 items-center justify-center text-white/90 transition-colors hover:text-white"
          >
            <ChevronLeftIcon aria-hidden="true" className="h-[28px] w-[28px] fill-current" />
          </button>
          <button
            type="button"
            aria-label="Next image"
            onClick={(e) => {
              e.stopPropagation();
              next();
            }}
            className="absolute right-[10px] top-1/2 z-10 flex h-[60px] w-[44px] -translate-y-1/2 items-center justify-center text-white/90 transition-colors hover:text-white"
          >
            <ChevronRightIcon aria-hidden="true" className="h-[28px] w-[28px] fill-current" />
          </button>
          <div className="relative h-[85vh] w-[85vw]" onClick={(e) => e.stopPropagation()}>
            <Image
              key={current.src}
              src={current.src}
              alt={`Gallery image ${open + 1} of ${count}`}
              fill
              sizes="85vw"
              className="object-contain"
              priority
            />
          </div>
          <div className="absolute bottom-[15px] left-1/2 -translate-x-1/2 text-[14px] font-normal text-white/80">
            {open + 1} / {count}
          </div>
        </div>
      )}
    </section>
  );
}
