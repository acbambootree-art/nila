import { useRef } from 'react'
import { Bubbles, Chrome, useIsActive } from '../components/Primitives'

type Props = { idx: number; total: number; bubbles: boolean }

export default function SlideFounder({ idx, total, bubbles }: Props) {
  const ref = useRef<HTMLDivElement>(null)
  useIsActive(ref)
  return (
    <div ref={ref} style={{ position: 'absolute', inset: 0 }}>
      <Chrome index={idx} total={total} label="Chapter I — The Founder" />
      <Bubbles count={12} enabled={bubbles} />
      <div className="caustic" />

      <div className="slide-pad" style={{ flexDirection: 'row', alignItems: 'center', gap: 100 }}>
        {/* Portrait — Charlie Phua */}
        <div
          className="fade-up"
          style={{
            width: 520,
            height: 700,
            position: 'relative',
            flexShrink: 0,
            overflow: 'hidden',
            boxShadow: '0 40px 80px rgba(0,0,0,0.5), 0 0 0 1px var(--brass-dim)',
          }}
        >
          <img
            src="/deck/charlie-portrait.png"
            style={{
              position: 'absolute',
              inset: 0,
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              objectPosition: '50% 30%',
              filter: 'contrast(1.05) saturate(0.95)',
            }}
          />
          <div
            style={{
              position: 'absolute',
              inset: 0,
              background: 'linear-gradient(180deg, transparent 60%, rgba(6,19,28,0.55) 100%)',
              pointerEvents: 'none',
            }}
          />
          <div
            style={{
              position: 'absolute',
              top: 16,
              left: 16,
              width: 18,
              height: 18,
              borderTop: '1px solid var(--brass)',
              borderLeft: '1px solid var(--brass)',
              opacity: 0.7,
            }}
          />
          <div
            style={{
              position: 'absolute',
              bottom: 16,
              right: 16,
              width: 18,
              height: 18,
              borderBottom: '1px solid var(--brass)',
              borderRight: '1px solid var(--brass)',
              opacity: 0.7,
            }}
          />
          <div
            style={{
              position: 'absolute',
              bottom: 24,
              left: 24,
              right: 24,
              fontFamily: 'JetBrains Mono',
              fontSize: 12,
              color: 'var(--foam-dim)',
              letterSpacing: '0.3em',
              display: 'flex',
              justifyContent: 'space-between',
            }}
          >
            <span>CH. PHUA</span>
            <span>FOUNDER · 2026</span>
          </div>
        </div>

        {/* Right text */}
        <div style={{ flex: 1, paddingRight: 60 }}>
          <div className="fade-up mono" style={{ fontSize: 16, color: 'var(--brass)', marginBottom: 32 }}>
            Chapter One
          </div>
          <h1
            className="fade-up d1"
            style={{
              fontSize: 92,
              lineHeight: 1,
              fontWeight: 300,
              letterSpacing: '-0.02em',
              marginBottom: 48,
              color: 'var(--foam)',
            }}
          >
            Charlie Phua,<br />
            <span className="serif-italic" style={{ color: 'var(--brass)' }}>mariner &amp; vintner.</span>
          </h1>
          <div className="hairline fade-up d2" style={{ marginBottom: 40 }} />
          <p
            className="fade-up d2"
            style={{
              fontSize: 30,
              lineHeight: 1.55,
              fontWeight: 300,
              color: 'var(--foam-dim)',
              maxWidth: 720,
            }}
          >
            Charlie spent two decades on the water before he ever opened a vineyard ledger. He believed the sea did
            something to a bottle that no cellar in the world could replicate — a slow conversation between glass,
            salt, and silence.
          </p>
          <p
            className="fade-up d3"
            style={{
              marginTop: 36,
              fontSize: 26,
              fontStyle: 'italic',
              color: 'var(--brass)',
              maxWidth: 700,
            }}
          >
            “The cellar I was looking for was already there. I just had to learn to dive to it.”
          </p>
        </div>
      </div>
    </div>
  )
}
