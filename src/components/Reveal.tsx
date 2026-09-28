"use client";

import { useEffect, useRef, type ElementType, type ComponentPropsWithoutRef } from "react";
import { cn } from "@/lib/utils";

/**
 * Elementor "fadeIn" entrance animation: element starts at opacity 0 and plays
 * `fadeIn 1.25s` once it enters the viewport (Elementor waypoint ≈ element top crosses viewport bottom).
 */
type RevealProps<T extends ElementType> = { as?: T } & ComponentPropsWithoutRef<T>;

export function Reveal<T extends ElementType = "div">({ as, className, ...rest }: RevealProps<T>) {
  const Tag = (as ?? "div") as ElementType;
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            e.target.classList.add("is-visible");
            io.unobserve(e.target);
          }
        }
      },
      { threshold: 0, rootMargin: "0px 0px -1px 0px" },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return <Tag ref={ref} className={cn("reveal", className)} {...rest} />;
}
