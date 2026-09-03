import type { Metadata } from "next";
import Image from "next/image";
import { PageHero } from "@/components/page-hero";
import {
  Body,
  ButtonLink,
  Eyebrow,
  Headline,
  Section,
} from "@/components/ui";
import { demoCta, leadership, site } from "@/lib/site";

export const metadata: Metadata = {
  alternates: { canonical: "/about" },
  title: { absolute: "About ILIAC — Intelligent Technology, Built in Africa" },
  description:
    "ILIAC is a Lagos-based technology company building intelligent enterprise solutions, led by Nuci, its AI-powered IT support platform.",
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About"
        headline="About ILIAC"
        subheadline="A technology company from Lagos, building for a global standard."
      />

      {/* Who We Are */}
      <Section>
        <div className="grid gap-12 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1fr)] lg:gap-24">
          <div>
            <Eyebrow>Who we are</Eyebrow>
            <Headline
              as="h2"
              accentWords={4}
              className="mt-7 max-w-[16ch] text-h1 font-bold"
            >
              We&rsquo;re a young company. We&rsquo;re also not building like one.
            </Headline>
          </div>
          <Body>
            ILIAC is a Nigerian technology company building intelligent solutions
            for the future of enterprise technology support. Our focus today is
            Nuci, an AI-powered IT support system designed to help businesses
            diagnose and resolve technical issues faster, while knowing when to
            bring in a human.
          </Body>
        </div>
      </Section>

      {/* Why ILIAC Exists */}
      <Section tone="light">
        <Eyebrow>Why ILIAC exists</Eyebrow>
        <Headline
          as="h2"
          accentWords={3}
          className="mt-7 max-w-[20ch] text-h1 font-bold"
        >
          Hours, and sometimes days, that businesses don&rsquo;t get back.
        </Headline>
        <div className="mt-10 grid gap-8 lg:grid-cols-2 lg:gap-24">
          <Body>
            Technology is more central to how businesses operate than it&rsquo;s
            ever been, and more fragile. A slow support ticket, a recurring bug,
            a system nobody quite owns: these aren&rsquo;t small problems.
            They&rsquo;re hours, and sometimes days, that businesses don&rsquo;t
            get back.
          </Body>
          <Body>
            ILIAC exists to close that gap, starting with IT support, where the
            cost of friction is most immediate and most avoidable.
          </Body>
        </div>
      </Section>

      {/* Mission & Vision */}
      <Section tone="dark">
        <div className="grid gap-16 lg:grid-cols-2 lg:gap-24">
          <div>
            <Eyebrow tone="dark">Mission</Eyebrow>
            <Headline
              as="h2"
              accentWords={5}
              className="mt-7 max-w-[18ch] text-h1 font-bold text-white"
            >
              Make IT support work better for everyone.
            </Headline>
            <Body tone="dark" className="mt-8">
              To redefine enterprise IT support by making technical assistance
              faster, smarter, and more accessible through artificial
              intelligence and human expertise. We&rsquo;re building Nuci to help
              businesses resolve technical issues efficiently, reduce downtime,
              and make sure no support request reaches a dead end.
            </Body>
          </div>

          <div>
            <Eyebrow tone="dark">Vision</Eyebrow>
            <Headline
              as="h2"
              accentWords={3}
              className="mt-7 max-w-[18ch] text-h1 font-bold text-white"
            >
              Build from Africa. Lead globally.
            </Headline>
            <Body tone="dark" className="mt-8">
              To become a leading force in global technology, building
              intelligent solutions that set new standards for enterprise
              technology, and earning the trust of enterprises everywhere for
              reliable, high-quality work.
            </Body>
            <Body tone="dark" className="mt-6">
              Build from Africa. Lead globally. Serve enterprises exceptionally
              well.
            </Body>
          </div>
        </div>
      </Section>

      {/* Philosophy */}
      <Section>
        <Eyebrow>Our philosophy</Eyebrow>
        <Headline
          as="h2"
          accentWords={3}
          className="mt-7 max-w-[18ch] text-h1 font-bold"
        >
          We think in products, not projects.
        </Headline>
        <div className="mt-10 grid gap-8 lg:grid-cols-2 lg:gap-24">
          <Body>
            We&rsquo;d rather ship something narrow and genuinely useful than
            promise something broad and generic.
          </Body>
          <Body>
            Artificial intelligence, to us, isn&rsquo;t the pitch; it&rsquo;s
            the tool. The pitch is a business that spends less time fighting its
            own technology.
          </Body>
        </div>
      </Section>

      {/* Built in Africa. Going Global. */}
      <Section tone="light">
        <Headline
          as="h2"
          accentWords={2}
          className="max-w-[16ch] text-h1 font-bold"
        >
          {site.spine}
        </Headline>
        <Body className="mt-8">
          ILIAC is headquartered in Lagos, Nigeria, and built with a global
          standard from day one. Africa isn&rsquo;t a market we&rsquo;re starting
          in before &ldquo;graduating&rdquo; elsewhere. It&rsquo;s the
          foundation. The ambition was always bigger than the address.
        </Body>
      </Section>

      {/* Leadership. Centred rather than left-aligned like the rest: with only
          two people in the band, a left-aligned block left the right half of
          the section empty. */}
      <Section tone="dark">
        <div className="text-center">
          <Eyebrow tone="dark">Leadership</Eyebrow>
          <Headline
            as="h2"
            accentWords={2}
            className="mt-7 text-h1 font-bold text-white"
          >
            The people building it.
          </Headline>
        </div>

        {/*
          The photographs run as shot. Cutting the subjects out of their studio
          backdrops left edges that would not survive a second look, so the
          frames stay whole and the circular mask does the tidying.

          The alt text is empty on purpose: the name follows immediately in the
          heading, so describing the portrait would just repeat it.
        */}
        <ul className="stagger-fade mx-auto mt-16 grid max-w-xl gap-12 sm:grid-cols-2">
          {leadership.map((person) => (
            <li key={person.name} className="flex flex-col items-center text-center">
              <div className="relative size-32 overflow-hidden rounded-full ring-1 ring-white/15 sm:size-36">
                <Image
                  src={person.photo}
                  alt=""
                  fill
                  sizes="144px"
                  className={`object-cover ${person.focus}`}
                />
              </div>
              <h3 className="mt-6 font-jakarta text-h2 font-semibold text-white">
                {person.name}
              </h3>
              <p className="mt-2 max-w-[24ch] text-body text-white/60">
                {person.role}
              </p>
            </li>
          ))}
        </ul>

        {/* The copy package keeps the founder-name origin of "Nuci" for this
            section only, and off the homepage — but supplies no approved
            wording for it, so the line is left for ILIAC to write. */}
      </Section>

      <Section>
        <div className="flex flex-col gap-10 lg:flex-row lg:items-end lg:justify-between">
          <Headline
            as="h2"
            accentWords={3}
            className="max-w-[18ch] text-h1 font-bold"
          >
            See what IT support looks like when it actually works.
          </Headline>
          <div className="flex shrink-0 flex-wrap gap-4">
            <ButtonLink href={demoCta.href}>{demoCta.label}</ButtonLink>
            <ButtonLink href="/contact" variant="secondary">
              Talk to us
            </ButtonLink>
          </div>
        </div>
      </Section>
    </>
  );
}
