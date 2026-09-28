import type { CSSProperties } from "react";
import { PRACTITIONERS_INTRO, PRACTITIONER_ROWS } from "@/data/site";
import type { Practitioner } from "@/types/content";
import { Reveal } from "@/components/Reveal";
import { cn } from "@/lib/utils";

/**
 * Per-card overrides taken from the live site's computed styles.
 * - imgH: rendered image height (width follows the intrinsic aspect ratio)
 * - roleSmall: h4 at 14px/16.8px with -5px top offset (else 15px/18px)
 * - bio: text-editor variant
 *     "regular" = Open Sans 400 15px/24.75px, no paragraph gap
 *     "light"   = Open Sans 300 16px/26.4px
 *     "medium"  = Open Sans 500 15px/24.75px
 *     "roboto"  = paragraphs on white, Roboto #000 spans, 25.6px gap
 * - bioMt: top margin of the text-editor container (px)
 * - bioW: text widget width override (Federica's widget overflows to 102.379%)
 */
type BioVariant = "regular" | "light" | "medium" | "roboto";
interface CardStyle {
  imgH: number;
  roleSmall?: boolean;
  bio: BioVariant;
  bioMt?: number;
  bioW?: string; // extra classes
}

const CARD_STYLES: Record<string, CardStyle> = {
  "Sofia Bouzian": { imgH: 132, bio: "regular" },
  "Dr Olga Gagua": { imgH: 132, bio: "regular" },
  "Katie Macauley": { imgH: 132, bio: "light", bioMt: 7.1875 },
  "Anna Balcome": { imgH: 132, roleSmall: true, bio: "regular" },
  Foz: { imgH: 132, bio: "medium", bioMt: -14.3906 },
  "Domenic Knight": { imgH: 132, roleSmall: true, bio: "roboto", bioMt: -7.1875 },
  "Dr Malgorzata Stanzek": { imgH: 132, bio: "light", bioMt: 25.1875 },
  "Dr Federica Boecklin": { imgH: 132, roleSmall: true, bio: "light", bioW: "md:w-[102.379%] md:max-w-[102.379%]" },
  "Kelly Sun": { imgH: 132, roleSmall: true, bio: "light", bioMt: 7.1875 },
  "Dana Nizomova": { imgH: 135, bio: "light", bioMt: 11 },
  "Hollie Bryant": { imgH: 138, roleSmall: true, bio: "light", bioMt: 33 },
};

const DEFAULT_STYLE: CardStyle = { imgH: 132, bio: "regular" };

const BIO_CLASS: Record<BioVariant, string> = {
  regular: "text-[15px] font-normal leading-[24.75px]",
  light: "text-[16px] font-light leading-[26.4px]",
  medium: "text-[15px] font-medium leading-[24.75px]",
  roboto: "text-[15px] font-normal leading-[24.75px]",
};

/** Section vertical margins per row (Elementor top-level sections 16–19) */
const ROW_MARGINS: CSSProperties[] = [
  { marginBottom: "90px" },
  { marginTop: "-57.5938px", marginBottom: "115.188px" },
  { marginTop: "-57.5938px", marginBottom: "100.797px" },
  { marginTop: "-57.5938px", marginBottom: "100.797px" },
];

function withBreaks(text: string) {
  const lines = text.split("\n");
  return lines.map((line, i) => (
    <span key={i}>
      {line}
      {i < lines.length - 1 && <br />}
    </span>
  ));
}

function PractitionerCard({ p, cols }: { p: Practitioner; cols: 2 | 3 }) {
  const s = CARD_STYLES[p.name] ?? DEFAULT_STYLE;
  const imgW = Math.round((s.imgH * p.imageWidth) / p.imageHeight);

  return (
    <div
      className={cn(
        "flex w-full flex-col p-[10px] text-center",
        cols === 3 ? "md:w-1/3" : "md:w-1/2",
      )}
    >
      {/* Image */}
      <div className="mb-[20px] text-center">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={p.image}
          alt=""
          width={imgW}
          height={s.imgH}
          loading="lazy"
          className="inline-block max-w-full align-middle transition-transform duration-300 hover:scale-110"
          style={{ height: `${s.imgH}px`, width: "auto" }}
        />
      </div>

      {/* Name */}
      <h3 className="mb-[20px] text-[22px] font-medium italic leading-[17.6px] tracking-[-0.4px] text-black">
        {p.name}
      </h3>

      {/* Role */}
      {p.role && (
        <h4
          className={cn(
            "mb-[20px] font-medium italic text-ink",
            s.roleSmall ? "mt-[-5px] text-[14px] leading-[16.8px]" : "text-[15px] leading-[18px]",
          )}
        >
          {withBreaks(p.role)}
        </h4>
      )}

      {/* Bio */}
      <div
        className={cn(
          "font-[family-name:var(--font-open-sans)] text-ink",
          BIO_CLASS[s.bio],
          s.bioW,
        )}
        style={{
          marginTop: s.bioMt ? `${s.bioMt}px` : undefined,
        }}
      >
        {s.bio === "roboto"
          ? p.bio.map((para, i) => (
              <p key={i} className="mb-[25.6px] bg-white">
                <span className="font-[family-name:var(--font-roboto)] text-black">{para}</span>
              </p>
            ))
          : p.bio.map((para, i) => <p key={i}>{para}</p>)}
      </div>
    </div>
  );
}

export function Practitioners() {
  return (
    <>
      {/* Intro (raw section 15) */}
      <Reveal
        as="section"
        id="PRACTITIONERS"
        className="relative mb-[30px] text-ink"
      >
        <div className="relative mx-auto flex max-w-[1100px]">
          <div className="flex w-full flex-wrap p-[10px] text-center">
            <h2 className="mb-[20px] w-full text-[28.83px] font-semibold italic leading-[37.479px] text-black">
              {PRACTITIONERS_INTRO.heading}
            </h2>
            <h2 className="mt-[-10.7969px] w-full text-[22px] font-medium italic leading-[28.6px] text-black">
              {PRACTITIONERS_INTRO.subLines.map((line, i) => (
                <span key={i}>
                  {line}
                  {i < PRACTITIONERS_INTRO.subLines.length - 1 && <br />}
                </span>
              ))}
            </h2>
          </div>
        </div>
      </Reveal>

      {/* Rows (raw sections 16–19): 3, 3, 3, 2 */}
      {PRACTITIONER_ROWS.map((row, r) => (
        <Reveal
          key={r}
          as="section"
          className="relative text-ink"
          style={ROW_MARGINS[r] ?? ROW_MARGINS[ROW_MARGINS.length - 1]}
        >
          <div className="relative mx-auto flex max-w-[1140px] flex-wrap items-start px-[20px] md:flex-nowrap md:px-0">
            {row.map((p) => (
              <PractitionerCard key={p.name} p={p} cols={row.length === 2 ? 2 : 3} />
            ))}
          </div>
        </Reveal>
      ))}
    </>
  );
}
