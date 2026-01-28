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

    const openaiApiKey = process.env.OPENAI_API_KEY;

    if (!openaiApiKey) {
      return NextResponse.json(
        { error: "OpenAI API key not configured" },
        { status: 500 }
      );
    }

    // Use OpenAI Responses API with web search tool and structured outputs
    const response = await fetch("https://api.openai.com/v1/responses", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${openaiApiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "gpt-5-nano",
        instructions:
          "You are a research assistant that finds LinkedIn profile URLs for people. " +
          "Use the web search tool to find the correct LinkedIn profile. " +
          "Search for the person by name, title, and company on LinkedIn. " +
          "Only return a real LinkedIn profile URL (linkedin.com/in/...) that you found via search. " +
          "If you cannot find a matching profile, set found to false.",
        input: `Find the LinkedIn profile URL for this person:\n\nName: ${name}\nTitle: ${title || "N/A"}\nCompany: ${firm || "N/A"}\n\nSearch the web and return their LinkedIn profile URL.`,
        tools: [{ type: "web_search_preview" }],
        text: {
          format: {
            type: "json_schema",
            name: "linkedin_result",
            strict: true,
            schema: {
              type: "object",
              properties: {
                found: {
                  type: "boolean",
                  description: "Whether a LinkedIn profile was found",
                },
                linkedin_url: {
                  type: "string",
                  description:
                    "The LinkedIn profile URL (e.g. https://www.linkedin.com/in/username). Empty string if not found.",
                },
              },
              required: ["found", "linkedin_url"],
              additionalProperties: false,
            },
          },
        },
      }),
    });

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      console.error("OpenAI Responses API error:", errorData);
      return NextResponse.json({ linkedinUrl: "" });
    }

    const data = await response.json();

    // Extract the text output from the Responses API format
    const textOutput = data.output?.find(
      (item: { type: string }) => item.type === "message"
    );
    const content =
      textOutput?.content?.find(
        (c: { type: string }) => c.type === "output_text"
      )?.text || "";

    if (!content) {
      return NextResponse.json({ linkedinUrl: "" });
    }

    try {
      const result = JSON.parse(content);

      if (
        result.found &&
        result.linkedin_url &&
        result.linkedin_url.includes("linkedin.com/in/")
      ) {
        return NextResponse.json({ linkedinUrl: result.linkedin_url });
      }
    } catch {
      console.error("Failed to parse LinkedIn search response:", content);
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
