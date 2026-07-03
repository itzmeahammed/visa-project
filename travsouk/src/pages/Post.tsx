import { Link, useParams } from 'react-router-dom'
import { motion } from 'framer-motion'
import { getPost, posts } from '../data/posts'
import { CtaBand, Page } from '../components/PageShell'
import { coverFor, readingTime } from '../lib/postCovers'
import { BRAND } from '../data'
import NotFound from './NotFound'

const ease = [0.22, 1, 0.36, 1] as const

export default function Post({ kind }: { kind: 'blog' | 'news' }) {
  const { slug } = useParams()
  const p = getPost(slug || '')
  if (!p) return <NotFound />

  const more = posts.filter((x) => x.kind === p.kind && x.slug !== p.slug).slice(0, 3)
  const cover = coverFor(p).replace('w=900', 'w=1800')

  return (
    <Page>
      {/* Cover hero */}
      <header className="relative overflow-hidden bg-ink text-white">
        <img
          src={cover}
          alt=""
          decoding="async"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0c0c0d] via-[#0c0c0d]/70 to-[#0c0c0d]/35" aria-hidden="true" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(199,152,44,0.25),transparent_55%)]" aria-hidden="true" />

        <div className="relative mx-auto max-w-4xl px-5 pt-40 pb-14 md:px-8 md:pt-52 md:pb-20">
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease }}
            className="flex flex-wrap items-center gap-2.5"
          >
            <span className="rounded-full bg-green px-3.5 py-1.5 text-[11px] font-bold uppercase tracking-wider text-ink">
              {p.tag}
            </span>
            <span className="rounded-full border border-white/25 bg-ink/40 backdrop-blur px-3.5 py-1.5 text-[11px] font-semibold text-white/80">
              {p.date}
            </span>
            <span className="rounded-full border border-white/25 bg-ink/40 backdrop-blur px-3.5 py-1.5 text-[11px] font-semibold text-white/80">
              {readingTime(p)} min read
            </span>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease, delay: 0.08 }}
            className="mt-5 max-w-3xl text-[clamp(2rem,4.6vw,3.6rem)] font-extrabold leading-[1.04] -tracking-[0.03em] drop-shadow-sm"
          >
            {p.title}
          </motion.h1>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.22 }}
            className="mt-6 flex items-center gap-3"
          >
            <span className="grid h-9 w-9 place-items-center rounded-full bg-gradient-to-b from-[#23201b] to-[#0d0d0e] ring-1 ring-green/50 text-green-light text-xs">
              ✦
            </span>
            <div className="text-xs">
              <div className="font-bold">Travsouk Advisory Team</div>
              <div className="text-white/55">Visa specialists · Dubai, UAE</div>
            </div>
          </motion.div>
        </div>
      </header>

      <article className="bg-paper relative overflow-hidden">
        <div className="pointer-events-none absolute -top-10 right-[-5%] h-[380px] w-[380px] rounded-full bg-[radial-gradient(circle,rgba(199,152,44,0.09),transparent_65%)]" aria-hidden="true" />

        <div className="relative mx-auto max-w-3xl px-5 py-12 md:px-8 md:py-16">
          <div className="space-y-6 text-lg leading-relaxed text-ink/85">
            {p.body.map((para, i) => (
              <motion.p
                key={i}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.5, ease }}
                className={
                  i === 0
                    ? 'first-letter:float-left first-letter:mr-3 first-letter:text-6xl first-letter:font-serif first-letter:italic first-letter:leading-[0.85] first-letter:text-green-deep'
                    : undefined
                }
              >
                {para}
              </motion.p>
            ))}
          </div>

          {/* Gold divider */}
          <div className="mt-12 flex items-center gap-3" aria-hidden="true">
            <span className="h-px flex-1 bg-gradient-to-r from-transparent via-cloud to-cloud" />
            <span className="text-green text-sm">✦</span>
            <span className="h-px flex-1 bg-gradient-to-l from-transparent via-cloud to-cloud" />
          </div>

          {/* Author / expert card */}
          <div className="mt-10 relative overflow-hidden rounded-[26px] border border-green/20 bg-white p-7 md:p-8 shadow-[0_20px_50px_-28px_rgba(199,152,44,0.5)]">
            <div className="pointer-events-none absolute -top-16 -right-16 h-44 w-44 rounded-full bg-green-glow blur-2xl" aria-hidden="true" />
            <div className="relative flex flex-col sm:flex-row sm:items-center gap-5 justify-between">
              <div>
                <span className="text-[10px] font-bold uppercase tracking-[0.24em] text-green-deep">
                  Have a question about your case?
                </span>
                <p className="mt-2 text-lg font-extrabold text-ink -tracking-[0.01em]">
                  Talk it through with a visa expert — free.
                </p>
                <p className="mt-1 text-sm text-muted">Written by the Travsouk advisory team. Replies in under a minute, 7 days a week.</p>
              </div>
              <div className="flex flex-wrap gap-3 shrink-0">
                <a
                  href={`https://wa.me/${BRAND.whatsapp.replace(/\D/g, '')}`}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-status px-6 py-3 text-sm font-bold text-white shadow-[0_10px_24px_-10px_rgba(22,196,106,0.7)] hover:-translate-y-0.5 transition-all duration-300"
                >
                  WhatsApp us
                </a>
                <Link
                  to="/eligibility"
                  className="inline-flex items-center gap-2 rounded-full bg-ink px-6 py-3 text-sm font-bold text-white ring-1 ring-green/30 hover:bg-black hover:-translate-y-0.5 transition-all duration-300"
                >
                  Check eligibility <span aria-hidden="true" className="text-green-light">✦</span>
                </Link>
              </div>
            </div>
          </div>

          <Link
            to={`/${kind}`}
            className="mt-9 inline-flex items-center gap-2 rounded-full border border-cloud bg-white px-5 py-2.5 font-semibold text-sm text-ink/70 transition hover:border-green/40 hover:text-ink focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green focus-visible:ring-offset-2 focus-visible:ring-offset-paper"
          >
            <span aria-hidden="true">←</span> Back to all {kind === 'blog' ? 'articles' : 'news'}
          </Link>
        </div>
      </article>

      {more.length > 0 && (
        <section className="bg-paper">
          <div className="mx-auto max-w-7xl px-5 pb-20 md:px-8">
            <div className="mb-8 flex items-center gap-3">
              <h3 className="text-2xl font-extrabold -tracking-[0.01em]">
                Keep <span className="accent font-normal text-green-deep">reading</span>
              </h3>
              <span className="h-px flex-1 bg-gradient-to-r from-cloud to-transparent" aria-hidden="true" />
            </div>
            <div className="grid gap-5 md:grid-cols-3">
              {more.map((m, i) => (
                <Link
                  key={m.slug}
                  to={`/${kind}/${m.slug}`}
                  className="group flex flex-col overflow-hidden rounded-3xl border border-cloud bg-white transition hover:-translate-y-1 hover:border-green/40 hover:shadow-[0_24px_50px_-24px_rgba(199,152,44,0.45)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green focus-visible:ring-offset-2 focus-visible:ring-offset-paper"
                >
                  <div className="relative h-36 overflow-hidden">
                    <img
                      src={coverFor(m, i + 1)}
                      alt=""
                      loading="lazy"
                      decoding="async"
                      className="absolute inset-0 h-full w-full object-cover transition-transform duration-1000 ease-out group-hover:scale-108"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-ink/50 to-transparent" aria-hidden="true" />
                    <span className="absolute bottom-3 left-4 rounded-full bg-white/85 backdrop-blur px-3 py-1 text-[10px] font-bold text-ink">
                      {m.tag}
                    </span>
                  </div>
                  <div className="flex flex-1 flex-col p-6">
                    <div className="mb-2 text-xs text-muted">{m.date}</div>
                    <h4 className="font-bold leading-snug flex-1">{m.title}</h4>
                    <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-green-deep">
                      Read <span aria-hidden="true" className="transition group-hover:translate-x-1">→</span>
                    </span>
                  </div>
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
