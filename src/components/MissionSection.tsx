import { BadgeSplitSection } from "@/components/AboutSection";
import { MISSION } from "@/data/site";

export function MissionSection() {
  return (
    <BadgeSplitSection
      id="vision"
      heading={MISSION.heading}
      subheading={MISSION.subheading}
      paragraphs={MISSION.paragraphs}
      cta={MISSION.cta}
      containerClassName="max-w-[1100px]"
      badgeColClassName="md:items-center"
      subheadingClassName="mt-[-21px]"
      textClassName="mt-[-13.3125px] font-normal"
      paragraphGapClassName="mt-[26.4px]"
    />
  );
}
