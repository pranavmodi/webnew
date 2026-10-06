import { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { BlogTableOfContents } from "@/components/blog/table-of-contents";
import { JsonLd } from "@/components/seo/json-ld";
import { BLOG_POSTS_BY_SLUG } from "@/lib/blog";
import { SITE_URL } from "@/lib/constants";

const slug = "measure-ai-roi-personal-injury-firms";
const post = BLOG_POSTS_BY_SLUG[slug];
const pageUrl = `${SITE_URL}/blog/${slug}`;
const sourceUrl = "https://abovethelaw.com/2026/09/roi-is-dead-long-live-roi/";
const linkStyle = "text-primary underline decoration-primary/40 underline-offset-4 hover:decoration-primary";
const sectionStyle = "scroll-mt-28 space-y-5 border-t border-white/15 pt-9";
const headingStyle = "text-2xl font-semibold leading-tight text-white sm:text-3xl";

const contents = [
  { id: "where-time-goes", label: "Where did the saved time go?" },
  { id: "seven-questions", label: "Seven questions for your firm" },
  { id: "intake-example", label: "An intake example, without invented returns" },
  { id: "count-the-cost", label: "Count the full cost" },
  { id: "start-small", label: "A manageable way to measure" },
  { id: "sources", label: "Framework credit and research limits" },
];

const scorecard = [
  {
    title: "Are clients getting answers sooner?",
    lens: "Responsiveness",
    example: "For client updates, measure the time from a question arriving to a useful, accurate answer. An immediate acknowledgment can help, but it does not resolve the question.",
    measure: "Time to resolution; overdue replies; repeat calls about the same issue.",
  },
  {
    title: "Can the same team handle more work well?",
    lens: "Capacity",
    example: "If records preparation gets faster, does the team complete more reviewed chronologies, or does a larger queue collect on the attorney's desk?",
    measure: "Reviewed work completed; backlog; staff overtime; correction rate.",
  },
  {
    title: "What useful work can you now afford to do?",
    lens: "Previously impractical work",
    example: "Perhaps staff can now check every open file for missing records instead of checking only when someone complains. Record what those checks uncover and whether anyone acts on it.",
    measure: "Files checked; verified gaps resolved; outsourcing actually avoided.",
  },
  {
    title: "Is the work getting better?",
    lens: "People and quality",
    example: "A chronology that takes ten minutes to generate and an hour to repair is a poor result. Review comparable samples for missing visits, wrong dates, and unsupported statements.",
    measure: "Material errors; review time; staff ability to explain and verify the work.",
  },
  {
    title: "Does the improvement help win or retain clients?",
    lens: "Business growth",
    example: "For intake, follow suitable inquiries through personal contact and signing. Compare similar lead sources and case types so a better advertising campaign does not get mistaken for an AI success.",
    measure: "Signed-case conversion among suitable inquiries; client feedback; eventual collected fees.",
  },
  {
    title: "What are people doing with the time they recover?",
    lens: "Work allocation",
    example: "A paralegal might spend less time copying information and more time obtaining missing records. A partner might call prospective clients sooner. Name the intended use before the pilot starts.",
    measure: "Time redeployed; follow-ups completed; meaningful client conversations.",
  },
  {
    title: "What would stop working if the tool disappeared?",
    lens: "Indispensability",
    example: "Ask staff which tasks would slow down and whether they could recover their work elsewhere. Dependence can reveal value, but it can also reveal weak backups or vendor lock-in.",
    measure: "Fallback workload; access to records; ability to continue safely during an outage.",
  },
];

const faqs = [
  {
    question: "Are hours saved the same as financial ROI?",
    answer: "No. Saved hours create capacity. Financial return depends on what the firm does with that capacity, which expenses actually fall, and the full cost of implementing and operating the system. Do not count the same saved time as both a cash saving and additional case capacity.",
  },
  {
    question: "Which AI metrics should a small PI firm start with?",
    answer: "Choose one workflow and track completion time, work completed, correction or exception rate, and total cost. Add the outcome that matters for that workflow, such as suitable inquiries reaching a human or clients receiving accurate updates.",
  },
];

export const metadata: Metadata = {
  title: "How to Measure AI ROI in a PI Firm",
  description: post.description,
  keywords: ["AI ROI personal injury firms", "measuring legal AI value", "law firm AI metrics"],
  alternates: { canonical: pageUrl },
  openGraph: {
    title: post.title, description: post.description, type: "article", url: pageUrl,
    publishedTime: "2026-10-06", modifiedTime: "2026-10-06", authors: [post.author],
  },
  twitter: { card: "summary", title: post.title, description: post.description },
};

export default function AiRoiPost() {
  return (
    <div className="bg-black pb-20 text-foreground">
      <JsonLd data={[
        {
          "@context": "https://schema.org", "@type": "BlogPosting",
          headline: post.title, description: post.description, url: pageUrl,
          datePublished: "2026-10-06", dateModified: "2026-10-06",
          author: { "@type": "Person", name: post.author },
          publisher: { "@id": `${SITE_URL}/#organization` },
          mainEntityOfPage: pageUrl, articleSection: post.category,
          keywords: post.tags.join(", "), citation: sourceUrl,
        },
        {
          "@context": "https://schema.org", "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
            { "@type": "ListItem", position: 2, name: "Blog", item: `${SITE_URL}/blog` },
            { "@type": "ListItem", position: 3, name: post.title, item: pageUrl },
          ],
        },
        {
          "@context": "https://schema.org", "@type": "FAQPage",
          mainEntity: faqs.map((faq) => ({
            "@type": "Question", name: faq.question,
            acceptedAnswer: { "@type": "Answer", text: faq.answer },
          })),
        },
      ]} />
      <div className="mx-auto max-w-4xl px-5 pt-16 sm:px-8 sm:pt-20">
        <header>
          <Link href="/blog" className="text-sm text-primary hover:underline">Blog / AI Operations</Link>
          <h1 className="mt-5 max-w-3xl text-4xl font-semibold leading-tight text-white sm:text-5xl">{post.title}</h1>
          <p className="mt-5 max-w-3xl text-lg leading-8 text-foreground/75">The useful question for a personal injury firm: what did the saved time make possible?</p>
          <p className="mt-5 text-sm text-foreground/60">{post.author} · {post.date} · {post.readTime}</p>
          <p className="mt-7 border-l-2 border-primary pl-5 text-base leading-7 text-foreground/80"><strong className="text-white">In brief:</strong> Track faster service, useful capacity, and work quality alongside cost. Hours saved are a starting point. The return depends on what happens next.</p>
        </header>

        <BlogTableOfContents items={contents} faqHref="#faq" contained={false} className="mt-8" />

        <article className="mt-10 space-y-12 text-lg leading-8 text-foreground/80">
          <section id="where-time-goes" className={sectionStyle}>
            <h2 className={headingStyle}>Your AI tool saved ten hours. Where did they go?</h2>
            <p>Maybe your intake team called people back sooner. Maybe a paralegal finally chased the records holding up three files. Maybe everyone finished at a reasonable hour. Or perhaps the work simply arrived faster in somebody else&apos;s inbox.</p>
            <p>Those are different results. A dashboard showing ten hours saved cannot tell you which one your firm achieved.</p>
            <p>Legal industry analyst <strong className="text-white">Ari Kaplan</strong> offers a useful starting point in <a href={sourceUrl} className={linkStyle}>ROI Is Dead. Long Live ROI.</a>, published in Above the Law on September 30, 2026. His measurement approach looks beyond speed to the value firms create with it. The seven questions below adapt his framework for PI operations; the examples and recommendations are ours.</p>
            <p>For a contingency-fee practice, hours are an operating cost rather than the usual unit of sale. Less administrative work can improve the economics of a case. But faster preparation does not automatically produce more signed clients, a better recovery, or an earlier fee. You still have to follow the work through.</p>
          </section>

          <section id="seven-questions" className={sectionStyle}>
            <h2 className={headingStyle}>Seven questions for your firm</h2>
            <p>You do not need seven dashboards. Use these questions to choose the measures that fit the workflow you are changing.</p>
            <ol className="divide-y divide-white/15">
              {scorecard.map((item, index) => (
                <li key={item.lens} className="grid grid-cols-[2rem_minmax(0,1fr)] gap-4 py-7 sm:grid-cols-[3rem_minmax(0,1fr)] sm:gap-5">
                  <span aria-hidden="true" className="text-2xl font-semibold leading-8 text-primary sm:text-3xl">{String(index + 1).padStart(2, "0")}</span>
                  <div>
                    <h3 className="text-xl font-semibold leading-8 text-white">{item.title}</h3>
                    <p className="mt-1 text-sm font-medium text-primary">{item.lens}</p>
                    <p className="mt-3">{item.example}</p>
                    <p className="mt-3 text-base leading-7"><strong className="text-white">Track:</strong> {item.measure}</p>
                  </div>
                </li>
              ))}
            </ol>
          </section>

          <section id="intake-example" className={sectionStyle}>
            <h2 className={headingStyle}>Follow one inquiry all the way through</h2>
            <p>Consider a hypothetical after-hours intake pilot. An assistant captures contact details, organizes the conversation, and alerts the person responsible for follow-up. Your report says response time improved.</p>
            <p>Before calling that a win, separate the automated acknowledgment from the first meaningful human conversation. Then ask: were the details correct? Did someone act on the alert? Did suitable prospective clients sign? How much staff time went into corrections?</p>
            <p>If acknowledgments are instant but callbacks still wait until Monday, the main constraint remains. If staff now reach suitable callers promptly and conversion improves, you have a promising business signal. You still need to account for lead quality, staffing changes, and other explanations.</p>
            <p>For a new PI matter, collected fees may be far away. Track conversion now, but label future revenue as an estimate and revisit it when the case resolves. A signed case is not cash in the bank. Our <Link href="/blog/personal-injury-marketing-attribution" className={linkStyle}>guide to marketing attribution</Link> explains why preserving the link from source to case matters.</p>
          </section>

          <section id="count-the-cost" className={sectionStyle}>
            <h2 className={headingStyle}>Put the full cost beside the benefits</h2>
            <p>The subscription is only part of the expense. Include setup, integrations, data cleanup, staff training, review, corrections, ongoing maintenance, and the time someone spends owning the system.</p>
            <p>Keep three things separate: money actually saved, capacity freed for other work, and expected future income. If salaried staff save time but payroll stays the same, you have gained capacity. Do not book a cash saving and then count those same hours again as capacity for new cases.</p>
            <p>Better client service and a less exhausting working day can be worthwhile benefits in their own right. Record them honestly rather than forcing every improvement into an impressive dollar figure.</p>
            <p>Quality also belongs in the calculation. Keep attorney review where judgment is required, restrict access to client information, and test for errors before expanding the workflow. A fast process that creates more cleanup can erase its own return.</p>
          </section>

          <section id="start-small" className={sectionStyle}>
            <h2 className={headingStyle}>Start with one workflow and a small scorecard</h2>
            <p>Record a baseline before changing the process. Choose a period with enough comparable work to be meaningful, then track completion time, completed work, corrections, and total cost during the pilot. Add one business outcome, such as suitable inquiries reaching a person or clients receiving accurate updates.</p>
            <p>Use timestamps and records from your existing systems where possible. Ask staff what changed and what got harder. When the sample is small, treat the result as an early signal rather than a firm-wide conclusion.</p>
            <p>Set a review date and decide whether to continue, adjust, or stop. Our <Link href="/blog/redesign-pi-workflows-around-ai" className={linkStyle}>workflow redesign guide</Link> covers what to do when the bottleneck moves to the next person.</p>
            <p className="border-l-2 border-primary pl-5 font-medium text-white">The strongest case for AI is a visible improvement in how the firm serves clients and runs its work, at a cost the owner understands.</p>
          </section>

          <section id="sources" className={sectionStyle}>
            <h2 className={headingStyle}>Framework credit and research limits</h2>
            <p>This scorecard is adapted from <a href={sourceUrl} className={linkStyle}>Ari Kaplan&apos;s Above the Law article</a>, available in full through <a href="https://xira.com/p/2026/09/30/roi-is-dead-long-live-roi/" className={linkStyle}>XIRA&apos;s republication</a>. It draws on interviews with 31 law-firm participants and 30 corporate legal participants, plus a discussion with roughly 20 leaders at ILTACON 2026.</p>
            <p>The underlying <a href="https://legora.com/roi-law-firms" className={linkStyle}>law-firm research</a> and <a href="https://legora.com/roi-in-house" className={linkStyle}>in-house research</a> were conducted with legal AI vendor Legora. More than 90% of the law-firm participants worked at firms with over 200 lawyers. These are interview-based findings from a vendor-associated study, not a controlled test of returns for small PI practices.</p>
            <p>We use the framework to ask better questions, not to promise the same results. The PI examples, cost cautions, and suggested pilot measures above are Possible Minds&apos; interpretation.</p>
          </section>

          <section id="faq" className={sectionStyle}>
            <h2 className={headingStyle}>Common questions</h2>
            {faqs.map((faq) => (
              <div key={faq.question} className="space-y-3 pt-3">
                <h3 className="text-xl font-semibold text-white">{faq.question}</h3>
                <p>{faq.answer}</p>
              </div>
            ))}
          </section>
        </article>

        <aside className="mt-12 border-y border-primary/30 py-8">
          <h2 className="text-2xl font-semibold text-white">Choose a workflow worth measuring</h2>
          <p className="mt-3 max-w-2xl leading-7 text-foreground/75">Possible Minds helps PI firms identify operational bottlenecks, build bounded AI workflows, and measure what changes.</p>
          <Link href="/consult" className="mt-5 inline-flex items-center gap-2 text-base font-semibold text-primary hover:underline">Discuss your firm&apos;s workflow <ArrowRight aria-hidden="true" className="h-4 w-4" /></Link>
        </aside>
      </div>
    </div>
  );
}
