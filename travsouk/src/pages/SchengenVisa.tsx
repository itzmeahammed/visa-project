import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { PageHeader, CtaBand, Page } from '../components/PageShell'
import { useReveal } from '../hooks/useReveal'
import { countries, getCountry, getCountryImages } from '../data/countries'
import { faqs } from '../data'

const schengenCountries = countries.filter((c) => c.region === 'Schengen')

const benefits = [
  {
    icon: '🌍',
    title: 'One visa, the whole zone',
    body: 'A single Schengen sticker opens passport-free travel across the entire member area — hop borders without a fresh application at every stop.',
  },
  {
    icon: '🔁',
    title: 'Multiple-entry potential',
    body: 'Frequent travelers can qualify for long-validity, multi-entry visas, so weekend escapes and back-to-back trips stay effortless.',
  },
  {
    icon: '📈',
    title: 'Stronger travel history',
    body: 'A clean Schengen approval is a powerful stamp — it strengthens future applications for the UK, US, Canada and beyond.',
  },
  {
    icon: '⏱️',
    title: '90 days in any 180',
    body: 'Stay up to three months within each rolling half-year for tourism, family visits or business meetings across the bloc.',
  },
  {
    icon: '🧾',
    title: 'Tourism or business',
    body: 'Whether it is a city break or a conference in Frankfurt, we file the right category for your purpose of travel.',
  },
  {
    icon: '🤝',
    title: 'Family-friendly filing',
    body: 'Travelling with spouse, kids or parents? We bundle the whole group into one coordinated, consistent submission.',
  },
]

const categories = [
  {
    label: 'Tourist',
    validity: 'Short-stay · up to 90 days',
    body: 'Sightseeing, holidays, island-hopping or visiting friends and relatives anywhere inside the zone.',
  },
  {
    label: 'Business',
    validity: 'Short-stay · up to 90 days',
    body: 'Meetings, conferences, trade fairs and supplier visits, backed by the right invitation and company papers.',
  },
  {
    label: 'Multiple-entry',
    validity: 'Up to 1–5 years',
    body: 'For seasoned travelers with a solid history — come and go repeatedly on one long-validity visa.',
  },
]

const documents = [
  'Passport valid 3+ months beyond return, with two blank pages',
  'Completed and signed Schengen application form',
  'Two recent biometric photos to ICAO specification',
  'UAE residence visa valid well past your trip dates',
  'Confirmed return flight and day-by-day itinerary',
  'Hotel bookings or a host invitation for every night',
  'Travel medical insurance covering at least €30,000',
  'Personal bank statements for the last three to six months',
  'Salary certificate, trade licence or proof of income',
  'No-objection or leave letter from your employer',
]

const steps = [
  {
    n: '01',
    title: 'Free eligibility check',
    body: 'We review your profile, destination and travel dates, then confirm the right consulate and visa category for you.',
  },
  {
    n: '02',
    title: 'Document build',
    body: 'You upload what you have; we assemble, translate and proof every page into a consulate-ready file.',
  },
  {
    n: '03',
    title: 'Form & appointment',
    body: 'We complete the application, book your biometrics slot and prep you for exactly what to expect on the day.',
  },
  {
    n: '04',
    title: 'Submission & tracking',
    body: 'Your file is lodged at the visa centre and we monitor its status, keeping you updated at each milestone.',
  },
  {
    n: '05',
    title: 'Passport returned',
    body: 'Once a decision lands, we collect your passport and hand it back — visa inside, ready to fly.',
  },
]

const facts = [
  { k: 'Processing time', v: '10–15 working days', note: 'Allow longer in peak summer season.' },
  { k: 'Apply ahead', v: 'Up to 6 months before', note: 'No later than 15 days prior to travel.' },
  { k: 'Max stay', v: '90 days / 180 days', note: 'Counted across the whole zone.' },
  { k: 'Insurance', v: '€30,000 minimum', note: 'Valid across all member states.' },
]

export default function SchengenVisa() {
  const benefitsRef = useReveal<HTMLDivElement>()
  const catRef = useReveal<HTMLDivElement>()
  const countriesRef = useReveal<HTMLDivElement>()
  const helpRef = useReveal<HTMLDivElement>()
  const docsRef = useReveal<HTMLDivElement>()
  const stepsRef = useReveal<HTMLDivElement>()
  const factsRef = useReveal<HTMLDivElement>()
  const faqRef = useReveal<HTMLDivElement>()

  const [open, setOpen] = useState<number | null>(0)

  const franceCountry = getCountry('france')
  const imgs = franceCountry ? getCountryImages(franceCountry) : []
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

  const baseFee = selectedKind === 'Tourist' ? 320 : selectedKind === 'Business' ? 450 : 290
  const totalFee = baseFee + (expressProcessing ? 150 : 0)
  const timeline = expressProcessing ? '3-5 days' : '10-15 working days'

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
              🇪🇺 Schengen Zone · Multi-Country Guide
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-none mb-4">
              Schengen <span className="bg-clip-text text-transparent bg-gradient-to-r from-green-light to-green font-bold">Visa</span>
            </h1>
            <p className="text-xs md:text-sm text-white/80 max-w-lg mx-auto leading-relaxed mb-8">
              Unlock 29 European countries with a single application. Travsouk handles appointment booking, document review, and submission.
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

      {/* What is / benefits */}
      <section className="bg-paper">
        <div ref={benefitsRef} className="mx-auto max-w-7xl px-5 py-16 md:px-8 md:py-24">
          <div className="reveal max-w-2xl">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-green-deep">
              Why a Schengen visa
            </span>
            <h2 className="mt-3 text-[clamp(2rem,4.4vw,3.2rem)] font-semibold leading-[1.02] tracking-[-0.03em]">
              One sticker that unlocks a whole{' '}
              <span className="accent">continent.</span>
            </h2>
            <p className="mt-4 text-lg text-muted">
              The Schengen area lets you cross internal borders without a fresh
              visa each time. Here is what makes it worth applying for properly.
            </p>
          </div>
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {benefits.map((b) => (
              <div
                key={b.title}
                className="reveal rounded-3xl border border-cloud bg-white p-7"
              >
                <span className="text-2xl" aria-hidden="true">{b.icon}</span>
                <h3 className="mt-4 text-lg font-semibold">{b.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{b.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="bg-paper">
        <div ref={catRef} className="mx-auto max-w-7xl px-5 pb-16 md:px-8 md:pb-24">
          <div className="reveal max-w-2xl">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-green-deep">
              Visa categories
            </span>
            <h2 className="mt-3 text-[clamp(2rem,4.4vw,3.2rem)] font-semibold leading-[1.02] tracking-[-0.03em]">
              Pick the route that{' '}
              <span className="accent">fits your trip.</span>
            </h2>
          </div>
          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {categories.map((c) => (
              <div
                key={c.label}
                className="reveal flex flex-col rounded-3xl border border-cloud bg-white p-8"
              >
                <h3 className="text-xl font-semibold">{c.label}</h3>
                <span className="mt-2 text-xs font-semibold uppercase tracking-[0.16em] text-green-deep">
                  {c.validity}
                </span>
                <p className="mt-4 text-sm leading-relaxed text-muted">{c.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Countries */}
      <section className="bg-ink text-white">
        <div ref={countriesRef} className="mx-auto max-w-7xl px-5 py-16 md:px-8 md:py-24">
          <div className="reveal max-w-2xl">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-green-light">
              The member countries
            </span>
            <h2 className="mt-3 text-[clamp(2rem,4.4vw,3.2rem)] font-semibold leading-[1.02] tracking-[-0.03em]">
              {schengenCountries.length}+ countries, one{' '}
              <span className="accent text-green-light">application.</span>
            </h2>
            <p className="mt-4 text-lg text-white/60">
              Apply through the country you will spend the most time in — or your
              first point of entry — and roam the rest border-free.
            </p>
          </div>
          <div className="reveal mt-12 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
            {schengenCountries.map((c) => (
              <div
                key={c.slug}
                className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-3 transition hover:border-green-light/50 hover:bg-white/[0.07]"
              >
                <span className="text-xl" aria-hidden="true">{c.flag}</span>
                <span className="text-sm font-medium">{c.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How Travsouk helps */}
      <section className="bg-paper">
        <div ref={helpRef} className="mx-auto max-w-7xl px-5 py-16 md:px-8 md:py-24">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div className="reveal">
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-green-deep">
                How we help
              </span>
              <h2 className="mt-3 text-[clamp(2rem,4.4vw,3.2rem)] font-semibold leading-[1.02] tracking-[-0.03em]">
                A refusal is usually a{' '}
                <span className="accent">paperwork problem.</span>
              </h2>
              <p className="mt-4 text-lg text-muted">
                Most Schengen rejections come down to thin bank statements, a vague
                itinerary or a weak cover letter — not bad luck. We close those gaps
                before your file ever reaches the consulate.
              </p>
              <Link
                to="/contact"
                className="mt-7 inline-flex rounded-pill bg-ink px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-green-deep focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green-deep focus-visible:ring-offset-2 focus-visible:ring-offset-paper"
              >
                Get my file reviewed →
              </Link>
            </div>
            <div className="reveal grid gap-4 sm:grid-cols-2">
              {[
                ['🔍', 'Honest eligibility', 'We tell you straight if your profile is ready — or what to fix first.'],
                ['🧮', 'Financial framing', 'Statements and proof of funds presented the way a visa officer reads them.'],
                ['✍️', 'Cover letter & itinerary', 'A coherent travel story that ties dates, bookings and purpose together.'],
                ['🚪', 'Doorstep service', 'We collect and return your documents anywhere in the UAE.'],
              ].map(([icon, title, body]) => (
                <div key={title} className="rounded-3xl border border-cloud bg-white p-6">
                  <span className="text-xl" aria-hidden="true">{icon}</span>
                  <h3 className="mt-3 text-base font-semibold">{title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">{body}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Document checklist */}
      <section className="bg-paper">
        <div ref={docsRef} className="mx-auto max-w-7xl px-5 pb-16 md:px-8 md:pb-24">
          <div className="reveal max-w-2xl">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-green-deep">
              Document checklist
            </span>
            <h2 className="mt-3 text-[clamp(2rem,4.4vw,3.2rem)] font-semibold leading-[1.02] tracking-[-0.03em]">
              What you will need to{' '}
              <span className="accent">have ready.</span>
            </h2>
            <p className="mt-4 text-lg text-muted">
              A typical UAE-resident file looks like this. We confirm the exact list
              for your chosen consulate before you submit.
            </p>
          </div>
          <div className="reveal mt-10 grid gap-3 sm:grid-cols-2">
            {documents.map((d, i) => (
              <div
                key={d}
                className="flex items-start gap-4 rounded-2xl border border-cloud bg-white px-5 py-4"
              >
                <span className="mt-0.5 flex h-7 w-7 flex-none items-center justify-center rounded-full bg-green/15 text-xs font-semibold text-green-deep">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <span className="text-sm leading-relaxed text-ink/80">{d}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process steps */}
      <section className="bg-paper">
        <div ref={stepsRef} className="mx-auto max-w-7xl px-5 pb-16 md:px-8 md:pb-24">
          <div className="reveal max-w-2xl">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-green-deep">
              The process
            </span>
            <h2 className="mt-3 text-[clamp(2rem,4.4vw,3.2rem)] font-semibold leading-[1.02] tracking-[-0.03em]">
              Five steps from enquiry to{' '}
              <span className="accent">boarding pass.</span>
            </h2>
          </div>
          <div className="mt-12 grid gap-5 md:grid-cols-3 lg:grid-cols-5">
            {steps.map((s) => (
              <div
                key={s.n}
                className="reveal rounded-3xl border border-cloud bg-white p-6"
              >
                <span className="text-2xl font-semibold text-green-deep">{s.n}</span>
                <h3 className="mt-3 text-base font-semibold">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{s.body}</p>
              </div>
            ))}
          </div>

          {/* Interactive Fee & Time Calculator Widget */}
          <div className="mt-16 max-w-3xl mx-auto rounded-3xl border border-cloud bg-[#fdfcfb] p-8 shadow-sm">
            <h3 className="text-xl font-bold text-ink">Interactive Schengen Fee & Time Calculator</h3>
            <p className="text-xs text-muted mt-1">Estimate your Schengen application costs and timelines from the UAE.</p>
            
            <div className="mt-6 space-y-5">
              <div>
                <label className="text-[10px] font-bold text-muted uppercase tracking-wider">Visa Category</label>
                <div className="flex flex-wrap gap-2 mt-1.5">
                  {['Tourist', 'Business', 'Multiple-entry'].map((k) => (
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
                  <span className="text-xs font-bold text-ink">Express Consulate Slot Appointment Upgrade</span>
                  <span className="text-[10px] text-muted">Saves 10-15 days of waiting for appointments</span>
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
          <div className="mt-16 max-w-5xl mx-auto text-center">
            <h3 className="text-2xl font-bold text-ink">Explore Europe</h3>
            <p className="text-xs text-muted mt-1">Scenic views waiting on your European Schengen journey.</p>
            
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-8">
              {imgs.map((im, idx) => (
                <div key={idx} className="group relative h-56 rounded-3xl overflow-hidden shadow-md">
                  <div
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                    style={{ backgroundImage: `url(${im})` }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute bottom-4 left-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-left">
                    <span className="text-xs font-semibold">Scenic View Spotlight</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Processing time & validity facts */}
      <section className="bg-paper">
        <div ref={factsRef} className="mx-auto max-w-7xl px-5 pb-16 md:px-8 md:pb-24">
          <div className="reveal rounded-[36px] border border-cloud bg-white p-8 md:p-12">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-green-deep">
              Timing & validity
            </span>
            <h2 className="mt-3 max-w-2xl text-[clamp(1.7rem,3.6vw,2.6rem)] font-semibold leading-[1.04] tracking-[-0.03em]">
              The numbers worth{' '}
              <span className="accent">knowing up front.</span>
            </h2>
            <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {facts.map((f) => (
                <div key={f.k} className="border-t border-cloud pt-5">
                  <p className="text-xs font-semibold uppercase tracking-[0.16em] text-muted">
                    {f.k}
                  </p>
                  <p className="mt-2 text-2xl font-semibold tracking-[-0.02em]">{f.v}</p>
                  <p className="mt-1 text-sm text-muted">{f.note}</p>
                </div>
              ))}
            </div>
            <p className="mt-8 text-xs text-muted">
              Figures are indicative for UAE residents and set by each consulate.
              Your advisor confirms exact timelines for your file. (Service fees and
              consular fees are quoted individually.)
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-paper">
        <div ref={faqRef} className="mx-auto max-w-3xl px-5 pb-20 md:px-8 md:pb-28">
          <div className="reveal text-center">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-green-deep">
              Questions
            </span>
            <h2 className="mt-3 text-[clamp(2rem,4.4vw,3.2rem)] font-semibold leading-[1.02] tracking-[-0.03em]">
              Schengen, <span className="accent">answered.</span>
            </h2>
          </div>
          <div className="reveal mt-10 divide-y divide-cloud overflow-hidden rounded-3xl border border-cloud bg-white">
            {faqs.map((f, i) => {
              const isOpen = open === i
              return (
                <button
                  key={f.q}
                  type="button"
                  aria-expanded={isOpen}
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="flex w-full flex-col items-start px-6 py-5 text-left transition hover:bg-paper/60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-green-deep"
                >
                  <div className="flex w-full items-center justify-between gap-4">
                    <span className="text-base font-semibold">{f.q}</span>
                    <span
                      aria-hidden="true"
                      className={`flex-none text-xl text-green-deep transition-transform ${
                        isOpen ? 'rotate-45' : ''
                      }`}
                    >
                      +
                    </span>
                  </div>
                  {isOpen && (
                    <p className="mt-3 text-sm leading-relaxed text-muted">{f.a}</p>
                  )}
                </button>
              )
            })}
          </div>
        </div>
      </section>

      <CtaBand title="Yalla — Europe is" accent="closer than you think." />
    </Page>
  )
}
