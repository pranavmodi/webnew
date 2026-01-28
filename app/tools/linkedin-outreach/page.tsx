"use client";

import { useState } from "react";
import Link from "next/link";

import { Button } from "@/components/ui/button";

interface Contact {
  id: string;
  name: string;
  title: string;
  firm: string;
  bio: string;
  linkedin: string;
  linkedinStatus: "pending" | "searching" | "found" | "not_found";
  shortMessagePranav: string;
  shortMessageNeha: string;
  longMessagePranav: string;
  longMessageNeha: string;
  messageStatus: "pending" | "generating" | "done" | "error";
}

type ProcessingStep =
  | "idle"
  | "parsing"
  | "searching_linkedin"
  | "generating_messages"
  | "complete";

export default function LinkedInOutreachPage() {
  const [contacts, setContacts] = useState<Contact[]>([]);
  const [step, setStep] = useState<ProcessingStep>("idle");
  const [currentContactIndex, setCurrentContactIndex] = useState(0);
  const [error, setError] = useState<string | null>(null);
  const [caseStudyUrl, setCaseStudyUrl] = useState("https://getpossibleminds.com/healthcare-case-study");
  const [clientDescription, setClientDescription] = useState(
    "a California-based medical imaging company we helped transform their patient support operations"
  );

  const splitCSVIntoRows = (text: string): string[] => {
    const rows: string[] = [];
    let current = "";
    let inQuotes = false;

    for (let i = 0; i < text.length; i++) {
      const char = text[i];
      if (char === '"') {
        inQuotes = !inQuotes;
        current += char;
      } else if ((char === "\n" || char === "\r") && !inQuotes) {
        if (current.trim()) rows.push(current);
        current = "";
        // Skip \r\n pairs
        if (char === "\r" && text[i + 1] === "\n") i++;
      } else {
        current += char;
      }
    }
    if (current.trim()) rows.push(current);
    return rows;
  };

  const parseCSVRow = (row: string): string[] => {
    const result: string[] = [];
    let current = "";
    let inQuotes = false;

    for (let i = 0; i < row.length; i++) {
      const char = row[i];
      if (char === '"') {
        if (inQuotes && row[i + 1] === '"') {
          current += '"';
          i++;
        } else {
          inQuotes = !inQuotes;
        }
      } else if (char === "," && !inQuotes) {
        result.push(current);
        current = "";
      } else {
        current += char;
      }
    }
    result.push(current);
    return result;
  };

  const findColumnIndex = (headers: string[], ...patterns: string[]): number => {
    // Try patterns in order of specificity (most specific first)
    for (const pattern of patterns) {
      const idx = headers.findIndex((h) => h === pattern);
      if (idx >= 0) return idx;
    }
    // Fall back to partial matches in pattern order
    for (const pattern of patterns) {
      const idx = headers.findIndex((h) => h.includes(pattern));
      if (idx >= 0) return idx;
    }
    return -1;
  };

  const parseCSV = (text: string): Contact[] => {
    const rows = splitCSVIntoRows(text);
    if (rows.length < 2) return [];

    const headers = parseCSVRow(rows[0]).map((h) => h.trim().toLowerCase());

    // Use specific matches first to avoid "firm name" matching for "name"
    const nameIdx = findColumnIndex(headers, "contact name", "contact_name", "full name", "name");
    const titleIdx = findColumnIndex(headers, "position/title", "position", "title", "role");
    const firmIdx = findColumnIndex(headers, "firm name", "firm_name", "firm", "company name", "company");
    const bioIdx = findColumnIndex(headers, "bio", "biography", "description");
    const linkedinIdx = findColumnIndex(headers, "linkedin", "linkedin url", "linkedin_url");

    // Ensure nameIdx doesn't collide with firmIdx
    const resolvedNameIdx =
      nameIdx === firmIdx
        ? headers.findIndex(
            (h, i) => i !== firmIdx && (h.includes("contact") || h === "name")
          )
        : nameIdx;

    const parsed: Contact[] = [];

    for (let i = 1; i < rows.length; i++) {
      const row = parseCSVRow(rows[i]);
      if (row.length === 0) continue;

      const name = resolvedNameIdx >= 0 ? row[resolvedNameIdx]?.trim() : "";
      if (!name) continue;

      const linkedinVal = linkedinIdx >= 0 ? row[linkedinIdx]?.trim() || "" : "";

      parsed.push({
        id: `contact-${i}`,
        name,
        title: titleIdx >= 0 ? row[titleIdx]?.trim() || "" : "",
        firm: firmIdx >= 0 ? row[firmIdx]?.trim() || "" : "",
        bio: bioIdx >= 0 ? row[bioIdx]?.trim() || "" : "",
        linkedin: linkedinVal,
        linkedinStatus: linkedinVal ? "found" : "pending",
        shortMessagePranav: "",
        shortMessageNeha: "",
        longMessagePranav: "",
        longMessageNeha: "",
        messageStatus: "pending",
      });
    }

    return parsed;
  };

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    setError(null);
    setStep("parsing");

    const reader = new FileReader();
    reader.onload = (e) => {
      try {
        const text = e.target?.result as string;
        const parsed = parseCSV(text);
        if (parsed.length === 0) {
          setError("No valid contacts found in CSV. Make sure it has a 'Contact Name' column.");
          setStep("idle");
          return;
        }
        setContacts(parsed);
        setStep("idle");
      } catch {
        setError("Failed to parse CSV file.");
        setStep("idle");
      }
    };
    reader.readAsText(file);
  };

  const searchLinkedIn = async (contact: Contact): Promise<string> => {
    try {
      const response = await fetch("/api/linkedin-search", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: contact.name,
          title: contact.title,
          firm: contact.firm,
        }),
      });

      if (!response.ok) {
        throw new Error("Search failed");
      }

      const data = await response.json();
      return data.linkedinUrl || "";
    } catch {
      return "";
    }
  };

  const generateMessages = async (contact: Contact): Promise<{
    shortPranav: string;
    shortNeha: string;
    longPranav: string;
    longNeha: string;
  }> => {
    try {
      const response = await fetch("/api/generate-messages", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          contact: {
            name: contact.name,
            title: contact.title,
            firm: contact.firm,
            bio: contact.bio,
          },
          caseStudyUrl,
          clientDescription,
        }),
      });

      if (!response.ok) {
        throw new Error("Message generation failed");
      }

      return await response.json();
    } catch {
      return {
        shortPranav: "",
        shortNeha: "",
        longPranav: "",
        longNeha: "",
      };
    }
  };

  const processContacts = async () => {
    if (contacts.length === 0) return;

    // Step 1: Search for LinkedIn profiles
    setStep("searching_linkedin");
    for (let i = 0; i < contacts.length; i++) {
      const contact = contacts[i];
      setCurrentContactIndex(i);

      if (contact.linkedinStatus === "found") continue;

      setContacts((prev) =>
        prev.map((c, idx) =>
          idx === i ? { ...c, linkedinStatus: "searching" } : c
        )
      );

      const linkedinUrl = await searchLinkedIn(contact);

      setContacts((prev) =>
        prev.map((c, idx) =>
          idx === i
            ? {
                ...c,
                linkedin: linkedinUrl,
                linkedinStatus: linkedinUrl ? "found" : "not_found",
              }
            : c
        )
      );

      // Small delay to avoid rate limiting
      await new Promise((resolve) => setTimeout(resolve, 500));
    }

    // Step 2: Generate messages
    setStep("generating_messages");
    for (let i = 0; i < contacts.length; i++) {
      setCurrentContactIndex(i);

      setContacts((prev) =>
        prev.map((c, idx) =>
          idx === i ? { ...c, messageStatus: "generating" } : c
        )
      );

      const latestContact = contacts[i];
      const messages = await generateMessages(latestContact);

      setContacts((prev) =>
        prev.map((c, idx) =>
          idx === i
            ? {
                ...c,
                shortMessagePranav: messages.shortPranav,
                shortMessageNeha: messages.shortNeha,
                longMessagePranav: messages.longPranav,
                longMessageNeha: messages.longNeha,
                messageStatus: messages.shortPranav ? "done" : "error",
              }
            : c
        )
      );

      // Small delay to avoid rate limiting
      await new Promise((resolve) => setTimeout(resolve, 1000));
    }

    setStep("complete");
  };

  const downloadCSV = () => {
    const headers = [
      "Contact Name",
      "Title",
      "Firm",
      "Bio",
      "LinkedIn",
      "Short Message (Pranav)",
      "Short Message (Neha)",
      "Long Message (Pranav)",
      "Long Message (Neha)",
    ];

    const escapeCSV = (str: string) => {
      if (str.includes(",") || str.includes('"') || str.includes("\n")) {
        return `"${str.replace(/"/g, '""')}"`;
      }
      return str;
    };

    const rows = contacts.map((c) =>
      [
        c.name,
        c.title,
        c.firm,
        c.bio,
        c.linkedin,
        c.shortMessagePranav,
        c.shortMessageNeha,
        c.longMessagePranav,
        c.longMessageNeha,
      ]
        .map(escapeCSV)
        .join(",")
    );

    const csv = [headers.join(","), ...rows].join("\n");
    const blob = new Blob([csv], { type: "text/csv" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "linkedin_outreach_messages.csv";
    a.click();
    URL.revokeObjectURL(url);
  };

  const getStatusBadge = (status: string) => {
    const styles: Record<string, string> = {
      pending: "bg-gray-500/20 text-gray-400",
      searching: "bg-yellow-500/20 text-yellow-400 animate-pulse",
      generating: "bg-blue-500/20 text-blue-400 animate-pulse",
      found: "bg-green-500/20 text-green-400",
      not_found: "bg-red-500/20 text-red-400",
      done: "bg-green-500/20 text-green-400",
      error: "bg-red-500/20 text-red-400",
    };
    return styles[status] || styles.pending;
  };

  return (
    <div className="min-h-screen bg-black pb-24">
      <section className="relative overflow-hidden border-b border-primary/15">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(0,255,65,0.15),_rgba(0,0,0,0)_55%)]" />
        <div className="relative mx-auto max-w-6xl px-4 py-12 sm:px-6">
          <div className="space-y-4">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary"
            >
              ← Back to home
            </Link>
            <h1 className="text-3xl font-semibold tracking-tight text-[#00ff41] sm:text-4xl">
              LinkedIn Outreach Tool
            </h1>
            <p className="max-w-2xl text-base text-foreground/80">
              Upload a CSV with contacts, and this tool will find LinkedIn profiles and
              generate personalized outreach messages for Pranav and Neha.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl space-y-8 px-4 pt-8 sm:px-6">
        {/* Configuration */}
        <div className="rounded-2xl border border-primary/25 bg-[#04150d] p-6">
          <h2 className="text-xl font-semibold text-primary">Configuration</h2>
          <div className="mt-4 grid gap-4 sm:grid-cols-2">
            <div>
              <label className="block text-sm font-medium text-foreground/80">
                Case Study URL
              </label>
              <input
                type="text"
                value={caseStudyUrl}
                onChange={(e) => setCaseStudyUrl(e.target.value)}
                className="mt-1 w-full rounded-lg border border-primary/20 bg-black/50 px-3 py-2 text-sm text-foreground"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-foreground/80">
                Client Description
              </label>
              <input
                type="text"
                value={clientDescription}
                onChange={(e) => setClientDescription(e.target.value)}
                className="mt-1 w-full rounded-lg border border-primary/20 bg-black/50 px-3 py-2 text-sm text-foreground"
              />
            </div>
          </div>
        </div>

        {/* Upload Section */}
        <div className="rounded-2xl border border-primary/25 bg-[#04150d] p-6">
          <h2 className="text-xl font-semibold text-primary">Step 1: Upload CSV</h2>
          <p className="mt-2 text-sm text-muted-foreground">
            CSV should have columns: Contact Name, Position/Title, Firm Name, Bio, LinkedIn (optional)
          </p>
          <div className="mt-4">
            <input
              type="file"
              accept=".csv"
              onChange={handleFileUpload}
              className="block w-full text-sm text-foreground/80 file:mr-4 file:rounded-lg file:border-0 file:bg-primary/20 file:px-4 file:py-2 file:text-sm file:font-medium file:text-primary hover:file:bg-primary/30"
            />
          </div>
          {error && (
            <p className="mt-2 text-sm text-red-400">{error}</p>
          )}
          {contacts.length > 0 && step === "idle" && (
            <p className="mt-2 text-sm text-green-400">
              Loaded {contacts.length} contacts
            </p>
          )}
        </div>

        {/* Process Section */}
        {contacts.length > 0 && (
          <div className="rounded-2xl border border-primary/25 bg-[#04150d] p-6">
            <h2 className="text-xl font-semibold text-primary">Step 2: Process Contacts</h2>
            <p className="mt-2 text-sm text-muted-foreground">
              This will search for LinkedIn profiles and generate personalized messages using AI.
            </p>
            <div className="mt-4 flex flex-wrap gap-3">
              <Button
                onClick={processContacts}
                disabled={step !== "idle" && step !== "complete"}
                className="bg-primary text-black hover:bg-primary/90"
              >
                {step === "idle" || step === "complete"
                  ? "Start Processing"
                  : step === "searching_linkedin"
                  ? `Searching LinkedIn (${currentContactIndex + 1}/${contacts.length})`
                  : `Generating Messages (${currentContactIndex + 1}/${contacts.length})`}
              </Button>
              {step === "complete" && (
                <Button onClick={downloadCSV} variant="outline">
                  Download Results CSV
                </Button>
              )}
            </div>

            {/* Progress indicator */}
            {step !== "idle" && step !== "complete" && (
              <div className="mt-4">
                <div className="h-2 w-full overflow-hidden rounded-full bg-primary/20">
                  <div
                    className="h-full bg-primary transition-all duration-300"
                    style={{
                      width: `${((currentContactIndex + 1) / contacts.length) * 100}%`,
                    }}
                  />
                </div>
              </div>
            )}
          </div>
        )}

        {/* Results Table */}
        {contacts.length > 0 && (
          <div className="rounded-2xl border border-primary/25 bg-[#04150d] p-6">
            <h2 className="text-xl font-semibold text-primary">Contacts & Messages</h2>
            <div className="mt-4 overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-primary/20 text-left text-muted-foreground">
                    <th className="pb-3 pr-4">Name</th>
                    <th className="pb-3 pr-4">Title</th>
                    <th className="pb-3 pr-4">LinkedIn</th>
                    <th className="pb-3 pr-4">Messages</th>
                  </tr>
                </thead>
                <tbody>
                  {contacts.map((contact) => (
                    <tr
                      key={contact.id}
                      className="border-b border-primary/10"
                    >
                      <td className="py-3 pr-4">
                        <div className="font-medium text-foreground">
                          {contact.name}
                        </div>
                        <div className="text-xs text-muted-foreground">
                          {contact.firm}
                        </div>
                      </td>
                      <td className="py-3 pr-4 text-foreground/80">
                        {contact.title}
                      </td>
                      <td className="py-3 pr-4">
                        <span
                          className={`inline-flex rounded-full px-2 py-1 text-xs font-medium ${getStatusBadge(
                            contact.linkedinStatus
                          )}`}
                        >
                          {contact.linkedinStatus === "found" ? (
                            <a
                              href={contact.linkedin}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="hover:underline"
                            >
                              Found ↗
                            </a>
                          ) : (
                            contact.linkedinStatus
                          )}
                        </span>
                      </td>
                      <td className="py-3 pr-4">
                        <span
                          className={`inline-flex rounded-full px-2 py-1 text-xs font-medium ${getStatusBadge(
                            contact.messageStatus
                          )}`}
                        >
                          {contact.messageStatus}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* Message Preview */}
        {contacts.some((c) => c.messageStatus === "done") && (
          <div className="rounded-2xl border border-primary/25 bg-[#04150d] p-6">
            <h2 className="text-xl font-semibold text-primary">Message Preview</h2>
            <div className="mt-4 space-y-6">
              {contacts
                .filter((c) => c.messageStatus === "done")
                .map((contact) => (
                  <div
                    key={contact.id}
                    className="rounded-xl border border-primary/20 bg-black/40 p-4"
                  >
                    <h3 className="font-medium text-primary">{contact.name}</h3>
                    <div className="mt-4 grid gap-4 lg:grid-cols-2">
                      <div>
                        <h4 className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
                          Short - Pranav
                        </h4>
                        <p className="mt-1 text-sm text-foreground/80">
                          {contact.shortMessagePranav}
                        </p>
                        <p className="mt-1 text-xs text-muted-foreground">
                          {contact.shortMessagePranav.length} chars
                        </p>
                      </div>
                      <div>
                        <h4 className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
                          Short - Neha
                        </h4>
                        <p className="mt-1 text-sm text-foreground/80">
                          {contact.shortMessageNeha}
                        </p>
                        <p className="mt-1 text-xs text-muted-foreground">
                          {contact.shortMessageNeha.length} chars
                        </p>
                      </div>
                      <div className="lg:col-span-2">
                        <h4 className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
                          Long - Pranav
                        </h4>
                        <p className="mt-1 whitespace-pre-wrap text-sm text-foreground/80">
                          {contact.longMessagePranav}
                        </p>
                      </div>
                      <div className="lg:col-span-2">
                        <h4 className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
                          Long - Neha
                        </h4>
                        <p className="mt-1 whitespace-pre-wrap text-sm text-foreground/80">
                          {contact.longMessageNeha}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        )}
      </section>
    </div>
  );
}
