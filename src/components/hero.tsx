"use client"

import { motion } from "framer-motion"

export default function Hero() {
  return (
    <section className="noise-overlay relative bg-gradient-to-br from-peach via-peach to-coral/20 py-24 md:py-32 overflow-hidden">
      {/* Large decorative watermark */}
      <div
        aria-hidden="true"
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 select-none pointer-events-none z-0"
      >
        <span className="text-[10rem] md:text-[16rem] lg:text-[20rem] font-extrabold text-navy/[0.04] leading-none tracking-tighter">
          Verge
        </span>
      </div>

      {/* Floating gradient orbs */}
      <motion.div
        aria-hidden="true"
        className="absolute -top-20 -right-20 w-80 h-80 rounded-full bg-coral/15 blur-3xl pointer-events-none"
        animate={{ x: [0, 20, 0], y: [0, -15, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        aria-hidden="true"
        className="absolute -bottom-24 -left-16 w-64 h-64 rounded-full bg-teal/10 blur-3xl pointer-events-none"
        animate={{ x: [0, -15, 0], y: [0, 20, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        aria-hidden="true"
        className="absolute top-1/3 right-1/4 w-40 h-40 rounded-full bg-navy/5 blur-2xl pointer-events-none"
        animate={{ x: [0, 10, 0], y: [0, -10, 0], scale: [1, 1.1, 1] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="relative z-10 max-w-3xl mx-auto px-6">
        <div className="flex flex-col gap-6 items-center text-center">
          {/* Kicker */}
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="flex items-center gap-2.5 text-xs font-semibold uppercase tracking-wider text-navy/60"
          >
            <span className="inline-block w-2 h-2 rounded-full bg-coral" />
            AI Strategy for Small Business
          </motion.p>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.12, ease: "easeOut" }}
            className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-navy leading-tight"
          >
            What if AI could give you 10 hours back every week?
          </motion.h1>

          {/* Body */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.24, ease: "easeOut" }}
            className="text-lg text-navy/70 leading-relaxed max-w-xl"
          >
            Most small business owners are stuck doing manually what AI could handle in minutes. Follow-ups, content, admin, lead research. We show you exactly which parts of your business AI can take off your plate, and how to make it happen.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.36, ease: "easeOut" }}
            className="flex flex-wrap justify-center gap-4 pt-2"
          >
            <a
              href="https://blueprintquiz.vergeai.co"
              className="inline-flex items-center justify-center bg-coral text-white hover:bg-coral/90 font-semibold rounded-full px-8 py-4 text-base transition-colors shadow-lg shadow-coral/20"
            >
              See What AI Can Do for You
            </a>
            <a
              href="https://calendar.app.google/F31ojRqwc1cqmE5L7"
              className="inline-flex items-center justify-center bg-warm-white/80 hover:bg-white text-navy font-semibold rounded-full px-8 py-4 text-base transition-colors shadow-sm"
            >
              Book a Discovery Call
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
