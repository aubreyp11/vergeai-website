"use client"

import { motion, type Variants } from "framer-motion"

const steps = [
  {
    number: "01",
    title: "Discover",
    borderColor: "border-l-navy",
    description:
      "Take our 2-minute Blueprint Quiz or book a free call. You'll see exactly where AI fits in your business and what to prioritize first.",
  },
  {
    number: "02",
    title: "Design",
    borderColor: "border-l-coral",
    description:
      "Together, we map your biggest time drains to specific AI solutions. Not a generic playbook. A roadmap built for your business, your team, your budget.",
  },
  {
    number: "03",
    title: "Deploy",
    borderColor: "border-l-teal",
    description:
      "You walk away with a clear action plan and the support to execute it. We stay in your corner until you're seeing real results, not just talking about them.",
  },
]

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, delay: i * 0.2, ease: [0.25, 0.1, 0.25, 1] },
  }),
}

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="bg-white py-16 md:py-24">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-extrabold text-navy mb-4">
            Strategy first. Then the right tools. Then results.
          </h2>
          {/* Decorative divider */}
          <div className="flex items-center gap-2 mb-14">
            <div className="h-px w-12 bg-coral" />
            <div className="h-1.5 w-1.5 rounded-full bg-coral" />
          </div>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-10">
          {steps.map((step, i) => (
            <motion.div
              key={step.number}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={cardVariants}
              className={`relative border-l-[3px] ${step.borderColor} pl-6 py-2 flex flex-col gap-3 overflow-hidden`}
            >
              {/* Large background number */}
              <span
                aria-hidden="true"
                className="absolute -right-2 -top-4 text-[6rem] font-extrabold text-navy/[0.04] leading-none select-none pointer-events-none"
              >
                {step.number}
              </span>
              <div className="relative z-10">
                <h3 className="text-lg font-bold text-navy">{step.title}</h3>
                <p className="text-navy/65 leading-relaxed text-sm mt-2">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
