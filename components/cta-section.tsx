import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CALENDLY_URL } from "@/lib/constants";

export function CTASection() {
  return (
    <Card className="border border-primary/20 bg-gradient-to-br from-primary/10 via-background to-background shadow-soft">
      <CardHeader className="space-y-3 text-center">
        <CardTitle className="text-3xl font-semibold">
          Ready to automate your highest-volume workflows?
        </CardTitle>
        <p className="text-base text-muted-foreground">
          Map your inboxes, document flows, and support channels with a Possible Minds specialist.
        </p>
      </CardHeader>
      <CardContent className="flex flex-col items-center justify-center gap-3 sm:flex-row">
        <Button asChild size="lg" className="animate-glow">
          <Link href={CALENDLY_URL} target="_blank" rel="noreferrer">
            Book a demo
            <ArrowUpRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
        <Button asChild size="lg" variant="outline">
          <Link href="/contact">Contact</Link>
        </Button>
      </CardContent>
    </Card>
  );
}
