"use client"

import { useState, type FormEvent } from "react"
import { motion } from "framer-motion"

const highlights = [
  "Build AI agents that actually work for your workflow",
  "Orchestrate multi-agent teams with Claude Code",
  "Automate the repetitive so you can focus on strategy",
  "Learn by doing, with real projects, not theory",
]

export default function ProfessionalsWaitlist() {
  const [email, setEmail] = useState("")
  const [name, setName] = useState("")
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle")

  async function handleSubmit(e: FormEvent) {
    e.preventDefault()
    setStatus("loading")

    try {
      const res = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, name }),
      })

      if (res.ok) {
        setStatus("success")
        setEmail("")
        setName("")
      } else {
        setStatus("error")
      }
    } catch {
      setStatus("error")
    }
  }

  return (
    <section className="relative bg-warm-white py-16 md:py-20 overflow-hidden">
      {/* Subtle decorative elements */}
      <div
        aria-hidden="true"
        className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-navy/10 to-transparent"
      />
      <div
        aria-hidden="true"
        className="absolute top-1/3 right-0 w-72 h-72 rounded-full bg-teal/[0.04] blur-3xl pointer-events-none"
      />

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left: messaging */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, ease: "easeOut" }}
            className="flex flex-col gap-5"
          >
            <div className="flex items-center gap-3">
              <p className="text-xs font-semibold uppercase tracking-wider text-teal">
                For Professionals
              </p>
              <span className="inline-flex items-center rounded-full bg-teal/10 px-3 py-0.5 text-[11px] font-semibold text-teal uppercase tracking-wide">
                Coming Soon
              </span>
            </div>

            <h2 className="text-3xl md:text-4xl font-extrabold text-navy leading-tight">
              Learn to build what the future runs on.
            </h2>

            <p className="text-navy/60 leading-relaxed">
              AI isn&apos;t replacing professionals. Professionals who use AI are replacing those who don&apos;t. We&apos;re building a hands-on program to help you master the tools that matter most.
            </p>

            <ul className="space-y-3 mt-1">
              {highlights.map((item, i) => (
                <motion.li
                  key={item}
                  initial={{ opacity: 0, x: -12 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.08, ease: "easeOut" }}
                  className="flex items-start gap-3"
                >
                  <svg
                    className="w-5 h-5 text-teal mt-0.5 shrink-0"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="text-navy/70 text-sm leading-relaxed">{item}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Right: waitlist form */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: 0.12, ease: "easeOut" }}
          >
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-navy/[0.06]">
              {status === "success" ? (
                <div className="flex flex-col items-center gap-4 py-6 text-center">
                  <div className="w-14 h-14 rounded-full bg-teal/10 flex items-center justify-center">
                    <svg className="w-7 h-7 text-teal" fill="currentColor" viewBox="0 0 20 20">
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-navy">You&apos;re on the list!</h3>
                  <p className="text-navy/60 text-sm">
                    We&apos;ll reach out when spots open up. In the meantime, keep building.
                  </p>
                </div>
              ) : (
                <>
                  <h3 className="text-lg font-bold text-navy mb-1">
                    Get early access
                  </h3>
                  <p className="text-navy/50 text-sm mb-6">
                    Join the waitlist. Be the first to know when we launch.
                  </p>

                  <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                    <div>
                      <label htmlFor="waitlist-name" className="block text-sm font-medium text-navy/70 mb-1.5">
                        Name
                      </label>
                      <input
                        id="waitlist-name"
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Your name"
                        className="w-full rounded-xl border border-navy/10 bg-warm-white/50 px-4 py-3 text-sm text-navy placeholder:text-navy/30 focus:outline-none focus:ring-2 focus:ring-teal/30 focus:border-teal/40 transition-colors"
                      />
                    </div>

                    <div>
                      <label htmlFor="waitlist-email" className="block text-sm font-medium text-navy/70 mb-1.5">
                        Email <span className="text-coral">*</span>
                      </label>
                      <input
                        id="waitlist-email"
                        type="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="you@example.com"
                        className="w-full rounded-xl border border-navy/10 bg-warm-white/50 px-4 py-3 text-sm text-navy placeholder:text-navy/30 focus:outline-none focus:ring-2 focus:ring-teal/30 focus:border-teal/40 transition-colors"
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={status === "loading"}
                      className="mt-2 w-full inline-flex items-center justify-center bg-teal text-white hover:bg-teal/90 font-semibold rounded-full px-8 py-4 text-base transition-colors shadow-lg shadow-teal/20 disabled:opacity-60 disabled:cursor-not-allowed"
                    >
                      {status === "loading" ? "Joining..." : "Join the Waitlist"}
                    </button>

                    {status === "error" && (
                      <p className="text-sm text-coral text-center">
                        Something went wrong. Please try again.
                      </p>
                    )}
                  </form>

                  <p className="text-[11px] text-navy/30 text-center mt-4">
                    No spam. Just one email when we&apos;re ready.
                  </p>
                </>
              )}
            </div>

            <div className="mt-5 text-center">
              <p className="text-sm text-navy/50 mb-3">Not sure where to start?</p>
              <a
                href="https://agentsquiz.vergeai.co"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border-2 border-teal text-teal font-semibold text-sm px-6 py-3 hover:bg-teal hover:text-white transition-colors"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
                Which AI Agent Was Made for You?
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
