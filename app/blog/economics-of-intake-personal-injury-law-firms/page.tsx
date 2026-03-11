import { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { CALENDLY_URL, SITE_NAME } from "@/lib/constants";

export const metadata: Metadata = {
  title: `The Economics of Intake: Why Your Most Expensive Employee Is Your Phone | ${SITE_NAME}`,
  description: "Intake is the highest-leverage function in a PI law firm, yet most firms treat it as an administrative cost center. Here's how the math actually works — and what changes when you get it right.",
};

export default function BlogPostPage() {
  const pills = ["Pranav Modi", "March 11, 2026", "7 min read"];

  return (
    <div className="bg-black pb-24">
      <section className="relative overflow-hidden bg-gradient-to-b from-[#050315] to-black">
        <div className="relative mx-auto max-w-4xl px-4 py-20 sm:px-6">
          <div className="space-y-5">
            <div className="flex items-center gap-3 text-xs text-muted-foreground">
              <Link href="/blog" className="transition hover:text-primary">Blog</Link>
              <span className="text-primary/40">/</span>
              <span>Industry Analysis</span>
            </div>
            <h1 className="text-4xl font-semibold leading-tight tracking-tight text-primary sm:text-5xl lg:text-6xl">
              The Economics of Intake: Why Your Most Expensive Employee Is Your Phone
            </h1>
            <p className="max-w-3xl text-base text-foreground/80 sm:text-lg">
              Intake is the highest-leverage function in a PI law firm, yet most firms treat it as an administrative cost center. Here&apos;s how the math actually works — and what changes when you get it right.
            </p>
            <div className="flex flex-wrap gap-3 text-xs text-muted-foreground">
              {pills.map((item) => (
                <span key={item} className="rounded-full border border-primary/20 bg-black/30 px-3 py-1">{item}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <article className="mx-auto max-w-3xl space-y-12 px-4 py-16 text-foreground/85 sm:px-6">
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-primary">Intake Is Not Administration. It&apos;s Underwriting.</h2>
          <p>Most PI firms think of intake as a front-desk function — answer the phone, collect some details, pass it to an attorney for review. This framing is quietly catastrophic. Intake is the moment where your firm decides which cases to invest in, and every case you sign is a bet: you&apos;re fronting months or years of attorney time, lien costs, and operational overhead against a future contingency fee that may never materialize.</p>
          <p>Insurance companies understand this perfectly. They have actuaries, claims adjusters, and statistical models determining which claims to fight and which to settle. The plaintiff&apos;s side of that equation — your firm — often makes the equivalent decision based on a 90-second phone call with a $17/hour intake specialist who&apos;s juggling three other lines.</p>
          <p>When you reframe intake as underwriting rather than administration, the economics shift dramatically. You stop asking &apos;how do we answer more calls?&apos; and start asking &apos;how do we make better bets, faster?&apos;</p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-primary">The Real Cost of a Missed Call</h2>
          <p>The industry statistic everyone cites is that 35-50% of PI leads go to the first firm that answers the phone. That number is directionally correct, but it understates the problem. The real cost isn&apos;t the one call you missed — it&apos;s the selection bias you&apos;ve introduced into your entire caseload.</p>
          <p>Consider a firm spending $800,000 a year on marketing across TV, LSA, and paid search. If intake captures 70% of those leads (a generous assumption for most firms), you&apos;re letting $240,000 in marketing spend evaporate. But the leads you miss aren&apos;t random. They skew toward after-hours callers, Spanish-speaking prospects, and people who won&apos;t leave voicemails — which in many markets are disproportionately your highest-value motor vehicle accident cases.</p>
          <p>We worked with a 12-attorney firm in Texas that tracked this rigorously for six months. Their after-hours missed calls had a 22% higher average case value than business-hours intake. The reason was straightforward: people involved in serious accidents at night or on weekends were calling from ERs or getting discharged and calling immediately. These weren&apos;t tire-kickers browsing Google at 2 PM. They were high-urgency, high-severity cases — exactly the ones you want.</p>
          <p>The firm was effectively running a filter that systematically rejected its best cases.</p>
        </section>

        <div className="rounded-xl border border-primary/20 bg-[#050315]/60 px-6 py-5">
          <p className="text-sm leading-relaxed text-foreground/75">Your missed calls aren&apos;t random. They&apos;re systematically biased toward your most valuable cases.</p>
        </div>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-primary">Unit Economics: What Intake Actually Costs You</h2>
          <p>Let&apos;s build a simple model. A mid-size PI firm signs roughly 30-50 new cases per month. Each signed case requires, on average, 3-5 intake conversations (initial call, follow-up, document collection, retainer signing). Behind those signed cases are another 100-200 leads that needed to be screened and either qualified or rejected.</p>
          <p>Staff that process: two full-time intake specialists at $45,000 each, a supervisor at $65,000, plus benefits, software licenses, phone systems, and training. Call it $200,000 annually, fully loaded. Add your answering service for after-hours at $2,000-4,000/month. You&apos;re at roughly $250,000/year for intake operations.</p>
          <p>Now divide that by your signed cases. At 40 cases per month (480/year), you&apos;re spending about $520 per signed case on intake alone — before the attorney touches it. That number looks manageable until you realize two things: first, your intake team&apos;s capacity is your growth ceiling. Signing 60 cases a month means hiring another specialist, finding desk space, and hoping the new hire reaches competency before your marketing spend outpaces your intake capacity. Second, every intake specialist is a single point of failure for quality. One bad week from your best screener and you&apos;ve signed three soft-tissue cases you should have declined or rejected a TBI case worth seven figures.</p>
        </section>

        <ul className="list-disc space-y-2 pl-6 text-foreground/75">
          <li>Average fully-loaded intake cost: $500-700 per signed case</li>
          <li>Intake specialist ramp time to competency: 3-6 months</li>
          <li>Typical after-hours coverage gap: 14+ hours on weekdays, all weekend</li>
          <li>Lead-to-sign conversion rate (industry average): 8-15%</li>
        </ul>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-primary">The Conversion Rate Nobody Talks About</h2>
          <p>PI firms obsess over two numbers: cost per lead and cost per signed case. Almost nobody tracks the metric that connects them — stage-by-stage conversion through the intake funnel. And it matters enormously, because small improvements in conversion compound in ways that dwarf what you can achieve by spending more on marketing.</p>
          <p>Here&apos;s a concrete example. Firm A spends $1,200 per signed case on marketing and converts leads at 10%. Firm B spends the same $1,200 but converts at 14%. That 4-percentage-point difference means Firm B signs 40% more cases from the same marketing budget. At an average case value of $15,000 in fees, that&apos;s an additional $2.5 million in annual revenue on a $500K marketing spend. No additional ad dollars required.</p>
          <p>The levers for improving conversion are surprisingly mundane. Speed to first contact. Consistent follow-up cadence (most firms attempt contact 2-3 times; the data says 5-7 attempts over 48 hours is optimal). Bilingual capability. Warm transfers instead of callback promises. Structured qualification scripts that don&apos;t feel like scripts. None of this is revolutionary. But doing all of it, consistently, at 11 PM on a Saturday, is where human-only intake operations break down.</p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-primary">Where AI Fits (and Where It Doesn&apos;t)</h2>
          <p>The honest answer about AI in intake is more nuanced than most vendors will tell you. AI is exceptionally good at three things in this context: answering every call instantly regardless of time or volume, conducting structured screening conversations in multiple languages, and routing qualified leads to the right human with full context attached. Those three capabilities alone address the majority of the economic leakage we&apos;ve described.</p>
          <p>Where AI still needs a human in the loop: complex empathy moments (a caller describing a child&apos;s injury), negotiating retainer terms with a sophisticated client, and judgment calls on borderline cases where the facts are ambiguous. The firms getting the best results aren&apos;t replacing their intake team — they&apos;re restructuring it. AI handles first contact, screening, and after-hours coverage. Human specialists focus on conversion: the high-touch conversations that turn a qualified lead into a signed retainer.</p>
          <p>This hybrid model typically reduces intake staffing costs by 30-40% while improving lead capture rates by 50% or more. But the real ROI isn&apos;t in cost savings. It&apos;s in the cases you&apos;re currently losing — the after-hours calls, the Spanish-speaking prospects, the leads that needed a fifth follow-up attempt that nobody made.</p>
        </section>

        <div className="rounded-xl border border-primary/20 bg-[#050315]/60 px-6 py-5">
          <p className="text-sm leading-relaxed text-foreground/75">The best AI implementations don&apos;t replace your intake team. They restructure it — letting humans focus on the conversations that actually require a human.</p>
        </div>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-primary">The Strategic Question</h2>
          <p>If you&apos;re a managing partner reading this, the question isn&apos;t whether to improve intake. The math is too obvious. The question is whether to build or buy — and how fast to move.</p>
          <p>Building an optimized intake operation internally is possible but slow. You need call tracking, CRM integration, structured scripts, bilingual staff, 24/7 coverage, and analytics to measure what&apos;s working. Most firms that attempt this spend 12-18 months and $150,000-300,000 before they see meaningful results.</p>
          <p>The firms that are pulling ahead right now are the ones that recognized something counterintuitive: intake is simultaneously too important to neglect and too operationally complex to be your core competency. A PI attorney&apos;s competitive advantage is case selection, litigation strategy, and negotiation skill — not phone operations. The smart move is to get the intake economics right, by whatever means gets you there fastest, and redirect your attention to the cases that are now flowing in.</p>
        </section>


        <section className="rounded-2xl border border-primary/20 bg-gradient-to-br from-[#050315] to-black p-8 text-center">
          <h2 className="mb-3 text-2xl font-semibold text-primary">Find Out What Your Intake Is Actually Costing You</h2>
          <p className="mb-6 text-foreground/70">We&apos;ll analyze your current intake metrics — call volume, response times, conversion rates, and after-hours coverage — and show you exactly where cases are falling through. No pitch deck, just math. Book a 30-minute working session.</p>
          <Button asChild size="lg" className="rounded-full">
            <a href={CALENDLY_URL} target="_blank" rel="noopener noreferrer">Book a Free Strategy Call</a>
          </Button>
        </section>
      </article>
    </div>
  );
}
