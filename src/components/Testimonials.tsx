"use client";

import { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import { FEEDBACK, TESTIMONIALS, TESTIMONIAL_SIDE_IMAGE } from "@/data/site";
import { Reveal } from "@/components/Reveal";
import { StarIcon, SparklesIcon, ChevronLeftIcon, ChevronRightIcon } from "@/components/icons";
import { SectionReveal } from "@/components/SectionReveal";

const AUTOPLAY_MS = 4000;

export function Testimonials() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const count = TESTIMONIALS.length;

  const prev = useCallback(() => {
    setActive((i) => (i - 1 + count) % count);
  }, [count]);

  const next = useCallback(() => {
    setActive((i) => (i + 1) % count);
  }, [count]);

  useEffect(() => {
    if (paused || count <= 1) return;
    const id = window.setInterval(next, AUTOPLAY_MS);
    return () => window.clearInterval(id);
  }, [paused, count, next]);

  const current = TESTIMONIALS[active];

  return (
    <section className="relative py-16 md:py-32 overflow-hidden bg-[#111111]">
      <div className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8">
        {/* Top Header Card */}
        <Reveal className="mb-12 rounded-3xl border border-[#a48b65]/20 bg-gradient-to-r from-[#1c1c1c] via-[#242424] to-[#1c1c1c] p-8 md:p-12 text-white shadow-xl">
          <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-12">
            <div className="lg:col-span-5">
              <div className="mb-2 inline-flex items-center gap-2 rounded-full border border-gold/40 bg-gold/15 px-3.5 py-1 text-xs font-semibold text-gold uppercase tracking-widest">
                <SparklesIcon className="h-3.5 w-3.5" />
                <span>{FEEDBACK.eyebrow}</span>
              </div>
              <SectionReveal>
                <h2 className="text-3xl sm:text-4xl font-normal text-white">
                  {FEEDBACK.heading}
                </h2>
              </SectionReveal>
            </div>
            <div className="lg:col-span-7 border-t border-white/10 pt-6 lg:border-t-0 lg:border-l lg:pl-8 lg:pt-0">
              <SectionReveal delay={0.1}>
                <p className="text-base sm:text-lg font-light leading-relaxed text-white/80">
                  {FEEDBACK.body}
                </p>
              </SectionReveal>
            </div>
          </div>
        </Reveal>

        {/* Carousel & Visual Showcase Container */}
        <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-12 lg:gap-12">
          {/* Testimonial Slider Card */}
          <div
            className="flex flex-col justify-between rounded-3xl border border-[#a48b65]/25 bg-white p-8 sm:p-10 shadow-[0_15px_40px_rgba(0,0,0,0.06)] lg:col-span-6 min-h-[380px]"
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
          >
            <div>
              {/* Star Rating */}
              <div className="mb-4 flex items-center gap-1 text-[#a48b65]">
                {[...Array(5)].map((_, i) => (
                  <StarIcon key={i} className="h-4 w-4 fill-current" />
                ))}
              </div>

              {/* Review Title */}
              {current.title && (
                <h3 className="mb-3 text-xl font-normal text-[#282828]">
                  &ldquo;{current.title}&rdquo;
                </h3>
              )}

              {/* Quote */}
              <p className="text-base sm:text-lg font-light italic leading-relaxed text-[#444444]">
                &ldquo;{current.quote}&rdquo;
              </p>
            </div>

            {/* Author & Controls */}
            <div className="mt-8 flex items-center justify-between border-t border-black/5 pt-6">
              <div>
                <div className="font-semibold text-[#282828] text-base">{current.name}</div>
                {current.date && (
                  <div className="text-xs text-[#888888]">{current.date}</div>
                )}
              </div>

              {/* Arrow Controls */}
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  aria-label="Previous review"
                  onClick={prev}
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-black/10 bg-[#faf8f5] text-[#282828] transition-all hover:bg-[#a48b65] hover:border-[#a48b65] hover:text-white"
                >
                  <ChevronLeftIcon className="h-4 w-4 fill-current" />
                </button>
                <button
                  type="button"
                  aria-label="Next review"
                  onClick={next}
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-black/10 bg-[#faf8f5] text-[#282828] transition-all hover:bg-[#a48b65] hover:border-[#a48b65] hover:text-white"
                >
                  <ChevronRightIcon className="h-4 w-4 fill-current" />
                </button>
              </div>
            </div>
          </div>

          {/* Waiting Area Photo Showcase */}
          <div className="relative h-[340px] sm:h-[380px] w-full overflow-hidden rounded-3xl border border-[#a48b65]/20 shadow-lg lg:col-span-6 bg-[#1a1a1a]">
            <Image
              src={TESTIMONIAL_SIDE_IMAGE}
              alt="Luxury clinic reception and waiting area"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover object-center filter brightness-[0.95]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between text-white">
              <div>
                <span className="text-xs uppercase tracking-widest text-[#a48b65] font-semibold">CLINIC LOUNGE</span>
                <div className="text-lg font-medium">Tranquil Waiting Area for Patients</div>
              </div>
              <span className="rounded-full bg-white/20 px-3 py-1 text-xs backdrop-blur-md">Marylebone</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
