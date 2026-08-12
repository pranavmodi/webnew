import { NextRequest, NextResponse } from "next/server";


const ADVISOR_API =
  process.env.ADVISOR_ADMIN_API_URL ||
  process.env.NEXT_PUBLIC_ADVISOR_API_URL ||
  "https://intakeos.getpossibleminds.com/advisor";

export async function GET(req: NextRequest) {
  const limit = Math.max(1, Math.min(500, Number(req.nextUrl.searchParams.get("limit") || 100)));
  const response = await fetch(`${ADVISOR_API}/admin/sessions?limit=${limit}`, { cache: "no-store" });
  const text = await response.text();
  return new NextResponse(text, {
    status: response.status,
    headers: { "Content-Type": "application/json" },
  });
}
