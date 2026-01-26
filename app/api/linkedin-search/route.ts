import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const { name, title, firm } = await request.json();

    if (!name) {
      return NextResponse.json(
        { error: "Name is required" },
        { status: 400 }
      );
    }

    // Build search query
    const searchQuery = `${name} ${title || ""} ${firm || ""} LinkedIn site:linkedin.com/in`;

    // Use Serper API for Google search (or fallback to OpenAI for extraction)
    const serperApiKey = process.env.SERPER_API_KEY;

    if (serperApiKey) {
      // Use Serper API
      const response = await fetch("https://google.serper.dev/search", {
        method: "POST",
        headers: {
          "X-API-KEY": serperApiKey,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          q: searchQuery,
          num: 5,
        }),
      });

      if (response.ok) {
        const data = await response.json();
        const linkedinUrl = extractLinkedInUrl(data.organic || [], name);
        return NextResponse.json({ linkedinUrl });
      }
    }

    // Fallback: Use OpenAI to search and extract
    const openaiApiKey = process.env.OPENAI_API_KEY;

    if (openaiApiKey) {
      // Use OpenAI with web browsing or just return empty
      // For now, we'll use OpenAI to make a best guess based on naming conventions
      const response = await fetch("https://api.openai.com/v1/chat/completions", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${openaiApiKey}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          model: "gpt-4o-mini",
          messages: [
            {
              role: "system",
              content: `You are a helper that generates likely LinkedIn profile URLs based on common naming patterns.
              Given a person's name, title, and company, generate the most likely LinkedIn URL.
              LinkedIn URLs typically follow patterns like:
              - linkedin.com/in/firstname-lastname
              - linkedin.com/in/firstnamelastname
              - linkedin.com/in/firstname-lastname-numbers

              Only return the URL, nothing else. If you can't make a reasonable guess, return "NOT_FOUND".`,
            },
            {
              role: "user",
              content: `Name: ${name}\nTitle: ${title || "N/A"}\nCompany: ${firm || "N/A"}`,
            },
          ],
          max_tokens: 100,
          temperature: 0.3,
        }),
      });

      if (response.ok) {
        const data = await response.json();
        const suggestion = data.choices?.[0]?.message?.content?.trim() || "";

        if (suggestion && suggestion !== "NOT_FOUND" && suggestion.includes("linkedin.com")) {
          return NextResponse.json({ linkedinUrl: suggestion });
        }
      }
    }

    return NextResponse.json({ linkedinUrl: "" });
  } catch (error) {
    console.error("LinkedIn search error:", error);
    return NextResponse.json(
      { error: "Search failed" },
      { status: 500 }
    );
  }
}

function extractLinkedInUrl(
  results: Array<{ link?: string; title?: string }>,
  name: string
): string {
  // Look for LinkedIn profile URLs in search results
  const nameParts = name.toLowerCase().split(" ");
  const firstName = nameParts[0];
  const lastName = nameParts[nameParts.length - 1];

  for (const result of results) {
    const link = result.link || "";
    const title = (result.title || "").toLowerCase();

    // Check if it's a LinkedIn profile URL
    if (link.includes("linkedin.com/in/")) {
      // Verify the name appears in the title or URL
      const linkLower = link.toLowerCase();
      if (
        title.includes(firstName) ||
        title.includes(lastName) ||
        linkLower.includes(firstName) ||
        linkLower.includes(lastName)
      ) {
        return link;
      }
    }
  }

  // Return first LinkedIn /in/ URL if no exact match
  for (const result of results) {
    const link = result.link || "";
    if (link.includes("linkedin.com/in/")) {
      return link;
    }
  }

  return "";
}
