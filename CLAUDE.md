# Locoomo marketing website

This is the marketing/acquisition site for Locoomo — a logistics platform built
around a network of neighbourhood Pickup Stations. It is **not** the product.
The product is a separate app at `https://app.locoomo.com` (role-select entry
point: `/role-select`). This site's job is to explain the product and route
every "use Locoomo" action to that app.

Read this before writing code here — it'll save you from re-deriving
decisions that are already made, and from accidentally reintroducing the
waitlist-era framing this site was rebuilt to remove.

## Stack

- Next.js (App Router) + TypeScript + Tailwind CSS.
- `lucide-react` is the **only** icon library. No emoji as UI icons, no
  second icon package, no AI-generated icon sets.
- Animation is CSS keyframes (`app/globals.css` / `tailwind.config.ts`) for
  entrances/hovers, and inline SVG + SMIL (`<animate>`, `<animateMotion>`)
  for the logistics diagrams (Hero network, Pickup Station network,
  package journey). There is no Framer Motion, no Lottie, no other
  animation dependency — `lottie-react`, `react-lottie`,
  `@lottiefiles/dotlottie-react`, and `react-bootstrap-icons` were removed
  as dead weight during the 2026 rebuild (they were installed but had zero
  imports anywhere). Don't reintroduce them without a real reason; the
  existing pattern covers everything the site currently needs.
- Fonts: Sora (display/headings) + DM Sans (body), loaded via `next/font`
  in `app/layout.tsx` as CSS variables `--font-display` / `--font-sans`.

## Design system

All colors are CSS custom properties defined in `app/globals.css`, once for
light (`:root`) and once for dark (`.dark-mode`). Tailwind's `darkMode` is
configured to key off that `.dark-mode` class (see `tailwind.config.ts`).
**Never hardcode a hex color in a component** — always reference the
variable (`text-[var(--text-primary)]`, `bg-[var(--bg-card)]`, etc.) so the
component works in both themes automatically. If you need a new token, add
it to both blocks in `globals.css`, not just one.

Shared layout primitives, all in `components/ui/` and `components/layout/`:

- `Section` — outer wrapper (max-width, horizontal padding). Every page
  section should be built on top of this.
- `SectionLabel` — the small pill-shaped eyebrow label above a heading.
- `SectionHeader` — label + title + description, centered or left-aligned.
- `RevealWrapper` — scroll-triggered fade-up (wraps `useReveal`, an
  IntersectionObserver hook). Wrap the content of a new section in this so
  it enters consistently with everything else.
- `Button` — `variant`: `primary` | `ghost` | `outline` | `link` | `white`
  (white is for use inside the blue gradient CTA banners). `size`:
  `default` | `sm` | `lg` | `icon`.

**Adding a new homepage section**, the pattern every existing section
follows: define its copy as a new `export const X_CONTENT = {...} as const`
block in `constants/content.ts`, build the component in
`components/sections/`, using `Section` + `RevealWrapper` +
`SectionHeader`/`SectionLabel` + `Button`, then add it to the page in
`app/(_root)/page.tsx`. If it needs a nav anchor, give the `Section` an
`id` and `scroll-mt-24` (the fixed navbar overlaps un-offset anchors), and
add the anchor to `NAV_LINKS` and/or `FOOTER_CONTENT` in `constants/content.ts`.

## Content model

Page copy is data, not JSX, so it stays server/client-agnostic and lives in
one place:

- `constants/content.ts` — all on-page copy (hero, sections, FAQ, footer).
- `constants/brand.ts` — site name/description, social links, and the two
  canonical product URLs (see below).
- `constants/legal.ts` — **verbatim** Terms of Service / Privacy Policy
  text, structured as `{ heading, paragraphs?, list? }[]` per document and
  rendered by `components/legal/LegalPage.tsx`. This is legal copy, not
  marketing copy — don't rewrite or "improve" it here; edit it only when
  the source legal document itself changes.

**Icons in content data are string keys, not components** (e.g.
`icon: "wallet"`), resolved through `components/icons/map.ts`
(`ICON_MAP` / `getIcon()` / the `IconKey` type). This keeps `content.ts`
plain data. Adding a new icon means adding one line to `ICON_MAP` — never
inline an emoji or a raw SVG as a stand-in.

## Where CTAs point

Two constants in `constants/brand.ts` are the only product links that
should ever appear:

- `APP_ROLE_SELECT_URL` (`https://app.locoomo.com/role-select`) — the
  canonical CTA target for **every** Consumer, Rider, and Node Operator
  (Pickup Station) flow: "Book a Delivery," "Track a Package," "Become a
  Pickup Station," "Join as a Rider," etc. The app self-registers each
  role from this one entry point. **Do not invent a role-specific
  sub-route** (e.g. `/role-select/rider`) unless you've confirmed it
  actually exists in the app.
- `APP_URL` (`https://app.locoomo.com`) — used for the generic "Open App"
  link.

One exception, the seasonal **Christmas Shopping Fund** (`PROMO_URL` in
`constants/brand.ts`, `https://christmas.locoomo.com/`): it's a separate
campaign site with its own application form, so its CTA links out to it.
The homepage banner is driven by `CHRISTMAS_PROMO_CONTENT` in
`constants/content.ts`; set `enabled: false` when the campaign ends.

There is **no self-serve Business account** — the app's roles are
Consumer, Rider, Node Operator, and Admin (see `constants/legal.ts`,
Terms § 1/3/5). So "Partner With Locoomo" (the For Businesses CTA, the
footer link) routes to `/contact`, not the app.

## Ground truth for product claims

`constants/legal.ts` (sourced from the real Terms of Service / Privacy
Policy) is the authoritative reference for what the product actually does:
roles and their verification requirements, handoff codes, the
cancel/refund window (before handoff only; 5–10 business days), payment via
Paystack, what a Consumer can see of their own order (status + route).
**Marketing copy must never claim more than what's backed by this file, the
codebase, or a real number the business has confirmed.** No invented
pricing, delivery times, coverage stats, testimonials, or feature claims —
if you're not sure a claim is true, cut it rather than guess.

## Route map

- `/` — homepage. Single scrolling page with anchor-linked sections
  (`#how-it-works`, `#services`, `#pickup-stations`, `#for-businesses`,
  `#for-riders`, `#vision`) rather than separate routes per audience —
  matches `NAV_LINKS` in `constants/content.ts`.
- `/about`, `/contact` — standalone pages.
- `/terms`, `/privacy` — legal pages, see above.
- `/sign-in`, `/sign-up` — **vestigial**. Leftover Clerk-auth boilerplate
  from before this was a Locoomo site; Clerk isn't installed, the
  middleware is commented out, and nothing in the live nav/footer links to
  them. Not part of the marketing funnel — don't build on top of them
  without first checking whether they should just be deleted.

## Motion & accessibility

Every SMIL/JS-driven diagram animation is gated by
`hooks/usePrefersReducedMotion.ts`; when it's true, render the static
end-state, not a cut-down version of the animation. `app/globals.css` also
collapses all CSS transitions/animations under
`prefers-reduced-motion: reduce` as a blanket fallback. If you add a new
animated diagram, gate it the same way — check an existing one (e.g.
`components/sections/hero/HeroFlowDiagram.tsx`) for the pattern.

<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->
