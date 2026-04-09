"use client"

import { motion } from "framer-motion"

export default function About() {
  return (
    <section id="about" className="bg-white py-14 md:py-20">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">
        {/* Left: photo placeholder */}
        <motion.div
          initial={{ opacity: 0, x: -32 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="aspect-[3/4] max-h-[400px] rounded-xl bg-gradient-to-br from-peach via-coral/20 to-teal/30 flex items-center justify-center"
        >
          <p className="text-navy/40 text-sm font-medium">Photo coming soon</p>
        </motion.div>

        {/* Right: copy */}
        <motion.div
          initial={{ opacity: 0, x: 32 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
          className="flex flex-col gap-4"
        >
          <h2 className="text-3xl md:text-4xl font-extrabold text-navy leading-tight">
            Built by a business owner, for business owners.
          </h2>
          <p className="text-navy/65 leading-relaxed">
            Verge AI isn&apos;t a tech company that learned marketing. It&apos;s a strategist with nearly 20 years in digital marketing who builds AI tools for her own business every single day.
          </p>
          <p className="text-navy/65 leading-relaxed">
            That means every recommendation comes from real experience, not theory. We know the challenges of running a small team and we know exactly how to use AI to solve them.
          </p>

          {/* Stats */}
          <div className="flex gap-10 pt-3 border-t border-navy/8">
            <div>
              <p className="text-4xl font-extrabold text-coral">20</p>
              <p className="text-sm text-navy/55 mt-1">Years Experience</p>
            </div>
            <div>
              <p className="text-4xl font-extrabold text-coral">1–15</p>
              <p className="text-sm text-navy/55 mt-1">Team Specialization</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
