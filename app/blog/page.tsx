import { Metadata } from "next";
import Link from "next/link";

import { SITE_NAME } from "@/lib/constants";

export const metadata: Metadata = {
  title: `Blog | ${SITE_NAME}`,
  description:
    "Insights on AI strategy, learning loops, and building competitive moats with intelligent automation.",
};

const posts = [
  {
    href: "/blog/economics-of-intake-personal-injury-law-firms",
    title: "The Economics of Intake: Why Your Most Expensive Employee Is Your Phone",
    description: "Intake is the highest-leverage function in a PI law firm, yet most firms treat it as an administrative cost center. Here's how the math actually works — and what changes when you get it right.",
    author: "Pranav Modi",
    date: "March 11, 2026",
    readTime: "7 min read",
    category: "Industry Analysis",
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
  },
];

export default function BlogPage() {
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

      <section className="mx-auto max-w-4xl space-y-6 px-4 pt-12 sm:px-6">
        {posts.map((post) => (
          <Link
            key={post.href}
            href={post.href}
            className="group block rounded-2xl border border-primary/25 bg-[#04150d] p-6 transition hover:border-primary/40 hover:bg-[#04150d]/80"
          >
            <div className="flex flex-wrap gap-3 text-xs text-muted-foreground">
              <span className="rounded-full border border-primary/20 bg-black/40 px-3 py-1">
                {post.category}
              </span>
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
