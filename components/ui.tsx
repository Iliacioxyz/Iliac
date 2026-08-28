import Link from "next/link";
import type { ComponentProps, ReactNode } from "react";

/* The page grid. One container width everywhere so sections line up across
   pages regardless of what they hold. */
export function Container({
  className = "",
  children,
}: {
  className?: string;
  children: ReactNode;
}) {
  return (
    <div className={`mx-auto w-full max-w-[80rem] px-6 lg:px-10 ${className}`}>
      {children}
    </div>
  );
}

/**
 * A page section. `tone` picks one of the two grounds the brand allows:
 * ILIAC Black for dominant, dark layouts, and Off White (or Light Grey for a
 * subtle break) for light ones.
 */
export function Section({
  id,
  tone = "light",
  watermark = false,
  className = "",
  children,
}: {
  id?: string;
  tone?: "light" | "divided" | "dark";
  /** Opt in to the Nuci watermark. Only the Nuci page uses it. */
  watermark?: boolean;
  className?: string;
  children: ReactNode;
}) {
  const grounds = {
    light: "bg-off-white text-near-black",
    divided: "bg-off-white text-near-black border-t border-light-grey",
    dark: "on-dark bg-iliac-black text-white",
  };

  return (
    <section
      id={id}
      className={`relative overflow-hidden ${grounds[tone]} py-16 sm:py-24 lg:py-40 ${className}`}
    >
      {tone === "dark" && watermark && <NuciWatermark />}
      <Container className="relative">
        <div className="reveal">{children}</div>
      </Container>
    </section>
  );
}

/**
 * The Nuci mark, sunk into a dark ground at low opacity so it reads as texture
 * rather than a logo placement. It belongs to the product, so it appears only
 * on the Nuci page — never behind ILIAC's own company copy.
 *
 * Decorative only: hidden from assistive tech, and from small screens where it
 * would crowd the copy.
 */
export function NuciWatermark({ className = "" }: { className?: string }) {
  return (
    <span
      aria-hidden="true"
      className={`pointer-events-none absolute -right-20 top-1/2 hidden size-[30rem] -translate-y-1/2 bg-[url('/nuci-mark.png')] bg-contain bg-center bg-no-repeat opacity-[0.06] md:block lg:-right-24 lg:size-[38rem] ${className}`}
    />
  );
}

/**
 * Section eyebrow. Mid Grey on light grounds, ILIAC Cyan on dark ones.
 */
export function Eyebrow({
  tone = "light",
  className = "",
  children,
}: {
  tone?: "light" | "dark";
  className?: string;
  children: ReactNode;
}) {
  const tones = {
    light: "text-near-black/65",
    dark: "text-iliac-cyan",
  };

  return <p className={`eyebrow ${tones[tone]} ${className}`}>{children}</p>;
}

/**
 * The site's one repeated signature: a cyan hairline under the closing words
 * of a headline. Cyan is a border, underline or highlight colour — never a
 * large fill — so this is the whole of its job.
 */
export function Headline({
  as: Tag = "h2",
  accentWords = 1,
  className = "",
  children,
}: {
  as?: "h1" | "h2" | "h3" | "p";
  accentWords?: number;
  className?: string;
  children: string;
}) {
  const words = children.trim().split(" ");
  const split = Math.max(0, words.length - accentWords);
  const lead = words.slice(0, split).join(" ");
  const tail = words.slice(split).join(" ");

  return (
    <Tag className={`font-jakarta text-balance ${className}`}>
      {lead ? `${lead} ` : ""}
      <span className="cyan-rule">{tail}</span>
    </Tag>
  );
}

/** Body copy. DM Sans, 16/400, measure capped for readability. */
export function Body({
  tone = "light",
  className = "",
  children,
}: {
  tone?: "light" | "dark";
  className?: string;
  children: ReactNode;
}) {
  return (
    <p
      className={`max-w-[62ch] text-body ${
        tone === "dark" ? "text-white/70" : "text-near-black/80"
      } ${className}`}
    >
      {children}
    </p>
  );
}

type ButtonProps = ComponentProps<typeof Link> & {
  variant?: "primary" | "secondary" | "secondary-dark";
};

/** ILIAC Blue owns every primary action, on both grounds. */
export function ButtonLink({
  variant = "primary",
  className = "",
  children,
  ...props
}: ButtonProps) {
  const variants = {
    primary: "bg-iliac-blue text-white hover:bg-white hover:text-iliac-black",
    secondary:
      "border border-iliac-black/15 text-near-black hover:bg-iliac-black hover:text-off-white",
    "secondary-dark":
      "border border-white/25 text-white hover:bg-white hover:text-iliac-black",
  };

  return (
    <Link
      className={`inline-flex w-full items-center justify-center rounded-pill px-7 py-4 sm:w-auto font-jakarta text-[0.9375rem] font-semibold leading-none transition-colors ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </Link>
  );
}

/**
 * A soft surface. The references build content on filled, rounded panels
 * rather than hairline-boxed blocks, which is what keeps them calm at density.
 */
export function Card({
  tone = "light",
  className = "",
  children,
}: {
  tone?: "light" | "dark";
  className?: string;
  children: ReactNode;
}) {
  return (
    <div
      className={`rounded-card p-8 sm:p-10 ${
        tone === "dark" ? "bg-white/[0.05]" : "bg-white"
      } ${className}`}
    >
      {children}
    </div>
  );
}

/** Text-level action. Blue on light grounds, cyan on dark ones. */
export function ArrowLink({
  tone = "light",
  className = "",
  children,
  ...props
}: ComponentProps<typeof Link> & { tone?: "light" | "dark" }) {
  return (
    <Link
      className={`group inline-flex min-h-11 items-center gap-3 font-jakarta text-label font-semibold transition-colors ${
        tone === "dark"
          ? "text-iliac-cyan hover:text-white"
          : "text-iliac-blue hover:text-iliac-black"
      } ${className}`}
      {...props}
    >
      {children}
      <span
        aria-hidden="true"
        className="transition-transform group-hover:translate-x-1"
      >
        →
      </span>
    </Link>
  );
}

/** Hairline divider. Light Grey on light grounds, a white wash on dark. */
export function Rule({
  tone = "light",
  className = "",
}: {
  tone?: "light" | "dark";
  className?: string;
}) {
  return (
    <hr
      className={`border-0 border-t ${
        tone === "dark" ? "border-white/15" : "border-light-grey"
      } ${className}`}
    />
  );
}
