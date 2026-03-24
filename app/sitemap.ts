import { MetadataRoute } from "next";

import { SITE_URL } from "@/lib/constants";

const pages = [
  { url: "/", changeFrequency: "weekly" as const, priority: 1.0 },
  { url: "/about", changeFrequency: "monthly" as const, priority: 0.8 },
  { url: "/solutions/email-automation", changeFrequency: "monthly" as const, priority: 0.8 },
  { url: "/solutions/support-agent", changeFrequency: "monthly" as const, priority: 0.8 },
  { url: "/solutions/outbound-voice-ai", changeFrequency: "monthly" as const, priority: 0.8 },
  { url: "/solutions/lien-reduction", changeFrequency: "monthly" as const, priority: 0.8 },
  { url: "/healthcare-case-study", changeFrequency: "monthly" as const, priority: 0.7 },
  { url: "/law-case-study", changeFrequency: "monthly" as const, priority: 0.7 },
  { url: "/blog", changeFrequency: "weekly" as const, priority: 0.9 },
  { url: "/personal-injury", changeFrequency: "weekly" as const, priority: 0.9 },
  // Blog posts — newest first
  { url: "/blog/gemini-maps-pi-firms", changeFrequency: "yearly" as const, priority: 0.8 },
  { url: "/blog/economics-of-intake-personal-injury-law-firms", changeFrequency: "yearly" as const, priority: 0.7 },
  { url: "/blog/the-200000-satisfying-answer", changeFrequency: "yearly" as const, priority: 0.7 },
  { url: "/blog/ai-search-law-firm-marketing", changeFrequency: "yearly" as const, priority: 0.7 },
  { url: "/blog/the-science-of-client-intake-conversion", changeFrequency: "yearly" as const, priority: 0.7 },
  { url: "/blog/when-ai-is-the-user", changeFrequency: "yearly" as const, priority: 0.7 },
  { url: "/blog/the-real-reason-ai-evals-matter", changeFrequency: "yearly" as const, priority: 0.7 },
];

export default function sitemap(): MetadataRoute.Sitemap {
  return pages.map((page) => ({
    url: `${SITE_URL}${page.url}`,
    lastModified: new Date(),
    changeFrequency: page.changeFrequency,
    priority: page.priority,
  }));
}
