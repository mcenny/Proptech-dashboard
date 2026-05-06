# Proptech Dashboard

This is my submission for the Expert Listing Front End Engineer assessment. It's a Figma to code conversion of the proptech admin dashboard.

> **Live demo:** [philemon-eniola-proptech-dashboard-assessment.vercel.app](https://philemon-eniola-proptech-dashboard-assessment.vercel.app/)

I built it out at the four breakpoints in the Figma (375, 768, 1024, 1440) and wired up the interactive states from the prototype: the budgeting modal, the calendar drawer, and the profile menu hover and click states.

## Tech stack

| Area          | Choice                              | Version      | Why                                                                              |
| ------------- | ----------------------------------- | ------------ | -------------------------------------------------------------------------------- |
| Framework     | Next.js (App Router)                | 16.2.4       | SSR, file based routing, `next/image`, deploys to Vercel with no config.         |
| Runtime       | React                               | 19.2.4       | Latest stable, pairs cleanly with Next 16's RSC and streaming model.             |
| Language      | TypeScript                          | ^5           | `strict` mode for the data models in `src/data/*` and the component props.      |
| UI primitives | Chakra UI                           | ^3.35.0      | Matches the stack Expert Listing uses (see below).                               |
| Styling       | Emotion (`@emotion/react` / cache)  | ^11.14.0     | Chakra v3's styling engine. A small registry handles SSR style flushing.         |
| Color mode    | next-themes                         | ^0.4.6       | Peer that Chakra v3's color mode plugs into. Kept in for future use.             |
| Charts        | Recharts                            | ^3.8.1       | The Sales Overview bar chart. Declarative API, easy to make responsive.          |
| Icons         | iconsax-react                       | ^0.0.8       | React port of the Vuesax pack used in the Figma. More on this below.             |
| Fonts         | Euclid Circular B (self hosted)     | n/a          | The typeface from the Figma, served locally to avoid FOUT.                       |
| Lint          | ESLint + `eslint-config-next`       | ^9 / 16.2.4  | Next.js' recommended rule set.                                                   |

## Why these libraries

- **Next.js 16 + React 19.** The assessment asks for a deployed link and Next on Vercel is zero config. The App Router also keeps things tidy: a server rendered shell in `app/layout.tsx` and `app/page.tsx`, with `"use client"` only on the parts that actually need it (modals, menus, the chart).
- **Chakra UI v3.** I picked Chakra because Expert Listing uses it (I checked their site). I've used Ant Design and shadcn/ui on past projects, but matching the team's stack felt like the right call. Chakra's token system also fits the Figma well, so colors and radii live once in [`src/theme/system.ts`](src/theme/system.ts) and components stay readable (`bg="brand.green.solid"` instead of `#105B48`).
- **Emotion + custom registry.** Chakra v3 runs on Emotion. Next.js streaming SSR needs styles flushed at the right moment, so [`src/app/emotion-registry.tsx`](src/app/emotion-registry.tsx) wraps `CacheProvider` and uses `useServerInsertedHTML` to keep first paint flash free.
- **Recharts.** Used only for the Sales Overview triple bar chart in [`src/components/dashboard/SalesBarChart.tsx`](src/components/dashboard/SalesBarChart.tsx). `ResponsiveContainer` handles the resize down to 375px without extra work.
- **TypeScript strict.** Catches drift between the data layer (`src/data/dashboard.ts`, `src/data/calendar.ts`, `src/data/profile.ts`) and the views that consume it. The `Metric`, `OverviewStats`, and `FeaturedListing` types are shared between data and components.

## Icons

The Figma uses the **Vuesax** icon pack throughout. `iconsax-react` is the React port of that same pack, so picking it gave near 1:1 parity with the design: same stroke weight, same corner radii, same `Linear` and `Bold` variants the designer used.

A few of the icons in the Figma weren't available in `iconsax-react`. Instead of reaching for raw SVGs from another pack and ending up with two visual styles in the UI, I used the closest matching icon from `iconsax-react` in those cases. That keeps the icon style consistent across the topbar ([`TopBar.tsx`](src/components/layout/TopBar.tsx)), profile menu ([`ProfileMenu.tsx`](src/components/topbar/ProfileMenu.tsx)), modals ([`BudgetingModal.tsx`](src/components/topbar/BudgetingModal.tsx), [`CalendarModal.tsx`](src/components/topbar/CalendarModal.tsx)), and dashboard cards.

## Assets

Everything in [`public/`](public) is intentional, no `create-next-app` leftovers.

- [`public/fonts/`](public/fonts): `EuclidCircularB-Regular / Medium / SemiBold / Bold.woff2`. Self hosted via `@font-face` in [`src/app/globals.css`](src/app/globals.css). Self hosting skips the extra DNS and TLS hops a CDN font would add, and avoids FOUT.
- [`public/icons/logo.svg`](public/icons/logo.svg): the Expert Listing wordmark, rendered with `next/image` in the topbar.
- [`public/images/building-1.png`](public/images/building-1.png), `building-2.png`, `building-3.png`: the listing photos for the Most Clicked, Most Watchlisted, and Hottest Listing cards. Served with `next/image` for responsive sizes and lazy loading.

## Project structure

```
src/
├── app/                       # Next.js App Router entry
│   ├── layout.tsx             # Root layout + metadata
│   ├── page.tsx               # Dashboard page (server component)
│   ├── providers.tsx          # ChakraProvider + EmotionRegistry
│   ├── emotion-registry.tsx   # SSR style flushing for Emotion
│   ├── globals.css            # @font-face + base resets
│   └── icon.svg               # Favicon
│
├── components/
│   ├── layout/                # TopBar, TabNav, page-inset constants
│   ├── topbar/                # NavIconButton, ProfileMenu, Budgeting + Calendar modals
│   ├── dashboard/             # OverviewCard, SalesOverviewCard, SalesBarChart,
│   │                          # MetricTile, FeaturedListingCard, Chat, etc.
│   └── ui/                    # Shared primitives (Card)
│
├── data/                      # Typed sample data (dashboard, calendar, profile)
└── theme/
    └── system.ts              # Chakra createSystem (colors, radii, fonts)
```

## Theme tokens

[`src/theme/system.ts`](src/theme/system.ts) holds the design language from the Figma so the component code can stay semantic instead of full of hex literals:

- **Colors:** `brand.green.{solid,tint,text}`, chart series (`series.{blue,green,red,teal}`), neutral `ink.{50…900}`, plus `text`, `border`, and `surface` aliases.
- **Radii:** `card` (16px), `tile` (12px), `chip` (8px), `pill` (72px).
- **Fonts:** `body` and `heading` both bound to Euclid Circular B.

Components then use `bg="brand.green.solid"`, `borderRadius="card"`, and so on. If the Figma changes, a token edit flows through everywhere.

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

Other scripts:

```bash
npm run build   # production build
npm run start   # serve the production build
npm run lint    # ESLint (next/core-web-vitals)
```

## Deployment

Push to GitHub, import into [Vercel](https://vercel.com/new), and that's it. No extra config needed for Next.js projects.
