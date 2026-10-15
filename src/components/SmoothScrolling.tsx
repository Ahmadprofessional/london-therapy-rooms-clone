"use client";

import { useEffect } from "react";
import Lenis from "lenis";

export function SmoothScrolling({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    // Respect prefers-reduced-motion
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) return;

    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // expo easing
      orientation: "vertical",
      gestureOrientation: "vertical",
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 2,
    });

    (window as any).__lenis = lenis;

    let rafId: number;
    function raf(time: number) {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    }

    rafId = requestAnimationFrame(raf);

    // Global anchor click listener (captures clicks on Book Now, Contact, and all section links)
    function handleAnchorClick(e: MouseEvent) {
      const target = (e.target as HTMLElement).closest("a");
      if (!target) return;

      const href = target.getAttribute("href");
      if (!href) return;

      const hashIndex = href.indexOf("#");
      if (hashIndex !== -1) {
        const path = href.slice(0, hashIndex);
        const hash = href.slice(hashIndex);

        // If on the current page
        if (
          path === "" ||
          path === "/" ||
          path === window.location.pathname ||
          href.startsWith("#")
        ) {
          const targetId = hash.slice(1);
          if (!targetId) return;

          const element = document.getElementById(targetId);
          if (element) {
            e.preventDefault();
            e.stopPropagation();

            lenis.scrollTo(element, {
              offset: -80,
              duration: 1.2,
            });

            window.history.pushState(null, "", hash);
          }
        }
      }
    }

    document.addEventListener("click", handleAnchorClick, { capture: true });

    // Handle existing URL hash on page load (e.g. user visits /#Contact)
    if (window.location.hash) {
      const initialId = window.location.hash.slice(1);
      const initialElement = document.getElementById(initialId);
      if (initialElement) {
        setTimeout(() => {
          lenis.scrollTo(initialElement, { offset: -80, immediate: false });
        }, 300);
      }
    }

    return () => {
      cancelAnimationFrame(rafId);
      document.removeEventListener("click", handleAnchorClick, { capture: true });
      delete (window as any).__lenis;
      lenis.destroy();
    };
  }, []);

  return <>{children}</>;
}
