"use client"

import { motion, type Variants } from "framer-motion"

const steps = [
  {
    number: "1",
    title: "Discover",
    color: "bg-navy",
    description:
      "Take our free AI Readiness Quiz or book a call. In minutes, we identify where AI saves you the most time and money.",
  },
  {
    number: "2",
    title: "Design",
    color: "bg-coral",
    description:
      "We build a custom AI roadmap around your goals, team size, and budget. Practical, specific, no fluff.",
  },
  {
    number: "3",
    title: "Deploy",
    color: "bg-teal",
    description:
      "You get guidance to implement yourself, or we build it for you. Either way, you see results, not just a plan.",
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
