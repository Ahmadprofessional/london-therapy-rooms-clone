"use client";

import { useEffect, useState } from "react";
import { ChevronRightIcon } from "@/components/icons";
import { cn } from "@/lib/utils";

export function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <button
      type="button"
      aria-label="Scroll back to top"
      tabIndex={visible ? 0 : -1}
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className={cn(
        "fixed bottom-6 right-6 z-40 flex h-11 w-11 cursor-pointer items-center justify-center rounded-full border border-white/20 bg-[#a48b65] text-white shadow-[0_4px_20px_rgba(164,139,101,0.4)] transition-all duration-300 hover:bg-[#282828] hover:scale-110",
        visible ? "opacity-100 translate-y-0" : "pointer-events-none opacity-0 translate-y-4"
      )}
    >
      <ChevronRightIcon className="h-5 w-5 -rotate-90 fill-current" />
    </button>
  );
}

export default ScrollToTop;
