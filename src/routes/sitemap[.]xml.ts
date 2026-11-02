import { createFileRoute } from "@tanstack/react-router";
import { SITE_ORIGIN } from "@/lib/site";
import { SEO_CACHE_HEADERS, buildSitemapIndexXml } from "@/lib/sitemap-index.server";

/** Sitemap index pointing at the static, profile, workspace and calendar sub-sitemaps. */
export const Route = createFileRoute("/sitemap.xml")({
  server: {
    handlers: {
      GET: () =>
        new Response(buildSitemapIndexXml(SITE_ORIGIN), {
          headers: { "Content-Type": "application/xml; charset=utf-8", ...SEO_CACHE_HEADERS },
        }),
    },
  },
});
