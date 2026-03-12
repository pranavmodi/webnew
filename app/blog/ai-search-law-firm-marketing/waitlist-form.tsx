"use client";

import { useState } from "react";

export default function WaitlistForm() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim()) return;
    setStatus("loading");
    try {
      const res = await fetch("https://67.205.132.87:4130/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: email.trim(),
          product: "lexvisibility",
          source: "blog-ai-search-law-firm-marketing",
        }),
      });
      if (!res.ok) throw new Error("Failed");
      setStatus("success");
    } catch {
      setStatus("error");
    }
  };

  if (status === "success") {
    return (
      <div className="rounded-2xl border border-[#00ff41]/30 bg-[#04150d] p-8 text-center">
        <p className="text-xl font-semibold text-[#00ff41]">
          You&apos;re on the list.
        </p>
        <p className="mt-2 text-foreground/60">
          We&apos;ll be in touch when LexVisibility is ready.
        </p>
      </div>
    );
  }

  return (
    <div className="rounded-2xl border border-primary/20 bg-[#04150d]/60 p-8">
      <h3 className="mb-2 text-xl font-semibold text-[#00ff41] text-center">
        Get Early Access to LexVisibility
      </h3>
      <p className="mb-6 text-center text-sm text-foreground/60">
        Be the first to see where your firm stands in AI search. No spam. Just access.
      </p>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-3 sm:flex-row"
      >
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="you@lawfirm.com"
          required
          className="flex-1 rounded-full border border-primary/20 bg-black/50 px-5 py-3 text-white placeholder-foreground/30 focus:border-[#00ff41]/50 focus:outline-none"
        />
        <button
          type="submit"
          disabled={status === "loading"}
          className="rounded-full bg-[#00ff41] px-8 py-3 font-semibold text-black transition hover:bg-[#00ff41]/90 disabled:opacity-50"
        >
          {status === "loading" ? "..." : "Join Waitlist"}
        </button>
      </form>
      {status === "error" && (
        <p className="mt-3 text-center text-sm text-red-400">
          Something went wrong. Try again.
        </p>
      )}
    </div>
  );
}
