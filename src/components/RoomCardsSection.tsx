"use client";

import { useCallback, useState } from "react";
import { ROOM_CARDS, ROOM_CARDS_HEADING } from "@/data/site";
import type { RoomCard } from "@/types/content";
import { RoomIcon } from "@/components/icons";
import { Reveal } from "@/components/Reveal";
import { GalleryPopup } from "@/components/GalleryPopup";
import { cn } from "@/lib/utils";

/**
 * True computed card colours (getComputedStyle, desktop 1440):
 *  - Room 1: bg rgb(40,40,40) (#282828), text #fff
 *  - Room 2 / Waiting Area: bg #fff + overlay #eeeeee @ 0.74 → rendered rgb(242,242,242) (#f2f2f2), text inherits #282828
 *  - Room 3: bg rgb(20,20,20) (#141414), text #fff
 * Overrides the provisional values in ROOM_CARDS (data file left untouched).
 */
const CARD_STYLE_OVERRIDES: Array<Partial<Pick<RoomCard, "background" | "textColor">>> = [
  { background: "#282828", textColor: "#ffffff" },
  { background: "#f2f2f2", textColor: "#282828" },
  { background: "#141414", textColor: "#ffffff" },
  { background: "#f2f2f2", textColor: "#282828" },
];

function RoomCardColumn({ card, index, onOpen }: { card: RoomCard; index: number; onOpen: () => void }) {
  const o = CARD_STYLE_OVERRIDES[index] ?? {};
  const background = o.background ?? card.background;
  const textColor = o.textColor ?? card.textColor;
  const isLast = index === ROOM_CARDS.length - 1;

  return (
    <div
      className="group relative flex w-full flex-wrap content-start px-[60px] py-[80px] md:min-h-[489px] md:w-[550px] md:p-[80px]"
      style={{ backgroundColor: background }}
    >
      {/* Hover: background photo + 50% overlay, 0.3s */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-cover bg-center bg-no-repeat opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{ backgroundImage: `url("${card.hoverImage}")` }}
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-50"
        style={{ backgroundColor: card.hoverOverlay }}
      />

      <div className="relative mb-[20px] h-[58px] w-full">
        <span className="inline-block h-[50px] w-[50px] text-orange">
          <RoomIcon width={50} height={50} />
        </span>
      </div>

      <h3 className="relative mb-[20px] w-full text-[25px] font-medium leading-[32.5px] text-orange">{card.title}</h3>

      <div
        className="relative mb-[20px] w-full font-[family-name:var(--font-open-sans)] text-[16px] font-light leading-[26.4px]"
        style={{ color: textColor }}
      >
        <p>{card.body}</p>
      </div>

      <div className={cn("relative w-full text-left", isLast && "md:pt-[15.59px]")}>
        <button
          type="button"
          onClick={onOpen}
          className="inline-block cursor-pointer rounded-[5px] bg-gold px-[30px] py-[15px] text-center text-[16px] font-medium leading-[16px] text-white transition-colors duration-300 hover:bg-ink"
        >
          View All Images
        </button>
      </div>
    </div>
  );
}

export function RoomCardsSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const close = useCallback(() => setOpenIndex(null), []);
  const rows: RoomCard[][] = [ROOM_CARDS.slice(0, 2), ROOM_CARDS.slice(2, 4)];

  return (
    <>
      {/* Heading (raw section 11) */}
      <Reveal as="section" className="relative mb-[50px]">
        <div className="mx-auto flex max-w-[1140px]">
          <div className="flex w-full flex-wrap p-[10px]">
            <h2 className="w-full text-center text-[28.83px] font-medium italic leading-[37.479px] text-orange max-md:px-[40px]">
              {ROOM_CARDS_HEADING}
            </h2>
          </div>
        </div>
      </Reveal>

      {/* Card rows (raw sections 12 + 13): row gap 80px margin − 60px pull-up = 20px */}
      {rows.map((row, r) => (
        <Reveal
          key={r}
          as="section"
          className={cn("relative", r === 0 ? "md:mb-[80px]" : "md:mb-[52px] md:mt-[-60px] mb-[52px]")}
        >
          <div className="mx-auto flex max-w-[1100px] flex-col md:flex-row">
            {row.map((card, c) => {
              const index = r * 2 + c;
              return <RoomCardColumn key={card.title} card={card} index={index} onOpen={() => setOpenIndex(index)} />;
            })}
          </div>
        </Reveal>
      ))}

      <GalleryPopup
        images={openIndex !== null ? ROOM_CARDS[openIndex].gallery : []}
        open={openIndex !== null}
        onClose={close}
      />
    </>
  );
}

export default RoomCardsSection;
