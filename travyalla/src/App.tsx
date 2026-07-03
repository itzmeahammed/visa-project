import { Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence, motion, useScroll, useSpring } from 'framer-motion'
import { useLenis } from './hooks/useLenis'
import ScrollToTop from './components/ScrollToTop'
import Nav, { FloatingConsult } from './components/Nav'
import Footer from './components/Footer'

import Home from './pages/Home'
import CountryIndex from './pages/CountryIndex'
import CountryPage from './pages/CountryPage'
import Articles from './pages/Articles'
import Post from './pages/Post'
import Services from './pages/Services'
import ServicePage from './pages/ServicePage'
import SchengenVisa from './pages/SchengenVisa'
import CorporateVisa from './pages/CorporateVisa'
import UkVisa from './pages/UkVisa'
import UsVisa from './pages/UsVisa'
import Eligibility from './pages/Eligibility'
import About from './pages/About'
import Contact from './pages/Contact'
import Careers from './pages/Careers'
import Legal from './pages/Legal'
import NotFound from './pages/NotFound'

export default function App() {
  useLenis()
  const location = useLocation()
  const { scrollYProgress } = useScroll()
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 30, mass: 0.4 })

  return (
    <>
      <motion.div
        style={{ scaleX: progress }}
        className="fixed inset-x-0 top-0 z-[60] h-1 origin-left bg-green"
      />
      <ScrollToTop />
      <Nav />
      <FloatingConsult />

      <main>
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<Home />} />

            <Route path="/country" element={<CountryIndex />} />
            {/* Bespoke country pages take precedence over the dynamic template */}
            <Route path="/country/uk" element={<UkVisa />} />
            <Route path="/country/usa" element={<UsVisa />} />
            <Route path="/country/:slug" element={<CountryPage />} />

            <Route path="/services" element={<Services />} />
            <Route path="/tourist-visas" element={<ServicePage />} />
            <Route path="/corporate-visa" element={<CorporateVisa />} />
            <Route path="/schengen-visa" element={<SchengenVisa />} />
            <Route path="/students-visa" element={<ServicePage />} />

            <Route path="/blog" element={<Articles kind="blog" />} />
            <Route path="/blog/:slug" element={<Post kind="blog" />} />
            <Route path="/news" element={<Articles kind="news" />} />
            <Route path="/news/:slug" element={<Post kind="news" />} />

            <Route path="/eligibility" element={<Eligibility />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/careers" element={<Careers />} />

            <Route path="/privacy-policy" element={<Legal kind="privacy" />} />
            <Route path="/terms-conditions" element={<Legal kind="terms" />} />

            <Route path="*" element={<NotFound />} />
          </Routes>
        </AnimatePresence>
      </main>

      <Footer />
    </>
  )
}
