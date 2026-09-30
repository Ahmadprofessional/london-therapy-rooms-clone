import Image from "next/image";
import Link from "next/link";
import {
  ADDRESS,
  COPYRIGHT,
  EMAIL,
  LOGO,
  MAPS_HREF,
  NAV_LINKS,
  PHONE_LANDLINE,
  PHONE_LANDLINE_HREF,
  PHONE_MOBILE,
  PHONE_MOBILE_HREF,
  SOCIAL_LINKS,
} from "@/data/site";
import {
  EnvelopeOutlineIcon,
  FacebookIcon,
  InstagramIcon,
  LocationDotIcon,
  PhoneAltIcon,
  CalendarIcon,
} from "@/components/icons";

const SOCIAL_ICONS: Record<string, typeof FacebookIcon> = {
  Facebook: FacebookIcon,
  Instagram: InstagramIcon,
};

export function SiteFooter() {
  return (
    <footer className="border-t border-white/10 bg-[#0c0c0c] text-white">
      {/* Main Footer Content */}
      <div className="mx-auto max-w-[1320px] px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-12 lg:gap-10">
          {/* Col 1: Brand & Bio (4 cols) */}
          <div className="lg:col-span-4">
            <Link href="#hero" className="mb-6 inline-block">
              <div className="relative h-12 w-44">
                <Image
                  src={LOGO.src}
                  alt={LOGO.alt}
                  fill
                  sizes="176px"
                  loading="lazy"
                  className="object-contain object-left filter brightness-110"
                />
              </div>
            </Link>

            <p className="mb-6 text-sm font-light leading-relaxed text-white/70">
              State-of-the-art consulting and therapy suites situated in the heart of London&apos;s prestigious
              Marylebone and Harley Street medical district. Providing calming, CQC-compliant spaces for practitioners.
            </p>

            {/* Social Links */}
            <div className="flex gap-2">
              {SOCIAL_LINKS.map(({ label, href }) => {
                const Icon = SOCIAL_ICONS[label] ?? FacebookIcon;
                return (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex h-9 w-9 items-center justify-center rounded-full border border-white/15 bg-white/5 text-white/80 transition-all hover:bg-[#a48b65] hover:border-[#a48b65] hover:text-white"
                    aria-label={label}
                  >
                    <Icon className="h-4 w-4 fill-current" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Col 2: Navigation Links (3 cols) */}
          <div className="lg:col-span-3">
            <h3 className="mb-5 text-sm font-semibold tracking-widest text-[#a48b65] uppercase">
              QUICK NAVIGATION
            </h3>
            <ul className="space-y-3 text-sm">
              {NAV_LINKS.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-white/70 transition-colors hover:text-[#a48b65]"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Contact Details (3 cols) */}
          <div className="lg:col-span-3">
            <h3 className="mb-5 text-sm font-semibold tracking-widest text-[#a48b65] uppercase">
              CLINIC CONTACT
            </h3>
            <ul className="space-y-3.5 text-sm">
              <li>
                <a
                  href={MAPS_HREF}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-start gap-2.5 text-white/70 transition-colors hover:text-[#a48b65]"
                >
                  <LocationDotIcon className="h-4 w-4 shrink-0 text-[#a48b65] mt-0.5" />
                  <span>{ADDRESS}</span>
                </a>
              </li>
              <li>
                <a
                  href={PHONE_MOBILE_HREF}
                  className="flex items-center gap-2.5 text-white/70 transition-colors hover:text-[#a48b65]"
                >
                  <PhoneAltIcon className="h-4 w-4 shrink-0 text-[#a48b65]" />
                  <span>{PHONE_MOBILE}</span>
                </a>
              </li>
              <li>
                <a
                  href={PHONE_LANDLINE_HREF}
                  className="flex items-center gap-2.5 text-white/70 transition-colors hover:text-[#a48b65]"
                >
                  <PhoneAltIcon className="h-4 w-4 shrink-0 text-[#a48b65]" />
                  <span>Tel: {PHONE_LANDLINE}</span>
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${EMAIL}`}
                  className="flex items-center gap-2.5 text-white/70 transition-colors hover:text-[#a48b65]"
                >
                  <EnvelopeOutlineIcon className="h-4 w-4 shrink-0 text-[#a48b65]" />
                  <span className="truncate">{EMAIL}</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Col 4: Booking & Transport (2 cols) */}
          <div className="lg:col-span-2">
            <h3 className="mb-5 text-sm font-semibold tracking-widest text-[#a48b65] uppercase">
              VISIT OUR CLINIC
            </h3>
            <div className="rounded-2xl border border-white/10 bg-white/5 p-4 text-xs font-light text-white/80 space-y-2">
              <div>🚇 <strong>2 mins</strong> from Bond Street</div>
              <div>🚇 <strong>5 mins</strong> from Oxford Circus</div>
              <div className="pt-2 border-t border-white/10">
                <Link
                  href="#Contact"
                  className="inline-flex items-center gap-1.5 font-medium text-[#a48b65] hover:underline"
                >
                  <CalendarIcon className="h-3.5 w-3.5" />
                  <span>Book a Clinic Tour &rarr;</span>
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright Bar */}
        <div className="mt-16 flex flex-col items-center justify-between border-t border-white/10 pt-8 sm:flex-row text-xs text-white/50">
          <p>{COPYRIGHT}</p>
          <p className="mt-2 sm:mt-0">London Therapy Rooms to Rent · Harley Street District W1G 0EB</p>
        </div>
      </div>
    </footer>
  );
}

export default SiteFooter;
