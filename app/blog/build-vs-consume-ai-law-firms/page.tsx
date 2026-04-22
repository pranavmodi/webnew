import { Metadata } from "next";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { CALENDLY_URL, SITE_NAME } from "@/lib/constants";

export const metadata: Metadata = {
  title: `Build vs. Consume: The AI Choice That Will Define Your Firm | ${SITE_NAME}`,
  description:
    "The legal industry is splitting into firms that use AI and firms that build with it. Here is what builders actually do, why the economics favor them, and how to start in the next 30 days.",
};

export default function BlogPostPage() {
  return (
    <div className="bg-black pb-24">
      <section className="relative overflow-hidden bg-gradient-to-b from-[#04150d] to-black">
        <div className="relative mx-auto max-w-4xl px-4 py-20 sm:px-6">
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
              Build vs. Consume: The AI Choice That Will Define Your Firm
            </h1>
            <p className="max-w-3xl text-base text-foreground/80 sm:text-lg">
              The legal industry is splitting into two camps &mdash; firms that
              use AI, and firms that build with it. The gap is about to become
              a chasm. Here is what builders actually do, why the economics
              favor them, and how to start in the next 30 days.
            </p>
            <div className="flex flex-wrap gap-3 text-xs text-muted-foreground">
              {["Pranav Modi", "April 22, 2026", "7 min read"].map((item) => (
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

      <article className="mx-auto max-w-4xl space-y-12 px-4 pt-12 text-foreground/85 sm:px-6">
        <section className="space-y-4">
          <p>
            On a recent episode of Maximum Lawyer Live, Tyson Mutrux made a
            distinction that is worth taking seriously: the people getting the
            most out of AI right now are not the ones using it the most
            &mdash; they are the ones building with it.
          </p>
          <p>
            Most firms are still in the consumer phase. They open ChatGPT to
            redraft a paragraph, summarize a deposition, or research a
            statute. Useful work, but rented work. The output dies the moment
            you close the tab. Builders are doing something different. They
            are turning AI from a tool you reach for into systems your firm
            owns and runs every day.
          </p>
          <p>
            Over the next two to three years, that distinction will compound
            into the gap between firms that scale and firms that get
            squeezed. This piece breaks down what builders actually do, why
            the economics tilt heavily in their favor, and how a non-coder
            partner can start this month.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-[#00ff41]">
            The Economics: Renting Forever vs. Owning Once
          </h2>
          <p>
            Add up everything your firm pays in monthly software fees: case
            management, e-signature, intake, marketing automation, lien
            tracking, document assembly, billing, scheduling, voice
            transcription. For a mid-sized PI firm, the bill commonly clears
            $8,000 to $15,000 a month. Multiply by 36 months and that is
            roughly half a million dollars of recurring spend on tools you
            do not own.
          </p>
          <p>
            For most of the last decade that was the only option. Building
            anything custom required engineers, project managers, and a six
            to twelve month timeline. The math did not work for a 40-person
            firm.
          </p>
          <p>
            That math has flipped. With Claude Code, Bolt, Replit Agent, and
            similar build-with-AI environments, a non-technical partner can
            now spec, ship, and iterate on internal tools in days. The
            ongoing cost is mostly storage and a few API calls &mdash; a
            fraction of the SaaS line item it replaces. Every dollar that
            stops leaving your P&amp;L every month becomes discretionary:
            bonuses, marketing, or compounding investment in the next build.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-[#00ff41]">
            &quot;Building&quot; Does Not Mean Software Development
          </h2>
          <p>
            The word &quot;build&quot; trips lawyers up. They picture VS
            Code, GitHub repos, and engineers in hoodies. That is not what
            builder firms are doing.
          </p>
          <p>
            Building, in this context, means designing systems that run
            without you in the loop. A few examples we are watching at
            firms that have crossed over:
          </p>
          <ul className="list-disc space-y-2 pl-6 text-foreground/75">
            <li>
              An intake agent that answers the website chat, qualifies a
              lead against your firm&apos;s case criteria, books the consult
              on the right paralegal&apos;s calendar, and writes the first
              CRM note &mdash; all before a human sees the lead.
            </li>
            <li>
              A medical-records summarizer that takes a 600-page chart, pulls
              every diagnosis, treatment date, and provider, and produces a
              one-page demand-ready timeline in under three minutes.
            </li>
            <li>
              A lien-negotiation assistant that drafts the reduction letter,
              cites the firm&apos;s past settled-percentage data with that
              provider, and queues it for partner review.
            </li>
            <li>
              A daily morning brief that scans new filings in the firm&apos;s
              jurisdiction, surfaces any opposing-counsel patterns worth
              flagging, and emails it to the litigation team at 7am.
            </li>
          </ul>
          <p>
            None of these required a software engineer. Each one was scoped
            and built by a partner or operations lead working with an AI
            agent &mdash; in the same week the idea came up.
          </p>
          <p>
            This is not a small productivity nudge. It is the firm&apos;s
            workflow rewritten so that the lawyer&apos;s time goes to the
            work only a lawyer can do.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-[#00ff41]">
            The First-Mover Window Is Real and Closing
          </h2>
          <p>
            Capability is roughly doubling every six to seven months &mdash;
            this is the trend behind the GPT-4 to Claude 3.5 to GPT-5
            jumps and the new generation of agents that can plan, execute,
            and verify multi-step work without supervision. What took a
            week to build six months ago takes a day now. What takes a day
            now will take an hour next year.
          </p>
          <p>
            Tyson uses a portal metaphor on the episode that lands well: the
            opening is wide right now. Anyone who wants to walk through can.
            But it shrinks every month. The firms building today will end
            up on the other side, with internal systems compounding ahead
            of competitors. The firms that wait will get there to find a
            window where a door used to be.
          </p>
          <div className="rounded-xl border border-primary/20 bg-[#04150d]/60 px-6 py-5">
            <p className="text-sm leading-relaxed text-foreground/75">
              The cost of being early is a few months of awkward
              experiments. The cost of being late is being a permanent
              tenant in someone else&apos;s product roadmap.
            </p>
          </div>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-[#00ff41]">
            The Real Barrier Is Psychological, Not Technical
          </h2>
          <p>
            The friction stopping most firms is not the tools. The tools are
            already cheap, fast, and forgiving. The friction is that
            lawyers are trained to reduce risk, demand certainty, and bill
            hours against known processes. Builders do the opposite &mdash;
            they ship something rough, watch it fail, and iterate.
          </p>
          <p>
            That is uncomfortable for a profession that runs on precedent.
            But the firms that get past it discover something: building
            with AI is forgiving in a way most lawyer-led projects are not.
            The agent will rebuild the broken piece in fifteen minutes
            after you describe what went wrong in plain English. There is
            no sunk cost to defend, no engineer to apologize to, no quarterly
            roadmap to renegotiate.
          </p>
          <p>
            The risk profile of building has inverted. The risky move
            in 2026 is not trying. It is staying a consumer.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-[#00ff41]">
            What to Do in the Next 30 Days
          </h2>
          <p>
            If this lands, do not start with a six-month transformation
            project. Start with one workflow. Here is the sequence we
            recommend to the partners we work with:
          </p>
          <ul className="list-disc space-y-2 pl-6 text-foreground/75">
            <li>
              <strong className="text-foreground">Week 1 &mdash; Pick one painful workflow.</strong> The
              one that loses you sleep, costs hours, or leaks revenue.
              Intake response times. Medical-records review. Lien
              negotiations. Draft demand letters. Pick one.
            </li>
            <li>
              <strong className="text-foreground">Week 2 &mdash; Map it on paper.</strong> Every step,
              every handoff, every place a human waits on something. The
              map matters more than the tool you pick next.
            </li>
            <li>
              <strong className="text-foreground">Week 3 &mdash; Build the thinnest possible version.</strong>{" "}
              Not the dream system &mdash; the version that automates one
              step. Spin it up in Claude Code, Bolt, or a hosted agent
              platform. Cost: about $20 to $200 in API calls.
            </li>
            <li>
              <strong className="text-foreground">Week 4 &mdash; Ship it to one person on the team.</strong>{" "}
              Watch what they actually do with it. Iterate. Then
              expand. Then move on to the next workflow.
            </li>
          </ul>
          <p>
            You are not trying to replace your case management system in 30
            days. You are trying to prove to yourself that you can build,
            ship, and improve a system without hiring an engineer or
            buying another SaaS contract. That proof is what changes
            everything afterward.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-[#00ff41]">
            The Compounding Future
          </h2>
          <p>
            Builder firms create three things consumer firms cannot match:
            margins they keep instead of paying out, internal systems that
            improve every month, and an organizational reflex to ship
            instead of shop. Each of those compounds. Margins fund the
            next build. The next build raises capacity. Capacity wins
            cases and client experience, which fills the pipeline, which
            funds the next build.
          </p>
          <p>
            The firms that figure this out in 2026 will own a structural
            advantage their competitors will spend the rest of the
            decade trying to rent their way out of. That is the choice
            on the table this quarter.
          </p>
        </section>

        <section className="rounded-2xl border border-primary/20 bg-gradient-to-br from-[#04150d] to-black p-8 text-center">
          <h2 className="mb-3 text-2xl font-semibold text-[#00ff41]">
            Want a Builder&apos;s Roadmap for Your Firm?
          </h2>
          <p className="mb-6 text-foreground/70">
            We work with PI firms to identify the highest-leverage workflows
            to build first &mdash; and ship the first one in 30 days. Book a
            free strategy call and we will sketch the roadmap with you.
          </p>
          <Button asChild size="lg" className="rounded-full">
            <a
              href={CALENDLY_URL}
              target="_blank"
              rel="noopener noreferrer"
            >
              Book a Free Strategy Call
            </a>
          </Button>
        </section>
      </article>
    </div>
  );
}
