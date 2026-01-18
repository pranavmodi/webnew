"use client";

import "@radix-ui/themes/styles.css";
import { Theme } from "@radix-ui/themes";

import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <Theme accentColor="jade" grayColor="slate" radius="medium" scaling="100%">
      <TooltipProvider delayDuration={120}>
        {children}
        <Toaster />
      </TooltipProvider>
    </Theme>
  );
}
