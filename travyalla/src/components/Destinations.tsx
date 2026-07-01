import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { countries } from '../data/countries'

const ease = [0.16, 1, 0.3, 1] as const

// Show a curated set on the home page; the full list lives on /country.
const featured = countries.filter((c) => c.popular).slice(0, 8)

// Cover images from project assets (previously downloaded from site)
const coverImages: Record<string, string> = {
  usa: '/external/USA-copy-2-1.webp',
  uk: '/external/UK.webp',
  france: '/external/France.webp',
  germany: '/external/Germany.webp',
  switzerland: '/external/Switzerland.webp',
  japan: '/external/Japan.webp',
  turkey: '/external/Turkey.webp',
  china: '/external/0_china-1.webp',
}

export default function Destinations() {
  return (
    <section id="destinations" className="bg-[#0c0d0c] text-white py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        {/* Heading */}
        <div className="mb-12 flex flex-col items-start gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-green-light">
              Destinations
            </span>
            <h2 className="mt-3 text-[clamp(2rem,4.4vw,3.4rem)] font-semibold leading-[1.03] tracking-[-0.03em]">
              Pick a country.
              <br />
              We’ll <span className="accent text-green-light">map the route.</span>
            </h2>
          </div>
          <p className="max-w-sm text-white/60">
            From Dubai to 75+ destinations — choose where you’re headed and see a
            typical decision time. Yalla, let’s go.
          </p>
        </div>

        {/* Flag + country grid */}
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {featured.map((c, i) => (
            <motion.div
              key={c.slug}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.4, ease, delay: (i % 8) * 0.03 }}
            >
              <Link
                to={`/country/${c.slug}`}
                className="group relative flex flex-col justify-end overflow-hidden rounded-3xl border border-white/10 bg-zinc-900 min-h-[220px] p-6 transition hover:border-green-light hover:shadow-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green-light focus-visible:ring-offset-2 focus-visible:ring-offset-ink"
              >
                {/* Background image */}
                <div className="absolute inset-0 z-0">
                  <img
                    src={coverImages[c.slug] || '/external/France.webp'}
                    alt={c.name}
                    className="h-full w-full object-cover transition-all duration-500 grayscale opacity-45 group-hover:grayscale-0 group-hover:opacity-75 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent z-10" />
                </div>

                {/* Content */}
                <div className="relative z-20 space-y-2">
                  <span className="text-3xl leading-none block" aria-hidden="true">
                    {c.flag}
                  </span>
                  <div className="min-w-0">
                    <span className="block truncate text-lg font-bold text-white leading-tight">{c.name}</span>
                    <span className="block text-xs text-white/60 font-medium mt-0.5">{c.processing}</span>
                  </div>
                </div>

                <span
                  aria-hidden="true"
                  className="absolute bottom-6 right-6 text-white/50 transition duration-300 group-hover:translate-x-0.5 group-hover:text-green-light z-20 text-lg font-bold"
                >
                  →
                </span>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-12 flex justify-center">
          <Link
            to="/country"
            className="rounded-pill bg-green px-7 py-4 text-sm font-semibold text-ink transition hover:-translate-y-0.5 hover:bg-green-light focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green-light focus-visible:ring-offset-2 focus-visible:ring-offset-ink"
          >
            View all destinations →
          </Link>
        </div>
      </div>
    </section>
  )
}
