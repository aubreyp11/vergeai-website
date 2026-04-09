"use client"

import { motion } from "framer-motion"
import { buttonVariants } from "@/components/ui/button"
import { cn } from "@/lib/utils"

export default function CtaBanner() {
  return (
    <section className="bg-navy py-14 md:py-20">
      <div className="max-w-6xl mx-auto px-6 flex flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, ease: "easeOut" }}
          className="max-w-3xl flex flex-col items-center gap-6"
        >
          <h2 className="text-3xl md:text-4xl font-extrabold text-white leading-tight">
            Curious where AI fits in your business?
          </h2>
          <p className="text-white/70 text-lg leading-relaxed">
            It takes 2 minutes. Our AI Readiness Quiz gives you a personalized snapshot of your biggest opportunities, plus a clear next step.
          </p>
          <a
            href="#quiz"
            className="inline-flex items-center justify-center bg-coral text-white hover:bg-coral/90 font-semibold rounded-full px-10 py-4 text-base transition-colors mt-2"
          >
            Take the Quiz
          </a>
        </motion.div>
      </div>
    </section>
  )
}
