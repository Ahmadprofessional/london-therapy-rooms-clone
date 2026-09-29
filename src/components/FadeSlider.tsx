"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";

interface FadeSliderProps {
  images: string[];
  interval?: number;
  speed?: number;
  className?: string;
}

export function FadeSlider({ images, interval = 3500, speed = 700, className }: FadeSliderProps) {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const count = images.length;

  useEffect(() => {
    if (paused || count < 2) return;
    const id = window.setInterval(() => setActive((i) => (i + 1) % count), interval);
    return () => window.clearInterval(id);
  }, [paused, count, interval]);

  return (
    <div
      className={cn("relative h-full w-full overflow-hidden rounded-3xl group bg-[#1a1a1a]", className)}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {images.map((src, i) => (
        <div
          key={`${src}-${i}`}
          aria-hidden={i !== active}
          className="absolute inset-0 transition-opacity ease-in-out"
          style={{
            opacity: i === active ? 1 : 0,
            transitionDuration: `${speed}ms`,
          }}
        >
          <Image
            src={src}
            alt={`Room view photo ${i + 1}`}
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            priority={i === 0}
            className="object-cover object-center"
          />
        </div>
      ))}

      {/* Slide Indicators */}
      {count > 1 && (
        <div className="absolute bottom-4 left-1/2 z-10 flex -translate-x-1/2 gap-1.5 rounded-full bg-black/50 px-3 py-1.5 backdrop-blur-md">
          {images.map((_, i) => (
            <button
              key={i}
              type="button"
              aria-label={`Go to slide ${i + 1}`}
              onClick={() => setActive(i)}
              className={cn(
                "h-1.5 rounded-full transition-all duration-300",
                i === active ? "w-6 bg-[#a48b65]" : "w-1.5 bg-white/50 hover:bg-white"
              )}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default FadeSlider;
