"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";
import {
  LOGO,
  NAV_LINKS,
  PHONE_MOBILE,
  PHONE_MOBILE_HREF,
  PHONE_LANDLINE,
  PHONE_LANDLINE_HREF,
  EMAIL,
  ADDRESS,
} from "@/data/site";
import { CloseIcon, MenuIcon } from "@/components/icons";
import { motion, AnimatePresence } from "framer-motion";

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeHash, setActiveHash] = useState("#hero");
  
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Toggle basic scrolled state for background changes
      setScrolled(currentScrollY > 80);

      // Headroom logic: Hide when scrolling down, show when scrolling up
      if (currentScrollY > lastScrollY.current && currentScrollY > 300 && !mobileOpen) {
        setHidden(true);
      } else if (currentScrollY < lastScrollY.current) {
        setHidden(false);
      }
      
      lastScrollY.current = currentScrollY;

      // Active section hash tracking
      const sectionIds = ["hero", "Aboutus", "Rooms", "PRACTITIONERS", "vision", "Contact"];
      const scrollPosition = currentScrollY + 200;

      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const el = document.getElementById(sectionIds[i]);
        if (el && el.offsetTop <= scrollPosition) {
          setActiveHash(`#${sectionIds[i]}`);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [mobileOpen]);

  return (
    <header 
      className={cn(
        "fixed top-0 left-0 w-full z-50 transition-transform duration-500 ease-in-out",
        hidden ? "-translate-y-full" : "translate-y-0"
      )}
    >
      {/* Top subtle contact info to retain all copy */}
      <div 
        className={cn(
          "hidden lg:flex w-full justify-end px-8 py-2 text-[11px] font-medium tracking-widest uppercase transition-all duration-700 ease-out",
          scrolled ? "opacity-0 h-0 overflow-hidden py-0" : "opacity-100 text-white shadow-sm"
        )}
      >
        <div className="flex gap-8">
          <a href={PHONE_LANDLINE_HREF} className="hover:text-[#a48b65] transition-colors drop-shadow-md">Tel: {PHONE_LANDLINE}</a>
          <a href={`mailto:${EMAIL}`} className="hover:text-[#a48b65] transition-colors drop-shadow-md">Email: {EMAIL}</a>
        </div>
      </div>

      <nav
        aria-label="Primary"
        className={cn(
          "w-full transition-all duration-700 ease-out",
          scrolled
            ? "bg-[#111111]/90 backdrop-blur-md border-b border-white/[0.05] py-4 shadow-lg"
            : "bg-transparent border-transparent py-4"
        )}
      >
        <div className="mx-auto flex max-w-[1360px] items-center justify-between px-6 lg:px-8">
          {/* Brand Logo */}
          <Link href="#hero" className="group flex items-center transition-opacity hover:opacity-80 drop-shadow-md">
            <div className="relative h-[44px] w-[135px] sm:h-[50px] sm:w-[155px]">
              <Image
                src={LOGO.src}
                alt={LOGO.alt || "London Therapy Rooms to Rent"}
                fill
                priority
                sizes="(max-width: 640px) 135px, 155px"
                className="object-contain object-left filter brightness-110"
              />
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex items-center gap-7 xl:gap-9">
            {NAV_LINKS.map((link) => {
              const isActive = activeHash === link.href;

              return (
                <Link
                  key={link.label}
                  href={link.href}
                  className={cn(
                    "relative py-2 text-[12px] font-medium tracking-[0.1em] uppercase transition-all duration-300 drop-shadow-md",
                    isActive
                      ? "text-white"
                      : "text-white/80 hover:text-white"
                  )}
                >
                  {link.label}
                  {/* Understated indicator */}
                  <span
                    className={cn(
                      "absolute bottom-0 left-0 h-[1.5px] bg-white transition-all duration-500 ease-out",
                      isActive ? "w-full opacity-100" : "w-0 opacity-0 group-hover:w-full group-hover:opacity-100"
                    )}
                    aria-hidden="true"
                  />
                </Link>
              );
            })}
          </div>

          {/* Action Button */}
          <div className="hidden lg:flex items-center gap-4 drop-shadow-md">
            <Link
              href="#Contact"
              className={cn(
                "inline-flex items-center justify-center rounded-[2px] px-8 py-3 text-[11px] font-semibold tracking-[0.15em] uppercase transition-all duration-300",
                scrolled 
                  ? "bg-white text-black hover:bg-white/90 shadow-md" 
                  : "bg-black/40 text-white backdrop-blur-md border border-white/30 hover:bg-white hover:text-black hover:border-transparent shadow-lg"
              )}
            >
              Book Now
            </Link>
          </div>

          {/* Mobile Menu Trigger */}
          <button
            type="button"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
            onClick={() => setMobileOpen((o) => !o)}
            className="flex h-10 w-10 items-center justify-center rounded-sm text-white transition-colors hover:text-[#a48b65] lg:hidden drop-shadow-md"
          >
            {mobileOpen ? <CloseIcon className="h-6 w-6" /> : <MenuIcon className="h-6 w-6" />}
          </button>
        </div>
      </nav>

      {/* Mobile Dropdown Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="absolute top-full left-0 w-full border-b border-white/5 bg-[#111111]/98 px-6 py-8 backdrop-blur-2xl lg:hidden shadow-2xl"
          >
            <div className="flex flex-col space-y-2">
              {NAV_LINKS.map((link) => {
                const isActive = activeHash === link.href;

                return (
                  <Link
                    key={link.label}
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className={cn(
                      "flex items-center justify-between py-3 text-[13px] font-medium tracking-[0.1em] uppercase border-b border-white/10 transition-colors",
                      isActive ? "text-[#a48b65]" : "text-white/80 hover:text-white"
                    )}
                  >
                    <span>{link.label}</span>
                    {isActive && <span className="h-1.5 w-1.5 rounded-full bg-[#a48b65]" />}
                  </Link>
                );
              })}

              <div className="pt-6 flex flex-col gap-4">
                <Link
                  href="#Contact"
                  onClick={() => setMobileOpen(false)}
                  className="flex w-full items-center justify-center rounded-[2px] bg-[#a48b65] py-4 text-center text-[12px] font-semibold tracking-[0.15em] text-white uppercase transition-colors hover:bg-[#b89f78]"
                >
                  Book Now / Enquire
                </Link>

                <div className="flex flex-col gap-3 pt-4 text-[12px] font-medium text-white/70 tracking-wide text-center">
                  <a href={PHONE_MOBILE_HREF} className="transition-colors hover:text-white">
                    Direct: {PHONE_MOBILE}
                  </a>
                  <a href={PHONE_LANDLINE_HREF} className="transition-colors hover:text-white">
                    Tel: {PHONE_LANDLINE}
                  </a>
                  <a href={`mailto:${EMAIL}`} className="transition-colors hover:text-white">
                    {EMAIL}
                  </a>
                  <div className="text-white/50 font-light">{ADDRESS}</div>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

export default SiteHeader;

