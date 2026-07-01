import { PageHeader, CtaBand, Page } from '../components/PageShell'
import { BRAND } from '../data'

const roles = [
  { title: 'Visa Consultant', type: 'Full-time · Dubai', desc: 'Guide clients through applications end to end, from eligibility to collection.' },
  { title: 'Client Success Advisor', type: 'Full-time · Dubai', desc: 'Be the friendly voice on WhatsApp keeping every traveler informed.' },
  { title: 'Documentation Specialist', type: 'Full-time · Dubai', desc: 'Build clean, complete files that give clients the strongest possible case.' },
  { title: 'Growth Marketer', type: 'Full-time · Dubai', desc: 'Tell the Travsouk story and bring more travelers to the easy way.' },
]

export default function Careers() {
  return (
    <Page>
      <PageHeader
        eyebrow="Careers"
        title="Help travelers"
        accent="go further."
        sub="We’re a small, fast team in Dubai that genuinely cares about getting people where they want to go. Come build it with us."
      />

      <section className="bg-paper">
        <div className="mx-auto max-w-7xl px-5 pb-24 md:px-8">
          <div className="grid gap-4">
            {roles.map((r) => (
              <div
                key={r.title}
                className="flex flex-col gap-4 rounded-3xl border border-cloud bg-white p-7 md:flex-row md:items-center md:justify-between"
              >
                <div>
                  <h2 className="text-xl font-bold">{r.title}</h2>
                  <p className="mt-1 text-sm text-muted">{r.desc}</p>
                  <span className="mt-2 inline-block rounded-pill bg-paper px-3 py-1 text-xs font-semibold text-green-deep">
                    {r.type}
                  </span>
                </div>
                <a
                  href={`mailto:${BRAND.email}?subject=Application: ${encodeURIComponent(r.title)}`}
                  aria-label={`Apply for ${r.title}`}
                  className="shrink-0 rounded-pill bg-ink px-6 py-3 text-center text-sm font-semibold text-white transition hover:bg-green-deep focus:outline-none focus-visible:ring-2 focus-visible:ring-ink focus-visible:ring-offset-2 focus-visible:ring-offset-paper"
                >
                  Apply now <span aria-hidden="true">→</span>
                </a>
              </div>
            ))}
          </div>
          <p className="mt-8 text-center text-muted">
            Don’t see your role? Email us at{' '}
            <a
              href={`mailto:${BRAND.email}`}
              className="rounded font-semibold text-green-deep transition hover:text-ink focus:outline-none focus-visible:ring-2 focus-visible:ring-green focus-visible:ring-offset-2"
            >
              {BRAND.email}
            </a>{' '}
            — we’re always glad to meet good people.
          </p>
        </div>
      </section>

      <CtaBand title="Rather be a" accent="client?" />
    </Page>
  )
}
