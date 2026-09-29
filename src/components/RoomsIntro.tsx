import { Reveal } from "@/components/Reveal";
import { ROOMS_INTRO } from "@/data/site";
import { SparklesIcon } from "@/components/icons";
import { SectionReveal } from "@/components/SectionReveal";

export function RoomsIntro() {
  return (
    <Reveal as="section" id="Rooms" className="relative pt-16 pb-8 md:pt-24 md:pb-12 text-center scroll-mt-20 bg-white">
      <div className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8">
        {/* Eyebrow Badge */}
        <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#a48b65]/30 bg-[#faf8f5] px-4 py-1.5 text-xs font-semibold tracking-widest text-[#a48b65] uppercase">
          <SparklesIcon className="h-3.5 w-3.5" />
          <span>AVAILABLE FOR PRACTITIONERS</span>
        </div>

        {/* Heading */}
        <SectionReveal>
          <h2 className="mb-4 text-3xl font-normal tracking-tight text-[#282828] sm:text-4xl md:text-5xl">
            {ROOMS_INTRO.heading}
          </h2>
        </SectionReveal>

        {/* Subhead / Rate Guarantee */}
        <SectionReveal delay={0.1}>
          <p className="mx-auto max-w-2xl text-base font-light leading-relaxed text-[#555555] sm:text-lg">
            Treatment &amp; London therapy rooms to rent in the Harley Street district. Available from as low as{" "}
            <strong className="font-semibold text-[#a48b65]">£25 per hour</strong> or bespoke full-time clinical options.
          </p>
        </SectionReveal>
      </div>
    </Reveal>
  );
}

export default RoomsIntro;
