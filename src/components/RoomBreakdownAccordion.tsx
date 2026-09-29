"use client";

import { useId, useState, type CSSProperties } from "react";
import { CheckIcon, MinusIcon, PlusIcon } from "@/components/icons";
import { cn } from "@/lib/utils";

interface RoomBreakdownAccordionProps {
  items: [string[], string[]];
  title?: string;
  className?: string;
  style?: CSSProperties;
}

export function RoomBreakdownAccordion({
  items,
  title = "Included Amenities & Medical Equipment",
  className,
  style,
}: RoomBreakdownAccordionProps) {
  const [open, setOpen] = useState(false);
  const panelId = useId();

  return (
    <div className={cn("w-full overflow-hidden rounded-2xl border border-[#a48b65]/25 bg-white/90 shadow-sm transition-all duration-300", open && "border-[#a48b65]/50 shadow-md", className)} style={style}>
      <button
        type="button"
        aria-expanded={open}
        aria-controls={panelId}
        onClick={() => setOpen((o) => !o)}
        className="flex w-full cursor-pointer items-center justify-between p-4 sm:p-5 text-left transition-colors hover:bg-[#faf8f5]"
      >
        <span className="text-sm sm:text-base font-medium text-[#282828] flex items-center gap-2">
          <span className="h-2 w-2 rounded-full bg-[#a48b65]" />
          {title}
        </span>
        <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#a48b65]/10 text-[#a48b65] transition-transform duration-200">
          {open ? <MinusIcon className="h-3.5 w-3.5" /> : <PlusIcon className="h-3.5 w-3.5" />}
        </span>
      </button>

      <div
        id={panelId}
        className={cn(
          "grid transition-[grid-template-rows] duration-300 ease-in-out",
          open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
        )}
      >
        <div className="min-h-0 overflow-hidden" aria-hidden={!open}>
          <div className="border-t border-black/5 bg-[#faf8f5] p-5 sm:p-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
              {items.map((col, c) => (
                <ul key={c} className="m-0 list-none space-y-2.5 p-0">
                  {col.map((item) => (
                    <li key={item} className="flex items-start gap-2.5 text-xs sm:text-sm font-normal text-[#444444]">
                      <span className="flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-[#a48b65] text-white mt-0.5">
                        <CheckIcon className="h-2.5 w-2.5" />
                      </span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RoomBreakdownAccordion;
