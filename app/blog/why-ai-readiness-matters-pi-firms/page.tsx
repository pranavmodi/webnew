import { Metadata } from "next";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { BLOG_POSTS_BY_SLUG } from "@/lib/blog";
import { CALENDLY_URL, SITE_NAME } from "@/lib/constants";
import { BlogTableOfContents } from "@/components/blog/table-of-contents";

const contents = [
  { id: "case-system", label: "Where does most case information live today?" },
  { id: "field-quality", label: "How complete are the key fields your team depends on?" },
  { id: "system-modernity", label: "How modern and connectable is your core stack?" },
  { id: "phone-docs", label: "How do phones, documents, signatures, and accounting connect?" },
  { id: "intake-repeatability", label: "How repeatable is intake?" },
  { id: "case-workflows", label: "How documented are records, treatment, demand, and lien workflows?" },
  { id: "funnel-metrics", label: "Which intake and funnel numbers do you track?" },
  { id: "case-metrics", label: "How well do you know where cases stall or leak value?" },
  { id: "shadow-ai", label: "How is staff use of AI tools governed today?" },
  { id: "vendor-diligence", label: "How do you evaluate vendors that touch client data?" },
  { id: "leadership", label: "How bought in is leadership?" },
  { id: "adoption-history", label: "How did the last new tool rollout go?" },
  { id: "target-problem", label: "What problem would AI solve first?" },
  { id: "budget-expectations", label: "How clear are budget and expectations?" },
  { id: "the-point-of-the-audit", label: "The point of the audit" },
];

export const metadata: Metadata = {
  title: `Why AI Readiness Starts Before AI | ${SITE_NAME}`,
  description:
    "AI does not fail inside PI firms because the model is weak. It fails because case data, workflows, metrics, security, and ownership are not ready for automation.",
};

export default function BlogPostPage() {
  const post = BLOG_POSTS_BY_SLUG["why-ai-readiness-matters-pi-firms"];

  return (
    <div className="bg-black pb-24">
      <section className="relative overflow-hidden bg-gradient-to-b from-[#04150d] to-black">
        <div className="relative mx-auto max-w-4xl px-4 py-20 sm:px-6">
          <div className="space-y-5">
            <div className="flex items-center gap-3 text-xs text-muted-foreground">
              <Link href="/blog" className="transition hover:text-primary">
                Blog
              </Link>
              <span className="text-primary/40">/</span>
              <span>AI Strategy</span>
            </div>
            <h1 className="text-4xl font-semibold leading-tight tracking-tight text-[#00ff41] sm:text-5xl lg:text-6xl">
              Why AI Readiness Starts Before AI: The Operating Questions Every PI Firm Should Answer
            </h1>
            <p className="max-w-3xl text-base text-foreground/80 sm:text-lg">
              AI does not fail inside PI firms because the model is weak. It fails because case data, workflows, metrics, security, and ownership are not ready for automation.
            </p>
            <div className="flex flex-wrap gap-3 text-xs text-muted-foreground">
              {[post.author, post.date, post.readTime].map((item) => (
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

      <BlogTableOfContents items={contents} />


      <article className="mx-auto max-w-4xl space-y-12 px-4 pt-12 text-foreground/85 sm:px-6">
        <section className="space-y-4">
          <p>
            Most AI conversations inside personal injury firms start too late.
          </p>
          <p>
            They start with the tool.
          </p>
          <p>
            Can this draft demand letters? Can it answer intake calls? Can it summarize records? Can it update clients? Can it reduce staff time?
          </p>
          <p>
            Those are reasonable questions. But they are not the first questions.
          </p>
          <p>
            The first question is whether the firm has enough operational structure for AI to help without creating more risk, more rework, or more noise.
          </p>
          <p>
            AI does not fix a broken operating system. It amplifies the operating system that is already there. If case data is scattered, AI has nothing reliable to reason from. If intake varies by person, AI will preserve that inconsistency. If nobody owns adoption, the project becomes another tool people try once and ignore. If staff are already pasting client details into consumer AI tools, the risk is not theoretical. It is already in the building.
          </p>
          <p>
            That is why our AI Readiness Audit asks operational questions before technical ones. The goal is not to judge whether a firm is advanced. The goal is to identify the first place AI can create value safely.
          </p>
          <p>
            For most PI firms, the best first AI project is not the flashiest one. It is the one that connects to clean data, follows a repeatable workflow, has a measurable baseline, protects client information, and has a person responsible for adoption.
          </p>
          <p>
            The questions below are the backbone of that diagnosis.
          </p>
        </section>

        <section id="case-system" className="scroll-mt-24 space-y-4">
          <h2 className="text-2xl font-semibold text-[#00ff41]">
            Where does most case information live today?
          </h2>
          <p>
            AI needs a source of truth.
          </p>
          <p>
            If case information lives across paper files, inboxes, spreadsheets, personal drives, and staff memory, the first AI project will spend most of its time guessing. A model can summarize a document, but it cannot know which version is current if the firm itself does not know. It can draft a status update, but it cannot safely do that if the facts are split between the case management system, someone&apos;s email, and a note from last week&apos;s call.
          </p>
          <p>
            This is why the audit starts with the location of case information. Not because software matters for its own sake, but because AI needs a dependable record to work from.
          </p>
          <p>
            A modern case management system is not automatically enough. The real question is whether it is the trusted place where the important facts actually live. When the system is clean and current, AI can assist with records chasing, client updates, intake review, treatment timelines, and case movement. When it is incomplete, the first step is data cleanup, not automation.
          </p>
        </section>

        <section id="field-quality" className="scroll-mt-24 space-y-4">
          <h2 className="text-2xl font-semibold text-[#00ff41]">
            How complete are the key fields your team depends on?
          </h2>
          <p>
            A field that exists but is rarely filled in is not data. It is decoration.
          </p>
          <p>
            PI firms often have the right fields in their systems: date of loss, treatment status, provider, insurance information, lien status, demand status, last contact, next task. But if those fields are inconsistently populated, AI cannot use them reliably.
          </p>
          <p>
            Completeness matters because AI workflows usually depend on small operational signals. Is the client treating? Has the provider sent records? Has the adjuster responded? Is the case ready for demand? Has the client gone quiet? Which leads were contacted within five minutes?
          </p>
          <p>
            If the answer is buried in notes, scattered across emails, or known only to one staff member, AI cannot safely act on it. The firm may still be able to use AI for narrow drafting or summarization, but not for dependable workflow automation.
          </p>
          <p>
            Better data quality turns AI from a clever assistant into an operational layer.
          </p>
        </section>

        <section id="system-modernity" className="scroll-mt-24 space-y-4">
          <h2 className="text-2xl font-semibold text-[#00ff41]">
            How modern and connectable is your core stack?
          </h2>
          <p>
            The best AI system is only useful if it can reach the tools where work happens.
          </p>
          <p>
            A PI firm does not run in one application. It runs across case management, phones, email, documents, e-signatures, accounting, review platforms, lead sources, and sometimes medical-provider portals. If those systems cannot connect, staff become the integration layer. They copy, paste, re-key, forward, screenshot, and manually reconcile.
          </p>
          <p>
            AI can reduce that burden only when the stack has a practical integration path.
          </p>
          <p>
            This does not mean every firm needs a perfect enterprise architecture. It means the first AI project should be honest about the available surface area. Can the system read a new lead? Can it write a note? Can it create a task? Can it pull case status? Can it update the record after a call?
          </p>
          <p>
            If the answer is no, the project may still be possible, but the scope must change. Start with a workflow that does not require deep integration, or fix the connection point first.
          </p>
        </section>

        <section id="phone-docs" className="scroll-mt-24 space-y-4">
          <h2 className="text-2xl font-semibold text-[#00ff41]">
            How do phones, documents, signatures, and accounting connect?
          </h2>
          <p>
            Many AI ideas fail at the handoff.
          </p>
          <p>
            A voice agent can answer an after-hours call, but what happens next? Does the call summary enter the case system? Is a task created? Is the intake team alerted? Is a retainer sent? Does the lead source get captured? Does anyone know whether the caller converted?
          </p>
          <p>
            The same issue appears in document workflows. AI can help review records or draft requests, but if the output still depends on someone manually moving files between systems, the firm has not automated the workflow. It has added another step.
          </p>
          <p>
            This is why the audit asks about phones, documents, signatures, and accounting together. These are the places where PI work turns into real operational motion. When they connect, AI can help cases move. When they do not, AI becomes another isolated tool.
          </p>
        </section>

        <section id="intake-repeatability" className="scroll-mt-24 space-y-4">
          <h2 className="text-2xl font-semibold text-[#00ff41]">
            How repeatable is intake?
          </h2>
          <p>
            Intake is usually the highest-value first AI opportunity for a PI firm. It is also one of the easiest places to automate inconsistency.
          </p>
          <p>
            If every intake specialist handles calls differently, AI has no stable process to support. One person asks about coverage. Another focuses on injuries. Another forgets employment impact. Another misses treatment status. Another takes great notes but does not tag the lead source. The issue is not effort. It is variance.
          </p>
          <p>
            AI works best when the firm can say, &quot;This is how we want intake handled.&quot;
          </p>
          <p>
            That can be a script, a checklist, a qualification rubric, a required field set, or a simple decision tree. The format matters less than the repeatability. Once intake is repeatable, AI can assist with after-hours capture, call summaries, lead qualification, follow-up reminders, missed-call recovery, and speed-to-lead measurement.
          </p>
          <p>
            If intake is not repeatable, the first project is not an AI agent. It is the one-page intake standard the agent will eventually follow.
          </p>
        </section>

        <section id="case-workflows" className="scroll-mt-24 space-y-4">
          <h2 className="text-2xl font-semibold text-[#00ff41]">
            How documented are records, treatment, demand, and lien workflows?
          </h2>
          <p>
            PI firms do not create value only at intake. Value is created as cases move.
          </p>
          <p>
            Records come in. Treatment progresses. Gaps appear. Demands get prepared. Liens get negotiated. Adjusters respond. Clients need updates. Staff chase missing information. Attorneys make judgment calls. A case can stall at any of these points.
          </p>
          <p>
            AI can help find stalls, draft follow-ups, summarize status, and route work. But only if the firm understands the workflow well enough to define what stalled means.
          </p>
          <p>
            If records, treatment, demand, and lien workflows live entirely in people&apos;s heads, AI has no clear standard. It can generate activity, but not necessarily progress. Documentation gives AI something to execute against and gives humans something to review.
          </p>
          <p>
            The point is not bureaucracy. The point is transferability. A workflow that can be taught to a new employee can usually be supported by AI. A workflow that only exists as tribal knowledge cannot.
          </p>
        </section>

        <section id="funnel-metrics" className="scroll-mt-24 space-y-4">
          <h2 className="text-2xl font-semibold text-[#00ff41]">
            Which intake and funnel numbers do you track?
          </h2>
          <p>
            AI investment should be tied to a number.
          </p>
          <p>
            For PI firms, intake and funnel metrics are often the easiest place to find that number. How many leads came in? How many were reached? How quickly? How many booked consults? How many signed? Which sources converted? How many calls were missed after hours? How many leads required multiple follow-ups?
          </p>
          <p>
            Without those baselines, an AI project becomes a belief exercise. The firm may feel busier. Staff may like the tool. The demo may look impressive. But nobody can say whether the system created value.
          </p>
          <p>
            With baselines, the conversation changes. If missed calls are costing signed cases, after-hours intake capture has a clear business case. If speed-to-lead is weak, automation can be measured. If leads are being lost after the first attempt, follow-up workflows can be improved.
          </p>
          <p>
            AI readiness is not just technical readiness. It is measurement readiness.
          </p>
        </section>

        <section id="case-metrics" className="scroll-mt-24 space-y-4">
          <h2 className="text-2xl font-semibold text-[#00ff41]">
            How well do you know where cases stall or leak value?
          </h2>
          <p>
            The most valuable AI opportunities are often hidden in case movement, not lead capture.
          </p>
          <p>
            A case may stall because records are missing. Treatment status is unclear. A demand package is waiting on one document. A client has not responded. A lien issue is unresolved. A staff member is overloaded. None of these problems announce themselves as AI opportunities. They show up as delay, leakage, and staff drag.
          </p>
          <p>
            If the firm does not track where cases stall, AI has no target. It may automate visible work while the real bottleneck remains untouched.
          </p>
          <p>
            This is why the audit asks whether the firm knows where cases leak value. The answer determines whether AI should start with intake, records, status updates, demand prep, lien workflows, or internal task routing.
          </p>
          <p>
            The best first AI project is not the one with the coolest demo. It is the one pointed at the most expensive bottleneck.
          </p>
        </section>

        <section id="shadow-ai" className="scroll-mt-24 space-y-4">
          <h2 className="text-2xl font-semibold text-[#00ff41]">
            How is staff use of AI tools governed today?
          </h2>
          <p>
            If a firm has no AI policy, that does not mean AI is not being used.
          </p>
          <p>
            It usually means AI is being used invisibly.
          </p>
          <p>
            Staff may be pasting client facts into consumer tools. Someone may be summarizing medical records in a personal account. Someone may be drafting sensitive emails in a system the firm has not reviewed. The risk is not that people are careless. The risk is that useful tools spread faster than governance.
          </p>
          <p>
            For PI firms, this matters because client files often contain medical, financial, and deeply personal information. AI use has to respect confidentiality, privilege, vendor terms, retention, training use, access control, and human review.
          </p>
          <p>
            A realistic AI-use policy does not need to be 40 pages. It needs to make the safe path obvious: what tools are approved, what data can be used, what requires review, what is prohibited, and who decides when a new use case is allowed.
          </p>
          <p>
            Governance is not a blocker to AI adoption. It is what lets adoption happen without creating hidden liability.
          </p>
        </section>

        <section id="vendor-diligence" className="scroll-mt-24 space-y-4">
          <h2 className="text-2xl font-semibold text-[#00ff41]">
            How do you evaluate vendors that touch client data?
          </h2>
          <p>
            AI vendors should not be evaluated only by demo quality.
          </p>
          <p>
            The demo answers, &quot;Can this work?&quot; Vendor diligence answers, &quot;Can we trust this in our environment?&quot;
          </p>
          <p>
            For any system that touches client data, a PI firm should understand how data is stored, whether it is used for training, who can access it, how long it is retained, what controls exist, what happens on termination, and whether the vendor can support the firm&apos;s confidentiality obligations.
          </p>
          <p>
            This is especially important with AI because the surface area is broader than traditional software. Inputs, outputs, prompts, logs, embeddings, transcripts, documents, and human review queues may all contain sensitive information.
          </p>
          <p>
            A firm does not need to become a security company. But it does need a repeatable vendor checklist. Without that, every purchase conversation becomes improvised, and the firm&apos;s risk posture depends on whoever happened to ask the best questions that day.
          </p>
        </section>

        <section id="leadership" className="scroll-mt-24 space-y-4">
          <h2 className="text-2xl font-semibold text-[#00ff41]">
            How bought in is leadership?
          </h2>
          <p>
            AI adoption is an operating decision, not an IT decision.
          </p>
          <p>
            If leadership is only casually interested, the project will struggle the first time staff are busy, skeptical, or confused. If no one owns adoption, the system will become optional. Optional systems usually die quietly.
          </p>
          <p>
            Leadership buy-in does not mean the managing partner needs to understand every technical detail. It means the firm has a clear reason for the project, a named owner, a workflow target, a review rhythm, and permission to change how work gets done.
          </p>
          <p>
            This is especially true in PI firms because the work is urgent and interruption-heavy. Staff will not adopt a new process just because it exists. They adopt when leadership makes the change real, useful, and accountable.
          </p>
          <p>
            AI creates leverage only when the organization is willing to absorb the change.
          </p>
        </section>

        <section id="adoption-history" className="scroll-mt-24 space-y-4">
          <h2 className="text-2xl font-semibold text-[#00ff41]">
            How did the last new tool rollout go?
          </h2>
          <p>
            The best predictor of an AI rollout is the last non-AI rollout.
          </p>
          <p>
            If the last tool failed, got ignored, required constant pushing, or created workarounds, the AI project will inherit that pattern. The issue may not be the tool. It may be training, ownership, communication, workflow fit, or lack of follow-through.
          </p>
          <p>
            This question matters because AI tools often look impressive before they meet the actual operating environment. A firm with strong adoption habits can start smaller and move faster. A firm with weak adoption habits needs more structure: narrower scope, clearer training, stronger review, and an internal champion.
          </p>
          <p>
            AI readiness is partly change readiness. The firm is not only installing software. It is teaching the organization a new way to work.
          </p>
        </section>

        <section id="target-problem" className="scroll-mt-24 space-y-4">
          <h2 className="text-2xl font-semibold text-[#00ff41]">
            What problem would AI solve first?
          </h2>
          <p>
            &quot;We should use AI&quot; is not a strategy.
          </p>
          <p>
            A useful AI project starts with a specific operational problem: missed intake calls, slow follow-up, inconsistent status updates, records chasing, demand prep bottlenecks, lien negotiation support, review response, lead qualification, or internal knowledge retrieval.
          </p>
          <p>
            The narrower the problem, the easier it is to design the workflow, measure the outcome, and protect the downside.
          </p>
          <p>
            A vague AI mandate creates scattered experiments. A specific problem creates a learning loop. The firm can define the workflow, launch a controlled version, review outputs, collect corrections, improve the system, and turn those lessons into company-owned operational IP.
          </p>
          <p>
            That is the real prize. Not just using AI, but building a system that learns how the firm works.
          </p>
        </section>

        <section id="budget-expectations" className="scroll-mt-24 space-y-4">
          <h2 className="text-2xl font-semibold text-[#00ff41]">
            How clear are budget and expectations?
          </h2>
          <p>
            AI projects fail when expectations are magical.
          </p>
          <p>
            A realistic project has a budget, a business case, a human-in-the-loop design, and a definition of success. It is clear what the system will do, what it will not do, who reviews it, what happens when confidence is low, and what metric should improve.
          </p>
          <p>
            For PI firms, the budget conversation should be tied to capacity and case economics. If after-hours intake capture saves signed cases, that has a different value than a generic chatbot. If records chasing reduces delay, that has a different value than a document summarizer used occasionally. If client updates reduce inbound call load, that can be measured against staff time and client experience.
          </p>
          <p>
            The best AI work is not open-ended experimentation. It is disciplined operational investment.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-[#00ff41] scroll-mt-24" id="the-point-of-the-audit">
            The point of the audit
          </h2>
          <p>
            The audit is not trying to tell every firm to buy AI immediately.
          </p>
          <p>
            Some firms are ready for a pilot. Some need data cleanup first. Some need an intake checklist. Some need a policy. Some need a champion. Some need to measure the bottleneck before they automate it.
          </p>
          <p>
            That diagnosis is the point.
          </p>
          <p>
            A PI firm becomes AI-ready when it has enough structure for automation to create reliable value: clean-enough data, connectable systems, repeatable workflows, measurable baselines, safe data practices, leadership ownership, and a specific business problem worth solving.
          </p>
          <p>
            AI does not replace that foundation. It runs on it.
          </p>
        </section>

        <section className="rounded-2xl border border-primary/20 bg-gradient-to-br from-[#04150d] to-black p-8 text-center">
          <h2 className="mb-3 text-2xl font-semibold text-[#00ff41]">
            Want to Find the First Safe AI Win?
          </h2>
          <p className="mb-6 text-foreground/70">
            We build AI systems for PI firms around the operational foundation that makes automation dependable: clean data, repeatable workflows, measurable baselines, and human review where it matters.
          </p>
          <Button asChild size="lg" className="rounded-full">
            <a href={CALENDLY_URL} target="_blank" rel="noopener noreferrer">
              Book a Free Strategy Call
            </a>
          </Button>
        </section>
      </article>
    </div>
  );
}
