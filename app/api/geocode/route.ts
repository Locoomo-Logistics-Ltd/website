import type { NextRequest } from "next/server";
import type { PlaceSuggestion } from "@/lib/nodes";

/**
 * Turns free text ("Lekki Phase 1", "12 Allen Avenue") into coordinates
 * via Geoapify autocomplete, restricted to Nigeria. The key lives in
 * `GEOAPIFY_API_KEY` (server-only, never shipped to the browser).
 *
 * Without a key this answers 503 `GEOCODER_NOT_CONFIGURED`, and the Finder
 * falls back to the Node API's own text search (`q`).
 */

const KEY = process.env.GEOAPIFY_API_KEY;

export async function GET(request: NextRequest) {
  const text = request.nextUrl.searchParams.get("text")?.trim().slice(0, 120) ?? "";
  if (text.length < 2) return Response.json({ items: [] satisfies PlaceSuggestion[] });

  if (!KEY) {
    return Response.json(
      { error: { code: "GEOCODER_NOT_CONFIGURED", message: "Place search is unavailable." } },
      { status: 503 },
    );
  }

  const url = new URL("https://api.geoapify.com/v1/geocode/autocomplete");
  url.searchParams.set("text", text);
  url.searchParams.set("filter", "countrycode:ng");
  url.searchParams.set("bias", "proximity:3.3792,6.5244"); // lean toward Lagos
  url.searchParams.set("limit", "5");
  url.searchParams.set("lang", "en");
  url.searchParams.set("format", "json");
  url.searchParams.set("apiKey", KEY);

  try {
    const res = await fetch(url, {
      signal: AbortSignal.timeout(8_000),
      next: { revalidate: 3600 },
    });
    if (!res.ok) throw new Error(String(res.status));

    const data = (await res.json()) as {
      results?: { formatted?: string; lat?: number; lon?: number }[];
    };

    const items: PlaceSuggestion[] = (data.results ?? [])
      .filter((r) => r.formatted && typeof r.lat === "number" && typeof r.lon === "number")
      .map((r) => ({ label: r.formatted as string, lat: r.lat as number, lng: r.lon as number }));

    return Response.json({ items });
  } catch {
    return Response.json(
      { error: { code: "GEOCODER_ERROR", message: "Place search is unavailable." } },
      { status: 502 },
    );
  }
}
