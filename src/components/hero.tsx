"use client"

import { motion } from "framer-motion"
import { buttonVariants } from "@/components/ui/button"
import { cn } from "@/lib/utils"

export default function Hero() {
  return (
    <section className="relative bg-gradient-to-br from-peach to-coral/20 py-16 md:py-20 overflow-hidden">
      {/* Gradient blob — top-right */}
      <div className="absolute -top-20 -right-20 w-72 h-72 bg-coral/15 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">
        {/* Left: Copy */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="flex flex-col gap-5"
        >
          <p className="text-xs font-semibold uppercase tracking-wider text-navy/60">
            AI Strategy for Small Business
          </p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-navy leading-tight">
            AI isn&apos;t just for big companies anymore.
          </h1>
          <p className="text-lg text-navy/70 leading-relaxed max-w-lg">
            You don&apos;t need a tech team to use AI. You need a strategist who knows exactly where it fits in your business and how to make it work. That&apos;s what we do.
          </p>
          <div className="flex flex-wrap gap-4 pt-2">
            <a
              href="#quiz"
              className="inline-flex items-center justify-center bg-coral text-white hover:bg-coral/90 font-semibold rounded-full px-8 py-4 text-base transition-colors"
            >
              Take the Free AI Readiness Quiz
            </a>
            <a
              href="#booking"
              className="inline-flex items-center justify-center bg-warm-white/80 hover:bg-white text-navy font-semibold rounded-full px-8 py-4 text-base transition-colors"
            >
              Book a Discovery Call
            </a>
          </div>
        </motion.div>

        {/* Right: Abstract gradient visual */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.15 }}
          className="relative h-72 md:h-[400px] rounded-2xl overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-peach via-coral/30 to-teal/40 rounded-2xl" />
          <div className="absolute top-6 right-6 w-36 h-36 bg-coral/20 rounded-full blur-3xl" />
          <div className="absolute bottom-10 left-8 w-44 h-44 bg-teal/25 rounded-full blur-3xl" />
        </motion.div>
      </div>
    </section>
  )
}
