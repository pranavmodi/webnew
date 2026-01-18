import { Metadata } from "next";

import { SITE_NAME } from "@/lib/constants";

export const metadata: Metadata = {
  title: `Privacy | ${SITE_NAME}`,
  description: "Privacy statement for Possible Minds.",
};

export default function PrivacyPage() {
  return (
    <div className="mx-auto max-w-4xl space-y-8 px-4 pb-16 sm:px-6">
      <div className="space-y-3">
        <h1 className="text-3xl font-semibold tracking-tight">Privacy</h1>
        <p className="text-muted-foreground">
          We take privacy seriously. This page explains how we handle information when you use our site or speak with our team.
        </p>
      </div>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">Information we collect</h2>
        <p className="text-muted-foreground">
          We collect contact details and information you share when you reach out. For product deployments, data handling and retention are governed by your agreements.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">How we use information</h2>
        <ul className="space-y-2 text-muted-foreground">
          <li>• Respond to your inquiries and provide demos.</li>
          <li>• Improve our product and service quality.</li>
          <li>• Communicate about updates relevant to your team.</li>
        </ul>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">Security</h2>
        <p className="text-muted-foreground">
          Data is encrypted in transit and at rest. Access is scoped by role. We support customer-controlled deployments when needed.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">Contact</h2>
        <p className="text-muted-foreground">
          Questions? Email us at hello@possibleminds.ai and we&apos;ll respond promptly.
        </p>
      </section>
    </div>
  );
}
