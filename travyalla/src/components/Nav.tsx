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
        className={`fixed transition-all duration-500 left-1/2 -translate-x-1/2 ${
          open ? 'z-[1001]' : 'z-50'
        } ${
          solid
            ? 'top-3 w-[90%] max-w-5xl rounded-full bg-white/80 shadow-[0_10px_30px_rgba(0,0,0,0.06)] border border-black/5 backdrop-blur-md py-2 px-5'
            : 'top-0 w-full rounded-none bg-transparent py-4 px-4 md:px-6'
        }`}
      >
        <div className="flex items-center justify-between w-full">
          {/* Logo - Hide when the menu is open! */}
          <div className="relative z-50 min-h-[38px] flex items-center">
            <AnimatePresence>
              {!open && (
                <motion.div
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -10 }}
                  transition={{ duration: 0.2 }}
                >
                  <Link
                    to="/"
                    aria-label={`${BRAND.name} home`}
                    className="flex items-center gap-2 group"
                  >
                    <div className="transition-transform duration-300 group-hover:scale-102">
                      <Logo />
                    </div>
                  </Link>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Right actions */}
          <div className="flex items-center gap-2 md:gap-3 relative z-[9999]">
            <AnimatePresence>
              {!open && (
                <motion.a
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.18 }}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hidden sm:flex items-center justify-center px-6 py-2.5 rounded-full bg-black/85 hover:bg-black text-white text-xs md:text-sm font-bold transition-all hover:scale-102 cursor-pointer shadow-sm"
                  href="https://visa-eligibility.visaguy.ae/"
                >
                  Am I Eligible?
                </motion.a>
              )}
            </AnimatePresence>
            
            <button
              onClick={() => setOpen((o) => !o)}
              className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-white hover:shadow-md hover:scale-102 transition-all text-xs md:text-sm font-bold text-black cursor-pointer border border-black/10 shadow-sm"
            >
              <span>{open ? 'Close' : 'Menu'}</span>
              <span className="flex flex-col gap-1 w-4 shrink-0">
                {open ? (
                  <span className="relative h-[2px] w-full bg-black rounded-full rotate-45 translate-y-[3px]">
                    <span className="absolute inset-0 bg-black rotate-90"></span>
                  </span>
                ) : (
                  <>
                    <span className="h-[2px] w-full bg-black rounded-full"></span>
                    <span className="h-[2px] w-3/4 bg-black rounded-full self-end"></span>
                  </>
                )}
              </span>
            </button>
          </div>
        </div>
      </header>

      {/* Full-Page Overlay Menu - White Background (Moved outside of transformed header) */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 bg-[#fdfcfb] z-[1000] overflow-y-auto flex flex-col justify-between p-6 md:p-12 text-black border-b border-black/5"
          >
            {/* Header inside overlay (Spacer to push content down) */}
            <div className="flex items-center justify-between w-full max-w-7xl mx-auto opacity-0 pointer-events-none py-4">
              <Logo />
            </div>

            {/* Main Navigation Content */}
            <div className="container mx-auto max-w-7xl grid grid-cols-1 lg:grid-cols-12 gap-12 my-auto items-center py-12 md:py-16">
              
              {/* Left Column: Mega Links (Dark Text on White BG) */}
              <div className="flex flex-col gap-3 text-left lg:col-span-6">
                {links.map((l, index) => (
                  <motion.div
                    key={l.to}
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: index * 0.04, ease: [0.16, 1, 0.3, 1] }}
                  >
                    <Link
                      to={l.to}
                      onClick={() => setOpen(false)}
                      className="group inline-flex items-baseline gap-4 text-4xl sm:text-5xl md:text-6xl font-black tracking-tight text-black/40 hover:text-black transition duration-300"
                    >
                      <span className="text-xs font-mono text-green tracking-widest">0{index + 1}</span>
                      <span>{l.label}</span>
                      <span className="text-green opacity-0 group-hover:opacity-100 group-hover:translate-x-1.5 transition-all duration-300 text-3xl">→</span>
                    </Link>
                  </motion.div>
                ))}
              </div>

              {/* Right Column: Contact Details, Socials, & Help Card */}
              <div className="flex flex-col gap-8 text-left lg:col-span-6 border-t lg:border-t-0 lg:border-l border-black/5 pt-8 lg:pt-0 lg:pl-16">
                <div className="space-y-3">
                  <span className="inline-block text-xs font-bold uppercase tracking-[0.25em] text-green">Concierge Support</span>
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-black leading-tight">Need immediate visa assistance?</h3>
                  <p className="text-sm text-gray-500 leading-relaxed max-w-md">
                    Get in touch directly with our visa manager in Dubai. We handle embassy queue bookings, physical document pick-ups, and express biometrics slots.
                  </p>
                </div>

                <div className="flex flex-wrap gap-4">
                  <a
                    href={`https://wa.me/${BRAND.whatsapp.replace(/\D/g, '')}`}
                    target="_blank"
                    rel="noreferrer"
                    className="px-6 py-3.5 rounded-full bg-status hover:bg-status/90 text-white font-bold text-sm shadow-md hover:scale-102 transition-all flex items-center gap-2"
                  >
                    💬 WhatsApp Expert
                  </a>
                  <Link
                    to="/contact"
                    onClick={() => setOpen(false)}
                    className="px-6 py-3.5 rounded-full bg-black text-white hover:bg-gray-800 font-bold text-sm hover:scale-102 transition-all shadow-sm"
                  >
                    Book Consultation
                  </Link>
                </div>

                <div className="pt-8 grid grid-cols-2 gap-8 border-t border-black/5 text-xs text-gray-500 font-medium">
                  <div className="space-y-1">
                    <span className="block font-bold text-black uppercase tracking-wider text-[10px] text-green">Office Address</span>
                    <span className="text-black/75">{BRAND.address}</span>
                  </div>
                  <div className="space-y-1">
                    <span className="block font-bold text-black uppercase tracking-wider text-[10px] text-green">Direct Email</span>
                    <a href={`mailto:${BRAND.email}`} className="text-black/75 hover:text-green transition-colors">{BRAND.email}</a>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Copyright footer */}
            <div className="w-full max-w-7xl mx-auto flex flex-wrap items-center justify-between text-xs text-gray-400 pt-6 border-t border-black/5">
              <span>© {new Date().getFullYear()} TRAVSOUK Concierge. All rights reserved.</span>
              <span>Yalla, let’s go.</span>
            </div>
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
