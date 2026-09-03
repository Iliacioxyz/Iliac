import type { Metadata } from "next";
import { DM_Sans, Plus_Jakarta_Sans } from "next/font/google";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { leadership, site } from "@/lib/site";
import "./globals.css";

const plusJakarta = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta",
  subsets: ["latin"],
  display: "swap",
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "ILIAC | Intelligent Technology for the Enterprise.",
    template: `%s | ${site.name}`,
  },
  description: site.description,
  openGraph: {
    type: "website",
    siteName: site.name,
    title: "ILIAC | Intelligent Technology for the Enterprise.",
    description: site.description,
    url: site.url,
    locale: "en_NG",
  },
  twitter: {
    card: "summary_large_image",
    title: "ILIAC | Intelligent Technology for the Enterprise.",
    description: site.description,
  },
};

/**
 * Organization schema. Search engines have no other way to connect the name,
 * the mark, the Lagos base, the founders and the product into one entity, and
 * for a company nobody is searching for by name yet that connection is most of
 * the value. Every claim here is already stated somewhere on the site.
 *
 * Deliberately no sameAs: that field takes verified social profile URLs and we
 * do not have them. An invented one is worse than an absent one.
 */
const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: site.name,
  url: site.url,
  logo: `${site.url}/iliac-mark.svg`,
  description: site.description,
  email: site.email,
  slogan: site.tagline,
  address: {
    "@type": "PostalAddress",
    addressLocality: "Lagos",
    addressCountry: "NG",
  },
  founder: leadership.map((person) => ({
    "@type": "Person",
    name: person.name,
    jobTitle: person.role,
  })),
  brand: { "@type": "Brand", name: site.product },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${plusJakarta.variable} ${dmSans.variable} h-full`}
    >
      <body className="flex min-h-full flex-col">
        <a
          href="#main"
          className="eyebrow sr-only focus:not-sr-only focus:absolute focus:left-6 focus:top-6 focus:z-60 focus:bg-iliac-blue focus:px-5 focus:py-3 focus:text-white"
        >
          Skip to content
        </a>
        <SiteHeader />
        <main id="main" className="flex flex-1 flex-col">
          {children}
        </main>
        <SiteFooter />
        {/* A "</script>" appearing in the data would close this tag early, so
            every "<" goes out as its JSON escape. It parses back identically. */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema).replaceAll("<", "\\u003c"),
          }}
        />
      </body>
    </html>
  );
}
