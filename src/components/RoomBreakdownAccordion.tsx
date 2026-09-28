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

/** Unlimited Elements "Icon Accordion": click header to slide open a black 2-column checklist. */
export function RoomBreakdownAccordion({
  items,
  title = "Room Breakdown (click to expand)",
  className,
  style,
}: RoomBreakdownAccordionProps) {
  const [open, setOpen] = useState(false);
  const panelId = useId();

  return (
    <div className={cn("w-full overflow-hidden", className)} style={style}>
      <button
        type="button"
        aria-expanded={open}
        aria-controls={panelId}
        onClick={() => setOpen((o) => !o)}
        className="flex h-[42px] w-full cursor-pointer items-center border-0 bg-transparent p-0 text-left"
      >
        <span className="flex-1 text-[15px] font-semibold leading-[24.75px] text-black">{title}</span>
        <span className="ml-[15px] flex h-[42px] w-[42px] shrink-0 items-center justify-center leading-4 text-[#bfbfbf]">
          {open ? <MinusIcon className="h-4 w-[14px]" /> : <PlusIcon className="h-4 w-[14px]" />}
        </span>
      </button>
      <div
        id={panelId}
        className={cn(
          "grid transition-[grid-template-rows] duration-300 ease-in-out",
          open ? "grid-rows-[1fr]" : "grid-rows-[0fr]",
        )}
      >
        <div className="min-h-0 overflow-hidden" inert={!open}>
          <div className="flex bg-black p-5 text-white">
            {items.map((col, c) => (
              <ul key={c} className={cn("m-0 list-none p-2.5", c === 0 ? "w-[43.6%]" : "w-[56.4%]")}>
                {col.map((item) => (
                  <li key={item} className="flex items-center text-base font-extralight leading-[26.4px]">
                    <CheckIcon className="mr-2 h-[14px] w-[14px] shrink-0 text-white" />
                    {/* live site: item text boxes wrap at ~100px (col 1) / ~118px (col 2) */}
                    <span className={c === 0 ? "max-w-[100px]" : "max-w-[118px]"}>{item}</span>
                  </li>
                ))}
              </ul>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
