import { Link } from 'react-router-dom'
import { BRAND } from '../data'
import Logo from './Logo'

export function CtaBand() {
  return (
    <section className="bg-paper">
      <div className="mx-auto max-w-7xl px-5 pb-8 md:px-8">
        <div className="relative overflow-hidden rounded-[36px] bg-ink px-6 py-20 text-center text-white md:px-8 md:py-28">
          <div className="pointer-events-none absolute -bottom-32 -right-24 h-80 w-80 rounded-full bg-green/30 blur-3xl" />
          <span className="relative text-xs font-semibold uppercase tracking-[0.2em] text-green-light">
            Get started
          </span>
          <h2 className="relative mx-auto mt-4 max-w-3xl text-[clamp(2.2rem,5.5vw,4rem)] font-bold leading-[1.02] tracking-[-0.03em]">
            Visa assistance <span className="accent text-green-light">tailored for you.</span>
          </h2>
          <p className="relative mx-auto mt-5 max-w-md text-white/60">
            Book a free, honest consultation with a dedicated advisor — and we’ll
            map the fastest realistic route to wherever you’re headed.
          </p>
          <Link
            to="/contact"
            className="relative mt-8 inline-flex rounded-pill bg-green px-7 py-4 text-sm font-semibold text-ink transition hover:-translate-y-0.5 hover:bg-green-light focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green-light focus-visible:ring-offset-2 focus-visible:ring-offset-ink"
          >
            Book my free consultation →
          </Link>
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
