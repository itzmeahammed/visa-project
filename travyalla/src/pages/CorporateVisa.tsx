import { Link } from 'react-router-dom'
import { PageHeader, CtaBand, Page } from '../components/PageShell'
import { useReveal } from '../hooks/useReveal'

const painPoints = [
  {
    icon: '🧾',
    h: 'Scattered paperwork',
    p: 'Every traveler, every consulate, every checklist — landing in a different inbox. We pull it all into one managed workflow.',
  },
  {
    icon: '⏳',
    h: 'Trips slipping deadlines',
    p: 'A delayed appointment can cost a deal. We secure the earliest realistic slots and flag risks before they bite.',
  },
  {
    icon: '💸',
    h: 'Untraceable spend',
    p: 'Reimbursements, mixed receipts, no clear total. We replace it with one consolidated, audit-ready invoice.',
  },
  {
    icon: '🔁',
    h: 'Reinventing every file',
    p: 'Your team shouldn’t rebuild the same application from scratch each quarter. We keep profiles ready to reuse.',
  },
]

const features = [
  {
    h: 'Bulk processing',
    p: 'Submit one traveler or fifty in the same week. We run applications in parallel with a single live tracker for the whole batch.',
  },
  {
    h: 'Doorstep collection',
    p: 'A courier visits your office anywhere in the UAE to collect and return passports and documents — your staff never queue.',
  },
  {
    h: 'Dedicated account manager',
    p: 'One named contact who knows your company, your travel patterns and your people — reachable on WhatsApp, not a ticket queue.',
  },
  {
    h: 'Consolidated billing',
    p: 'Monthly statements, cost codes per department and clean VAT invoices that drop straight into your finance system.',
  },
]

const steps = [
  {
    n: '01',
    h: 'Set up your account',
    p: 'We onboard your company, agree turnaround targets and assign your dedicated manager — usually within a day.',
  },
  {
    n: '02',
    h: 'Add your travelers',
    p: 'Share a simple list. We build a reusable profile for each employee so future trips start half-finished.',
  },
  {
    n: '03',
    h: 'We handle the files',
    p: 'Document checks, forms, appointments and biometrics — managed end to end, with collection from your door.',
  },
  {
    n: '04',
    h: 'Track and report',
    p: 'Watch every application move in real time and close the month with one consolidated invoice.',
  },
]

const industries = [
  { icon: '🏗️', h: 'Construction & engineering', p: 'Rotating site crews and overseas client visits, mobilised on tight schedules.' },
  { icon: '💼', h: 'Professional services', p: 'Partners and consultants who fly to pitch, audit and deliver across borders.' },
  { icon: '🛢️', h: 'Energy & industrial', p: 'Specialist technicians deployed to projects on short, hard deadlines.' },
  { icon: '🛍️', h: 'Retail & trade', p: 'Buyers and reps attending fairs and supplier meetings season after season.' },
  { icon: '🎬', h: 'Events & production', p: 'Crews and talent moving fast for shoots, conferences and live shows.' },
  { icon: '🚀', h: 'Tech & startups', p: 'Founders and teams chasing demo days, investors and new markets.' },
]

const stats = [
  { value: '500+', label: 'Companies onboarded' },
  { value: '48h', label: 'Typical file turnaround' },
  { value: '1', label: 'Invoice per month' },
  { value: '7 days', label: 'Manager reachable a week' },
]

export default function CorporateVisa() {
  const ref = useReveal<HTMLDivElement>()

  return (
    <Page>
      <PageHeader
        eyebrow="Corporate visa services"
        title="Move your team across borders,"
        accent="zero admin."
        sub="Travsouk runs business and corporate visas for UAE companies at scale — bulk processing, doorstep collection and one dedicated manager who actually picks up. Yalla, let’s get your people moving."
      >
        <div className="mt-8 flex flex-wrap gap-3">
          <Link
            to="/contact"
            className="rounded-pill bg-ink px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-green-deep focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green focus-visible:ring-offset-2 focus-visible:ring-offset-paper"
          >
            Talk to our corporate team <span aria-hidden="true">→</span>
          </Link>
          <Link
            to="/services"
            className="rounded-pill border border-cloud bg-white px-6 py-3.5 text-sm font-semibold transition hover:border-ink focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green focus-visible:ring-offset-2 focus-visible:ring-offset-paper"
          >
            Browse all services
          </Link>
        </div>
      </PageHeader>

      <div ref={ref}>
        {/* Pain points */}
        <section className="bg-paper">
          <div className="mx-auto max-w-7xl px-5 pb-16 md:px-8">
            <div className="reveal max-w-2xl">
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-green-deep">
                The corporate travel headache
              </span>
              <h2 className="mt-3 text-[clamp(1.8rem,3.6vw,2.8rem)] font-semibold leading-tight tracking-[-0.03em]">
                Managing visas in-house quietly <span className="accent">drains your team.</span>
              </h2>
            </div>
            <div className="reveal mt-10 grid gap-px overflow-hidden rounded-3xl border border-cloud bg-cloud sm:grid-cols-2 lg:grid-cols-4">
              {painPoints.map((p) => (
                <div key={p.h} className="flex flex-col bg-white p-7">
                  <div className="text-2xl" aria-hidden="true">{p.icon}</div>
                  <h3 className="mt-4 text-lg font-bold">{p.h}</h3>
                  <p className="mt-2 text-sm text-muted">{p.p}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="bg-paper">
          <div className="mx-auto max-w-7xl px-5 pb-16 md:px-8">
            <div className="reveal max-w-2xl">
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-green-deep">
                What your account includes
              </span>
              <h2 className="mt-3 text-[clamp(1.8rem,3.6vw,2.8rem)] font-semibold leading-tight tracking-[-0.03em]">
                One partner, built for <span className="accent">business travel.</span>
              </h2>
            </div>
            <div className="reveal mt-10 grid gap-6 md:grid-cols-2">
              {features.map((f, i) => (
                <div key={f.h} className="rounded-3xl border border-cloud bg-white p-8">
                  <div className="flex items-start gap-5">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-green/15 text-sm font-bold text-green-deep">
                      {String(i + 1).padStart(2, '0')}
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold tracking-tight">{f.h}</h3>
                      <p className="mt-2 text-muted">{f.p}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* How it works */}
        <section className="bg-ink text-white">
          <div className="mx-auto max-w-7xl px-5 py-20 md:px-8 md:py-24">
            <div className="reveal max-w-2xl">
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-green-light">
                How it works
              </span>
              <h2 className="mt-3 text-[clamp(1.8rem,3.6vw,2.8rem)] font-semibold leading-tight tracking-[-0.03em]">
                From contract to collection, <span className="accent text-green-light">four steps.</span>
              </h2>
            </div>
            <div className="reveal mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {steps.map((s) => (
                <div key={s.n} className="rounded-3xl border border-white/10 bg-white/5 p-7">
                  <div className="text-3xl font-extrabold tracking-tight text-green-light">{s.n}</div>
                  <h3 className="mt-4 text-lg font-semibold">{s.h}</h3>
                  <p className="mt-2 text-sm text-white/60">{s.p}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Industries */}
        <section className="bg-paper">
          <div className="mx-auto max-w-7xl px-5 py-16 md:px-8">
            <div className="reveal max-w-2xl">
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-green-deep">
                Who we move
              </span>
              <h2 className="mt-3 text-[clamp(1.8rem,3.6vw,2.8rem)] font-semibold leading-tight tracking-[-0.03em]">
                Trusted across <span className="accent">every sector.</span>
              </h2>
            </div>
            <div className="reveal mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {industries.map((it) => (
                <div key={it.h} className="flex flex-col rounded-3xl border border-cloud bg-white p-7">
                  <div className="text-2xl" aria-hidden="true">{it.icon}</div>
                  <h3 className="mt-4 text-lg font-bold">{it.h}</h3>
                  <p className="mt-2 text-sm text-muted">{it.p}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className="bg-paper">
          <div className="mx-auto max-w-7xl px-5 pb-24 md:px-8">
            <div className="reveal grid grid-cols-2 gap-8 rounded-[32px] border border-cloud bg-white p-8 md:grid-cols-4 md:p-12">
              {stats.map((s) => (
                <div key={s.label}>
                  <div className="text-[clamp(2rem,4vw,3rem)] font-extrabold tracking-tight">{s.value}</div>
                  <div className="mt-1 text-sm text-muted">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>

      <CtaBand title="Talk to our" accent="corporate team." />
    </Page>
  )
}
