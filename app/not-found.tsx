import { ButtonLink, Container, Headline } from "@/components/ui";

export default function NotFound() {
  return (
    <section className="on-dark flex flex-1 items-center bg-iliac-black text-white">
      <Container className="py-32">
        <p className="eyebrow text-iliac-cyan">404</p>
        <Headline
          as="h1"
          accentWords={2}
          className="mt-7 max-w-[16ch] text-[clamp(2.25rem,5vw,3.5rem)] font-extrabold leading-[1.04]"
        >
          This page doesn&rsquo;t exist.
        </Headline>
        <p className="mt-8 max-w-[48ch] text-h3 font-normal text-white/70">
          The address you asked for isn&rsquo;t part of the site. Head back to
          the start, or tell us what you were looking for.
        </p>
        <div className="mt-12 flex flex-wrap gap-4">
          <ButtonLink href="/">Back to home</ButtonLink>
          <ButtonLink href="/contact" variant="secondary-dark">
            Talk to us
          </ButtonLink>
        </div>
      </Container>
    </section>
  );
}
