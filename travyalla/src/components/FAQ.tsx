import { useState } from 'react'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import { faqs, BRAND } from '../data'
import { useReveal } from '../hooks/useReveal'

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0)
  const reduceMotion = useReducedMotion()
  const ref = useReveal<HTMLDivElement>()
  return (
    <section id="faq" className="bg-paper">
      <div ref={ref} className="mx-auto max-w-7xl px-5 py-24 md:px-8 md:py-32">
        <div className="grid gap-10 md:grid-cols-[0.9fr_1.1fr] md:gap-12">
          <div>
            <span className="reveal text-xs font-semibold uppercase tracking-[0.2em] text-green-deep">
              FAQs
            </span>
            <h2 className="reveal mt-3 text-[clamp(2rem,4.4vw,3.4rem)] font-bold leading-[1.03] tracking-[-0.03em]">
              Frequently asked <span className="accent">questions.</span>
            </h2>
            <p className="reveal mt-4 max-w-sm text-muted">
              Still unsure about something? Reach out and a real advisor will
              answer — usually within the hour.
            </p>
            <a
              href={`mailto:${BRAND.email}`}
              className="reveal mt-6 inline-flex rounded-pill bg-ink px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-green-deep focus:outline-none focus-visible:ring-2 focus-visible:ring-green focus-visible:ring-offset-2 focus-visible:ring-offset-paper"
            >
              Get in touch
            </a>
          </div>

          <div className="reveal divide-y divide-cloud border-y border-cloud">
            {faqs.map((f, i) => {
              const isOpen = open === i
              const panelId = `faq-panel-${i}`
              const buttonId = `faq-button-${i}`
              return (
                <div key={f.q}>
                  <h3>
                    <button
                      id={buttonId}
                      type="button"
                      onClick={() => setOpen(isOpen ? null : i)}
                      aria-expanded={isOpen}
                      aria-controls={panelId}
                      className="group flex w-full items-center justify-between gap-4 py-5 text-left transition-colors focus:outline-none focus-visible:rounded-lg focus-visible:ring-2 focus-visible:ring-green focus-visible:ring-offset-2 focus-visible:ring-offset-paper"
                    >
                      <span className="text-base font-semibold transition-colors group-hover:text-green-deep sm:text-lg">
                        {f.q}
                      </span>
                      <span
                        aria-hidden="true"
                        className={`grid h-9 w-9 shrink-0 place-items-center rounded-full border text-lg leading-none transition motion-reduce:transition-none ${
                          isOpen
                            ? 'rotate-45 border-green bg-green text-white'
                            : 'border-cloud text-ink group-hover:border-green group-hover:text-green-deep'
                        }`}
                      >
                        +
                      </span>
                    </button>
                  </h3>
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        id={panelId}
                        role="region"
                        aria-labelledby={buttonId}
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={
                          reduceMotion
                            ? { duration: 0 }
                            : { duration: 0.35, ease: [0.16, 1, 0.3, 1] }
                        }
                        className="overflow-hidden"
                      >
                        <p className="pb-5 pr-4 text-muted sm:pr-10">{f.a}</p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
