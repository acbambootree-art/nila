import { useRef } from 'react'
import { Bubbles, Chrome, Waves, useIsActive } from '../components/Primitives'

type Props = { idx: number; total: number; bubbles: boolean; waveSpeed: number }

export default function SlideFirst({ idx, total, bubbles, waveSpeed }: Props) {
  const ref = useRef<HTMLDivElement>(null)
  useIsActive(ref)
  return (
    <div ref={ref} style={{ position: 'absolute', inset: 0 }}>
      <Chrome index={idx} total={total} label="A First For This City" />
      <Bubbles count={14} enabled={bubbles} />
      <div className="caustic" />

      <div className="slide-pad" style={{ justifyContent: 'center', alignItems: 'center', textAlign: 'center' }}>
        <div
          className="fade-up mono"
          style={{ fontSize: 18, color: 'var(--brass)', marginBottom: 60, letterSpacing: '0.5em' }}
        >
          A FIRST FOR THIS CITY
        </div>

        <div
          className="fade-up d1"
          style={{
            fontSize: 180,
            lineHeight: 0.9,
            fontWeight: 300,
            color: 'var(--foam)',
            letterSpacing: '-0.04em',
            whiteSpace: 'nowrap',
          }}
        >
          The first
        </div>
        <div
          className="fade-up d2"
          style={{
            fontSize: 180,
            lineHeight: 0.9,
            fontWeight: 300,
            fontStyle: 'italic',
            color: 'var(--brass)',
            letterSpacing: '-0.04em',
            marginTop: 18,
            whiteSpace: 'nowrap',
          }}
        >
          sea-aged wine
        </div>
        <div
          className="fade-up d3"
          style={{
            fontSize: 64,
            fontWeight: 300,
            marginTop: 28,
            color: 'var(--foam-dim)',
            whiteSpace: 'nowrap',
          }}
        >
          made in Singapore.
        </div>

        <div
          className="fade-up d4"
          style={{
            marginTop: 80,
            fontFamily: 'JetBrains Mono',
            fontSize: 16,
            color: 'var(--brass)',
            letterSpacing: '0.4em',
          }}
        >
          NOT IMPORTED  ·  NOT IMITATED  ·  AGED IN OUR OWN WATERS
        </div>
      </div>

      {/* corner ornament */}
      <svg
        style={{ position: 'absolute', top: 60, right: 60, width: 120, height: 120, opacity: 0.4 }}
        viewBox="0 0 120 120"
      >
        <circle cx="60" cy="60" r="58" fill="none" stroke="var(--brass)" strokeWidth="0.5" />
        <circle cx="60" cy="60" r="48" fill="none" stroke="var(--brass)" strokeWidth="0.5" />
        <line x1="60" y1="0" x2="60" y2="120" stroke="var(--brass)" strokeWidth="0.5" />
        <line x1="0" y1="60" x2="120" y2="60" stroke="var(--brass)" strokeWidth="0.5" />
      </svg>

      {/* footer waves matching other slides */}
      <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: 200, opacity: 0.4 }}>
        <Waves speed={waveSpeed || 1} height="100%" />
      </div>
    </div>
  )
}
