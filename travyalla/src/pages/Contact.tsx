import { FormEvent, ReactNode, useState } from 'react'
import { PageHeader, Page } from '../components/PageShell'
import { useReveal } from '../hooks/useReveal'
import { BRAND } from '../data'
import { popularCountries } from '../data/countries'

const waNumber = BRAND.whatsapp.replace(/[^0-9]/g, '')
const telNumber = BRAND.phone.replace(/\s/g, '')

const channels = [
  {
    icon: '💬',
    label: 'WhatsApp',
    value: BRAND.whatsapp,
    note: 'Replies in minutes, 7 days a week.',
    href: `https://wa.me/${waNumber}`,
    cta: 'Open chat',
  },
  {
    icon: '📞',
    label: 'Call us',
    value: BRAND.phone,
    note: 'Prefer to talk it through? Pick up the phone.',
    href: `tel:${telNumber}`,
    cta: 'Call now',
  },
  {
    icon: '✉️',
    label: 'Email',
    value: BRAND.email,
    note: 'Send documents or detailed questions any time.',
    href: `mailto:${BRAND.email}`,
    cta: 'Write to us',
  },
]

const cities = ['Dubai', 'Abu Dhabi', 'Sharjah', 'London', 'Mumbai', 'Manila', 'Cairo', 'Lagos']

const inputClass =
  'w-full rounded-2xl border border-cloud bg-paper px-4 py-3 text-sm outline-none transition placeholder:text-muted focus:border-ink focus:bg-white focus-visible:ring-2 focus-visible:ring-ink/15'

function Field({
  label,
  htmlFor,
  children,
}: {
  label: string
  htmlFor: string
  children: ReactNode
}) {
  return (
    <label htmlFor={htmlFor} className="block">
      <span className="mb-1.5 block text-xs font-semibold uppercase tracking-[0.16em] text-muted">
        {label}
      </span>
      {children}
    </label>
  )
}

export default function Contact() {
  const ref = useReveal<HTMLDivElement>()
  const [sent, setSent] = useState(false)

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setSent(true)
  }

  return (
    <Page>
      <PageHeader
        eyebrow="Contact Travsouk"
        title="Let’s chart"
        accent="your route."
        sub="Tell us where you’re headed and when. A dedicated advisor will map the fastest realistic path — and you’ll hear back the same day. Yalla, let’s go."
      />

      <section className="bg-paper">
        <div ref={ref} className="mx-auto max-w-7xl px-5 pb-20 md:px-8">
          <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr]">
            {/* Form card */}
            <div className="reveal rounded-3xl border border-cloud bg-white p-7 md:p-10">
              {sent ? (
                <div className="flex min-h-[28rem] flex-col items-center justify-center text-center">
                  <div
                    aria-hidden="true"
                    className="flex h-16 w-16 items-center justify-center rounded-full bg-green/15 text-3xl"
                  >
                    ✓
                  </div>
                  <h2 className="mt-6 text-[clamp(1.6rem,3vw,2.2rem)] font-semibold tracking-[-0.02em]">
                    You’re on our radar.
                  </h2>
                  <p className="mt-3 max-w-sm text-muted">
                    Thanks — your request just landed with our team. An advisor will
                    reach out shortly to talk through your trip and the documents
                    you’ll need.
                  </p>
                  <div className="mt-7 flex flex-wrap items-center justify-center gap-3">
                    <a
                      href={`https://wa.me/${waNumber}`}
                      className="rounded-pill bg-ink px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-green-deep focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ink focus-visible:ring-offset-2"
                    >
                      Chat now on WhatsApp
                    </a>
                    <button
                      type="button"
                      onClick={() => setSent(false)}
                      className="rounded-pill border border-cloud bg-white px-6 py-3.5 text-sm font-semibold transition hover:border-ink focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ink focus-visible:ring-offset-2"
                    >
                      Send another
                    </button>
                  </div>
                </div>
              ) : (
                <>
                  <h2 className="text-[clamp(1.6rem,3vw,2.2rem)] font-semibold tracking-[-0.02em]">
                    Start your <span className="accent">application.</span>
                  </h2>
                  <p className="mt-2 text-sm text-muted">
                    No commitment — just the first step. We’ll reply with a clear,
                    honest plan.
                  </p>

                  <form onSubmit={handleSubmit} className="mt-7 space-y-5">
                    <div className="grid gap-5 sm:grid-cols-2">
                      <Field label="Full name" htmlFor="name">
                        <input
                          id="name"
                          name="name"
                          required
                          placeholder="Your name"
                          className={inputClass}
                        />
                      </Field>
                      <Field label="Phone / WhatsApp" htmlFor="phone">
                        <input
                          id="phone"
                          name="phone"
                          type="tel"
                          required
                          placeholder="+971 …"
                          className={inputClass}
                        />
                      </Field>
                    </div>

                    <div className="grid gap-5 sm:grid-cols-2">
                      <Field label="Email" htmlFor="email">
                        <input
                          id="email"
                          name="email"
                          type="email"
                          required
                          placeholder="you@email.com"
                          className={inputClass}
                        />
                      </Field>
                      <Field label="Destination" htmlFor="destination">
                        <select
                          id="destination"
                          name="destination"
                          defaultValue=""
                          required
                          className={inputClass}
                        >
                          <option value="" disabled>
                            Where to?
                          </option>
                          {popularCountries.map((c) => (
                            <option key={c.slug} value={c.name}>
                              {c.flag} {c.name}
                            </option>
                          ))}
                          <option value="Other">Somewhere else</option>
                        </select>
                      </Field>
                    </div>

                    <Field label="Tell us about your trip" htmlFor="message">
                      <textarea
                        id="message"
                        name="message"
                        rows={4}
                        placeholder="Travel dates, who’s travelling, any past refusals — anything that helps."
                        className={`${inputClass} resize-none`}
                      />
                    </Field>

                    <button
                      type="submit"
                      className="w-full rounded-pill bg-ink px-6 py-4 text-sm font-semibold text-white transition hover:bg-green-deep focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ink focus-visible:ring-offset-2"
                    >
                      Send my request <span aria-hidden="true">→</span>
                    </button>
                    <p className="text-center text-xs text-muted">
                      By submitting you agree to be contacted about your enquiry. We
                      never share your details.
                    </p>
                  </form>
                </>
              )}
            </div>

            {/* Info column */}
            <div className="space-y-4">
              {channels.map((ch) => (
                <a
                  key={ch.label}
                  href={ch.href}
                  className="reveal group flex items-start gap-4 rounded-3xl border border-cloud bg-white p-6 transition hover:border-ink focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ink focus-visible:ring-offset-2"
                >
                  <span
                    aria-hidden="true"
                    className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-paper text-xl"
                  >
                    {ch.icon}
                  </span>
                  <span className="min-w-0">
                    <span className="text-xs font-semibold uppercase tracking-[0.2em] text-green-deep">
                      {ch.label}
                    </span>
                    <span className="mt-1 block truncate text-lg font-semibold">
                      {ch.value}
                    </span>
                    <span className="mt-1 block text-sm text-muted">{ch.note}</span>
                    <span className="mt-2 inline-block text-sm font-semibold text-ink transition group-hover:text-green-deep">
                      {ch.cta} <span aria-hidden="true">→</span>
                    </span>
                  </span>
                </a>
              ))}

              <div className="reveal grid grid-cols-1 gap-px overflow-hidden rounded-3xl border border-cloud bg-cloud sm:grid-cols-2">
                <div className="bg-white p-6">
                  <span className="text-xs font-semibold uppercase tracking-[0.2em] text-green-deep">
                    Visit us
                  </span>
                  <p className="mt-2 text-sm font-semibold">{BRAND.address}</p>
                  <p className="mt-1 text-sm text-muted">Walk-ins welcome by appointment.</p>
                </div>
                <div className="bg-white p-6">
                  <span className="text-xs font-semibold uppercase tracking-[0.2em] text-green-deep">
                    Open hours
                  </span>
                  <p className="mt-2 text-sm font-semibold">Sat – Thu, 9am – 8pm</p>
                  <p className="mt-1 text-sm text-muted">Friday on WhatsApp.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Map-ish placeholder */}
          <div className="reveal mt-8 overflow-hidden rounded-3xl border border-cloud bg-ink">
            <div className="relative flex min-h-[18rem] items-center justify-center px-6 py-16 text-center">
              <div
                className="pointer-events-none absolute inset-0 opacity-[0.18]"
                style={{
                  backgroundImage:
                    'linear-gradient(#e0a82e 1px, transparent 1px), linear-gradient(90deg, #e0a82e 1px, transparent 1px)',
                  backgroundSize: '46px 46px',
                }}
              />
              <div className="pointer-events-none absolute -left-20 top-1/2 h-72 w-72 -translate-y-1/2 rounded-full bg-green/25 blur-3xl" />
              <div className="relative">
                <span
                  aria-hidden="true"
                  className="inline-flex h-14 w-14 animate-pulse items-center justify-center rounded-full bg-green text-2xl text-ink"
                >
                  📍
                </span>
                <p className="mt-4 text-xl font-semibold text-white">
                  Find us in the heart of {BRAND.address}
                </p>
                <p className="mx-auto mt-2 max-w-sm text-sm text-white/60">
                  A short walk from Burj Khalifa. Free parking for clients — just let
                  your advisor know you’re on the way.
                </p>
                <a
                  href="https://maps.google.com/?q=Downtown+Dubai"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 inline-flex rounded-pill bg-green px-6 py-3.5 text-sm font-semibold text-ink transition hover:bg-green-light focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green focus-visible:ring-offset-2 focus-visible:ring-offset-ink"
                >
                  Open in Maps <span aria-hidden="true">→</span>
                </a>
              </div>
            </div>
          </div>

          {/* Global locations strip */}
          <div className="reveal mt-16 text-center">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-green-deep">
              Wherever you are
            </span>
            <h2 className="mx-auto mt-3 max-w-2xl text-[clamp(1.6rem,3.4vw,2.6rem)] font-semibold leading-tight tracking-[-0.03em]">
              One team, <span className="accent">many time zones.</span>
            </h2>
            <p className="mx-auto mt-3 max-w-md text-muted">
              Born in Dubai, helping travellers reach the world from wherever they
              call home.
            </p>
            <div className="mt-7 flex flex-wrap justify-center gap-3">
              {cities.map((city) => (
                <span
                  key={city}
                  className="rounded-pill border border-cloud bg-white px-5 py-2.5 text-sm font-semibold"
                >
                  {city}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>
    </Page>
  )
}
