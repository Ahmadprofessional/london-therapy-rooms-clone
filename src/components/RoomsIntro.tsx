import { Reveal } from "@/components/Reveal";
import { ROOMS_INTRO } from "@/data/site";

/**
 * The live site renders the sub-heading breaks at
 * "... rooms to rent / available from ... per hour or / Full-time ..."
 * (see section-04.png), not at the data's line boundaries.
 */
function introLines(subLines: string[]): string[] {
  return subLines.join(" ").split(/\s+(?=available from)|\s+(?=Full-time)/);
}

export function RoomsIntro() {
  const lines = introLines(ROOMS_INTRO.subLines);
  return (
    <Reveal as="section" id="Rooms" className="relative mb-[50px] text-center text-black">
      <div className="mx-auto max-w-[1140px] p-2.5">
        <h2 className="mb-5 text-[33px] font-medium italic leading-[42.9px]">{ROOMS_INTRO.heading}</h2>
        <h2 className="mt-[-11.19px] text-[22px] font-medium italic leading-[28.6px]">
          {lines.map((line, i) => (
            <span key={i}>
              {i > 0 && <br />}
              {line}
            </span>
          ))}
        </h2>
      </div>
    </Reveal>
  );
}
