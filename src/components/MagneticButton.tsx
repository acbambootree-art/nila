import { useEffect, useRef } from 'react'
import type { ReactNode, AnchorHTMLAttributes } from 'react'

type Props = AnchorHTMLAttributes<HTMLAnchorElement> & {
  children: ReactNode
  /** Strength of the pull (0-1). Default 0.3. */
  strength?: number
  /** Distance in px at which the button starts being pulled. */
  radius?: number
}

/**
 * A link that gently pulls toward the cursor when nearby.
 * Disabled on touch devices and when the user prefers reduced motion.
 */
export default function MagneticButton({
  children,
  strength = 0.28,
  radius = 140,
  className = '',
  ...rest
}: Props) {
  const ref = useRef<HTMLAnchorElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    // Skip on touch / reduced-motion users
    const isTouch = window.matchMedia('(pointer: coarse)').matches
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (isTouch || reducedMotion) return

    const handleMove = (e: MouseEvent) => {
      const rect = el.getBoundingClientRect()
      const cx = rect.left + rect.width / 2
      const cy = rect.top + rect.height / 2
      const dx = e.clientX - cx
      const dy = e.clientY - cy
      const dist = Math.sqrt(dx * dx + dy * dy)

      if (dist < radius) {
        const falloff = (1 - dist / radius) * strength
        el.style.transform = `translate(${dx * falloff}px, ${dy * falloff}px)`
      } else {
        el.style.transform = 'translate(0, 0)'
      }
    }

    const handleLeave = () => {
      el.style.transform = 'translate(0, 0)'
    }

    window.addEventListener('mousemove', handleMove, { passive: true })
    window.addEventListener('mouseleave', handleLeave)

    return () => {
      window.removeEventListener('mousemove', handleMove)
      window.removeEventListener('mouseleave', handleLeave)
    }
  }, [radius, strength])

  return (
    <a
      ref={ref}
      className={className}
      style={{
        transition:
          'transform 0.45s cubic-bezier(0.22, 1, 0.36, 1), background-color 0.5s ease, border-color 0.5s ease, color 0.5s ease',
        willChange: 'transform',
        display: 'inline-flex',
      }}
      {...rest}
    >
      {children}
    </a>
  )
}
