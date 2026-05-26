import { useEffect, useRef, useState, type RefObject } from 'react'

export const TYPE_SCALE = {
  hero: 200,
  title: 96,
  bigNum: 240,
  subtitle: 52,
  body: 34,
  small: 26,
  micro: 18,
}

export const SPACING = {
  paddingTop: 100,
  paddingBottom: 100,
  paddingX: 120,
  titleGap: 56,
  itemGap: 32,
}

// ───────────────────────────────────────────────
// Animated wave SVG — multi-layered, parametric
// ───────────────────────────────────────────────
type WavesProps = {
  speed?: number
  height?: number | string
  opacity?: number
  palette?: [string, string, string]
}

export function Waves({ speed = 1, height = 220, opacity = 1, palette }: WavesProps) {
  const layers = [
    { color: palette?.[0] || 'rgba(26,74,94,0.55)', dur: 14, amp: 28, phase: 0, y: 0 },
    { color: palette?.[1] || 'rgba(13,44,61,0.7)', dur: 18, amp: 36, phase: 0.5, y: 30 },
    { color: palette?.[2] || 'rgba(6,19,28,0.95)', dur: 22, amp: 44, phase: 1, y: 70 },
  ]
  return (
    <svg
      viewBox="0 0 1920 300"
      preserveAspectRatio="none"
      style={{ width: '100%', height, opacity, display: 'block' }}
    >
      {layers.map((l, i) => (
        <path
          key={i}
          fill={l.color}
          d={`M0,${150 + l.y} Q480,${150 + l.y - l.amp} 960,${150 + l.y} T1920,${150 + l.y} L1920,300 L0,300 Z`}
        >
          <animate
            attributeName="d"
            dur={`${l.dur / speed}s`}
            repeatCount="indefinite"
            values={`
              M0,${150 + l.y} Q480,${150 + l.y - l.amp} 960,${150 + l.y} T1920,${150 + l.y} L1920,300 L0,300 Z;
              M0,${150 + l.y} Q480,${150 + l.y + l.amp} 960,${150 + l.y} T1920,${150 + l.y} L1920,300 L0,300 Z;
              M0,${150 + l.y} Q480,${150 + l.y - l.amp} 960,${150 + l.y} T1920,${150 + l.y} L1920,300 L0,300 Z
            `}
          />
        </path>
      ))}
    </svg>
  )
}

// ───────────────────────────────────────────────
// Bubbles — drift up
// ───────────────────────────────────────────────
type BubblesProps = { count?: number; enabled?: boolean }

export function Bubbles({ count = 24, enabled = true }: BubblesProps) {
  // Stable bubbles per mount — recompute only when count changes.
  const bubbles = useRef<{ size: number; left: number; dur: number; delay: number }[] | null>(null)
  if (bubbles.current === null || bubbles.current.length !== count) {
    bubbles.current = Array.from({ length: count }, () => {
      const dur = 8 + Math.random() * 12
      return {
        size: 4 + Math.random() * 22,
        left: Math.random() * 100,
        dur,
        delay: -Math.random() * dur,
      }
    })
  }
  if (!enabled) return null
  return (
    <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none', overflow: 'hidden' }}>
      {bubbles.current.map((b, i) => (
        <div
          key={i}
          className="bubble"
          style={{
            width: b.size,
            height: b.size,
            left: `${b.left}%`,
            animationDuration: `${b.dur}s`,
            animationDelay: `${b.delay}s`,
          }}
        />
      ))}
    </div>
  )
}

// ───────────────────────────────────────────────
// Slide chrome (top hairline label)
// ───────────────────────────────────────────────
type ChromeProps = { index: number; total: number; label: string; coords?: string }

export function Chrome({ index, total, label, coords }: ChromeProps) {
  const num = String(index).padStart(2, '0')
  const tot = String(total).padStart(2, '0')
  return (
    <div className="slide-chrome">
      <span>NILA <span className="dot" /> {label}</span>
      <span>{coords || `01°17'N  103°51'E`} <span className="dot" /> {num} / {tot}</span>
    </div>
  )
}

// ───────────────────────────────────────────────
// Compass — slowly rotating
// ───────────────────────────────────────────────
type CompassProps = { size?: number; speed?: number }

export function Compass({ size = 200, speed = 60 }: CompassProps) {
  return (
    <svg viewBox="0 0 200 200" style={{ width: size, height: size }}>
      <defs>
        <radialGradient id="compassGlow">
          <stop offset="0%" stopColor="#c9a96a" stopOpacity="0.2" />
          <stop offset="100%" stopColor="#c9a96a" stopOpacity="0" />
        </radialGradient>
      </defs>
      <circle cx="100" cy="100" r="95" fill="url(#compassGlow)" />
      <circle cx="100" cy="100" r="92" fill="none" stroke="#c9a96a" strokeOpacity="0.5" strokeWidth="1" />
      <circle cx="100" cy="100" r="78" fill="none" stroke="#c9a96a" strokeOpacity="0.3" strokeWidth="0.5" />
      {Array.from({ length: 36 }, (_, i) => {
        const angle = (i * 10) * Math.PI / 180
        const isMajor = i % 9 === 0
        const len = isMajor ? 12 : 5
        const x1 = 100 + Math.cos(angle) * 86
        const y1 = 100 + Math.sin(angle) * 86
        const x2 = 100 + Math.cos(angle) * (86 - len)
        const y2 = 100 + Math.sin(angle) * (86 - len)
        return (
          <line
            key={i}
            x1={x1}
            y1={y1}
            x2={x2}
            y2={y2}
            stroke="#c9a96a"
            strokeOpacity={isMajor ? 0.9 : 0.4}
            strokeWidth={isMajor ? 1.2 : 0.6}
          />
        )
      })}
      <g style={{ transformOrigin: '100px 100px', animation: `spin ${speed}s linear infinite` }}>
        <polygon points="100,25 105,100 100,110 95,100" fill="#a83040" />
        <polygon points="100,175 105,100 100,90 95,100" fill="#f4ede0" fillOpacity="0.6" />
        <circle cx="100" cy="100" r="4" fill="#c9a96a" />
      </g>
      <text x="100" y="20" textAnchor="middle" fill="#c9a96a" fontSize="10" fontFamily="JetBrains Mono">N</text>
      <text x="184" y="104" textAnchor="middle" fill="#c9a96a" fontSize="10" fontFamily="JetBrains Mono">E</text>
      <text x="100" y="190" textAnchor="middle" fill="#c9a96a" fontSize="10" fontFamily="JetBrains Mono">S</text>
      <text x="16" y="104" textAnchor="middle" fill="#c9a96a" fontSize="10" fontFamily="JetBrains Mono">W</text>
    </svg>
  )
}

// ───────────────────────────────────────────────
// Counter — counts up to a value once active
// ───────────────────────────────────────────────
type CounterProps = {
  to: number
  duration?: number
  active: boolean
  format?: (v: number) => string
}

export function Counter({ to, duration = 2000, active, format = (v) => v.toFixed(0) }: CounterProps) {
  const [v, setV] = useState(0)
  useEffect(() => {
    if (!active) {
      setV(0)
      return
    }
    let start: number | null = null
    let raf = 0
    const tick = (t: number) => {
      if (start === null) start = t
      const p = Math.min(1, (t - start) / duration)
      const eased = 1 - Math.pow(1 - p, 3)
      setV(eased * to)
      if (p < 1) raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [to, duration, active])
  return <span className="ticker-digit">{format(v)}</span>
}

// ───────────────────────────────────────────────
// Hook: slide active state via deck-stage attribute
// ───────────────────────────────────────────────
export function useIsActive(ref: RefObject<HTMLElement | null>): boolean {
  const [active, setActive] = useState(false)

  useEffect(() => {
    if (!ref.current) return
    const sec = ref.current.closest('section')
    if (!sec) return
    const stage = document.querySelector('deck-stage')
    if (!stage) return

    const slides = () => Array.from(stage.children).filter((c) => c.tagName === 'SECTION')
    const update = (idx?: number) => {
      const i =
        typeof idx === 'number'
          ? idx
          : ((stage as unknown as { currentIndex?: number }).currentIndex ?? 0)
      setActive(slides()[i] === sec)
    }

    const onSlideChange = (e: Event) => {
      const detail = (e as CustomEvent<{ index: number }>).detail
      update(detail?.index)
    }
    stage.addEventListener('slidechange', onSlideChange as EventListener)

    update()
    const t = window.setTimeout(() => update(), 100)

    return () => {
      stage.removeEventListener('slidechange', onSlideChange as EventListener)
      window.clearTimeout(t)
    }
  }, [ref])

  useEffect(() => {
    if (!ref.current) return
    const sec = ref.current.closest('section')
    if (!sec) return
    sec.classList.toggle('is-active', active)
  }, [active, ref])

  return active
}

// ───────────────────────────────────────────────
// Small reusable label/value pairs used across slides
// ───────────────────────────────────────────────
export function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <div className="mono" style={{ fontSize: 12, color: 'var(--brass-dim)', marginBottom: 8 }}>
        {label}
      </div>
      <div style={{ fontSize: 28, color: 'var(--foam)', fontWeight: 400, fontStyle: 'italic' }}>
        {value}
      </div>
    </div>
  )
}

export function Stat2({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <div className="mono" style={{ fontSize: 12, color: 'var(--brass-dim)', marginBottom: 8 }}>
        {label}
      </div>
      <div style={{ fontSize: 26, color: 'var(--foam)', fontStyle: 'italic', fontWeight: 300 }}>
        {value}
      </div>
    </div>
  )
}
