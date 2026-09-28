"use client";

import { useEffect, useState } from "react";
import { HERO } from "@/data/site";
import { Reveal } from "@/components/Reveal";
import { cn } from "@/lib/utils";

const SLIDE_DURATION = 5000;
const FADE_DURATION = 500;

/**
 * Split the H1 so it wraps exactly like the live site:
 * desktop  → "Rent in Marylebone, Harley Street" / "District Central London ," / "W1G 0EB"
 * mobile   → "Rent in Marylebone, Harley Street" (wraps naturally) / "District Central London , W1G 0EB"
 */
function splitTitle(lines: string[]) {
  const full = lines.join(" ").replace(/\s+/g, " ").trim();
  const iDistrict = full.indexOf("District");
  const iPostcode = full.indexOf("W1G");
  if (iDistrict > 0 && iPostcode > iDistrict) {
    return {
      a: full.slice(0, iDistrict).trim(),
      b: full.slice(iDistrict, iPostcode).trim(),
      c: full.slice(iPostcode).trim(),
    };
  }
  return null;
}

export function Hero() {
  const slides = HERO.slides;
  const [active, setActive] = useState(0);

  useEffect(() => {
    if (slides.length < 2) return;
    const id = window.setInterval(() => {
      setActive((i) => (i + 1) % slides.length);
    }, SLIDE_DURATION);
    return () => window.clearInterval(id);
  }, [slides.length]);

  const title = splitTitle(HERO.titleLines);

  const buttonBase =
    "inline-block rounded-[5px] px-[30px] py-[15px] text-center text-[18px] font-medium leading-[18px] text-white transition-colors duration-300";

  return (
    <Reveal
      as="section"
      id="hero"
      className="relative mt-[-150px] px-[10px] py-[100px] md:mt-[-170px] lg:p-[100px]"
    >
      {/* Background slideshow (Elementor swiper-fade) */}
      <div className="absolute inset-0 z-0 overflow-hidden" aria-hidden="true">
        {slides.map((src, i) => (
          <div
            key={src}
            className="absolute inset-0 bg-cover bg-[position:50%_50%]"
            style={{
              backgroundImage: `url("${src}")`,
              opacity: i === active ? 1 : 0,
              transition: `opacity ${FADE_DURATION}ms ease`,
            }}
          />
        ))}
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-[rgb(5,5,5)] opacity-45" aria-hidden="true" />

      {/* Content */}
      <div className="relative mx-auto flex min-h-[467px] max-w-[1240px] items-center">
        <div className="relative flex w-full flex-wrap pt-[89px]">
          {/* Eyebrow */}
          <div className="relative mb-5 w-full pt-[37.1875px] text-center">
            <h2 className="whitespace-pre-wrap text-[20px] font-medium italic leading-[1.3] text-[#e3e3e2] md:text-[26px] lg:text-[32px] lg:leading-[41.6px]">
              {HERO.eyebrow}
            </h2>
          </div>

          {/* H1 */}
          <div className="relative mb-5 w-full text-center">
            <h1 className="text-[30px] font-medium italic leading-[40px] text-white md:text-[40px] md:leading-[56px] lg:text-[50px] lg:leading-[70px]">
              {title ? (
                <>
                  {title.a}
                  <br />
                  {title.b}
                  <br className="hidden lg:inline" />
                  <span className="lg:hidden"> </span>
                  {title.c}
                </>
              ) : (
                HERO.titleLines.map((line, i) => (
                  <span key={i}>
                    {i > 0 && <br />}
                    {line}
                  </span>
                ))
              )}
            </h1>
          </div>

          {/* Buttons */}
          <div className="relative mx-auto flex w-full max-w-[1140px]">
            <div className="flex w-1/2 flex-wrap p-[10px]">
              <div className="relative w-full text-right">
                <a
                  href={HERO.primaryCta.href}
                  className={cn(buttonBase, "bg-[#a48b65] hover:bg-[#282828]")}
                >
                  <span className="flex justify-center gap-[5px]">
                    <span>{HERO.primaryCta.label}</span>
                  </span>
                </a>
              </div>
            </div>
            <div className="flex w-1/2 flex-wrap p-[10px]">
              <div className="relative w-full text-left">
                <a
                  href={HERO.secondaryCta.href}
                  className={cn(buttonBase, "bg-[#282828] hover:bg-[#a48b65]")}
                >
                  <span className="flex justify-center gap-[5px]">
                    <span>{HERO.secondaryCta.label}</span>
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Reveal>
  );
}
