/**
 * Types + helpers for the public Pickup Station (Node) directory.
 *
 * The data comes from the unauthenticated `GET /api/v1/public/nodes`
 * endpoint. The browser never calls that API directly: it goes through this
 * site's own route handlers (`app/api/nodes`, `app/api/geocode`), which sidesteps
 * CORS (the API only allow-lists specific origins) and keeps the geocoding
 * key server-side.
 */

export type DayKey = "mon" | "tue" | "wed" | "thu" | "fri" | "sat" | "sun";

export interface TimeRange {
  open: string; // "HH:mm", Lagos local time
  close: string;
}

/** A missing day means the station is closed that day. */
export type OpeningHours = Partial<Record<DayKey, TimeRange[]>>;

export interface PublicNode {
  id: string;
  name: string;
  address: string;
  city: string;
  state: string;
  latitude: number;
  longitude: number;
  openingHours: OpeningHours | null;
  /** true = has space for parcels right now. */
  acceptingParcels: boolean;
  /** Only present when the query included `near=lat,lng`. */
  distanceKm: number | null;
}

export interface NodePage {
  items: PublicNode[];
  nextCursor: string | null;
  hasMore: boolean;
}

export interface PlaceSuggestion {
  label: string;
  lat: number;
  lng: number;
}

export const RADIUS_MIN_KM = 1;
export const RADIUS_MAX_KM = 50;

/** Distance in km → "850 m away" / "3.9 km away". */
export function formatDistance(km: number | null): string | null {
  if (km === null || Number.isNaN(km)) return null;
  if (km < 1) return `${Math.max(50, Math.round((km * 1000) / 50) * 50)} m away`;
  return `${km.toFixed(1)} km away`;
}

/** Google Maps directions deep-link (works on mobile + desktop, no API key). */
export function directionsUrl(node: Pick<PublicNode, "latitude" | "longitude">): string {
  return `https://www.google.com/maps/dir/?api=1&destination=${node.latitude},${node.longitude}`;
}
