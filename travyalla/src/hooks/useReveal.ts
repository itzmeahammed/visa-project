import { useEffect, useRef } from 'react'

/**
 * Reveals all `.reveal` children of the returned ref when they scroll into
 * view. Uses a plain IntersectionObserver (independent of the smooth-scroll
 * library) so content is never left permanently hidden, plus a safety net
 * that un-hides everything if the observer never fires.
 *
 * Add className="reveal" to anything that should fade/slide in.
 */
export function useReveal<T extends HTMLElement = HTMLDivElement>() {
  const ref = useRef<T>(null)

  useEffect(() => {
    const root = ref.current
    if (!root) return
    const items = Array.from(root.querySelectorAll<HTMLElement>('.reveal'))
    if (!items.length) return

    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduce || !('IntersectionObserver' in window)) {
      items.forEach((el) => el.classList.add('is-in'))
      return
    }

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-in')
            io.unobserve(entry.target)
          }
        })
      },
      { rootMargin: '0px 0px -10% 0px', threshold: 0.05 },
    )

    items.forEach((el) => io.observe(el))

    // Safety net: if anything is still hidden after 3s (e.g. observer never
    // fired for an already-on-screen element), reveal it so content is never
    // stuck invisible.
    const safety = window.setTimeout(() => {
      items.forEach((el) => el.classList.add('is-in'))
    }, 3000)

    return () => {
      io.disconnect()
      window.clearTimeout(safety)
    }
  }, [])

  return ref
}
