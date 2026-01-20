"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { integrationsLine, howItWorksSteps } from "@/lib/content";

export function HowItWorks() {
  return (
    <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
      <div className="space-y-4">
        <h3 className="text-xl font-semibold">How it works</h3>
        <p className="text-muted-foreground">
          Connect, understand, act, and learn with guardrails built for regulated teams.
        </p>
        <Card className="border-dashed border-primary/30 bg-primary/10">
          <CardContent className="flex flex-wrap items-center gap-3 py-4">
            <Badge variant="outline" className="border-primary/40 text-primary">
              Integrations
            </Badge>
            <span className="text-sm text-muted-foreground">{integrationsLine}</span>
          </CardContent>
        </Card>
      </div>
      <div className="grid gap-4">
        {howItWorksSteps.map((step, index) => (
          <motion.div
            key={step.title}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.05 }}
            className="group relative rounded-2xl border border-primary/25 bg-[#04150d] p-4 shadow-soft"
          >
            <div className="absolute left-4 top-4 flex h-9 w-9 items-center justify-center rounded-full border border-primary/30 bg-primary/10 text-sm font-semibold text-foreground">
              {index + 1}
            </div>
            <div className="pl-14">
              <div className="flex items-center gap-2">
                <h4 className="text-lg font-semibold">{step.title}</h4>
                <Check className="h-4 w-4 text-primary" />
              </div>
              <p className="mt-2 text-sm text-muted-foreground">
                {step.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
