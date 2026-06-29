import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CALENDLY_URL } from "@/lib/constants";

export function CTASection() {
  return (
    <Card className="border border-primary/30 bg-[#04150d] shadow-soft">
      <CardHeader className="space-y-3 text-center">
        <CardTitle className="text-3xl font-semibold">
          Ready to find the workflow AI should actually fix?
        </CardTitle>
        <p className="text-base text-muted-foreground">
          Map the intake, records, lien, or client-update leak with a Possible
          Minds specialist before you commit to a build.
        </p>
      </CardHeader>
      <CardContent className="flex flex-col items-center justify-center gap-3 sm:flex-row">
        <Button asChild size="lg" className="animate-glow">
          <Link href={CALENDLY_URL} target="_blank" rel="noreferrer">
            Diagnostic call
            <ArrowUpRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
        <Button asChild size="lg" variant="outline">
          <Link href="mailto:hello@possibleminds.ai">Contact</Link>
        </Button>
      </CardContent>
    </Card>
  );
}
