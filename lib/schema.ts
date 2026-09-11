import { leadership, site } from "@/lib/site";

/**
 * The company and the product as two linked entities.
 *
 * A search engine shows the parent company alongside a product (Anthropic
 * under Claude, say) because it holds them as separate, related nodes in its
 * knowledge graph. Structured data is how a site states that relationship
 * outright instead of hoping it gets inferred from prose.
 *
 * The mechanism is @id. Each entity gets a stable URI, and every reference
 * points at that URI rather than repeating the name, so ILIAC and Nuci stay
 * one node each however many pages mention them. Naming Nuci in two shapes,
 * a Brand here and a SoftwareApplication there, would split it into two
 * entities that each look half-real, which is what the old bare Brand node
 * was heading towards.
 *
 * Markup only makes the claim. Sitelinks and knowledge panels are earned
 * from authority and outside corroboration, and nothing written here forces
 * them.
 */

/** Stable entity URIs. Fragments, so they never collide with a real route. */
export const ORGANIZATION_ID = `${site.url}/#organization`;
export const WEBSITE_ID = `${site.url}/#website`;
export const NUCI_ID = `${site.url}/#nuci`;

/**
 * Shared by the Nuci page's meta description and its schema, so the two can
 * never drift apart.
 */
export const nuciDescription =
  "Nuci is ILIAC's AI-powered IT support platform. It diagnoses problems, guides employees to a fix, and escalates to a human specialist when it can't.";

/**
 * Every claim here is already stated somewhere on the site.
 *
 * Deliberately no sameAs: that field takes verified social profile URLs and
 * we do not have them. An invented one is worse than an absent one, and it is
 * also the single field that would most help tie these entities to the wider
 * web, so it is worth filling the moment the profiles exist.
 */
const organizationNode = {
  "@type": "Organization",
  "@id": ORGANIZATION_ID,
  name: site.name,
  url: site.url,
  // The rasterised mark, not the SVG: consumers differ on whether they take
  // vector logos, and /logo.png is generated from that same file anyway.
  logo: `${site.url}/logo.png`,
  description: site.description,
  email: site.email,
  slogan: site.tagline,
  address: {
    "@type": "PostalAddress",
    addressLocality: "Lagos",
    addressCountry: "NG",
  },
  // Founders as addressable people, not anonymous inline blobs. A company's
  // founders are a real search vector early on, and a knowledge panel wants
  // them as entities. worksFor points back, so the link reads both ways like
  // the company-to-product one.
  founder: leadership.map((person) => ({
    "@type": "Person",
    "@id": `${site.url}/#${person.slug}`,
    name: person.name,
    jobTitle: person.role,
    worksFor: { "@id": ORGANIZATION_ID },
  })),
  // The forward half of the relationship: the company owns the product.
  owns: { "@id": NUCI_ID },
  // Topics the company can be associated with. Drawn from the four
  // capabilities the site actually describes, not a keyword list.
  knowsAbout: [
    "IT support",
    "Artificial intelligence",
    "Enterprise technology",
    "Business software",
    "Cloud infrastructure",
  ],
};

/** Where the founders are presented. Their entity URL, since they have no pages of their own. */
export const LEADERSHIP_URL = `${site.url}/about#leadership`;

/**
 * The About page, typed as what it is.
 *
 * AboutPage with mainEntity pointing at the organisation tells a crawler that
 * this page is the authoritative source about ILIAC, rather than one more page
 * that mentions it. The founders are restated here in full: the site-wide
 * graph carries them with a name and title, and this adds the portrait and a
 * URL, under the same @id so the nodes merge rather than duplicate.
 *
 * Portrait URLs are the originals in public/, not next/image variants: the
 * optimiser's URLs are not stable identifiers, and a knowledge panel wants the
 * high-resolution source anyway.
 */
export const aboutPageSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "AboutPage",
      "@id": `${site.url}/about#page`,
      url: `${site.url}/about`,
      name: `About ${site.name}`,
      mainEntity: { "@id": ORGANIZATION_ID },
      isPartOf: { "@id": WEBSITE_ID },
    },
    ...leadership.map((person) => ({
      "@type": "Person",
      "@id": `${site.url}/#${person.slug}`,
      name: person.name,
      jobTitle: person.role,
      image: `${site.url}${person.photo}`,
      url: LEADERSHIP_URL,
      worksFor: { "@id": ORGANIZATION_ID },
    })),
  ],
};

/**
 * The site as its own entity, distinct from the company that publishes it.
 *
 * This is the node Google reads to decide the site name it prints above a
 * result, so without it results are liable to show the bare domain instead of
 * ILIAC. It also gives the domain something to be: the company is an
 * organisation, the site is a thing the organisation publishes.
 *
 * No alternateName. It takes names the site is genuinely also known by, and
 * there are none yet that are not guesses.
 */
const websiteNode = {
  "@type": "WebSite",
  "@id": WEBSITE_ID,
  name: site.name,
  url: site.url,
  inLanguage: "en",
  publisher: { "@id": ORGANIZATION_ID },
};

/**
 * Both site-wide nodes in one graph. A single script tag with @graph is
 * equivalent to two separate ones and keeps the related entities together.
 */
export const siteSchema = {
  "@context": "https://schema.org",
  "@graph": [organizationNode, websiteNode],
};

/**
 * The return half. Carried on the Nuci page, where the layout also emits the
 * organisation, so both nodes and the link between them sit on one page.
 *
 * No offers and no aggregateRating: there is no published price and there are
 * no collected reviews, and inventing either would be a fabricated rich
 * result. operatingSystem is omitted for the same reason.
 */
export const nuciSchema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "@id": NUCI_ID,
  name: site.product,
  url: `${site.url}/nuci`,
  applicationCategory: "BusinessApplication",
  description: nuciDescription,
  publisher: { "@id": ORGANIZATION_ID },
  brand: { "@id": ORGANIZATION_ID },
};
