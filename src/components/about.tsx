"use client"

import { motion } from "framer-motion"

const forYouItems = [
  "You run a team of 1 to 15 people",
  "You know AI matters but don't have time to figure it out",
  "You're ready to move, not just curious",
  "You want a real strategy, not another tool to learn",
]

const differentiators = [
  {
    title: "I eat my own cooking.",
    description:
      "I'm a small business owner actively building AI systems for my own business right now. My clients get someone who lives this daily.",
  },
  {
    title: "I'm the builder, not just the advisor.",
    description:
      "Most consultants hand you a strategy doc and wish you luck. I architect and build the actual systems.",
  },
  {
    title: "I speak business, not tech.",
    description:
      "I don't lead with \"large language models.\" I lead with \"here's how you get three hours back every week.\"",
  },
]

export default function About() {
  return (
    <section id="about" className="bg-white py-14 md:py-20">
      <div className="max-w-6xl mx-auto px-6">
        {/* Two-column: Who this is for + About */}
        <div className="grid md:grid-cols-2 gap-10 items-start">
          {/* Left: Who this is for */}
          <motion.div
            initial={{ opacity: 0, x: -32 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="bg-warm-white rounded-xl p-8"
          >
            <p className="text-xs font-semibold uppercase tracking-wider text-coral mb-3">
              Is this you?
            </p>
            <h2 className="text-2xl md:text-3xl font-extrabold text-navy leading-tight mb-6">
              Built for small business owners ready to move.
            </h2>
            <ul className="space-y-4">
              {forYouItems.map((item) => (
                <li key={item} className="flex items-start gap-3">
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
                  <span className="text-navy/70 leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Right: About + Stats */}
          <motion.div
            initial={{ opacity: 0, x: 32 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
            className="flex flex-col gap-4"
          >
            <h2 className="text-2xl md:text-3xl font-extrabold text-navy leading-tight">
              Built by a business owner, for business owners.
            </h2>
            <p className="text-navy/65 leading-relaxed">
              Verge AI isn&apos;t a tech company that learned marketing. It&apos;s a strategist with nearly 20 years in digital marketing who builds AI tools for her own business every single day.
            </p>
            <p className="text-navy/65 leading-relaxed">
              That means every recommendation comes from real experience, not theory. We know the challenges of running a small team and we know exactly how to use AI to solve them.
            </p>

            {/* Stats */}
            <div className="flex gap-10 pt-3 border-t border-navy/8">
              <div>
                <p className="text-4xl font-extrabold text-coral">20</p>
                <p className="text-sm text-navy/55 mt-1">Years Experience</p>
              </div>
              <div>
                <p className="text-4xl font-extrabold text-coral">1–15</p>
                <p className="text-sm text-navy/55 mt-1">Team Specialization</p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* What makes me different */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-16"
        >
          <div className="grid md:grid-cols-3 gap-6">
            {differentiators.map((d) => (
              <div key={d.title} className="flex flex-col gap-2">
                <h3 className="text-base font-bold text-navy">{d.title}</h3>
                <p className="text-sm text-navy/60 leading-relaxed">
                  {d.description}
                </p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
