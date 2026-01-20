import Link from "next/link";

import { CALENDLY_URL, SITE_NAME } from "@/lib/constants";
import { footerLinks } from "@/lib/navigation";
import { Button } from "@/components/ui/button";

export function Footer() {
  return (
    <footer className="border-t border-primary/20 bg-black">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-12 sm:px-6 sm:py-14 md:grid-cols-[1.2fr_0.8fr]">
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <span className="flex h-10 w-10 items-center justify-center rounded-2xl border border-primary/40 bg-primary/15 text-primary shadow-glow">
              PM
            </span>
            <div className="leading-tight">
              <div className="text-base font-semibold text-primary">{SITE_NAME}</div>
            </div>
          </div>
          <p className="max-w-md text-sm text-muted-foreground">
            AI agents for inbox triage, document validation, and multichannel support in healthcare and legal.
          </p>
          <div className="flex flex-wrap gap-3">
            <Button asChild size="sm" className="animate-glow">
              <Link href={CALENDLY_URL} target="_blank" rel="noreferrer">
                Book a demo
              </Link>
            </Button>
            <Button asChild size="sm" variant="outline">
              <Link href="mailto:hello@possibleminds.ai">Email us</Link>
            </Button>
          </div>
        </div>

        {footerLinks.map((section) => (
          <div key={section.title} className="rounded-2xl border border-primary/20 bg-[#04150d] p-5">
            <h3 className="text-sm font-semibold text-primary">
              {section.title}
            </h3>
            <ul className="mt-4 space-y-3 text-sm">
              {section.links.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="flex items-center justify-between text-foreground/80 transition hover:text-primary"
                  >
                    <span>{link.label}</span>
                    <span className="text-xs text-primary/60">→</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="border-t border-primary/20">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 px-4 py-4 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between sm:px-6">
          <span>© {new Date().getFullYear()} {SITE_NAME}. All rights reserved.</span>
          <div className="flex items-center gap-4">
            <Link href="mailto:hello@possibleminds.ai" className="hover:text-primary">
              Contact
            </Link>
            <Link href={CALENDLY_URL} className="hover:text-primary">
              Book a demo
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
