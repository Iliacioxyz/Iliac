import type { Metadata } from "next";
import { MechanismStrip } from "@/components/mechanism-strip";
import { PageHero } from "@/components/page-hero";
import {
  Body,
  ButtonLink,
  Eyebrow,
  Headline,
  Rule,
  Section,
} from "@/components/ui";
import { demoCta, nuciBenefits } from "@/lib/site";

export const metadata: Metadata = {
  alternates: { canonical: "/nuci" },
  title: { absolute: "Nuci: The Autonomous AI IT Engineer | ILIAC" },
  description:
    "Nuci is ILIAC's AI-powered IT support platform. It diagnoses problems, guides employees to a fix, and escalates to a human specialist when it can't.",
};

export default function NuciPage() {
  return (
    <>
      <PageHero
        watermark
        eyebrow="Nuci"
        headline="Technology that resolves, not just responds."
        accentWords={3}
        subheadline="Nuci is ILIAC's AI-powered IT support platform, built to help employees and businesses resolve everyday technical issues, and to know exactly when a problem needs a human."
      >
        <div className="mt-12 flex flex-wrap gap-4">
          <ButtonLink href={demoCta.href}>Request a Demo</ButtonLink>
          <ButtonLink href="#how-it-works" variant="secondary-dark">
            How it works
          </ButtonLink>
        </div>
      </PageHero>

      {/* What Nuci Is / The Problem It Solves */}
      <Section>
        <div className="grid gap-16 lg:grid-cols-2 lg:gap-24">
          <div>
            <Eyebrow>What Nuci is</Eyebrow>
            <Headline
              as="h2"
              accentWords={2}
              className="mt-7 max-w-[16ch] text-h1 font-bold"
            >
              An autonomous AI IT engineer.
            </Headline>
            <Body className="mt-8">
              Not a chatbot trained to sound helpful: a system built to actually
              move a technical problem toward resolution, from first message to
              fix.
            </Body>
          </div>

          <div>
            <Eyebrow>The problem it solves</Eyebrow>
            <Headline
              as="h2"
              accentWords={3}
              className="mt-7 max-w-[16ch] text-h1 font-bold"
            >
              Simple problems wait behind complicated ones.
            </Headline>
            <Body className="mt-8">
              Most technical issues aren&rsquo;t complicated. They&rsquo;re just
              repetitive, and they land on the same overloaded IT inbox as
              everything else, which means simple problems wait behind
              complicated ones, and employees lose hours they&rsquo;ll never get
              back.
            </Body>
            <Body className="mt-6">
              Nuci exists to change where that time goes.
            </Body>
          </div>
        </div>
      </Section>

      {/* How It Works */}
      <Section id="how-it-works" tone="dark" watermark>
        <Eyebrow tone="dark">How it works</Eyebrow>
        <Headline
          as="h2"
          accentWords={2}
          className="mt-7 max-w-[18ch] text-h1 font-bold text-white"
        >
          Understand, guide, then resolve or escalate.
        </Headline>
        <div className="mt-16">
          <MechanismStrip />
        </div>
      </Section>

      {/* Business Benefits */}
      <Section tone="light">
        <div className="grid gap-14 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1fr)] lg:gap-24">
          <div>
            <Eyebrow>Business benefits</Eyebrow>
            <Headline
              as="h2"
              accentWords={2}
              className="mt-7 max-w-[14ch] text-h1 font-bold"
            >
              What changes once Nuci is answering first.
            </Headline>
          </div>

          <ul>
            {nuciBenefits.map((benefit, index) => (
              <li key={benefit}>
                {index > 0 && <Rule />}
                <div className="flex gap-6 py-6">
                  <span className="eyebrow shrink-0 pt-1 text-iliac-black">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <p className="text-h3 font-medium text-near-black">
                    {benefit}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </Section>

      {/* Why Nuci Is Different / Who Nuci Is For */}
      <Section>
        <div className="grid gap-16 lg:grid-cols-2 lg:gap-24">
          <div>
            <Eyebrow>Why Nuci is different</Eyebrow>
            <Headline
              as="h2"
              accentWords={3}
              className="mt-7 max-w-[16ch] text-h1 font-bold"
            >
              Built to close problems out.
            </Headline>
            <Body className="mt-8">
              Generic AI chatbots are built to answer questions well. Nuci is
              built to close problems out and, just as importantly, to
              recognise its own limits and hand off cleanly when a problem is
              genuinely beyond it. That handoff, done with context instead of a
              cold ticket, is the part most systems get wrong.
            </Body>
          </div>

          <div>
            <Eyebrow>Who Nuci is for</Eyebrow>
            <Headline
              as="h2"
              accentWords={3}
              className="mt-7 max-w-[16ch] text-h1 font-bold"
            >
              Businesses that depend on technology to operate.
            </Headline>
            <Body className="mt-8">
              Nuci is built for businesses that depend on technology to
              operate, from growing companies without a dedicated IT department
              to enterprises whose IT teams are drowning in repetitive requests.
            </Body>
          </div>
        </div>
      </Section>

      {/* CTA */}
      <Section tone="dark" watermark>
        <div className="flex flex-col gap-10 lg:flex-row lg:items-end lg:justify-between">
          <Headline
            as="h2"
            accentWords={2}
            className="max-w-[16ch] text-h1 font-bold text-white"
          >
            See Nuci resolve a real problem.
          </Headline>
          <ButtonLink href={demoCta.href} className="shrink-0">
            {demoCta.label}
          </ButtonLink>
        </div>
      </Section>
    </>
  );
}
