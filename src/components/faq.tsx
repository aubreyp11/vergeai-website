import { HOMEPAGE_FAQS } from "@/lib/faqs";

/**
 * Homepage FAQ section. Server component (no interactivity needed).
 *
 * Uses native <details>/<summary> for click-to-expand behavior:
 *   - Zero client JS shipped for this interaction
 *   - Closed content remains in the DOM, so AI scanners and the
 *     FAQPage JSON-LD in layout.tsx stay in sync with visible copy
 *   - Accessible by default (keyboard + screen reader support)
 *
 * The default disclosure marker is hidden and replaced with a custom
 * coral plus icon that rotates 45deg into an X via the [open] selector.
 */
export default function FAQ() {
  return (
    <section
      id="faq"
      aria-labelledby="faq-heading"
      className="noise-overlay relative bg-warm-white py-24 md:py-32"
    >
      <div className="max-w-3xl mx-auto px-6">
        <div className="text-center mb-14">
          <p className="flex items-center justify-center gap-2.5 text-xs font-semibold uppercase tracking-wider text-navy/60 mb-4">
            <span className="inline-block w-2 h-2 rounded-full bg-teal" />
            Frequently Asked Questions
          </p>
          <h2
            id="faq-heading"
            className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-navy leading-tight"
          >
            Answers to the questions people ask about Verge AI
          </h2>
          <p className="mt-5 text-lg text-navy/70 leading-relaxed max-w-xl mx-auto">
            What small business owners actually ask before booking a call. If
            your question is not here, email info@vergeai.co.
          </p>
        </div>

        <div className="space-y-4">
          {HOMEPAGE_FAQS.map((faq) => (
            <details
              key={faq.question}

              className="group rounded-2xl border border-navy/10 bg-white shadow-sm transition-shadow hover:shadow-md open:shadow-md"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-6 p-6 md:p-8 [&::-webkit-details-marker]:hidden">
                <h3 className="text-lg md:text-xl font-bold text-navy leading-snug">
                  {faq.question}
                </h3>
                <span
                  aria-hidden="true"
                  className="relative flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-peach text-coral transition-transform duration-200 ease-out group-open:rotate-45"
                >
                  <span className="absolute h-0.5 w-3.5 bg-coral" />
                  <span className="absolute h-3.5 w-0.5 bg-coral" />
                </span>
              </summary>
              <div className="px-6 pb-6 md:px-8 md:pb-8">
                <p className="text-base md:text-lg text-navy/75 leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
