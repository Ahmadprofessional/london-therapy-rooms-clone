"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { HERO } from "@/data/site";
import { motion } from "framer-motion";

export function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [videoLoaded, setVideoLoaded] = useState(false);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 1.0;
      const playPromise = videoRef.current.play();
      if (playPromise !== undefined) {
        playPromise.catch(() => {
          // Autoplay fallback
        });
      }
    }
  }, []);

  return (
    <section
      id="hero"
      className="relative flex min-h-screen w-full flex-col justify-center overflow-hidden bg-[#0a0a0a] text-white"
    >
      {/* Background Media Container (Starts at pixel 0 behind the melting navbar) */}
      <motion.div 
        className="absolute inset-0 z-0 overflow-hidden" 
        aria-hidden="true"
        initial={{ scale: 1 }}
        animate={{ scale: 1.05 }}
        transition={{ duration: 20, ease: "easeOut" }}
      >
        {/* Poster Fallback Image */}
        <div className="relative h-full w-full">
          <Image
            src={HERO.posterImage || "/images/2024/08/IMG-20240826-WA0037.jpg"}
            alt="London Therapy Rooms to Rent Marylebone"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center filter brightness-[0.70]"
          />
        </div>

        {/* HTML5 Background Video (Plays on seamless loop, zero controls shown) */}
        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          poster={HERO.posterImage || "/images/2024/08/IMG-20240826-WA0037.jpg"}
          onCanPlayThrough={() => setVideoLoaded(true)}
          onLoadedData={() => setVideoLoaded(true)}
          className={`absolute inset-0 h-full w-full object-cover object-center transition-opacity duration-1000 ease-out ${
            videoLoaded ? "opacity-100" : "opacity-0"
          }`}
          style={{ pointerEvents: "none" }}
        >
          <source src={HERO.videoSrc || "/videos/hero-section-video.mp4"} type="video/mp4" />
        </video>
      </motion.div>

      {/* Cinematic Scrim Gradient - Bottom-up gradient and Top-down gradient for navbar */}
      <div className="absolute top-0 inset-x-0 z-0 h-48 pointer-events-none bg-gradient-to-b from-black/70 to-transparent" />
      <div className="absolute inset-0 z-0 pointer-events-none bg-gradient-to-t from-[#0a0a0a] via-black/40 to-transparent" />
      <div className="absolute inset-0 z-0 pointer-events-none bg-[radial-gradient(ellipse_at_center,_transparent_40%,_rgba(0,0,0,0.5)_100%)]" />

      {/* Hero Foreground Content */}
      <div className="relative z-10 mx-auto flex w-full max-w-[1360px] flex-col items-center justify-center px-4 pt-32 pb-16 sm:px-6 sm:pt-40 md:pt-48 lg:px-8 text-center">
        <div className="mx-auto flex max-w-4xl flex-col items-center">
          {/* Eyebrow */}
          <div className="overflow-hidden mb-4">
            <motion.h2 
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
              className="text-base sm:text-xl md:text-2xl font-normal italic tracking-wide text-white/80"
            >
              {HERO.eyebrow}
            </motion.h2>
          </div>

          {/* H1 Title */}
          <h1 className="mb-10 text-3xl font-light tracking-tight text-white sm:text-5xl md:text-6xl lg:text-[62px] lg:leading-[1.15]">
            <div className="overflow-hidden">
              <motion.span 
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
                className="block font-light"
              >
                Rent in Marylebone, Harley Street
              </motion.span>
            </div>
            <div className="overflow-hidden mt-2">
              <motion.span 
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
                className="block font-serif italic text-white/90"
              >
                District Central London , W1G 0EB
              </motion.span>
            </div>
          </h1>

          {/* CTA Buttons */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.5 }}
            className="flex w-full flex-col items-center justify-center gap-4 sm:flex-row sm:gap-5"
          >
            {/* Primary Button */}
            <Link
              href={HERO.primaryCta.href}
              className="inline-flex w-full sm:w-auto min-w-[180px] items-center justify-center rounded-[2px] bg-white px-8 py-4 text-[11px] font-medium tracking-[0.15em] text-black uppercase transition-all duration-300 hover:bg-white/90 shadow-lg"
            >
              {HERO.primaryCta.label}
            </Link>

            {/* Secondary Button */}
            <Link
              href={HERO.secondaryCta.href}
              className="inline-flex w-full sm:w-auto min-w-[180px] items-center justify-center rounded-[2px] border border-white/20 bg-black/20 px-8 py-4 text-[11px] font-medium tracking-[0.15em] text-white uppercase backdrop-blur-md transition-all duration-300 hover:border-white hover:bg-white/10"
            >
              {HERO.secondaryCta.label}
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
