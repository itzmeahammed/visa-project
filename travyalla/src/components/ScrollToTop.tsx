import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { lenisRef } from '../hooks/useLenis'

/**
 * Scrolls to the top on every route change. Resets through Lenis (its internal
 * position wins over window.scrollTo) and again after the AnimatePresence page
 * exit completes, since the swap happens ~350ms after the pathname changes.
 */
export default function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => {
    const reset = () => {
      if (lenisRef.current) {
        lenisRef.current.scrollTo(0, { immediate: true, force: true })
      }
      window.scrollTo({ top: 0, behavior: 'auto' })
    }
    reset()
    const raf = requestAnimationFrame(reset)
    const t = window.setTimeout(reset, 420)
    return () => {
      cancelAnimationFrame(raf)
      clearTimeout(t)
    }
  }, [pathname])
  return null
}
