"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

interface FadeSliderProps {
  images: string[];
  /** Autoplay delay in ms (Elementor slides "autoplay_speed") */
  interval?: number;
  /** Crossfade duration in ms (Elementor slides "transition_speed") */
  speed?: number;
  className?: string;
}

/**
 * Autoplay crossfade background-image slider (Elementor Slides widget with
 * transition "fade"): stacked cover/center backgrounds, active slide opacity 1.
 * Loops, pauses on hover, no arrows or dots.
 */
export function FadeSlider({ images, interval = 3000, speed = 500, className }: FadeSliderProps) {
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
      className={cn("relative overflow-hidden", className)}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {images.map((src, i) => (
        <div
          key={`${src}-${i}`}
          aria-hidden="true"
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url("${src}")`,
            opacity: i === active ? 1 : 0,
            transition: `opacity ${speed}ms ease`,
          }}
        />
      ))}
    </div>
  );
}
