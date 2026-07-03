import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { services } from '../data/services'
import { PageHeader, CtaBand, Page } from '../components/PageShell'

const ease = [0.22, 1, 0.36, 1] as const

// Destination imagery per service card
const serviceImages: Record<string, string> = {
  'tourist-visas': 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=60',
  'corporate-visa': 'https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?auto=format&fit=crop&w=1200&q=60',
  'schengen-visa': 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=1200&q=60',
  'students-visa': 'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&w=1200&q=60',
}

const extra = [
  {
    icon: '🚚',
    h: 'Doorstep visa service',
    p: 'We collect and return documents at your home or office, anywhere in the UAE.',
  },
  {
    icon: '👨‍👩‍👧',
    h: 'Family & group visas',
    p: 'Reunite or travel together with coordinated, multi-applicant files.',
  },
  {
    icon: '🛡️',
    h: 'Refusal recovery',
    p: 'Refused before? We rebuild the file and tackle the exact reason head-on.',
  },
]

export default function Services() {
  return (
    <Page>
      <PageHeader
        eyebrow="What we do"
        title="Visa services"
        accent="for every journey."
        sub="One team for tourist, business, Schengen and student visas — plus the extras that make the whole thing effortless."
      />

      <section className="bg-paper relative overflow-hidden">
        {/* Ambient gold atmosphere */}
        <div className="pointer-events-none absolute inset-0" aria-hidden="true">
          <div className="absolute -top-20 right-[5%] h-[420px] w-[420px] rounded-full bg-[radial-gradient(circle,rgba(199,152,44,0.1),transparent_65%)]" />
          <div className="absolute bottom-0 left-[-5%] h-[420px] w-[420px] rounded-full bg-[radial-gradient(circle,rgba(199,152,44,0.07),transparent_65%)]" />
        </div>

        <div className="relative mx-auto max-w-7xl px-5 pb-16 md:px-8">
          {/* Main service cards — image-backed */}
          <div className="grid gap-6 md:grid-cols-2">
            {services.map((s, i) => (
              <motion.div
                key={s.slug}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.6, ease, delay: (i % 2) * 0.08 }}
              >
                <Link
                  to={`/${s.slug}`}
                  className="group relative flex h-full min-h-[340px] md:min-h-[400px] flex-col justify-end overflow-hidden rounded-[28px] border border-white/10 p-8 md:p-10 text-white shadow-[0_24px_60px_-28px_rgba(15,15,16,0.45)] transition-all duration-500 hover:-translate-y-1.5 hover:shadow-[0_34px_80px_-28px_rgba(199,152,44,0.45)] hover:border-green/40 focus:outline-none focus-visible:ring-2 focus-visible:ring-green focus-visible:ring-offset-2 focus-visible:ring-offset-paper motion-reduce:transition-none motion-reduce:hover:translate-y-0"
                >
                  {/* Imagery + veils */}
                  <img
                    src={serviceImages[s.slug]}
                    alt=""
                    loading={i > 1 ? 'lazy' : undefined}
                    decoding="async"
                    className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1400ms] ease-out group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0c0c0d] via-[#0c0c0d]/65 to-[#0c0c0d]/15" aria-hidden="true" />
                  <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(199,152,44,0.22),transparent_55%)]" aria-hidden="true" />

                  {/* Arrow chip */}
                  <span
                    aria-hidden="true"
                    className="absolute right-6 top-6 grid h-11 w-11 place-items-center rounded-full border border-white/25 bg-ink/30 backdrop-blur-md text-white transition-all duration-500 group-hover:bg-green group-hover:border-green group-hover:text-ink group-hover:rotate-45"
                  >
                    <svg viewBox="0 0 24 24" className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M7 17 17 7" />
                      <path d="M7 7h10v10" />
                    </svg>
                  </span>

                  <div className="relative">
                    <span className="inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.26em] text-green-light">
                      <span className="h-px w-5 bg-green-light/50" aria-hidden="true" />
                      {s.eyebrow}
                    </span>
                    <h3 className="mt-3 text-2xl md:text-[2rem] font-extrabold -tracking-[0.02em] drop-shadow-sm">
                      {s.label}
                    </h3>
                    <p className="mt-3 max-w-md text-sm md:text-[15px] leading-relaxed text-white/70">
                      {s.intro}
                    </p>
                    <span className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-green-light">
                      Explore
                      <span className="inline-block transition-transform duration-300 group-hover:translate-x-1.5 motion-reduce:transition-none" aria-hidden="true">
                        →
                      </span>
                    </span>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>

          {/* Extras strip */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6, ease, delay: 0.1 }}
            className="mt-6 grid gap-5 md:grid-cols-3"
          >
            {extra.map((e) => (
              <div
                key={e.h}
                className="group relative overflow-hidden rounded-[24px] border border-cloud bg-white p-7 transition-all duration-400 hover:-translate-y-1 hover:border-green/35 hover:shadow-[0_20px_50px_-24px_rgba(199,152,44,0.4)]"
              >
                <div className="pointer-events-none absolute -top-14 -right-14 h-36 w-36 rounded-full bg-green-glow blur-2xl opacity-0 transition-opacity duration-500 group-hover:opacity-100" aria-hidden="true" />
                <span
                  aria-hidden="true"
                  className="relative grid h-12 w-12 place-items-center rounded-2xl bg-gradient-to-b from-[#23201b] to-[#0d0d0e] ring-1 ring-green/40 text-xl transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3"
                >
                  {e.icon}
                </span>
                <h3 className="relative mt-5 text-lg font-extrabold text-ink">{e.h}</h3>
                <p className="relative mt-2 text-sm leading-relaxed text-muted">{e.p}</p>
                <div
                  aria-hidden="true"
                  className="relative mt-5 h-px w-full bg-gradient-to-r from-green/40 via-cloud to-transparent scale-x-0 origin-left transition-transform duration-700 group-hover:scale-x-100"
                />
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      <CtaBand />
    </Page>
  )
}
