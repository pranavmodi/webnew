"use client";

import { useState } from "react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { contactIndustries } from "@/lib/content";
import { CALENDLY_URL } from "@/lib/constants";
import { cn } from "@/lib/utils";
import { toast } from "@/components/ui/use-toast";

type FormState = {
  name: string;
  email: string;
  company: string;
  industry: string;
  message: string;
};

const initialState: FormState = {
  name: "",
  email: "",
  company: "",
  industry: contactIndustries[0],
  message: "",
};

export function ContactForm({ inline }: { inline?: boolean }) {
  const [form, setForm] = useState<FormState>(initialState);
  const [errors, setErrors] = useState<Partial<FormState>>({});
  const [submitting, setSubmitting] = useState(false);

  const validate = () => {
    const nextErrors: Partial<FormState> = {};
    if (!form.name.trim()) nextErrors.name = "Name is required.";
    if (!form.email.trim() || !/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(form.email)) {
      nextErrors.email = "Enter a valid email.";
    }
    if (!form.company.trim()) nextErrors.company = "Company is required.";
    if (!form.message.trim()) nextErrors.message = "Tell us a bit about your needs.";
    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  };

  const handleChange = (
    field: keyof FormState,
    value: string,
  ) => {
    setForm((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!validate()) return;
    setSubmitting(true);
    setTimeout(() => {
      toast({
        title: "We received your message.",
        description: "We will reach out within one business day.",
      });
      setForm(initialState);
      setSubmitting(false);
    }, 400);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className={cn("space-y-4 rounded-2xl border border-border/80 bg-card/80 p-4 shadow-soft", {
        "bg-transparent p-0 border-none shadow-none": inline,
      })}
      noValidate
    >
      <div className="grid gap-4 sm:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="name">Name</Label>
          <Input
            id="name"
            name="name"
            value={form.name}
            onChange={(e) => handleChange("name", e.target.value)}
            aria-invalid={Boolean(errors.name)}
            aria-describedby="name-error"
            placeholder="Jamie Lee"
          />
          {errors.name && (
            <p id="name-error" className="text-xs text-destructive">
              {errors.name}
            </p>
          )}
        </div>
        <div className="space-y-2">
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            name="email"
            type="email"
            value={form.email}
            onChange={(e) => handleChange("email", e.target.value)}
            aria-invalid={Boolean(errors.email)}
            aria-describedby="email-error"
            placeholder="jamie@example.com"
          />
          {errors.email && (
            <p id="email-error" className="text-xs text-destructive">
              {errors.email}
            </p>
          )}
        </div>
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="company">Company</Label>
          <Input
            id="company"
            name="company"
            value={form.company}
            onChange={(e) => handleChange("company", e.target.value)}
            aria-invalid={Boolean(errors.company)}
            aria-describedby="company-error"
            placeholder="Northwind Health"
          />
          {errors.company && (
            <p id="company-error" className="text-xs text-destructive">
              {errors.company}
            </p>
          )}
        </div>
        <div className="space-y-2">
          <Label htmlFor="industry">Industry</Label>
          <select
            id="industry"
            name="industry"
            value={form.industry}
            onChange={(e) => handleChange("industry", e.target.value)}
            className="h-11 w-full rounded-xl border border-border/80 bg-muted px-3 text-sm text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50 focus-visible:ring-offset-2 focus-visible:ring-offset-background"
          >
            {contactIndustries.map((industry) => (
              <option key={industry} value={industry}>
                {industry}
              </option>
            ))}
          </select>
        </div>
      </div>
      <div className="space-y-2">
        <Label htmlFor="message">What can we help with?</Label>
        <Textarea
          id="message"
          name="message"
          value={form.message}
          onChange={(e) => handleChange("message", e.target.value)}
          aria-invalid={Boolean(errors.message)}
          aria-describedby="message-error"
          placeholder="Share workflows you want to accelerate."
        />
        {errors.message && (
          <p id="message-error" className="text-xs text-destructive">
            {errors.message}
          </p>
        )}
      </div>
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <Button type="submit" disabled={submitting}>
          {submitting ? "Sending..." : "Send message"}
        </Button>
        <a
          className="text-sm font-semibold text-primary underline-offset-6 hover:underline"
          href={CALENDLY_URL}
          target="_blank"
          rel="noreferrer"
        >
          Prefer to talk? Book a demo →
        </a>
      </div>
    </form>
  );
}
