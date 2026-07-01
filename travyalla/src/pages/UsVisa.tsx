import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { PageHeader, CtaBand, Page } from '../components/PageShell'
import { useReveal } from '../hooks/useReveal'
import { countries, getCountry, getCountryImages } from '../data/countries'

const quickFacts = [
  ['Processing', '7–21 days', 'From DS-160 to a stamped passport, once your interview slot is confirmed.'],
  ['Interview', 'Required', 'In-person consular interview at the US Embassy or Consulate.'],
  ['Application', 'DS-160', 'The online non-immigrant form every B1/B2 applicant must file.'],
  ['Validity', 'Up to 10 yrs', 'B1/B2 visas are commonly issued with multiple-entry, long validity.'],
] as const

const visaTypes = [
  {
    icon: '💼',
    name: 'B1 — Business',
    desc: 'For conferences, client meetings, contract talks and short professional trips that do not involve US employment.',
  },
  {
    icon: '🏖️',
    name: 'B2 — Tourism',
    desc: 'For holidays, family visits, sightseeing and short medical-treatment stays across the United States.',
  },
  {
    icon: '🔁',
    name: 'B1/B2 Combined',
    desc: 'The most common grant — one visa that lets you mix business and leisure on the same trip.',
  },
  {
    icon: '🛬',
    name: 'Transit (C-1)',
    desc: 'For travellers connecting through a US airport en route to a third country.',
  },
]

const documents = [
  'Passport valid 6+ months beyond travel, with a blank visa page',
  'UAE residence visa and Emirates ID (front & back)',
  'DS-160 confirmation page with barcode',
  'MRV fee payment receipt and interview appointment letter',
  'Recent passport photo to US 2x2 inch specification',
  'Employment proof — salary certificate, trade licence or NOC',
  'Six months of personal bank statements',
  'Travel plan, hotel reservations and return ticket outline',
]

const prepPoints = [
  'A clear, one-line reason for your trip — rehearsed but natural.',
  'Proof of strong ties to the UAE: job, family, property or business.',
  'Honest, consistent answers that match your DS-160 exactly.',
  'Calm body language and short, direct responses to the officer.',
]

const steps = [
  ['Eligibility & profile review', 'We assess your travel history, ties and purpose to gauge approval odds before a dirham is spent.'],
  ['DS-160 preparation', 'Our team drafts and reviews your full online application to remove the small errors that trigger refusals.'],
  ['Fee, scheduling & booking', 'We pay the MRV fee, lock the earliest sensible interview slot and confirm your biometrics appointment.'],
  ['Interview coaching', 'A one-to-one mock session so you walk into the consulate knowing exactly what to expect.'],
  ['Decision & collection', 'We track your passport return and update you the moment your visa is ready to collect.'],
]

const why = [
  ['🎯', 'Approval-first screening', 'We tell you honestly where you stand before you apply — no false promises, no wasted fees.'],
  ['🗣️', 'Real interview coaching', 'Live mock interviews with feedback, not a generic PDF of sample questions.'],
  ['📂', 'Zero-error paperwork', 'Every DS-160 field and document is double-checked by an advisor who handles US files daily.'],
  ['📍', 'Dubai-based, always reachable', 'Walk into our office or message your advisor directly — one person owns your case start to finish.'],
]

const faqs = [
  {
    q: 'Do I really need to attend the interview in person?',
    a: 'For most first-time B1/B2 applicants, yes — the consular interview is mandatory. Some renewals may qualify for an interview waiver, and we check your eligibility for that route before booking anything.',
  },
  {
    q: 'How far in advance should I start my US visa from Dubai?',
    a: 'Interview slots at the US Mission in the UAE can move quickly, so we recommend starting six to eight weeks before travel. We begin the DS-160 immediately and grab the earliest reasonable appointment for you.',
  },
  {
    q: 'What is the most common reason US visas get refused?',
    a: 'Refusals under Section 214(b) usually come down to weak proof of ties to the UAE or answers that do not match the DS-160. Our screening and coaching are built specifically to close those gaps.',
  },
  {
    q: 'Can Travsouk guarantee my US visa will be approved?',
    a: 'No honest agency can — the final decision sits with the consular officer alone. What we guarantee is a flawless application, a well-prepared interview and a straight answer about your real chances.',
  },
]

export default function UsVisa() {
  const reveal = useReveal<HTMLDivElement>()
  const c = getCountry('usa')
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

  const baseFee = selectedKind === 'Tourist' ? 680 : selectedKind === 'Business' ? 780 : 490
  const totalFee = baseFee + (expressProcessing ? 200 : 0)
  const timeline = expressProcessing ? '7 days' : '14-21 days'

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
              🇺🇸 North America · B1/B2 Visa Guide
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-none mb-4">
              United States <span className="bg-clip-text text-transparent bg-gradient-to-r from-green-light to-green font-bold">Visa</span>
            </h1>
            <p className="text-xs md:text-sm text-white/80 max-w-lg mx-auto leading-relaxed mb-8">
              From the DS-160 to interview day, Travsouk guides UAE residents through the US B1/B2 process with honest advice and zero-error paperwork.
            </p>
            
            <div className="flex flex-wrap justify-center gap-3">
              <Link to="/contact" className="rounded-full bg-gradient-to-r from-green to-green-light px-7 py-3.5 text-xs font-bold uppercase tracking-wider text-ink hover:scale-102 hover:shadow-[0_10px_25px_rgba(199,152,44,0.35)] transition-all">
                Start my US visa application
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

      <div ref={reveal}>
        {/* Quick facts */}
        <section className="bg-paper">
          <div className="mx-auto max-w-7xl px-5 pb-8 md:px-8">
            <div className="reveal grid grid-cols-2 gap-px overflow-hidden rounded-3xl border border-cloud bg-cloud md:grid-cols-4">
              {quickFacts.map(([k, v, note]) => (
                <div key={k} className="bg-white p-6">
                  <div className="text-xs font-semibold uppercase tracking-wider text-muted">{k}</div>
                  <div className="mt-1.5 text-xl font-bold">{v}</div>
                  <p className="mt-2 text-xs leading-relaxed text-muted">{note}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Visa types */}
        <section className="bg-paper">
          <div className="mx-auto max-w-7xl px-5 py-16 md:px-8">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-green-deep">Visa types</span>
            <h2 className="reveal mt-3 max-w-2xl text-[clamp(2rem,4.4vw,3.2rem)] font-semibold leading-[1.02] tracking-[-0.03em]">
              Which US visa <span className="accent">fits your trip?</span>
            </h2>
            <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {visaTypes.map((t) => (
                <div key={t.name} className="reveal rounded-3xl border border-cloud bg-white p-6">
                  <div className="text-3xl" aria-hidden="true">{t.icon}</div>
                  <h3 className="mt-4 text-lg font-bold">{t.name}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">{t.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Documents + interview prep */}
        <section className="bg-paper">
          <div className="mx-auto grid max-w-7xl gap-10 px-5 pb-16 md:grid-cols-[1.1fr_0.9fr] md:px-8">
            <div className="reveal">
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-green-deep">Checklist</span>
              <h2 className="mt-3 text-[clamp(1.8rem,3.6vw,2.6rem)] font-semibold leading-[1.05] tracking-[-0.03em]">
                Documents you’ll <span className="accent">need.</span>
              </h2>
              <ul className="mt-6 grid gap-2.5 sm:grid-cols-2">
                {documents.map((d) => (
                  <li key={d} className="flex items-start gap-2.5 rounded-2xl border border-cloud bg-white p-4 text-sm">
                    <span
                      aria-hidden="true"
                      className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-green/15 text-xs text-green-deep"
                    >
                      ✓
                    </span>
                    <span className="text-ink/80">{d}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-4 text-xs text-muted">
                Requirements shift case by case — your advisor confirms the final list before you submit.
              </p>
            </div>

            {/* Interview prep highlight */}
            <aside className="reveal">
              <div className="relative overflow-hidden rounded-[32px] bg-ink p-8 text-white md:sticky md:top-28">
                <div className="pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full bg-green/30 blur-3xl" />
                <span className="relative text-xs font-semibold uppercase tracking-[0.2em] text-green-light">
                  Interview prep
                </span>
                <h3 className="relative mt-3 text-2xl font-semibold leading-tight">
                  The interview is where US visas are <span className="accent text-green-light">won.</span>
                </h3>
                <p className="relative mt-3 text-sm text-white/60">
                  A few minutes with a consular officer decides everything. We make sure you sound confident, consistent and credible.
                </p>
                <ul className="relative mt-6 space-y-3">
                  {prepPoints.map((p) => (
                    <li key={p} className="flex items-start gap-3 text-sm text-white/80">
                      <span aria-hidden="true" className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-green-light" />
                      <span>{p}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  to="/contact"
                  className="relative mt-7 inline-flex rounded-pill bg-green px-6 py-3 text-sm font-semibold text-ink transition hover:bg-green-light focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green-light focus-visible:ring-offset-2 focus-visible:ring-offset-ink"
                >
                  Book interview coaching <span aria-hidden="true">→</span>
                </Link>
              </div>
            </aside>
          </div>
        </section>

        {/* Process steps */}
        <section className="bg-paper">
          <div className="mx-auto max-w-7xl px-5 py-16 md:px-8">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-green-deep">The process</span>
            <h2 className="reveal mt-3 max-w-2xl text-[clamp(2rem,4.4vw,3.2rem)] font-semibold leading-[1.02] tracking-[-0.03em]">
              Five steps, <span className="accent">one advisor.</span>
            </h2>
            <div className="mt-10 grid gap-4 md:grid-cols-5">
              {steps.map(([title, desc], i) => (
                <div key={title} className="reveal rounded-3xl border border-cloud bg-white p-6">
                  <span aria-hidden="true" className="grid h-9 w-9 place-items-center rounded-full bg-green text-sm font-bold text-ink">
                    {i + 1}
                  </span>
                  <h3 className="mt-4 text-base font-bold leading-snug">{title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">{desc}</p>
                </div>
              ))}
            </div>

            {/* Interactive Fee & Time Calculator Widget */}
            <div className="mt-16 max-w-3xl mx-auto rounded-3xl border border-cloud bg-[#fdfcfb] p-8 shadow-sm">
              <h3 className="text-xl font-bold text-ink">Interactive US Fee & Time Calculator</h3>
              <p className="text-xs text-muted mt-1">Estimate your B1/B2 application costs and timelines from the UAE.</p>
              
              <div className="mt-6 space-y-5">
                <div>
                  <label className="text-[10px] font-bold text-muted uppercase tracking-wider">Visa Type</label>
                  <div className="flex flex-wrap gap-2 mt-1.5">
                    {['Tourist', 'Business', 'B1/B2 Combined', 'Transit (C-1)'].map((k) => (
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
                    <span className="text-xs font-bold text-ink">Consulate Appointment Premium Booking Slot</span>
                    <span className="text-[10px] text-muted">Averages interview scheduling by 7-14 days</span>
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
              <h3 className="text-2xl font-bold text-ink">Explore the United States</h3>
              <p className="text-xs text-muted mt-1">Stunning vistas awaiting your American journey.</p>
              
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

        {/* Why Travsouk */}
        <section className="bg-paper">
          <div className="mx-auto max-w-7xl px-5 py-16 md:px-8">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-green-deep">Why Travsouk</span>
            <h2 className="reveal mt-3 max-w-2xl text-[clamp(2rem,4.4vw,3.2rem)] font-semibold leading-[1.02] tracking-[-0.03em]">
              Built for a <span className="accent">straight answer.</span>
            </h2>
            <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {why.map(([icon, title, desc]) => (
                <div key={title} className="reveal rounded-3xl border border-cloud bg-white p-6">
                  <div className="text-3xl" aria-hidden="true">{icon}</div>
                  <h3 className="mt-4 text-base font-bold leading-snug">{title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="bg-paper">
          <div className="mx-auto max-w-3xl px-5 py-16 md:px-8">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-green-deep">FAQ</span>
            <h2 className="reveal mt-3 text-[clamp(2rem,4.4vw,3.2rem)] font-semibold leading-[1.02] tracking-[-0.03em]">
              US visa <span className="accent">questions.</span>
            </h2>
            <div className="mt-8 space-y-3">
              {faqs.map((f) => (
                <details
                  key={f.q}
                  className="reveal group rounded-3xl border border-cloud bg-white p-6 [&_summary]:cursor-pointer"
                >
                  <summary className="flex items-center justify-between gap-4 rounded-xl font-semibold marker:content-[''] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ink focus-visible:ring-offset-2 focus-visible:ring-offset-white">
                    {f.q}
                    <span
                      aria-hidden="true"
                      className="grid h-7 w-7 shrink-0 place-items-center rounded-full bg-green/15 text-green-deep transition group-open:rotate-45"
                    >
                      +
                    </span>
                  </summary>
                  <p className="mt-3 text-sm leading-relaxed text-muted">{f.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>
      </div>

      <CtaBand title="Ready for the USA?" accent="Yalla, let’s go." />
    </Page>
  )
}
