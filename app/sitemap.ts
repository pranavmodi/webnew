import { MetadataRoute } from "next";

import { blogPosts } from "@/lib/blog";
import { SITE_URL } from "@/lib/constants";
import { piProblemPages } from "@/lib/pi-pages";

const staticPages = [
  { url: "/", changeFrequency: "weekly" as const, priority: 1.0 },
  { url: "/about", changeFrequency: "monthly" as const, priority: 0.8 },
  { url: "/personal-injury", changeFrequency: "weekly" as const, priority: 0.9 },
  { url: "/personal-injury/faq", changeFrequency: "monthly" as const, priority: 0.85 },
  { url: "/engagement-process", changeFrequency: "monthly" as const, priority: 0.85 },
  { url: "/build-partnership", changeFrequency: "monthly" as const, priority: 0.9 },
  { url: "/thesis", changeFrequency: "monthly" as const, priority: 0.85 },
  { url: "/consult", changeFrequency: "monthly" as const, priority: 0.8 },
  { url: "/ai-consultant", changeFrequency: "monthly" as const, priority: 0.9 },
  { url: "/solutions/intake-agent", changeFrequency: "weekly" as const, priority: 0.95 },
  { url: "/solutions/email-automation", changeFrequency: "monthly" as const, priority: 0.8 },
  { url: "/solutions/support-agent", changeFrequency: "monthly" as const, priority: 0.8 },
  { url: "/solutions/outbound-voice-ai", changeFrequency: "monthly" as const, priority: 0.8 },
  { url: "/solutions/lien-reduction", changeFrequency: "monthly" as const, priority: 0.8 },
  { url: "/healthcare-case-study", changeFrequency: "monthly" as const, priority: 0.7 },
  { url: "/law-case-study", changeFrequency: "monthly" as const, priority: 0.7 },
  { url: "/security", changeFrequency: "monthly" as const, priority: 0.7 },
  { url: "/tools/linkedin-outreach", changeFrequency: "monthly" as const, priority: 0.6 },
  { url: "/blog", changeFrequency: "weekly" as const, priority: 0.9 },
  { url: "/workshops", changeFrequency: "weekly" as const, priority: 0.85 },
  { url: "/workshops/ai-for-filevine-case-managers", changeFrequency: "weekly" as const, priority: 0.85 },
  { url: "/workshops/ai-for-lead-docket-intake-specialists", changeFrequency: "weekly" as const, priority: 0.85 },
  { url: "/workshops/ai-for-casepeer-litigation-paralegals", changeFrequency: "weekly" as const, priority: 0.85 },
  { url: "/workshops/ai-for-smartadvocate-paralegals", changeFrequency: "weekly" as const, priority: 0.85 },
  { url: "/workshops/ai-for-litify-pi-operations-teams", changeFrequency: "weekly" as const, priority: 0.85 },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const staticEntries: MetadataRoute.Sitemap = staticPages.map((page) => ({
    ...page,
    url: `${SITE_URL}${page.url}`,
  }));
  const piEntries: MetadataRoute.Sitemap = piProblemPages.map((page) => ({
    url: `${SITE_URL}/personal-injury/${page.slug}`,
    changeFrequency: "monthly",
    priority: 0.85,
  }));
  const blogEntries: MetadataRoute.Sitemap = blogPosts.map((post) => ({
    url: `${SITE_URL}${post.href}`,
    lastModified: new Date(post.date),
    changeFrequency: "yearly",
    priority: post.tags.includes("For PI Firms") ? 0.8 : 0.7,
  }));

  return [...staticEntries, ...piEntries, ...blogEntries];
}
