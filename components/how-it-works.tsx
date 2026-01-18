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
          Connect, understand, act, and learn—designed for regulated support and intake teams.
        </p>
        <Card className="border-dashed border-border bg-accent/50">
          <CardContent className="flex flex-wrap items-center gap-3 py-4">
            <Badge variant="secondary">Integrations</Badge>
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
            className="group relative rounded-2xl border border-border bg-card/80 p-4 shadow-sm"
          >
            <div className="absolute left-4 top-4 flex h-9 w-9 items-center justify-center rounded-full border border-border bg-background text-sm font-semibold">
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
