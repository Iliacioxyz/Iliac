import type { Metadata } from "next";
import { PageHero } from "@/components/page-hero";
import {
  Body,
  ButtonLink,
  Eyebrow,
  Headline,
  Section,
} from "@/components/ui";

export const metadata: Metadata = {
  alternates: { canonical: "/investors" },
  title: { absolute: "Investors | ILIAC" },
  description:
    "ILIAC is building intelligent enterprise technology from Africa, led by Nuci. Explore the opportunity.",
};

/**
 * ILIAC Amber was trialled here as the premium-tier accent, but the header and
 * footer carry cyan on every page, so amber made this composition a
 * four-colour one. The palette rule allows three, and the shared chrome is not
 * negotiable per page — so this page runs on the same Black, Blue and Cyan as
 * the rest of the site. Amber stays available for premium collateral that can
 * drop cyan from the composition entirely.
 */
export default function InvestorsPage() {
  return (
    <>
      <PageHero
        eyebrow="Investors"
        headline="An African technology company, built for a global opportunity."
        accentWords={2}
        subheadline="ILIAC is early. The market it's building for isn't."
      />

      <Section>
        <div className="grid gap-12 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1fr)] lg:gap-24">
          <div>
            <Eyebrow>The opportunity</Eyebrow>
            <Headline
              as="h2"
              accentWords={4}
              className="mt-7 max-w-[18ch] text-h1 font-bold"
            >
              One of the largest, least modernised categories in enterprise
              technology.
            </Headline>
          </div>
          <Body>
            Every business is becoming more dependent on technology, and every
            business is feeling the friction that comes with it. IT support is
            one of the largest, least modernised categories in enterprise
            technology, and one of the few where artificial intelligence can
            meaningfully change the economics, not just the interface.
          </Body>
        </div>
      </Section>

      <Section tone="light">
        <div className="grid gap-16 lg:grid-cols-2 lg:gap-24">
          <div>
            <Eyebrow>Our approach</Eyebrow>
            <Headline
              as="h2"
              accentWords={2}
              className="mt-7 max-w-[16ch] text-h1 font-bold"
            >
              We&rsquo;re product-led.
            </Headline>
            <Body className="mt-8">
              Nuci exists because we believe the way businesses experience IT
              support is genuinely due for change, not because &ldquo;AI&rdquo;
              was the trend to chase. Everything else ILIAC builds follows the
              same discipline: solve a real operational problem first, scale
              second.
            </Body>
          </div>

          <div>
            <Eyebrow>African origin, global opportunity</Eyebrow>
            <Headline
              as="h2"
              accentWords={3}
              className="mt-7 max-w-[16ch] text-h1 font-bold"
            >
              A starting point with a different vantage point.
            </Headline>
            <Body className="mt-8">
              Building from Lagos isn&rsquo;t a limitation on ILIAC&rsquo;s
              ambition; it&rsquo;s a starting point with a different vantage
              point on the same global problem. We&rsquo;re building to a global
              standard from day one, because the businesses we want to serve
              won&rsquo;t hold us to a lower one.
            </Body>
          </div>
        </div>
      </Section>

      <Section tone="dark">
        <Eyebrow tone="dark">Why ILIAC could matter</Eyebrow>
        <Headline
          as="h2"
          accentWords={4}
          className="mt-7 max-w-[20ch] text-h1 font-bold text-white"
        >
          Less like a help desk. More like an intelligent system.
        </Headline>
        <Body tone="dark" className="mt-8">
          The future of enterprise IT support looks less like a help desk and
          more like an intelligent system that resolves what it can and knows
          exactly when to bring in a person. ILIAC is building that system now,
          from Africa, for businesses everywhere.
        </Body>
        <ButtonLink href="/contact" className="mt-12">
          Explore an opportunity with ILIAC
        </ButtonLink>
      </Section>
    </>
  );
}
