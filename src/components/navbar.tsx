"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { buttonVariants } from "@/components/ui/button"
import { cn } from "@/lib/utils"

const navLinks = [
  { label: "How it Works", href: "#how-it-works" },
  { label: "Services", href: "#services" },
  { label: "About", href: "#about" },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-warm-white/90 backdrop-blur-md border-b border-navy/5">
      <div className="max-w-6xl mx-auto px-6 h-14 flex items-center justify-between">
        {/* Wordmark */}
        <a href="/" className="text-xl font-extrabold text-navy tracking-tight">
          Verge AI
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-navy/70 hover:text-navy transition-colors"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#quiz"
            className="inline-flex items-center justify-center bg-coral text-white hover:bg-coral/90 font-semibold rounded-full px-6 py-2.5 text-sm transition-colors"
          >
            Take the Quiz
          </a>
        </nav>

        {/* Mobile hamburger */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2 rounded-md"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          <motion.span
            animate={open ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
            className="block w-6 h-0.5 bg-navy origin-center"
          />
          <motion.span
            animate={open ? { opacity: 0 } : { opacity: 1 }}
            className="block w-6 h-0.5 bg-navy"
          />
          <motion.span
            animate={open ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
            className="block w-6 h-0.5 bg-navy origin-center"
          />
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="md:hidden overflow-hidden bg-warm-white border-t border-navy/5"
          >
            <div className="max-w-6xl mx-auto px-6 py-4 flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="text-sm font-medium text-navy/70 hover:text-navy transition-colors py-1"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#quiz"
                onClick={() => setOpen(false)}
                className="inline-flex items-center justify-center bg-coral text-white hover:bg-coral/90 font-semibold rounded-full px-6 py-2.5 text-sm transition-colors self-start"
              >
                Take the Quiz
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
