import React from 'react'
import { Link } from 'react-router-dom'
import { BRAND } from '../data'
import Avatar from './Avatars'

const chips = [
  '1M+ Travelers Checked',
  '25k+ Visas Secured',
  '75+ Destinations',
  'Fast & Flexible',
  'Safe & Secure',
  '4.9/5 Rating',
]

function ChipMarquee() {
  const row = [...chips, ...chips, ...chips]
  return (
    <div
      style={{
        maskImage: 'linear-gradient(to right, transparent, black 15%, black 85%, transparent)',
        WebkitMaskImage: 'linear-gradient(to right, transparent, black 15%, black 85%, transparent)',
      }}
      className="max-w-[520px] overflow-hidden py-1 relative z-10"
    >
      <div className="flex gap-3 w-max animate-marquee">
        {row.map((c, i) => (
          <div
            key={i}
            className="px-4 py-1.5 -tracking-[0.02em] bg-white rounded-full text-[13px] font-semibold text-ink/80 whitespace-nowrap border border-cloud shadow-[0_1px_3px_rgba(15,15,16,0.04)] flex items-center gap-1.5"
          >
            <span className="text-green text-[11px]">✦</span>
            {c}
          </div>
        ))}
      </div>
    </div>
  )
}

/** Dashed flight path arcing behind the hero, with destination markers. */
function FlightPath() {
  return (
    <svg
      className="absolute inset-0 h-full w-full pointer-events-none"
      viewBox="0 0 1440 900"
      fill="none"
      preserveAspectRatio="xMidYMid slice"
      aria-hidden="true"
    >
      <path
        className="flight-path"
        d="M-40 780 C 320 560, 620 660, 820 420 S 1260 140, 1500 220"
        stroke="#c7982c"
        strokeOpacity="0.28"
        strokeWidth="1.6"
      />
      {/* Destination markers along the route */}
      {[
        { x: 350, y: 610 },
        { x: 820, y: 420 },
        { x: 1210, y: 205 },
      ].map((p, i) => (
        <g key={i}>
          <circle cx={p.x} cy={p.y} r="4" fill="#c7982c" fillOpacity="0.5" />
          <circle cx={p.x} cy={p.y} r="9" fill="none" stroke="#c7982c" strokeOpacity="0.25" strokeWidth="1" />
        </g>
      ))}
      {/* Plane cruising along the route */}
      <g fill="#c7982c" fillOpacity="0.8">
        <path d="M14.5 21.7a.5.5 0 0 0 .94-.02l6.5-19a.5.5 0 0 0-.64-.64l-19 6.5a.5.5 0 0 0-.02.94l7.93 3.18a2 2 0 0 1 1.11 1.11z" transform="rotate(40) scale(1.25) translate(-11 -11)" />
        <animateMotion
          dur="18s"
          repeatCount="indefinite"
          rotate="auto"
          keyPoints="0;1"
          keyTimes="0;1"
          calcMode="linear"
          path="M-40 780 C 320 560, 620 660, 820 420 S 1260 140, 1500 220"
        />
      </g>
    </svg>
  )
}

/** Circular gold "visa approved" ink stamp that slams onto the ticket. */
function VisaStamp() {
  return (
    <div className="stamp-in absolute -top-8 -right-2 sm:-right-5 z-30 h-[104px] w-[104px] pointer-events-none select-none mix-blend-multiply">
      <svg viewBox="0 0 120 120" className="h-full w-full drop-shadow-sm" aria-hidden="true">
        <defs>
          <path id="stamp-arc-top" d="M60 60 m-40 0 a40 40 0 1 1 80 0" />
          <path id="stamp-arc-bottom" d="M60 60 m-40 0 a40 40 0 1 0 80 0" />
        </defs>
        <circle cx="60" cy="60" r="55" fill="none" stroke="#a9791a" strokeWidth="2.5" strokeOpacity="0.85" />
        <circle cx="60" cy="60" r="49" fill="none" stroke="#a9791a" strokeWidth="1" strokeOpacity="0.7" />
        <circle cx="60" cy="60" r="30" fill="none" stroke="#a9791a" strokeWidth="1.2" strokeOpacity="0.75" />
        <text fill="#a9791a" fillOpacity="0.9" fontSize="10.5" fontWeight="800" letterSpacing="2.6" fontFamily="Inter, sans-serif">
          <textPath href="#stamp-arc-top" startOffset="50%" textAnchor="middle">
            TRAVSOUK · DUBAI
          </textPath>
        </text>
        <text fill="#a9791a" fillOpacity="0.9" fontSize="9" fontWeight="700" letterSpacing="3" fontFamily="Inter, sans-serif">
          <textPath href="#stamp-arc-bottom" startOffset="50%" textAnchor="middle">
            ★ VISA SERVICES ★
          </textPath>
        </text>
        <text x="60" y="57" textAnchor="middle" fill="#a9791a" fontSize="11.5" fontWeight="900" letterSpacing="1.2" fontFamily="Inter, sans-serif">
          APPROVED
        </text>
        <text x="60" y="70" textAnchor="middle" fill="#a9791a" fillOpacity="0.85" fontSize="7" fontWeight="700" letterSpacing="1.6" fontFamily="Inter, sans-serif">
          75+ COUNTRIES
        </text>
      </svg>
    </div>
  )
}

/** Faux barcode strip for the boarding-pass footer. */
function Barcode() {
  const bars = [3, 1, 2, 1, 4, 1, 1, 3, 1, 2, 4, 1, 2, 1, 3, 1, 1, 2, 4, 1, 3, 1, 2, 3, 1, 1, 4, 2, 1, 3]
  return (
    <div className="flex items-stretch h-8 gap-[2px]" aria-hidden="true">
      {bars.map((w, i) => (
        <span key={i} className="bg-ink/80 rounded-[1px]" style={{ width: `${w}px` }} />
      ))}
    </div>
  )
}

const inputClass =
  'w-full bg-paper border border-cloud rounded-xl px-4 py-3 text-sm text-ink outline-none focus:border-green focus:ring-4 focus:ring-green/10 transition-all placeholder:text-ink/35'

export default function Hero() {
  return (
    <section className="relative bg-paper overflow-hidden pt-28 md:pt-36 pb-16 lg:pt-0 lg:pb-0 min-h-[auto] lg:min-h-[105vh] flex items-center justify-center">
      {/* Layered ambient background */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute -top-40 right-[-10%] h-[640px] w-[640px] rounded-full bg-[radial-gradient(circle,rgba(199,152,44,0.14),transparent_65%)]" />
        <div className="absolute bottom-[-20%] left-[-12%] h-[520px] w-[520px] rounded-full bg-[radial-gradient(circle,rgba(199,152,44,0.09),transparent_65%)]" />
        <FlightPath />
      </div>

      <div className="w-full px-4 md:px-6 relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 max-w-7xl items-center">
        {/* Left column — headline & brand copy */}
        <div className="relative z-30 lg:col-span-7">
          <div className="relative pl-2 text-left space-y-6">
            {/* Eyebrow */}
            <div className="hero-rise inline-flex items-center gap-2.5 pl-1.5 pr-4 py-1.5 rounded-full bg-white border border-cloud shadow-[0_1px_4px_rgba(15,15,16,0.05)]" style={{ '--rise-delay': '0.05s' } as React.CSSProperties}>
              <span className="grid h-6 w-6 place-items-center rounded-full bg-gradient-to-b from-[#23201b] to-[#0d0d0e] text-[10px] text-green-light">✦</span>
              <span className="text-[11px] font-bold text-ink/70 tracking-[0.18em] uppercase">
                Dubai&rsquo;s Premium Visa Concierge
              </span>
            </div>

            {/* Headline */}
            <h1
              className="hero-rise text-[2.9rem] sm:text-6xl lg:text-[4.6rem] font-extrabold leading-[1.04] -tracking-[0.045em] text-ink"
              style={{ '--rise-delay': '0.15s' } as React.CSSProperties}
            >
              Consider your
              <br />
              visa <span className="accent gold-shimmer font-normal text-[1.12em] tracking-[-0.03em]">problems</span>
              <br />
              halfway solved.
            </h1>

            {/* Subheadline */}
            <p
              className="hero-rise text-muted text-lg font-medium leading-relaxed max-w-[520px]"
              style={{ '--rise-delay': '0.28s' } as React.CSSProperties}
            >
              Go anywhere you dream of while we handle the paperwork. We book the embassy slots, verify files, and manage the queues.
            </p>

            {/* Value points */}
            <div className="hero-rise space-y-3 pt-1" style={{ '--rise-delay': '0.38s' } as React.CSSProperties}>
              {[
                'Direct embassy queue bypass & booking',
                'Doorstep document pickup anywhere in Dubai',
                '100% complete & verified application files',
              ].map((text, idx) => (
                <div key={idx} className="flex items-center gap-3 text-[15px] font-semibold text-ink/85">
                  <span className="flex h-5 w-5 items-center justify-center rounded-full bg-green-glow border border-green/25 text-green-deep shrink-0 text-[10px]">
                    ✓
                  </span>
                  <span>{text}</span>
                </div>
              ))}
            </div>

            {/* CTAs */}
            <div className="hero-rise flex flex-col sm:flex-row items-center gap-4 pt-4 w-full" style={{ '--rise-delay': '0.5s' } as React.CSSProperties}>
              <Link
                className="group/button relative inline-flex items-center overflow-hidden px-8 py-4 font-bold transition-all duration-300 ease-in-out hover:shadow-xl hover:shadow-green/25 hover:-translate-y-0.5 cursor-pointer justify-center bg-ink text-white rounded-full text-base w-full sm:w-auto min-w-[210px] ring-1 ring-green/40"
                to="/eligibility"
              >
                <span className="relative z-10 flex items-center gap-2 text-base font-semibold">
                  Check Visa Eligibility
                  <svg className="w-4 h-4 transition-transform group-hover/button:translate-x-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M5 12h14" />
                    <path d="m12 5 7 7-7 7" />
                  </svg>
                </span>
                <div className="absolute inset-0 flex h-full w-full justify-center [transform:skew(-13deg)_translateX(-100%)] group-hover/button:duration-1000 group-hover/button:[transform:skew(-13deg)_translateX(100%)]">
                  <div className="relative h-full w-10 bg-green-light/40"></div>
                </div>
              </Link>

              <a
                className="group flex items-center justify-start gap-2.5 bg-white rounded-full py-2 px-2 pr-6 shadow-[0_1px_4px_rgba(15,15,16,0.06)] border border-cloud hover:shadow-md hover:border-green/30 transition-all w-full sm:w-auto text-left"
                href={`https://wa.me/${BRAND.whatsapp.replace(/\D/g, '')}?text=Hi%20TRAVSOUK%2C%20could%20you%20tell%20me%20more%20about%20your%20services%3F`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="relative w-10 h-10 rounded-full overflow-hidden bg-gray-200 shrink-0 ring-2 ring-green/20">
                  <img
                    alt="Visa expert"
                    className="absolute inset-0 h-full w-full object-cover"
                    src="/user-avatar.webp"
                  />
                </div>
                <div className="flex flex-col">
                  <span className="text-sm font-bold leading-tight text-ink">Chat with a Visa Expert</span>
                  <div className="flex items-center gap-1.5 mt-0.5">
                    <span className="w-2 h-2 rounded-full bg-status animate-pulse"></span>
                    <span className="text-xs font-semibold text-muted">Available now</span>
                  </div>
                </div>
              </a>
            </div>

            {/* Chips marquee */}
            <div className="hero-rise pt-6" style={{ '--rise-delay': '0.62s' } as React.CSSProperties}>
              <ChipMarquee />
            </div>
          </div>
        </div>

        {/* Right column — boarding-pass application ticket */}
        <div className="relative z-40 w-full flex justify-center lg:justify-end lg:col-span-5 mt-8 lg:mt-0">
          <div
            id="apply"
            className="hero-rise relative w-full max-w-md mx-auto lg:ml-auto lg:mr-0"
            style={{ '--rise-delay': '0.35s' } as React.CSSProperties}
          >
            <div className="float-soft relative">
            <VisaStamp />

            {/* Ticket body */}
            <div className="relative rounded-[26px] bg-white shadow-[0_24px_60px_-18px_rgba(15,15,16,0.25),0_2px_8px_rgba(15,15,16,0.05)] border border-cloud overflow-hidden">
              {/* Ticket header strip */}
              <div className="relative bg-gradient-to-b from-[#23201b] to-[#0d0d0e] px-7 pt-5 pb-6 text-white">
                <div className="flex items-center justify-between text-[9px] font-bold tracking-[0.28em] uppercase text-white/50">
                  <span>Travsouk Concierge</span>
                  <span className="text-green-light">Visa Application</span>
                </div>
                <div className="mt-3 flex items-end justify-between">
                  <div>
                    <div className="text-[10px] font-semibold tracking-[0.15em] text-white/45 uppercase">From</div>
                    <div className="text-2xl font-black tracking-tight">DXB</div>
                  </div>
                  <div className="flex-1 relative mx-4 mb-2.5">
                    <div className="border-t border-dashed border-white/30" />
                    <svg
                      className="absolute left-1/2 -translate-x-1/2 -top-[9px] w-[18px] h-[18px] text-green-light"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path d="M21.4 14.25 15 10.75V4.5a1.5 1.5 0 0 0-3 0v6.25l-6.4 3.5a1 1 0 0 0-.6.92v1.08l7-2v4.25l-2 1.5v1.5l3.5-1 3.5 1V19l-2-1.5v-4.25l7 2v-1.08a1 1 0 0 0-.6-.92Z" />
                    </svg>
                  </div>
                  <div className="text-right">
                    <div className="text-[10px] font-semibold tracking-[0.15em] text-white/45 uppercase">To</div>
                    <div className="text-2xl font-black tracking-tight text-green-light">ANY</div>
                  </div>
                </div>
              </div>

              {/* Perforation notches */}
              <div className="relative">
                <span className="absolute -left-3.5 -top-3.5 h-7 w-7 rounded-full bg-paper border border-cloud z-10" />
                <span className="absolute -right-3.5 -top-3.5 h-7 w-7 rounded-full bg-paper border border-cloud z-10" />
                <div className="absolute inset-x-6 -top-px border-t-2 border-dashed border-cloud" />
              </div>

              <div className="px-7 pt-6 pb-7 space-y-5">
                <div className="text-center space-y-0.5">
                  <h3 className="text-[1.35rem] font-extrabold text-ink -tracking-[0.02em]">Where do you want to go?</h3>
                  <p className="text-muted text-sm">Start your travel visa application</p>
                </div>

                <form className="flex flex-col" onSubmit={(e) => e.preventDefault()}>
                  <div className="space-y-3.5">
                    <div className="space-y-1.5">
                      <label className="text-[10px] uppercase tracking-[0.14em] font-bold text-ink/60 pl-1">Name</label>
                      <input autoComplete="name" required type="text" name="name" placeholder="Your name" className={inputClass} />
                    </div>
                    <div className="space-y-1.5">
                      <label className="text-[10px] uppercase tracking-[0.14em] font-bold text-ink/60 pl-1">Email</label>
                      <input autoComplete="email" required type="email" name="email" placeholder="your@email.com" className={inputClass} />
                    </div>
                    <div className="space-y-1.5">
                      <label className="text-[10px] uppercase tracking-[0.14em] font-bold text-ink/60 pl-1">Phone number</label>
                      <input autoComplete="tel" required type="tel" name="phone" placeholder="050 123 4567" className={inputClass} />
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="group/button relative mt-6 inline-flex items-center justify-center overflow-hidden rounded-full bg-ink px-8 py-3.5 text-base font-bold text-white transition-all duration-300 ease-in-out hover:shadow-lg hover:shadow-green/25 cursor-pointer ring-1 ring-green/40"
                  >
                    <span className="relative z-10 flex items-center gap-2">
                      Start Application
                      <svg
                        className="w-5 h-5 transition-transform group-hover/button:translate-x-1"
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                      >
                        <path d="M5 12h14" />
                        <path d="m12 5 7 7-7 7" />
                      </svg>
                    </span>
                    <div className="absolute inset-0 flex h-full w-full justify-center [transform:skew(-13deg)_translateX(-100%)] group-hover/button:duration-1000 group-hover/button:[transform:skew(-13deg)_translateX(100%)]">
                      <div className="relative h-full w-10 bg-green-light/40"></div>
                    </div>
                  </button>
                </form>

                <p className="text-[10px] text-ink/50 text-center leading-normal px-2">
                  By applying, you agree to our{' '}
                  <a className="underline hover:text-ink transition-colors" href="/terms-conditions/">terms of service</a>{' '}
                  and{' '}
                  <a className="underline hover:text-ink transition-colors" href="/privacy-policy/">privacy policy</a>.
                </p>

                {/* Ticket stub: barcode + reviews */}
                <div className="border-t border-dashed border-cloud pt-4 flex items-center justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <div className="flex -space-x-2.5 flex-shrink-0">
                      {[4, 5, 6, 7].map((index) => (
                        <Avatar key={index} index={index} className="h-8 w-8 rounded-full border-2 border-white shadow-sm" />
                      ))}
                    </div>
                    <div className="flex flex-col">
                      <div className="flex items-center gap-0.5">
                        {[...Array(5)].map((_, i) => (
                          <svg key={i} className="w-3 h-3 fill-green text-green" viewBox="0 0 24 24" aria-hidden="true">
                            <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z" />
                          </svg>
                        ))}
                        <span className="text-ink font-bold text-xs ml-1">4.9</span>
                      </div>
                      <p className="text-[11px] text-ink/60 font-medium mt-0.5">1500+ Google reviews</p>
                    </div>
                  </div>
                  <Barcode />
                </div>
              </div>
            </div>
            </div>
          </div>
        </div>
      </div>

      {/* Top & bottom gradient masks to fade sections smoothly */}
      <div className="absolute top-0 left-0 w-full h-24 md:h-28 bg-gradient-to-b from-paper via-paper/60 to-transparent z-20 pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-full h-24 md:h-28 bg-gradient-to-t from-paper via-paper/60 to-transparent z-20 pointer-events-none"></div>
    </section>
  )
}
