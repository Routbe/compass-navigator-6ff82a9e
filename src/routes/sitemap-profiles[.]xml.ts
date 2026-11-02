import { createFileRoute } from "@tanstack/react-router";
import { SITE_ORIGIN } from "@/lib/site";
import { sitemapResponse } from "@/lib/sitemap-index.server";

export const Route = createFileRoute("/sitemap-profiles.xml")({
  server: { handlers: { GET: () => sitemapResponse(SITE_ORIGIN, "profiles") } },
});
