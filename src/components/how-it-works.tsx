"use client"

import { motion, type Variants } from "framer-motion"

const steps = [
  {
    number: "1",
    title: "Discover",
    color: "bg-navy",
    description:
      "Take our free AI Readiness Quiz or book a discovery call. We\u2019ll figure out exactly where AI fits into what you\u2019re already doing, no jargon, no pressure.",
  },
  {
    number: "2",
    title: "Design",
    color: "bg-coral",
    description:
      "Together, we map out a custom AI strategy built around your goals, your team, and your budget. Every recommendation is practical and specific to your business.",
  },
  {
    number: "3",
    title: "Deploy",
    color: "bg-teal",
    description:
      "Whether you want guidance to implement on your own or a full done-for-you build, we get AI working inside your business so you see results, not just ideas.",
  },
]

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 32 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.15, ease: [0.25, 0.1, 0.25, 1] },
  }),
}

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="bg-white py-14 md:py-20">
      <div className="max-w-6xl mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl font-extrabold text-navy mb-10"
        >
          Three steps to AI that actually works for your business.
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-10">
          {steps.map((step, i) => (
            <motion.div
              key={step.number}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={cardVariants}
              className="flex flex-col gap-3"
            >
              <div
                className={`${step.color} w-8 h-8 rounded-full flex items-center justify-center text-white font-bold text-sm shrink-0`}
              >
                {step.number}
              </div>
              <h3 className="text-lg font-bold text-navy">{step.title}</h3>
              <p className="text-navy/65 leading-relaxed text-sm">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
