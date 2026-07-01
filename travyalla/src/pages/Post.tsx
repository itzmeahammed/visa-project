import { Link, useParams } from 'react-router-dom'
import { getPost, posts } from '../data/posts'
import { PageHeader, CtaBand, Page } from '../components/PageShell'
import NotFound from './NotFound'

export default function Post({ kind }: { kind: 'blog' | 'news' }) {
  const { slug } = useParams()
  const p = getPost(slug || '')
  if (!p) return <NotFound />

  const more = posts.filter((x) => x.kind === p.kind && x.slug !== p.slug).slice(0, 3)

  return (
    <Page>
      <PageHeader eyebrow={`${p.tag} · ${p.date}`} title={p.title} />

      <article className="bg-paper">
        <div className="mx-auto max-w-3xl px-5 pb-16 md:px-8">
          <div className="prose-travsouk space-y-5 text-lg leading-relaxed text-ink/85">
            {p.body.map((para, i) => (
              <p key={i}>{para}</p>
            ))}
          </div>

          <div className="mt-10 rounded-3xl bg-white p-6 ring-1 ring-cloud">
            <p className="text-sm text-muted">Written by the Travsouk advisory team.</p>
            <Link
              to="/contact"
              className="mt-3 inline-flex items-center rounded-pill bg-ink px-5 py-3 text-sm font-semibold text-white transition hover:bg-green-deep focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green focus-visible:ring-offset-2 focus-visible:ring-offset-paper"
            >
              Talk to a visa expert <span aria-hidden="true">→</span>
            </Link>
          </div>

          <Link
            to={`/${kind}`}
            className="mt-8 inline-flex rounded font-semibold text-sm text-green-deep focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green focus-visible:ring-offset-2 focus-visible:ring-offset-paper"
          >
            <span aria-hidden="true">←</span>&nbsp;Back to all {kind === 'blog' ? 'articles' : 'news'}
          </Link>
        </div>
      </article>

      {more.length > 0 && (
        <section className="bg-paper">
          <div className="mx-auto max-w-7xl px-5 pb-20 md:px-8">
            <h3 className="mb-6 text-lg font-bold">Keep reading</h3>
            <div className="grid gap-5 md:grid-cols-3">
              {more.map((m) => (
                <Link
                  key={m.slug}
                  to={`/${kind}/${m.slug}`}
                  className="group flex flex-col rounded-3xl border border-cloud bg-white p-6 transition hover:-translate-y-1 hover:border-green hover:shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green focus-visible:ring-offset-2 focus-visible:ring-offset-paper"
                >
                  <div className="mb-6 text-xs text-muted">{m.date}</div>
                  <h4 className="font-bold leading-snug">{m.title}</h4>
                  <span className="mt-3 inline-flex items-center gap-1 text-sm font-semibold text-green-deep">
                    Read <span aria-hidden="true" className="transition group-hover:translate-x-1">→</span>
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <CtaBand />
    </Page>
  )
}
