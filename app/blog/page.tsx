"use client";

import { useState } from "react";
import Link from "next/link";

const posts = [
  {
    href: "/blog/musk-algorithm-ai-pi-firm",
    title: "Elon Musk’s Algorithm Applied to AI Transformation for a PI Law Firm",
    description:
      "Most AI projects inside personal injury firms fail because they automate the wrong workflow. Musk’s 5-step algorithm forces the redesign first — and produces a 10-agent operating model built on case movement, not case management.",
    author: "Pranav Modi",
    date: "May 20, 2026",
    readTime: "16 min read",
    category: "AI Strategy",
    tags: ["AI Strategy", "For PI Firms"],
  },
  {
    href: "/blog/tools-vs-systems-pi-firms-ai",
    title: "Tools vs. Systems: Why Most PI Firms Will Get the AI Era Wrong",
    description:
      "Most PI firms think they are adopting AI because staff use ChatGPT or Claude. The real divide is between firms using AI tools and firms building AI systems that run core workflows.",
    author: "Pranav Modi",
    date: "May 5, 2026",
    readTime: "10 min read",
    category: "Industry Analysis",
    tags: ["Legal AI", "For PI Firms"],
  },
  {
    href: "/blog/derisk-ai-adoption-legal-practice",
    title: "How to Derisk AI Adoption in Your Legal Practice",
    description:
      "A practical framework for law firms adopting agentic AI safely: define handoffs, map pause conditions, tighten review gates, and align legal judgment with technical workflow design.",
    author: "Pranav Modi",
    date: "April 23, 2026",
    readTime: "8 min read",
    category: "AI Strategy",
    tags: ["AI Strategy", "For PI Firms"],
  },
  {
    href: "/blog/build-vs-consume-ai-law-firms",
    title: "Build vs. Consume: The AI Choice That Will Define Your Firm",
    description:
      "The legal industry is splitting into firms that use AI and firms that build with it. Here is what builders actually do, why the economics favor them, and how to start in the next 30 days.",
    author: "Pranav Modi",
    date: "April 22, 2026",
    readTime: "7 min read",
    category: "AI Strategy",
    tags: ["AI Strategy", "For PI Firms"],
  },
  {
    href: "/blog/hidden-math-lien-negotiations",
    title: "The Hidden Math of Lien Negotiations: What 563 Cases Reveal",
    description:
      "We analyzed 563 real medical lien negotiations between a diagnostic imaging provider and PI law firms. The data reveals striking patterns in reduction demands, settlement timing, and firm behavior that neither side is tracking.",
    author: "Pranav Modi",
    date: "April 2, 2026",
    readTime: "9 min read",
    category: "Industry Analysis",
    tags: ["Legal AI", "For PI Firms"],
  },
  {
    href: "/blog/nobody-owns-ai-at-your-firm",
    title: "Nobody Owns AI at Your Firm (And That\u2019s Why It\u2019s Failing)",
    description:
      "80% of law firms can\u2019t show ROI from AI investments. The problem isn\u2019t the tools \u2014 it\u2019s that nobody owns the strategy. Here\u2019s what the most successful PI firms are doing differently.",
    author: "Pranav Modi",
    date: "March 24, 2026",
    readTime: "8 min read",
    category: "AI Strategy",
    tags: ["AI Strategy"],
  },
  {
    href: "/blog/gemini-maps-pi-firms",
    title: "Google Just Put Gemini in Maps. Here\u2019s What PI Firms Need to Do Now.",
    description:
      "Google\u2019s biggest Maps update in 10 years puts Gemini AI between your firm and your next client. Here\u2019s what personal injury firms need to optimize \u2014 before they become invisible.",
    author: "Pranav Modi",
    date: "March 17, 2026",
    readTime: "11 min read",
    category: "Industry Analysis",
    tags: ["Legal AI"],
  },
  {
    href: "/blog/the-200000-satisfying-answer",
    title: "The $200,000 Answer Your Clients Never Called About",
    description:
      "A PI managing partner discovers why his calls dropped 30% while his rankings held \u2014 and what he found when he Googled himself from his phone.",
    author: "Pranav Modi",
    date: "March 13, 2026",
    readTime: "7 min read",
    category: "Field Notes",
    tags: ["Legal AI"],
  },
  {
    href: "/blog/ai-search-law-firm-marketing",
    title: "Your Rankings Held. Your Calls Didn\u2019t.",
    description:
      "Google\u2019s AI Overviews have quietly rewired how clients find personal injury attorneys. Most firms have no idea it\u2019s happening \u2014 and no tool to measure it.",
    author: "Pranav Modi",
    date: "March 12, 2026",
    readTime: "8 min read",
    category: "Industry Analysis",
    tags: ["Legal AI"],
  },
  {
    href: "/blog/the-science-of-client-intake-conversion",
    title: "The Science of Client Intake and Lead Conversion",
    description:
      "Personal injury firms spend thousands per lead\u2014then lose half of them to slow response times and broken follow-up. Here\u2019s how conversion science, proactive intake, and AI are closing the gap.",
    author: "Pranav Modi",
    date: "February 26, 2026",
    readTime: "10 min read",
    category: "Legal AI",
    tags: ["Legal AI"],
  },
  {
    href: "/blog/sample-agent-ops",
    title: "How Agentic Ops Actually Launch Inside Regulated Teams",
    description:
      "Three quick lessons from launching AI pilots for PI, health, and pharma teams without breaking compliance or losing stakeholder trust.",
    author: "Pranav Modi",
    date: "February 25, 2026",
    readTime: "5 min read",
    category: "Field Notes",
    tags: ["AI Strategy"],
  },
  {
    href: "/blog/when-ai-is-the-user",
    title: "When AI Is the User: The New Economics of Software",
    description:
      "Software has always been built for people. That era is ending. When AI agents become the primary users of software products, everything changes\u2014pricing, interfaces, distribution, and the very definition of value.",
    author: "Pranav Modi",
    date: "February 6, 2026",
    readTime: "12 min read",
    category: "AI Strategy",
    tags: ["AI Strategy"],
  },
  {
    href: "/blog/the-real-reason-ai-evals-matter",
    title: "The Real Reason AI Evals Matter for Your Business",
    description:
      "Why AI evaluations are the foundation of learning loops that create unbreachable competitive moats\u2014and how the smartest companies are using them to win in the age of AI.",
    author: "Pranav Modi",
    date: "August 17, 2024",
    readTime: "8 min read",
    category: "AI Strategy",
    tags: ["AI Strategy"],
  },
];

const filters = ["All", "Legal AI", "AI Strategy"];

export default function BlogPage() {
  const [activeFilter, setActiveFilter] = useState("All");

  const filtered =
    activeFilter === "All"
      ? posts
      : posts.filter((p) => p.tags.includes(activeFilter));

  return (
    <div className="bg-black pb-24">
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
