import React, { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useReveal } from '../hooks/useReveal'
import { features, stats, reviews, testimonials } from '../data'
import { blogPosts } from '../data/posts'
import { motion, AnimatePresence } from 'framer-motion'
import Avatar from './Avatars'

gsap.registerPlugin(ScrollTrigger)

const mediaLogos = [
  'Gulf News',
  'Khaleej Times',
  'The National',
  'Time Out',
  'Arabian Business',
  'Gulf Business',
]

export function Media() {
  return (
    <section className="py-5 bg-[#fdfcfb] border-y border-cloud/40">
      <div className="max-w-7xl mx-auto px-5 md:px-8 flex flex-col lg:flex-row items-center justify-between gap-6 lg:gap-12">
        <div className="text-center lg:text-left shrink-0">
          <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-muted block mb-0.5">Featured &amp; Trusted By</span>
          <h3 className="text-xs font-semibold text-ink/40">Leading publications &amp; media</h3>
        </div>
        <div className="flex flex-wrap items-center justify-center lg:justify-end gap-x-8 gap-y-4 opacity-50 hover:opacity-80 transition-opacity duration-300">
          <span className="text-base font-serif italic font-bold text-ink whitespace-nowrap tracking-tight">Gulf News</span>
          <span className="text-sm font-sans font-black tracking-[-0.05em] uppercase text-ink whitespace-nowrap">Khaleej Times</span>
          <span className="text-base font-serif font-semibold text-ink whitespace-nowrap">The National</span>
          <span className="text-base font-sans font-extrabold uppercase text-ink whitespace-nowrap tracking-tighter">Time Out</span>
          <span className="text-sm font-sans font-bold text-ink whitespace-nowrap uppercase tracking-widest">Arabian Business</span>
          <span className="text-base font-serif italic text-ink whitespace-nowrap font-medium">Gulf Business</span>
        </div>
      </div>
    </section>
  )
}


export function Features() {
  const ref = useReveal<HTMLDivElement>()
  return (
    <section id="why" className="py-14 bg-[#f0f0f0] relative overflow-hidden">
      <div ref={ref} className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="reveal inline-block px-4 py-1 text-xs font-semibold uppercase tracking-wider bg-white rounded-full text-black shadow-sm mb-3">
            All Inclusive Visa Service
          </span>
          <h2 className="reveal text-3xl sm:text-4xl md:text-6xl font-semibold tracking-tight text-gray-900 leading-tight">
            What sets us apart from <br />
            other visa services <span className="italic font-serif font-semibold text-black">Dubai, UAE</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f) => (
            <div
              key={f.title}
              className="reveal bg-white rounded-3xl p-8 shadow-sm border border-black/5 hover:shadow-md transition-all group hover:-translate-y-1"
            >
              <span
                aria-hidden="true"
                className="grid h-12 w-12 place-items-center rounded-2xl bg-[#f0f0f0] text-2xl text-green transition-transform duration-300 group-hover:scale-110"
              >
                {f.icon}
              </span>
              <h3 className="mt-5 text-xl font-bold text-black">{f.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-gray-500">{f.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function Counter({ value, suffix }: { value: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null)
  useEffect(() => {
    const el = ref.current
    if (!el) return

    const finalText = abbreviate(value) + suffix
    const reduce =
      typeof window !== 'undefined' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches

    if (reduce) {
      el.textContent = finalText
      return
    }

    const obj = { n: 0 }
    const st = ScrollTrigger.create({
      trigger: el,
      start: 'top 85%',
      once: true,
      onEnter: () => {
        gsap.to(obj, {
          n: value,
          duration: 1.6,
          ease: 'power3.out',
          onUpdate: () => {
            el.textContent = obj.n < 1 ? '0' : abbreviate(obj.n) + suffix
          },
          onComplete: () => {
            el.textContent = finalText
          },
        })
      },
    })
    return () => st.kill()
  }, [value, suffix])
  return (
    <span ref={ref} className="tabular-nums">
      0{suffix}
    </span>
  )
}

function abbreviate(n: number) {
  if (n >= 1_000_000) return (n / 1_000_000).toFixed(0) + 'M'
  if (n >= 1000) return Math.round(n / 1000) + 'K'
  return Math.floor(n).toString()
}

export function TrackRecord() {
  const ref = useReveal<HTMLDivElement>()
  return (
    <section className="py-14 bg-[#f0f0f0] relative overflow-hidden">
      <div ref={ref} className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16">
        <div className="rounded-[32px] border border-black/5 bg-white p-8 md:p-14 shadow-sm">
          <span className="reveal text-xs font-semibold uppercase tracking-wider text-green">
            Our Track Record
          </span>
          <h2 className="reveal mt-3 max-w-xl text-3xl md:text-5xl font-bold leading-tight tracking-tight text-black">
            Visa assistance <br />
            you can <span className="italic font-serif font-semibold">count on.</span>
          </h2>
          <p className="reveal mt-4 max-w-md text-gray-500">
            We have helped thousands of travelers reach their destinations with zero hassle.
          </p>
          <div className="mt-12 grid grid-cols-2 gap-8 md:grid-cols-4">
            {stats.map((s) => (
              <div key={s.label} className="reveal">
                <div className="text-4xl md:text-5xl font-extrabold tracking-tight text-black">
                  <Counter value={s.value} suffix={s.suffix} />
                </div>
                <div className="mt-1.5 text-xs md:text-sm font-semibold uppercase tracking-wider text-gray-400">
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export function Premium() {
  const ref = useReveal<HTMLDivElement>()
  const perks = [
    'Priority appointments Assistance',
    'Flight and hotel bookings itinerary assistance',
    'Interview guidance and mock sessions',
    'Document printing and delivery anywhere in the UAE',
    'A dedicated advisor on WhatsApp, 7 days a week',
  ]
  return (
    <section className="jsx-e5108f32319b5658 py-14 bg-[#f0f0f0] mx-auto overflow-hidden relative">
      <div ref={ref} className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16">
        <div className="grid items-center gap-10 rounded-[32px] bg-black p-8 text-white md:grid-cols-2 md:p-14 shadow-xl">
          <div>
            <span className="reveal text-xs font-semibold uppercase tracking-wider text-green">
              Premium Visa Service
            </span>
            <h2 className="reveal mt-3 text-3xl md:text-5xl font-bold leading-tight tracking-tight">
              Get your visa <br />
              the <span className="italic font-serif font-semibold text-green">Premium Way</span>
            </h2>
            <p className="reveal mt-4 max-w-md text-gray-400 leading-relaxed text-sm">
              Experience premium visa services with fast processing, expert guidance, and more than just visa support.
            </p>
            <a
              href="#apply"
              className="reveal mt-7 inline-flex items-center gap-2 rounded-full bg-green hover:bg-green-light px-6 py-3.5 text-sm font-semibold text-black transition hover:scale-102 focus-visible:outline-none"
            >
              Book Premium Service <span aria-hidden="true">→</span>
            </a>
          </div>
          <ul className="grid gap-3">
            {perks.map((p) => (
              <li
                key={p}
                className="reveal flex items-start gap-3 rounded-2xl border border-white/10 bg-white/[0.04] p-4 hover:bg-white/[0.06] transition"
              >
                <span
                  aria-hidden="true"
                  className="mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-full bg-green text-xs font-bold text-black"
                >
                  ✓
                </span>
                <span className="text-sm text-gray-300">{p}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}

export function Reviews() {
  const ref = useReveal<HTMLDivElement>()
  return (
    <section id="reviews" className="py-14 bg-[#f0f0f0] relative overflow-hidden">
      <div ref={ref} className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16">
        <span className="reveal text-xs font-semibold uppercase tracking-wider text-green">
          Reviews
        </span>
        <h2 className="reveal mt-3 text-3xl md:text-5xl font-bold leading-tight tracking-tight text-black">
          Trusted by <span className="italic font-serif font-semibold">frequent travelers.</span>
        </h2>
        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {reviews.map((r) => (
            <figure
              key={r.name}
              className="reveal flex h-full flex-col rounded-3xl border border-black/5 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:border-green/20 hover:shadow-md"
            >
              <div className="flex items-center gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    xmlns="http://www.w3.org/2000/svg"
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="#327800"
                    stroke="#327800"
                    className="w-3.5 h-3.5"
                  >
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                  </svg>
                ))}
              </div>
              <blockquote className="mt-4 flex-1 text-sm leading-relaxed text-gray-600 italic">
                “{r.body}”
              </blockquote>
              <figcaption className="mt-5 border-t border-black/5 pt-4">
                <div className="font-bold text-black">{r.name}</div>
                <div className="text-xs text-gray-400 font-semibold uppercase tracking-wider mt-0.5">
                  {r.role}
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}

export function Testimonials() {
  return (
    <section className="jsx-a2b09d1c275c9abf py-24 bg-black relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16">
        <span className="text-xs font-semibold uppercase tracking-wider text-green">
          Testimonials
        </span>
        <h2 className="mt-3 text-3xl md:text-5xl font-bold leading-tight tracking-tight text-white">
          See what our <span className="italic font-serif font-semibold text-green">happy clients say.</span>
        </h2>
        <p className="mt-4 max-w-md text-gray-400">
          Real stories from travelers who trusted us with their visa journey.
        </p>
        <ul
          tabIndex={0}
          role="group"
          aria-label="Client testimonials, scroll horizontally to see more"
          className="mt-12 flex snap-x snap-mandatory list-none gap-5 overflow-x-auto scroll-px-1 px-1 pb-4 [scrollbar-width:none] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green focus-visible:ring-offset-2 focus-visible:ring-offset-black [&::-webkit-scrollbar]:hidden"
        >
          {testimonials.map((t, i) => (
            <li
              key={i}
              className="flex w-[80vw] min-w-[260px] max-w-[320px] shrink-0 snap-start flex-col justify-between rounded-3xl border border-white/10 bg-white/[0.04] p-6 transition hover:border-white/20 hover:bg-white/[0.07] sm:w-[300px]"
            >
              <span aria-hidden="true" className="text-4xl font-serif text-green font-bold leading-none">
                “
              </span>
              <p className="mt-2 text-lg font-semibold leading-snug text-white">{t.quote}</p>
              <p className="mt-6 text-xs uppercase tracking-wider font-semibold text-gray-500">
                {t.who}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

export function Doorstep() {
  const ref = useReveal<HTMLDivElement>()
  const services = [
    { icon: '📅', title: 'Appointment Booking', desc: 'Secure premium submission slots quickly' },
    { icon: '✈️', title: 'Flight Reservation', desc: 'Flight itineraries approved for visa applications' },
    { icon: '📝', title: 'Covering Letter', desc: 'Bespoke letter drafts aligned with embassy guidelines' },
    { icon: '✏️', title: 'Form Filling', desc: '100% error-free embassy application entry' },
    { icon: '🏨', title: 'Hotel Reservation', desc: 'Verifiable accommodation vouchers' },
    { icon: '🚚', title: 'Pickup & Delivery', desc: 'We collect and deliver your passport at your doorstep' },
  ]
  return (
    <section className="py-14 bg-[#f0f0f0] relative overflow-hidden">
      <div ref={ref} className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <div>
            <span className="reveal text-xs font-semibold uppercase tracking-wider text-green">
              Doorstep Visa Service
            </span>
            <h2 className="reveal mt-3 text-3xl md:text-5xl font-bold leading-tight tracking-tight text-black">
              Visa assistance at your <br />
              <span className="italic font-serif font-semibold">office door step.</span>
            </h2>
            <p className="reveal mt-4 max-w-md text-gray-500 leading-relaxed">
              We simplify the process by bringing the visa application right to you. Focus on your business while we handle the paperwork. From file pick-up to submission, we handle it all.
            </p>
          </div>
          <div className="reveal grid grid-cols-1 sm:grid-cols-2 gap-4">
            {services.map((s) => (
              <div
                key={s.title}
                className="rounded-3xl border border-black/5 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:border-green/20 hover:shadow-md"
              >
                <span
                  aria-hidden="true"
                  className="grid h-10 w-10 place-items-center rounded-2xl bg-[#f0f0f0] text-xl"
                >
                  {s.icon}
                </span>
                <div className="mt-4 font-bold text-black text-base">{s.title}</div>
                <div className="mt-1 text-sm text-gray-400">{s.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export function Articles() {
  const ref = useReveal<HTMLDivElement>()
  return (
    <section id="articles" className="py-14 bg-[#f0f0f0] relative overflow-hidden">
      <div ref={ref} className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16">
        <div className="mb-12 flex items-end justify-between gap-4">
          <div>
            <span className="reveal text-xs font-semibold uppercase tracking-wider text-green">
              Latest Updates
            </span>
            <h2 className="reveal mt-3 text-3xl md:text-5xl font-bold leading-tight tracking-tight text-black">
              Read our latest <span className="italic font-serif font-semibold">articles.</span>
            </h2>
          </div>
          <Link
            to="/blog"
            className="reveal hidden shrink-0 rounded-full border border-black px-6 py-2.5 text-sm font-semibold transition hover:bg-black hover:text-white focus-visible:outline-none sm:inline-flex"
          >
            View all Articles
          </Link>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {blogPosts.slice(0, 3).map((a) => (
            <Link
              key={a.slug}
              to={`/blog/${a.slug}`}
              className="reveal group flex flex-col justify-between rounded-3xl border border-black/5 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:border-green/20 hover:shadow-md min-h-[220px]"
            >
              <div>
                <div className="mb-4 flex items-center gap-2 text-xs">
                  <span className="rounded-full bg-[#f0f0f0] px-3 py-1 font-semibold text-green">
                    {a.tag}
                  </span>
                  <span className="text-gray-400">{a.date}</span>
                </div>
                <h3 className="text-lg font-bold leading-snug text-black group-hover:text-green transition-colors">
                  {a.title}
                </h3>
              </div>
              <span className="mt-6 text-sm font-bold text-green flex items-center gap-1">
                Read more{' '}
                <span aria-hidden="true" className="inline-block transition group-hover:translate-x-1">
                  →
                </span>
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

const successStories = [
  { name: 'Sarah M.', flag: '🇫🇷', visa: 'Schengen Visa', quote: 'Approved in 3 days! Outstanding service.' },
  { name: 'Vikram S.', flag: '🇬🇧', visa: 'UK Business', quote: 'Managed my express biometrics slot in Dubai. Super fast!' },
  { name: 'Chloe L.', flag: '🇯🇵', visa: 'Japan Tourist', quote: 'Got my Tokyo visa without booking queues myself.' },
  { name: 'Elena R.', flag: '🇪🇸', visa: 'Spain Tourist', quote: 'Doorstep document collection was so convenient. 10/10!' },
  { name: 'Marcus G.', flag: '🇺🇸', visa: 'US tourist', quote: '10-year US visa approved. Excellent interview prep!' },
  { name: 'Aisha Y.', flag: '🇮🇹', visa: 'Italy Tourist', quote: 'Found an urgent slot when none were available online.' },
  { name: 'Liam W.', flag: '🇨🇦', visa: 'Canada Visa', quote: 'Hassle-free application from my office. Highly recommended.' },
  { name: 'Yuki T.', flag: '🇩🇪', visa: 'Germany Tourist', quote: 'Very professional team. Document checklist was perfect.' },
  { name: 'Zain B.', flag: '🇸🇬', visa: 'Singapore Visa', quote: 'Express submission done in 24 hours. Truly premium.' },
  { name: 'Sofia A.', flag: '🇬🇷', visa: 'Greece Tourist', quote: 'Amazing WhatsApp support even during weekends.' },
]

const recentApprovals = [
  { flag: '🇫🇷', country: 'France', time: '2h ago', status: 'Approved' },
  { flag: '🇯🇵', country: 'Japan', time: '4h ago', status: 'Approved' },
  { flag: '🇬🇧', country: 'United Kingdom', time: '8h ago', status: 'Approved' },
  { flag: '🇪🇸', country: 'Spain', time: '12h ago', status: 'Approved' },
  { flag: '🇺🇸', country: 'United States', time: '1d ago', status: 'Approved' },
  { flag: '🇨🇦', country: 'Canada', time: '1d ago', status: 'Approved' },
]

export function TravelRingSection() {
  const [radius, setRadius] = useState(120)
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null)
  const [tickerIdx, setTickerIdx] = useState(0)

  useEffect(() => {
    const updateRadius = () => {
      const w = window.innerWidth
      if (w >= 1024) {
        setRadius(300)
      } else if (w >= 768) {
        setRadius(220)
      } else if (w >= 640) {
        setRadius(160)
      } else {
        setRadius(120)
      }
    }
    updateRadius()
    window.addEventListener('resize', updateRadius)
    return () => window.removeEventListener('resize', updateRadius)
  }, [])

  useEffect(() => {
    const timer = setInterval(() => {
      setTickerIdx((prev) => (prev + 1) % recentApprovals.length)
    }, 3500)
    return () => clearInterval(timer)
  }, [])

  const isPaused = hoveredIdx !== null

  return (
    <section className="jsx-4d30f23aae47e249 py-36 md:py-48 bg-[#fdfcfb] overflow-hidden relative min-h-[780px] flex items-center justify-center border-t border-black/5">
      {/* Central luminous glow backdrop */}
      <div className="absolute w-[350px] h-[350px] bg-green/5 rounded-full blur-[80px] pointer-events-none z-0" />

      {/* Dynamic rotating wireframe globe in background */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0 overflow-hidden opacity-30">
        <svg viewBox="0 0 100 100" className="w-[300px] h-[300px] sm:w-[400px] sm:h-[400px] md:w-[500px] md:h-[500px] text-green/10 animate-spin-slow [animation-duration:180s]" fill="none" stroke="currentColor" strokeWidth="0.5">
          <circle cx="50" cy="50" r="48" />
          <circle cx="50" cy="50" r="38" strokeDasharray="1 1" />
          <line x1="2" y1="50" x2="98" y2="50" />
          <path d="M6 30 C 20 40, 80 40, 94 30" />
          <path d="M6 70 C 20 60, 80 60, 94 70" />
          <path d="M14 20 C 30 30, 70 30, 86 20" />
          <path d="M14 80 C 30 70, 70 70, 86 80" />
          <ellipse cx="50" cy="50" rx="12" ry="48" />
          <ellipse cx="50" cy="50" rx="24" ry="48" />
          <ellipse cx="50" cy="50" rx="36" ry="48" />
        </svg>
      </div>

      <div className="container mx-auto px-5 relative flex flex-col items-center justify-center z-10 text-center max-w-2xl">
        <span className="reveal inline-block px-3.5 py-1 text-[9px] font-bold uppercase tracking-[0.25em] bg-[#fdf7eb] border border-[#c7982c]/25 rounded-full text-green mb-5">
          Live Concierge Feed
        </span>
        
        {/* Dynamic recent approvals ticker */}
        <div className="h-8 relative overflow-hidden w-64 mb-6 flex justify-center items-center select-none pointer-events-none">
          <AnimatePresence mode="wait">
            <motion.div
              key={tickerIdx}
              initial={{ y: 15, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -15, opacity: 0 }}
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
              className="absolute flex items-center gap-2 px-3 py-1 bg-white/70 border border-cloud/40 rounded-full shadow-sm text-xs font-semibold text-ink/75"
            >
              <span className="flex h-1.5 w-1.5 rounded-full bg-[#16c46a] animate-pulse"></span>
              <span>{recentApprovals[tickerIdx].flag}</span>
              <span>{recentApprovals[tickerIdx].country}</span>
              <span className="text-[9px] text-green font-bold tracking-wide uppercase">{recentApprovals[tickerIdx].status}</span>
              <span className="text-[9px] text-muted">{recentApprovals[tickerIdx].time}</span>
            </motion.div>
          </AnimatePresence>
        </div>

        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight text-ink leading-[1.1] mb-8">
          1M+ travelers getting <br />
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-green to-green-light font-bold">faster visa guidance.</span>
        </h2>
        <div className="flex justify-center">
          <a
            href="https://wa.me/97142616929?text=Hi%20Visa%20Guy%2C%20could%20you%20tell%20me%20more%20about%20your%20services%3F"
            target="_blank"
            className="group flex items-center justify-start gap-4 bg-white/95 rounded-[20px] p-2 pr-6 shadow-[0_12px_40px_rgba(0,0,0,0.06)] border border-cloud/40 hover:border-[#c7982c]/25 hover:shadow-[0_20px_50px_rgba(199,152,44,0.15)] transition-all duration-300 cursor-pointer hover:scale-102"
          >
            {/* Overlapping profile avatars representation */}
            <div className="flex -space-x-3 shrink-0 ml-1 relative">
              <div className="w-9 h-9 rounded-full bg-gradient-to-tr from-green to-green-light border-2 border-white flex items-center justify-center text-white text-xs font-bold shadow-sm relative z-20">
                👤
              </div>
              <div className="w-9 h-9 rounded-full bg-gradient-to-tr from-[#0f0f10] to-[#242017] border-2 border-white flex items-center justify-center text-[#c7982c] text-xs font-bold shadow-sm relative z-10">
                💬
              </div>
              {/* Online indicator */}
              <span className="absolute bottom-0 right-0 flex h-2.5 w-2.5 z-30">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-status opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-status ring-2 ring-white"></span>
              </span>
            </div>
            
            <div className="flex flex-col text-left">
              <span className="text-[10px] font-bold text-green uppercase tracking-[0.15em]">Concierge support</span>
              <span className="text-xs font-bold text-ink mt-0.5">Chat with Visa Specialist</span>
              <span className="text-[9px] font-medium text-muted mt-0.5">Average reply time: &lt; 1 min</span>
            </div>
          </a>
        </div>
      </div>

      {/* Interactive & rotating client avatar ring */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0">
        
        {/* Outer dashed orbit circle */}
        <div className={`absolute w-[340px] h-[340px] sm:w-[440px] sm:h-[440px] md:w-[600px] md:h-[600px] lg:w-[820px] lg:h-[820px] rounded-full border border-dashed border-[#c7982c]/10 opacity-60 animate-spin-slow [animation-duration:120s] ${
          isPaused ? '[animation-play-state:paused]' : ''
        }`}></div>

        {/* Primary Orbit ring */}
        <div className={`relative w-[280px] h-[280px] sm:w-[360px] sm:h-[360px] md:w-[500px] md:h-[500px] lg:w-[680px] lg:h-[680px] rounded-full border border-[#c7982c]/15 shadow-[0_0_45px_rgba(199,152,44,0.04)] animate-spin-slow flex items-center justify-center ${
          isPaused ? '[animation-play-state:paused]' : ''
        }`}>
          
          {/* Orbit satellite dot indicator */}
          <div className="absolute w-2 h-2 rounded-full bg-[#c7982c] shadow-[0_0_8px_#c7982c] top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 animate-pulse"></div>
          
          {[...Array(10)].map((_, idx) => {
            const angle = (360 / 10) * idx
            return (
              <div
                key={idx}
                style={{
                  transform: `rotate(${angle}deg) translate(${radius}px) rotate(-${angle}deg)`,
                }}
                className="absolute w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 flex items-center justify-center pointer-events-auto cursor-pointer"
              >
                <div 
                  className="w-full h-full relative transition-transform duration-300 hover:scale-110 active:scale-95"
                  onMouseEnter={() => setHoveredIdx(idx)}
                  onMouseLeave={() => setHoveredIdx(null)}
                >
                  <Avatar
                    index={idx}
                    className={`w-full h-full rounded-full border-4 border-white bg-white shadow-lg overflow-hidden animate-spin-counter-slow ${
                      isPaused ? '[animation-play-state:paused]' : ''
                    }`}
                  />
                  
                  {/* Tooltip on Hover */}
                  <AnimatePresence>
                    {hoveredIdx === idx && (
                      <motion.div
                        initial={{ opacity: 0, y: 12, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 12, scale: 0.95 }}
                        transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
                        className="absolute bottom-[115%] left-1/2 -translate-x-1/2 z-50 w-60 p-4 rounded-2xl bg-white/95 border border-[#c7982c]/20 shadow-[0_12px_36px_rgba(199,152,44,0.12)] backdrop-blur-md text-left pointer-events-none"
                      >
                        <div className="flex items-center gap-1.5 mb-1.5">
                          <span className="text-sm">{successStories[idx].flag}</span>
                          <span className="text-xs font-bold text-ink">{successStories[idx].name}</span>
                          <span className="text-[9px] font-bold text-[#c7982c] bg-[#c7982c]/5 border border-[#c7982c]/10 rounded-full px-2 py-0.5 ml-auto tracking-wide uppercase">
                            {successStories[idx].visa}
                          </span>
                        </div>
                        <p className="text-[11px] leading-normal text-muted italic font-medium">
                          &ldquo;{successStories[idx].quote}&rdquo;
                        </p>
                        
                        {/* Caret triangle below tooltip */}
                        <div className="absolute top-full left-1/2 -translate-x-1/2 w-3 h-1.5 overflow-hidden">
                          <div className="w-2.5 h-2.5 rotate-45 bg-white/95 border-r border-b border-[#c7982c]/15 -translate-y-1.5"></div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
