import { DotCircleIcon, CalendarIcon, ArrowRightIcon } from "@/components/icons";
import { Reveal } from "@/components/Reveal";
import { FadeSlider } from "@/components/FadeSlider";
import { RoomBreakdownAccordion } from "@/components/RoomBreakdownAccordion";
import type { RoomDetail as RoomDetailData } from "@/types/content";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface RoomDetailProps {
  room: RoomDetailData;
  layout?: Record<string, unknown>;
}

export function RoomDetail({ room }: RoomDetailProps) {
  const isImageLeft = room.imageSide === "left";

  return (
    <Reveal as="section" className="relative py-10 md:py-16">
      <div className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8">
        <div className="overflow-hidden rounded-3xl border border-[#a48b65]/20 bg-gradient-to-b from-[#faf8f5] to-[#f4ede4] p-6 sm:p-8 lg:p-10 shadow-[0_20px_50px_rgba(164,139,101,0.08)]">
          <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-12 lg:gap-12">
            {/* Visual Slider Column */}
            <div
              className={cn(
                "relative h-[380px] w-full sm:h-[450px] lg:h-[520px] lg:col-span-6",
                isImageLeft ? "lg:order-1" : "lg:order-2"
              )}
            >
              <FadeSlider images={room.slides} className="h-full w-full shadow-lg" />
            </div>

            {/* Content Column */}
            <div
              className={cn(
                "flex flex-col lg:col-span-6",
                isImageLeft ? "lg:order-2" : "lg:order-1"
              )}
            >
              {/* Header & Dimensions */}
              <div className="mb-4 border-b border-[#a48b65]/20 pb-4">
                <span className="text-xs font-semibold tracking-widest text-[#a48b65] uppercase">
                  CLINICAL SUITE
                </span>
                <h3 className="mb-3 mt-1 text-2xl font-normal text-[#282828] sm:text-3xl">
                  {room.title}
                </h3>

                <div className="inline-flex items-center gap-2 rounded-full border border-[#a48b65]/30 bg-white px-4 py-1.5 shadow-sm">
                  <span className="text-xs font-semibold text-[#a48b65]">Dimensions:</span>
                  <span className="text-xs font-mono font-medium text-[#282828]">{room.dimensions}</span>
                </div>
              </div>

              {/* Suitable For */}
              <div className="mb-6">
                <h4 className="mb-3 text-xs font-semibold tracking-wider text-[#a48b65] uppercase">
                  SUITABLE PRACTITIONER SPECIALTIES
                </h4>
                <div className="flex flex-wrap gap-2">
                  {room.suitableFor.flat().map((specialty) => (
                    <span
                      key={specialty}
                      className="inline-flex items-center gap-1.5 rounded-full border border-[#a48b65]/20 bg-white/80 px-3 py-1 text-xs font-medium text-[#282828] shadow-xs"
                    >
                      <DotCircleIcon className="h-3 w-3 text-[#a48b65]" />
                      <span>{specialty}</span>
                    </span>
                  ))}
                </div>
              </div>

              {/* Breakdown Accordion */}
              <div className="mb-6">
                <RoomBreakdownAccordion items={room.breakdown} />
              </div>

              {/* Action Button */}
              <div className="flex items-center gap-4 pt-2">
                <Link
                  href="#Contact"
                  className="group inline-flex items-center gap-2.5 rounded-full bg-[#a48b65] px-7 py-3.5 text-sm font-medium text-white shadow-[0_4px_15px_rgba(164,139,101,0.3)] transition-all duration-300 hover:bg-[#282828] hover:shadow-[0_8px_25px_rgba(40,40,40,0.3)] hover:scale-[1.02]"
                >
                  <CalendarIcon className="h-4 w-4" />
                  <span>Enquire for {room.title.replace(" Dimensions", "")}</span>
                  <ArrowRightIcon className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Reveal>
  );
}

export default RoomDetail;
