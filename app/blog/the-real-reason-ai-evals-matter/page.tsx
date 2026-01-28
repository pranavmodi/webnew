import { Metadata } from "next";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { CALENDLY_URL, SITE_NAME } from "@/lib/constants";

export const metadata: Metadata = {
  title: `The Real Reason AI Evals Matter for Your Business | ${SITE_NAME}`,
  description:
    "Why AI evaluations are the foundation of learning loops that create unbreachable competitive moats—and how the smartest companies are using them to win in the age of AI.",
};

export default function BlogPostPage() {
  return (
    <div className="bg-black pb-24">
      <section className="relative overflow-hidden bg-gradient-to-b from-[#04150d] to-black">
        <div className="relative mx-auto max-w-5xl px-4 py-20 sm:px-6">
          <div className="space-y-5">
            <div className="flex items-center gap-3 text-xs text-muted-foreground">
              <Link
                href="/blog"
                className="transition hover:text-primary"
              >
                Blog
              </Link>
              <span className="text-primary/40">/</span>
              <span>AI Strategy</span>
            </div>
            <h1 className="text-4xl font-semibold leading-tight tracking-tight text-[#00ff41] sm:text-5xl lg:text-6xl">
              The Real Reason AI Evals Matter for Your Business
            </h1>
            <p className="max-w-3xl text-base text-foreground/80 sm:text-lg">
              Why AI evaluations are the foundation of learning loops that create
              unbreachable competitive moats&mdash;and how the smartest companies are
              using them to win in the age of AI.
            </p>
            <div className="flex flex-wrap gap-3 text-xs text-muted-foreground">
              {["Pranav Modi", "August 17, 2024", "8 min read"].map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-primary/20 bg-[#04150d] px-3 py-1"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <article className="mx-auto max-w-4xl space-y-12 px-4 pt-12 sm:px-6">
        {/* Intro */}
        <div className="rounded-2xl border border-primary/25 bg-[#04150d] p-6">
          <p className="text-base text-foreground/80">
            Most companies treat AI evaluations like a compliance checkbox. But the
            smartest organizations understand that evals aren&apos;t just about measuring
            performance&mdash;they&apos;re the foundation of learning loops that create
            unbreachable competitive moats in the age of AI.
          </p>
        </div>

        {/* Evals 101 */}
        <div className="rounded-2xl border border-primary/25 bg-[#04150d] p-6">
          <h2 className="text-2xl font-semibold text-primary">Evals 101</h2>
          <p className="mt-4 text-base text-foreground/80">
            AI evaluations&mdash;or &ldquo;evals&rdquo;&mdash;are systematic processes
            for validating and testing the outputs that machine learning applications
            produce. Think of them as the quality control system for your AI, but
            they&apos;re far more powerful than simple pass/fail tests.
          </p>
          <p className="mt-4 text-base text-foreground/80">
            Evals measure how well AI systems perform specific tasks under controlled
            conditions. Most companies focus on technical metrics like accuracy (95%!)
            without connecting them to business outcomes.
          </p>

          <h3 className="mt-8 text-lg font-semibold text-primary">
            Examples of AI Evals in Action
          </h3>
          <ul className="mt-4 space-y-3 text-base text-foreground/80">
            {[
              {
                title: "Customer Service Chatbots",
                desc: "Testing response accuracy, sentiment analysis, escalation handling, and resolution time across thousands of customer scenarios",
              },
              {
                title: "Recommendation Systems",
                desc: "Evaluating click-through rates, conversion impact, diversity of suggestions, and long-term user engagement patterns",
              },
              {
                title: "Content Generation",
                desc: "Assessing creativity, brand voice consistency, factual accuracy, and user satisfaction with AI-generated marketing copy",
              },
              {
                title: "Medical AI",
                desc: "OpenAI\u2019s HealthBench evaluates AI systems across 1,006 realistic healthcare scenarios developed with 262 physicians from 60 countries",
              },
            ].map((item) => (
              <li key={item.title} className="flex items-start gap-3">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#00ff41]" />
                <span>
                  <strong className="text-primary">{item.title}:</strong>{" "}
                  {item.desc}
                </span>
              </li>
            ))}
          </ul>
        </div>

        {/* Learning Loops */}
        <div className="rounded-2xl border border-primary/25 bg-gradient-to-br from-[#04150d] to-[#0a2618] p-6">
          <h2 className="text-2xl font-semibold text-primary">
            Learning Loops: The Secret Weapon of Winning Organizations
          </h2>
          <p className="mt-4 text-base text-foreground/80">
            Here&apos;s the real reason AI evals matter: they enable what industry leaders
            call &ldquo;learning loops&rdquo;&mdash;continuous feedback cycles that turn
            your AI systems into self-improving competitive weapons. Without proper
            evaluation systems, you&apos;re just deploying static software. With them,
            you&apos;re building engines of exponential improvement.
          </p>
          <p className="mt-4 text-base text-foreground/80">
            Eric Schmidt describes the modern competitive framework: &ldquo;You&apos;re
            going to have a backend server with a lot of data coming in that you can learn
            from, and you can improve and improve and improve.&rdquo; This isn&apos;t just
            about collecting data&mdash;it&apos;s about systematically evaluating that data
            to drive continuous improvement.
          </p>
          <p className="mt-4 text-base text-foreground/80">
            Musk&apos;s companies excel because they&apos;ve mastered rapid learning loops.
            Tesla&apos;s Autopilot doesn&apos;t just collect driving data&mdash;it
            continuously evaluates that data against safety metrics, edge case performance,
            and user behavior to improve faster than competitors can match.
          </p>
        </div>

        {/* Anatomy of a Learning Loop */}
        <div className="rounded-2xl border border-primary/25 bg-[#04150d] p-6">
          <h2 className="text-2xl font-semibold text-primary">
            The Anatomy of a Learning Loop
          </h2>
          <p className="mt-4 text-base text-foreground/80">
            Effective learning loops powered by AI evals follow this pattern:
          </p>
          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {[
              {
                step: "1",
                title: "Deploy",
                desc: "Launch AI systems with comprehensive evaluation frameworks",
              },
              {
                step: "2",
                title: "Monitor",
                desc: "Continuously measure performance against business and technical metrics",
              },
              {
                step: "3",
                title: "Analyze",
                desc: "Use evaluation data to identify improvement opportunities",
              },
              {
                step: "4",
                title: "Iterate",
                desc: "Rapidly test and deploy improvements based on eval insights",
              },
              {
                step: "5",
                title: "Scale",
                desc: "Apply successful improvements across the entire system",
              },
            ].map((item) => (
              <div
                key={item.step}
                className="rounded-2xl border border-primary/20 bg-black/40 p-5"
              >
                <div className="text-3xl font-semibold text-[#00ff41]">
                  {item.step}
                </div>
                <div className="mt-2 text-base font-semibold text-primary">
                  {item.title}
                </div>
                <p className="mt-2 text-sm text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>
          <p className="mt-6 text-base text-foreground/80">
            Companies that nail this process don&apos;t just improve
            incrementally&mdash;they improve exponentially. Schmidt notes that research
            teams at OpenAI and Anthropic already have 10&ndash;20% of their code written
            by AI, and this percentage will only accelerate as their evaluation systems
            identify and amplify successful patterns.
          </p>
          <p className="mt-4 text-base text-foreground/80">
            Companies like Gusto and Filevine use enterprise evaluation platforms to
            assess their AI agents for both objective metrics (cost, latency) and
            subjective ones (tone of voice, customer satisfaction). This isn&apos;t just
            about deploying AI&mdash;it&apos;s about deploying AI that actually works,
            reliably, at scale, through rigorous evaluation systems that power learning
            loops.
          </p>
          <p className="mt-4 text-base text-foreground/80">
            Without these evaluation-driven learning loops, AI systems are landmines
            waiting to explode. They&apos;ll work fine in testing, then fail
            catastrophically when they encounter real-world edge cases, diverse user
            inputs, or high-pressure scenarios. AI evals aren&apos;t a
            technicality&mdash;they&apos;re a business imperative.
          </p>
        </div>

        {/* The New Moat */}
        <div className="rounded-2xl border border-primary/25 bg-[#04150d] p-6">
          <h2 className="text-2xl font-semibold text-primary">
            Learning Loops: The New Moat in the Age of AI
          </h2>
          <p className="mt-4 text-base text-foreground/80">
            Traditional competitive moats&mdash;brand recognition, distribution channels,
            capital requirements&mdash;are crumbling in the face of AI disruption. The new
            moat is your organization&apos;s ability to learn and adapt faster than your
            competitors.
          </p>
          <p className="mt-4 text-base text-foreground/80">
            Schmidt explains why: &ldquo;When AI systems are delivered at scale, their
            impact will be incomprehensible&mdash;much bigger than what we&apos;ve seen
            with social media.&rdquo; In this world, the companies that can rapidly
            evaluate, learn, and improve their AI systems will dominate entire industries.
          </p>

          <h3 className="mt-8 text-lg font-semibold text-primary">
            Network Effects Through Learning Loops
          </h3>
          <div className="mt-4 grid gap-3 sm:grid-cols-2">
            {[
              {
                title: "More Users \u2192 More Data",
                desc: "Each user interaction provides evaluation data",
              },
              {
                title: "More Data \u2192 Better Models",
                desc: "Richer evaluation enables more targeted improvements",
              },
              {
                title: "Better Models \u2192 More Users",
                desc: "Superior performance attracts more customers",
              },
              {
                title: "Compounding Advantage",
                desc: "The gap between you and competitors widens exponentially",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="rounded-xl border border-primary/20 bg-black/40 p-4"
              >
                <div className="text-sm font-semibold text-[#00ff41]">
                  {item.title}
                </div>
                <p className="mt-1 text-sm text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>
          <p className="mt-6 text-base text-foreground/80">
            Google&apos;s search dominance exemplifies this: every search and click
            generates evaluation data that improves their algorithms, making search results
            more relevant, attracting more users, and creating an increasingly unassailable
            moat.
          </p>
        </div>

        {/* Traditional vs AI-Native */}
        <div className="rounded-2xl border border-primary/25 bg-[#04150d] p-6">
          <h2 className="text-2xl font-semibold text-primary">
            Why Traditional Companies Struggle
          </h2>
          <p className="mt-4 text-base text-foreground/80">
            Most established companies approach AI like they approach traditional software:
            build it, test it, deploy it, forget it. This linear thinking is fatal in the AI
            era. Without continuous evaluation and learning loops, your AI systems decay over
            time as data patterns shift and user behaviors evolve.
          </p>
          <p className="mt-4 text-base text-foreground/80">
            Meanwhile, AI-native companies are building learning loops into their DNA.
            They&apos;re not just using AI&mdash;they&apos;re creating AI systems that get
            smarter, faster, every day through rigorous evaluation and rapid iteration.
          </p>
        </div>

        {/* Building Your Advantage */}
        <div className="rounded-2xl border border-primary/25 bg-gradient-to-br from-[#04150d] to-[#0a2618] p-6">
          <h2 className="text-2xl font-semibold text-primary">
            Building Your Learning Loop Advantage
          </h2>
          <p className="mt-4 text-base text-foreground/80">
            Ready to build unbreachable moats? Start with these evaluation-driven learning
            loop fundamentals:
          </p>
          <div className="mt-6 grid gap-4 sm:grid-cols-3">
            {[
              {
                num: "1",
                title: "Evaluation-First Architecture",
                items: [
                  "Design evaluation metrics before building AI systems",
                  "Implement real-time performance monitoring",
                  "Create automated evaluation pipelines that run continuously",
                ],
              },
              {
                num: "2",
                title: "Business-Outcome Metrics",
                items: [
                  "Connect AI performance to revenue, cost savings, and customer satisfaction",
                  "Track leading indicators, not just lagging metrics",
                  "Measure user behavior changes, not just system accuracy",
                ],
              },
              {
                num: "3",
                title: "Rapid Iteration Capability",
                items: [
                  "Build systems that can deploy improvements daily, not quarterly",
                  "Create A/B testing frameworks for AI model comparisons",
                  "Automate the feedback loop from evaluation to improvement",
                ],
              },
            ].map((pillar) => (
              <div
                key={pillar.num}
                className="rounded-2xl border border-primary/20 bg-black/40 p-5"
              >
                <div className="text-3xl font-semibold text-[#00ff41]">
                  {pillar.num}
                </div>
                <div className="mt-2 text-base font-semibold text-primary">
                  {pillar.title}
                </div>
                <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
                  {pillar.items.map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#00ff41]" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Winner-Take-All */}
        <div className="rounded-2xl border border-primary/25 bg-[#04150d] p-6">
          <h2 className="text-2xl font-semibold text-primary">
            The Winner-Take-All Future
          </h2>
          <p className="mt-4 text-base text-foreground/80">
            We&apos;re entering an era where, as Schmidt warns, &ldquo;the leader in the
            industry tends to get a huge chunk of the market.&rdquo; The companies that
            master AI evaluation and learning loops won&apos;t just compete&mdash;they&apos;ll
            redefine entire industries.
          </p>
          <p className="mt-4 text-base text-foreground/80">
            The question isn&apos;t whether AI will transform your business. The question is
            whether you&apos;ll be the one doing the transforming, or the one being
            transformed. The companies that answer this question correctly are the ones
            investing in AI evaluation systems today&mdash;not as compliance exercises, but
            as the foundation of unbreachable competitive moats.
          </p>
          <p className="mt-4 text-base font-semibold text-primary">
            Your competitors are already building their learning loops. The race isn&apos;t
            to deploy AI fastest&mdash;it&apos;s to deploy AI that learns fastest. And that
            starts with taking evaluation seriously.
          </p>
        </div>

        {/* CTA */}
        <div className="rounded-2xl border border-primary/25 bg-gradient-to-br from-[#04150d] to-[#0a2618] p-6">
          <h2 className="text-2xl font-semibold text-primary">
            Ready to build your learning loop?
          </h2>
          <p className="mt-4 text-base text-foreground/80">
            We help companies design AI systems with evaluation and continuous improvement
            built in from day one. Let&apos;s talk about how learning loops can give your
            organization a compounding competitive advantage.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Button asChild size="lg" className="animate-glow">
              <Link href={CALENDLY_URL} target="_blank" rel="noreferrer">
                Book a demo
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link href="mailto:hello@possibleminds.ai">Email us</Link>
            </Button>
          </div>
        </div>
      </article>
    </div>
  );
}
