# Verge AI Website

## Project Overview
Landing page for Verge AI (vergeai.co). AI strategy consulting for small businesses.

## Tech Stack
- Next.js 16 (App Router) + TypeScript
- Tailwind CSS v4 (CSS-based config via @theme inline)
- shadcn/ui (base-ui variant, no asChild support)
- Framer Motion for animations
- Deployed on Vercel

## Brand Block
- **Palette:** Navy #2B4C7E, Coral #F06844, Teal #1A9E8F, Peach #FDDDD5, Warm White #FBF7F4
- **Font:** Figtree only. 800 ExtraBold for H1, 700 Bold for H2, 600 SemiBold for H3/buttons, 400 Regular for body (1.7 line-height), 500 Medium uppercase for kickers/labels
- **CTA buttons:** Coral background, white text, rounded-full, Figtree SemiBold
- **Tailwind classes:** text-navy, bg-coral, bg-teal, bg-peach, bg-warm-white

## Brand Voice
Warm, approachable, confident. No jargon. No corporate speak. No em dashes. Direct, conversational, never preachy.

## External Links (update when available)
- Quiz: Blueprint Quiz on Netlify (URL TBD, using #quiz placeholder)
- Booking: Google Calendar appointment page (URL TBD, using #booking placeholder)
- LinkedIn: (URL TBD, using #linkedin placeholder)
- Email: aubrey@vergeai.co

## Component Architecture
All section components in src/components/ use default exports.
Client components ("use client"): navbar, hero, how-it-works, services, about, cta-banner
Server component: footer

## Notes
- Service packages are PLACEHOLDERS. Will be finalized after AI Consultant Certification.
- shadcn buttons use buttonVariants() with styled <a> tags (no asChild).
- Colors defined in globals.css @theme inline block, not tailwind.config.ts.

## DO NOT
- Use DM Sans (old font, replaced by Figtree)
- Use em dashes anywhere in copy
- Include Human Design or consciousness framework language
- Add features beyond what's in the spec without approval
