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
  AddressBookIcon,
  PhoneAltIcon,
  EnvelopeOutlineIcon,
  FacebookIcon,
  InstagramIcon,
  CaretDownIcon,
} from "@/components/icons";
import { Reveal } from "@/components/Reveal";
import { cn } from "@/lib/utils";

/* Elementor form field styles (computed on the live site) */
const fieldBase =
  "w-full max-w-full min-h-[40px] bg-white border border-solid border-[#69727d] shadow-[0_1px_2px_0_rgba(0,0,0,0.05)] font-normal text-[#1f2124] outline-none focus:shadow-[0_0_0_1px_#69727d]";
const inputCls = cn(fieldBase, "h-[40px] rounded-[4px] px-[16px] py-[12px] text-[16px] leading-[24px]");
const labelCls = "block w-full text-[14px] font-medium leading-[20px] text-black";
const groupCls = "mb-[10px] flex flex-wrap items-center px-[5px]";

function Field({ label, htmlFor, half, children }: { label: string; htmlFor: string; half?: boolean; children: ReactNode }) {
  return (
    <div className={cn(groupCls, half ? "w-1/2 max-[767px]:w-full" : "w-full")}>
      <label htmlFor={htmlFor} className={labelCls}>
        {label}
      </label>
      {children}
    </div>
  );
}

const SOCIAL_ICON = { Facebook: FacebookIcon, Instagram: InstagramIcon } as const;

export function ContactSection() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    e.currentTarget.reset();
    setSubmitted(true);
  }

  const infoItems = [
    { Icon: AddressBookIcon, text: ADDRESS, href: MAPS_HREF, external: true },
    { Icon: PhoneAltIcon, text: PHONE_LANDLINE, href: PHONE_LANDLINE_HREF },
    { Icon: PhoneAltIcon, text: PHONE_MOBILE, href: PHONE_MOBILE_HREF },
    { Icon: EnvelopeOutlineIcon, text: EMAIL, href: `mailto:${EMAIL}` },
  ];

  return (
    <>
      {/* Heading (raw section 22) */}
      <Reveal as="section" className="relative mt-[70px] text-ink">
        <div className="mx-auto flex max-w-[1140px]">
          <div className="flex w-full flex-wrap p-[10px]">
            <div className="mb-[20px] w-full text-center">
              <h2 className="text-[35px] font-medium italic leading-[45.5px] text-black">
                {CONTACT.eyebrow}
              </h2>
            </div>
            <div className="w-full text-center">
              <h3 className="text-[22px] font-semibold leading-[28.6px]">{CONTACT.heading}</h3>
            </div>
          </div>
        </div>
      </Reveal>

      {/* Form + info (raw section 23) */}
      <section id="Contact" className="relative mt-[50px] scroll-mt-[100px] text-ink">
        <div className="mx-[70px] flex max-w-[1300px] max-[1024px]:mx-[20px] max-[767px]:mx-0 max-[767px]:flex-col min-[1440px]:mx-auto">
          {/* Form column */}
          <div className="relative flex w-1/2 flex-wrap max-[767px]:w-full max-[767px]:px-[30px]">
            <form onSubmit={handleSubmit} className="w-full">
              <div className="-mx-[5px] -mb-[10px] flex flex-wrap">
                <Field label="First Name" htmlFor="cf-first" half>
                  <input id="cf-first" name="first_name" type="text" required className={inputCls} />
                </Field>
                <Field label="Last Name" htmlFor="cf-last" half>
                  <input id="cf-last" name="last_name" type="text" required className={inputCls} />
                </Field>
                <Field label="Email" htmlFor="cf-email">
                  <input id="cf-email" name="email" type="email" required className={inputCls} />
                </Field>
                <Field label="Phone No" htmlFor="cf-phone">
                  <input id="cf-phone" name="phone" type="tel" required className={inputCls} />
                </Field>
                <Field label="Profession" htmlFor="cf-profession">
                  <input id="cf-profession" name="profession" type="text" required className={inputCls} />
                </Field>
                <Field label="Which room?" htmlFor="cf-room">
                  <div className="relative flex w-full max-w-full">
                    <select
                      id="cf-room"
                      name="room"
                      required
                      defaultValue=""
                      className={cn(
                        fieldBase,
                        "h-[40px] cursor-pointer appearance-none rounded-[3px] py-[5px] pl-[14px] pr-[20px] text-[15px] font-extralight text-[#1f2124] invalid:text-[#1f2124]",
                      )}
                    >
                      <option value="">Select Room</option>
                      {CONTACT.roomOptions.map((o) => (
                        <option key={o} value={o}>
                          {o}
                        </option>
                      ))}
                    </select>
                    <CaretDownIcon
                      aria-hidden="true"
                      className="pointer-events-none absolute right-[10px] top-1/2 h-[11px] w-[11px] -translate-y-1/2 fill-current text-[#1f2124]"
                    />
                  </div>
                </Field>
                <Field label="Detail of your enquiry" htmlFor="cf-message">
                  <textarea
                    id="cf-message"
                    name="message"
                    rows={6}
                    placeholder={CONTACT.enquiryPlaceholder}
                    className={cn(
                      fieldBase,
                      "h-[138px] rounded-[3px] px-[14px] py-[5px] text-[15px] leading-[21px] placeholder:text-[#808285]",
                    )}
                  />
                </Field>
                {/* reCAPTCHA badge on the live site omitted */}
                <div className={cn(groupCls, "mt-[40px] w-full items-end")}>
                  <button
                    type="submit"
                    className="flex min-h-[40px] w-full items-center justify-center gap-[5px] rounded-[5px] bg-gold px-[30px] text-[15px] font-medium leading-[16px] text-white shadow-[0_1px_2px_0_rgba(0,0,0,0.05)] transition-colors duration-300 hover:bg-black"
                  >
                    Send
                  </button>
                </div>
              </div>
              {submitted && (
                <p role="status" className="mt-[20px] text-[14px] font-normal leading-[20px] text-[#46b450]">
                  Your submission was successful.
                </p>
              )}
            </form>
          </div>

          {/* Info column */}
          <div className="relative ml-[50px] flex min-w-0 flex-1 flex-col content-start max-[767px]:ml-0 max-[767px]:mt-[40px] max-[767px]:w-full max-[767px]:px-[30px]">
            <h3 className="mb-[20px] text-[30px] font-semibold leading-[39px] text-ink">{CONTACT.infoHeading}</h3>
            <ul className="mb-[20px]">
              {infoItems.map(({ Icon, text, href, external }, i) => (
                <li key={text} className={cn("flex items-center", i > 0 && "mt-[4px]", i < infoItems.length - 1 && "pb-[4px]")}>
                  <a
                    href={href}
                    {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                    className="flex w-full items-center text-[20px] font-light leading-[33px] text-black"
                  >
                    <Icon aria-hidden="true" className="mr-[4.75px] h-[19px] w-[19px] shrink-0 fill-black" />
                    <span className="pl-[5px] text-black">{text}</span>
                  </a>
                </li>
              ))}
            </ul>
            <div className="flex gap-[5px]">
              {SOCIAL_LINKS.map(({ label, href }) => {
                const Icon = SOCIAL_ICON[label];
                return (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="inline-flex h-[50px] w-[50px] items-center justify-center rounded-[10%] text-black transition-colors duration-300 hover:text-gold"
                  >
                    <Icon aria-hidden="true" className="h-[25px] w-[25px] fill-current" />
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
