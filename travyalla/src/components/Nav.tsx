import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { BRAND } from '../data'
import Logo from './Logo'

const links = [
  { label: 'Home', to: '/' },
  { label: 'Destinations', to: '/country' },
  { label: 'Services', to: '/services' },
  { label: 'About Us', to: '/about' },
  { label: 'Blog', to: '/blog' },
  { label: 'News', to: '/news' },
  { label: 'Contact Us', to: '/contact' },
]

const menuEase = [0.22, 1, 0.36, 1] as const

export default function Nav() {
  const [open, setOpen] = useState(false)
  const [solid, setSolid] = useState(false)

  useEffect(() => {
    const onScroll = () => setSolid(window.scrollY > 16)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Lock body scroll when menu is open
  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 flex justify-center px-4 md:px-8 pointer-events-none ${
          open ? 'z-[1001]' : 'z-50'
        }`}
      >
        <div
          className={`pointer-events-auto w-full transition-all duration-[900ms] ease-[cubic-bezier(0.22,1,0.36,1)] will-change-[max-width,margin,padding,background-color,box-shadow] flex items-center justify-between rounded-full border ${
            solid
              ? 'mt-3 max-w-4xl bg-white/85 shadow-[0_12px_36px_rgba(15,15,16,0.08)] border-cloud/70 backdrop-blur-xl py-2 px-3 md:px-4'
              : 'mt-4 max-w-6xl bg-transparent border-transparent shadow-none py-2.5 px-1 md:px-2'
          }`}
        >
          {/* Logo - hidden while the menu is open */}
          <div className="relative z-50 min-h-[40px] flex items-center">
            <AnimatePresence>
              {!open && (
                <motion.div
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -10 }}
                  transition={{ duration: 0.25, ease: menuEase }}
                >
                  <Link
                    to="/"
                    aria-label={`${BRAND.name} home`}
                    className="flex items-center gap-2 group"
                  >
                    <Logo />
                  </Link>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Right actions */}
          <div className="flex items-center gap-2 md:gap-3 relative z-[9999]">
            <AnimatePresence>
              {!open && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.2, ease: menuEase }}
                >
                  <Link
                    to="/eligibility"
                    className="hidden sm:flex items-center gap-2 justify-center px-6 py-2.5 rounded-full bg-ink hover:bg-black text-white text-xs md:text-sm font-bold transition-all duration-300 hover:shadow-lg hover:shadow-green/20 cursor-pointer ring-1 ring-green/30"
                  >
                    Am I Eligible?
                    <span className="text-green-light" aria-hidden="true">
                      ✦
                    </span>
                  </Link>
                </motion.div>
              )}
            </AnimatePresence>

            <button
              onClick={() => setOpen((o) => !o)}
              aria-expanded={open}
              className="flex items-center gap-2.5 px-5 py-2.5 rounded-full bg-white hover:shadow-md transition-all duration-300 text-xs md:text-sm font-bold text-ink cursor-pointer border border-cloud shadow-sm hover:border-green/30"
            >
              <span>{open ? 'Close' : 'Menu'}</span>
              <span className="relative flex flex-col justify-center gap-[5px] w-4 h-3 shrink-0">
                <span
                  className={`h-[2px] w-full bg-ink rounded-full transition-all duration-300 ${
                    open ? 'rotate-45 translate-y-[3.5px]' : ''
                  }`}
                />
                <span
                  className={`h-[2px] bg-ink rounded-full transition-all duration-300 ${
                    open ? '-rotate-45 -translate-y-[3.5px] w-full' : 'w-3/4 self-end'
                  }`}
                />
              </span>
            </button>
          </div>
        </div>
      </header>


      {/* Full-page overlay menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -24 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -24 }}
            transition={{ duration: 0.45, ease: menuEase }}
            className="fixed inset-0 bg-paper z-[1000] overflow-y-auto flex flex-col justify-between p-6 md:p-12 text-ink"
          >
            {/* Ambient backdrop inside the menu */}
            <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
              <div className="absolute -top-40 -right-32 h-[520px] w-[520px] rounded-full bg-[radial-gradient(circle,rgba(199,152,44,0.12),transparent_65%)]" />
              <div className="absolute -bottom-48 -left-40 h-[560px] w-[560px] rounded-full bg-[radial-gradient(circle,rgba(199,152,44,0.08),transparent_65%)]" />
              {/* Faint souk arch line-work */}
              <svg
                className="absolute right-[-6%] top-1/2 -translate-y-1/2 h-[130%] opacity-[0.05] hidden lg:block"
                viewBox="0 0 400 800"
                fill="none"
                stroke="#8f6a1c"
                strokeWidth="2"
              >
                <path d="M60 780 L60 340 C60 210 130 130 200 90 C270 130 340 210 340 340 L340 780" />
                <path d="M110 780 L110 370 C110 265 160 200 200 170 C240 200 290 265 290 370 L290 780" strokeDasharray="4 8" />
              </svg>
            </div>

            {/* Spacer to clear the fixed header */}
            <div className="flex items-center justify-between w-full max-w-7xl mx-auto opacity-0 pointer-events-none py-4">
              <Logo />
            </div>

            {/* Main navigation content */}
            <div className="container mx-auto max-w-7xl grid grid-cols-1 lg:grid-cols-12 gap-12 my-auto items-center py-10 md:py-14 relative">
              {/* Left: mega links */}
              <nav className="flex flex-col text-left lg:col-span-6" aria-label="Main menu">
                {links.map((l, index) => (
                  <motion.div
                    key={l.to}
                    initial={{ x: -28, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.08 + index * 0.055, duration: 0.5, ease: menuEase }}
                    className="border-b border-ink/[0.06] last:border-b-0"
                  >
                    <Link
                      to={l.to}
                      onClick={() => setOpen(false)}
                      className="group flex items-baseline gap-5 py-2.5 md:py-3 text-[2.1rem] sm:text-5xl md:text-[3.4rem] font-black -tracking-[0.03em] text-ink/30 hover:text-ink transition-colors duration-300"
                    >
                      <span className="text-[11px] font-mono font-bold text-green/60 tracking-widest transition-colors duration-300 group-hover:text-green">
                        0{index + 1}
                      </span>
                      <span className="relative">
                        {l.label}
                        <span className="absolute -bottom-1 left-0 h-[3px] w-0 bg-gradient-to-r from-green to-green-light rounded-full transition-all duration-500 ease-out group-hover:w-full" />
                      </span>
                      <span
                        aria-hidden="true"
                        className="text-green opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 text-2xl md:text-3xl"
                      >
                        →
                      </span>
                    </Link>
                  </motion.div>
                ))}
              </nav>

              {/* Right: concierge support card */}
              <motion.aside
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.55, ease: menuEase }}
                className="lg:col-span-6 lg:pl-10"
              >
                <div className="relative overflow-hidden rounded-[28px] border border-green/15 bg-white shadow-[0_24px_60px_-24px_rgba(199,152,44,0.25)] p-7 md:p-9 space-y-7">
                  <div className="pointer-events-none absolute -top-20 -right-20 h-56 w-56 rounded-full bg-green-glow blur-2xl" aria-hidden="true" />

                  <div className="relative space-y-3">
                    <span className="inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.28em] text-green-deep">
                      <span className="h-px w-6 bg-green/50" />
                      Concierge Support
                    </span>
                    <h3 className="text-2xl sm:text-[1.8rem] font-extrabold text-ink leading-tight -tracking-[0.02em]">
                      Need immediate <span className="accent font-normal text-green-deep">visa assistance?</span>
                    </h3>
                    <p className="text-sm text-muted leading-relaxed max-w-md">
                      Get in touch directly with our visa manager in Dubai. We handle embassy queue bookings, physical document pick-ups, and express biometrics slots.
                    </p>
                  </div>

                  <div className="relative flex flex-wrap gap-3">
                    <a
                      href={`https://wa.me/${BRAND.whatsapp.replace(/\D/g, '')}`}
                      target="_blank"
                      rel="noreferrer"
                      className="group/wa inline-flex items-center gap-2.5 px-6 py-3.5 rounded-full bg-status text-white font-bold text-sm shadow-[0_10px_24px_-10px_rgba(22,196,106,0.7)] hover:shadow-[0_14px_30px_-10px_rgba(22,196,106,0.8)] hover:-translate-y-0.5 transition-all duration-300"
                    >
                      <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current" aria-hidden="true">
                        <path d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2Zm5.3 14.1c-.2.6-1.2 1.2-1.7 1.2-.4.1-1 .1-1.6-.1a13 13 0 0 1-5.7-5c-.8-1.3-1.2-2.4-1.1-3 0-.5.6-1.4 1.1-1.6.3-.1.7-.1.9.2l1 1.7c.1.2.1.5 0 .7l-.6.8c.5 1 1.9 2.4 3.1 3l.8-.5c.2-.2.5-.2.7 0l1.7.9c.4.1.5.4.4.7Z" />
                      </svg>
                      WhatsApp Expert
                      <span aria-hidden="true" className="transition-transform duration-300 group-hover/wa:translate-x-0.5">→</span>
                    </a>
                    <Link
                      to="/contact"
                      onClick={() => setOpen(false)}
                      className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-ink text-white hover:bg-black font-bold text-sm hover:-translate-y-0.5 transition-all duration-300 ring-1 ring-green/30 hover:shadow-lg hover:shadow-green/15"
                    >
                      Book Consultation
                    </Link>
                  </div>

                  <div className="relative pt-6 grid grid-cols-1 sm:grid-cols-2 gap-5 border-t border-cloud text-sm">
                    <div className="space-y-1">
                      <span className="block text-[10px] font-bold uppercase tracking-[0.2em] text-green-deep">Office Address</span>
                      <span className="text-ink/75 font-medium">{BRAND.address}</span>
                    </div>
                    <div className="space-y-1">
                      <span className="block text-[10px] font-bold uppercase tracking-[0.2em] text-green-deep">Direct Email</span>
                      <a href={`mailto:${BRAND.email}`} className="text-ink/75 font-medium hover:text-green-deep transition-colors">
                        {BRAND.email}
                      </a>
                    </div>
                  </div>
                </div>
              </motion.aside>
            </div>

            {/* Bottom footer */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.45, duration: 0.4 }}
              className="relative w-full max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2 text-xs text-muted pt-6 border-t border-ink/[0.06]"
            >
              <span>© {new Date().getFullYear()} TRAVSOUK Concierge. All rights reserved.</span>
              <span className="accent text-green-deep text-sm">Yalla, let&rsquo;s go.</span>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

export function FloatingConsult() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1 }}
      className="fixed bottom-5 right-5 z-40 flex items-center gap-2 rounded-full border border-black/5 bg-white/95 p-1.5 shadow-[0_10px_30px_rgba(0,0,0,0.12)] backdrop-blur-md"
    >
      <a
        href={`https://wa.me/${BRAND.whatsapp.replace(/\D/g, '')}`}
        target="_blank"
        rel="noreferrer"
        className="flex items-center gap-2 rounded-full px-4 py-2.5 text-xs md:text-sm font-bold bg-[#16c46a] text-white hover:shadow transition"
      >
        <span aria-hidden="true" className="w-2 h-2 rounded-full bg-white animate-pulse" />
        <span>Chat Now</span>
      </a>
      <a
        href={`tel:${BRAND.phone.replace(/\s/g, '')}`}
        className="grid h-10 w-10 place-items-center rounded-full bg-black text-white hover:bg-gray-800 transition"
        aria-label="Call us"
      >
        <span aria-hidden="true">📞</span>
      </a>
    </motion.div>
  )
}
