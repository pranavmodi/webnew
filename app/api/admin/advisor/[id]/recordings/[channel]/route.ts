import { NextResponse } from "next/server";


const ADVISOR_API =
  process.env.ADVISOR_ADMIN_API_URL ||
  process.env.NEXT_PUBLIC_ADVISOR_API_URL ||
  "https://advisor.getpossibleminds.com";

export async function GET(
  _req: Request,
  { params }: { params: { id: string; channel: string } },
) {
  const id = Number.parseInt(params.id, 10);
  if (!Number.isFinite(id) || !["caller", "advisor"].includes(params.channel)) {
    return NextResponse.json({ error: "Invalid recording" }, { status: 400 });
  }
  const response = await fetch(
    `${ADVISOR_API}/admin/sessions/${id}/recordings/${params.channel}`,
    { cache: "no-store" },
  );
  if (!response.ok || !response.body) {
    return NextResponse.json({ error: "Recording not found" }, { status: response.status });
  }
  return new NextResponse(response.body, {
    status: 200,
    headers: {
      "Content-Type": "audio/wav",
      "Content-Disposition": `inline; filename="mira-${id}-${params.channel}.wav"`,
    },
  });
}
