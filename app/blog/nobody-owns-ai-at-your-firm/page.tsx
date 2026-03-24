import { Metadata } from "next";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { CALENDLY_URL, SITE_NAME } from "@/lib/constants";

export const metadata: Metadata = {
  title: `Nobody Owns AI at Your Firm (And That's Why It's Failing) | ${SITE_NAME}`,
  description:
    "80% of law firms can't show ROI from AI investments. The problem isn't the tools — it's that nobody owns the strategy. Here's what the most successful PI firms are doing differently.",
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
              Nobody Owns AI at Your Firm (And That&apos;s Why It&apos;s Failing)
            </h1>
            <p className="max-w-3xl text-base text-foreground/80 sm:text-lg">
              80% of law firms can&apos;t show ROI from AI investments. The problem isn&apos;t the tools &mdash; it&apos;s that nobody owns the strategy. Here&apos;s what the most successful PI firms are doing differently.
            </p>
            <div className="flex flex-wrap gap-3 text-xs text-muted-foreground">
              {["Pranav Modi", "March 24, 2026", "8 min read"].map((item) => (
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
          <h2 className="text-2xl font-semibold text-[#00ff41]">
            The $350,000 Question Nobody&apos;s Asking
          </h2>
          <p>
            Eighty percent of law firms cannot articulate a clear return on investment from their AI spending. Not because the tools are bad. Not because the technology isn&apos;t ready. Because nobody at the firm owns the strategy.
          </p>
          <p>
            This shouldn&apos;t surprise anyone who&apos;s watched how law firms adopt technology. A partner reads about ChatGPT, tests it on a deposition summary, gets excited, tells the team to &quot;start using AI.&quot; Three months later, two paralegals have ChatGPT tabs open and everyone else has forgotten about it. The firm just spent six figures on tools that gather dust in a drawer labeled &quot;innovation.&quot;
          </p>
          <p>
            <a href="https://www.linkedin.com/in/andystickel/" target="_blank" rel="noopener noreferrer" className="text-[#00ff41] hover:underline">Andy Stickel</a>, who has worked with over 176 law firms on growth strategy, puts it bluntly: the number one mistake law firm owners make when implementing AI is not having someone who owns it. &quot;As soon as someone owned it, results picked up 10x faster,&quot; he says. &quot;This saved us thousands of hours &mdash; thousands of hours of research, thousands of hours of testing different vendors, hours of team interviews and workflow analysis.&quot;
          </p>
          <p>
            The pattern is identical to every other operational challenge a law firm has ever faced. Marketing was chaos until you hired a marketing director. Intake leaked cases until you appointed an intake manager. Finances were a black box until you brought on a CFO. AI is no different &mdash; except the stakes are higher.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-[#00ff41]">
            Two Firms, Same Tools, Opposite Outcomes
          </h2>
          <p>
            Consider two personal injury firms, both with access to the same AI tools, similar caseloads, comparable budgets.
          </p>
          <p>
            Firm A is typical. The managing partner heard about AI at a conference. Partners test different tools independently &mdash; one uses ChatGPT for demand letters, another tries an AI call answering service, a paralegal experiments with document review software. Nothing connects. Nobody measures results. Nobody maps how Tool A should feed into Tool B. Six months later, the firm can&apos;t tell you whether AI saved a single dollar or signed a single additional case.
          </p>
          <p>
            Now look at <a href="https://www.linkedin.com/in/michaelmccready/" target="_blank" rel="noopener noreferrer" className="text-[#00ff41] hover:underline">Michael McCready</a>&apos;s firm, McCready Law. McCready runs a 100-person PI operation across six offices in the Midwest. His caseload doubled in 18 months. His marketing spend sits at 7.5% of revenue &mdash; compared to the 25&ndash;35% that most PI firms hemorrhage on advertising. The difference isn&apos;t budget or sophistication. It&apos;s that someone obsessively owns the technology strategy.
          </p>
          <p>
            &quot;At the end of the day, anything we can do to create efficiencies and expand our man-hours &mdash; the less time we have to spend on a case increases our profit and increases our ability to handle more cases,&quot; McCready explains. His team has built over 200 automated client touchpoints and custom GPTs tailored to each attorney&apos;s preferences. One lawyer wants deposition summaries with page-and-line citations. Another wants high-level overviews. The GPTs are configured for each.
          </p>
          <p>
            &quot;Anytime Michael requests a deposition summary, this is the format we want you to use. Anytime Jess asks for a deposition, this is the way he likes it,&quot; McCready says. This isn&apos;t a firm that bought an AI tool. It&apos;s a firm where one person mapped every workflow and decided exactly where automation belongs.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-[#00ff41]">
            The Hamster Wheel of &quot;Testing Cool Tools&quot;
          </h2>
          <p>
            Most firm owners are stuck in what Stickel calls the &quot;testing cool tools&quot; phase. They see a demo, get excited, buy a license, and add it to the pile. But testing isn&apos;t implementing. Without someone who understands the full picture &mdash; how intake connects to case management, how case management connects to settlement workflows, how client communication threads through all of it &mdash; each tool exists in isolation.
          </p>
          <p>
            The analogy from traditional business applies perfectly. You wouldn&apos;t let five different people run marketing with no coordinator and no shared strategy. You wouldn&apos;t have three paralegals each using different systems for the same task. Yet that&apos;s exactly what most firms do with AI.
          </p>
          <p>
            &quot;A lot of law firm owners are still looking at this as &apos;what are the cool AI tools I can test,&apos;&quot; Stickel observes. &quot;But those who are early movers are starting to test different tools here and there. The big question is: how does it get implemented? How does it all talk to one another? How does it all centralize into your CRM? And ultimately &mdash; who owns it?&quot;
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-[#00ff41]">
            You Can&apos;t Automate What You Haven&apos;t Documented
          </h2>
          <p>
            Here&apos;s the prerequisite nobody talks about: you can&apos;t layer AI onto chaos. If your firm doesn&apos;t have documented processes, AI will automate your dysfunction faster.
          </p>
          <p>
            <a href="https://www.linkedin.com/in/chrisronzio/" target="_blank" rel="noopener noreferrer" className="text-[#00ff41] hover:underline">Chris Ronzio</a>, CEO of Trainual and an expert in operational systems, makes the distinction that most firms miss: &quot;There&apos;s the how-to&apos;s and there&apos;s the to-do&apos;s. Your to-do&apos;s happen in Salesforce or Filevine. But the how-to&apos;s happen in your training platform.&quot; AI sits on top of both &mdash; but only if the foundation exists.
          </p>
          <p>
            Most firms skip straight to buying AI tools without first mapping what their people actually do, how they do it, and where the bottlenecks live. Ronzio has seen this across hundreds of companies: knowledge lives in people&apos;s heads, not in systems. When those people leave, the knowledge walks out the door.
          </p>
          <p>
            &quot;When you come into something and it says, here&apos;s a hundred percent of what you need to know to do your job well, and you&apos;ve got ten days to do it &mdash; that&apos;s profit straight to the bottom line,&quot; Ronzio says. Without that baseline, AI has nothing to optimize.
          </p>
          <div className="rounded-xl border border-primary/20 bg-[#04150d]/60 px-6 py-5">
            <p className="text-sm leading-relaxed text-foreground/75">
              The framework is sequential: Document &rarr; Systematize &rarr; Then Automate. Firms that reverse this order &mdash; automating before documenting &mdash; end up with expensive tools running on tribal knowledge. When a key person quits, the whole thing collapses.
            </p>
          </div>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-[#00ff41]">
            The 33% Problem: When Automation Destroys Your Brand
          </h2>
          <p>
            There&apos;s a darker side to the &quot;nobody owns it&quot; problem. Without strategic oversight, firms over-automate in places that actively hurt them.
          </p>
          <p>
            Here&apos;s a number that should make every firm owner pause: 33% of people who call a law firm hang up immediately when they realize AI is handling the call. One in three potential clients &mdash; gone before you even know they existed.
          </p>
          <p>
            Stickel has seen this firsthand with the firms he advises. &quot;Some of the bigger firms we work with &mdash; including one that has 150 virtual assistants &mdash; are not switching to AI call answering. They believe their brand is more important than marginal cost savings and the potential loss of a multimillion-dollar case because the AI hallucinates.&quot;
          </p>
          <p>
            This is what happens when nobody owns the strategy. A firm reads that AI call answering saves money, deploys it across all inbound lines, and never measures the cases that quietly disappeared. Meanwhile, intake staff at competing firms are opening calls with, &quot;Yes, I am a real human, not an AI&quot; &mdash; and winning the clients who bounced.
          </p>
          <p>
            McCready draws a sharp line on this. His 200+ automations handle the routine &mdash; appointment reminders, settlement check status updates, document requests. But when it matters, humans step in. &quot;When we get an offer on a case, the lawyer talks to the client. I don&apos;t want a text that says &apos;I got an offer of $25,000.&apos; You call the client. You explain all of that.&quot;
          </p>
          <div className="rounded-xl border border-primary/20 bg-[#04150d]/60 px-6 py-5">
            <p className="text-sm leading-relaxed text-foreground/75">
              The firms getting this right aren&apos;t the most automated. They&apos;re the ones where someone decided &mdash; deliberately, strategically &mdash; where automation belongs and where it doesn&apos;t.
            </p>
          </div>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-[#00ff41]">
            What a Chief AI Officer Actually Does
          </h2>
          <p>
            The title doesn&apos;t matter &mdash; Chief AI Officer, fractional CTO, Director of Technology. What matters is the function. One person who audits every department&apos;s workflows, identifies where AI creates leverage versus where it creates risk, selects tools based on actual needs rather than vendor demos, builds integrations so everything talks to each other, and measures results ruthlessly.
          </p>
          <p>
            Stickel frames the hiring decision as a spectrum. You can hire a recent graduate for $100K &mdash; but they won&apos;t have the industry wisdom to know which tools to implement. You can hire a full-time CTO for $350K &mdash; but most firms can&apos;t justify that salary. The sweet spot is fractional: someone who brings deep expertise without the full-time cost.
          </p>
          <p>
            &quot;I would argue these benefits outweigh the benefits of any of those other roles,&quot; Stickel says, comparing AI ownership to marketing directors, intake managers, and COOs. &quot;AI implementation can potentially take a firm from 15&ndash;20% profit margins to 35&ndash;40%. Take a firm already at 40% to 80%.&quot;
          </p>
          <p>
            The math gets more interesting when you consider firm valuation. The average law firm trades at 3&ndash;5x EBITDA. But a firm with proprietary AI workflows &mdash; where tools are integrated, processes are documented, and the whole system runs without depending on any single person &mdash; starts to look less like a law firm and more like a tech company.
          </p>
          <p>
            &quot;I believe there&apos;s a world where law firms become so much more valuable than they historically have been,&quot; Stickel says. That world arrives faster when someone owns the transformation.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-[#00ff41]">
            The Uncomfortable Truth
          </h2>
          <p>
            You cannot put this on your existing team. Your paralegals are busy with cases. Your office manager is keeping the lights on. Your partners are litigating. None of them have time to research AI tools, analyze workflows across every department, and rebuild processes from scratch. Asking them to is a recipe for the exact hamster wheel you&apos;re already on.
          </p>
          <p>
            You also can&apos;t do it yourself. If you&apos;re a managing partner spending your time evaluating AI vendors instead of working cases or building the business, something critical is being neglected.
          </p>
          <p>
            The firms that will lead the next decade of personal injury law aren&apos;t the ones with the biggest marketing budgets or the most lawyers. They&apos;re the ones that answered a simple question: who owns AI here?
          </p>
          <p>
            McCready answered it by making technology a core firm value and personally driving 200+ automations. Some firms will answer it by hiring a fractional CTO. Others will partner with an outside firm that brings both the expertise and the implementation. The mechanism matters less than the commitment.
          </p>
          <p>
            &quot;Go do this today,&quot; Stickel says, &quot;and I promise you your firm will be a completely different animal in just a year&apos;s time.&quot;
          </p>
        </section>

        <section className="rounded-2xl border border-primary/20 bg-gradient-to-br from-[#04150d] to-black p-8 text-center">
          <h2 className="mb-3 text-2xl font-semibold text-[#00ff41]">
            Stop Buying AI Tools. Start Building AI Strategy.
          </h2>
          <p className="mb-6 text-foreground/70">
            Possible Minds works as your firm&apos;s fractional AI partner &mdash; auditing workflows, selecting the right tools, building integrations, and measuring what matters. No more random experiments. No more shelfware. One person owns it, and it gets done.
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
