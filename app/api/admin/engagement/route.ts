import { NextRequest, NextResponse } from "next/server";

const POSSIBLEOS_API =
  process.env.POSSIBLEOS_ADMIN_API_URL ||
  process.env.NEXT_PUBLIC_AUTOCALLER_API_URL ||
  "https://possibleos.getpossibleminds.com";

function cleanInt(value: string | null, fallback: number, min: number, max: number) {
  const parsed = Number.parseInt(value || "", 10);
  if (!Number.isFinite(parsed)) return fallback;
  return Math.max(min, Math.min(max, parsed));
}

export async function GET(req: NextRequest) {
  const params = req.nextUrl.searchParams;
  const sinceDays = cleanInt(params.get("since_days"), 7, 0, 3650);
  const limit = cleanInt(params.get("limit"), 100, 1, 500);
  const country = (params.get("country") || "all").slice(0, 32);

  const res = await fetch(
    `${POSSIBLEOS_API}/api/lead-gen/engagement-analytics?since_days=${sinceDays}&limit=${limit}&country=${encodeURIComponent(country)}`,
    {
      cache: "no-store",
    },
  );

  const text = await res.text();
  if (!res.ok) {
    return NextResponse.json(
      {
        error: "engagement_analytics_unavailable",
        status: res.status,
        detail: text.slice(0, 500),
      },
      { status: 502 },
    );
  }

  return new NextResponse(text, {
    headers: { "Content-Type": "application/json" },
  });
}
