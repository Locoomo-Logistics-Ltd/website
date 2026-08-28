import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";

export const OG_IMAGE_SIZE = { width: 1200, height: 630 } as const;

// Literal hex values — ImageResponse renders outside the DOM/Tailwind
// pipeline, so CSS custom properties from globals.css aren't available.
// Keep these in sync with --brand-navy / --brand-blue / --brand-blue-light.
const NAVY = "#000E2E";
const BLUE = "#006CDF";
const BLUE_LIGHT = "#3D93E0";

let logoDataUrl: string | null = null;
async function getLogoDataUrl() {
  if (!logoDataUrl) {
    const data = await readFile(join(process.cwd(), "public", "locoomo.png"));
    logoDataUrl = `data:image/png;base64,${data.toString("base64")}`;
  }
  return logoDataUrl;
}

// Mirrors the real flow from HOW_IT_WORKS_CONTENT (constants/content.ts) —
// kept to 3 steps for space, condensed from the 5-step version on-site.
// The point: someone who has never heard of Locoomo should understand
// what's on offer from the image alone, before they click through.
const HOW_IT_WORKS_STEPS = [
  { number: "01", label: "Book a delivery" },
  { number: "02", label: "Drop off at a Pickup Station" },
  { number: "03", label: "Collect nearby, on your schedule" },
] as const;

/**
 * Shared visual template for all opengraph-image.tsx / twitter-image.tsx
 * route files: brand copy on the left, a "how it works" explainer card on
 * the right so the preview communicates the product (send a package via a
 * neighbourhood Pickup Station) even to someone who never clicks through.
 * ImageResponse (Satori) only supports a constrained CSS subset, so this
 * stays flexbox/shape-based rather than a literal screenshot.
 */
export async function renderOgImage({
  eyebrow,
  headline,
  subhead,
}: {
  eyebrow: string;
  headline: string;
  subhead: string;
}) {
  const logo = await getLogoDataUrl();

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          padding: "56px 88px",
          background: NAVY,
          position: "relative",
        }}
      >
        {/* Faint grid, matching the site's hero/about background treatment */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage: `linear-gradient(rgba(61,147,224,0.35) 1px, transparent 1px), linear-gradient(90deg, rgba(61,147,224,0.35) 1px, transparent 1px)`,
            backgroundSize: "64px 64px",
          }}
        />

        {/* Logomark + wordmark */}
        <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={logo} width={36} height={44} alt="" />
          <span
            style={{
              fontSize: 22,
              fontWeight: 700,
              letterSpacing: "0.06em",
              color: "#ffffff",
            }}
          >
            LOCOOMO
          </span>
        </div>

        {/* Middle: copy (left) + how-it-works explainer card (right) */}
        <div
          style={{
            display: "flex",
            flex: 1,
            alignItems: "center",
            justifyContent: "space-between",
            gap: 40,
          }}
        >
          {/* Copy block */}
          <div style={{ display: "flex", flexDirection: "column", maxWidth: 600 }}>
            <div
              style={{
                display: "flex",
                alignSelf: "flex-start",
                fontSize: 18,
                fontWeight: 600,
                letterSpacing: "0.08em",
                color: BLUE_LIGHT,
                background: "rgba(61,147,224,0.12)",
                border: `1px solid rgba(61,147,224,0.35)`,
                borderRadius: 999,
                padding: "7px 18px",
                marginBottom: 24,
              }}
            >
              {eyebrow.toUpperCase()}
            </div>
            <div
              style={{
                display: "flex",
                fontSize: 48,
                fontWeight: 800,
                lineHeight: 1.14,
                letterSpacing: "-0.02em",
                color: "#ffffff",
                marginBottom: 18,
              }}
            >
              {headline}
            </div>
            <div
              style={{
                display: "flex",
                fontSize: 22,
                lineHeight: 1.55,
                color: "rgba(255,255,255,0.65)",
              }}
            >
              {subhead}
            </div>
          </div>

          {/* "How it works" explainer card — the reason this preview
              explains the product at a glance instead of just naming it */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              width: 380,
              flexShrink: 0,
              background: "#ffffff",
              borderRadius: 22,
              padding: "26px 28px",
              boxShadow: "0 24px 60px rgba(0,0,0,0.35)",
            }}
          >
            <div
              style={{
                display: "flex",
                fontSize: 13,
                fontWeight: 700,
                letterSpacing: "0.1em",
                color: BLUE,
                marginBottom: 20,
              }}
            >
              HOW LOCOOMO WORKS
            </div>

            <div style={{ display: "flex", flexDirection: "column", position: "relative" }}>
              {/* Connecting line behind the step numbers */}
              <div
                style={{
                  position: "absolute",
                  top: 18,
                  left: 17,
                  width: 2,
                  height: 132,
                  background: "rgba(0,108,223,0.15)",
                }}
              />

              {HOW_IT_WORKS_STEPS.map((step, i) => (
                <div
                  key={step.number}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 16,
                    marginBottom: i < HOW_IT_WORKS_STEPS.length - 1 ? 22 : 0,
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      width: 36,
                      height: 36,
                      borderRadius: 999,
                      background: "rgba(0,108,223,0.08)",
                      border: "1px solid rgba(0,108,223,0.2)",
                      color: BLUE,
                      fontSize: 14,
                      fontWeight: 700,
                      flexShrink: 0,
                    }}
                  >
                    {step.number}
                  </div>
                  <div style={{ display: "flex", fontSize: 17, fontWeight: 600, color: NAVY, lineHeight: 1.3 }}>
                    {step.label}
                  </div>
                </div>
              ))}
            </div>

            <div
              style={{
                display: "flex",
                marginTop: 24,
                paddingTop: 18,
                borderTop: "1px solid rgba(0,14,46,0.08)",
                fontSize: 14,
                color: "#7a8fa8",
              }}
            >
              Live in Lagos · a growing Pickup Station network
            </div>
          </div>
        </div>

        {/* Footer strap */}
        <div
          style={{
            display: "flex",
            fontSize: 16,
            color: "rgba(255,255,255,0.45)",
          }}
        >
          Lagos, Nigeria · locoomo.com
        </div>
      </div>
    ),
    { ...OG_IMAGE_SIZE }
  );
}
