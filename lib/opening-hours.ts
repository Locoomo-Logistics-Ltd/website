import type { DayKey, OpeningHours, TimeRange } from "@/lib/nodes";

/** Mon-first, for display. */
export const WEEK: readonly DayKey[] = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];

export const DAY_LABEL: Record<DayKey, string> = {
  mon: "Monday",
  tue: "Tuesday",
  wed: "Wednesday",
  thu: "Thursday",
  fri: "Friday",
  sat: "Saturday",
  sun: "Sunday",
};

const SHORT: Record<DayKey, string> = {
  mon: "Mon",
  tue: "Tue",
  wed: "Wed",
  thu: "Thu",
  fri: "Fri",
  sat: "Sat",
  sun: "Sun",
};

const JS_DAY_TO_KEY: Record<string, DayKey> = {
  Mon: "mon",
  Tue: "tue",
  Wed: "wed",
  Thu: "thu",
  Fri: "fri",
  Sat: "sat",
  Sun: "sun",
};

/** "08:00" → "8:00 AM". */
export function formatTime(hhmm: string): string {
  const [h, m] = hhmm.split(":").map(Number);
  if (Number.isNaN(h) || Number.isNaN(m)) return hhmm;
  const suffix = h >= 12 ? "PM" : "AM";
  const hour12 = h % 12 === 0 ? 12 : h % 12;
  return `${hour12}:${String(m).padStart(2, "0")} ${suffix}`;
}

export function formatRanges(ranges: TimeRange[] | undefined): string {
  if (!ranges || ranges.length === 0) return "Closed";
  return ranges.map((r) => `${formatTime(r.open)} – ${formatTime(r.close)}`).join(", ");
}

/** Current weekday + minutes-since-midnight in Lagos (the API's reference timezone). */
function lagosNow(now: Date): { day: DayKey; minutes: number } {
  const parts = new Intl.DateTimeFormat("en-US", {
    timeZone: "Africa/Lagos",
    weekday: "short",
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  }).formatToParts(now);

  const weekday = parts.find((p) => p.type === "weekday")?.value ?? "Mon";
  const hour = Number(parts.find((p) => p.type === "hour")?.value ?? 0) % 24; // "24" at midnight
  const minute = Number(parts.find((p) => p.type === "minute")?.value ?? 0);
  return { day: JS_DAY_TO_KEY[weekday] ?? "mon", minutes: hour * 60 + minute };
}

function toMinutes(hhmm: string): number {
  const [h, m] = hhmm.split(":").map(Number);
  return h * 60 + m;
}

export interface OpenStatus {
  state: "open" | "closed" | "unknown";
  label: string;
}

/**
 * "Open now · until 6:00 PM" / "Closed · opens Mon 8:00 AM".
 * `null` hours means the station hasn't published any, so we say so
 * rather than guess.
 */
export function getOpenStatus(hours: OpeningHours | null, now: Date = new Date()): OpenStatus {
  if (!hours || WEEK.every((d) => !hours[d]?.length)) {
    return { state: "unknown", label: "Hours not listed" };
  }

  const { day, minutes } = lagosNow(now);

  const today = hours[day] ?? [];
  const current = today.find((r) => minutes >= toMinutes(r.open) && minutes < toMinutes(r.close));
  if (current) {
    return { state: "open", label: `Open now · until ${formatTime(current.close)}` };
  }

  // Later today?
  const later = today
    .filter((r) => toMinutes(r.open) > minutes)
    .sort((a, b) => toMinutes(a.open) - toMinutes(b.open))[0];
  if (later) {
    return { state: "closed", label: `Closed · opens today ${formatTime(later.open)}` };
  }

  // Next day with any hours.
  const startIdx = WEEK.indexOf(day);
  for (let i = 1; i <= 7; i++) {
    const key = WEEK[(startIdx + i) % 7];
    const ranges = hours[key];
    if (ranges?.length) {
      const first = [...ranges].sort((a, b) => toMinutes(a.open) - toMinutes(b.open))[0];
      const when = i === 1 ? "tomorrow" : SHORT[key];
      return { state: "closed", label: `Closed · opens ${when} ${formatTime(first.open)}` };
    }
  }

  return { state: "closed", label: "Closed" };
}

/** Which weekday is "today" in Lagos, for highlighting in the weekly list. */
export function getLagosToday(now: Date = new Date()): DayKey {
  return lagosNow(now).day;
}
