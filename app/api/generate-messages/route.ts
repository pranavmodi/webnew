import { NextRequest, NextResponse } from "next/server";

interface ContactInfo {
  name: string;
  title: string;
  firm: string;
  bio: string;
}

interface GenerateMessagesRequest {
  contact: ContactInfo;
  caseStudyUrl: string;
  clientDescription: string;
}

const SYSTEM_PROMPT = `You are an expert at writing warm, conversational LinkedIn outreach messages for a B2B AI company called Possible Minds.

You need to generate 4 messages for each contact:
1. Short message from Pranav Modi (founder) - MUST be under 200 characters
2. Short message from Neha Pipada (engineer) - MUST be under 200 characters
3. Long LinkedIn message from Pranav Modi - 3-4 paragraphs, warm and personalized
4. Long LinkedIn message from Neha Pipada - 3-4 paragraphs, slightly more technical perspective

Guidelines:
- Be warm and conversational, not salesy
- Reference that their firm may have worked with/interacted with a client of ours
- Personalize based on the contact's bio, title, awards, or background when available
- Include the case study URL in each message
- Pranav's tone: Founder perspective, business-focused, mentions running the company
- Neha's tone: Engineer perspective, mentions building/engineering, slightly more technical
- Short messages should hook interest and include the URL
- Long messages should have a personalized opening based on their bio, then mention the client connection, and end with an invitation to chat

Return your response as a JSON object with these exact keys:
{
  "shortPranav": "message under 200 chars",
  "shortNeha": "message under 200 chars",
  "longPranav": "full LinkedIn message",
  "longNeha": "full LinkedIn message"
}`;

export async function POST(request: NextRequest) {
  try {
    const { contact, caseStudyUrl, clientDescription }: GenerateMessagesRequest =
      await request.json();

    if (!contact?.name) {
      return NextResponse.json(
        { error: "Contact name is required" },
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

    const firstName = contact.name.split(" ")[0];

    const userPrompt = `Generate LinkedIn outreach messages for this contact:

Name: ${contact.name}
Title: ${contact.title || "Not specified"}
Firm/Company: ${contact.firm || "Not specified"}
Bio: ${contact.bio || "No bio available"}

Context:
- Case Study URL: ${caseStudyUrl}
- Client Description: ${clientDescription}
- The contact's firm may have interacted with or worked with this client

Personalization notes:
${contact.bio ? `- Use details from their bio to personalize: ${contact.bio}` : "- No bio available, keep it general but warm"}
${contact.title ? `- Reference their role: ${contact.title}` : ""}

Remember:
- Short messages MUST be under 200 characters including the URL
- Address them by first name: ${firstName}
- Make it feel like a genuine connection, not a cold pitch

Return ONLY valid JSON with keys: shortPranav, shortNeha, longPranav, longNeha`;

    const response = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${openaiApiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "gpt-5-nano",
        messages: [
          { role: "system", content: SYSTEM_PROMPT },
          { role: "user", content: userPrompt },
        ],
        max_tokens: 2000,
        temperature: 0.7,
        response_format: { type: "json_object" },
      }),
    });

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      console.error("OpenAI API error:", errorData);
      return NextResponse.json(
        { error: "Failed to generate messages" },
        { status: 500 }
      );
    }

    const data = await response.json();
    const content = data.choices?.[0]?.message?.content;

    if (!content) {
      return NextResponse.json(
        { error: "No content generated" },
        { status: 500 }
      );
    }

    try {
      const messages = JSON.parse(content);

      // Validate and truncate short messages if needed
      const result = {
        shortPranav: truncateMessage(messages.shortPranav || "", 200),
        shortNeha: truncateMessage(messages.shortNeha || "", 200),
        longPranav: messages.longPranav || "",
        longNeha: messages.longNeha || "",
      };

      return NextResponse.json(result);
    } catch (parseError) {
      console.error("Failed to parse OpenAI response:", content);
      return NextResponse.json(
        { error: "Failed to parse generated messages" },
        { status: 500 }
      );
    }
  } catch (error) {
    console.error("Message generation error:", error);
    return NextResponse.json(
      { error: "Message generation failed" },
      { status: 500 }
    );
  }
}

function truncateMessage(message: string, maxLength: number): string {
  if (message.length <= maxLength) {
    return message;
  }

  // Try to truncate at a word boundary
  const truncated = message.substring(0, maxLength - 3);
  const lastSpace = truncated.lastIndexOf(" ");

  if (lastSpace > maxLength - 50) {
    return truncated.substring(0, lastSpace) + "...";
  }

  return truncated + "...";
}
