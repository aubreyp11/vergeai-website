"use client"

import { motion, type Variants } from "framer-motion"

/* Abstract geometric accent shapes instead of emojis */
function GeoAccent({ variant }: { variant: "compass" | "map" | "chat" }) {
  if (variant === "compass") {
    return (
      <svg width="36" height="36" viewBox="0 0 36 36" fill="none" aria-hidden="true">
        <circle cx="18" cy="18" r="16" stroke="#2B4C7E" strokeWidth="1.5" opacity="0.15" />
        <circle cx="18" cy="18" r="6" fill="#2B4C7E" opacity="0.12" />
        <line x1="18" y1="2" x2="18" y2="12" stroke="#2B4C7E" strokeWidth="1.5" opacity="0.3" />
        <line x1="18" y1="24" x2="18" y2="34" stroke="#2B4C7E" strokeWidth="1.5" opacity="0.3" />
      </svg>
    )
  }
  if (variant === "map") {
    return (
      <svg width="36" height="36" viewBox="0 0 36 36" fill="none" aria-hidden="true">
        <rect x="4" y="4" width="28" height="28" rx="4" stroke="#F06844" strokeWidth="1.5" opacity="0.2" />
        <line x1="14" y1="4" x2="14" y2="32" stroke="#F06844" strokeWidth="1.5" opacity="0.15" />
        <line x1="22" y1="4" x2="22" y2="32" stroke="#F06844" strokeWidth="1.5" opacity="0.15" />
        <circle cx="18" cy="18" r="4" fill="#F06844" opacity="0.15" />
      </svg>
    )
  }
  return (
    <svg width="36" height="36" viewBox="0 0 36 36" fill="none" aria-hidden="true">
      <rect x="3" y="6" width="30" height="22" rx="11" stroke="#1A9E8F" strokeWidth="1.5" opacity="0.2" />
      <circle cx="13" cy="17" r="2" fill="#1A9E8F" opacity="0.2" />
      <circle cx="18" cy="17" r="2" fill="#1A9E8F" opacity="0.25" />
      <circle cx="23" cy="17" r="2" fill="#1A9E8F" opacity="0.2" />
    </svg>
  )
}

const differentiators = [
  {
    geoVariant: "compass" as const,
    title: "I run my business on AI. You'll get what actually works.",
    description:
      "Lead research, outreach, content, client management. I use AI for all of it. So when I tell you what to implement, it's because I've already tested it with my own time and money.",
  },
  {
    geoVariant: "map" as const,
    title: "Fewer tools, better results.",
    description:
      "You don't need 12 subscriptions. Most businesses need 2 or 3 AI tools, set up correctly, doing the right things. I'll tell you which ones and why, even if the answer is \"the free version is fine.\"",
  },
  {
    geoVariant: "chat" as const,
    title: "I speak revenue, not algorithms.",
    description:
      "You won't hear \"large language models\" from me. You'll hear \"this saves you 3 hours every week\" and \"this is what that does to your pipeline.\" Nearly 20 years of marketing means I start with the business outcome, always.",
  },
]

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.14, ease: [0.25, 0.1, 0.25, 1] },
  }),
}

export default function About() {
  return (
    <section id="about" className="noise-overlay relative bg-white py-16 md:py-24 overflow-hidden">
      <div className="relative z-10 max-w-6xl mx-auto px-6">
        {/* Header row */}
        <div className="grid md:grid-cols-2 gap-8 items-start mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            {/* Decorative kicker with line */}
            <div className="flex items-center gap-3 mb-4">
              <div className="h-px w-8 bg-coral" />
              <p className="text-xs font-semibold uppercase tracking-wider text-coral">
                Why Verge AI
              </p>
            </div>
            <h2 className="text-3xl md:text-4xl font-extrabold text-navy leading-tight">
              While you&apos;re figuring out AI, your competitors already have it working.
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex flex-col gap-4"
          >
            <p className="text-navy/65 leading-relaxed">
              83% of growing small businesses have adopted AI. But most are using it without a strategy, signing up for tools they barely touch, solving the wrong problems first. The businesses pulling ahead aren&apos;t using more AI. They&apos;re using it strategically, with a clear plan tied to actual business outcomes.
            </p>
          </motion.div>
        </div>

        {/* Differentiator cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {differentiators.map((d, i) => (
            <motion.div
              key={d.title}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={cardVariants}
              className="bg-warm-white rounded-xl p-7 flex flex-col gap-4"
            >
              <GeoAccent variant={d.geoVariant} />
              <h3 className="text-base font-bold text-navy">{d.title}</h3>
              <p className="text-sm text-navy/60 leading-relaxed">{d.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
