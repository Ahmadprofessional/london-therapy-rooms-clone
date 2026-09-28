"use client";

import { useEffect, useState } from "react";
import { ScrollTopArrowIcon } from "@/components/icons";
import { cn } from "@/lib/utils";

/** Astra theme scroll-to-top: fixed bottom-right, fades in after 300px of scroll. */
export function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 300);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <button
      type="button"
      aria-label="Scroll to Top"
      tabIndex={visible ? 0 : -1}
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className={cn(
        "fixed bottom-[30px] right-[30px] z-[99] flex size-[31px] cursor-pointer items-center justify-center rounded-[2px] border-0 bg-scrolltop p-0 text-white transition-opacity duration-300",
        visible ? "opacity-100" : "pointer-events-none opacity-0",
      )}
    >
      <ScrollTopArrowIcon className="h-auto w-[15px] rotate-180" />
    </button>
  );
}
