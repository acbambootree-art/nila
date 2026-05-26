import { useRef } from 'react'
import { Bubbles, Chrome, Waves, useIsActive } from '../components/Primitives'

type Props = { idx: number; total: number; bubbles: boolean; waveSpeed: number }

export default function SlideCTA({ idx, total, bubbles, waveSpeed }: Props) {
  const ref = useRef<HTMLDivElement>(null)
  useIsActive(ref)
  return (
    <div ref={ref} style={{ position: 'absolute', inset: 0 }}>
      <Chrome index={idx} total={total} label="Available Soon" />
      <Bubbles count={20} enabled={bubbles} />
      <div className="caustic" />

      {/* waves */}
      <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: '50%', opacity: 0.6 }}>
        <Waves speed={waveSpeed * 0.7} height="100%" />
      </div>

      <div
        className="slide-pad"
        style={{ justifyContent: 'center', alignItems: 'center', textAlign: 'center' }}
      >
        <div
          className="fade-up mono"
          style={{ fontSize: 16, color: 'var(--brass)', letterSpacing: '0.5em', marginBottom: 60 }}
        >
          NILA  ·  INAUGURAL RELEASE
        </div>

        <div
          className="fade-up d1"
          style={{
            fontSize: 220,
            lineHeight: 0.88,
            fontWeight: 300,
            color: 'var(--foam)',
            letterSpacing: '-0.04em',
            whiteSpace: 'nowrap',
          }}
        >
          September
        </div>
        <div
          className="fade-up d2"
          style={{
            fontSize: 260,
            lineHeight: 0.88,
            fontWeight: 300,
            fontStyle: 'italic',
            color: 'var(--brass)',
            letterSpacing: '-0.04em',
            marginTop: 10,
            whiteSpace: 'nowrap',
          }}
        >
          2026
        </div>

        <div className="fade-up d3" style={{ marginTop: 80, display: 'flex', alignItems: 'center', gap: 24 }}>
          <div style={{ width: 80, height: 1, background: 'var(--brass)' }} />
          <span
            style={{
              fontSize: 32,
              color: 'var(--foam-dim)',
              fontStyle: 'italic',
              fontWeight: 300,
            }}
          >
            Reservations open at nilawines.sg
          </span>
          <div style={{ width: 80, height: 1, background: 'var(--brass)' }} />
        </div>

        <div
          className="fade-up d4"
          style={{
            marginTop: 100,
            fontFamily: 'JetBrains Mono',
            fontSize: 13,
            color: 'var(--brass-dim)',
            letterSpacing: '0.4em',
          }}
        >
          AGED BY THE STRAIT  ·  BOTTLED IN SINGAPORE  ·  CH. PHUA &amp; CREW
        </div>
      </div>
    </div>
  )
}
