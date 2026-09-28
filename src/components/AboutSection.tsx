import Image from "next/image";
import { Reveal } from "@/components/Reveal";
import { ABOUT, MEMBER_BADGE } from "@/data/site";
import { cn } from "@/lib/utils";

type BadgeSplitSectionProps = {
  id: string;
  heading: string;
  subheading: string;
  paragraphs: string[];
  cta: { label: string; href: string };
  /** Boxed container max-width (About 1140px, Mission 1100px). */
  containerClassName: string;
  /** Badge column extras (Mission centres the badge vertically on desktop). */
  badgeColClassName?: string;
  /** Negative top margin pulling the gold subheading up (About -14px, Mission -21px). */
  subheadingClassName: string;
  /** Text widget: weight + negative top margin (About 300 / -6.9px, Mission 400 / -13.31px). */
  textClassName: string;
  /** Spacing between the paragraph blocks (Mission has a blank line between them). */
  paragraphGapClassName?: string;
};

/**
 * Shared layout for the About (#Aboutus) and Mission (#vision) sections:
 * UK Therapy Rooms member badge on the left (37.6%), heading/text/button on the right (62.4%).
 */
export function BadgeSplitSection({
  id,
  heading,
  subheading,
  paragraphs,
  cta,
  containerClassName,
  badgeColClassName,
  subheadingClassName,
  textClassName,
  paragraphGapClassName,
}: BadgeSplitSectionProps) {
  const external = /^https?:\/\//.test(cta.href) && !cta.href.startsWith("https://londontherapyroomstorent.com");

  return (
    <Reveal
      as="section"
      id={id}
      className="relative my-[80px] text-[16px] font-extralight leading-[26.4px] text-ink"
    >
      <div className={cn("relative mx-auto flex flex-col md:flex-row", containerClassName)}>
        {/* Badge column */}
        <div
          className={cn(
            "relative flex w-full flex-wrap px-[10px] pt-[18px] pb-[46px] md:w-[37.6%] md:p-[10px]",
            badgeColClassName,
          )}
        >
          <div className="relative w-full">
            <a
              href={MEMBER_BADGE.href}
              target="_blank"
              rel="noopener"
              className="block text-[18px] leading-[29.7px] text-orange"
            >
              <Image
                src={MEMBER_BADGE.src}
                width={MEMBER_BADGE.width}
                height={MEMBER_BADGE.height}
                alt="A proud member of UK Therapy Rooms"
                sizes="(max-width: 767px) 311px, 409px"
                className="mx-auto block h-auto w-[311px] max-w-full md:mx-0 md:w-full"
              />
            </a>
          </div>
        </div>

        {/* Text column */}
        <div className="relative w-full px-[30px] pt-[5px] md:w-[62.4%] md:pr-0 md:pl-[20px]">
          <div className="mb-[20px]">
            <h2 className="text-[32px] font-medium italic leading-[41.6px] text-ink">{heading}</h2>
          </div>

          <div className="mb-[20px]">
            <div className={subheadingClassName}>
              <h2 className="text-[32px] font-medium italic leading-[41.6px] text-gold">{subheading}</h2>
            </div>
          </div>

          <div className="mb-[20px] font-[family-name:var(--font-open-sans)]">
            <div className={textClassName}>
              {paragraphs.map((p, i) => (
                <div key={i} className={i > 0 ? paragraphGapClassName : undefined}>
                  {p}
                </div>
              ))}
            </div>
          </div>

          <div className="text-left">
            <a
              href={cta.href}
              {...(external ? { target: "_blank", rel: "noopener" } : {})}
              className="inline-block rounded-[5px] bg-gold px-[30px] py-[15px] text-center text-[16px] font-medium leading-[16px] text-white transition-colors duration-300 hover:bg-ink"
            >
              <span className="flex justify-center gap-[5px]">
                <span>{cta.label}</span>
              </span>
            </a>
          </div>
        </div>
      </div>
    </Reveal>
  );
}

export function AboutSection() {
  return (
    <BadgeSplitSection
      id="Aboutus"
      heading={ABOUT.heading}
      subheading={ABOUT.subheading}
      paragraphs={ABOUT.paragraphs}
      cta={ABOUT.cta}
      containerClassName="max-w-[1140px]"
      subheadingClassName="mt-[-14px]"
      textClassName="mt-[-6.90625px] font-light"
    />
  );
}
