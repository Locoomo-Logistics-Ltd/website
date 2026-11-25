import type { NextRequest } from "next/server";
import { RADIUS_MAX_KM, RADIUS_MIN_KM } from "@/lib/nodes";

/**
 * Same-origin proxy for the public Node directory
 * (`GET {API}/public/nodes`). The API is unauthenticated, but it only
 * allow-lists specific browser origins for CORS, so the browser talks to
 * this route instead and the server talks to the API.
 *
 * Only a whitelist of validated query params is forwarded, so this can't
 * be used as an open relay to other API routes.
 */

const API_BASE =
  process.env.LOCOOMO_API_BASE_URL ?? "https://api-loccomo.up.railway.app/api/v1";

const NEAR_RE = /^-?\d{1,3}(\.\d+)?,-?\d{1,3}(\.\d+)?$/;
const SORTS = new Set(["distance", "name", "city", "state"]);

function bad(message: string) {
  return Response.json({ error: { code: "BAD_REQUEST", message } }, { status: 400 });
}

export async function GET(request: NextRequest) {
  const incoming = request.nextUrl.searchParams;
  const out = new URLSearchParams();

  const near = incoming.get("near");
  if (near) {
    if (!NEAR_RE.test(near)) return bad("Invalid location.");
    const [lat, lng] = near.split(",").map(Number);
    if (Math.abs(lat) > 90 || Math.abs(lng) > 180) return bad("Invalid location.");
    out.set("near", near);

    const radius = Number(incoming.get("radiusKm") ?? 10);
    if (!Number.isFinite(radius) || radius < RADIUS_MIN_KM || radius > RADIUS_MAX_KM) {
      return bad("Invalid radius.");
    }
    out.set("radiusKm", String(radius));
  }

  const sort = incoming.get("sort");
  if (sort) {
    if (!SORTS.has(sort) || (sort === "distance" && !near)) return bad("Invalid sort.");
    out.set("sort", sort);
  }

  for (const key of ["q", "state", "city"] as const) {
    const value = incoming.get(key)?.trim();
    if (value) out.set(key, value.slice(0, 100));
  }

  const accepting = incoming.get("acceptingParcels");
  if (accepting === "true" || accepting === "false") out.set("acceptingParcels", accepting);

  const limit = Number(incoming.get("limit") ?? 12);
  out.set("limit", String(Number.isInteger(limit) && limit >= 1 && limit <= 100 ? limit : 12));

  const cursor = incoming.get("cursor");
  if (cursor) out.set("cursor", cursor.slice(0, 200));

  try {
    const res = await fetch(`${API_BASE}/public/nodes?${out.toString()}`, {
      headers: { Accept: "application/json" },
      signal: AbortSignal.timeout(10_000),
      next: { revalidate: 30 },
    });

    const payload = await res.json().catch(() => null);

    if (!res.ok || !payload?.success) {
      const status = res.status === 429 ? 429 : 502;
      return Response.json(
        {
          error: {
            code: res.status === 429 ? "RATE_LIMITED" : "UPSTREAM_ERROR",
            message:
              res.status === 429
                ? "Too many searches. Please wait a moment and try again."
                : "We couldn't load Pickup Stations right now.",
          },
        },
        { status },
      );
    }

    return Response.json(payload.data, {
      headers: { "Cache-Control": "public, s-maxage=30, stale-while-revalidate=60" },
    });
  } catch {
    return Response.json(
      { error: { code: "UPSTREAM_UNREACHABLE", message: "We couldn't load Pickup Stations right now." } },
      { status: 502 },
    );
  }
}
