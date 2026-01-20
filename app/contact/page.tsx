import { Metadata } from "next";
import Link from "next/link";

import { ContactForm } from "@/components/contact-form";
import { PageHero } from "@/components/page-hero";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CALENDLY_URL, SITE_NAME } from "@/lib/constants";

export const metadata: Metadata = {
  title: `Contact | ${SITE_NAME}`,
  description:
    "Reach the Possible Minds team to discuss inbox automation and multichannel support workflows.",
};

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-5xl space-y-10 px-4 pb-16 sm:px-6">
      <PageHero
        eyebrow="Contact"
        title="Tell us about your workflows"
        description="We respond quickly—share the systems and processes you want to automate."
        actions={
          <Button asChild>
            <Link href={CALENDLY_URL} target="_blank" rel="noreferrer">
              Prefer to talk? Book a demo
            </Link>
          </Button>
        }
      />

      <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
        <ContactForm />
        <Card className="border-border/70 bg-card/80 shadow-soft">
          <CardHeader className="space-y-2">
            <CardTitle>What to expect</CardTitle>
            <p className="text-sm text-muted-foreground">
              A focused call to map workflows, systems, and compliance requirements.
            </p>
          </CardHeader>
          <CardContent className="space-y-3 text-sm text-muted-foreground">
            <div className="rounded-xl border border-border/70 bg-muted/60 p-3">
              <Badge variant="outline">Agenda</Badge>
              <ul className="mt-2 space-y-1">
                <li>• Your workflows and target outcomes</li>
                <li>• Systems to connect (EMR/EHR, CRM, ticketing, telephony)</li>
                <li>• Controls, review steps, and reporting needs</li>
              </ul>
            </div>
            <div className="rounded-xl border border-border/70 bg-muted/50 p-3">
              <Badge variant="outline">Timeline</Badge>
              <p className="mt-1">
                Week 1: design + configure. Weeks 2-4: pilots with humans-in-the-loop. Then expand automation with quality gates.
              </p>
            </div>
            <div className="flex flex-col gap-2">
              <span className="text-foreground font-semibold">Other ways to reach us</span>
              <Link
                href={`mailto:hello@possibleminds.ai`}
                className="text-primary underline-offset-6 hover:underline"
              >
                hello@possibleminds.ai
              </Link>
              <Link
                href={CALENDLY_URL}
                target="_blank"
                rel="noreferrer"
                className="text-primary underline-offset-6 hover:underline"
              >
                Book a demo slot →
              </Link>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
