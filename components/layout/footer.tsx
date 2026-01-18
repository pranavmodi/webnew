import Link from "next/link";

import { CALENDLY_URL, SITE_NAME } from "@/lib/constants";
import { footerLinks } from "@/lib/navigation";
import { Button } from "@/components/ui/button";

export function Footer() {
  return (
    <footer className="border-t border-border/80 bg-gradient-to-b from-background to-white">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-12 sm:px-6 sm:py-14 md:grid-cols-4">
        <div className="md:col-span-1">
          <div className="flex items-center gap-2 text-lg font-bold">
            <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-primary text-primary-foreground">
              PM
            </span>
            <span>{SITE_NAME}</span>
          </div>
          <p className="mt-3 max-w-xs text-sm text-muted-foreground">
            AI for customer support and sales workflows in healthcare and legal.
          </p>
          <div className="mt-4">
            <Button asChild size="sm">
              <Link href={CALENDLY_URL} target="_blank" rel="noreferrer">
                Book a demo
              </Link>
            </Button>
          </div>
        </div>

        {footerLinks.map((section) => (
          <div key={section.title}>
            <h3 className="text-sm font-semibold text-muted-foreground">
              {section.title}
            </h3>
            <ul className="mt-3 space-y-2 text-sm">
              {section.links.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-foreground/80 transition hover:text-foreground"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="border-t border-border/60">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 px-4 py-4 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between sm:px-6">
          <span>© {new Date().getFullYear()} {SITE_NAME}. All rights reserved.</span>
          <div className="flex items-center gap-4">
            <Link href="/privacy" className="hover:text-foreground">
              Privacy
            </Link>
            <Link href="/contact" className="hover:text-foreground">
              Contact
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
