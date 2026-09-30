"use client";

import { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import { ChevronLeftIcon, ChevronRightIcon, CloseIcon } from "@/components/icons";
import { cn } from "@/lib/utils";

export interface GalleryPopupProps {
  images: string[];
  open: boolean;
  onClose: () => void;
}

export function GalleryPopup({ images, open, onClose }: GalleryPopupProps) {
  const [index, setIndex] = useState(0);
  const count = images.length;

  const prev = useCallback(() => {
    setIndex((i) => (i - 1 + count) % count);
  }, [count]);

  const next = useCallback(() => {
    setIndex((i) => (i + 1) % count);
  }, [count]);

  useEffect(() => {
    if (!open) return;

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      else if (e.key === "ArrowLeft") prev();
      else if (e.key === "ArrowRight") next();
    };

    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);

    return () => {
      document.body.style.overflow = prevOverflow;
      window.removeEventListener("keydown", onKey);
    };
  }, [open, onClose, prev, next]);

  if (!open || count === 0) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Room gallery photo viewer"
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4 sm:p-6 backdrop-blur-xl animate-in fade-in duration-200"
      onClick={onClose}
    >
      {/* Modal Container */}
      <div
        className="relative flex h-full max-h-[88vh] w-full max-w-5xl flex-col items-center justify-center rounded-3xl border border-white/10 bg-[#121212]/95 p-4 sm:p-6 shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          type="button"
          aria-label="Close gallery"
          onClick={onClose}
          className="absolute right-4 top-4 z-20 flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/10 text-white/90 transition-all hover:bg-white hover:text-black"
        >
          <CloseIcon className="h-5 w-5 fill-current" />
        </button>

        {/* Counter */}
        <div className="absolute left-6 top-5 z-20 rounded-full bg-white/10 px-3.5 py-1 text-xs font-mono font-medium text-white/80 backdrop-blur-md">
          {index + 1} / {count}
        </div>

        {/* Main Image Stage */}
        <div className="relative my-auto flex h-[60vh] w-full items-center justify-center overflow-hidden rounded-2xl">
          <Image
            key={images[index]}
            src={images[index]}
            alt={`Room photograph ${index + 1}`}
            fill
            sizes="(max-width: 1024px) 95vw, 1000px"
            priority
            quality={85}
            className="object-contain"
          />
        </div>

        {/* Navigation Arrows */}
        {count > 1 && (
          <>
            <button
              type="button"
              aria-label="Previous photograph"
              onClick={prev}
              className="absolute left-4 sm:left-6 top-1/2 z-20 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-white/10 bg-black/60 text-white transition-all hover:bg-[#a48b65] hover:border-[#a48b65] hover:scale-110"
            >
              <ChevronLeftIcon className="h-6 w-6 fill-current" />
            </button>

            <button
              type="button"
              aria-label="Next photograph"
              onClick={next}
              className="absolute right-4 sm:right-6 top-1/2 z-20 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-white/10 bg-black/60 text-white transition-all hover:bg-[#a48b65] hover:border-[#a48b65] hover:scale-110"
            >
              <ChevronRightIcon className="h-6 w-6 fill-current" />
            </button>
          </>
        )}

        {/* Thumbnail Strip */}
        {count > 1 && (
          <div className="mt-4 flex max-w-full gap-2 overflow-x-auto px-2 py-1">
            {images.map((src, i) => (
              <button
                key={`${src}-${i}`}
                type="button"
                aria-label={`Thumbnail ${i + 1}`}
                onClick={() => setIndex(i)}
                className={cn(
                  "relative h-12 w-16 shrink-0 overflow-hidden rounded-lg border transition-all",
                  i === index
                    ? "border-[#a48b65] ring-2 ring-[#a48b65]/50 scale-105"
                    : "border-white/15 opacity-60 hover:opacity-100"
                )}
              >
                <Image
                  src={src}
                  alt=""
                  fill
                  sizes="64px"
                  loading="lazy"
                  className="object-cover"
                />
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default GalleryPopup;
