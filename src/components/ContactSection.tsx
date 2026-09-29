"use client";

import { useState, type FormEvent, type ReactNode } from "react";
import {
  CONTACT,
  ADDRESS,
  MAPS_HREF,
  PHONE_LANDLINE,
  PHONE_LANDLINE_HREF,
  PHONE_MOBILE,
  PHONE_MOBILE_HREF,
  EMAIL,
  SOCIAL_LINKS,
} from "@/data/site";
import {
  PhoneAltIcon,
  EnvelopeOutlineIcon,
  FacebookIcon,
  InstagramIcon,
  LocationDotIcon,
  CalendarIcon,
  SparklesIcon,
  ClockIcon,
  CheckIcon,
} from "@/components/icons";
import { Reveal } from "@/components/Reveal";
import { cn } from "@/lib/utils";
import { SectionReveal } from "@/components/SectionReveal";

const SOCIAL_ICON = { Facebook: FacebookIcon, Instagram: InstagramIcon } as const;

function FormField({
  label,
  htmlFor,
  children,
  className,
}: {
  label: string;
  htmlFor: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={cn("flex flex-col gap-1.5", className)}>
      <label htmlFor={htmlFor} className="text-xs sm:text-sm font-medium text-[#282828]">
        {label}
      </label>
      {children}
    </div>
  );
}

export function ContactSection() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 600);
  }

  const inputCls =
    "w-full rounded-xl border border-black/15 bg-white px-4 py-3 text-sm sm:text-base font-normal text-[#282828] placeholder:text-[#888888] shadow-xs transition-all duration-200 outline-none focus:border-[#a48b65] focus:ring-2 focus:ring-[#a48b65]/20";

  return (
    <section id="Contact" className="relative py-16 md:py-32 bg-[#faf8f5] scroll-mt-20">
      <div className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <Reveal className="mb-12 md:mb-16 text-center">
          <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-[#a48b65]/30 bg-white px-4 py-1.5 text-xs font-semibold tracking-widest text-[#a48b65] uppercase">
            <SparklesIcon className="h-3.5 w-3.5" />
            <span>CLINIC TOUR &amp; ENQUIRIES</span>
          </div>

          <SectionReveal>
            <h2 className="mb-3 text-3xl font-normal tracking-tight text-[#282828] sm:text-4xl md:text-5xl">
              {CONTACT.heading}
            </h2>
          </SectionReveal>

          <SectionReveal delay={0.1}>
            <p className="mx-auto max-w-xl text-base font-light text-[#555555]">
              {CONTACT.eyebrow}. Book an in-person viewing or enquire about hourly, daily, or full-time room availability.
            </p>
          </SectionReveal>
        </Reveal>

        {/* 2-Column Grid */}
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-12">
          {/* Booking Form */}
          <div className="rounded-3xl border border-[#a48b65]/25 bg-white p-6 sm:p-10 shadow-[0_15px_45px_rgba(0,0,0,0.05)] lg:col-span-7">
            <h3 className="mb-6 text-2xl font-normal text-[#282828]">
              Send an Enquiry / Book a Tour
            </h3>

            <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <FormField label="First Name" htmlFor="cf-first">
                  <input
                    id="cf-first"
                    name="first_name"
                    type="text"
                    required
                    placeholder="e.g. Dr. Sarah"
                    className={inputCls}
                  />
                </FormField>

                <FormField label="Last Name" htmlFor="cf-last">
                  <input
                    id="cf-last"
                    name="last_name"
                    type="text"
                    required
                    placeholder="e.g. Jenkins"
                    className={inputCls}
                  />
                </FormField>
              </div>

              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <FormField label="Email Address" htmlFor="cf-email">
                  <input
                    id="cf-email"
                    name="email"
                    type="email"
                    required
                    placeholder="name@clinic.com"
                    className={inputCls}
                  />
                </FormField>

                <FormField label="Phone Number" htmlFor="cf-phone">
                  <input
                    id="cf-phone"
                    name="phone"
                    type="tel"
                    required
                    placeholder="07..."
                    className={inputCls}
                  />
                </FormField>
              </div>

              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <FormField label="Your Profession / Specialty" htmlFor="cf-profession">
                  <input
                    id="cf-profession"
                    name="profession"
                    type="text"
                    required
                    placeholder="e.g. Aesthetic Doctor, Psychotherapist"
                    className={inputCls}
                  />
                </FormField>

                <FormField label="Interested Room" htmlFor="cf-room">
                  <select
                    id="cf-room"
                    name="room"
                    required
                    defaultValue=""
                    className={cn(inputCls, "cursor-pointer")}
                  >
                    <option value="" disabled>Select Room</option>
                    {CONTACT.roomOptions.map((o) => (
                      <option key={o} value={o}>
                        {o}
                      </option>
                    ))}
                    <option value="All Rooms">All Rooms / Flexible</option>
                  </select>
                </FormField>
              </div>

              <FormField label="Detail of your enquiry or preferred tour time" htmlFor="cf-message">
                <textarea
                  id="cf-message"
                  name="message"
                  rows={4}
                  placeholder={CONTACT.enquiryPlaceholder}
                  className={cn(inputCls, "resize-none")}
                />
              </FormField>

              <button
                type="submit"
                disabled={loading}
                className="group flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[#a48b65] via-[#b89f78] to-[#a48b65] bg-[length:200%_auto] py-4 text-base font-medium text-white shadow-md transition-all duration-300 hover:bg-right hover:shadow-lg hover:scale-[1.01] active:scale-[0.99] disabled:opacity-70"
              >
                {loading ? (
                  <span>Sending Enquiry...</span>
                ) : (
                  <>
                    <CalendarIcon className="h-5 w-5" />
                    <span>Submit Clinic Enquiry</span>
                  </>
                )}
              </button>

              {submitted && (
                <div className="flex items-center gap-2 rounded-2xl bg-emerald-50 border border-emerald-200 p-4 text-sm font-medium text-emerald-800">
                  <CheckIcon className="h-4 w-4 shrink-0 text-emerald-600" />
                  <span>Thank you! Your enquiry has been received. Our clinic management will be in touch shortly.</span>
                </div>
              )}
            </form>
          </div>

          {/* Contact Details & Clinic Card */}
          <div className="flex flex-col justify-between rounded-3xl border border-[#a48b65]/25 bg-gradient-to-b from-[#1c1c1c] to-[#121212] p-8 sm:p-10 text-white shadow-xl lg:col-span-5">
            <div>
              <span className="text-xs font-semibold tracking-widest text-[#a48b65] uppercase">
                DIRECT CONTACT
              </span>
              <h3 className="mb-6 text-2xl sm:text-3xl font-normal text-white">
                {CONTACT.infoHeading}
              </h3>

              <div className="space-y-5 text-sm sm:text-base">
                {/* Address */}
                <a
                  href={MAPS_HREF}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-start gap-3.5 transition-colors hover:text-[#a48b65]"
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white/10 text-[#a48b65] group-hover:bg-[#a48b65] group-hover:text-white transition-colors">
                    <LocationDotIcon className="h-5 w-5 fill-current" />
                  </div>
                  <div>
                    <div className="text-xs text-white/60">Clinic Location</div>
                    <div className="font-medium text-white">{ADDRESS}</div>
                  </div>
                </a>

                {/* Mobile */}
                <a
                  href={PHONE_MOBILE_HREF}
                  className="group flex items-start gap-3.5 transition-colors hover:text-[#a48b65]"
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white/10 text-[#a48b65] group-hover:bg-[#a48b65] group-hover:text-white transition-colors">
                    <PhoneAltIcon className="h-5 w-5 fill-current" />
                  </div>
                  <div>
                    <div className="text-xs text-white/60">Direct Mobile / WhatsApp</div>
                    <div className="font-medium text-white">{PHONE_MOBILE}</div>
                  </div>
                </a>

                {/* Landline */}
                <a
                  href={PHONE_LANDLINE_HREF}
                  className="group flex items-start gap-3.5 transition-colors hover:text-[#a48b65]"
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white/10 text-[#a48b65] group-hover:bg-[#a48b65] group-hover:text-white transition-colors">
                    <ClockIcon className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="text-xs text-white/60">Clinic Landline</div>
                    <div className="font-medium text-white">{PHONE_LANDLINE}</div>
                  </div>
                </a>

                {/* Email */}
                <a
                  href={`mailto:${EMAIL}`}
                  className="group flex items-start gap-3.5 transition-colors hover:text-[#a48b65]"
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white/10 text-[#a48b65] group-hover:bg-[#a48b65] group-hover:text-white transition-colors">
                    <EnvelopeOutlineIcon className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="text-xs text-white/60">General Enquiries</div>
                    <div className="font-medium text-white truncate max-w-[220px]">{EMAIL}</div>
                  </div>
                </a>
              </div>
            </div>

            {/* Transport & Socials */}
            <div className="mt-8 border-t border-white/10 pt-6">
              <div className="mb-4 text-xs font-light text-white/70">
                🚇 <strong>2 min walk</strong> from Bond Street Station · <strong>5 min</strong> from Oxford Circus
              </div>

              <div className="flex items-center gap-3">
                <span className="text-xs text-white/50">Follow our clinic:</span>
                {SOCIAL_LINKS.map(({ label, href }) => {
                  const Icon = SOCIAL_ICON[label];
                  return (
                    <a
                      key={label}
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white transition-all hover:bg-[#a48b65] hover:border-[#a48b65] hover:scale-105"
                      aria-label={label}
                    >
                      <Icon className="h-4 w-4 fill-current" />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactSection;
