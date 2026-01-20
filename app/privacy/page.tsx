import { Metadata } from "next";

import { PageHero } from "@/components/page-hero";
import { Card, CardContent } from "@/components/ui/card";
import { SITE_NAME } from "@/lib/constants";

export const metadata: Metadata = {
  title: `Privacy | ${SITE_NAME}`,
  description: "Privacy statement for Possible Minds.",
};

export default function PrivacyPage() {
  return (
    <div className="mx-auto max-w-4xl space-y-8 px-4 pb-16 sm:px-6">
      <PageHero
        eyebrow="Privacy"
        title="How we handle information"
        description="We take privacy seriously. This page explains how we handle information when you use our site or speak with our team."
      />

      {[
        {
          title: "Information we collect",
          body:
            "We collect contact details and information you share when you reach out. For product deployments, data handling and retention are governed by your agreements.",
        },
        {
          title: "How we use information",
          body: (
            <ul className="space-y-2 text-muted-foreground">
              <li>• Respond to your inquiries and provide demos.</li>
              <li>• Improve our product and service quality.</li>
              <li>• Communicate about updates relevant to your team.</li>
            </ul>
          ),
        },
        {
          title: "Security",
          body:
            "Data is encrypted in transit and at rest. Access is scoped by role. We support customer-controlled deployments when needed.",
        },
        {
          title: "Contact",
          body:
            "Questions? Email us at hello@possibleminds.ai and we'll respond promptly.",
        },
      ].map((section) => (
        <Card key={section.title} className="border-border/70 bg-card/80 shadow-soft">
          <CardContent className="space-y-2 p-6 text-sm text-muted-foreground">
            <h2 className="text-lg font-semibold text-foreground">{section.title}</h2>
            {section.body}
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
