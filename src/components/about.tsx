"use client"

import { motion, type Variants } from "framer-motion"

const credentials = [
  { stat: "20", label: "years in digital marketing" },
  { stat: "1-15", label: "person teams we serve" },
]

const differentiators = [
  {
    icon: "🔧",
    title: "I build what I recommend.",
    description:
      "My own business runs on AI agents I built myself. Lead research, outreach, content. Every recommendation I give, I've already pressure-tested on my own time and money.",
  },
  {
    icon: "📋",
    title: "Strategy and systems, not just slides.",
    description:
      "Most consultants hand you a strategy doc and wish you luck. I architect the systems, build the automations, and make sure they actually work inside your business.",
  },
  {
    icon: "💬",
    title: "Business results, not tech jargon.",
    description:
      "I don't lead with \"large language models.\" I lead with \"here's how you get three hours back every week\" and \"here's what that does to your revenue.\"",
  },
]

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.12, ease: [0.25, 0.1, 0.25, 1] },
  }),
}

export default function About() {
  return (
    <section id="about" className="bg-white py-14 md:py-20">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header row */}
        <div className="grid md:grid-cols-2 gap-8 items-start mb-14">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-xs font-semibold uppercase tracking-wider text-coral mb-3">
              Why Verge AI
            </p>
            <h2 className="text-3xl md:text-4xl font-extrabold text-navy leading-tight">
              Your competitors are already using AI. Let's close the gap.
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
              75% of small businesses are investing in AI, but most are grabbing tools without a plan. They need someone who understands their world, not enterprise software repackaged with a smaller price tag.
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
              className="bg-warm-white rounded-xl p-6 flex flex-col gap-3"
            >
              <span className="text-2xl">{d.icon}</span>
              <h3 className="text-base font-bold text-navy">{d.title}</h3>
              <p className="text-sm text-navy/60 leading-relaxed">{d.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
