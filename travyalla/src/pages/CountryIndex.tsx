import { useMemo, useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { PageHeader, CtaBand, Page } from '../components/PageShell'
import { useReveal } from '../hooks/useReveal'
import { countries, popularCountries, regions, type Country, getCountryImages } from '../data/countries'

const ease = [0.16, 1, 0.3, 1] as const

type Filter = 'All' | (typeof regions)[number]
const filters: Filter[] = ['All', ...regions]

function CountryCard({ country }: { country: Country }) {
  const images = getCountryImages(country)
  const coverImage = images[0]

  return (
    <Link
      to={`/country/${country.slug}`}
      className="group relative flex h-[280px] flex-col justify-end overflow-hidden rounded-[24px] border border-white/10 bg-ink p-6 shadow-md transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_20px_40px_rgba(0,0,0,0.3)] hover:border-[#c7982c]/40 focus:outline-none focus-visible:ring-2 focus-visible:ring-green focus-visible:ring-offset-2"
    >
      {/* Background Image with slow zoom transition */}
      <div
        className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 ease-out group-hover:scale-108"
        style={{ backgroundImage: `url(${coverImage})` }}
      />

      {/* Luxury Vignette and Gradients */}
      <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/65 to-transparent" />
      <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-500" />

      {/* Floating Info Overlay (top right) */}
      <div className="absolute top-4 right-4 z-10 flex gap-1.5">
        <span className="rounded-full bg-ink/50 backdrop-blur-md border border-white/10 px-3 py-1 text-[10px] font-bold text-white tracking-wide uppercase">
          ⚡ {country.processing}
        </span>
      </div>

      {/* Content */}
      <div className="relative z-10 text-white">
        <div className="flex items-center gap-2">
          <span className="text-3xl filter drop-shadow-md leading-none" aria-hidden>
            {country.flag}
          </span>
          <span className="text-[9px] font-bold uppercase tracking-[0.2em] text-green-light">
            {country.region}
          </span>
        </div>

        <h3 className="mt-2 text-xl font-bold tracking-tight text-white group-hover:text-green-light transition-colors">
          {country.name}
        </h3>
        
        <p className="mt-1 text-xs text-white/70 line-clamp-2 leading-relaxed">
          {country.blurb}
        </p>

        {/* Hover details section */}
        <div className="mt-4 flex items-center justify-between border-t border-white/10 pt-3 text-xs">
          <span className="text-white/60 font-medium">Stay: {country.stay}</span>
          <span className="flex items-center gap-1 font-bold text-green-light opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all duration-300">
            Open File <span className="text-sm">→</span>
          </span>
        </div>
      </div>
    </Link>
  )
}

export default function CountryIndex() {
  const [region, setRegion] = useState<Filter>('All')
  const [query, setQuery] = useState('')
  const reveal = useReveal<HTMLDivElement>()

  const results = useMemo(() => {
    const q = query.trim().toLowerCase()
    return countries.filter((c) => {
      const matchesRegion = region === 'All' || c.region === region
      const matchesQuery =
        !q ||
        c.name.toLowerCase().includes(q) ||
        c.region.toLowerCase().includes(q) ||
        c.kinds.some((k) => k.toLowerCase().includes(q))
      return matchesRegion && matchesQuery
    })
  }, [region, query])

  return (
    <Page>
      <PageHeader
        eyebrow="Destinations"
        title="Every border, one"
        accent="open door."
        sub="From a Schengen first-timer to a frequent flyer, browse the destinations we file for out of Dubai — with indicative timelines and the visa types we handle."
      >
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease, delay: 0.2 }}
          className="mt-9 flex flex-wrap items-center gap-4"
        >
          <div className="relative w-full max-w-md">
            <span
              className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-muted"
              aria-hidden
            >
              🔎
            </span>
            <input
              type="search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search a country or visa type…"
              aria-label="Search a country or visa type"
              className="w-full rounded-full border border-cloud bg-white/70 backdrop-blur-md py-4 pl-11 pr-4 text-sm outline-none transition focus:border-green focus-visible:ring-2 focus-visible:ring-green focus-visible:ring-offset-2 focus-visible:ring-offset-paper shadow-sm"
            />
          </div>
          <span className="text-xs font-semibold uppercase tracking-wider text-muted bg-[#fdf7eb] border border-[#c7982c]/10 px-3.5 py-1.5 rounded-full">
            ✨ {countries.length} destinations
          </span>
        </motion.div>
      </PageHeader>

      {/* Popular destinations */}
      <section className="bg-paper">
        <div className="mx-auto max-w-7xl px-5 py-14 md:px-8">
          <div className="flex items-end justify-between gap-6">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-green-deep">
                Most requested
              </p>
              <h2 className="mt-3 text-[clamp(1.8rem,3.4vw,2.6rem)] font-semibold leading-[1.02] tracking-[-0.03em] text-ink">
                Popular <span className="accent">destinations</span>
              </h2>
            </div>
          </div>

          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {popularCountries.map((country, i) => (
              <motion.div
                key={country.slug}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.5, ease, delay: (i % 4) * 0.05 }}
              >
                <CountryCard country={country} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Full grid with filters + search */}
      <section className="bg-paper">
        <div ref={reveal} className="mx-auto max-w-7xl px-5 pb-20 md:px-8">
          <div className="reveal sticky top-20 z-10 -mx-5 mb-10 bg-paper/85 px-5 py-4 backdrop-blur md:-mx-8 md:px-8">
            <div className="flex flex-wrap gap-2">
              {filters.map((f) => {
                const active = f === region
                return (
                  <button
                    key={f}
                    type="button"
                    onClick={() => setRegion(f)}
                    aria-pressed={active}
                    className={`rounded-full border px-5 py-2.5 text-xs font-bold uppercase tracking-wider transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-green focus-visible:ring-offset-2 focus-visible:ring-offset-paper ${
                      active
                        ? 'border-ink bg-ink text-white shadow-md'
                        : 'border-cloud bg-white text-muted hover:border-green hover:text-ink shadow-sm'
                    }`}
                  >
                    {f}
                  </button>
                )
              })}
            </div>
          </div>

          <div className="reveal mb-6 flex items-baseline justify-between">
            <h2 className="text-[clamp(1.6rem,3vw,2.2rem)] font-semibold tracking-[-0.03em] text-ink">
              {region === 'All' ? 'All destinations' : region}
            </h2>
            <span className="text-xs font-bold text-muted bg-white border border-cloud px-3 py-1 rounded-full shadow-sm">
              {results.length} result{results.length === 1 ? '' : 's'}
            </span>
          </div>

          {results.length > 0 ? (
            <motion.div 
              layout
              className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3"
            >
              <AnimatePresence mode="popLayout">
                {results.map((country) => (
                  <motion.div
                    layout
                    key={country.slug}
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.35, ease: 'easeInOut' }}
                    className="reveal"
                  >
                    <CountryCard country={country} />
                  </motion.div>
                ))}
              </AnimatePresence>
            </motion.div>
          ) : (
            <div className="reveal rounded-3xl border border-cloud bg-white p-12 text-center">
              <p className="text-4xl" aria-hidden>
                🧭
              </p>
              <h3 className="mt-4 text-xl font-semibold">No match yet</h3>
              <p className="mx-auto mt-2 max-w-sm text-sm text-muted">
                We couldn’t find that one in this region. Clear your search or pick another
                region — and if your destination isn’t listed, just ask us.
              </p>
              <button
                type="button"
                onClick={() => {
                  setQuery('')
                  setRegion('All')
                }}
                className="mt-6 inline-flex rounded-pill bg-ink px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-green-deep focus:outline-none focus-visible:ring-2 focus-visible:ring-ink focus-visible:ring-offset-2 focus-visible:ring-offset-paper"
              >
                Reset filters
              </button>
            </div>
          )}
        </div>
      </section>

      <CtaBand title="Pick a country," accent="we’ll handle the rest." />
    </Page>
  )
}
