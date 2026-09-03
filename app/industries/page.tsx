import type { Metadata } from "next";
import { PageHero } from "@/components/page-hero";
import { ButtonLink, Headline, Section } from "@/components/ui";
import { industries } from "@/lib/site";

export const metadata: Metadata = {
  alternates: { canonical: "/industries" },
  title: { absolute: "Industries We Serve | ILIAC" },
  description:
    "ILIAC and Nuci support businesses across financial services, healthcare, retail, professional services and technology, wherever technical friction slows work.",
};

export default function IndustriesPage() {
  return (
    <>
      <PageHero
        eyebrow="Industries"
        headline="Industries We Power Forward"
        accentWords={2}
        subheadline="From growing businesses to established enterprises, ILIAC supports organisations that depend on technology to operate effectively."
      />

      <Section>
        <ul className="stagger grid gap-px sm:grid-cols-2 lg:grid-cols-3">
          {industries.map((industry) => (
            <li
              key={industry.name}
              className="border-t border-iliac-black/15 py-8 pr-8"
            >
              <h2 className="font-jakarta text-h2 font-semibold text-near-black">
                {industry.name}
              </h2>
              <p className="mt-4 max-w-[38ch] text-body text-near-black/75">
                {industry.body}
              </p>
            </li>
          ))}
        </ul>
      </Section>

      <Section tone="dark">
        <div className="flex flex-col gap-10 lg:flex-row lg:items-end lg:justify-between">
          <Headline
            as="h2"
            accentWords={2}
            className="max-w-[18ch] text-h1 font-bold text-white"
          >
            Tell us where technology slows your business down.
          </Headline>
          <ButtonLink href="/contact" className="shrink-0">
            Talk to us about your industry
          </ButtonLink>
        </div>
      </Section>
    </>
  );
}
