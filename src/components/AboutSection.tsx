import Image from "next/image";
import Link from "next/link";
import { Reveal } from "@/components/Reveal";
import { ABOUT, MEMBER_BADGE } from "@/data/site";
import { cn } from "@/lib/utils";
import { ShieldCheckIcon, LocationDotIcon, ArrowRightIcon } from "@/components/icons";
import { SectionReveal } from "@/components/SectionReveal";

interface BadgeSplitSectionProps {
  id: string;
  badgeEyebrow?: string;
  heading: string;
  subheading: string;
  paragraphs: string[];
  cta: { label: string; href: string };
  containerClassName?: string;
  bgClassName?: string;
  reverse?: boolean;
}

export function BadgeSplitSection({
  id,
  badgeEyebrow = "ABOUT OUR CLINIC",
  heading,
  subheading,
  paragraphs,
  cta,
  containerClassName,
  bgClassName = "bg-[#faf8f5]",
  reverse = false,
}: BadgeSplitSectionProps) {
  const external = /^https?:\/\//.test(cta.href) && !cta.href.startsWith("https://londontherapyroomstorent.com");

  return (
    <Reveal as="section" id={id} className={cn("relative py-16 md:py-24 scroll-mt-24", bgClassName)}>
      <div className={cn("mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8", containerClassName)}>
        <div
          className={cn(
            "grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-16",
            reverse && "lg:grid-flow-dense"
          )}
        >
          {/* Badge & Visual Column */}
          <div
            className={cn(
              "flex flex-col items-center justify-center lg:col-span-5",
              reverse && "lg:col-start-8"
            )}
          >
            <div className="relative w-full max-w-[380px] rounded-3xl border border-[#a48b65]/25 bg-gradient-to-b from-[#faf8f5] to-[#f4eee6] p-8 shadow-[0_15px_40px_rgba(164,139,101,0.12)] transition-all duration-300 hover:border-[#a48b65]/50 hover:shadow-[0_20px_50px_rgba(164,139,101,0.2)]">
              {/* Gold Accent Glow */}
              <div className="absolute -right-8 -top-8 h-32 w-32 rounded-full bg-[#a48b65]/15 blur-2xl" />

              {/* Verified Ribbon */}
              <div className="mb-6 flex items-center justify-center gap-2 rounded-full border border-[#a48b65]/30 bg-white/80 px-4 py-1.5 backdrop-blur-sm">
                <ShieldCheckIcon className="h-4 w-4 text-[#a48b65]" />
                <span className="text-xs font-semibold tracking-wider text-[#a48b65] uppercase">
                  Verified UK Member
                </span>
              </div>

              {/* Badge Link & Image */}
              <a
                href={MEMBER_BADGE.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative block overflow-hidden rounded-2xl transition-transform duration-300 hover:scale-[1.02]"
                title="View UK Therapy Rooms Member Listing"
              >
                <div className="relative aspect-[4/3] w-full overflow-hidden rounded-xl border border-black/5 bg-white p-3 shadow-inner">
                  <Image
                    src={MEMBER_BADGE.src}
                    width={MEMBER_BADGE.width}
                    height={MEMBER_BADGE.height}
                    alt="A proud member of UK Therapy Rooms"
                    sizes="(max-width: 767px) 280px, 340px"
                    className="h-full w-full object-contain transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
              </a>

              {/* Trust Tagline */}
              <div className="mt-6 flex items-center justify-center gap-2 text-center text-xs font-medium text-[#282828]/70">
                <LocationDotIcon className="h-3.5 w-3.5 text-[#a48b65]" />
                <span>Harley Street District · Central London W1G</span>
              </div>
            </div>
          </div>

          {/* Copy & Content Column */}
          <div
            className={cn(
              "flex flex-col lg:col-span-7",
              reverse && "lg:col-start-1"
            )}
          >
            {/* Eyebrow */}
            <div className="mb-3 inline-flex items-center gap-2">
              <span className="h-px w-6 bg-[#a48b65]" />
              <span className="text-xs font-semibold tracking-[0.2em] text-[#a48b65] uppercase">
                {badgeEyebrow}
              </span>
            </div>

            {/* Headings */}
            <SectionReveal>
              <h2 className="mb-2 text-3xl font-normal tracking-tight text-[#282828] sm:text-4xl md:text-5xl">
                {heading}
              </h2>
            </SectionReveal>
            <SectionReveal delay={0.1}>
              <h3 className="mb-6 font-serif text-2xl font-normal italic text-[#a48b65] sm:text-3xl">
                {subheading}
              </h3>
            </SectionReveal>

            {/* Paragraphs */}
            <SectionReveal delay={0.2}>
              <div className="mb-8 space-y-4 text-base font-normal leading-relaxed text-[#555555] sm:text-lg">
                {paragraphs.map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </div>
            </SectionReveal>

            {/* CTA Button */}
            <SectionReveal delay={0.3}>
              <div>
                {external ? (
                  <a
                    href={cta.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex items-center gap-2.5 rounded-sm bg-[#a48b65] px-8 py-3.5 text-xs font-semibold tracking-[0.14em] text-black uppercase transition-all duration-300 hover:bg-[#282828] hover:text-white"
                  >
                    <span>{cta.label}</span>
                    <ArrowRightIcon className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
                  </a>
                ) : (
                  <Link
                    href={cta.href}
                    className="group inline-flex items-center gap-2.5 rounded-sm bg-[#a48b65] px-8 py-3.5 text-xs font-semibold tracking-[0.14em] text-black uppercase transition-all duration-300 hover:bg-[#282828] hover:text-white"
                  >
                    <span>{cta.label}</span>
                    <ArrowRightIcon className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
                  </Link>
                )}
              </div>
            </SectionReveal>
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
      badgeEyebrow="ABOUT OUR CLINIC"
      heading={ABOUT.heading}
      subheading={ABOUT.subheading}
      paragraphs={ABOUT.paragraphs}
      cta={ABOUT.cta}
    />
  );
}

export default AboutSection;
