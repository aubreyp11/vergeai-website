"use client"

import { motion, type Variants } from "framer-motion"
import { buttonVariants } from "@/components/ui/button"
import { cn } from "@/lib/utils"

const services = [
  {
    tag: "Start Here",
    tagBg: "bg-navy/10 text-navy",
    title: "AI Strategy Intensive (VIP Day)",
    duration: "Full Day",
    features: ["Workflow deep dive", "Custom AI roadmap", "Action plan in 1 week"],
    accent: "border-navy/20",
  },
  {
    tag: "Go Deeper",
    tagBg: "bg-coral/10 text-coral",
    title: "AI Strategy & Guidance",
    duration: "2-Week Engagement",
    features: [
      "Comprehensive assessment",
      "High-impact opportunity ID",
      "Clear implementation plan",
    ],
    accent: "border-coral/20",
    featured: true,
  },
  {
    tag: "Full Partnership",
    tagBg: "bg-teal/10 text-teal",
    title: "Full AI Transformation Partnership",
    duration: "3-Month Minimum",
    features: [
      "Embedded AI strategy advisor",
      "Vendor and tool selection guidance",
      "Full team training and adoption",
    ],
    accent: "border-teal/20",
  },
]

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 32 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.12, ease: [0.25, 0.1, 0.25, 1] },
  }),
}

function CheckIcon() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 18 18"
      fill="none"
      aria-hidden="true"
      className="shrink-0 mt-0.5"
    >
      <circle cx="9" cy="9" r="9" fill="#1A9E8F" fillOpacity="0.12" />
      <path
        d="M5.5 9.25L7.75 11.5L12.5 6.5"
        stroke="#1A9E8F"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export default function Services() {
  return (
    <section id="services" className="bg-warm-white py-14 md:py-20">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex items-baseline justify-between mb-10"
        >
          <h2 className="text-3xl md:text-4xl font-extrabold text-navy">
            Three ways to work together.
          </h2>
          <a href="#services" className="hidden md:inline text-sm font-semibold text-coral hover:text-coral/80 transition-colors whitespace-nowrap">
            See Full Details &rarr;
          </a>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 items-stretch">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={cardVariants}
              className={cn(
                "bg-white rounded-xl border p-6 flex flex-col gap-5",
                s.accent,
                s.featured ? "shadow-lg ring-1 ring-coral/20" : "shadow-sm"
              )}
            >
              <div>
                <span className={cn("text-xs font-semibold px-3 py-1 rounded-full", s.tagBg)}>
                  {s.tag}
                </span>
              </div>
              <div>
                <h3 className="text-lg font-bold text-navy leading-snug">{s.title}</h3>
                <p className="mt-1 text-sm text-navy/50 font-medium">{s.duration}</p>
              </div>
              <ul className="flex flex-col gap-3 flex-1">
                {s.features.map((f) => (
                  <li key={f} className="flex items-start gap-2.5 text-sm text-navy/70">
                    <CheckIcon />
                    {f}
                  </li>
                ))}
              </ul>
              <a
                href="https://calendar.app.google/F31ojRqwc1cqmE5L7"
                className="inline-flex items-center justify-center bg-coral text-white hover:bg-coral/90 font-semibold rounded-full w-full py-3 text-sm transition-colors"
              >
                Book a Discovery Call
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
