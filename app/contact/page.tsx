import type { Metadata } from "next";
import { ContactForm } from "@/components/contact-form";
import { PageHero } from "@/components/page-hero";
import { Eyebrow, Headline, Section } from "@/components/ui";
import { contactPaths, site } from "@/lib/site";

export const metadata: Metadata = {
  title: { absolute: "Contact ILIAC" },
  description:
    "Get in touch with ILIAC for general enquiries, business enquiries, Nuci demo requests, partnerships, or investment.",
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        headline="Let's talk."
        subheadline="Whatever brought you here, there's a fast way to get to the right conversation."
      />

      <Section id="demo" className="scroll-mt-20">
        <div className="grid gap-16 lg:grid-cols-[minmax(0,1fr)_20rem] lg:gap-24">
          <div>
            <Eyebrow>Send us a note</Eyebrow>
            <Headline
              as="h2"
              accentWords={2}
              className="mt-7 max-w-[16ch] text-h1 font-bold"
            >
              Start the right conversation.
            </Headline>
            <div className="mt-10">
              <ContactForm />
            </div>
          </div>

          <div>
            <h2 className="eyebrow text-near-black/65">Direct</h2>
            <a
              href={`mailto:${site.email}`}
              className="mt-5 inline-block font-jakarta text-h2 font-semibold text-iliac-blue hover:text-iliac-black"
            >
              {site.email}
            </a>
            <p className="mt-6 text-body text-near-black/70">
              {site.location}
            </p>
          </div>
        </div>
      </Section>

      <Section tone="light">
        <Eyebrow>Contact paths</Eyebrow>
        <Headline
          as="h2"
          accentWords={3}
          className="mt-7 max-w-[18ch] text-h1 font-bold"
        >
          Five reasons people get in touch.
        </Headline>

        <ul className="stagger mt-16">
          {contactPaths.map((path, index) => (
            <li
              key={path.name}
              className="grid gap-4 border-t border-iliac-black/15 py-8 sm:grid-cols-[4rem_16rem_minmax(0,1fr)] sm:gap-8"
            >
              <span className="eyebrow pt-1.5 text-iliac-black">
                {String(index + 1).padStart(2, "0")}
              </span>
              <h3 className="font-jakarta text-h2 font-semibold text-near-black">
                {path.name}
              </h3>
              <p className="max-w-[52ch] text-body text-near-black/75">
                {path.body}
              </p>
            </li>
          ))}
        </ul>
      </Section>
    </>
  );
}
