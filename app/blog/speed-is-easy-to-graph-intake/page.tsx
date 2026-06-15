import { Metadata } from "next";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { BLOG_POSTS_BY_SLUG } from "@/lib/blog";
import { CALENDLY_URL, SITE_NAME } from "@/lib/constants";

export const metadata: Metadata = {
  title: `Speed Is Easy to Graph: The Intake Metric PI Firms Keep Optimizing Wrong | ${SITE_NAME}`,
  description:
    "Industry-wide, only 7% of personal injury leads set a consultation. Firms respond by making intake faster. The best intake thinkers are converging on a different answer: stability, not speed, is what converts.",
};

export default function BlogPostPage() {
  const post = BLOG_POSTS_BY_SLUG["speed-is-easy-to-graph-intake"];

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
              <span>Intake Operations</span>
            </div>
            <h1 className="text-4xl font-semibold leading-tight tracking-tight text-[#00ff41] sm:text-5xl lg:text-6xl">
              Speed Is Easy to Graph: The Intake Metric PI Firms Keep Optimizing Wrong
            </h1>
            <p className="max-w-3xl text-base text-foreground/80 sm:text-lg">
              Industry-wide, only 7% of personal injury leads ever set a consultation. Most firms respond by making intake faster. The sharpest intake thinkers are converging on a different answer: stability, not speed, is what actually converts.
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

      <article className="mx-auto max-w-4xl space-y-12 px-4 pt-12 text-foreground/85 sm:px-6">
        <section className="space-y-4">
          <p>
            We read a lot of what personal injury operators write &mdash; intake newsletters, agency blogs, practice-management Substacks &mdash; because the people running these workflows every day usually see the problems before the vendors do. Over the past few months, two independent voices have been circling the same uncomfortable conclusion about intake. It&apos;s worth putting their arguments side by side.
          </p>
          <p>
            Start with a number from{" "}
            <a
              href="https://rankings.io/blog/personal-injury-marketing-ideas/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary underline-offset-4 hover:underline"
            >
              Rankings.io&apos;s 2026 marketing guide
            </a>
            : industry-wide, only <strong>7% of personal injury firm leads actually set a consultation appointment</strong>. Their conclusion is blunt: &quot;If you&apos;re below that, the problem isn&apos;t your marketing. It&apos;s your intake.&quot;
          </p>
          <p>
            Sit with that. Firms spend six and seven figures a year generating phone calls, then lose more than nine out of ten of them after the phone rings. Every marketing dollar is being multiplied by an intake conversion rate nobody is managing as carefully as the ad spend.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-[#00ff41]">
            The administrative model problem
          </h2>
          <p>
            Why does intake leak this badly? Daniel Roche, who writes one of the most operationally serious intake Substacks in the industry, has a diagnosis:{" "}
            <a
              href="https://danielroche3.substack.com/p/training-an-intake-department-to"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary underline-offset-4 hover:underline"
            >
              &quot;Most intake departments still run on an administrative model&quot;
            </a>{" "}
            &mdash; staffed and trained to <em>collect information</em>, not to <em>convert a person in distress into a client</em>. The result, in his words: firms &quot;continue to lose potential business during intake through weak engagement and inconsistent follow-up.&quot;
          </p>
          <p>
            An administrative intake answers the phone, fills the form, and promises a callback. A conversion intake engages the caller&apos;s actual situation, builds enough trust to ask for commitment, and follows up like the case matters. The two look identical on a staffing chart. They produce wildly different signed-case numbers from the same ad spend.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-[#00ff41]">
            Speed gets credit while stability does the work
          </h2>
          <p>
            Here&apos;s where it gets counterintuitive. The standard fix for leaky intake is speed: shorter pickup times, faster routing, faster first contact. Roche&apos;s{" "}
            <a
              href="https://danielroche3.substack.com/p/speed-gets-credit-while-stability"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary underline-offset-4 hover:underline"
            >
              recent essay
            </a>{" "}
            takes direct aim at this: &quot;Speed-focused intake improvements tend to chase visible metrics &mdash; shorter pickup, faster routing, faster first contact, and higher touches per rep.&quot;
          </p>
          <p>
            And then the line that names the whole dynamic:
          </p>
          <blockquote className="border-l-2 border-primary/40 pl-6 text-lg italic text-foreground/90">
            &quot;Speed will keep winning the day because speed is easy to graph. Stability wins the quarter because it reduces the amount of recovery labor the firm keeps paying for.&quot;
          </blockquote>
          <p>
            What does instability look like from the client&apos;s side? Roche describes it precisely: when intake delivers &quot;different versions of the same promise,&quot; the caller&apos;s attention shifts &quot;away from the process and toward the inconsistency itself.&quot; Then comes the behavior every intake manager has watched without naming: &quot;the client starts checking the system for reliability, asking for repeats, confirming details that were already given, and delaying commitment until the pattern stabilizes.&quot;
          </p>
          <p>
            Delaying commitment. That&apos;s the 7% number, explained from the inside. The lead didn&apos;t go cold because you called back four minutes late. It went cold because three different people told it three slightly different things, and somewhere in the gap between those versions, trust quietly left the building.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-[#00ff41]">
            One caller, five records
          </h2>
          <p>
            There&apos;s a structural reason firms drift into inconsistency. In{" "}
            <a
              href="https://danielroche3.substack.com/p/privacy-laws-are-moving-faster-than"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary underline-offset-4 hover:underline"
            >
              another piece
            </a>
            , Roche traces what happens to a single caller&apos;s information as it moves through a typical firm: &quot;Soon, the same caller&apos;s information is sitting in five places, shaped five different ways, and carrying five different levels of visibility.&quot;
          </p>
          <p>
            Five records means five versions of the promise. Whoever picks up next works from whichever version they can find. The inconsistency the client experiences isn&apos;t a training failure &mdash; it&apos;s an architecture failure. No amount of coaching fixes a system where the ground truth forks every time someone touches it.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-[#00ff41]">
            What this means for AI intake (and most vendors get it backwards)
          </h2>
          <p>
            Almost every AI intake product is demoed on speed: the call answered instantly, at 2am, in two languages. Speed is real &mdash; after-hours coverage matters, and a lead that hits voicemail at 9pm signs with whoever answers first. But if Roche is right &mdash; and our experience building intake systems says he is &mdash; speed is the entry fee, not the advantage. The advantage is that <strong>software is structurally incapable of promise drift</strong>.
          </p>
          <p>
            A well-built AI intake system gives the same answers, in the same order, with the same commitments, on the thousandth call as on the first. It writes to one record, not five. It never tells Tuesday&apos;s caller something different from Monday&apos;s caller. The consistency that takes an intake team years of training and QA to approximate is the default behavior of a system &mdash; <em>if</em> it&apos;s built as a system with one source of truth, rather than another tool bolted onto the pile that creates a sixth copy of the caller&apos;s information.
          </p>
          <p>
            So if you&apos;re evaluating AI intake &mdash; ours or anyone&apos;s &mdash; the questions that matter are stability questions:
          </p>
          <ul className="list-disc space-y-2 pl-6 text-foreground/75">
            <li><strong>Where does the conversation record live,</strong> and does it merge into your case management system or fork beside it?</li>
            <li><strong>What exactly does it promise callers,</strong> and can you read every promise it has ever made?</li>
            <li><strong>How does it hand off exceptions</strong> &mdash; and does the human picking up see the full, single record?</li>
            <li><strong>Does the morning queue arrive qualified and consistent,</strong> or is it a pile of transcripts someone now has to reconcile?</li>
          </ul>
          <p>
            Ask a vendor about answer speed and they&apos;ll show you a stopwatch. Ask about promise consistency and record unification, and you&apos;ll find out very quickly whether they&apos;ve built a tool or a system.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-[#00ff41]">
            The quarter beats the day
          </h2>
          <p>
            The 7% industry consult-set rate isn&apos;t a marketing problem, and it isn&apos;t a speed problem. It&apos;s what an administrative intake model plus fragmented records plus promise drift looks like when you finally measure the output. The firms that fix it won&apos;t be the ones with the fastest pickup time on the dashboard. They&apos;ll be the ones whose intake says the same true thing every time, at 2pm and 2am, until committing feels safe.
          </p>
          <p>
            Speed is easy to graph. Build for the quarter instead.
          </p>
        </section>

        <section className="rounded-2xl border border-primary/20 bg-gradient-to-br from-[#04150d] to-black p-8 text-center">
          <h2 className="mb-3 text-2xl font-semibold text-[#00ff41]">
            Want Intake That Doesn&apos;t Drift?
          </h2>
          <p className="mb-6 text-foreground/70">
            We build AI intake systems for PI firms &mdash; voice, chat, and email &mdash; designed around one record, consistent promises, and clean handoffs to your team.
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
