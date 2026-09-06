import type { MetadataRoute } from "next";
import { site } from "@/lib/site";

/**
 * Preview deployments serve real copy on a public *.vercel.app URL, so without
 * this they compete with the live site in search results.
 *
 * The test is deliberately the wrong way round: it blocks only when Vercel
 * says this is explicitly not production. Anywhere VERCEL_ENV is unset, such
 * as another host, the site stays indexable rather than quietly disappearing.
 */
const isPublicDeployment = !["preview", "development"].includes(
  process.env.VERCEL_ENV ?? "",
);

export default function robots(): MetadataRoute.Robots {
  if (!isPublicDeployment) {
    return { rules: { userAgent: "*", disallow: "/" } };
  }

  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: `${site.url}/sitemap.xml`,
  };
}
