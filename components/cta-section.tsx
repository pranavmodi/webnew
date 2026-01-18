import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CALENDLY_URL } from "@/lib/constants";

export function CTASection() {
  return (
    <Card className="border border-primary/20 bg-gradient-to-br from-primary/10 via-white to-white shadow-soft">
      <CardHeader className="space-y-3 text-center">
        <CardTitle className="text-3xl font-semibold">
          Ready to see Possible Minds in action?
        </CardTitle>
        <p className="text-base text-muted-foreground">
          Book a demo to map your support and intake workflows, or drop us a note and we&apos;ll reach out.
        </p>
      </CardHeader>
      <CardContent className="flex flex-col items-center justify-center gap-3 sm:flex-row">
        <Button asChild size="lg">
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
