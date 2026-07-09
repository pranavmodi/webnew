import { NextRequest, NextResponse } from "next/server";

const POSSIBLEOS_API =
  process.env.POSSIBLEOS_ADMIN_API_URL ||
  process.env.NEXT_PUBLIC_AUTOCALLER_API_URL ||
  "https://possibleos.getpossibleminds.com";

function firstHeader(req: NextRequest, names: string[]) {
  for (const name of names) {
    const value = req.headers.get(name);
    if (value) return value;
  }
  return "";
}

function firstForwardedIp(value: string) {
  return value.split(",").map((part) => part.trim()).find(Boolean) || "";
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const forwardedFor = req.headers.get("x-forwarded-for") || "";
    const ipAddress = firstForwardedIp(forwardedFor);
    const userAgent = req.headers.get("user-agent") || "";
    const countryCode = firstHeader(req, [
      "x-vercel-ip-country",
      "cf-ipcountry",
      "cloudfront-viewer-country",
      "x-country-code",
    ]).toUpperCase();
    const region = firstHeader(req, ["x-vercel-ip-country-region", "x-region"]);
    const city = firstHeader(req, ["x-vercel-ip-city", "x-city"]);

    const res = await fetch(`${POSSIBLEOS_API}/api/lead-gen/page-event`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-Forwarded-For": forwardedFor,
        "User-Agent": userAgent,
        ...(countryCode ? { "X-Vercel-IP-Country": countryCode } : {}),
        ...(region ? { "X-Vercel-IP-Country-Region": region } : {}),
        ...(city ? { "X-Vercel-IP-City": city } : {}),
      },
      body: JSON.stringify({
        ...body,
        ip_address: ipAddress || null,
        country_code: countryCode || null,
        region: region || null,
        city: city || null,
        user_agent: userAgent || null,
      }),
      cache: "no-store",
    });

    const text = await res.text();
    if (!res.ok) {
      return NextResponse.json(
        {
          error: "page_event_unavailable",
          status: res.status,
          detail: text.slice(0, 500),
        },
        { status: 502 },
      );
    }

    return new NextResponse(text || "{\"ok\":true}", {
      headers: { "Content-Type": "application/json" },
    });
  } catch {
    return NextResponse.json({ ok: true });
  }
}
