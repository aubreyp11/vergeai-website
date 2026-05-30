# Verge AI Website

Landing page for [vergeai.co](https://vergeai.co) — AI strategy consulting for small businesses. Built with Next.js 16 (App Router) + TypeScript, Tailwind CSS v4, shadcn/ui, and Framer Motion. Run locally with `npm run dev`; deploy to production with `npx vercel --prod` (GitHub auto-deploy is not connected). Requires the env vars `NOTION_API_KEY` and `NOTION_LEADS_DB_ID` (set on Vercel; locally in a gitignored `.env.local`) to power the `/api/waitlist` route, which writes signups to the Notion Leads Pipeline.
