import type { Metadata } from "next";

import { BLOG_POSTS_BY_SLUG } from "@/lib/blog";
import { LINKEDIN_URL, SITE_NAME, SITE_URL } from "@/lib/constants";

export function createBlogMetadata(slug: string): Metadata {
  const post = BLOG_POSTS_BY_SLUG[slug];
  if (!post) throw new Error(`Unknown blog post: ${slug}`);
  const url = `${SITE_URL}${post.href}`;
  return {
    title: { absolute: `${post.title} | ${SITE_NAME}` },
    description: post.description,
    alternates: { canonical: url },
    openGraph: {
      title: post.title,
      description: post.description,
      type: "article",
      url,
      publishedTime: new Date(post.date).toISOString().slice(0, 10),
      authors: [post.author],
    },
    twitter: { card: "summary", title: post.title, description: post.description },
  };
}

export function createBlogStructuredData(slug: string) {
  const post = BLOG_POSTS_BY_SLUG[slug];
  if (!post) throw new Error(`Unknown blog post: ${slug}`);
  const url = `${SITE_URL}${post.href}`;
  return [
    {
      "@context": "https://schema.org",
      "@type": "BlogPosting",
      "@id": `${url}#article`,
      headline: post.title,
      description: post.description,
      url,
      mainEntityOfPage: url,
      datePublished: new Date(post.date).toISOString().slice(0, 10),
      author: { "@type": "Person", name: post.author, url: LINKEDIN_URL },
      publisher: { "@id": `${SITE_URL}/#organization` },
      articleSection: post.category,
      keywords: post.tags.join(", "),
      inLanguage: "en",
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
        { "@type": "ListItem", position: 2, name: "Blog", item: `${SITE_URL}/blog` },
        { "@type": "ListItem", position: 3, name: post.title, item: url },
      ],
    },
  ];
}
