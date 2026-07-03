import { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { PageHeader, CtaBand, Page } from '../components/PageShell'
import { blogPosts, newsPosts, Post } from '../data/posts'

const ease = [0.16, 1, 0.3, 1] as const

// motion-wrapped Link so filtered cards reveal reliably via whileInView
// (re-filtering swaps DOM nodes, which a one-shot IntersectionObserver hook
// would miss — leaving freshly-filtered cards stuck invisible).
const MotionLink = motion(Link)

import { coverFor, readingTime } from '../lib/postCovers'

export default function Articles({ kind }: { kind: 'blog' | 'news' }) {
  const posts = kind === 'blog' ? blogPosts : newsPosts

  const tags = useMemo(() => {
    const set = new Set<string>()
    posts.forEach((p) => set.add(p.tag))
    return ['All', ...Array.from(set)]
  }, [posts])

  const [active, setActive] = useState('All')

  const [featured, ...rest] = posts
  const filtered = active === 'All' ? rest : rest.filter((p) => p.tag === active)

  const copy =
    kind === 'blog'
      ? {
          eyebrow: 'Travsouk Journal',
          title: 'Visa guides that actually',
          accent: 'make sense.',
          sub: 'Clear, no-jargon walkthroughs from the advisors who file these applications every day — written for UAE residents who just want to go.',
        }
      : {
          eyebrow: 'Travsouk Newsroom',
          title: 'Rule changes, fresh — before',
          accent: 'they trip you up.',
          sub: 'Short, plain-English briefings on the visa and entry updates that affect travelers based in the UAE. We watch the fine print so you don’t have to.',
        }

  return (
    <Page>
      <PageHeader
        eyebrow={copy.eyebrow}
        title={copy.title}
        accent={copy.accent}
        sub={copy.sub}
      />

      {/* Featured post */}
      <section className="bg-paper">
        <div className="mx-auto max-w-7xl px-5 pt-6 md:px-8 md:pt-10">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease }}
          >
            <Link
              to={`/${kind}/${featured.slug}`}
              className="group grid overflow-hidden rounded-3xl border border-cloud bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green focus-visible:ring-offset-2 focus-visible:ring-offset-paper md:grid-cols-2"
            >
              <div className="relative min-h-[240px] overflow-hidden p-8 md:min-h-[380px]">
                <img
                  src={coverFor(featured, 0).replace('w=900', 'w=1400')}
                  alt=""
                  decoding="async"
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1400ms] ease-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-ink/15 to-transparent" aria-hidden="true" />
                <span className="relative inline-flex items-center gap-2 rounded-pill bg-ink/80 backdrop-blur px-3.5 py-1.5 text-xs font-semibold text-white">
                  <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-green-light" />
                  {kind === 'blog' ? 'Featured guide' : 'Top story'}
                </span>
              </div>
              <div className="flex flex-col justify-center p-8 md:p-12">
                <div className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.18em] text-green-deep">
                  <span>{featured.tag}</span>
                  <span className="text-cloud">•</span>
                  <span className="text-muted">{featured.date}</span>
                </div>
                <h2 className="mt-4 text-[clamp(1.6rem,3vw,2.4rem)] font-semibold leading-[1.05] tracking-[-0.02em]">
                  {featured.title}
                </h2>
                <p className="mt-4 text-muted">{featured.excerpt}</p>
                <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-ink transition group-hover:text-green-deep">
                  Read the full {kind === 'blog' ? 'guide' : 'briefing'}
                  <span aria-hidden="true" className="transition group-hover:translate-x-1">→</span>
                </span>
              </div>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Tag filter */}
      <section className="bg-paper">
        <div className="mx-auto max-w-7xl px-5 pt-12 md:px-8 md:pt-16">
          <div className="flex flex-wrap items-center gap-2.5">
            {tags.map((tag) => {
              const on = tag === active
              return (
                <button
                  key={tag}
                  type="button"
                  aria-pressed={on}
                  onClick={() => setActive(tag)}
                  className={`inline-flex min-h-[40px] items-center rounded-pill px-4 py-2 text-sm font-semibold transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green focus-visible:ring-offset-2 focus-visible:ring-offset-paper ${
                    on
                      ? 'bg-ink text-white'
                      : 'border border-cloud bg-white text-muted hover:border-green hover:text-ink'
                  }`}
                >
                  {tag}
                </button>
              )
            })}
          </div>
        </div>
      </section>

      {/* Grid */}
      <section className="bg-paper">
        <div className="mx-auto max-w-7xl px-5 py-12 md:px-8 md:py-16">
          {filtered.length === 0 ? (
            <p className="rounded-3xl border border-cloud bg-white p-10 text-center text-muted">
              No posts under “{active}” just yet — check back soon, or browse{' '}
              <button
                type="button"
                onClick={() => setActive('All')}
                className="rounded font-semibold text-green-deep underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green focus-visible:ring-offset-2 focus-visible:ring-offset-paper"
              >
                everything
              </button>
              .
            </p>
          ) : (
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {filtered.map((post, i) => (
                <MotionLink
                  key={post.slug}
                  to={`/${kind}/${post.slug}`}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '0px 0px -10% 0px' }}
                  transition={{ duration: 0.5, ease, delay: Math.min(i, 5) * 0.05 }}
                  className="group flex flex-col overflow-hidden rounded-3xl border border-cloud bg-white transition hover:-translate-y-1 hover:border-green focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green focus-visible:ring-offset-2 focus-visible:ring-offset-paper"
                >
                  <div className="relative flex h-44 items-end overflow-hidden p-5">
                    <img
                      src={coverFor(post, i + 1)}
                      alt=""
                      loading="lazy"
                      decoding="async"
                      className="absolute inset-0 h-full w-full object-cover transition-transform duration-1000 ease-out group-hover:scale-108"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-ink/60 via-ink/10 to-transparent" aria-hidden="true" />
                    <span className="relative rounded-pill bg-white/85 px-3 py-1 text-xs font-semibold text-ink backdrop-blur">
                      {post.tag}
                    </span>
                  </div>
                  <div className="flex flex-1 flex-col p-6">
                    <h3 className="text-lg font-semibold leading-snug tracking-[-0.01em]">
                      {post.title}
                    </h3>
                    <p className="mt-3 flex-1 text-sm text-muted">
                      {post.excerpt}
                    </p>
                    <div className="mt-5 flex items-center justify-between text-xs text-muted">
                      <span>{post.date}</span>
                      <span className="font-semibold text-green-deep">
                        {readingTime(post)} min read
                      </span>
                    </div>
                  </div>
                </MotionLink>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Cross-link strip */}
      <section className="bg-paper">
        <div className="mx-auto max-w-7xl px-5 pb-16 md:px-8">
          <div className="flex flex-col items-start justify-between gap-5 rounded-3xl border border-cloud bg-white p-8 md:flex-row md:items-center">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-green-deep">
                Keep reading
              </p>
              <p className="mt-2 text-lg font-semibold tracking-[-0.01em]">
                {kind === 'blog'
                  ? 'Want the latest rule changes instead?'
                  : 'Prefer a step-by-step how-to?'}
              </p>
            </div>
            <Link
              to={kind === 'blog' ? '/news' : '/blog'}
              className="inline-flex shrink-0 items-center rounded-pill bg-ink px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-green-deep focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green focus-visible:ring-offset-2 focus-visible:ring-offset-paper"
            >
              {kind === 'blog' ? 'Browse the newsroom →' : 'Browse the guides →'}
            </Link>
          </div>
        </div>
      </section>

      <CtaBand
        title={kind === 'blog' ? 'Read it, now' : 'Stay ahead,'}
        accent={kind === 'blog' ? 'let’s file it.' : 'let’s plan it.'}
      />
    </Page>
  )
}
