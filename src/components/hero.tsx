"use client"

import { motion } from "framer-motion"
import { buttonVariants } from "@/components/ui/button"
import { cn } from "@/lib/utils"

export default function Hero() {
  return (
    <section className="bg-warm-white py-20 md:py-28 overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        {/* Left: Copy */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="flex flex-col gap-6"
        >
          <p className="text-xs font-semibold uppercase tracking-wider text-coral">
            AI Strategy for Small Business
          </p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-navy leading-tight">
            AI isn&apos;t just for big companies anymore.
          </h1>
          <p className="text-lg text-navy/70 leading-relaxed max-w-lg">
            Verge AI helps small business owners cut through the noise and actually use AI to save time, grow revenue, and get back to the work that matters.
          </p>
          <div className="flex flex-wrap gap-4 pt-2">
            <a
              href="#quiz"
              className={cn(
                buttonVariants({ size: "lg" }),
                "bg-coral text-white hover:bg-coral/90 border-transparent rounded-lg px-6 py-3 text-base h-auto"
              )}
            >
              Take the Free AI Readiness Quiz
            </a>
            <a
              href="#booking"
              className={cn(
                buttonVariants({ variant: "outline", size: "lg" }),
                "rounded-lg px-6 py-3 text-base h-auto border-navy/30 text-navy hover:bg-navy/5"
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
          className="relative h-80 md:h-[480px] rounded-3xl overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-peach via-coral/30 to-teal/40 rounded-3xl" />
          <div className="absolute top-8 left-8 w-48 h-48 bg-coral/20 rounded-full blur-3xl" />
          <div className="absolute bottom-12 right-8 w-56 h-56 bg-teal/25 rounded-full blur-3xl" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-40 h-40 bg-peach/60 rounded-full blur-2xl" />
        </motion.div>
      </div>
    </section>
  )
}
