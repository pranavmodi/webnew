import { Metadata } from "next";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { BLOG_POSTS_BY_SLUG } from "@/lib/blog";
import { CALENDLY_URL, SITE_NAME } from "@/lib/constants";

export const metadata: Metadata = {
  title: `When AI Is the User: The New Economics of Software | ${SITE_NAME}`,
  description:
    "Software has always been built for people. That era is ending. When AI agents become the primary users of software products, everything changes\u2014pricing, interfaces, distribution, and the very definition of value.",
};

export default function BlogPostPage() {
  const post = BLOG_POSTS_BY_SLUG["when-ai-is-the-user"];

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
              When AI Is the User: The New Economics of Software
            </h1>
            <p className="max-w-3xl text-base text-foreground/80 sm:text-lg">
              Software has always been built for people. That era is ending.
              When AI agents become the primary users of your product, everything
              changes&mdash;pricing, interfaces, distribution, and the very
              definition of value.
            </p>
            <div className="flex flex-wrap gap-3 text-xs text-muted-foreground">
              {[post.author, post.date, post.readTime].map(
                (item) => (
                  <span
                    key={item}
                    className="rounded-full border border-primary/20 bg-[#04150d] px-3 py-1"
                  >
                    {item}
                  </span>
                )
              )}
            </div>
          </div>
        </div>
      </section>

      <article className="mx-auto max-w-4xl space-y-12 px-4 pt-12 sm:px-6">
        {/* Intro */}
        <div className="rounded-2xl border border-primary/25 bg-[#04150d] p-6">
          <p className="text-base text-foreground/80">
            For fifty years, software has been designed around one assumption:
            a human being sits at the other end. Every pixel, every dropdown,
            every onboarding flow exists because a person needs to understand
            what&apos;s happening. That assumption is about to become the
            exception rather than the rule.
          </p>
          <p className="mt-4 text-base text-foreground/80">
            A new class of software is emerging where the primary
            &ldquo;user&rdquo; isn&apos;t a person at all&mdash;it&apos;s an AI
            agent. The agent reads the data, makes the decisions, takes the
            actions, and reports back. The human is the reviewer, the
            supervisor, the beneficiary&mdash;but not the operator.
          </p>
          <p className="mt-4 text-base text-foreground/80">
            This isn&apos;t a minor UI tweak. It&apos;s a structural change to
            the economics of software itself. And the companies that understand
            this shift first will have a generational advantage.
          </p>
        </div>

        {/* Part 1: The Old Model */}
        <div className="rounded-2xl border border-primary/25 bg-[#04150d] p-6">
          <h2 className="text-2xl font-semibold text-primary">
            The Model We Know: Software as a Tool for People
          </h2>
          <p className="mt-4 text-base text-foreground/80">
            The SaaS era gave us a clean economic model. You build software. You
            design a UI. Humans learn the UI, log in every day, and perform work
            inside your system. You charge per seat, per month. The more humans
            using the tool, the more you earn.
          </p>
          <p className="mt-4 text-base text-foreground/80">
            This model has been extraordinarily successful. It produced
            trillion-dollar companies. But it carries a hidden constraint: the
            software&apos;s value is bottlenecked by the speed of its slowest
            component&mdash;the human being operating it.
          </p>
          <p className="mt-4 text-base text-foreground/80">
            A paralegal using case management software can process maybe 15
            cases a day. A support rep in Zendesk can handle 40-60 tickets. A
            salesperson in Salesforce can research and email 20 prospects.
            The software is fast. The human is not. And you&apos;re charging for
            the human&apos;s seat, not the software&apos;s throughput.
          </p>
          <div className="mt-6 rounded-xl border border-primary/20 bg-black/40 p-5">
            <p className="text-sm italic text-muted-foreground">
              The per-seat model implicitly prices human attention, not software
              capability. When you remove the human from the loop, the entire
              pricing logic collapses.
            </p>
          </div>
        </div>

        {/* Part 2: The Inversion */}
        <div className="rounded-2xl border border-primary/25 bg-gradient-to-br from-[#04150d] to-[#0a2618] p-6">
          <h2 className="text-2xl font-semibold text-primary">
            The Inversion: When the Agent Becomes the User
          </h2>
          <p className="mt-4 text-base text-foreground/80">
            Now imagine the same case management software, but instead of a
            paralegal clicking through it, an AI agent reads every case file
            through the API, cross-references medical records against billing
            codes, identifies cases approaching their statute of limitations,
            and generates a prioritized action list&mdash;all before the
            attorney has their morning coffee.
          </p>
          <p className="mt-4 text-base text-foreground/80">
            The software is the same. The database is the same. But the
            &ldquo;user&rdquo; is completely different. And that changes
            everything about how the product works, how it&apos;s sold, and
            what it&apos;s worth.
          </p>

          <h3 className="mt-8 text-lg font-semibold text-primary">
            What changes when AI is the user:
          </h3>
          <div className="mt-4 grid gap-4 sm:grid-cols-2">
            {[
              {
                title: "No UI needed",
                desc: "Agents don\u2019t need dashboards, tooltips, or onboarding flows. They need clean APIs, structured data, and predictable outputs.",
              },
              {
                title: "No seats to count",
                desc: "An agent isn\u2019t a \u201Cuser.\u201D It might make 10,000 API calls in an hour or zero. Seat-based pricing is meaningless.",
              },
              {
                title: "Speed becomes unlimited",
                desc: "A human reviews 15 cases per day. An agent can review 1,500 per hour. The bottleneck shifts from the user to the data.",
              },
              {
                title: "Discovery goes machine-to-machine",
                desc: "Agents don\u2019t find software through Google Ads. They find it through protocol registries, MCP servers, and API documentation.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="rounded-xl border border-primary/20 bg-black/40 p-4"
              >
                <div className="text-sm font-semibold text-[#00ff41]">
                  {item.title}
                </div>
                <p className="mt-1 text-sm text-muted-foreground">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Part 3: Five Economic Shifts */}
        <div className="rounded-2xl border border-primary/25 bg-[#04150d] p-6">
          <h2 className="text-2xl font-semibold text-primary">
            Five Economic Shifts That Follow
          </h2>
          <p className="mt-4 text-base text-foreground/80">
            The agent-as-user model doesn&apos;t just change the interface. It
            restructures five fundamental pillars of software economics.
          </p>
        </div>

        {/* Shift 1: Pricing */}
        <div className="rounded-2xl border border-primary/25 bg-[#04150d] p-6">
          <div className="flex items-center gap-3">
            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#00ff41]/10 text-sm font-bold text-[#00ff41]">
              1
            </span>
            <h3 className="text-xl font-semibold text-primary">
              Pricing: From Seats to Outcomes
            </h3>
          </div>
          <p className="mt-4 text-base text-foreground/80">
            When a human uses Zendesk, you charge per agent seat. When an AI
            agent resolves 80% of tickets autonomously, what do you charge for?
            Not the seat&mdash;there is no seat. Not the API call&mdash;that
            commoditizes to near-zero. The only thing that retains value is the
            outcome: a resolved ticket, a qualified lead, a completed audit.
          </p>
          <p className="mt-4 text-base text-foreground/80">
            This is already happening. Seat-based pricing dropped from 21% to
            15% of SaaS companies in just twelve months. Hybrid models surged
            from 27% to 41%. Companies clinging to per-seat models for
            AI-powered products are seeing 40% lower gross margins and more than
            double the churn of those adopting usage or outcome-based pricing.
          </p>
          <div className="mt-6 overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-primary/20">
                  <th className="pb-3 pr-4 text-left font-semibold text-primary">
                    Era
                  </th>
                  <th className="pb-3 pr-4 text-left font-semibold text-primary">
                    Pricing model
                  </th>
                  <th className="pb-3 text-left font-semibold text-primary">
                    What you&apos;re really paying for
                  </th>
                </tr>
              </thead>
              <tbody className="text-muted-foreground">
                <tr className="border-b border-primary/10">
                  <td className="py-3 pr-4">SaaS (2005&ndash;2020)</td>
                  <td className="py-3 pr-4">Per seat / month</td>
                  <td className="py-3">
                    Access to the tool
                  </td>
                </tr>
                <tr className="border-b border-primary/10">
                  <td className="py-3 pr-4">Usage-based (2020&ndash;2024)</td>
                  <td className="py-3 pr-4">Per API call / token</td>
                  <td className="py-3">Compute consumed</td>
                </tr>
                <tr>
                  <td className="py-3 pr-4">Agent era (2025+)</td>
                  <td className="py-3 pr-4">Per outcome</td>
                  <td className="py-3">
                    Work completed
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="mt-4 text-base text-foreground/80">
            Outcome-based pricing aligns vendor and buyer incentives perfectly:
            the vendor only earns when the software actually delivers value.
            But it also demands that the software actually works&mdash;no more
            selling shelfware that looks good in a demo.
          </p>
        </div>

        {/* Shift 2: Interfaces */}
        <div className="rounded-2xl border border-primary/25 bg-[#04150d] p-6">
          <div className="flex items-center gap-3">
            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#00ff41]/10 text-sm font-bold text-[#00ff41]">
              2
            </span>
            <h3 className="text-xl font-semibold text-primary">
              Interfaces: From GUIs to Protocols
            </h3>
          </div>
          <p className="mt-4 text-base text-foreground/80">
            Humans need graphical interfaces. Agents need protocols. This is a
            profound shift in where engineering effort goes.
          </p>
          <p className="mt-4 text-base text-foreground/80">
            In the old model, a software company might spend 40-60% of
            engineering time on the frontend: design systems, responsive
            layouts, accessibility, onboarding flows, tooltips. In the
            agent-as-user model, the frontend barely exists. The product
            surface is the API&mdash;or more precisely, the protocol through
            which agents discover and interact with the software.
          </p>
          <p className="mt-4 text-base text-foreground/80">
            Anthropic&apos;s Model Context Protocol (MCP) is the clearest
            example. MCP is an open standard that lets AI agents connect to any
            tool or data source through a unified interface. It has surpassed
            97 million monthly SDK downloads. Stripe, one of the most
            sophisticated software companies on earth, rebuilt its entire agent
            interface as an MCP server&mdash;letting AI agents directly manage
            payments, subscriptions, and refunds without any human touching a
            dashboard.
          </p>
          <p className="mt-4 text-base text-foreground/80">
            The implication: the companies that become &ldquo;agent-legible&rdquo;
            first&mdash;that expose their capabilities through clean, well-documented
            protocols&mdash;will be the ones agents choose to use. Think of it
            as SEO for the agentic era. Except instead of optimizing for Google&apos;s
            crawler, you&apos;re optimizing for AI agents that can actually take
            action.
          </p>
        </div>

        {/* Shift 3: Distribution */}
        <div className="rounded-2xl border border-primary/25 bg-gradient-to-br from-[#04150d] to-[#0a2618] p-6">
          <div className="flex items-center gap-3">
            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#00ff41]/10 text-sm font-bold text-[#00ff41]">
              3
            </span>
            <h3 className="text-xl font-semibold text-primary">
              Distribution: From Marketing to Discoverability
            </h3>
          </div>
          <p className="mt-4 text-base text-foreground/80">
            Today, software companies spend enormous sums on distribution:
            Google Ads, content marketing, sales teams, conference booths,
            analyst briefings. All of this exists because a human needs to
            discover, evaluate, and choose the software.
          </p>
          <p className="mt-4 text-base text-foreground/80">
            When the agent is the user, the agent is also the buyer&mdash;or at
            least the recommender. An agent tasked with &ldquo;find the best way
            to collect medical records from providers&rdquo; won&apos;t Google
            it. It will scan API registries, evaluate documentation quality,
            test endpoints, and benchmark performance. Your marketing site is
            irrelevant. Your API docs are everything.
          </p>
          <p className="mt-4 text-base text-foreground/80">
            Visa has declared that 2025 may be the last year consumers shop
            alone. Mastercard, PayPal, and Google have all launched protocols
            for AI agents to make purchases on behalf of users. The emerging
            model looks less like advertising and more like a procurement
            protocol&mdash;where software tools bid for inclusion in an
            agent&apos;s workflow through quality, price, and reliability
            signals, not banner ads.
          </p>
          <div className="mt-6 rounded-xl border border-primary/20 bg-black/40 p-5">
            <p className="text-sm italic text-muted-foreground">
              In the agent economy, distribution advantage goes to the tool with
              the best API documentation, the most predictable behavior, and the
              cleanest protocol integration&mdash;not the biggest ad budget.
            </p>
          </div>
        </div>

        {/* Shift 4: TAM */}
        <div className="rounded-2xl border border-primary/25 bg-[#04150d] p-6">
          <div className="flex items-center gap-3">
            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#00ff41]/10 text-sm font-bold text-[#00ff41]">
              4
            </span>
            <h3 className="text-xl font-semibold text-primary">
              Total Addressable Market: From Software Budgets to Labor Budgets
            </h3>
          </div>
          <p className="mt-4 text-base text-foreground/80">
            This is the shift that gets venture capitalists excited, and for
            good reason. In the SaaS model, you compete for a share of the
            enterprise software budget&mdash;roughly $250 billion globally. In
            the agent-as-user model, you compete for a share of the enterprise
            labor budget.
          </p>
          <p className="mt-4 text-base text-foreground/80">
            Foundation Capital frames this as the &ldquo;services as
            software&rdquo; thesis: enterprises spend $4.6 trillion annually
            on salaries and outsourced services for work that intelligent agents
            can increasingly absorb. The TAM doesn&apos;t grow
            incrementally&mdash;it expands by an order of magnitude.
          </p>
          <p className="mt-4 text-base text-foreground/80">
            Consider a concrete example. A personal injury law firm spends
            $3,000-$5,000 per month on a case management SaaS subscription.
            The same firm spends $15,000-$25,000 per month on paralegal labor
            to operate that software&mdash;chasing medical records, drafting
            demand letters, tracking deadlines, negotiating liens. An agent
            that does the paralegal&apos;s work isn&apos;t competing for the
            $5,000 software line item. It&apos;s competing for the $25,000
            labor line item.
          </p>
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            <div className="rounded-xl border border-primary/20 bg-black/40 p-5">
              <div className="text-3xl font-semibold text-[#00ff41]">$250B</div>
              <p className="mt-2 text-sm text-muted-foreground">
                Global enterprise software market (the old TAM)
              </p>
            </div>
            <div className="rounded-xl border border-primary/20 bg-black/40 p-5">
              <div className="text-3xl font-semibold text-[#00ff41]">$4.6T</div>
              <p className="mt-2 text-sm text-muted-foreground">
                Annual enterprise spend on labor and services (the new TAM)
              </p>
            </div>
          </div>
        </div>

        {/* Shift 5: Margin Structure */}
        <div className="rounded-2xl border border-primary/25 bg-[#04150d] p-6">
          <div className="flex items-center gap-3">
            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#00ff41]/10 text-sm font-bold text-[#00ff41]">
              5
            </span>
            <h3 className="text-xl font-semibold text-primary">
              Margin Structure: The End of 90% Gross Margins
            </h3>
          </div>
          <p className="mt-4 text-base text-foreground/80">
            Traditional SaaS enjoyed a near-magical cost structure: build the
            software once, serve it to millions, marginal cost per user
            approaches zero, gross margins hit 80-90%. This is why SaaS
            companies trade at such high revenue multiples.
          </p>
          <p className="mt-4 text-base text-foreground/80">
            Agent-powered software breaks this model. Every time an agent
            processes a case file, it consumes inference compute. Every API
            call to an LLM costs real money. The marginal cost per unit of
            work is not zero&mdash;it&apos;s variable and meaningful.
            AI-centric companies typically operate at 50-60% gross margins,
            compared with 80-90% for traditional SaaS.
          </p>
          <p className="mt-4 text-base text-foreground/80">
            But here&apos;s the counterargument: inference costs are falling
            at roughly 10x per year. What costs $1.00 in LLM compute today
            will cost $0.10 next year and $0.01 the year after. The margin
            structure is converging back toward traditional software
            economics, but on a timeline&mdash;and the companies that can
            survive the margin compression now will enjoy enormous operating
            leverage as costs drop.
          </p>
          <p className="mt-4 text-base text-foreground/80">
            More importantly, when you&apos;re pricing on outcomes rather than
            seats, your revenue per customer can be dramatically higher even
            at lower gross margins. A law firm paying $2,000/month for a SaaS
            seat becomes a firm paying $15,000/month for agent-completed work.
            Lower margin percentage, higher absolute margin dollars.
          </p>
        </div>

        {/* The Product Design Implications */}
        <div className="rounded-2xl border border-primary/25 bg-gradient-to-br from-[#04150d] to-[#0a2618] p-6">
          <h2 className="text-2xl font-semibold text-primary">
            What This Means for Product Design
          </h2>
          <p className="mt-4 text-base text-foreground/80">
            If your software&apos;s user is an AI agent, product design
            inverts. The things that used to matter most&mdash;visual design,
            user onboarding, feature discoverability&mdash;matter least. And
            the things that used to be afterthoughts&mdash;API design, error
            handling, output predictability&mdash;matter most.
          </p>
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            {[
              {
                title: "Zero-touch setup",
                desc: "The best agent-native products require no configuration from the end customer. The agent connects to existing systems via API, learns the customer\u2019s patterns from historical data, and starts working. There is no onboarding, no training session, no implementation consultant.",
              },
              {
                title: "No dashboard",
                desc: "If no human is operating the software, there\u2019s no dashboard to build. The human touchpoint is a notification: an email summary, a Slack message, an alert when something needs attention. The product\u2019s only \u201CUI\u201D is a morning briefing.",
              },
              {
                title: "Graceful failure",
                desc: "When software built for humans fails, the human can usually work around it. When software built for agents fails, it must fail safely and loudly. The product must be designed so failure never causes harm\u2014only a reversion to the manual process the agent was replacing.",
              },
              {
                title: "Deterministic outputs",
                desc: "Agents need predictable behavior. An API that returns slightly different formats depending on context is fine for a human who can visually parse the difference. It\u2019s catastrophic for an agent that\u2019s parsing programmatically.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="rounded-xl border border-primary/20 bg-black/40 p-4"
              >
                <div className="text-sm font-semibold text-[#00ff41]">
                  {item.title}
                </div>
                <p className="mt-2 text-sm text-muted-foreground">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* A Concrete Example */}
        <div className="rounded-2xl border border-primary/25 bg-[#04150d] p-6">
          <h2 className="text-2xl font-semibold text-primary">
            A Concrete Example: The Silent Case Auditor
          </h2>
          <p className="mt-4 text-base text-foreground/80">
            To make this tangible, consider a product we think about at
            Possible Minds: an autonomous case auditor for personal injury law
            firms.
          </p>
          <p className="mt-4 text-base text-foreground/80">
            In the old model, a paralegal manually reviews each open case every
            week: checking deadlines, looking for stalled cases, making sure
            medical records have been requested, verifying that clients have
            been contacted. This is tedious, error-prone, and expensive. Firms
            with 500 open cases simply cannot do this consistently.
          </p>
          <p className="mt-4 text-base text-foreground/80">
            In the agent-as-user model, there is no dashboard. There is no
            login. There is no user at all. An AI agent connects to the
            firm&apos;s case management system via API. Every night, it reads
            every open case file. It cross-references statutes of limitations
            by jurisdiction. It flags cases with no activity in 60 days. It
            identifies cases where treatment ended but no demand letter has
            been sent. It checks for missing documents.
          </p>
          <p className="mt-4 text-base text-foreground/80">
            The attorney arrives at 8am to a single email: here are the five
            cases that need your attention today, ranked by urgency, with the
            reason why.
          </p>

          <div className="mt-6 grid gap-3 sm:grid-cols-3">
            {[
              {
                label: "Setup required",
                value: "None",
                detail: "Agent self-configures from CMS API",
              },
              {
                label: "Ongoing operation",
                value: "None",
                detail: "Attorney reads a morning email",
              },
              {
                label: "If it fails",
                value: "No harm",
                detail: "Advisory only; firm is no worse off than before",
              },
            ].map((item) => (
              <div
                key={item.label}
                className="rounded-xl border border-primary/20 bg-black/40 p-4"
              >
                <div className="text-xs uppercase tracking-wider text-muted-foreground">
                  {item.label}
                </div>
                <div className="mt-1 text-lg font-semibold text-[#00ff41]">
                  {item.value}
                </div>
                <p className="mt-1 text-xs text-muted-foreground">
                  {item.detail}
                </p>
              </div>
            ))}
          </div>

          <p className="mt-6 text-base text-foreground/80">
            The software&apos;s only user is the AI agent. The human is the
            beneficiary. And the value proposition isn&apos;t &ldquo;here&apos;s
            a tool you can use&rdquo;&mdash;it&apos;s &ldquo;here&apos;s work
            that&apos;s already been done for you.&rdquo;
          </p>
          <p className="mt-4 text-base text-foreground/80">
            That distinction&mdash;tool versus completed work&mdash;is the
            entire economic shift in one sentence.
          </p>
        </div>

        {/* The Risk Profile */}
        <div className="rounded-2xl border border-primary/25 bg-[#04150d] p-6">
          <h2 className="text-2xl font-semibold text-primary">
            Why the Risk Profile Is Better Than You Think
          </h2>
          <p className="mt-4 text-base text-foreground/80">
            The most common objection is trust. &ldquo;How can I let an AI
            agent do this work unsupervised?&rdquo; But the best agent-native
            products are designed so this objection doesn&apos;t apply.
          </p>

          <div className="mt-6 space-y-4">
            {[
              {
                principle: "Read-only by default",
                explanation:
                  "The agent reads data and produces recommendations. It doesn\u2019t modify cases, send emails, or file documents unless a human explicitly approves. This makes the failure mode \u201Cthe agent gives a bad recommendation, which the attorney ignores\u201D\u2014the same failure mode as a junior associate.",
              },
              {
                principle: "Additive, not replacement",
                explanation:
                  "The agent doesn\u2019t replace a workflow. It adds a layer on top. The firm\u2019s existing processes continue exactly as before. The agent is an overlay that catches what humans miss\u2014not a substitution that eliminates what humans do.",
              },
              {
                principle: "Asymmetric upside",
                explanation:
                  "If the agent catches one statute of limitations issue that would have been missed, it has paid for itself for the next decade. One saved malpractice claim can be worth $100K-$500K. The downside is a monthly subscription. The upside is existential risk prevention.",
              },
            ].map((item) => (
              <div
                key={item.principle}
                className="rounded-xl border border-primary/20 bg-black/40 p-4"
              >
                <div className="text-sm font-semibold text-[#00ff41]">
                  {item.principle}
                </div>
                <p className="mt-2 text-sm text-muted-foreground">
                  {item.explanation}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* The Gartner Custobot Framework */}
        <div className="rounded-2xl border border-primary/25 bg-gradient-to-br from-[#04150d] to-[#0a2618] p-6">
          <h2 className="text-2xl font-semibold text-primary">
            The Bigger Picture: Machines as Customers
          </h2>
          <p className="mt-4 text-base text-foreground/80">
            Gartner analysts Don Scheibenreif and Mark Raskino have developed
            the most comprehensive framework for this shift. They describe
            three phases of what they call &ldquo;machine customers&rdquo; or
            &ldquo;custobots&rdquo;:
          </p>
          <div className="mt-6 grid gap-4 sm:grid-cols-3">
            {[
              {
                phase: "Phase 1",
                title: "Bound",
                desc: "Agents follow explicit, human-defined rules. \u201CReorder printer ink when inventory drops below 10.\u201D The agent is a loyal executor.",
              },
              {
                phase: "Phase 2",
                title: "Adaptable",
                desc: "Agents learn preferences and make judgment calls within boundaries. \u201CFind me the best deal on printer ink, considering quality and delivery time.\u201D",
              },
              {
                phase: "Phase 3",
                title: "Autonomous",
                desc: "Agents independently identify needs and act on them. They notice the printer is aging, research replacements, compare total cost of ownership, and recommend a switch.",
              },
            ].map((item) => (
              <div
                key={item.phase}
                className="rounded-xl border border-primary/20 bg-black/40 p-5"
              >
                <div className="text-xs uppercase tracking-wider text-muted-foreground">
                  {item.phase}
                </div>
                <div className="mt-1 text-base font-semibold text-[#00ff41]">
                  {item.title}
                </div>
                <p className="mt-2 text-sm text-muted-foreground">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
          <p className="mt-6 text-base text-foreground/80">
            Gartner predicts that by 2030, 15-20% of enterprise revenue will
            come from machine customers. The software products that serve these
            machine customers&mdash;that are built for agents as the primary
            user&mdash;represent a new category of infrastructure that barely
            exists today.
          </p>
        </div>

        {/* Who is building this */}
        <div className="rounded-2xl border border-primary/25 bg-[#04150d] p-6">
          <h2 className="text-2xl font-semibold text-primary">
            Who Is Already Building This Way
          </h2>
          <p className="mt-4 text-base text-foreground/80">
            This isn&apos;t theoretical. Several companies are already
            architecting for agent-as-user:
          </p>
          <ul className="mt-4 space-y-4 text-base text-foreground/80">
            {[
              {
                name: "Stripe",
                detail:
                  "rebuilt its interface as an MCP server, letting AI agents manage payments without human intervention.",
              },
              {
                name: "Anthropic",
                detail:
                  "open-sourced the Model Context Protocol and donated it to the Linux Foundation, creating the connective tissue for the agent-native software ecosystem.",
              },
              {
                name: "EvenUp",
                detail:
                  "uses AI to generate demand packages for personal injury law firms\u2014the agent reads medical records and writes the demand letter, the attorney reviews.",
              },
              {
                name: "Decagon",
                detail:
                  "prices customer support AI per resolution, not per seat\u2014a pure outcome-based model that only makes sense when the agent is the user.",
              },
            ].map((item) => (
              <li key={item.name} className="flex items-start gap-3">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#00ff41]" />
                <span>
                  <strong className="text-primary">{item.name}</strong>{" "}
                  {item.detail}
                </span>
              </li>
            ))}
          </ul>
          <p className="mt-4 text-base text-foreground/80">
            The pattern is consistent: the product&apos;s &ldquo;user&rdquo; is
            an AI agent. The human is the supervisor or beneficiary. The pricing
            is tied to outcomes, not access.
          </p>
        </div>

        {/* What to do about it */}
        <div className="rounded-2xl border border-primary/25 bg-[#04150d] p-6">
          <h2 className="text-2xl font-semibold text-primary">
            What This Means If You Build Software
          </h2>
          <p className="mt-4 text-base text-foreground/80">
            If you&apos;re building software today, the strategic question
            isn&apos;t whether to add AI features. It&apos;s whether your
            product will be consumed by humans or by agents&mdash;and designing
            accordingly.
          </p>
          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                num: "1",
                title: "API before UI",
                desc: "Design your API as the primary product surface. If your value can only be accessed through a GUI, agents can\u2019t use you.",
              },
              {
                num: "2",
                title: "Price on work done",
                desc: "Move from seats to outcomes. If an agent does the work 100x faster, your pricing should reward that, not penalize it.",
              },
              {
                num: "3",
                title: "Design for zero-touch",
                desc: "The best agent-native products require no setup from the buyer. The agent figures out the context from the data already available.",
              },
              {
                num: "4",
                title: "Make failure safe",
                desc: "Build products where the failure mode is \u201Cno value added\u201D rather than \u201Cvalue destroyed.\u201D Read-only by default. Additive, not replacement.",
              },
              {
                num: "5",
                title: "Publish your protocol",
                desc: "Expose capabilities via MCP or similar standards. Make your product discoverable by agents, not just by humans browsing your website.",
              },
              {
                num: "6",
                title: "Think in labor budgets",
                desc: "Your TAM isn\u2019t the software budget. It\u2019s the labor budget for the work your agent performs. That\u2019s a much larger number.",
              },
            ].map((item) => (
              <div
                key={item.num}
                className="rounded-xl border border-primary/20 bg-black/40 p-5"
              >
                <div className="text-3xl font-semibold text-[#00ff41]">
                  {item.num}
                </div>
                <div className="mt-2 text-base font-semibold text-primary">
                  {item.title}
                </div>
                <p className="mt-2 text-sm text-muted-foreground">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* What it means if you buy software */}
        <div className="rounded-2xl border border-primary/25 bg-gradient-to-br from-[#04150d] to-[#0a2618] p-6">
          <h2 className="text-2xl font-semibold text-primary">
            What This Means If You Buy Software
          </h2>
          <p className="mt-4 text-base text-foreground/80">
            If you run a business that buys software&mdash;especially in
            operations-heavy industries like healthcare, legal, or
            finance&mdash;the implication is freeing. The best tools of the
            next five years will not require you to learn anything. They
            won&apos;t require your team to change their workflow. They
            won&apos;t require an implementation project.
          </p>
          <p className="mt-4 text-base text-foreground/80">
            Instead, you&apos;ll connect them to your existing systems, and
            work will start getting done. Not &ldquo;here&apos;s a tool that
            can help if you use it right.&rdquo; But &ldquo;here is work that
            has been completed. Would you like to review it?&rdquo;
          </p>
          <p className="mt-4 text-base text-foreground/80">
            The difference between those two sentences is the entire economic
            shift of the next decade.
          </p>
        </div>

        {/* Closing */}
        <div className="rounded-2xl border border-primary/25 bg-[#04150d] p-6">
          <h2 className="text-2xl font-semibold text-primary">
            The Transition Is Now
          </h2>
          <p className="mt-4 text-base text-foreground/80">
            We&apos;re in the early innings. Most software is still built for
            humans. Most pricing is still per-seat. Most distribution still
            happens through Google Ads and sales calls. But the underlying
            economics have already shifted.
          </p>
          <p className="mt-4 text-base text-foreground/80">
            AI agent adoption in enterprises is projected to leap from under
            5% in 2025 to 40% by the end of 2026. Inference costs are dropping
            10x annually. Protocol standards like MCP are maturing. The
            infrastructure for agent-native software is being built right now.
          </p>
          <p className="mt-4 text-base font-semibold text-primary">
            The question for every software company&mdash;and every business
            that buys software&mdash;is simple: are you building for the human
            who operates the tool, or for the agent that does the work?
          </p>
          <p className="mt-4 text-base text-foreground/80">
            The economics say the answer is increasingly the latter. The
            companies that internalize this first won&apos;t just build better
            products. They&apos;ll build products for a market that&apos;s
            eighteen times larger than the one they&apos;re in today.
          </p>
        </div>

        {/* CTA */}
        <div className="rounded-2xl border border-primary/25 bg-gradient-to-br from-[#04150d] to-[#0a2618] p-6">
          <h2 className="text-2xl font-semibold text-primary">
            We&apos;re building agent-native software for regulated industries
          </h2>
          <p className="mt-4 text-base text-foreground/80">
            At Possible Minds, we build AI agents that do the work&mdash;not
            tools that help humans do it. Our products connect to your existing
            systems, require zero setup, and deliver completed work for review.
            If you run a healthcare or legal operation, we should talk.
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
