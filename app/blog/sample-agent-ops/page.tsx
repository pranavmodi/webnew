import { Metadata } from "next";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { CALENDLY_URL, SITE_NAME } from "@/lib/constants";

export const metadata: Metadata = {
  title: `How Agentic Ops Actually Launch Inside Regulated Teams | ${SITE_NAME}`,
  description:
    "A quick field note on how legal, health, and pharma teams pilot AI agents without getting crushed by compliance or coordination debt.",
};

export default function BlogPostPage() {
  const pills = ["Pranav Modi", "February 25, 2026", "5 min read"];
  const checklist = [
    {
      title: "Frame the workflow in business language",
      body: "Before showing anyone a prompt, capture the current SLA, failure modes, and evidence that leadership already tracks.",
    },
    {
      title: "Pair every agent step with human fallbacks",
      body: "Legal ops teams sign off faster when they can see exactly which steps still require counsel sign-off or reviewer initials.",
    },
    {
      title: "Ship evals with the prototype",
      body: "For PI intake, we grade tone, medical fact capture, and lien-readiness; for health claims, we grade CPT/ICD accuracy and payer-specific policy hits.",
    },
    {
      title: "Close the loop inside their system of record",
      body: "If an agent updates a Notion page but the paralegals live in Filevine, you have not automated anything.",
    },
  ];

  return (
    <div className="bg-black pb-24">
      <section className="relative overflow-hidden bg-gradient-to-b from-[#050315] to-black">
        <div className="relative mx-auto max-w-4xl px-4 py-20 sm:px-6">
          <div className="space-y-5">
            <div className="flex items-center gap-3 text-xs text-muted-foreground">
              <Link href="/blog" className="transition hover:text-primary">
                Blog
              </Link>
              <span className="text-primary/40">/</span>
              <span>Field Notes</span>
            </div>
            <h1 className="text-4xl font-semibold leading-tight tracking-tight text-primary sm:text-5xl lg:text-6xl">
              How Agentic Ops Actually Launch Inside Regulated Teams
            </h1>
            <p className="max-w-3xl text-base text-foreground/80 sm:text-lg">
              Three quick lessons from helping personal-injury, healthcare, and pharma teams
              stand up AI agents without losing compliance, context, or credibility.
            </p>
            <div className="flex flex-wrap gap-3 text-xs text-muted-foreground">
              {pills.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-primary/20 bg-black/30 px-3 py-1"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <article className="mx-auto max-w-4xl space-y-10 px-4 pt-12 sm:px-6">
        <div className="rounded-2xl border border-primary/25 bg-black/40 p-6">
          <p className="text-base text-foreground/80">
            In every engagement we run, the request sounds the same: “Can we get an AI
            copilot for intake / claims / medical reviews without creating new risk?”
            The answer is yes—but only if we keep the pilot scoped to a single workflow,
            wire it into the team’s existing systems, and ship evaluation hooks on day one.
          </p>
        </div>

        <div className="rounded-2xl border border-primary/25 bg-gradient-to-br from-[#050315] to-black p-6">
          <h2 className="text-2xl font-semibold text-primary">What Makes a Pilot Succeed</h2>
          <p className="mt-4 text-base text-foreground/80">
            Below is the quick checklist we now run through with every legal, health, or
            life-sciences client before we deploy an agent. Skip any step and the pilot
            stalls inside approvals.
          </p>
          <div className="mt-6 space-y-5">
            {checklist.map((item) => (
              <div
                key={item.title}
                className="rounded-xl border border-primary/20 bg-black/30 p-5"
              >
                <div className="text-lg font-semibold text-primary">{item.title}</div>
                <p className="mt-2 text-base text-foreground/75">{item.body}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-2xl border border-primary/25 bg-black/40 p-6">
          <h2 className="text-2xl font-semibold text-primary">
            Example: PI Intake That Writes Its Own Case Memos
          </h2>
          <p className="mt-4 text-base text-foreground/80">
            For one personal-injury network we built an agent that pulls medical records,
            tags bulletproof liens, and drafts negotiation-ready memos. The trick wasn’t
            GPT-4&mdash;it was the glue: HIPAA-safe storage, automatic tagging against their
            lien matrix, and evaluation scripts that grade voice/tone before anything reaches
            opposing counsel.
          </p>
        </div>

        <div className="rounded-2xl border border-primary/25 bg-black/40 p-6">
          <h2 className="text-2xl font-semibold text-primary">Want the playbook?</h2>
          <p className="mt-4 text-base text-foreground/80">
            If you&apos;re exploring agent pilots in regulated teams, we run rapid audits and
            co-build programs that reach production in weeks, not quarters.
          </p>
          <Button asChild className="mt-6">
            <Link href={CALENDLY_URL}>Book a working session</Link>
          </Button>
        </div>
      </article>
    </div>
  );
}
