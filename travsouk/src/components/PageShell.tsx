import { ReactNode } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

const ease = [0.16, 1, 0.3, 1] as const

/** Standard sub-page hero header matching the home aesthetic. */
export function PageHeader({
  eyebrow,
  title,
  accent,
  sub,
  children,
}: {
  eyebrow: string
  title: ReactNode
  accent?: string
  sub?: string
  children?: ReactNode
}) {
  return (
    <header className="relative overflow-hidden bg-paper pt-36 md:pt-44">
      <div className="pointer-events-none absolute -right-24 -top-20 h-80 w-80 rounded-full bg-green/20 blur-3xl" />
      <div className="mx-auto max-w-7xl px-5 pb-12 md:px-8 md:pb-16">
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease }}
          className="text-xs font-semibold uppercase tracking-[0.2em] text-green-deep"
        >
          {eyebrow}
        </motion.span>
        <motion.h1
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease, delay: 0.05 }}
          className="mt-3 max-w-3xl text-[clamp(2.4rem,5.4vw,4.4rem)] font-semibold leading-[0.98] tracking-[-0.035em]"
        >
          {title} {accent && <span className="accent">{accent}</span>}
        </motion.h1>
        {sub && (
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease, delay: 0.15 }}
            className="mt-5 max-w-xl text-lg text-muted"
          >
            {sub}
          </motion.p>
        )}
        {children}
      </div>
    </header>
  )
}

/** Shared dark CTA band reused across sub-pages. */
export function CtaBand({
  title = 'Visa assistance',
  accent = 'tailored for you.',
}: {
  title?: string
  accent?: string
}) {
  return (
    <section className="bg-paper">
      <div className="mx-auto max-w-7xl px-5 py-16 md:px-8">
        <div className="relative overflow-hidden rounded-[36px] bg-ink px-6 py-20 text-center text-white md:px-8 md:py-24">
          <div className="pointer-events-none absolute -bottom-32 -right-24 h-80 w-80 rounded-full bg-green/30 blur-3xl" />
          <h2 className="relative mx-auto max-w-3xl text-[clamp(2rem,5vw,3.6rem)] font-semibold leading-[1.02] tracking-[-0.03em]">
            {title} <span className="accent text-green-light">{accent}</span>
          </h2>
          <p className="relative mx-auto mt-5 max-w-md text-white/60">
            Book a free, honest consultation with a dedicated advisor — and we’ll
            map the fastest realistic route to wherever you’re headed.
          </p>
          <Link
            to="/contact"
            className="relative mt-8 inline-flex rounded-pill bg-green px-7 py-4 text-sm font-semibold text-ink transition hover:-translate-y-0.5 hover:bg-green-light"
          >
            Book my free consultation →
          </Link>
        </div>
      </div>
    </section>
  )
}

export function Page({ children }: { children: ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.35 }}
    >
      {children}
    </motion.div>
  )
}
