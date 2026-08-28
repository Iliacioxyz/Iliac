import type { ReactNode } from "react";
import { Container, Headline, NuciWatermark } from "@/components/ui";

/**
 * Every page opens on ILIAC Black — the guidelines put headers and dark
 * layouts on the primary brand colour, so the dark band bookends the page and
 * the light sections between it carry the content.
 *
 * Display sizing is held close to the reference set rather than pushed as far
 * as the viewport allows: OpenAI runs its hero at ~46px, Anthropic at ~58,
 * DeepSeek at ~50. A 76px hero shouts next to any of them.
 */
export function PageHero({
  eyebrow,
  headline,
  accentWords = 1,
  subheadline,
  size = "page",
  children,
}: {
  eyebrow?: string;
  headline: string;
  accentWords?: number;
  subheadline?: string;
  size?: "page" | "home";
  children?: ReactNode;
}) {
  const scale =
    size === "home"
      ? "text-[clamp(2.5rem,5.5vw,3.5rem)]"
      : "text-[clamp(2.125rem,4.5vw,3rem)]";

  return (
    <section className="on-dark relative overflow-hidden bg-iliac-black text-white">
      <NuciWatermark />
      <Container
        className={`relative ${size === "home" ? "py-20 sm:py-28 lg:py-44" : "py-16 sm:py-24 lg:py-32"}`}
      >
        {/* The hero plays once on load, in reading order. No observer: it is
            already on screen, so it should not wait to be scrolled to. */}
        {eyebrow && (
          <p className="hero-in hero-in-1 eyebrow text-iliac-cyan">{eyebrow}</p>
        )}
        <Headline
          as="h1"
          accentWords={accentWords}
          className={`hero-in hero-in-2 ${eyebrow ? "mt-8" : ""} max-w-[20ch] font-extrabold leading-[1.06] ${scale}`}
        >
          {headline}
        </Headline>
        {subheadline && (
          <p className="hero-in hero-in-3 mt-8 max-w-[52ch] text-h2 font-normal leading-relaxed text-white/70">
            {subheadline}
          </p>
        )}
        {children && <div className="hero-in hero-in-4">{children}</div>}
      </Container>
    </section>
  );
}
