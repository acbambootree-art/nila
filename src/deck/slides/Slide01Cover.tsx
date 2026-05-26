import { useRef } from 'react'
import { Bubbles, Chrome, TYPE_SCALE, Waves, useIsActive } from '../components/Primitives'

type Props = { idx: number; total: number; waveSpeed: number; bubbles: boolean }

export default function SlideCover({ idx, total, waveSpeed, bubbles }: Props) {
  const ref = useRef<HTMLDivElement>(null)
  useIsActive(ref)
  return (
    <div ref={ref} style={{ position: 'absolute', inset: 0, background: '#000', overflow: 'hidden' }}>
      {/* Full-bleed cinematic video — crop watermark off bottom-right */}
      <div style={{ position: 'absolute', inset: 0, overflow: 'hidden' }}>
        <video
          src="/deck/bottle-video.mp4"
          autoPlay
          muted
          loop
          playsInline
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            minWidth: '108%',
            minHeight: '108%',
            width: 'auto',
            height: 'auto',
            transform: 'translate(-51%, -50%) scale(1.04)',
            objectFit: 'cover',
          }}
        />
      </div>

      {/* Cinematic grade — deepen blacks, push toward our palette */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background:
            'linear-gradient(180deg, rgba(6,19,28,0.35) 0%, rgba(6,19,28,0.15) 35%, rgba(6,19,28,0.55) 75%, rgba(6,19,28,0.92) 100%)',
          pointerEvents: 'none',
        }}
      />
      {/* Left vignette so the title reads */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background:
            'linear-gradient(90deg, rgba(6,19,28,0.85) 0%, rgba(6,19,28,0.55) 30%, rgba(6,19,28,0.1) 55%, transparent 75%)',
          pointerEvents: 'none',
        }}
      />
      {/* Brass color overlay — unifies with rest of deck */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: 'radial-gradient(ellipse at 70% 40%, rgba(201,169,106,0.12), transparent 60%)',
          mixBlendMode: 'overlay',
          pointerEvents: 'none',
        }}
      />

      <Chrome index={idx} total={total} label="Cover" coords="01°17'N  103°51'E" />
      <Bubbles count={18} enabled={bubbles} />

      {/* Bottom-edge wave silhouette */}
      <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: 180, opacity: 0.5, pointerEvents: 'none' }}>
        <Waves
          speed={waveSpeed}
          height="100%"
          palette={['rgba(6,19,28,0.4)', 'rgba(6,19,28,0.7)', 'rgba(6,19,28,0.95)']}
        />
      </div>

      {/* Title block */}
      <div className="slide-pad" style={{ justifyContent: 'center', paddingLeft: 140, position: 'relative', zIndex: 5 }}>
        <div
          className="fade-up"
          style={{
            fontFamily: 'JetBrains Mono',
            fontSize: 18,
            letterSpacing: '0.4em',
            color: 'var(--brass)',
            marginBottom: 40,
            textTransform: 'uppercase',
            textShadow: '0 2px 20px rgba(0,0,0,0.8)',
          }}
        >
          Singapore — Est. 2026
        </div>
        <h1
          className="fade-up d1"
          style={{
            fontSize: TYPE_SCALE.hero,
            lineHeight: 0.95,
            fontWeight: 300,
            letterSpacing: '-0.04em',
            color: 'var(--foam)',
            fontFamily: 'Cormorant Garamond',
            textShadow: '0 4px 60px rgba(0,0,0,0.7)',
          }}
        >
          Nila
        </h1>
        <div className="fade-up d2" style={{ marginTop: 32, display: 'flex', alignItems: 'center', gap: 24 }}>
          <div style={{ width: 80, height: 1, background: 'var(--brass)' }} />
          <span
            style={{
              fontSize: 36,
              fontStyle: 'italic',
              fontWeight: 300,
              color: 'var(--foam-dim)',
              letterSpacing: '0.02em',
              textShadow: '0 2px 20px rgba(0,0,0,0.8)',
            }}
          >
            Wine, aged by the sea.
          </span>
        </div>
        <div
          className="fade-up d3"
          style={{
            marginTop: 80,
            fontFamily: 'JetBrains Mono',
            fontSize: 14,
            color: 'var(--brass-dim)',
            letterSpacing: '0.3em',
            textShadow: '0 2px 20px rgba(0,0,0,0.8)',
          }}
        >
          A SEA-AGED VINTAGE  ·  CH. PHUA  ·  SINGAPORE FIRST
        </div>
      </div>
    </div>
  )
}
