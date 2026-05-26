import { useRef } from 'react'
import { Bubbles, Chrome, Compass, Waves, useIsActive } from '../components/Primitives'

type Props = { idx: number; total: number; bubbles: boolean; waveSpeed: number }

export default function SlideSecret({ idx, total, bubbles, waveSpeed }: Props) {
  const ref = useRef<HTMLDivElement>(null)
  useIsActive(ref)
  return (
    <div ref={ref} style={{ position: 'absolute', inset: 0 }}>
      <Chrome index={idx} total={total} label="Chapter II — Origin" />
      <Bubbles count={20} enabled={bubbles} />

      <div className="slide-pad" style={{ justifyContent: 'space-between' }}>
        <div className="fade-up mono" style={{ fontSize: 16, color: 'var(--brass)' }}>
          Chapter Two
        </div>

        <div style={{ display: 'flex', alignItems: 'flex-end', gap: 80, marginBottom: 60 }}>
          <div style={{ flex: 1, maxWidth: 1100 }}>
            <h1
              className="fade-up d1"
              style={{
                fontSize: 110,
                lineHeight: 1,
                fontWeight: 300,
                letterSpacing: '-0.02em',
                marginBottom: 48,
                color: 'var(--foam)',
              }}
            >
              An old mariner's <span className="serif-italic" style={{ color: 'var(--brass)' }}>secret.</span>
            </h1>
            <div className="hairline fade-up d2" style={{ marginBottom: 36 }} />
            <p
              className="fade-up d2"
              style={{
                fontSize: 32,
                lineHeight: 1.55,
                fontWeight: 300,
                color: 'var(--foam-dim)',
                maxWidth: 1000,
              }}
            >
              In 2010, divers off the coast of Åland pulled up champagne from a 19th-century shipwreck — perfectly
              preserved, more refined than the day it sailed. The sea, it turned out, had been quietly aging it for
              170 years.
            </p>
            <p
              className="fade-up d3"
              style={{
                marginTop: 32,
                fontSize: 26,
                fontStyle: 'italic',
                color: 'var(--brass)',
                maxWidth: 900,
              }}
            >
              Nila is built on that accident.
            </p>
          </div>

          <div className="fade-up d3" style={{ width: 320, flexShrink: 0 }}>
            <Compass size={280} speed={50} />
          </div>
        </div>

        {/* footer waves */}
        <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: 200, opacity: 0.4 }}>
          <Waves speed={waveSpeed} height="100%" />
        </div>
      </div>
    </div>
  )
}
