import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ADDRESS, EMAIL, LOGO, PHONE_LANDLINE, PHONE_LANDLINE_HREF } from "@/data/site";
import { ArrowLeftIcon, ShieldCheckIcon } from "@/components/icons";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Privacy Policy for London Therapy Rooms to Rent. Learn how we handle practitioner and client data in accordance with UK GDPR.",
  alternates: {
    canonical: "https://londontherapyroomstorent.com/privacy",
  },
};

export default function PrivacyPage() {
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
            <span>UK GDPR & Data Protection</span>
          </div>
          <h1 className="font-serif text-3xl font-normal tracking-tight text-[#141414] sm:text-4xl lg:text-5xl">
            Privacy Policy
          </h1>
          <p className="mt-3 text-sm text-[#777777]">
            Last updated: October 2026 · Health & Skin Clinic / London Therapy Rooms to Rent
          </p>
        </div>

        {/* Content Body */}
        <div className="space-y-8 text-base font-light leading-relaxed text-[#444444]">
          <section className="rounded-2xl border border-black/5 bg-white p-6 sm:p-8 shadow-sm">
            <h2 className="mb-3 font-serif text-xl font-normal text-[#141414]">1. Introduction</h2>
            <p>
              London Therapy Rooms to Rent (&ldquo;we&rdquo;, &ldquo;our&rdquo;, or &ldquo;us&rdquo;), operating at 2 Wimpole Street,
              Marylebone, London W1G 0EB, respects your privacy and is committed to protecting personal data. This privacy policy informs
              you how we collect, store, and process personal data when you visit our website, submit a room hire enquiry, or enter into
              a licensing agreement with our clinic.
            </p>
          </section>

          <section className="rounded-2xl border border-black/5 bg-white p-6 sm:p-8 shadow-sm">
            <h2 className="mb-3 font-serif text-xl font-normal text-[#141414]">2. Information We Collect</h2>
            <p className="mb-3">We may collect and process the following categories of information:</p>
            <ul className="list-disc space-y-2 pl-6">
              <li><strong>Contact Information:</strong> First and last name, email address, telephone number.</li>
              <li><strong>Professional Details:</strong> Professional discipline, therapy specialism, professional registration/regulatory bodies (e.g. GMC, NMC, BACP, UKCP, HCPC).</li>
              <li><strong>Enquiry Data:</strong> Preferred room choice, schedule requirements, booking notes submitted through our contact form.</li>
              <li><strong>Technical Data:</strong> IP address, browser type, and interaction metrics to protect our website against spam and bot abuse (such as Google reCAPTCHA).</li>
            </ul>
          </section>

          <section className="rounded-2xl border border-black/5 bg-white p-6 sm:p-8 shadow-sm">
            <h2 className="mb-3 font-serif text-xl font-normal text-[#141414]">3. How We Use Your Information</h2>
            <p className="mb-3">We use your personal data strictly for legitimate operational purposes:</p>
            <ul className="list-disc space-y-2 pl-6">
              <li>To respond to clinic tour requests, room availability inquiries, and rental rates questions.</li>
              <li>To manage practitioner agreements, room bookings, and facility access at 2 Wimpole Street.</li>
              <li>To verify practitioner qualifications and ensure clinic compliance and safety standards.</li>
              <li>To communicate important facility updates, maintenance notices, and emergency information.</li>
            </ul>
          </section>

          <section className="rounded-2xl border border-black/5 bg-white p-6 sm:p-8 shadow-sm">
            <h2 className="mb-3 font-serif text-xl font-normal text-[#141414]">4. Data Sharing & Third Parties</h2>
            <p>
              We do <strong>not</strong> sell, trade, or rent your personal data to any third parties. Data submitted through our enquiry
              form is transmitted securely to our administrative team via encrypted email services (including Resend) solely for the
              purpose of processing your request.
            </p>
          </section>

          <section className="rounded-2xl border border-black/5 bg-white p-6 sm:p-8 shadow-sm">
            <h2 className="mb-3 font-serif text-xl font-normal text-[#141414]">5. Data Retention</h2>
            <p>
              We retain personal data only for as long as necessary to fulfil the purposes for which it was collected, including legal,
              accounting, and operational requirements. If you do not proceed with a booking, enquiry correspondence is securely archived
              or deleted within 12 months.
            </p>
          </section>

          <section className="rounded-2xl border border-black/5 bg-white p-6 sm:p-8 shadow-sm">
            <h2 className="mb-3 font-serif text-xl font-normal text-[#141414]">6. Your Legal Rights Under UK GDPR</h2>
            <p className="mb-3">Under UK data protection laws, you possess legal rights regarding your personal information, including:</p>
            <ul className="list-disc space-y-2 pl-6">
              <li>The right to request access to your personal data.</li>
              <li>The right to request rectification of inaccurate information.</li>
              <li>The right to request erasure of your data (&ldquo;right to be forgotten&rdquo;).</li>
              <li>The right to object to or restrict processing of your personal data.</li>
            </ul>
          </section>

          <section className="rounded-2xl border border-black/5 bg-white p-6 sm:p-8 shadow-sm">
            <h2 className="mb-3 font-serif text-xl font-normal text-[#141414]">7. Contact Our Data Controller</h2>
            <p className="mb-3">If you have any questions regarding this Privacy Policy or wish to exercise your rights, please contact us:</p>
            <div className="rounded-xl border border-black/10 bg-[#faf8f5] p-4 text-sm space-y-1.5">
              <p><strong>Clinic:</strong> London Therapy Rooms to Rent / Health &amp; Skin Clinic</p>
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
            <Link href="/terms" className="hover:text-[#a48b65]">Terms of Service</Link>
            <Link href="/privacy" className="text-[#a48b65] font-medium">Privacy Policy</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
