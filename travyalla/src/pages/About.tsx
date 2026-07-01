import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { PageHeader, CtaBand, Page } from '../components/PageShell'
import { useReveal } from '../hooks/useReveal'
import { BRAND, stats } from '../data'

const ease = [0.16, 1, 0.3, 1] as const

/** Animated number that counts up once it scrolls into view. */
function Counter({ value, suffix }: { value: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null)
  const [display, setDisplay] = useState(0)

  useEffect(() => {
    const node = ref.current
    if (!node) return
    let raf = 0
    let started = false

    const run = () => {
      const duration = 1600
      const start = performance.now()
      const step = (now: number) => {
        const t = Math.min((now - start) / duration, 1)
        const eased = 1 - Math.pow(1 - t, 3)
        setDisplay(Math.round(value * eased))
        if (t < 1) raf = requestAnimationFrame(step)
      }
      raf = requestAnimationFrame(step)
    }

    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !started) {
            started = true
            run()
            obs.disconnect()
          }
        })
      },
      { threshold: 0.4 },
    )
    obs.observe(node)
    return () => {
      obs.disconnect()
      cancelAnimationFrame(raf)
    }
  }, [value])

  const formatted =
    value >= 1000000
      ? `${(display / 1000000).toFixed(display >= value ? 0 : 1)}M`
      : value >= 1000
        ? `${Math.round(display / 1000)}k`
        : `${display}`

  return (
    <span ref={ref}>
      {formatted}
      {suffix}
    </span>
  )
}

const values = [
  {
    icon: '◎',
    title: 'Honesty first',
    body: 'If a route is weak, we say so before you spend a dirham. No false promises, no padded fees — just a straight answer about what is realistic.',
  },
  {
    icon: '✦',
    title: 'Built around you',
    body: 'Your file is shaped by your profile, history and timeline — never a recycled template stamped with a new name.',
  },
  {
    icon: '◷',
    title: 'Speed that respects you',
    body: 'Most applications are submission-ready within 48 hours. We move fast because your plans should not wait on paperwork.',
  },
  {
    icon: '⬡',
    title: 'In it together',
    body: 'One dedicated advisor stays with you from the first call to the stamp in your passport. You always know who to ask.',
  },
]

const timeline = [
  {
    year: '2015',
    title: 'A frustration, then an idea',
    body: 'After watching friends lose trips to confusing consulate rules, our founders set out to make applying feel human again.',
  },
  {
    year: '2018',
    title: 'Doorstep from day one',
    body: 'We brought document collection to homes and offices across the UAE, long before it was the expected standard.',
  },
  {
    year: '2021',
    title: 'Seventy-five borders',
    body: 'Our advisors mapped requirements for every Schengen state plus the UK, USA and the busiest Gulf and Asian routes.',
  },
  {
    year: '2026',
    title: 'A million journeys on',
    body: 'Today Travsouk guides travelers worldwide — and the promise has not changed: yalla, let us go.',
  },
]

const team = [
  { name: 'Layla Haddad', role: 'Founder & lead advisor', initials: 'LH' },
  { name: 'Omar Farouk', role: 'Schengen specialist', initials: 'OF' },
  { name: 'Priya Nair', role: 'UK & USA desk', initials: 'PN' },
  { name: 'Yusuf Khan', role: 'Documents & logistics', initials: 'YK' },
]

export default function About() {
  const storyRef = useReveal<HTMLDivElement>()
  const valuesRef = useReveal<HTMLDivElement>()
  const timelineRef = useReveal<HTMLDivElement>()
  const teamRef = useReveal<HTMLDivElement>()

  return (
    <Page>
      <PageHeader
        eyebrow="Who we are"
        title="A Dubai visa team that actually"
        accent="says yalla."
        sub="We turn the most stressful part of travel — the visa — into the easiest. Honest advice, a dedicated advisor, and paperwork handled end to end."
      >
        <div className="mt-8 flex flex-wrap gap-3">
          <Link
            to="/contact"
            className="rounded-pill bg-ink px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-green-deep focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green-deep focus-visible:ring-offset-2 focus-visible:ring-offset-paper"
          >
            Talk to an advisor <span aria-hidden="true">→</span>
          </Link>
          <Link
            to="/services"
            className="rounded-pill border border-cloud bg-white px-6 py-3.5 text-sm font-semibold text-ink transition hover:border-green-deep focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green-deep focus-visible:ring-offset-2 focus-visible:ring-offset-paper"
          >
            See what we do
          </Link>
        </div>
      </PageHeader>

      {/* Mission / story */}
      <section className="bg-paper">
        <div ref={storyRef} className="mx-auto max-w-7xl px-5 py-16 md:px-8 md:py-20">
          <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
            <div className="reveal">
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-green-deep">
                Our story
              </span>
              <h2 className="mt-4 text-[clamp(2rem,4vw,3.2rem)] font-semibold leading-[1.02] tracking-[-0.03em]">
                We started because the visa run was{' '}
                <span className="accent">broken.</span>
              </h2>
              <div className="mt-6 space-y-4 text-lg text-muted">
                <p>
                  {BRAND.name} was born out of one shared belief: getting a visa
                  should feel like the first happy step of a trip, not a maze of
                  forms, queues and quiet anxiety. We had all been there —
                  refreshing an embassy portal at midnight, second-guessing a
                  single line on a form.
                </p>
                <p>
                  So we built the agency we wished we had. One that picks up the
                  phone, explains the rules in plain language, and treats your
                  passport like it matters. From Downtown Dubai we now help
                  travelers reach more than seventy-five countries — calmly,
                  quickly and with zero guesswork.
                </p>
              </div>
            </div>

            <div className="reveal">
              <div className="rounded-3xl border border-cloud bg-white p-8">
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-green-deep">
                  The promise
                </p>
                <blockquote className="mt-4 text-2xl font-semibold leading-snug tracking-[-0.02em]">
                  “We will always tell you the honest route — even when it is the
                  one that earns us less.”
                </blockquote>
                <div className="mt-6 flex items-center gap-3 border-t border-cloud pt-6">
                  <span className="grid h-11 w-11 place-items-center rounded-full bg-ink text-sm font-semibold text-green-light">
                    LH
                  </span>
                  <div>
                    <p className="text-sm font-semibold">Layla Haddad</p>
                    <p className="text-xs text-muted">Founder, {BRAND.name}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stat counters */}
      <section className="bg-ink text-white">
        <div className="mx-auto max-w-7xl px-5 py-16 md:px-8 md:py-20">
          <div className="grid gap-px overflow-hidden rounded-[28px] bg-white/10 sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((s) => (
              <div key={s.label} className="bg-ink px-6 py-10 text-center">
                <p className="text-[clamp(2.4rem,5vw,3.4rem)] font-semibold tracking-[-0.03em] text-green-light">
                  <Counter value={s.value} suffix={s.suffix} />
                </p>
                <p className="mt-2 text-sm text-white/60">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values grid */}
      <section className="bg-paper">
        <div ref={valuesRef} className="mx-auto max-w-7xl px-5 py-16 md:px-8 md:py-20">
          <div className="reveal max-w-2xl">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-green-deep">
              What we stand for
            </span>
            <h2 className="mt-4 text-[clamp(2rem,4vw,3.2rem)] font-semibold leading-[1.02] tracking-[-0.03em]">
              Four things we refuse to{' '}
              <span className="accent">compromise on.</span>
            </h2>
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-2">
            {values.map((v) => (
              <div
                key={v.title}
                className="reveal rounded-3xl border border-cloud bg-white p-8"
              >
                <span
                  aria-hidden="true"
                  className="grid h-12 w-12 place-items-center rounded-2xl bg-paper text-2xl text-green-deep"
                >
                  {v.icon}
                </span>
                <h3 className="mt-5 text-xl font-bold">{v.title}</h3>
                <p className="mt-2 text-muted">{v.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline / why we exist */}
      <section className="bg-paper">
        <div ref={timelineRef} className="mx-auto max-w-7xl px-5 pb-16 md:px-8 md:pb-20">
          <div className="reveal max-w-2xl">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-green-deep">
              How we got here
            </span>
            <h2 className="mt-4 text-[clamp(2rem,4vw,3.2rem)] font-semibold leading-[1.02] tracking-[-0.03em]">
              A short history of{' '}
              <span className="accent">saying yes.</span>
            </h2>
          </div>

          <div className="mt-10 grid gap-px overflow-hidden rounded-3xl border border-cloud bg-cloud md:grid-cols-2">
            {timeline.map((t) => (
              <div key={t.year} className="reveal bg-white p-8">
                <span className="text-sm font-semibold text-green-deep">
                  {t.year}
                </span>
                <h3 className="mt-2 text-xl font-bold">{t.title}</h3>
                <p className="mt-2 text-muted">{t.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team / credibility */}
      <section className="bg-paper">
        <div ref={teamRef} className="mx-auto max-w-7xl px-5 pb-16 md:px-8 md:pb-20">
          <div className="reveal flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div className="max-w-2xl">
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-green-deep">
                The people
              </span>
              <h2 className="mt-4 text-[clamp(2rem,4vw,3.2rem)] font-semibold leading-[1.02] tracking-[-0.03em]">
                Real advisors, not a{' '}
                <span className="accent">call centre.</span>
              </h2>
            </div>
            <p className="max-w-sm text-muted">
              Every applicant is paired with one specialist who knows your file by
              name and stays with you to the finish.
            </p>
          </div>

          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {team.map((m, i) => (
              <motion.div
                key={m.name}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.5, ease, delay: i * 0.06 }}
                className="rounded-3xl border border-cloud bg-white p-7 text-center"
              >
                <span className="mx-auto grid h-16 w-16 place-items-center rounded-full bg-ink text-lg font-semibold text-green-light">
                  {m.initials}
                </span>
                <h3 className="mt-4 text-lg font-bold">{m.name}</h3>
                <p className="mt-1 text-sm text-muted">{m.role}</p>
              </motion.div>
            ))}
          </div>

          <div className="reveal mt-5 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 rounded-3xl border border-cloud bg-white px-8 py-8 text-sm font-semibold text-muted">
            <span className="inline-flex items-center gap-2">
              <span aria-hidden="true" className="h-2 w-2 rounded-full bg-status" /> Licensed in the UAE
            </span>
            <span>4.9 <span aria-hidden="true">★</span> from 2,000+ travelers</span>
            <span>Schengen · UK · USA experts</span>
            <span>Based in {BRAND.address}</span>
          </div>
        </div>
      </section>

      <CtaBand title="Meet the team that says" accent="yalla." />
    </Page>
  )
}
