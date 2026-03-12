import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const forwarded = req.headers.get("x-forwarded-for") || "";
    const ua = req.headers.get("user-agent") || "";

    await fetch("http://67.205.132.87:8002/api/track", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-Forwarded-For": forwarded,
        "User-Agent": ua,
      },
      body: JSON.stringify({
        page: body.page || "",
        referrer: body.referrer || "",
      }),
    }).catch(() => {});

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ ok: true });
  }
}
