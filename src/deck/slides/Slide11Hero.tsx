import { useRef } from 'react'
import { Bubbles, Chrome, useIsActive } from '../components/Primitives'

type Props = { idx: number; total: number; bubbles: boolean }

export default function SlideHero({ idx, total, bubbles }: Props) {
  const ref = useRef<HTMLDivElement>(null)
  const active = useIsActive(ref)
  return (
    <div ref={ref} style={{ position: 'absolute', inset: 0, background: '#1a1410' }}>
      <Chrome index={idx} total={total} label="The Object" />
      <Bubbles count={8} enabled={bubbles} />

      <div style={{ position: 'absolute', inset: 0, display: 'flex' }}>
        {/* Image column */}
        <div
          className="fade-up"
          style={{
            width: '55%',
            position: 'relative',
            overflow: 'hidden',
            background: '#1a1410',
          }}
        >
          <img
            src="/deck/bottle-hero.jpg"
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              transform: active ? 'scale(1.05)' : 'scale(1.15)',
              transition: 'transform 8s ease-out',
              filter: 'brightness(0.95)',
            }}
          />
          <div
            style={{
              position: 'absolute',
              inset: 0,
              background: 'linear-gradient(90deg, transparent 60%, #06131c 100%)',
            }}
          />
        </div>

        {/* Text column */}
        <div
          style={{
            flex: 1,
            background: 'var(--abyss)',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            padding: '0 120px 0 80px',
          }}
        >
          <div
            className="fade-up d1 mono"
            style={{ fontSize: 14, color: 'var(--brass)', marginBottom: 32, letterSpacing: '0.4em' }}
          >
            EVERY BOTTLE — A ONE-OF-ONE
          </div>
          <h1
            className="fade-up d2"
            style={{
              fontSize: 92,
              lineHeight: 0.95,
              fontWeight: 300,
              letterSpacing: '-0.02em',
              marginBottom: 40,
              color: 'var(--foam)',
            }}
          >
            The label is<br />
            <span className="serif-italic" style={{ color: 'var(--brass)' }}>the ocean.</span>
          </h1>
          <p
            className="fade-up d3"
            style={{
              fontSize: 26,
              lineHeight: 1.6,
              fontWeight: 300,
              color: 'var(--foam-dim)',
              maxWidth: 520,
            }}
          >
            We do not paint the bottles. The sea does. After six months at depth, each one returns wearing a unique
            skin of barnacles, coral, and salt-bloom — a signature no two bottles share.
          </p>
          <div
            className="fade-up d4"
            style={{
              marginTop: 56,
              display: 'flex',
              gap: 48,
              paddingTop: 32,
              borderTop: '1px solid var(--brass-dim)',
            }}
          >
            <div>
              <div className="mono" style={{ fontSize: 12, color: 'var(--brass-dim)', marginBottom: 8 }}>
                FINISH
              </div>
              <div style={{ fontSize: 22, color: 'var(--foam)', fontStyle: 'italic' }}>Marine patina</div>
            </div>
            <div>
              <div className="mono" style={{ fontSize: 12, color: 'var(--brass-dim)', marginBottom: 8 }}>
                EDITION
              </div>
              <div style={{ fontSize: 22, color: 'var(--foam)', fontStyle: 'italic' }}>1 of 1, every time</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
