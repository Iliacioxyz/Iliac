import { CapabilityDiagram } from "@/components/capability-diagram";
import { PageHero } from "@/components/page-hero";
import {
  ArrowLink,
  Body,
  ButtonLink,
  Eyebrow,
  Headline,
  Rule,
  Section,
} from "@/components/ui";
import { demoCta, site } from "@/lib/site";

/**
 * Structured exactly as the ILIAC Website Copy package specifies for the
 * homepage: hero, then Sections 1-6, then the final CTA. Headlines, body copy
 * and CTA labels are the deck's own words.
 *
 * One deliberate deviation, at the client's instruction: the deck's Section 3
 * pull-quote named a competitor. It is replaced with "Intelligence where it's
 * faster. People where it matters." — from the deck's own approved tagline
 * list, so the page stays inside sanctioned copy.
 */
export default function Home() {
  return (
    <>
      <PageHero
        size="home"
        headline={site.tagline}
        subheadline="Intelligent technology for the enterprise: built in Africa, for businesses everywhere."
      >
        <div className="mt-12 flex flex-wrap gap-4">
          <ButtonLink href={demoCta.href}>{demoCta.label}</ButtonLink>
          <ButtonLink href="/about" variant="secondary-dark">
            Explore ILIAC
          </ButtonLink>
        </div>
      </PageHero>

      {/* Section 1 — Introduction */}
      <Section>
        <div className="grid gap-12 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1fr)] lg:gap-24">
          <Headline as="h2" accentWords={3} className="text-h1 font-bold">
            A technology company, built for how work is changing.
          </Headline>
          <div className="space-y-6">
            <Body>
              ILIAC builds intelligent technology for businesses that can no
              longer afford friction between people and the systems they rely
              on. We started with IT support, because it&rsquo;s where that
              friction shows up first, and most often.
            </Body>
            <Body>
              Our flagship, Nuci, is how we&rsquo;re proving the idea: that
              artificial intelligence and human expertise, working together, can
              make enterprise technology feel less like a bottleneck and more
              like infrastructure that simply works.
            </Body>
          </div>
        </div>
      </Section>

      {/* Section 2 — What ILIAC Does */}
      <Section tone="divided">
        <Eyebrow>What ILIAC does</Eyebrow>
        <Headline
          as="h2"
          accentWords={2}
          className="mt-7 max-w-[20ch] text-h1 font-bold"
        >
          One company. Four capabilities. A single direction.
        </Headline>
        <Body className="mt-8">
          ILIAC works across artificial intelligence, enterprise technology
          operations, business software, and digital infrastructure, not as
          separate services, but as one continuous effort: helping businesses
          run on technology that keeps pace with them.
        </Body>

        <div className="mt-16">
          <CapabilityDiagram />
        </div>
      </Section>

      {/* Section 3 — Nuci Flagship */}
      <Section tone="dark">
        <Eyebrow tone="dark">Flagship product</Eyebrow>
        <Headline
          as="h2"
          accentWords={4}
          className="mt-7 max-w-[22ch] text-h1 font-bold text-white"
        >
          Meet Nuci. ILIAC&rsquo;s Autonomous AI IT Engineer.
        </Headline>

        <div className="mt-12 grid gap-14 lg:grid-cols-2 lg:gap-24">
          <Body tone="dark">
            Most IT support software waits for a human to solve the problem.
            Nuci starts working the moment the problem is described:
            understanding the issue, guiding the user through resolution, and
            stepping back to bring in a specialist only when the problem
            genuinely needs one.
          </Body>

          <div>
            <Rule tone="dark" />
            <p className="mt-8 font-jakarta text-h1 font-bold leading-tight text-white">
              Intelligence where it&rsquo;s faster.
              <br />
              <span className="cyan-rule">People where it matters.</span>
            </p>
            <ArrowLink href="/nuci" tone="dark" className="mt-10">
              See how Nuci works
            </ArrowLink>
          </div>
        </div>
      </Section>

      {/* Section 4 — Why ILIAC */}
      <Section>
        <Eyebrow>Why ILIAC</Eyebrow>
        <Headline as="h2" accentWords={2} className="mt-7 text-h1 font-bold">
          Built differently, on purpose.
        </Headline>
        <div className="mt-10 grid gap-8 lg:grid-cols-2 lg:gap-24">
          <Body>
            We&rsquo;re not trying to replace IT teams. We&rsquo;re trying to
            remove the part of their job that shouldn&rsquo;t require a person,
            so the people can focus on the problems that do.
          </Body>
          <Body>
            That&rsquo;s the thinking behind everything we build: artificial
            intelligence where it&rsquo;s faster and more consistent, human
            judgment where it still matters most, and a product mindset borrowed
            from the best technology companies in the world, applied to a
            problem most of them have ignored.
          </Body>
        </div>
      </Section>

      {/* Section 5 — Industries */}
      <Section tone="divided">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-end">
          <div>
            <Eyebrow>Industries</Eyebrow>
            <Headline
              as="h2"
              accentWords={2}
              className="mt-7 max-w-[18ch] text-h1 font-bold"
            >
              Built for businesses that run on technology.
            </Headline>
            <Body className="mt-8">
              From growing businesses to established enterprises, ILIAC supports
              organisations across financial services, healthcare, retail and
              e-commerce, professional services, and technology itself,
              anywhere technical friction slows down real work.
            </Body>
          </div>
          <ArrowLink href="/industries" className="shrink-0">
            See industries
          </ArrowLink>
        </div>
      </Section>

      {/* Section 6 — Vision. "Built in Africa. Going Global." is the spine of
          the whole site per the copy package, so it stays on the homepage. */}
      <Section tone="dark">
        <Eyebrow tone="dark">Vision</Eyebrow>
        <Headline
          as="h2"
          accentWords={2}
          className="mt-7 text-h1 font-bold text-white"
        >
          {site.spine}
        </Headline>
        <div className="mt-10 grid gap-8 lg:grid-cols-2 lg:gap-24">
          <Body tone="dark">
            ILIAC is early. We know it. We&rsquo;re building from Lagos with the
            same standard we&rsquo;d hold ourselves to anywhere in the world,
            because the businesses we serve don&rsquo;t grade on a curve, and
            neither do we.
          </Body>
          <Body tone="dark">
            The ambition isn&rsquo;t to be Africa&rsquo;s technology company.
            It&rsquo;s to be a technology company, from Africa, that the rest of
            the world takes seriously.
          </Body>
        </div>
      </Section>

      {/* Final CTA */}
      <Section>
        <div className="flex flex-col gap-10 lg:flex-row lg:items-end lg:justify-between">
          <Headline
            as="h2"
            accentWords={3}
            className="max-w-[20ch] text-h1 font-bold"
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
