"use client"

import { motion, type Variants } from "framer-motion"

const outcomes = [
  "Your personalized AI profile based on your business type and stage",
  "The specific areas where AI will save you the most time",
  "Your recommended first AI win and where to start",
  "A prioritized action plan you can use immediately",
]

const itemVariants: Variants = {
  hidden: { opacity: 0, x: -12 },
  visible: (i: number) => ({
    opacity: 1,
    x: 0,
    transition: { duration: 0.4, delay: i * 0.1, ease: [0.25, 0.1, 0.25, 1] },
  }),
}

export default function CtaBanner() {
  return (
    <section className="grid-overlay relative bg-[radial-gradient(ellipse_at_center,_#2B4C7E_0%,_#1e3a5f_60%,_#17304e_100%)] py-16 md:py-24 overflow-hidden">
      {/* Subtle floating light orbs */}
      <div
        aria-hidden="true"
        className="absolute top-1/4 right-1/4 w-48 h-48 rounded-full bg-white/[0.03] blur-2xl pointer-events-none"
      />
      <div
        aria-hidden="true"
        className="absolute bottom-1/4 left-1/3 w-32 h-32 rounded-full bg-coral/[0.06] blur-2xl pointer-events-none"
      />

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
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
              href="https://blueprintquiz.vergeai.co"
              className="inline-flex items-center justify-center bg-coral text-white hover:bg-coral/90 font-semibold rounded-full px-10 py-4 text-base transition-colors self-start shadow-lg shadow-coral/25"
            >
              Take the Quiz
            </a>
          </motion.div>

          {/* Right: what you get */}
          <div className="flex flex-col gap-4">
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className="text-sm font-semibold text-white/90"
            >
              What you&apos;ll get:
            </motion.p>
            <ul className="space-y-4">
              {outcomes.map((item, i) => (
                <motion.li
                  key={item}
                  custom={i}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={itemVariants}
                  className="flex items-start gap-3"
                >
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
                </motion.li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
