"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";
import { LOGO, NAV_LINKS, PHONE_MOBILE, PHONE_MOBILE_HREF, SOCIAL_LINKS } from "@/data/site";
import { CloseIcon, FacebookIcon, InstagramIcon, MenuIcon, PhoneAltIcon } from "@/components/icons";

const SOCIAL_ICON = { Facebook: FacebookIcon, Instagram: InstagramIcon } as const;

/** Index of the "current page" link (Home). */
const ACTIVE_INDEX = 0;

function TopBar() {
  return (
    <div className="relative z-10 h-[41px] px-[100px] text-[16px] leading-[26.4px] text-ink max-md:px-[30px]">
      <div aria-hidden="true" className="absolute inset-0 bg-black opacity-[0.74]" />
      <div className="relative mx-auto flex max-w-[1240px]">
        {/* Phone */}
        <div className="mt-[5px] flex h-[36px] w-1/2 items-center">
          <a
            href={PHONE_MOBILE_HREF}
            className="group flex items-center text-[15px] font-light leading-[24.75px] text-orange max-md:text-[18px]"
          >
            <span className="flex w-[20px] shrink-0 items-center">
              <PhoneAltIcon className="mr-[4px] h-[16px] w-[16px] transition-colors group-hover:text-ink" />
            </span>
            <span className="pl-[5px] text-white">{PHONE_MOBILE}</span>
          </a>
        </div>
        {/* Social icons */}
        <div className="mt-[5px] flex h-[36px] w-1/2 items-center justify-end">
          <div className="mr-[-6.1875px] flex gap-x-[5px]">
            {SOCIAL_LINKS.map((s) => {
              const Icon = SOCIAL_ICON[s.label];
              return (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex h-[36px] w-[36px] items-center justify-center rounded-[10%] bg-transparent text-[18px] leading-[18px] text-orange transition-colors hover:text-white"
                >
                  <span className="sr-only">{s.label}</span>
                  <Icon className="h-[18px] w-[18px]" />
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

function NavBar() {
  const [open, setOpen] = useState(false);

  return (
    <div className="relative z-10 px-[100px] pb-[4px] text-[16px] leading-[26.4px] text-ink max-md:px-[30px]">
      <div aria-hidden="true" className="absolute inset-0 bg-black opacity-50" />
      <div className="relative mx-auto -mt-[4px] flex max-w-[1240px] items-center">
        <div className="mt-[2px] flex w-full items-center max-md:flex-col max-md:items-start">
          {/* Logo column: 24% of 1240 = 297.6px */}
          <div className="mt-[2.96875px] flex w-[24%] shrink-0 items-center max-md:w-full">
            <a href="/" className="inline-block">
              <img
                src={LOGO.src}
                alt={LOGO.alt}
                width={LOGO.width}
                height={LOGO.height}
                className="block h-auto w-[161px] max-md:w-[90px] max-md:py-[10px]"
              />
            </a>
          </div>

          {/* Nav column */}
          <nav
            aria-label="Main"
            className="relative flex min-h-[99px] flex-1 items-center max-md:min-h-0 max-md:w-1/2 max-md:flex-none max-md:pb-[10px]"
          >
            {/* Desktop menu (>= 1025px) */}
            <ul className="flex flex-wrap justify-start max-[1024px]:hidden">
              {NAV_LINKS.map((link, i) => {
                const active = i === ACTIVE_INDEX;
                return (
                  <li key={link.label} className="relative mr-[15px] last:mr-0">
                    <a
                      href={link.href}
                      aria-current={active ? "page" : undefined}
                      className={cn(
                        "group relative flex h-[48px] items-center justify-between p-[15px] text-[18px] font-light leading-[18px]",
                        active ? "text-gold" : "text-white",
                      )}
                    >
                      {link.label}
                      <span
                        aria-hidden="true"
                        className={cn(
                          "absolute bottom-0 h-[3px] bg-gold transition-all duration-200 ease-linear",
                          active
                            ? "left-0 w-full opacity-100"
                            : "left-full w-[10px] opacity-0 group-hover:left-0 group-hover:w-full group-hover:opacity-100 group-focus-visible:left-0 group-focus-visible:w-full group-focus-visible:opacity-100",
                        )}
                      />
                    </a>
                  </li>
                );
              })}
            </ul>

            {/* Mobile toggle (< 1025px) */}
            <button
              type="button"
              aria-label="Menu"
              aria-expanded={open}
              onClick={() => setOpen((o) => !o)}
              className={cn(
                "ml-auto hidden cursor-pointer rounded-[3px] text-[25px] leading-[25px] text-orange max-[1024px]:inline-block",
                open ? "border-2 border-orange p-[5.7px]" : "border-0 p-[7.7px]",
              )}
            >
              {open ? (
                <CloseIcon className="block h-[25px] w-[25px] p-[4px]" />
              ) : (
                <MenuIcon className="block h-[25px] w-[25px]" />
              )}
            </button>

            {/* Mobile dropdown */}
            {open && (
              <ul className="absolute left-0 top-full z-[999] w-full bg-white shadow-sm min-[1025px]:hidden md:max-w-[165px]">
                {NAV_LINKS.map((link, i) => {
                  const active = i === ACTIVE_INDEX;
                  return (
                    <li key={link.label} className="border-b border-[#c4c4c4] last:border-b-0">
                      <a
                        href={link.href}
                        onClick={() => setOpen(false)}
                        aria-current={active ? "page" : undefined}
                        className={cn(
                          "block p-[15px] text-[18px] font-light leading-[18px]",
                          active ? "border-b-[3px] border-gold text-gold" : "text-ink",
                        )}
                      >
                        {link.label}
                      </a>
                    </li>
                  );
                })}
              </ul>
            )}
          </nav>
        </div>
      </div>
    </div>
  );
}

export function SiteHeader() {
  return (
    <header className="relative z-10">
      <TopBar />
      <NavBar />
    </header>
  );
}

export default SiteHeader;
