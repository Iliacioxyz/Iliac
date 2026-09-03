import type { Metadata } from "next";
import { CapabilityCarousel } from "@/components/capability-carousel";
import { PageHero } from "@/components/page-hero";
import { Eyebrow, Headline, Section } from "@/components/ui";

export const metadata: Metadata = {
  alternates: { canonical: "/solutions" },
  title: {
    absolute: "Solutions — AI, Enterprise IT, Software & Infrastructure | ILIAC",
  },
  description:
    "ILIAC's core capabilities: AI and intelligent automation, enterprise IT support, business software, and cloud infrastructure, built as one technology platform.",
};

/**
 * The four capabilities sit in one horizontal panel set rather than four
 * stacked sections. Every word of the deck's copy is still here — this only
 * changes how much of it you have to scroll past to reach the next one.
 */
export default function SolutionsPage() {
  return (
    <>
      <PageHero
        eyebrow="Solutions"
        headline="Four capabilities. One way of building."
        accentWords={3}
        subheadline="Everything ILIAC builds starts from the same question: what's slowing this business down, and what would it take to remove it?"
      />

      <Section>
        <Eyebrow>Capabilities</Eyebrow>
        <Headline
          as="h2"
          accentWords={2}
          className="mt-7 max-w-[20ch] text-h1 font-bold"
        >
          One company. Four capabilities.
        </Headline>
        <div className="mt-14">
          <CapabilityCarousel />
        </div>
      </Section>
    </>
  );
}
