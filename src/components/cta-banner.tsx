"use client"

import { motion } from "framer-motion"

const outcomes = [
  "Your personalized AI profile based on your business type and stage",
  "The specific areas where AI will save you the most time",
  "Your recommended first AI win and where to start",
  "A prioritized action plan you can use immediately",
]

export default function CtaBanner() {
  return (
    <section className="bg-navy py-14 md:py-20">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          {/* Left: sell the quiz */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, ease: "easeOut" }}
            className="flex flex-col gap-5"
          >
            <p className="text-xs font-semibold uppercase tracking-wider text-coral">
              Free AI Blueprint Quiz
            </p>
            <h2 className="text-3xl md:text-4xl font-extrabold text-white leading-tight">
              Get a personalized AI roadmap for your business in 2 minutes.
            </h2>
            <p className="text-white/70 leading-relaxed">
              7 questions about your business, your team, and where things fall through the cracks. No fluff, no email required to start. You walk away knowing exactly where AI fits and what to do first.
            </p>
            <a
              href="#quiz"
              className="inline-flex items-center justify-center bg-coral text-white hover:bg-coral/90 font-semibold rounded-full px-10 py-4 text-base transition-colors self-start"
            >
              Take the Quiz
            </a>
          </motion.div>

          {/* Right: what you get */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, ease: "easeOut", delay: 0.1 }}
            className="flex flex-col gap-4"
          >
            <p className="text-sm font-semibold text-white/90">
              What you&apos;ll get:
            </p>
            <ul className="space-y-4">
              {outcomes.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <svg
                    className="w-5 h-5 text-coral mt-0.5 shrink-0"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="text-white/80 text-sm leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
