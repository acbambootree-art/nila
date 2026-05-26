import { useEffect } from 'react'
import Lenis from 'lenis'

/**
 * Initialise Lenis smooth scrolling for the whole page.
 *
 * Notes:
 * - Lenis intercepts the wheel/touch and animates `window.scrollY` itself, so we
 *   keep CSS `scroll-snap` proximity active — Lenis lands the scroll, the
 *   browser snaps if a section boundary is nearby.
 * - We also hijack in-page anchor clicks (e.g. "Enquire →" pointing at `#contact`)
 *   so they animate via Lenis instead of jumping.
 * - Disabled for users who prefer reduced motion.
 */
export function useLenis() {
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    const lenis = new Lenis({
      duration: 1.15,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // ease-out-expo
      // Touch devices: let the OS handle scrolling (feels more native than overriding it).
      smoothWheel: true,
      wheelMultiplier: 1,
      lerp: 0.1,
    })

    let rafId = 0
    const raf = (time: number) => {
      lenis.raf(time)
      rafId = requestAnimationFrame(raf)
    }
    rafId = requestAnimationFrame(raf)

    // Smooth-scroll for in-page anchors
    const onAnchorClick = (e: MouseEvent) => {
      const target = (e.target as HTMLElement)?.closest('a[href^="#"]') as HTMLAnchorElement | null
      if (!target) return
      const id = target.getAttribute('href')
      if (!id || id === '#' || id.length < 2) return
      const el = document.querySelector(id)
      if (!el) return
      e.preventDefault()
      lenis.scrollTo(el as HTMLElement, { offset: -80, duration: 1.4 })
    }
    document.addEventListener('click', onAnchorClick)

    return () => {
      cancelAnimationFrame(rafId)
      document.removeEventListener('click', onAnchorClick)
      lenis.destroy()
    }
  }, [])
}
