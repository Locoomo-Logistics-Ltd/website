# Locoomo — Next.js Architecture Reference

## Project Structure

```
locoomo/
├── animations/
│   └── variants.ts              # Animation timing constants (duration, easing, stagger)
│
├── app/
│   ├── globals.css              # Design tokens (CSS vars), base reset, keyframes
│   ├── layout.tsx               # Root layout — fonts (next/font), ThemeProvider
│   └── (_root)/
│       ├── layout.tsx           # Site layout — Navbar + Footer wrapper
│       ├── page.tsx             # Homepage (thin composition layer only)
│       ├── about/page.tsx       # About page
│       └── contact/page.tsx     # Contact page
│
├── components/
│   ├── icons/
│   │   ├── LogoIcon.tsx         # SVG logomark component
│   │   └── index.tsx            # ArrowRightIcon, ChevronDownIcon
│   │
│   ├── layout/
│   │   ├── Navbar.tsx           # Sticky nav — desktop links + mobile menu + ThemeToggle
│   │   ├── Footer.tsx           # Footer — brand + link columns + social
│   │   └── Section.tsx          # Base section wrapper (max-width + padding)
│   │
│   ├── ui/
│   │   ├── AccordionItem.tsx    # Self-contained FAQ accordion item (Client)
│   │   ├── button.tsx           # Button primitive — variants: primary/ghost/outline/white
│   │   ├── MainLogo.tsx         # Full wordmark: LogoIcon + LOCOOMO text
│   │   ├── RevealWrapper.tsx    # Scroll-triggered fade-up animation wrapper (Client)
│   │   ├── SectionHeader.tsx    # Centered/left label + title + description block
│   │   ├── SectionLabel.tsx     # Blue pill-shaped section label
│   │   └── ThemeToggle.tsx      # Light/System/Dark three-button toggle (Client)
│   │
│   └── sections/
│       ├── Hero.tsx             # Hero — Server Component
│       ├── Problem.tsx          # Problem/Why Locoomo — Server Component
│       ├── HowItWorks.tsx       # How it Works — Server Component (tabs are Client)
│       ├── LocoomoModel.tsx     # The Locoomo Model — Server Component
│       ├── AudienceCards.tsx    # Join the Network cards — Server Component
│       ├── FutureVision.tsx     # What We're Building — Server Component
│       ├── Waitlist.tsx         # Waitlist banner — Server Component (form is Client)
│       ├── FAQ.tsx              # FAQ — Server Component (accordion items are Client)
│       │
│       ├── hero/
│       │   └── HeroFlowDiagram.tsx    # Animated SVG logistics diagram
│       ├── how-it-works/
│       │   ├── HowItWorksTabs.tsx     # Tab switcher (Client Component)
│       │   ├── CustomerFlowVisual.tsx # SVG for customers tab
│       │   └── RecipientFlowVisual.tsx # SVG for recipients tab
│       ├── model/
│       │   └── ModelNetworkDiagram.tsx # Hub-and-spoke SVG
│       └── waitlist/
│           └── WaitlistForm.tsx       # Role selector + email form (Client Component)
│
├── constants/
│   ├── brand.ts                 # Brand colors, site name, all external links
│   └── content.ts               # ALL page copy — nav, hero, problem, FAQ, etc.
│
├── hooks/
│   ├── useTheme.ts              # Theme state + localStorage persistence
│   ├── useReveal.ts             # IntersectionObserver scroll reveal
│   └── useScrolled.ts           # Nav scroll border trigger
│
├── providers/
│   └── ThemeProvider.tsx        # React Context wrapping useTheme
│
└── lib/
    ├── config.tsx               # @deprecated — legacy compat shim
    ├── ui_config.tsx            # @deprecated — legacy compat shim
    └── utils.ts                 # cn() utility (unchanged)
```

---

## Files to DELETE (old architecture)

These files are replaced by the new architecture and should be removed:

| Old File | Replaced By |
|---|---|
| `components/ui/AppLotties.tsx` | Not used in new design; Lottie deps can be removed |
| `components/ui/BluePuzzle.tsx` | Not used |
| `components/ui/FAQCard.tsx` | Replaced by `AccordionItem.tsx` |
| `components/ui/LinkIcon.tsx` | Replaced by `components/icons/index.tsx` |
| `components/ui/Loading.tsx` | Not used |
| `components/ui/Sparkle.tsx` | Not used |
| `components/ui/app_svgs.tsx` | SVGs moved to `components/icons/` |
| `components/ui/sheet.tsx` | Not used (Radix dialog) |
| `components/ui/skeleton.tsx` | Not used yet |
| `components/ui/tabs.tsx` | Replaced by custom tab in `HowItWorksTabs.tsx` |
| `components/sections/BrandPromise.tsx` | Replaced by `AudienceCards.tsx` |
| `components/sections/CTA.tsx` | Replaced by `Waitlist.tsx` |
| `components/sections/JoinNetwork.tsx` | Merged into `AudienceCards.tsx` |
| `components/sections/Services.tsx` | Replaced by `Problem.tsx` + `LocoomoModel.tsx` |

**Keep (pending refactor):**
- `components/sections/AboutPageHero.tsx` — used by `/about` page, needs redesign pass
- `components/sections/MobileAppMockup.tsx` — used by `/about` page, needs redesign pass

---

## Files to REFACTOR (future pass)

| File | Action |
|---|---|
| `AboutPageHero.tsx` | Update to use new Button, Section, SectionLabel, design tokens |
| `MobileAppMockup.tsx` | Update to use new design tokens + RevealWrapper |
| `app/(auth)/sign-in` | Needs theme-aware styling pass |
| `app/(auth)/sign-up` | Needs theme-aware styling pass |
| `app/(_root)/contact/page.tsx` | Currently empty stub — needs building |

---

## Files to KEEP (no changes needed)

| File | Status |
|---|---|
| `lib/utils.ts` | Unchanged — `cn()` utility |
| `components/ui/button.tsx` | Upgraded with new variants |
| `next.config.ts` | Unchanged |
| `tsconfig.json` | Unchanged |
| `package.json` | Unchanged (all deps still valid) |
| `public/` assets | All public assets kept |

---

## Theme System

### How it works
1. `useTheme` hook manages state + `localStorage` persistence
2. `ThemeProvider` exposes theme via React Context
3. `ThemeToggle` component reads/writes via `useThemeContext()`
4. Applying a theme adds/removes `.dark-mode` class on `<html>`
5. All colours are CSS custom properties in `globals.css`
6. Dark mode uses `.dark-mode {}` selector — no Tailwind `dark:` prefix needed

### Adding a new themed color
```css
/* In globals.css */
:root            { --my-new-color: #value-light; }
.dark-mode       { --my-new-color: #value-dark;  }
```
```tsx
// In component
<div style={{ color: "var(--my-new-color)" }} />
// or via Tailwind arbitrary value:
<div className="text-[var(--my-new-color)]" />
```

---

## Adding a New Section

1. Create `components/sections/MySectionName.tsx`
2. Import `Section`, `SectionHeader`, `RevealWrapper` as needed
3. Add content to `constants/content.ts`
4. Import and add to `app/(_root)/page.tsx`

For interactive parts (tabs, forms, accordions):
- Create a `components/sections/my-section/MyInteractivePart.tsx` with `"use client"`
- Keep the parent section file as a Server Component

---

## Content Updates

All page copy lives in `constants/content.ts`. To update any text:
- Hero badge, headline, CTA labels → `HERO_CONTENT`
- Pain points → `PROBLEM_CONTENT.pains`
- Step descriptions → `HOW_IT_WORKS_CONTENT.tabs[n].steps`
- FAQ questions/answers → `FAQ_CONTENT.items`
- Footer links → `FOOTER_CONTENT.columns`
- Brand URLs → `constants/brand.ts`

**No component file needs to be touched to update copy.**