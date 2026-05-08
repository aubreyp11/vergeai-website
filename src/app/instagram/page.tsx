import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Verge AI | Pick your starting point",
  description: "AI strategy for small businesses and professionals. Take a quiz, scan your business, or scan your site for AI visibility.",
}

const links = [
  {
    label: "Take the AI Blueprint Quiz",
    sub: "7 questions. Custom AI playbook emailed to you.",
    href: "https://blueprintquiz.vergeai.co",
    style: "bg-navy text-white shadow-lg shadow-navy/20",
  },
  {
    label: "Which AI Agent Was Made for You?",
    sub: "60-second quiz. Find your match.",
    href: "https://agentsquiz.vergeai.co",
    style: "bg-teal text-white shadow-lg shadow-teal/20",
  },
  {
    label: "See What AI Could Do for Your Business",
    sub: "Drop your URL. Personalized AI Opportunity Brief in 5 minutes.",
    href: "https://leadintel.vergeai.co",
    style: "bg-coral text-white shadow-lg shadow-coral/20",
  },
  {
    label: "Is Your Site Ready for AI Search?",
    sub: "Free AI visibility scorecard for any website.",
    href: "https://aeo-scanner-eta.vercel.app/",
    style: "bg-peach text-navy border border-coral/30 shadow-sm",
  },
  {
    label: "About Verge AI",
    sub: "Strategy first, tools second.",
    href: "https://vergeai.co",
    style: "bg-white text-navy border border-navy/10 shadow-sm",
  },
]

export default function InstagramPage() {
  return (
    <main className="min-h-dvh bg-gradient-to-b from-peach via-warm-white to-warm-white flex items-center justify-center px-6 py-12">
      <div className="w-full max-w-sm flex flex-col items-center gap-7">
        {/* Header */}
        <div className="flex flex-col items-center gap-3">
          <img
            src="/logo.png"
            alt="Verge AI"
            className="w-16 h-16 rounded-full object-cover shadow-lg shadow-navy/15"
          />
          <div className="text-center">
            <p className="text-sm font-semibold text-coral">Verge AI</p>
            <h1 className="text-xl font-extrabold text-navy mt-1 leading-tight">
              AI strategy for small businesses<br />and professionals.
            </h1>
            <p className="text-xs text-navy/55 mt-2">Pick your starting point ↓</p>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="w-full flex flex-col gap-3">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className={`flex flex-col gap-1 w-full rounded-2xl px-5 py-4 transition-transform active:scale-[0.98] ${link.style}`}
            >
              <span className="text-sm font-bold leading-tight">{link.label}</span>
              <span className={`text-[12px] leading-snug ${link.style.includes("text-white") ? "text-white/80" : "text-navy/55"}`}>
                {link.sub}
              </span>
            </a>
          ))}
        </div>

        {/* Footer */}
        <p className="text-[11px] text-navy/30">
          vergeai.co
        </p>
      </div>
    </main>
  )
}
