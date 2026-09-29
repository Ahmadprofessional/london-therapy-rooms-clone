import { BadgeSplitSection } from "@/components/AboutSection";
import { MISSION } from "@/data/site";

export function MissionSection() {
  return (
    <BadgeSplitSection
      id="vision"
      badgeEyebrow="OUR VISION & STANDARDS"
      heading={MISSION.heading}
      subheading={MISSION.subheading}
      paragraphs={MISSION.paragraphs}
      cta={MISSION.cta}
      reverse={true}
      bgClassName="bg-white"
    />
  );
}

export default MissionSection;
