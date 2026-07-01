import { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { getCountry, countries, getCountryImages } from '../data/countries'
import { CtaBand, Page } from '../components/PageShell'
import NotFound from './NotFound'

export default function CountryPage() {
  const { slug } = useParams()
  const c = getCountry(slug || '')
  if (!c) return <NotFound />

  const related = countries.filter((x) => x.region === c.region && x.slug !== c.slug).slice(0, 4)

  const docs = [
    'Valid passport (6+ months) & UAE residence visa',
    'Emirates ID copy (front & back)',
    'Confirmed flight & hotel bookings',
    'Recent bank statements & salary certificate',
    'Travel insurance for the trip',
    'Passport-size photographs to spec',
  ]

  const imgs = getCountryImages(c)
  const [imgIdx, setImgIdx] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setImgIdx((prev) => (prev + 1) % imgs.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [imgs.length])

  // Pricing calculator states
  const [selectedKind, setSelectedKind] = useState<string>(c.kinds[0])
  const [expressProcessing, setExpressProcessing] = useState(false)

  const baseFee = selectedKind === 'Schengen' ? 320 : selectedKind === 'Business' ? 450 : 290
  const totalFee = baseFee + (expressProcessing ? 150 : 0)
  const timeline = expressProcessing ? '2-4 days' : c.processing

  return (
    <Page>
      {/* Immersive Scenic Hero Gallery */}
      <section className="relative h-[480px] md:h-[580px] w-full overflow-hidden bg-ink">
        <AnimatePresence mode="wait">
          <motion.div
            key={imgIdx}
            initial={{ scale: 1.08, opacity: 0 }}
            animate={{ scale: 1, opacity: 0.55 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.2, ease: 'easeOut' }}
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${imgs[imgIdx]})` }}
          />
        </AnimatePresence>

        {/* Ambient Dark/Gold Vignette Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/50 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-ink/75 via-transparent to-ink/75" />

        {/* Floating Glassmorphic Content Card */}
        <div className="absolute inset-0 flex items-center justify-center p-5 z-10">
          <div className="max-w-2xl w-full bg-ink/40 border border-white/10 backdrop-blur-xl p-8 md:p-12 rounded-[28px] text-center shadow-[0_20px_50px_rgba(0,0,0,0.3)] relative">
            <span className="inline-block px-3.5 py-1 text-[9px] font-bold uppercase tracking-[0.25em] bg-[#fdf7eb]/10 border border-[#c7982c]/30 rounded-full text-green-light mb-4">
              {c.flag} {c.region} · Destination Guide
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-none mb-4">
              {c.name} <span className="bg-clip-text text-transparent bg-gradient-to-r from-green-light to-green font-bold">Visa</span>
            </h1>
            <p className="text-xs md:text-sm text-white/80 max-w-lg mx-auto leading-relaxed mb-8">
              {c.blurb}
            </p>
            
            <div className="flex flex-wrap justify-center gap-3">
              <Link to="/contact" className="rounded-full bg-gradient-to-r from-green to-green-light px-7 py-3.5 text-xs font-bold uppercase tracking-wider text-ink hover:scale-102 hover:shadow-[0_10px_25px_rgba(199,152,44,0.35)] transition-all">
                Start my application
              </Link>
              <Link to="/country" className="rounded-full border border-white/20 bg-white/5 backdrop-blur-md px-7 py-3.5 text-xs font-bold uppercase tracking-wider text-white hover:bg-white/10 hover:border-white/30 transition-all">
                All destinations
              </Link>
            </div>

            {/* Slider Dots */}
            {imgs.length > 1 && (
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-1.5 z-20">
                {imgs.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setImgIdx(idx)}
                    className={`h-1.5 rounded-full transition-all duration-300 ${
                      idx === imgIdx ? 'w-5 bg-green' : 'w-1.5 bg-white/40'
                    }`}
                  />
                ))}
              </div>
            )}
          </div>
        </div>
      </section>

      <section className="bg-paper py-12">
        <div className="mx-auto max-w-7xl px-5 pb-8 md:px-8">
          {/* Quick facts */}
          <div className="grid grid-cols-2 gap-px overflow-hidden rounded-3xl border border-cloud bg-cloud md:grid-cols-4">
            {[
              ['Processing', c.processing],
              ['Typical stay', c.stay],
              ['Visa types', c.kinds.join(', ')],
              ['Region', c.region],
            ].map(([k, v]) => (
              <div key={k} className="bg-white p-6">
                <div className="text-xs font-semibold uppercase tracking-wider text-muted">{k}</div>
                <div className="mt-1.5 font-bold">{v}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-paper pb-20">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 md:grid-cols-[1.2fr_0.8fr] md:px-8">
          {/* Body */}
          <div>
            <h2 className="text-2xl font-bold text-ink">How Travsouk handles your {c.name} visa</h2>
            <p className="mt-3 text-sm text-muted leading-relaxed">
              We manage the whole {c.name} application from Dubai — eligibility,
              documents, appointment and submission — so you can focus on the
              trip. Most files are submission-ready within 48 hours, and you’ll
              always know exactly where yours stands.
            </p>

            <h3 className="mt-10 text-lg font-bold text-ink">Typical steps</h3>
            <ol className="mt-4 space-y-3">
              {['Free eligibility check', 'Document collection & review', 'Appointment booking & biometrics', 'Submission, tracking & collection'].map((s, i) => (
                <li key={s} className="flex items-start gap-3 rounded-2xl border border-cloud bg-white p-4">
                  <span className="grid h-7 w-7 shrink-0 place-items-center rounded-full bg-[#fdf7eb] border border-[#c7982c]/20 text-xs font-bold text-green">
                    0{i + 1}
                  </span>
                  <span className="font-semibold text-sm text-ink">{s}</span>
                </li>
              ))}
            </ol>

            {/* Interactive Calculator Widget */}
            <div className="mt-12 rounded-3xl border border-cloud bg-[#fdfcfb] p-6 shadow-sm">
              <h3 className="text-lg font-bold text-ink">Interactive Fee & Time Calculator</h3>
              <p className="text-xs text-muted mt-1">Estimate your application costs and timelines from the UAE.</p>
              
              <div className="mt-5 space-y-4">
                <div>
                  <label className="text-[10px] font-bold text-muted uppercase tracking-wider">Visa Category</label>
                  <div className="flex flex-wrap gap-2 mt-1.5">
                    {c.kinds.map((k) => (
                      <button
                        key={k}
                        onClick={() => setSelectedKind(k)}
                        className={`px-4 py-2 rounded-xl text-xs font-semibold border transition-all ${
                          selectedKind === k
                            ? 'bg-ink text-white border-ink'
                            : 'bg-white text-ink border-cloud hover:border-ink/50'
                        }`}
                      >
                        {k}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="flex items-center justify-between py-3 border-t border-b border-cloud">
                  <div className="flex flex-col">
                    <span className="text-xs font-bold text-ink">Express Biometrics Slot</span>
                    <span className="text-[10px] text-muted">Saves 5-10 days of queue waiting</span>
                  </div>
                  <button
                    onClick={() => setExpressProcessing(!expressProcessing)}
                    className={`w-11 h-6 rounded-full p-0.5 transition-colors duration-300 ${
                      expressProcessing ? 'bg-green' : 'bg-cloud'
                    }`}
                  >
                    <div
                      className={`w-5 h-5 rounded-full bg-white shadow-md transform transition-transform duration-300 ${
                        expressProcessing ? 'translate-x-5' : 'translate-x-0'
                      }`}
                    />
                  </button>
                </div>

                <div className="grid grid-cols-2 gap-4 bg-white border border-cloud rounded-2xl p-4 mt-4">
                  <div>
                    <span className="text-[9px] font-bold uppercase tracking-wider text-muted">Est. Processing</span>
                    <div className="text-sm font-bold text-ink mt-0.5">{timeline}</div>
                  </div>
                  <div>
                    <span className="text-[9px] font-bold uppercase tracking-wider text-muted">Total Cost (AED)</span>
                    <div className="text-sm font-bold text-green mt-0.5">{totalFee} AED</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Scenic Grid Gallery */}
            <div className="mt-12">
              <h3 className="text-lg font-bold text-ink">Explore {c.name}</h3>
              <p className="text-xs text-muted mt-1">Explore what awaits on your journey.</p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-5">
                {imgs.map((im, idx) => (
                  <div key={idx} className="group relative h-48 rounded-2xl overflow-hidden shadow-sm">
                    <div
                      className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                      style={{ backgroundImage: `url(${im})` }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="absolute bottom-4 left-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <span className="text-xs font-semibold">Destination Spotlight</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Docs sidebar */}
          <aside>
            <div className="sticky top-28 rounded-3xl border border-cloud bg-white p-6 shadow-sm">
              <h3 className="text-lg font-bold text-ink">Documents you’ll usually need</h3>
              <ul className="mt-4 space-y-2.5">
                {docs.map((d) => (
                  <li key={d} className="flex items-start gap-2.5 text-sm">
                    <span
                      className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-[#fdf7eb] text-xs text-green font-bold"
                      aria-hidden
                    >
                      ✓
                    </span>
                    <span className="text-ink/80">{d}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-4 text-xs text-muted leading-relaxed">
                Exact requirements vary by case — your advisor confirms the final
                list for {c.name}.
              </p>
              <Link to="/contact" className="mt-5 block rounded-pill bg-ink py-3 text-center text-sm font-semibold text-white transition hover:bg-green-deep focus:outline-none focus-visible:ring-2 focus-visible:ring-ink focus-visible:ring-offset-2 focus-visible:ring-offset-paper">
                Get my exact checklist
              </Link>
            </div>
          </aside>
        </div>
      </section>

      {/* Related */}
      {related.length > 0 && (
        <section className="bg-[#fcfbfa] border-t border-black/5 py-16">
          <div className="mx-auto max-w-7xl px-5 md:px-8">
            <h3 className="mb-6 text-lg font-bold text-ink">More {c.region} destinations</h3>
            <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
              {related.map((r) => (
                <Link
                  key={r.slug}
                  to={`/country/${r.slug}`}
                  className="rounded-2xl border border-cloud bg-white p-5 transition hover:-translate-y-1 hover:shadow-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-green focus-visible:ring-offset-2 focus-visible:ring-offset-paper motion-reduce:transition-none motion-reduce:hover:translate-y-0"
                >
                  <div className="text-2xl" aria-hidden>{r.flag}</div>
                  <div className="mt-2 font-bold text-ink">{r.name}</div>
                  <div className="text-xs text-muted">{r.processing}</div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <CtaBand title={`Ready for ${c.name}?`} accent="Let’s go." />
    </Page>
  )
}
