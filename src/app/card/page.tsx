import { Metadata } from "next"
import fs from "fs"
import path from "path"

export const metadata: Metadata = {
  title: "Aubrey Perez — Verge AI",
  description: "AI Strategy Consultant. Connect with Aubrey Perez at Verge AI.",
}

const links = [
  {
    label: "See What AI Could Do for Your Business",
    href: "https://leadintel.vergeai.co",
    style: "bg-coral text-white shadow-lg shadow-coral/20",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
  },
  {
    label: "Which AI Agent Was Made for You?",
    href: "https://agentsquiz.vergeai.co",
    style: "bg-teal text-white shadow-lg shadow-teal/20",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    ),
  },
  {
    label: "Visit vergeai.co",
    href: "https://vergeai.co",
    style: "bg-white text-navy border border-navy/10 shadow-sm",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
      </svg>
    ),
  },
  {
    label: "Email Me",
    href: "mailto:info@vergeai.co",
    style: "bg-white text-navy border border-navy/10 shadow-sm",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    label: "Instagram @vergeai.co",
    href: "https://instagram.com/vergeai.co",
    style: "bg-white text-navy border border-navy/10 shadow-sm",
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
      </svg>
    ),
  },
]

// Read a small (~80KB) photo for the vCard. The full 1MB logo.png bloats the
// data: URI past 2MB after base64 expansion, which some mobile browsers cap.
let logoBase64 = ""
try {
  logoBase64 = fs
    .readFileSync(path.join(process.cwd(), "public/vcard-photo.png"))
    .toString("base64")
} catch (err) {
  console.error("card/page: vcard-photo.png missing for VCF — proceeding without embedded photo:", err)
}

const PHOTO_LINE = logoBase64 ? `\nPHOTO;ENCODING=b;TYPE=PNG:${logoBase64}` : ""

const VCF_DATA = `BEGIN:VCARD
VERSION:3.0
FN:Aubrey Perez
N:Perez;Aubrey;;;
ORG:Verge AI
TITLE:AI Strategy Consultant
EMAIL;TYPE=WORK:info@vergeai.co
URL:https://vergeai.co
NOTE:AI strategy consulting for small businesses${PHOTO_LINE}
END:VCARD`

const vcfBase64 = Buffer.from(VCF_DATA).toString("base64")

export default function CardPage() {
  return (
    <main className="min-h-dvh bg-gradient-to-b from-peach via-warm-white to-warm-white flex items-center justify-center px-6 py-12">
      <div className="w-full max-w-sm flex flex-col items-center gap-8">
        {/* Logo */}
        <div className="flex flex-col items-center gap-4">
          <img
            src="/logo.png"
            alt="Verge AI"
            className="w-20 h-20 rounded-full object-cover shadow-lg shadow-navy/15"
          />

          <div className="text-center">
            <h1 className="text-2xl font-extrabold text-navy">Aubrey Perez</h1>
            <p className="text-sm font-semibold text-coral mt-1">AI Strategy Consultant</p>
            <p className="text-xs text-navy/50 mt-0.5">Verge AI</p>
          </div>

          <p className="text-center text-sm text-navy/60 leading-relaxed max-w-xs">
            Helping small businesses and professionals use AI<br />
            to save time, cut costs, and grow revenue.<br />
            Strategy first, tools second.
          </p>
        </div>

        {/* Action Buttons */}
        <div className="w-full flex flex-col gap-3">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className={`flex items-center gap-3 w-full rounded-2xl px-5 py-4 font-semibold text-sm transition-transform active:scale-[0.98] ${link.style}`}
            >
              {link.icon}
              {link.label}
            </a>
          ))}
        </div>

        {/* Save Contact */}
        <a
          href={`data:text/vcard;base64,${vcfBase64}`}
          download="Aubrey-Perez-VergeAI.vcf"
          className="flex items-center gap-2 text-sm font-semibold text-navy/70 hover:text-navy transition-colors"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
          </svg>
          Save Contact
        </a>

        {/* Footer */}
        <p className="text-[11px] text-navy/30">
          vergeai.co
        </p>
      </div>
    </main>
  )
}
