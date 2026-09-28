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
import { EnvelopeIcon, FacebookIcon, InstagramIcon, MapMarkerIcon, MobileAltIcon, PhoneAltIcon } from "@/components/icons";
import { cn } from "@/lib/utils";

const SOCIAL_ICONS: Record<string, typeof FacebookIcon> = {
  Facebook: FacebookIcon,
  Instagram: InstagramIcon,
};

const CONTACT_ITEMS = [
  { Icon: MapMarkerIcon, label: ADDRESS, href: MAPS_HREF, external: true },
  { Icon: PhoneAltIcon, label: PHONE_LANDLINE, href: PHONE_LANDLINE_HREF },
  { Icon: MobileAltIcon, label: PHONE_MOBILE, href: PHONE_MOBILE_HREF },
  { Icon: EnvelopeIcon, label: EMAIL, href: `mailto:${EMAIL}` },
];

const headingCls = "m-0 ml-[15px] text-[18px] font-semibold leading-[23.4px] text-white";

export function SiteFooter() {
  return (
    <footer className="bg-ink text-[16px] font-extralight leading-[26.4px] text-ink">
      {/* Main footer (raw section 25): padding 70 / 0 / 20, 1140 container, cols 347/223/328/242 */}
      <div className="pb-[20px] pt-[70px]">
        <div className="mx-auto flex max-w-[1140px] flex-col px-[30px] md:flex-row md:px-0">
          {/* Col 1: logo, address, social */}
          <div className="flex w-full flex-col md:w-[30.44%]">
            <div className="mb-[20px]">
              <Link href="/" className="inline">
                <Image
                  src={LOGO.src}
                  width={LOGO.width}
                  height={LOGO.height}
                  alt={LOGO.alt}
                  className="inline h-auto w-[198px] max-w-[57%] md:max-w-none"
                />
              </Link>
            </div>
            <p className="mb-[20px] mt-0 text-[13px] leading-[21.45px] text-white">{ADDRESS}</p>
            <div className="mr-[10px] flex gap-x-[5px]">
              {SOCIAL_LINKS.map(({ label, href }) => {
                const Icon = SOCIAL_ICONS[label] ?? FacebookIcon;
                return (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex size-[36px] items-center justify-center rounded-[10%] text-[18px] leading-[18px] text-gold transition-colors hover:text-white"
                  >
                    <span className="sr-only">{label}</span>
                    <Icon className="size-[18px]" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Col 2: Quicklinks */}
          <div className="mt-[30px] flex w-full flex-col md:mt-0 md:w-[19.56%]">
            <h2 className={cn(headingCls, "mb-[20px]")}>Quicklinks</h2>
            <nav aria-label="Footer">
              <ul className="m-0 flex list-none flex-col p-0">
                {NAV_LINKS.map((link, i) => {
                  const external = link.href.startsWith("http");
                  return (
                    <li key={link.label}>
                      <a
                        href={link.href}
                        {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                        className={cn(
                          "flex items-center justify-start px-[15px] py-[8px] text-[13px] leading-[13px] transition-colors hover:text-gold",
                          i === 0 ? "text-gold" : "text-white",
                        )}
                      >
                        {link.label}
                      </a>
                    </li>
                  );
                })}
              </ul>
            </nav>
          </div>

          {/* Col 3: Contact Us */}
          <div className="mt-[30px] flex w-full flex-col md:mt-0 md:w-[28.77%]">
            <h2 className={cn(headingCls, "mb-[20px]")}>Contact Us</h2>
            <ul className="m-0 list-none p-0">
              {CONTACT_ITEMS.map(({ Icon, label, href, external }) => (
                <li key={label} className="flex items-center">
                  <a
                    href={href}
                    {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                    className="flex w-full items-center leading-[26px] text-white"
                  >
                    <Icon className="mr-[3.5px] size-[14px] shrink-0 text-white" />
                    <span className="pl-[5px] text-white">{label}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: empty (hidden on mobile) */}
          <div className="hidden md:block md:w-[21.23%]" />
        </div>
      </div>

      {/* Copyright bar (raw section 26): height 71 */}
      <div className="mx-auto max-w-[1140px] p-[10px]">
        <div className="flex py-[15px]">
          <span className="block w-full border-t border-solid border-white" />
        </div>
        <div className="mt-[-5px] h-[25px] md:w-1/2">
          <h2 className="m-0 text-center text-[14px] font-light leading-[18.2px] text-white md:text-left">{COPYRIGHT}</h2>
        </div>
      </div>
    </footer>
  );
}
