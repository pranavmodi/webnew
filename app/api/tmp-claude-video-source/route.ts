import { NextResponse } from "next/server";

export const runtime = "edge";

export async function GET() {
  const response = await fetch(
    "https://www.youtube.com/youtubei/v1/player?key=AIzaSyAO_FJ2SlqU8Q4STEHLGCilw_Y9_11qcW8",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "User-Agent": "com.google.android.youtube/21.32.35 (Linux; U; Android 14) gzip",
        "X-YouTube-Client-Name": "3",
        "X-YouTube-Client-Version": "21.32.35",
      },
      body: JSON.stringify({
        videoId: "B04_OEqqN3I",
        context: {
          client: {
            clientName: "ANDROID",
            clientVersion: "21.32.35",
            androidSdkVersion: 34,
            hl: "en",
            gl: "US",
          },
        },
      }),
      cache: "no-store",
    },
  );

  const body = await response.json();
  const formats = [
    ...(body.streamingData?.formats || []),
    ...(body.streamingData?.adaptiveFormats || []),
  ];
  const video = formats
    .filter((format: { url?: string; mimeType?: string; height?: number }) =>
      format.url && format.mimeType?.startsWith("video/"),
    )
    .sort(
      (left: { height?: number }, right: { height?: number }) =>
        (right.height || 0) - (left.height || 0),
    )[0];

  return NextResponse.json({
    status: body.playabilityStatus,
    title: body.videoDetails?.title,
    duration: body.videoDetails?.lengthSeconds,
    video,
  });
}
