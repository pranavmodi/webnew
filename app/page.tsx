import { CTASection } from "@/components/cta-section";
import { CaseStudyCard } from "@/components/case-study-card";
import { FeatureCards } from "@/components/feature-cards";
import { Hero } from "@/components/hero";
import { HowItWorks } from "@/components/how-it-works";
import { IndustryTabs } from "@/components/industry-tabs";
import { OutcomesBar } from "@/components/outcomes-bar";
import { SectionHeading } from "@/components/section-heading";
import { caseStudies } from "@/lib/content";

export default function Home() {
  return (
    <div className="space-y-16 pb-20">
      <Hero />
      <div className="space-y-16">
        <div className="px-4 sm:px-6">
          <OutcomesBar />
        </div>

        <section className="mx-auto max-w-6xl space-y-8 px-4 sm:px-6" id="what-we-do">
          <SectionHeading
            eyebrow="What we do"
            title="AI that clears backlogs, accelerates intake, and keeps you in control."
            subtitle="Support AI, Sales/Intake AI, and automation tailored for healthcare and legal teams."
          />
          <FeatureCards />
        </section>

        <section className="mx-auto max-w-6xl space-y-8 px-4 sm:px-6" id="how-it-works">
          <SectionHeading
            eyebrow="How it works"
            title="Deploy fast, improve weekly."
            subtitle="Connect your systems, keep humans in the loop, and measure results out of the box."
          />
          <HowItWorks />
        </section>

        <section className="mx-auto max-w-6xl space-y-8 px-4 sm:px-6" id="industries">
          <SectionHeading
            eyebrow="Industries"
            title="Built for healthcare and legal teams"
            subtitle="Choose the workflows you want to accelerate—intake, triage, replies, and structured data capture."
          />
          <IndustryTabs />
        </section>

        <section className="mx-auto max-w-6xl space-y-8 px-4 sm:px-6" id="case-studies">
          <SectionHeading
            eyebrow="Case studies"
            title="Illustrative examples of how teams ship outcomes quickly"
            subtitle="We tailor workflows to your stack—here are sample results and patterns."
          />
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {caseStudies.map((study) => (
              <CaseStudyCard key={study.title} study={study} compact />
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-5xl px-4 sm:px-6">
          <CTASection />
        </section>
      </div>
    </div>
  );
}
