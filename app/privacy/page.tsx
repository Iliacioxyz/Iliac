import type { Metadata } from "next";
import { LegalDocumentView } from "@/components/legal-document";
import { PageHero } from "@/components/page-hero";
import { privacyPolicy } from "@/lib/legal/privacy";

export const metadata: Metadata = {
  alternates: { canonical: "/privacy" },
  title: { absolute: "Privacy Policy | ILIAC" },
  description:
    "How ILIAC collects, uses and protects personal data in connection with Nuci, its AI-powered IT support platform.",
};

export default function PrivacyPage() {
  return (
    <>
      <PageHero
        eyebrow="Legal"
        headline="Privacy Policy"
        subheadline="How personal data is handled in connection with Nuci, and the rights you have over it."
      />
      <LegalDocumentView doc={privacyPolicy} />
    </>
  );
}
