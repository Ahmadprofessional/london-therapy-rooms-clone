"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { ChevronLeftIcon, ChevronRightIcon, CloseIcon } from "@/components/icons";
import { cn } from "@/lib/utils";

const AUTOPLAY_MS = 3000;
const SLIDE_MS = 500;

export interface GalleryPopupProps {
  images: string[];
  open: boolean;
  onClose: () => void;
}

/**
 * Elementor popup: rgba(0,0,0,.8) backdrop, 640×420 white-framed dialog (10px padding → 620×400 image area),
 * Swiper-style infinite horizontal slider (autoplay 3000ms, speed 500ms, pause on hover), arrows + dots.
 */
export function GalleryPopup({ images, open, onClose }: GalleryPopupProps) {
  if (!open) return null;
  // Mounting fresh on each open resets the slider to the first slide.
  return <GalleryDialog images={images} onClose={onClose} />;
}

function GalleryDialog({ images, onClose }: Omit<GalleryPopupProps, "open">) {
  const open = true;
  const count = images.length;
  // Track = [last, ...images, first]; `pos` is the index within the track (1 = first real slide).
  const [pos, setPos] = useState(1);
  const [animate, setAnimate] = useState(true);
  const [paused, setPaused] = useState(false);
  const [visible, setVisible] = useState(false);
  const busy = useRef(false);

  // Fade in (~300ms).
  useEffect(() => {
    const id = requestAnimationFrame(() => setVisible(true));
    return () => cancelAnimationFrame(id);
  }, []);

  // ESC to close + body scroll lock.
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prevOverflow;
      window.removeEventListener("keydown", onKey);
    };
  }, [open, onClose]);

  const go = useCallback(
    (delta: number) => {
      if (count < 2 || busy.current) return;
      busy.current = true;
      setAnimate(true);
      setPos((p) => p + delta);
    },
    [count],
  );

  const goTo = useCallback(
    (i: number) => {
      if (count < 2) return;
      busy.current = true;
      setAnimate(true);
      setPos(i + 1);
    },
    [count],
  );

  // Autoplay.
  useEffect(() => {
    if (!open || paused || count < 2) return;
    const id = window.setInterval(() => go(1), AUTOPLAY_MS);
    return () => window.clearInterval(id);
  }, [open, paused, count, go, pos]);

  // Re-enable transitions after an instant jump.
  useEffect(() => {
    if (animate) return;
    const id = requestAnimationFrame(() => requestAnimationFrame(() => setAnimate(true)));
    return () => cancelAnimationFrame(id);
  }, [animate]);

  const onTransitionEnd = () => {
    busy.current = false;
    if (pos === 0) {
      setAnimate(false);
      setPos(count);
    } else if (pos === count + 1) {
      setAnimate(false);
      setPos(1);
    }
  };

  const track = count > 1 ? [images[count - 1], ...images, images[0]] : images;
  const offset = count > 1 ? pos : 0;
  const active = count > 1 ? (((pos - 1) % count) + count) % count : 0;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Room images"
      className={cn(
        "fixed inset-0 z-50 flex items-center justify-center bg-[rgba(0,0,0,0.8)] transition-opacity duration-300",
        visible ? "opacity-100" : "opacity-0",
      )}
      onClick={onClose}
    >
      <div
        className="relative aspect-[640/420] w-[640px] max-w-[calc(100vw-20px)] bg-white p-[10px]"
        onClick={(e) => e.stopPropagation()}
      >
        <div
          className="relative h-full w-full overflow-hidden"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          <div
            className="flex h-full"
            style={{
              transform: `translate3d(-${offset * 100}%,0,0)`,
              transition: animate ? `transform ${SLIDE_MS}ms ease` : "none",
            }}
            onTransitionEnd={onTransitionEnd}
          >
            {track.map((src, i) => (
              <div
                key={`${src}-${i}`}
                className="h-full w-full shrink-0 bg-cover bg-center bg-no-repeat"
                style={{ backgroundImage: `url("${src}")` }}
                role="img"
                aria-label={`Room image ${((i - 1 + count) % count) + 1}`}
              />
            ))}
          </div>

          {count > 1 && (
            <>
              <button
                type="button"
                aria-label="Previous slide"
                onClick={() => go(-1)}
                className="absolute left-[10px] top-1/2 z-10 flex h-[25px] w-[25px] -translate-y-1/2 cursor-pointer items-center justify-center text-[rgba(237,237,237,0.9)]"
              >
                <ChevronLeftIcon width={25} height={25} />
              </button>
              <button
                type="button"
                aria-label="Next slide"
                onClick={() => go(1)}
                className="absolute right-[10px] top-1/2 z-10 flex h-[25px] w-[25px] -translate-y-1/2 cursor-pointer items-center justify-center text-[rgba(237,237,237,0.9)]"
              >
                <ChevronRightIcon width={25} height={25} />
              </button>

              <div className="absolute bottom-[13px] left-0 z-10 flex w-full items-center justify-center gap-[12px]">
                {images.map((_, i) => (
                  <button
                    key={i}
                    type="button"
                    aria-label={`Go to slide ${i + 1}`}
                    onClick={() => goTo(i)}
                    className={cn(
                      "block h-[6px] w-[6px] cursor-pointer rounded-full bg-black transition-opacity duration-300",
                      i === active ? "opacity-100" : "opacity-20",
                    )}
                  />
                ))}
              </div>
            </>
          )}
        </div>

        {/* Elementor popup close: dark × glyph inside a small box with the site's orange focus frame */}
        <button
          type="button"
          aria-label="Close"
          onClick={onClose}
          autoFocus
          className="absolute right-[20px] top-[19px] z-20 flex h-[20px] w-[20px] cursor-pointer items-center justify-center border border-dotted border-orange text-[#1f2124] outline-none"
        >
          <CloseIcon width={18} height={18} />
        </button>
      </div>
    </div>
  );
}

export default GalleryPopup;
