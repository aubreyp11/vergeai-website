# Verge AI Website

## Project Overview
Landing page for Verge AI (vergeai.co). AI strategy consulting for small businesses.

## Tech Stack
- Next.js 16 (App Router) + TypeScript
- Tailwind CSS v4 (CSS-based config via @theme inline)
- shadcn/ui (base-ui variant, no asChild support)
- Framer Motion for animations
- Deployed on Vercel

## Brand (see global CLAUDE.md for colors/font/positioning)
- **Font weights**: 800 H1, 700 H2, 600 H3/buttons, 400 body (1.7 line-height), 500 uppercase kickers
- **CTAs**: Coral bg, white text, rounded-full, SemiBold. Teal for secondary (waitlist).
- **Tailwind**: text-navy, bg-coral, bg-teal, bg-peach, bg-warm-white
- **Voice**: Warm, approachable, confident. No jargon, no em dashes.

## URLs & Deploy
- Deploy: `npx vercel --prod` (GitHub auto-deploy not connected)
- LinkedIn: still placeholder #linkedin (needs real URL)

## Environment
- Env vars on Vercel: `NOTION_API_KEY`, `NOTION_LEADS_DB_ID`
- Local: `.env.local` (gitignored)
- Deploy: `npx vercel --prod` from project root

## Component Architecture
All section components in src/components/ use default exports.
Client components ("use client"): navbar, hero, how-it-works, services, about, cta-banner, professionals-waitlist
Server components: faq, footer

## Page Order (homepage)
Hero → How It Works → Services → About → CTA Banner (quiz) → Professionals Waitlist → FAQ → Footer

## API Routes
- `POST /api/waitlist` — Professionals waitlist signup → Notion Leads Pipeline (Source: "waitlist")

## Notes
- shadcn buttons use buttonVariants() with styled <a> tags (no asChild).
- Colors defined in globals.css @theme inline block, not tailwind.config.ts.
- Service packages are PLACEHOLDERS (see global CLAUDE.md for certification context).
