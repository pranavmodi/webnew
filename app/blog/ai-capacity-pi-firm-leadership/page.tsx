import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import { BlogTableOfContents } from "@/components/blog/table-of-contents";
import { JsonLd } from "@/components/seo/json-ld";
import { BLOG_POSTS_BY_SLUG } from "@/lib/blog";
import { createBlogMetadata, createBlogStructuredData } from "@/lib/blog-seo";
import { SITE_URL } from "@/lib/constants";

const slug = "ai-capacity-pi-firm-leadership";
const post = BLOG_POSTS_BY_SLUG[slug];
const source = "https://mission.getpossibleminds.com/podcasts/12463";
const imageUrl = `${SITE_URL}/blog/law-docs.png`;
const link = "text-emerald-300 underline decoration-emerald-300/40 underline-offset-4 hover:decoration-emerald-300";
const section = "scroll-mt-28 space-y-5 border-t border-white/15 pt-8";
const heading = "text-2xl font-semibold leading-tight text-white sm:text-3xl";
const contents = [
  { id: "ten-hours", label: "Imagine giving your team ten hours back" },
  { id: "client-experience", label: "Your clients should feel the improvement" },
  { id: "capacity", label: "Decide where the capacity goes" },
  { id: "judgment", label: "Keep teaching the judgment behind the work" },
  { id: "authority", label: "Give someone permission to change the process" },
  { id: "one-decision", label: "Make one decision before buying another tool" },
  { id: "faq", label: "Two questions founders ask" },
];
const faqs = [
  {
    question: "Should a PI firm use AI savings to take more cases?",
    answer: "It can, if reviewed work, client service, and staff workload remain healthy. First establish how much time is actually freed after review and corrections, and whether the next stage can absorb more work. Additional case volume is one possible use of capacity, not an automatic outcome.",
  },
  {
    question: "How can junior lawyers learn when AI prepares the first draft?",
    answer: "Keep supervised work that requires them to examine the source, explain the reasoning, and defend their proposed changes. Compare the AI draft with the final version and discuss why the lawyer changed it. Faster preparation should leave room for that teaching, rather than remove it.",
  },
];

export const metadata: Metadata = {
  ...createBlogMetadata(slug),
  title: "AI and PI Firm Leadership: Build a Better Firm",
  keywords: ["AI for personal injury firms", "law firm leadership", "AI capacity", "legal AI change management"],
  openGraph: {
    ...createBlogMetadata(slug).openGraph,
    type: "article",
    modifiedTime: "2026-10-29",
    images: [{ url: imageUrl, width: 1024, height: 1024, alt: "Illustration of legal files and a laptop" }],
  },
  twitter: { card: "summary_large_image", title: post.title, description: post.description, images: [imageUrl] },
};

export default function AiCapacityLeadershipPost() {
  return (
    <div className="-mt-4 bg-black text-white/80">
      <JsonLd data={createBlogStructuredData(slug).map((item) => item["@type"] === "BlogPosting" ? { ...item, dateModified: "2026-10-29", citation: source, image: imageUrl } : item)} />
      <JsonLd data={{ "@context": "https://schema.org", "@type": "FAQPage", mainEntity: faqs.map(({ question, answer }) => ({ "@type": "Question", name: question, acceptedAnswer: { "@type": "Answer", text: answer } })) }} />
      <div className="mx-auto max-w-4xl px-4 pb-20 pt-8 sm:px-6 sm:pt-12">
        <header>
          <Link href="/blog" className="text-sm text-emerald-300 hover:underline">Blog / Firm Leadership</Link>
          <h1 className="mt-4 text-3xl font-semibold leading-tight text-white sm:text-4xl">{post.title}</h1>
          <p className="mt-4 text-lg leading-7 text-white/75">The software can free up time. The founder decides what that time is for.</p>
          <p className="mt-4 text-sm text-white/60">{post.author} &middot; {post.date} &middot; {post.readTime}</p>
        </header>
        <BlogTableOfContents items={contents} contained={false} className="mt-7" />

        <article className="mt-9 space-y-10 text-lg leading-8">
          <section id="ten-hours" className={section}>
            <h2 className={heading}>Imagine giving your team ten hours back</h2>
            <p>Suppose AI gave each case manager ten hours back every week. That is a thought experiment, not a promised result.</p>
            <p>You could assign more cases. You could make room for calls before clients become anxious, closer attention to missing records, or time with an attorney to discuss a difficult file. You could let people finish their day without carrying a second shift home.</p>
            <p>You might choose a mixture. But the software will not make that choice for you. <strong className="text-white">Your AI strategy includes deciding what kind of working day, client experience, and firm you want those efficiencies to create.</strong></p>
            <p>That question runs through <a href={source} className={link}>Libby Clark&apos;s conversation on Legal Innovations Spotlight</a>. Clark, an <a href="https://libbyclarklaw.com/about" className={link}>attorney and former general counsel and COO</a>, warns that introducing technology into damaging systems can simply accelerate them. Her concern extends beyond productivity to the people doing the work and the judgment the profession needs to develop.</p>
            <p>Much of the discussion concerns large firms and hourly billing. A contingency-fee PI practice has different economics. Yet its founder still faces the same choice about what to preserve, what to change, and who should benefit.</p>
          </section>

          <section id="client-experience" className={section}>
            <h2 className={heading}>Your clients should feel the improvement</h2>
            <p>Picture a client waiting for news while medical bills arrive. Inside the firm, a chronology now takes less time to prepare. Outside it, the client still wonders whether anyone is paying attention.</p>
            <p>The efficiency is real, but the client has not experienced its value yet.</p>
            <p>A better workflow might use that capacity to identify what is holding up the file and prepare a clear update for staff to check. Someone can explain what has happened, what the firm is waiting for, and when the client should expect to hear again. Sensitive questions still reach the lawyer.</p>
            <p>This is where a founder&apos;s priorities become visible. If the only number anyone asks about is files processed, the work will tend toward that number. Ask about unanswered questions and unresolved obstacles too. Our <Link href="/personal-injury/client-communication" className={link}>client communication approach</Link> starts with those handoffs.</p>
            <p>A client may never know which software the firm uses. They can tell whether they have to chase you for an answer.</p>
          </section>

          <section id="capacity" className={section}>
            <h2 className={heading}>Decide where the capacity goes</h2>
            <p>There is nothing wrong with using AI to grow. A firm with sound processes and enough supervision may be able to serve more people. But additional work needs somewhere to go after the automated step.</p>
            <p>If demand drafts arrive faster while attorney review stays backed up, the queue has moved. If every saved hour immediately becomes a higher caseload, there may be no room left for better communication or less overtime.</p>
            <p>Choose the intended benefit before the numbers arrive. Perhaps the first gains will go toward clearing overdue client updates. Perhaps they will protect preparation time on serious cases. Perhaps, after quality and workload stabilize, they will support additional intake.</p>
            <p>Keep the economics honest. Time freed from salaried work is capacity, not necessarily cash saved. Review, corrections, and maintenance still consume time. Our <Link href="/blog/measure-ai-roi-personal-injury-firms" className={link}>guide to measuring AI value</Link> covers that distinction. Here, the leadership question comes first: what work deserves the capacity?</p>
            <figure className="grid items-center gap-5 border-y border-white/15 py-5 sm:grid-cols-[144px_minmax(0,1fr)]">
              <Image src="/blog/law-docs.png" alt="Illustration of case documents beside a laptop" width={1024} height={1024} sizes="144px" className="h-36 w-36 rounded object-cover" />
              <figcaption className="text-base leading-7 text-white/65">A faster draft still needs someone with time to review it. Plan the human work alongside the automation. Illustration.</figcaption>
            </figure>
          </section>

          <section id="judgment" className={section}>
            <h2 className={heading}>Keep teaching the judgment behind the work</h2>
            <p>Clark raises another question: how will lawyers develop judgment when machines do more of the production work? In the episode, she points toward apprenticeship, learning through observation and supervised practice.</p>
            <p>For a PI founder, that can be very concrete. When a junior lawyer reviews an AI-prepared chronology, ask which entries they checked against the records. Which uncertainty could change the case? What did the summary leave out? Why does the revised version say something different?</p>
            <p>The useful lesson sits in the reasoning between the draft and the final work. Preserve time to explain it. An instruction to review everything means little if the reviewer lacks the experience, source access, or time to do so.</p>
            <p>AI can help prepare material for that discussion. It cannot carry the firm&apos;s professional responsibility. Keep consequential decisions with the responsible lawyer, use approved systems for client information, and make uncertainty visible rather than smoothing it away.</p>
          </section>

          <section id="authority" className={section}>
            <h2 className={heading}>Give someone permission to change the process</h2>
            <p>A founder can enthusiastically approve AI and still prevent it from working.</p>
            <p>Consider an operations lead asked to improve client updates. One attorney wants a weekly review. Another wants every message held for personal approval. A third keeps the relevant notes outside the case-management system. The operations lead has responsibility for the outcome and little authority over its causes.</p>
            <p>The founder needs to resolve those conflicts: agree on the shared process, define genuine exceptions, and give someone authority to keep the work moving. Staff also need a way to report errors and awkward handoffs without being treated as obstacles to the project.</p>
            <p>Start with a bounded workflow where that authority is clear. Protect enough time to test, correct, and learn. A pilot should be safe to stop if it harms quality; it should also be allowed to improve without every inconvenience becoming a reason to abandon it.</p>
          </section>

          <section id="one-decision" className={section}>
            <h2 className={heading}>Make one decision before buying another tool</h2>
            <p>Ask your team where they repeatedly run out of time to do work they know matters. Ask clients where the experience has felt uncertain or difficult. Then choose one workflow and complete this sentence:</p>
            <blockquote className="border-l-2 border-emerald-300 pl-5 font-medium text-white">When this becomes faster, we will use the capacity to ______, and we will know it is helping because ______.</blockquote>
            <p>For example: when preparing case updates becomes faster, we will use the capacity to reach clients before they have to chase us. We will check whether overdue updates and repeat status calls fall, while reviewing accuracy and staff workload.</p>
            <p>That gives the technology a purpose and the team a way to judge it. At Possible Minds, our <Link href="/engagement-process" className={link}>workflow assessment</Link> connects the automation to the people who review, follow up, and own the result.</p>
            <p className="font-medium text-white">The opportunity is to make good legal work easier to deliver consistently, without depending on everyone being stretched to their limit.</p>
          </section>

          <section id="faq" className={section}>
            <h2 className={heading}>Two questions founders ask</h2>
            {faqs.map(({ question, answer }) => <div key={question} className="space-y-2"><h3 className="text-xl font-semibold text-white">{question}</h3><p>{answer}</p></div>)}
          </section>
          <aside className="space-y-3 border-t border-white/15 pt-6 text-base leading-7 text-white/60">
            <p>Source: <a href={source} className={link}>The Future of Law Depends on Skills AI Can&apos;t Replace</a>, Legal Innovations Spotlight, October 28, 2026, featuring Libby Clark. Her observations inform the discussion of systems, well-being, and judgment. The PI examples and operating recommendations are Possible Minds&apos; interpretation, not reported client results or claims of her endorsement.</p>
            <p>All scenarios in this essay are illustrative. No particular time saving, case outcome, or financial return is promised.</p>
          </aside>
        </article>
      </div>
    </div>
  );
}
