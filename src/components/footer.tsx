const exploreLinks = [
  { label: "How it Works", href: "#how-it-works" },
  { label: "Services", href: "#services" },
  { label: "AI Blueprint Quiz", href: "https://blueprintquiz.vergeai.co" },
]

const connectLinks = [
  { label: "LinkedIn", href: "#linkedin" },
  { label: "Discovery Call", href: "https://calendar.app.google/F31ojRqwc1cqmE5L7" },
  { label: "aubrey@vergeai.co", href: "mailto:aubrey@vergeai.co" },
]

export default function Footer() {
  return (
    <footer className="bg-warm-white border-t border-navy/5">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid md:grid-cols-3 gap-10">
          {/* Col 1: Wordmark + tagline */}
          <div className="flex flex-col gap-4">
            <p className="text-xl font-extrabold text-navy tracking-tight">Verge AI</p>
            <p className="text-sm text-navy/55 leading-relaxed max-w-xs">
              Making AI accessible, ethical, and practical for small business owners who want to reclaim their time.
            </p>
          </div>

          {/* Col 2: Explore */}
          <div className="flex flex-col gap-4">
            <p className="text-sm font-semibold text-navy uppercase tracking-wider">Explore</p>
            <ul className="flex flex-col gap-3">
              {exploreLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-navy/60 hover:text-navy transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Connect */}
          <div className="flex flex-col gap-4">
            <p className="text-sm font-semibold text-navy uppercase tracking-wider">Connect</p>
            <ul className="flex flex-col gap-3">
              {connectLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-navy/60 hover:text-navy transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-10 pt-5 border-t border-navy/8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-navy/40">
            &copy; 2026 Verge AI. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-xs text-navy/40 hover:text-navy/70 transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-xs text-navy/40 hover:text-navy/70 transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
