"use client";

import { motion } from "framer-motion";
import { ChevronDown, Menu } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { CALENDLY_URL, SITE_NAME } from "@/lib/constants";
import {
  caseStudiesLinks,
  navLinks,
  piSystemsLinks,
  solutionsLinks,
} from "@/lib/navigation";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Separator } from "@/components/ui/separator";

const dropdownGroups = [
  { label: "PI Systems", links: piSystemsLinks, width: "w-64" },
  {
    label: "Solutions",
    links: [...solutionsLinks, ...caseStudiesLinks.map((link) => ({
      ...link,
      label: `Case study: ${link.label}`,
    }))],
    width: "w-64",
  },
];

export function Navbar() {
  const pathname = usePathname();

  const NavLink = ({ href, label }: { href: string; label: string }) => {
    const active = pathname === href;
    return (
      <Link
        href={href}
        className={cn(
          "relative whitespace-nowrap px-3 py-2 text-sm font-semibold text-primary transition-colors hover:text-primary/80",
          active ? "text-primary" : "",
        )}
      >
        {label}
        {active && (
          <motion.span
            layoutId="nav-indicator"
            className="absolute inset-x-3 -bottom-1 h-0.5 rounded-full bg-primary"
            transition={{ type: "spring", stiffness: 500, damping: 30 }}
          />
        )}
      </Link>
    );
  };

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-primary/20 bg-black/80 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link className="flex items-center gap-2 text-base font-bold" href="/">
          <span className="flex h-8 w-8 items-center justify-center rounded-xl border border-primary/40 bg-primary/15 text-primary">
            PM
          </span>
          <div className="flex flex-col leading-none">
            <span className="text-primary">{SITE_NAME}</span>
          </div>
        </Link>

        <nav className="hidden items-center gap-3 md:flex lg:gap-5">
          {dropdownGroups.map((group) => (
            <div key={group.label} className="relative group">
              <button
                type="button"
                aria-haspopup="menu"
                aria-expanded="false"
                className="flex items-center gap-1 whitespace-nowrap px-3 py-2 text-sm font-semibold text-primary transition-colors hover:text-primary/80"
              >
                {group.label}
                <ChevronDown className="h-4 w-4" />
              </button>
              <div
                className={cn(
                  "pointer-events-none absolute left-0 top-full z-20 mt-2 translate-y-2 opacity-0 transition duration-200 group-focus-within:pointer-events-auto group-focus-within:translate-y-0 group-focus-within:opacity-100 group-hover:pointer-events-auto group-hover:translate-y-0 group-hover:opacity-100",
                  group.width,
                )}
              >
                <div className="rounded-xl border border-primary/20 bg-black/95 p-2 shadow-[0_15px_40px_rgba(0,0,0,0.5)]">
                  {group.links.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className={cn(
                        "block rounded-lg px-3 py-2 text-sm font-semibold text-foreground/80 transition hover:bg-primary/10 hover:text-primary",
                        pathname === link.href ? "bg-primary/10 text-primary" : "",
                      )}
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          ))}
          {navLinks.map((link) => (
            <NavLink key={link.href} {...link} />
          ))}
        </nav>

        <div className="hidden items-center gap-2 md:flex">
          <Button asChild size="sm">
            <Link href={CALENDLY_URL} target="_blank" rel="noreferrer">
              Diagnostic call
            </Link>
          </Button>
        </div>

        <div className="flex items-center md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon" aria-label="Open navigation">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent>
              <SheetHeader>
                <SheetTitle className="text-left">Navigate</SheetTitle>
              </SheetHeader>
              <div className="mt-6 flex flex-col gap-3">
                {dropdownGroups.map((group) => (
                  <div key={group.label}>
                    <div className="px-3 text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
                      {group.label}
                    </div>
                    <div className="mt-3 flex flex-col gap-2">
                      {group.links.map((link) => (
                        <SheetClose asChild key={link.href}>
                          <Link
                            href={link.href}
                            className={cn(
                              "rounded-lg px-3 py-2 text-base font-semibold transition",
                              pathname === link.href
                                ? "bg-primary/10 text-primary"
                                : "text-muted-foreground hover:bg-primary/10 hover:text-primary",
                            )}
                          >
                            {link.label}
                          </Link>
                        </SheetClose>
                      ))}
                    </div>
                  </div>
                ))}
                {navLinks.map((link) => (
                  <SheetClose asChild key={link.href}>
                    <Link
                      href={link.href}
                      className={cn(
                        "rounded-lg px-3 py-2 text-base font-semibold transition",
                        pathname === link.href
                          ? "bg-primary/10 text-primary"
                          : "text-muted-foreground hover:bg-primary/10 hover:text-primary",
                      )}
                    >
                      {link.label}
                    </Link>
                  </SheetClose>
                ))}
              </div>
              <Separator className="my-6 h-px w-full bg-border" />
              <div className="flex flex-col gap-3">
                <Button asChild size="lg">
                  <Link href={CALENDLY_URL} target="_blank" rel="noreferrer">
                    Diagnostic call
                  </Link>
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
