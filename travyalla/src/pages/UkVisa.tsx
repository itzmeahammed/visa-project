import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { PageHeader, CtaBand, Page } from '../components/PageShell'
import { useReveal } from '../hooks/useReveal'
import { countries, getCountry, getCountryImages } from '../data/countries'

const quickFacts = [
  ['Processing', '~3–4 weeks'],
  ['Typical stay', 'Up to 6 months'],
  ['Visa types', 'Tourist · Business · Study'],
  ['Apply from', 'Dubai & across the UAE'],
]

const visaTypes = [
  {
    icon: '🎡',
    name: 'Standard Visitor',
    desc: 'For holidays, sightseeing and visiting family or friends across England, Scotland, Wales and Northern Ireland.',
    points: ['Single trips up to 6 months', 'Sponsored or self-funded', 'Long-term 2, 5 & 10-year options'],
  },
  {
    icon: '💼',
    name: 'Business Visitor',
    desc: 'For meetings, conferences, trade fairs and short professional engagements with a UK partner or office.',
    points: ['Meetings & negotiations', 'Site visits & training', 'Invitation-letter guidance'],
  },
  {
    icon: '🎓',
    name: 'Study & Short Courses',
    desc: 'For students attending short programmes, English courses or interviews ahead of a longer study route.',
    points: ['Short-term study under 6 months', 'CAS & enrolment support', 'Onward Student route advice'],
  },
]

const checklist = [
  'Passport valid for the full duration of your stay, plus your UAE residence visa',
  'Emirates ID (front and back) and a recent passport-style photograph',
  'Completed online application and biometrics appointment confirmation',
  'Bank statements for the last 6 months and a salary certificate',
  'Employment or trade-licence proof, plus NOC from your employer',
  'Flight reservations, UK accommodation details and a day-by-day itinerary',
]

const steps = [
  {
    n: '01',
    title: 'Free eligibility chat',
    body: 'We review your travel history, residency and purpose of visit, then recommend the right UK route — no guesswork, no upsell.',
  },
  {
    n: '02',
    title: 'Build a clean file',
    body: 'Your advisor collects every document, checks it against UKVI expectations and writes a clear, honest cover letter.',
  },
  {
    n: '03',
    title: 'Apply & give biometrics',
    body: 'We complete the online form, pay the correct fee and book your appointment at the VFS centre in Dubai or Abu Dhabi.',
  },
  {
    n: '04',
    title: 'Track to decision',
    body: 'We monitor your application, keep you updated, and collect your passport the moment it returns from the UK hub.',
  },
]

const whyUs = [
  ['🇬🇧', 'UK-specific know-how', 'We focus on what UKVI actually looks for — strong ties, clear funds and a credible trip.'],
  ['⚡', 'Priority routes', 'Need it faster? We can arrange priority and super-priority processing where available.'],
  ['📄', 'No template letters', 'Every cover letter and itinerary is written for your case, not copied from a stack.'],
  ['🤝', 'One advisor, start to finish', 'A single dedicated person owns your file — you always know who to ask.'],
]

const faqs = [
  {
    q: 'How long does a UK visitor visa take from the UAE?',
    a: 'Standard processing is usually around three to four weeks from your biometrics appointment, though it can shift with seasonal demand. Where it is offered, we can arrange priority service to bring a decision down to roughly five working days.',
  },
  {
    q: 'Do UAE residents need to attend an interview?',
    a: 'Most visitor applicants do not face a formal interview — you simply attend a short biometrics appointment at the VFS Global centre. We prepare you fully so that, in the rare event you are asked questions, you answer with confidence.',
  },
  {
    q: 'How much money should I show in my bank statements?',
    a: 'There is no fixed magic number. UKVI wants to see that you can comfortably fund your trip and that your account looks stable and genuine. Your advisor reviews your statements first and tells you honestly how they read before you apply.',
  },
  {
    q: 'Can I include my family on one UK application?',
    a: 'Each traveller, including children, needs their own application and biometrics. We coordinate the whole family together so the documents stay consistent, the bookings line up and nothing slips through the cracks.',
  },
]

const related = countries
  .filter((c) => c.region === 'Schengen' || c.slug === 'ireland' || c.slug === 'usa' || c.slug === 'canada')
  .filter((c) => ['ireland', 'france', 'germany', 'usa'].includes(c.slug))

export default function UkVisa() {
  const ref = useReveal<HTMLDivElement>()
  const c = getCountry('uk')
  const imgs = c ? getCountryImages(c) : []
  const [imgIdx, setImgIdx] = useState(0)

  useEffect(() => {
    if (imgs.length <= 1) return
    const timer = setInterval(() => {
      setImgIdx((prev) => (prev + 1) % imgs.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [imgs.length])

  // Pricing calculator states
  const [selectedKind, setSelectedKind] = useState<string>('Tourist')
  const [expressProcessing, setExpressProcessing] = useState(false)

  const baseFee = selectedKind === 'Tourist' ? 390 : selectedKind === 'Business' ? 490 : 650
  const totalFee = baseFee + (expressProcessing ? 150 : 0)
  const timeline = expressProcessing ? '5 working days' : '3–4 weeks'

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
              🇬🇧 UK & Ireland · Destination Guide
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-none mb-4">
              United Kingdom <span className="bg-clip-text text-transparent bg-gradient-to-r from-green-light to-green font-bold">Visa</span>
            </h1>
            <p className="text-xs md:text-sm text-white/80 max-w-lg mx-auto leading-relaxed mb-8">
              From London weekends to family visits and business trips, Travsouk builds calm, well-documented UK visitor applications for residents right here in Dubai.
            </p>
            
            <div className="flex flex-wrap justify-center gap-3">
              <Link to="/contact" className="rounded-full bg-gradient-to-r from-green to-green-light px-7 py-3.5 text-xs font-bold uppercase tracking-wider text-ink hover:scale-102 hover:shadow-[0_10px_25px_rgba(199,152,44,0.35)] transition-all">
                Start my UK application
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

      {/* Quick facts */}
      <section className="bg-paper py-12">
        <div className="mx-auto max-w-7xl px-5 pb-8 md:px-8">
          <div className="grid grid-cols-2 gap-px overflow-hidden rounded-3xl border border-cloud bg-cloud md:grid-cols-4">
            {quickFacts.map(([k, v]) => (
              <div key={k} className="bg-white p-6">
                <div className="text-xs font-semibold uppercase tracking-wider text-muted">{k}</div>
                <div className="mt-1.5 font-bold">{v}</div>
              </div>
            ))}
          </div>
          <p className="mt-4 max-w-2xl text-xs text-muted">
            Figures are indicative for UAE residents and shift with the season. Your advisor confirms exact
            timelines and fees once we see your case.
          </p>
        </div>
      </section>

      {/* Visa types */}
      <section className="bg-paper" ref={ref}>
        <div className="mx-auto max-w-7xl px-5 py-8 md:px-8 md:py-12">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-green-deep">Visa types</span>
          <h2 className="reveal mt-3 max-w-2xl text-[clamp(1.9rem,4vw,3rem)] font-semibold leading-[1.02] tracking-[-0.03em] text-ink">
            Choose the route that <span className="accent">fits your trip.</span>
          </h2>
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {visaTypes.map((t) => (
              <div key={t.name} className="reveal flex flex-col rounded-3xl border border-cloud bg-white p-7 shadow-sm">
                <div aria-hidden="true" className="grid h-12 w-12 place-items-center rounded-2xl bg-green/15 text-2xl">{t.icon}</div>
                <h3 className="mt-5 text-xl font-bold text-ink">{t.name}</h3>
                <p className="mt-2 text-sm text-muted">{t.desc}</p>
                <ul className="mt-5 space-y-2.5 border-t border-cloud pt-5">
                  {t.points.map((p) => (
                    <li key={p} className="flex items-start gap-2.5 text-sm">
                      <span aria-hidden="true" className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-[#fdf7eb] text-xs text-green font-bold">
                        ✓
                      </span>
                      <span className="text-ink/80">{p}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Checklist + process */}
      <section className="bg-paper">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 pb-16 md:grid-cols-[0.85fr_1.15fr] md:px-8">
          {/* Checklist */}
          <aside>
            <div className="sticky top-28 rounded-3xl border border-cloud bg-white p-7 shadow-sm">
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-green-deep">Checklist</span>
              <h3 className="mt-3 text-xl font-bold text-ink">What you'll usually need</h3>
              <ul className="mt-5 space-y-3">
                {checklist.map((d) => (
                  <li key={d} className="flex items-start gap-2.5 text-sm">
                    <span aria-hidden="true" className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-[#fdf7eb] text-xs text-green font-bold">
                      ✓
                    </span>
                    <span className="text-ink/80">{d}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-5 text-xs text-muted leading-relaxed">
                Requirements vary by purpose and profile — your advisor confirms the final UK list for you.
              </p>
              <Link
                to="/contact"
                className="mt-5 block rounded-pill bg-ink py-3 text-center text-sm font-semibold text-white transition hover:bg-green-deep focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green focus-visible:ring-offset-2"
              >
                Get my exact checklist
              </Link>
            </div>
          </aside>

          {/* Process */}
          <div>
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-green-deep">How it works</span>
            <h2 className="mt-3 max-w-xl text-[clamp(1.9rem,4vw,3rem)] font-semibold leading-[1.02] tracking-[-0.03em] text-ink">
              Four calm steps to <span className="accent">your decision.</span>
            </h2>
            <div className="mt-8 space-y-4">
              {steps.map((s) => (
                <div key={s.n} className="flex gap-5 rounded-3xl border border-cloud bg-white p-6 shadow-sm">
                  <div className="text-2xl font-bold tracking-tight text-green">{s.n}</div>
                  <div>
                    <h3 className="text-lg font-bold text-ink">{s.title}</h3>
                    <p className="mt-1.5 text-sm text-muted leading-relaxed">{s.body}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Interactive Fee & Time Calculator Widget */}
            <div className="mt-12 rounded-3xl border border-cloud bg-[#fdfcfb] p-6 shadow-sm">
              <h3 className="text-lg font-bold text-ink">Interactive Fee & Time Calculator</h3>
              <p className="text-xs text-muted mt-1">Estimate your UK application costs and timelines from the UAE.</p>
              
              <div className="mt-5 space-y-4">
                <div>
                  <label className="text-[10px] font-bold text-muted uppercase tracking-wider">Visa Type</label>
                  <div className="flex flex-wrap gap-2 mt-1.5">
                    {['Tourist', 'Business', 'Study'].map((k) => (
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
                    <span className="text-xs font-bold text-ink">Priority Processing (5-day decision)</span>
                    <span className="text-[10px] text-muted">VFS Global priority slot upgrade</span>
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
              <h3 className="text-lg font-bold text-ink">Explore the United Kingdom</h3>
              <p className="text-xs text-muted mt-1">Scenic views waiting on your British journey.</p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-5">
                {imgs.map((im, idx) => (
                  <div key={idx} className="group relative h-48 rounded-2xl overflow-hidden shadow-sm">
                    <div
                      className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                      style={{ backgroundImage: `url(${im})` }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="absolute bottom-4 left-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <span className="text-xs font-semibold">Scenic View Spotlight</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Travsouk — dark band */}
      <section className="bg-paper">
        <div className="mx-auto max-w-7xl px-5 pb-16 md:px-8">
          <div className="relative overflow-hidden rounded-[36px] bg-ink px-6 py-14 text-white md:px-12 md:py-20">
            <div className="pointer-events-none absolute -right-24 -top-20 h-80 w-80 rounded-full bg-green/25 blur-3xl" />
            <span className="relative text-xs font-semibold uppercase tracking-[0.2em] text-green-light">
              Why Travsouk
            </span>
            <h2 className="relative mt-3 max-w-2xl text-[clamp(1.9rem,4vw,3rem)] font-semibold leading-[1.02] tracking-[-0.03em]">
              Built for the UK, <span className="accent text-green-light">honest by default.</span>
            </h2>
            <div className="relative mt-10 grid gap-px overflow-hidden rounded-3xl bg-white/10 sm:grid-cols-2">
              {whyUs.map(([icon, title, body]) => (
                <div key={title} className="bg-ink p-7">
                  <div aria-hidden="true" className="text-2xl">{icon}</div>
                  <h3 className="mt-4 text-lg font-bold">{title}</h3>
                  <p className="mt-2 text-sm text-white/60">{body}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-paper">
        <div className="mx-auto max-w-3xl px-5 pb-16 md:px-8">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-green-deep">UK FAQ</span>
          <h2 className="mt-3 text-[clamp(1.9rem,4vw,3rem)] font-semibold leading-[1.02] tracking-[-0.03em]">
            Questions, <span className="accent">answered straight.</span>
          </h2>
          <div className="mt-8 space-y-3">
            {faqs.map((f) => (
              <details key={f.q} className="group rounded-3xl border border-cloud bg-white p-6">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 rounded-xl font-semibold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green focus-visible:ring-offset-2">
                  {f.q}
                  <span aria-hidden="true" className="grid h-7 w-7 shrink-0 place-items-center rounded-full bg-green/15 text-green-deep transition group-open:rotate-45">
                    +
                  </span>
                </summary>
                <p className="mt-3 text-sm text-muted">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Related destinations */}
      <section className="bg-paper">
        <div className="mx-auto max-w-7xl px-5 pb-20 md:px-8">
          <h3 className="mb-6 text-lg font-bold">Pairing the UK with Europe & beyond</h3>
          <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
            {related.map((r) => (
              <Link
                key={r.slug}
                to={`/country/${r.slug}`}
                className="rounded-2xl border border-cloud bg-white p-5 transition hover:-translate-y-1 hover:shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green focus-visible:ring-offset-2"
              >
                <div aria-hidden="true" className="text-2xl">{r.flag}</div>
                <div className="mt-2 font-bold">{r.name}</div>
                <div className="text-xs text-muted">{r.processing}</div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CtaBand title="Ready for the UK?" accent="Yalla, let's go." />
    </Page>
  )
}
