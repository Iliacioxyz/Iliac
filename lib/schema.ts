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
export const organizationSchema = {
  "@context": "https://schema.org",
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
  founder: leadership.map((person) => ({
    "@type": "Person",
    name: person.name,
    jobTitle: person.role,
  })),
  // The forward half of the relationship: the company owns the product.
  owns: { "@id": NUCI_ID },
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
