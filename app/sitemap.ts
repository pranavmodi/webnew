import { MetadataRoute } from "next";

import { SITE_URL } from "@/lib/constants";

const routes = [
  "/",
  "/about",
  "/solutions/email-automation",
  "/solutions/support-agent",
  "/solutions/outbound-voice-ai",
  "/solutions/lien-reduction",
  "/blog",
  "/blog/when-ai-is-the-user",
  "/blog/the-real-reason-ai-evals-matter",
  "/healthcare-case-study",
  "/law-case-study",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  return routes.map((route) => ({
    url: `${SITE_URL}${route}`,
    lastModified,
  }));
}
