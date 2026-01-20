import { ArrowRight, CheckCircle2 } from "lucide-react";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { industries } from "@/lib/content";

export function IndustryTabs() {
  return (
    <Tabs defaultValue={industries[0].key}>
      <TabsList className="border border-primary/30 bg-[#04150d]">
        {industries.map((industry) => (
          <TabsTrigger key={industry.key} value={industry.key}>
            {industry.title}
          </TabsTrigger>
        ))}
      </TabsList>
      {industries.map((industry) => (
        <TabsContent key={industry.key} value={industry.key}>
          <Card className="border-primary/25 bg-[#04150d] shadow-soft">
            <CardHeader className="space-y-2">
              <Badge variant="outline" className="border-primary/40 text-primary">
                {industry.title}
              </Badge>
              <CardTitle>{industry.description}</CardTitle>
            </CardHeader>
            <CardContent className="grid gap-6 md:grid-cols-2">
              <div className="space-y-3">
                <h4 className="text-sm font-semibold uppercase tracking-tight text-muted-foreground">
                  Top workflows
                </h4>
                <ul className="space-y-2">
                  {industry.workflows.map((workflow) => (
                    <li key={workflow} className="flex items-start gap-2 text-sm">
                      <ArrowRight className="mt-0.5 h-4 w-4 text-primary" />
                      <span>{workflow}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="space-y-3">
                <h4 className="text-sm font-semibold uppercase tracking-tight text-muted-foreground">
                  Outcomes
                </h4>
                <ul className="space-y-2">
                  {industry.outcomes.map((outcome) => (
                    <li key={outcome} className="flex items-start gap-2 text-sm">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 text-primary" />
                      <span>{outcome}</span>
                    </li>
                  ))}
                </ul>
                <div className="rounded-xl border border-dashed border-primary/30 bg-primary/10 p-3 text-sm text-muted-foreground">
                  <span className="font-semibold text-foreground">Example automation:</span>{" "}
                  {industry.example}
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      ))}
    </Tabs>
  );
}
