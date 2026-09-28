"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { FEEDBACK, TESTIMONIALS, TESTIMONIAL_SIDE_IMAGE } from "@/data/site";
import type { Testimonial } from "@/types/content";
import { Reveal } from "@/components/Reveal";

const AUTOPLAY_MS = 2000;
const SPEED_MS = 500;
const GAP_PX = 10;

function Slide({ t }: { t: Testimonial }) {
  return (
    <div className="shrink-0 basis-full overflow-hidden p-[20px]" style={{ marginRight: GAP_PX }}>
      <div className="text-center">
        <div className="text-[15px] italic leading-[22.5px] text-white">
          {t.title && (
            <>
              <b className="font-bold">{t.title}</b>
              <br />
            </>
          )}
          {t.quote}
        </div>
        <div className="mt-[25px] flex items-center justify-center">
          <cite className="flex flex-col text-[14px] not-italic leading-[21px]">
            <span className="font-bold text-white">{t.name}</span>
            <span className="text-white">{t.date}</span>
          </cite>
        </div>
      </div>
    </div>
  );
}

function Carousel({ items }: { items: Testimonial[] }) {
  const n = items.length;
  // Loop clones: [last, ...items, first]; real slides live at indices 1..n
  const slides = n > 1 ? [items[n - 1], ...items, items[0]] : items;
  const [index, setIndex] = useState(n > 1 ? 1 : 0);
  const [animate, setAnimate] = useState(true);
  const [paused, setPaused] = useState(false);
  const busy = useRef(false);

  const next = useCallback(() => {
    if (busy.current) return;
    busy.current = true;
    setAnimate(true);
    setIndex((i) => i + 1);
  }, []);

  useEffect(() => {
    if (n <= 1 || paused) return;
    const id = window.setInterval(next, AUTOPLAY_MS + SPEED_MS);
    return () => window.clearInterval(id);
  }, [n, paused, next]);

  // Re-enable transition on the frame after an instant loop jump
  useEffect(() => {
    if (animate) return;
    const raf = requestAnimationFrame(() =>
      requestAnimationFrame(() => {
        setAnimate(true);
        busy.current = false;
      }),
    );
    return () => cancelAnimationFrame(raf);
  }, [animate]);

  const onTransitionEnd = () => {
    if (index >= n + 1) {
      setAnimate(false);
      setIndex(1);
    } else if (index <= 0) {
      setAnimate(false);
      setIndex(n);
    } else {
      busy.current = false;
    }
  };

  return (
    <div
      className="relative z-[1] mx-[12.5781px] overflow-hidden"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      aria-roledescription="carousel"
    >
      <div
        className="relative z-[1] flex items-stretch"
        style={{
          transform: `translateX(calc(${-index} * (100% + ${GAP_PX}px)))`,
          transition: animate ? `transform ${SPEED_MS}ms ease` : "none",
        }}
        onTransitionEnd={onTransitionEnd}
      >
        {slides.map((t, i) => (
          <Slide key={`${t.name}-${i}`} t={t} />
        ))}
      </div>
    </div>
  );
}

export function Testimonials() {
  return (
    <>
      {/* Feedback band (raw section 20) */}
      <Reveal as="section" className="relative bg-ink p-[30px] md:p-[40px]">
        <div className="relative mx-auto flex max-w-[1140px] flex-col md:flex-row">
          <div className="relative flex flex-wrap md:w-[40.175%]">
            <div className="relative mb-[20px] w-full">
              <h5 className="text-[18px] font-medium italic leading-[21.6px] text-orange">
                {FEEDBACK.eyebrow}
              </h5>
            </div>
            <div className="relative w-full">
              <div className="mt-[-14px]">
                <h3 className="text-[32px] font-medium italic leading-[41.6px] text-white">
                  {FEEDBACK.heading}
                </h3>
              </div>
            </div>
          </div>
          <div className="relative flex flex-wrap md:w-[59.825%]">
            <div className="relative w-full max-w-[97.214%] font-[family-name:var(--font-open-sans)] font-light text-white">
              <div className="ml-[6px]">
                <p className="leading-[26.4px]">{FEEDBACK.body}</p>
              </div>
            </div>
          </div>
        </div>
      </Reveal>

      {/* Carousel + photo row (raw section 21) */}
      <Reveal as="section" className="relative mt-[43.1875px]">
        <div className="relative mx-auto flex max-w-[1398px] md:mx-[21px] min-[1440px]:mx-auto">
          <div className="relative flex w-full flex-wrap bg-ink p-[30px] md:w-[40.272%]">
            <div className="relative w-full">
              <Carousel items={TESTIMONIALS} />
            </div>
          </div>
          <div
            className="relative hidden bg-cover bg-center md:flex md:w-[59.728%]"
            style={{ backgroundImage: `url("${TESTIMONIAL_SIDE_IMAGE}")` }}
            aria-hidden="true"
          />
        </div>
      </Reveal>
    </>
  );
}
