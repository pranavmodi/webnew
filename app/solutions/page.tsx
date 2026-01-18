import { Metadata } from "next";
import Link from "next/link";

import { CTASection } from "@/components/cta-section";
import { CompareTable } from "@/components/compare-table";
import { PageHero } from "@/components/page-hero";
import { SectionHeading } from "@/components/section-heading";
import { SolutionSection } from "@/components/solution-section";
import { Button } from "@/components/ui/button";
import { solutions } from "@/lib/content";
import { CALENDLY_URL, SITE_NAME } from "@/lib/constants";

export const metadata: Metadata = {
  title: `Solutions | ${SITE_NAME}`,
  description:
    "Customer support AI, sales/intake AI, and automation for healthcare and legal teams.",
};

export default function SolutionsPage() {
  return (
    <div className="mx-auto max-w-6xl space-y-14 px-4 pb-16 sm:px-6">
      <PageHero
        eyebrow="Solutions"
        title="Three ways to accelerate support and intake"
        description="Choose the workflows you want to automate. Keep humans-in-the-loop and ship measurable outcomes fast."
        actions={
          <div className="flex flex-wrap gap-3">
            <Button asChild>
              <Link href={CALENDLY_URL} target="_blank" rel="noreferrer">
                Book a demo
              </Link>
            </Button>
            <Button asChild variant="outline">
              <Link href="/industries">See industries</Link>
            </Button>
          </div>
        }
      />

      <div className="space-y-12">
        {solutions.map((solution) => (
          <SolutionSection key={solution.id} solution={solution} />
        ))}
      </div>

      <div className="space-y-4">
        <SectionHeading
          eyebrow="Compare"
          title="Pick the combination that fits your stack"
          subtitle="All solutions include controls, auditability, and integration support."
        />
        <CompareTable />
      </div>

      <CTASection />
    </div>
  );
}
