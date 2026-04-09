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
            Verge AI helps small business owners cut through the noise and actually use AI to save time, grow revenue, and get back to the work that matters.
          </p>
          <div className="flex flex-wrap gap-3 pt-1">
            <a
              href="#quiz"
              className={cn(
                buttonVariants({ size: "default" }),
                "bg-coral text-white hover:bg-coral/90 border-transparent rounded-lg px-5 py-2.5 text-sm h-auto"
              )}
            >
              Take the Free AI Readiness Quiz
            </a>
            <a
              href="#booking"
              className={cn(
                buttonVariants({ variant: "outline", size: "default" }),
                "rounded-lg px-5 py-2.5 text-sm h-auto border-navy/30 text-navy hover:bg-navy/5"
              )}
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
