"use client";

import { motion } from "framer-motion";
import { Menu } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { CALENDLY_URL, SITE_NAME } from "@/lib/constants";
import { navLinks } from "@/lib/navigation";
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

export function Navbar() {
  const pathname = usePathname();

  const NavLink = ({ href, label }: { href: string; label: string }) => {
    const active = pathname === href;
    return (
      <Link
        href={href}
        className={cn(
          "relative px-3 py-2 text-sm font-semibold transition-colors",
          active ? "text-foreground" : "text-muted-foreground hover:text-foreground",
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
    <header className="fixed inset-x-0 top-0 z-50 border-b border-border/80 bg-background/80 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
        <Link className="flex items-center gap-2 text-base font-bold" href="/">
          <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-gradient-to-tr from-primary/90 to-emerald-500 text-background shadow-sm">
            PM
          </span>
          <div className="hidden flex-col leading-none sm:flex">
            <span>{SITE_NAME}</span>
            <span className="text-xs font-medium text-muted-foreground">
              Healthcare & Legal AI
            </span>
          </div>
        </Link>

        <nav className="hidden items-center gap-1 md:flex">
          {navLinks.map((link) => (
            <NavLink key={link.href} {...link} />
          ))}
        </nav>

        <div className="hidden items-center gap-2 md:flex">
          <Button asChild variant="outline" size="sm">
            <Link href="/solutions">See solutions</Link>
          </Button>
          <Button asChild size="sm">
            <Link href={CALENDLY_URL} target="_blank" rel="noreferrer">
              Book a demo
            </Link>
          </Button>
        </div>

        <div className="flex items-center md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" aria-label="Open navigation">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent>
              <SheetHeader>
                <SheetTitle className="text-left">Navigate</SheetTitle>
              </SheetHeader>
              <div className="mt-6 flex flex-col gap-3">
                {navLinks.map((link) => (
                  <SheetClose asChild key={link.href}>
                    <Link
                      href={link.href}
                      className={cn(
                        "rounded-lg px-3 py-2 text-base font-semibold transition",
                        pathname === link.href
                          ? "bg-accent text-foreground"
                          : "text-muted-foreground hover:bg-accent hover:text-foreground",
                      )}
                    >
                      {link.label}
                    </Link>
                  </SheetClose>
                ))}
              </div>
              <Separator className="my-6 h-px w-full bg-border" />
              <div className="flex flex-col gap-3">
                <SheetClose asChild>
                  <Button asChild variant="outline" size="lg">
                    <Link href="/solutions">See solutions</Link>
                  </Button>
                </SheetClose>
                <Button asChild size="lg">
                  <Link href={CALENDLY_URL} target="_blank" rel="noreferrer">
                    Book a demo
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
