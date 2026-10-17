import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ADDRESS, EMAIL, LOGO, PHONE_LANDLINE, PHONE_LANDLINE_HREF } from "@/data/site";
import { ArrowLeftIcon, ShieldCheckIcon } from "@/components/icons";

export const metadata: Metadata = {
  title: "Terms of Service",
  description:
    "Terms of Service and Room Rental Licensing conditions for London Therapy Rooms to Rent at 2 Wimpole Street, Marylebone.",
  alternates: {
    canonical: "https://londontherapyroomstorent.com/terms",
  },
};

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-[#faf8f5] text-[#282828] selection:bg-[#a48b65] selection:text-white">
      {/* Subpage Header */}
      <header className="sticky top-0 z-40 border-b border-black/5 bg-white/90 backdrop-blur-md">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
          <Link href="/" className="group flex items-center transition-opacity hover:opacity-85">
            <div className="relative h-[48px] w-[160px] sm:h-[55px] sm:w-[200px]">
              <Image
                src={LOGO.src}
                alt={LOGO.alt || "London Therapy Rooms to Rent"}
                fill
                priority
                sizes="200px"
                className="object-contain object-left"
              />
            </div>
          </Link>

          <Link
            href="/"
            className="inline-flex items-center gap-2 rounded-full border border-[#a48b65]/30 bg-white px-4 py-2 text-xs font-medium tracking-wide text-[#282828] transition-all hover:border-[#a48b65] hover:bg-[#a48b65] hover:text-white"
          >
            <ArrowLeftIcon className="h-3.5 w-3.5" />
            <span>Back to Home</span>
          </Link>
        </div>
      </header>

      {/* Main Content */}
      <main className="mx-auto max-w-4xl px-6 py-12 sm:py-16">
        {/* Title Header */}
        <div className="mb-12 border-b border-black/10 pb-8 text-center sm:text-left">
          <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-[#a48b65]/30 bg-white px-3.5 py-1 text-xs font-semibold tracking-widest text-[#a48b65] uppercase">
            <ShieldCheckIcon className="h-3.5 w-3.5" />
            <span>Clinic Standards & Licensing</span>
          </div>
          <h1 className="font-serif text-3xl font-normal tracking-tight text-[#141414] sm:text-4xl lg:text-5xl">
            Terms of Service
          </h1>
          <p className="mt-3 text-sm text-[#777777]">
            Last updated: October 2026 · Health & Skin Clinic / London Therapy Rooms to Rent
          </p>
        </div>

        {/* Content Body */}
        <div className="space-y-8 text-base font-light leading-relaxed text-[#444444]">
          <section className="rounded-2xl border border-black/5 bg-white p-6 sm:p-8 shadow-sm">
            <h2 className="mb-3 font-serif text-xl font-normal text-[#141414]">1. Agreement & Premises</h2>
            <p>
              These Terms of Service govern your use of the website and the terms under which London Therapy Rooms to Rent
              (&ldquo;the Clinic&rdquo;) provides consulting and treatment rooms to licensed therapists, medical consultants, and wellness
              practitioners at 2 Wimpole Street, Marylebone, London W1G 0EB.
            </p>
          </section>

          <section className="rounded-2xl border border-black/5 bg-white p-6 sm:p-8 shadow-sm">
            <h2 className="mb-3 font-serif text-xl font-normal text-[#141414]">2. Practitioner Qualifications & Indemnity</h2>
            <p className="mb-3">
              To hire and practice from our therapy rooms, all practitioners must provide:
            </p>
            <ul className="list-disc space-y-2 pl-6">
              <li>Proof of professional qualification and active registration with an approved UK regulatory body or professional association (e.g. GMC, NMC, GDC, HCPC, BACP, UKCP).</li>
              <li>A valid certificate of current Medical Malpractice &amp; Public Liability Insurance.</li>
              <li>Compliance with all statutory requirements, including infection control, safeguarding, and patient confidentiality.</li>
            </ul>
          </section>

          <section className="rounded-2xl border border-black/5 bg-white p-6 sm:p-8 shadow-sm">
            <h2 className="mb-3 font-serif text-xl font-normal text-[#141414]">3. Room Hire & Bookings</h2>
            <p className="mb-3">
              Room rental arrangements (whether hourly from £25/hour, block booking, or full-time license) are subject to written confirmation
              and signed license agreements.
            </p>
            <ul className="list-disc space-y-2 pl-6">
              <li><strong>Punctuality &amp; Handovers:</strong> Practitioners must respect their booked time slots and ensure sessions finish promptly to allow tidy handovers.</li>
              <li><strong>Cleanliness &amp; Waste:</strong> Rooms are equipped with clinical and general waste disposal. All single-use couch rolls, gloves, and clinical consumables must be disposed of properly. Sharps must be placed exclusively in designated sharps containers.</li>
              <li><strong>Amenities:</strong> Electric treatment couches, examination lamps, desk chairs, and client armchairs must remain in the designated room and handled with care.</li>
            </ul>
          </section>

          <section className="rounded-2xl border border-black/5 bg-white p-6 sm:p-8 shadow-sm">
            <h2 className="mb-3 font-serif text-xl font-normal text-[#141414]">4. Cancellations & Rescheduling</h2>
            <p>
              Cancellation and rescheduling policies are specified in your individual practitioner agreement. Standard ad-hoc bookings
              require at least 48 hours notice for cancellation or credit transfer. Full-time or recurring block commitments require
              agreed contractual notice periods.
            </p>
          </section>

          <section className="rounded-2xl border border-black/5 bg-white p-6 sm:p-8 shadow-sm">
            <h2 className="mb-3 font-serif text-xl font-normal text-[#141414]">5. Conduct & Client Experience</h2>
            <p>
              Our clinic upholds a calm, tranquil, and dignified ambience for practitioners and clients. Unreasonable noise, disturbance,
              or conduct detrimental to the therapeutic environment or clinic community will not be tolerated and may result in immediate
              termination of room hire privileges.
            </p>
          </section>

          <section className="rounded-2xl border border-black/5 bg-white p-6 sm:p-8 shadow-sm">
            <h2 className="mb-3 font-serif text-xl font-normal text-[#141414]">6. Limitation of Liability</h2>
            <p>
              Practitioners operate as independent contractors. The Clinic does not employ practitioners and is not liable for treatments,
              consultations, or advice rendered to patients. Practitioners are solely responsible for their clinical practice, client records,
              and professional conduct.
            </p>
          </section>

          <section className="rounded-2xl border border-black/5 bg-white p-6 sm:p-8 shadow-sm">
            <h2 className="mb-3 font-serif text-xl font-normal text-[#141414]">7. Governing Law</h2>
            <p>
              These Terms are governed by and construed in accordance with the laws of England and Wales. Any disputes arising out of
              or in connection with these terms shall be subject to the exclusive jurisdiction of the English courts.
            </p>
          </section>

          <section className="rounded-2xl border border-black/5 bg-white p-6 sm:p-8 shadow-sm">
            <h2 className="mb-3 font-serif text-xl font-normal text-[#141414]">8. Contact & Enquiries</h2>
            <p className="mb-3">For any inquiries regarding licensing terms or facility agreements, please reach out directly:</p>
            <div className="rounded-xl border border-black/10 bg-[#faf8f5] p-4 text-sm space-y-1.5">
              <p><strong>Clinic:</strong> London Therapy Rooms to Rent</p>
              <p><strong>Address:</strong> {ADDRESS}</p>
              <p><strong>Email:</strong> <a href={`mailto:${EMAIL}`} className="text-[#a48b65] underline">{EMAIL}</a></p>
              <p><strong>Phone:</strong> <a href={PHONE_LANDLINE_HREF} className="text-[#a48b65] underline">{PHONE_LANDLINE}</a></p>
            </div>
          </section>
        </div>
      </main>

      {/* Subpage Footer */}
      <footer className="mt-16 border-t border-black/10 bg-white py-8 text-center text-xs text-[#777777]">
        <div className="mx-auto max-w-5xl px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p>© {new Date().getFullYear()} London Therapy Rooms to Rent. All Rights Reserved.</p>
          <div className="flex gap-6">
            <Link href="/" className="hover:text-[#a48b65]">Home</Link>
            <Link href="/terms" className="text-[#a48b65] font-medium">Terms of Service</Link>
            <Link href="/privacy" className="hover:text-[#a48b65]">Privacy Policy</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
