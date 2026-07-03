import { Link, useLocation, useParams } from 'react-router-dom'
import { getService } from '../data/services'
import { PageHeader, CtaBand, Page } from '../components/PageShell'
import NotFound from './NotFound'

export default function ServicePage({ slug: slugProp }: { slug?: string }) {
  const { slug: slugParam } = useParams()
  const { pathname } = useLocation()
  // Static routes like /tourist-visas carry no :slug param — fall back to the path itself.
  const slug = slugProp || slugParam || pathname.replace(/^\/|\/$/g, '')
  const s = getService(slug)
  if (!s) return <NotFound />

  return (
    <Page>
      <PageHeader eyebrow={s.eyebrow} title={s.title} sub={s.intro}>
        <Link
          to="/contact"
          className="mt-8 inline-flex rounded-pill bg-ink px-6 py-3.5 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-green-deep focus:outline-none focus-visible:ring-2 focus-visible:ring-green focus-visible:ring-offset-2 focus-visible:ring-offset-paper motion-reduce:transition-none motion-reduce:hover:translate-y-0"
        >
          Get started <span aria-hidden="true">→</span>
        </Link>
      </PageHeader>

      <section className="bg-paper">
        <div className="mx-auto max-w-7xl px-5 pb-16 md:px-8">
          <div className="grid gap-px overflow-hidden rounded-3xl border border-cloud bg-cloud md:grid-cols-3">
            {s.points.map((pt) => (
              <div key={pt.h} className="bg-white p-7">
                <h3 className="text-lg font-bold">{pt.h}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{pt.p}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-paper">
        <div className="mx-auto max-w-7xl px-5 pb-24 md:px-8">
          <h2 className="text-2xl font-bold">How it works</h2>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {s.steps.map((step, i) => (
              <div key={step} className="rounded-3xl border border-cloud bg-white p-6">
                <div className="font-serif text-3xl italic text-green-deep">0{i + 1}</div>
                <div className="mt-3 font-semibold">{step}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaBand />
    </Page>
  )
}
