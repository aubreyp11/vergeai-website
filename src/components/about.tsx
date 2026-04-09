"use client"

import { motion, type Variants } from "framer-motion"

const credentials = [
  { stat: "20", label: "years in digital marketing" },
  { stat: "1-15", label: "person teams we serve" },
]

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
    title: "I use AI to run my own business.",
    description:
      "Lead research, outreach, content. My business runs on the same AI strategies I recommend to clients. Every piece of guidance comes from real experience, not theory.",
  },
  {
    geoVariant: "map" as const,
    title: "A roadmap, not a sales pitch for tools.",
    description:
      "Most AI consultants push whatever tool they're partnered with. I start with your business goals and work backwards to find the right solutions, even if that means fewer tools, not more.",
  },
  {
    geoVariant: "chat" as const,
    title: "Business results, not tech jargon.",
    description:
      "I don't lead with \"large language models.\" I lead with \"here's how you get three hours back every week\" and \"here's what that does to your bottom line.\"",
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
              Your competitors are already using AI. Let&apos;s close the gap.
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
              75% of small businesses are investing in AI, but most are grabbing tools without a strategy. They need an advisor who understands their world, not enterprise consultants repackaged with a smaller price tag.
            </p>
            <div className="flex gap-10 pt-3 border-t border-navy/8">
              {credentials.map((c) => (
                <div key={c.label}>
                  <p className="text-3xl font-extrabold text-coral">{c.stat}</p>
                  <p className="text-sm text-navy/55 mt-1">{c.label}</p>
                </div>
              ))}
            </div>
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
