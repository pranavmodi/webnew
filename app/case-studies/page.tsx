import { Metadata } from "next";

import { CTASection } from "@/components/cta-section";
import { CaseStudyCard } from "@/components/case-study-card";
import { PageHero } from "@/components/page-hero";
import { SectionHeading } from "@/components/section-heading";
import { caseStudies } from "@/lib/content";
import { SITE_NAME } from "@/lib/constants";

export const metadata: Metadata = {
  title: `Case Studies | ${SITE_NAME}`,
  description:
    "Sample outcomes and workflows for healthcare and legal teams using Possible Minds.",
};

export default function CaseStudiesPage() {
  return (
    <div className="mx-auto max-w-6xl space-y-12 px-4 pb-16 sm:px-6">
      <PageHero
        eyebrow="Case studies"
        title="Illustrative examples"
        description="Each engagement ships with measurable results, audit trails, and tuned workflows."
      />
      <SectionHeading
        eyebrow="Detailed looks"
        title="Patterns we ship with teams"
        subtitle="All examples are illustrative—your workflows, systems, and controls drive the build."
      />
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {caseStudies.map((study) => (
          <CaseStudyCard key={study.title} study={study} />
        ))}
      </div>
      <CTASection />
    </div>
  );
}
