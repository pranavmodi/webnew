"use client";

import { useState } from "react";
import Link from "next/link";

import { JsonLd } from "@/components/seo/json-ld";
import { blogPosts } from "@/lib/blog";
import { SITE_NAME, SITE_URL } from "@/lib/constants";

const filters = ["All", "Legal AI", "AI Strategy", "Intake"];

export default function BlogPage() {
  const [activeFilter, setActiveFilter] = useState("All");

  const filtered =
    activeFilter === "All"
      ? blogPosts
      : blogPosts.filter((p) => p.tags.includes(activeFilter));

  return (
    <div className="bg-black pb-24">
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Blog",
          "@id": `${SITE_URL}/blog#blog`,
          name: `Insights & Ideas | ${SITE_NAME}`,
          url: `${SITE_URL}/blog`,
          publisher: {
            "@id": `${SITE_URL}/#organization`,
          },
          blogPost: blogPosts.map((post) => ({
            "@type": "BlogPosting",
            headline: post.title,
            description: post.description,
            url: `${SITE_URL}${post.href}`,
            datePublished: new Date(post.date).toISOString().slice(0, 10),
            author: {
              "@type": "Person",
              name: post.author,
            },
            publisher: {
              "@id": `${SITE_URL}/#organization`,
            },
          })),
        }}
      />
      <section className="relative overflow-hidden bg-gradient-to-b from-[#04150d] to-black">
        <div className="relative mx-auto max-w-5xl px-4 py-20 sm:px-6">
          <div className="space-y-5">
            <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-black/60 px-4 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-primary">
              Blog
            </div>
            <h1 className="text-4xl font-semibold leading-tight tracking-tight text-[#00ff41] sm:text-5xl">
              Insights & Ideas
            </h1>
            <p className="max-w-3xl text-base text-foreground/80 sm:text-lg">
              Thinking on AI strategy, evaluation frameworks, and building systems
              that learn faster than the competition.
            </p>
          </div>
        </div>
      </section>

      {/* Filter buttons */}
      <section className="mx-auto max-w-4xl px-4 pt-12 sm:px-6">
        <div className="flex flex-wrap gap-2">
          {filters.map((f) => (
            <button
              key={f}
              type="button"
              onClick={() => setActiveFilter(f)}
              className={`rounded-full border px-4 py-1.5 text-sm font-semibold transition ${
                activeFilter === f
                  ? "border-primary bg-primary/15 text-primary"
                  : "border-primary/20 bg-black/40 text-muted-foreground hover:border-primary/40 hover:text-primary"
              }`}
            >
              {f}
            </button>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-4xl space-y-6 px-4 pt-8 sm:px-6">
        {filtered.map((post) => (
          <Link
            key={post.href}
            href={post.href}
            className="group block rounded-2xl border border-primary/25 bg-[#04150d] p-6 transition hover:border-primary/40 hover:bg-[#04150d]/80"
          >
            <div className="flex flex-wrap gap-3 text-xs text-muted-foreground">
              <span className="rounded-full border border-primary/20 bg-black/40 px-3 py-1">
                {post.category}
              </span>
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-[#00ff41]/30 bg-[#00ff41]/10 px-3 py-1 text-[#00ff41]"
                >
                  {tag}
                </span>
              ))}
              <span className="rounded-full border border-primary/20 bg-black/40 px-3 py-1">
                {post.date}
              </span>
              <span className="rounded-full border border-primary/20 bg-black/40 px-3 py-1">
                {post.readTime}
              </span>
            </div>
            <h2 className="mt-4 text-2xl font-semibold text-primary transition group-hover:text-[#00ff41]">
              {post.title}
            </h2>
            <p className="mt-3 text-base text-foreground/80">
              {post.description}
            </p>
            <div className="mt-4 flex items-center justify-between">
              <span className="text-sm text-muted-foreground">
                By {post.author}
              </span>
              <span className="text-sm font-medium text-primary">
                Read more →
              </span>
            </div>
          </Link>
        ))}
      </section>
    </div>
  );
}
