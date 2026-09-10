import type { Metadata } from "next";
import { LegalDocumentView } from "@/components/legal-document";
import { PageHero } from "@/components/page-hero";
import { termsOfService } from "@/lib/legal/terms";

export const metadata: Metadata = {
  alternates: { canonical: "/terms" },
  title: { absolute: "Terms of Service | ILIAC" },
  description:
    "The terms on which ILIAC provides Nuci to business customers and their authorised end users.",
};

export default function TermsPage() {
  return (
    <>
      <PageHero
        eyebrow="Legal"
        headline="Terms of Service"
        subheadline="The terms on which ILIAC provides Nuci to business customers and their authorised end users."
      />
      <LegalDocumentView doc={termsOfService} />
    </>
  );
}
