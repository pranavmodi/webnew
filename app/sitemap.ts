import { MetadataRoute } from "next";

import { blogPosts } from "@/lib/blog";
import { SITE_URL } from "@/lib/constants";
import { piProblemPages } from "@/lib/pi-pages";

const staticPages = [
  { url: "/", changeFrequency: "weekly" as const, priority: 1.0 },
  { url: "/about", changeFrequency: "monthly" as const, priority: 0.8 },
  { url: "/personal-injury", changeFrequency: "weekly" as const, priority: 0.9 },
  { url: "/consult", changeFrequency: "monthly" as const, priority: 0.8 },
  { url: "/solutions/email-automation", changeFrequency: "monthly" as const, priority: 0.8 },
  { url: "/solutions/support-agent", changeFrequency: "monthly" as const, priority: 0.8 },
  { url: "/solutions/outbound-voice-ai", changeFrequency: "monthly" as const, priority: 0.8 },
  { url: "/solutions/lien-reduction", changeFrequency: "monthly" as const, priority: 0.8 },
  { url: "/healthcare-case-study", changeFrequency: "monthly" as const, priority: 0.7 },
  { url: "/law-case-study", changeFrequency: "monthly" as const, priority: 0.7 },
  { url: "/security", changeFrequency: "monthly" as const, priority: 0.7 },
  { url: "/tools/linkedin-outreach", changeFrequency: "monthly" as const, priority: 0.6 },
  { url: "/blog", changeFrequency: "weekly" as const, priority: 0.9 },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const blogPages = blogPosts.map((post) => ({
    url: post.href,
    changeFrequency: "yearly" as const,
    priority: post.tags.includes("For PI Firms") ? 0.8 : 0.7,
  }));
  const piPages = piProblemPages.map((page) => ({
    url: `/personal-injury/${page.slug}`,
    changeFrequency: "monthly" as const,
    priority: 0.85,
  }));

  return [...staticPages, ...piPages, ...blogPages].map((page) => ({
    url: `${SITE_URL}${page.url}`,
    lastModified: new Date(),
    changeFrequency: page.changeFrequency,
    priority: page.priority,
  }));
}
