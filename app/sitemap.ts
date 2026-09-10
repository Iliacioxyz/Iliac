import type { MetadataRoute } from "next";
import { site } from "@/lib/site";

const routes = [
  "",
  "/nuci",
  "/solutions",
  "/about",
  "/industries",
  "/partners",
  "/investors",
  "/contact",
  "/privacy",
  "/terms",
];

/**
 * No lastModified. It used to be `new Date()`, which stamps every page as
 * changed at every build, so a deploy that touched one file told crawlers all
 * eight pages were new. A timestamp that is always now is a false signal, and
 * once a crawler learns to distrust it the field is worth less than leaving it
 * out. Omitting it lets Google fall back to what it observes.
 *
 * A real one would need a per-route content date. Worth adding when pages
 * start changing independently; today they move together.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((path) => ({
    url: `${site.url}${path}`,
    changeFrequency: "monthly",
    priority: path === "" ? 1 : 0.7,
  }));
}
