import type { CSSProperties } from "react";
import { DotCircleIcon } from "@/components/icons";
import { Reveal } from "@/components/Reveal";
import { FadeSlider } from "@/components/FadeSlider";
import { RoomBreakdownAccordion } from "@/components/RoomBreakdownAccordion";
import type { RoomDetail as RoomDetailData } from "@/types/content";

/** Per-room spacing from the live Elementor layout (room 2 is a compressed variant). */
export interface RoomDetailLayout {
  /** Text panel padding at >=768px */
  padding: string;
  /** Gap dimensions -> "Suitable For" */
  suitableGap: number;
  /** Gap "Suitable For" -> first list item */
  listGap: number;
  /** Gap list -> accordion header */
  accordionGap: number;
  /** Gap accordion -> ENQUIRE button */
  buttonGap: number;
}

export const DEFAULT_ROOM_LAYOUT: RoomDetailLayout = {
  padding: "36px 70px 23px",
  suitableGap: 15,
  listGap: 9,
  accordionGap: 8,
  buttonGap: 20,
};

interface RoomDetailProps {
  room: RoomDetailData;
  layout?: Partial<RoomDetailLayout>;
}

export function RoomDetail({ room, layout }: RoomDetailProps) {
  const l = { ...DEFAULT_ROOM_LAYOUT, ...layout };

  const text = (
    <div
      className="flex w-full flex-col justify-center bg-gold px-[30px] py-[50px] md:w-1/2 md:[padding:var(--room-pad)]"
      style={{ "--room-pad": l.padding } as CSSProperties}
    >
      <h3 className="text-[20px] font-medium leading-[26px] text-black">{room.title}</h3>
      <h3 className="mt-[-5px] text-[17px] font-medium leading-[22.1px] text-white">{room.dimensions}</h3>
      <h3 className="text-[20px] font-medium leading-[26px] text-black" style={{ marginTop: l.suitableGap }}>
        Suitable For
      </h3>
      <div style={{ marginTop: l.listGap }}>
        {room.suitableFor.map((col, c) => (
          <ul key={c} className="m-0 list-none p-0">
            {col.map((item) => (
              <li key={item} className="flex items-center text-base font-extralight leading-[26.4px]">
                <DotCircleIcon className="mr-[3.5px] h-[14px] w-[14px] shrink-0 text-white" />
                <span className="pl-[5px] text-white">{item}</span>
              </li>
            ))}
          </ul>
        ))}
      </div>
      <RoomBreakdownAccordion items={room.breakdown} style={{ marginTop: l.accordionGap }} />
      <div style={{ marginTop: l.buttonGap }}>
        <a
          href="#Contact"
          className="inline-block rounded-[5px] bg-black px-[30px] py-[15px] text-center text-[15px] font-medium leading-4 text-white transition-colors hover:bg-near-black"
        >
          ENQUIRE
        </a>
      </div>
    </div>
  );

  const image = (
    <div className="relative h-[483px] w-full md:h-auto md:w-1/2">
      <FadeSlider images={room.slides} className="absolute inset-0" />
    </div>
  );

  return (
    <Reveal as="section" className="relative my-[70px]">
      <div className="mx-auto flex max-w-[1100px] flex-col md:flex-row" data-image-side={room.imageSide}>
        {room.imageSide === "left" ? (
          <>
            {image}
            {text}
          </>
        ) : (
          <>
            {text}
            {image}
          </>
        )}
      </div>
    </Reveal>
  );
}
