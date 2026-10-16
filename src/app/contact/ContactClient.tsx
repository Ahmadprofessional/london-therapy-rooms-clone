"use client";

import { useSearchParams } from "next/navigation";
import { ContactSection } from "@/components/ContactSection";

export function ContactClient() {
  const searchParams = useSearchParams();
  const roomParam = searchParams.get("room") || undefined;

  return (
    <ContactSection initialRoom={roomParam} isStandalonePage={true} />
  );
}

export default ContactClient;
