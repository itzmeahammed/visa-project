import { Link } from 'react-router-dom'
import { services } from '../data/services'
import { PageHeader, CtaBand, Page } from '../components/PageShell'

const extra = [
  { h: 'Doorstep visa service', p: 'We collect and return documents at your home or office, anywhere in the UAE.' },
  { h: 'Family & group visas', p: 'Reunite or travel together with coordinated, multi-applicant files.' },
  { h: 'Refusal recovery', p: 'Refused before? We rebuild the file and tackle the exact reason head-on.' },
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

      <section className="bg-paper">
        <div className="mx-auto max-w-7xl px-5 pb-16 md:px-8">
          <div className="grid gap-5 md:grid-cols-2">
            {services.map((s) => (
              <Link
                key={s.slug}
                to={`/${s.slug}`}
                className="group flex flex-col rounded-3xl border border-cloud bg-white p-8 transition hover:-translate-y-1 hover:shadow-xl focus:outline-none focus-visible:ring-2 focus-visible:ring-green focus-visible:ring-offset-2 focus-visible:ring-offset-paper motion-reduce:transition-none motion-reduce:hover:translate-y-0"
              >
                <span className="text-xs font-semibold uppercase tracking-[0.2em] text-green-deep">
                  {s.eyebrow}
                </span>
                <h3 className="mt-3 text-2xl font-bold">{s.label}</h3>
                <p className="mt-2 flex-1 text-muted">{s.intro}</p>
                <span className="mt-5 text-sm font-semibold text-green-deep">
                  Explore{' '}
                  <span className="inline-block transition group-hover:translate-x-1 motion-reduce:transition-none" aria-hidden="true">
                    →
                  </span>
                </span>
              </Link>
            ))}
          </div>

          <div className="mt-5 grid gap-px overflow-hidden rounded-3xl border border-cloud bg-cloud md:grid-cols-3">
            {extra.map((e) => (
              <div key={e.h} className="bg-white p-7">
                <h3 className="text-lg font-bold">{e.h}</h3>
                <p className="mt-2 text-sm text-muted">{e.p}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaBand />
    </Page>
  )
}
