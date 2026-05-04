import { useEffect, useState } from 'react'

/**
 * Black overlay shown on first render of the page. A single gold ✦ fades in
 * and grows, then the overlay dissolves to reveal the hero. Total ~2.2s.
 */
export default function IntroOverlay() {
  // 0 = hidden (before mount), 1 = visible, 2 = exiting, 3 = unmounted
  const [stage, setStage] = useState(0)

  useEffect(() => {
    const t1 = setTimeout(() => setStage(1), 50)    // fade star in
    const t2 = setTimeout(() => setStage(2), 1400)  // begin overlay exit
    const t3 = setTimeout(() => setStage(3), 2400)  // unmount
    return () => {
      clearTimeout(t1)
      clearTimeout(t2)
      clearTimeout(t3)
    }
  }, [])

  // Lock body scroll while the overlay is up
  useEffect(() => {
    if (stage < 3) {
      const prev = document.body.style.overflow
      document.body.style.overflow = 'hidden'
      return () => {
        document.body.style.overflow = prev
      }
    }
  }, [stage])

  if (stage === 3) return null

  const overlayOpacity = stage >= 2 ? 0 : 1
  const starOpacity = stage === 0 ? 0 : stage === 1 ? 1 : 0
  const starScale = stage === 0 ? 0.6 : stage === 1 ? 1 : 1.6
  const ringOpacity = stage === 1 ? 0.4 : 0
  const ringScale = stage === 0 ? 0.4 : stage === 1 ? 1 : 1.8

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center"
      style={{
        backgroundColor: '#0c0c0e',
        opacity: overlayOpacity,
        transition: 'opacity 1s cubic-bezier(0.22, 1, 0.36, 1)',
        pointerEvents: stage >= 2 ? 'none' : 'auto',
      }}
      aria-hidden="true"
    >
      {/* Soft expanding ring */}
      <div
        style={{
          position: 'absolute',
          width: '180px',
          height: '180px',
          borderRadius: '999px',
          border: '1px solid rgba(201, 169, 110, 0.5)',
          opacity: ringOpacity,
          transform: `scale(${ringScale})`,
          transition:
            'opacity 1.4s cubic-bezier(0.22, 1, 0.36, 1), transform 2.2s cubic-bezier(0.22, 1, 0.36, 1)',
        }}
      />

      {/* Gold star */}
      <span
        style={{
          fontSize: '36px',
          color: 'rgba(201, 169, 110, 0.9)',
          opacity: starOpacity,
          transform: `scale(${starScale})`,
          transition:
            'opacity 0.9s cubic-bezier(0.22, 1, 0.36, 1), transform 1.6s cubic-bezier(0.22, 1, 0.36, 1)',
        }}
      >
        ✦
      </span>

      {/* Gentle wordmark below */}
      <span
        style={{
          position: 'absolute',
          marginTop: '160px',
          fontFamily: '"Cormorant Garamond", Georgia, serif',
          fontSize: '14px',
          letterSpacing: '0.5em',
          color: 'rgba(201, 169, 110, 0.55)',
          opacity: stage === 1 ? 1 : 0,
          transform: stage === 1 ? 'translateY(0)' : 'translateY(8px)',
          transition: 'opacity 1s ease 0.3s, transform 1.2s cubic-bezier(0.22, 1, 0.36, 1) 0.3s',
        }}
      >
        NILA
      </span>
    </div>
  )
}
