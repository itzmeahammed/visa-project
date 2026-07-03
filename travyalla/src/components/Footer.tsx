import { Link } from 'react-router-dom'
import { BRAND } from '../data'
import Logo from './Logo'

export function CtaBand() {
  return (
    <section className="bg-paper">
      <div className="mx-auto max-w-7xl px-5 pb-8 md:px-8">
        <div className="relative overflow-hidden rounded-[36px] bg-gradient-to-b from-[#1a1814] to-[#0c0c0d] px-6 py-20 text-center text-white md:px-8 md:py-28">
          {/* Ambient glows */}
          <div className="pointer-events-none absolute -bottom-40 -right-28 h-96 w-96 rounded-full bg-green/25 blur-3xl" aria-hidden="true" />
          <div className="pointer-events-none absolute -top-40 -left-28 h-96 w-96 rounded-full bg-green/10 blur-3xl" aria-hidden="true" />

          {/* Souk arch line-work, mirrored */}
          <svg
            className="pointer-events-none absolute left-0 top-1/2 -translate-y-1/2 h-[120%] opacity-[0.07] hidden md:block"
            viewBox="0 0 300 600"
            fill="none"
            stroke="#dfb046"
            strokeWidth="1.5"
            aria-hidden="true"
          >
            <path d="M40 600 L40 260 C40 160 95 100 150 70 C205 100 260 160 260 260 L260 600" />
            <path d="M85 600 L85 285 C85 205 120 158 150 135 C180 158 215 205 215 285 L215 600" strokeDasharray="3 7" />
          </svg>
          <svg
            className="pointer-events-none absolute right-0 top-1/2 -translate-y-1/2 h-[120%] opacity-[0.07] hidden md:block -scale-x-100"
            viewBox="0 0 300 600"
            fill="none"
            stroke="#dfb046"
            strokeWidth="1.5"
            aria-hidden="true"
          >
            <path d="M40 600 L40 260 C40 160 95 100 150 70 C205 100 260 160 260 260 L260 600" />
            <path d="M85 600 L85 285 C85 205 120 158 150 135 C180 158 215 205 215 285 L215 600" strokeDasharray="3 7" />
          </svg>

          <span className="relative inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.28em] text-green-light">
            <span className="h-px w-6 bg-green-light/50" aria-hidden="true" />
            Get started
            <span className="h-px w-6 bg-green-light/50" aria-hidden="true" />
          </span>
          <h2 className="relative mx-auto mt-4 max-w-3xl text-[clamp(2.2rem,5.5vw,4rem)] font-bold leading-[1.02] tracking-[-0.03em]">
            Visa assistance <span className="accent font-normal text-green-light">tailored for you.</span>
          </h2>
          <p className="relative mx-auto mt-5 max-w-md text-white/60">
            Book a free, honest consultation with a dedicated advisor — and we&rsquo;ll
            map the fastest realistic route to wherever you&rsquo;re headed.
          </p>

          <div className="relative mt-9 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/contact"
              className="group inline-flex items-center gap-2 rounded-pill bg-green px-8 py-4 text-sm font-bold text-ink transition-all duration-300 hover:-translate-y-0.5 hover:bg-green-light hover:shadow-[0_16px_40px_-12px_rgba(199,152,44,0.6)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green-light focus-visible:ring-offset-2 focus-visible:ring-offset-ink w-full sm:w-auto justify-center"
            >
              Book my free consultation
              <span aria-hidden="true" className="transition-transform duration-300 group-hover:translate-x-1">→</span>
            </Link>
            <Link
              to="/eligibility"
              className="inline-flex items-center gap-2 rounded-pill border border-white/20 bg-white/[0.06] px-8 py-4 text-sm font-bold text-white transition-all duration-300 hover:-translate-y-0.5 hover:border-green-light/50 hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green-light focus-visible:ring-offset-2 focus-visible:ring-offset-ink w-full sm:w-auto justify-center"
            >
              Check my eligibility
              <span aria-hidden="true" className="text-green-light">✦</span>
            </Link>
          </div>

          <div className="relative mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-[11px] font-semibold text-white/40 uppercase tracking-wider">
            <span>4.9 ★ on Google</span>
            <span className="h-1 w-1 rounded-full bg-white/25" aria-hidden="true" />
            <span>25k+ visas secured</span>
            <span className="h-1 w-1 rounded-full bg-white/25" aria-hidden="true" />
            <span>Replies in under a minute</span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default function Footer() {
  return (
    <footer className="bg-paper">
      <div className="mx-auto max-w-7xl px-5 pb-28 pt-8 md:px-8">
        <div className="grid gap-10 rounded-[32px] border border-cloud bg-white p-8 md:grid-cols-[1.2fr_1fr_1fr] md:p-12">
          {/* Brand + contact */}
          <div>
            <Link
              to="/"
              aria-label={`${BRAND.name} home`}
              className="inline-flex items-center gap-2.5 rounded-pill focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green focus-visible:ring-offset-2"
            >
              <Logo />
            </Link>
            <p className="mt-4 max-w-xs text-sm text-muted">
              Premium visa assistance in Dubai for tourist, business and Schengen
              visas. {BRAND.tagline}
            </p>
            <div className="mt-6 flex flex-col items-start gap-1.5 text-sm">
              <a
                href={`tel:${BRAND.phone.replace(/\s/g, '')}`}
                className="rounded font-semibold transition hover:text-green-deep focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green focus-visible:ring-offset-2"
              >
                {BRAND.phone}
              </a>
              <a
                href={`mailto:${BRAND.email}`}
                className="rounded text-muted transition hover:text-green-deep focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green focus-visible:ring-offset-2"
              >
                {BRAND.email}
              </a>
              <p className="text-muted">{BRAND.address}</p>
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-[0.2em] text-muted">Company</h4>
            <ul className="mt-4 space-y-2.5 text-sm">
              {[
                ['Destinations', '/country'],
                ['Services', '/services'],
                ['About us', '/about'],
                ['Blog', '/blog'],
                ['News', '/news'],
                ['Careers', '/careers'],
                ['Contact', '/contact'],
              ].map(([l, to]) => (
                <li key={l}>
                  <Link
                    to={to}
                    className="inline-block rounded text-ink/70 transition hover:text-green-deep focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green focus-visible:ring-offset-2"
                  >
                    {l}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact card */}
          <div className="rounded-3xl border border-cloud bg-paper p-6">
            <h4 className="text-xs font-semibold uppercase tracking-[0.2em] text-muted">Contact us</h4>
            <p className="mt-3 text-sm text-muted">
              Available 7 days a week. Send a message and start your journey today.
            </p>
            <a
              href={`https://wa.me/${BRAND.whatsapp.replace(/\D/g, '')}`}
              target="_blank"
              rel="noreferrer"
              className="mt-4 inline-flex items-center gap-2 rounded-pill bg-green px-5 py-3 text-sm font-semibold text-ink transition hover:bg-green-light focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green-deep focus-visible:ring-offset-2"
            >
              <span aria-hidden="true">✆</span> WhatsApp us
            </a>
          </div>
        </div>

        <div className="mt-6 flex flex-col items-center justify-between gap-2 text-xs text-muted md:flex-row">
          <span>© 2026 {BRAND.name}. All rights reserved · Dubai, UAE</span>
          <div className="flex gap-5">
            <Link
              to="/privacy-policy"
              className="rounded transition hover:text-ink focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green focus-visible:ring-offset-2"
            >
              Privacy Policy
            </Link>
            <Link
              to="/terms-conditions"
              className="rounded transition hover:text-ink focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green focus-visible:ring-offset-2"
            >
              Terms &amp; Conditions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
