import type { Metadata } from "next";
import { PageHero } from "@/components/page-hero";
import {
  Body,
  ButtonLink,
  Eyebrow,
  Headline,
  Section,
} from "@/components/ui";
import { partnerships } from "@/lib/site";

export const metadata: Metadata = {
  alternates: { canonical: "/partners" },
  title: { absolute: "Partner With ILIAC" },
  description:
    "ILIAC is building an ecosystem around intelligent enterprise technology. Explore technology, enterprise, implementation, and strategic partnerships.",
};

export default function PartnersPage() {
  return (
    <>
      <PageHero
        eyebrow="Partners"
        headline="We're not looking for vendors. We're building an ecosystem."
        accentWords={2}
        subheadline="ILIAC partners with organisations that share a belief: technology should remove friction from business, not add to it."
      />

      <Section>
        <div className="grid gap-12 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1fr)] lg:gap-24">
          <div>
            <Eyebrow>Why partner with ILIAC</Eyebrow>
            <Headline
              as="h2"
              accentWords={3}
              className="mt-7 max-w-[16ch] text-h1 font-bold"
            >
              We&rsquo;re early, and that&rsquo;s exactly why it matters now.
            </Headline>
          </div>
          <Body>
            The organisations building alongside us today are shaping what ILIAC
            becomes, not just using what it already is.
          </Body>
        </div>
      </Section>

      <Section tone="light">
        <Eyebrow>Partnership categories</Eyebrow>
        <Headline
          as="h2"
          accentWords={2}
          className="mt-7 max-w-[18ch] text-h1 font-bold"
        >
          Five ways to build alongside us.
        </Headline>

        <ul className="stagger mt-16">
          {partnerships.map((partnership, index) => (
            <li
              key={partnership.name}
              className="grid gap-4 border-t border-iliac-black/15 py-8 sm:grid-cols-[4rem_16rem_minmax(0,1fr)] sm:gap-8"
            >
              <span className="eyebrow pt-1.5 text-iliac-black">
                {String(index + 1).padStart(2, "0")}
              </span>
              <h3 className="font-jakarta text-h2 font-semibold text-near-black">
                {partnership.name}
              </h3>
              <p className="max-w-[52ch] text-body text-near-black/75">
                {partnership.body}
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
            Building something ILIAC could be part of?
          </Headline>
          <ButtonLink href="/contact" className="shrink-0">
            Start a conversation
          </ButtonLink>
        </div>
      </Section>
    </>
  );
}
