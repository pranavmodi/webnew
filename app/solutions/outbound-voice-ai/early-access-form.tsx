"use client";

import { useEffect, useState } from "react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

// Possible OS backend — records the early-access signup as a lead-gen
// product-interest observation. Override via NEXT_PUBLIC_AUTOCALLER_API_URL.
const AUTOCALLER_API =
  process.env.NEXT_PUBLIC_AUTOCALLER_API_URL ||
  "https://autocaller.getpossibleminds.com";

export default function EarlyAccessForm() {
  const [email, setEmail] = useState("");
  const [firm, setFirm] = useState("");
  const [name, setName] = useState("");
  const [linkCode, setLinkCode] = useState<string | null>(null);
  const [status, setStatus] = useState<"idle" | "sending" | "done" | "error">("idle");
  const [error, setError] = useState<string | null>(null);

  // The /s/{code} redirect appends ?lc=<code> so we can attribute the signup
  // back to the exact recipient who clicked the email link.
  useEffect(() => {
    try {
      const params = new URLSearchParams(window.location.search);
      setLinkCode(params.get("lc"));
    } catch {
      /* ignore */
    }
  }, []);

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    if (!email.includes("@")) {
      setError("Please enter a valid email.");
      return;
    }
    setStatus("sending");
    try {
      const res = await fetch(`${AUTOCALLER_API}/api/lead-gen/product-interest`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email,
          firm: firm || null,
          name: name || null,
          product: "outbound-voice-ai",
          link_code: linkCode,
          source: "solution_page_early_access",
        }),
      });
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      setStatus("done");
    } catch (err) {
      setStatus("error");
      setError("Something went wrong. Email pranav@getpossibleminds.com and we'll add you.");
    }
  };

  if (status === "done") {
    return (
      <div className="rounded-2xl border border-primary/30 bg-[#04150d] p-6">
        <p className="text-base text-primary">
          You&apos;re on the early-access list. We&apos;ll reach out as we onboard the first
          PI firms, and we&apos;d value your input on what to build first.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="rounded-2xl border border-primary/30 bg-[#04150d] p-6">
      <h3 className="text-xl font-semibold text-primary">Be one of the first PI firms we build this for</h3>
      <p className="mt-2 text-sm text-foreground/70">
        We&apos;re onboarding a small group of personal-injury firms as design partners.
        Leave your email and we&apos;ll reach out, no commitment.
      </p>
      <div className="mt-5 grid gap-4 sm:grid-cols-2">
        <div className="space-y-1.5">
          <Label htmlFor="ea-email">Work email</Label>
          <Input
            id="ea-email"
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="you@yourfirm.com"
          />
        </div>
        <div className="space-y-1.5">
          <Label htmlFor="ea-firm">Firm</Label>
          <Input
            id="ea-firm"
            value={firm}
            onChange={(e) => setFirm(e.target.value)}
            placeholder="Your firm"
          />
        </div>
        <div className="space-y-1.5 sm:col-span-2">
          <Label htmlFor="ea-name">Your name (optional)</Label>
          <Input
            id="ea-name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="First and last"
          />
        </div>
      </div>
      {error && <p className="mt-3 text-sm text-red-400">{error}</p>}
      <Button type="submit" disabled={status === "sending"} className="mt-5">
        {status === "sending" ? "Adding you..." : "Request early access"}
      </Button>
    </form>
  );
}
