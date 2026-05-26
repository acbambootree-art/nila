import { useRef } from 'react'
import { Bubbles, Chrome, useIsActive } from '../components/Primitives'

type Props = { idx: number; total: number; bubbles: boolean }

const months = [
  { m: 'M01', label: 'Lowered', note: 'First contact with seawater pressure.' },
  { m: 'M02', label: 'Settling', note: 'Glass cools. Sediment finds the bottom.' },
  { m: 'M03', label: 'Colonising', note: 'Barnacles & coral begin to bond to the bottle.' },
  { m: 'M04', label: 'Conversation', note: 'Tannins soften. Bubbles re-orient.' },
  { m: 'M05', label: 'Maturing', note: 'A second mineral note develops.' },
  { m: 'M06', label: 'Risen', note: 'Hauled, rinsed of brine, sealed for cellar.' },
]

export default function SlideMonths({ idx, total, bubbles }: Props) {
  const ref = useRef<HTMLDivElement>(null)
  const active = useIsActive(ref)
  return (
    <div ref={ref} style={{ position: 'absolute', inset: 0 }}>
      <Chrome index={idx} total={total} label="Chapter V — Time" />

      {/* Background video */}
      <video
        src="/deck/sea-bg.mp4"
        autoPlay
        loop
        muted
        playsInline
        style={{
          position: 'absolute',
          inset: 0,
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          opacity: 0.5,
          zIndex: 0,
        }}
      />
      {/* Dark overlay for legibility */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background:
            'linear-gradient(180deg, rgba(6,19,28,0.7) 0%, rgba(6,19,28,0.55) 50%, rgba(6,19,28,0.85) 100%)',
          zIndex: 1,
        }}
      />

      <Bubbles count={14} enabled={bubbles} />

      <div className="slide-pad" style={{ position: 'relative', zIndex: 2 }}>
        <div className="fade-up mono" style={{ fontSize: 16, color: 'var(--brass)', marginBottom: 32 }}>
          Chapter Five
        </div>
        <h1
          className="fade-up d1"
          style={{
            fontSize: 96,
            lineHeight: 1,
            fontWeight: 300,
            letterSpacing: '-0.02em',
            marginBottom: 24,
            color: 'var(--foam)',
          }}
        >
          Six months in the <span className="serif-italic" style={{ color: 'var(--brass)' }}>deep.</span>
        </h1>
        <p
          className="fade-up d2"
          style={{
            fontSize: 28,
            color: 'var(--foam-dim)',
            maxWidth: 1100,
            marginBottom: 80,
            fontWeight: 300,
          }}
        >
          The minimum stay. Some vintages remain twice as long.
        </p>

        <div
          className="fade-up d3"
          style={{
            position: 'relative',
            flex: 1,
            display: 'flex',
            alignItems: 'center',
          }}
        >
          {/* timeline rail */}
          <div
            style={{
              position: 'absolute',
              left: 0,
              right: 0,
              top: '50%',
              height: 1,
              background: 'var(--brass-dim)',
            }}
          />
          <div
            style={{
              position: 'absolute',
              left: 0,
              top: '50%',
              height: 1,
              background: 'var(--brass)',
              width: active ? '100%' : '0%',
              transition: 'width 3.5s ease-out',
              boxShadow: '0 0 12px rgba(201,169,106,0.6)',
            }}
          />

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(6, 1fr)', width: '100%', gap: 24 }}>
            {months.map((m, i) => (
              <div
                key={i}
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  opacity: active ? 1 : 0,
                  transform: active ? 'translateY(0)' : 'translateY(20px)',
                  transition: `opacity 0.6s ${0.3 + i * 0.4}s, transform 0.6s ${0.3 + i * 0.4}s`,
                }}
              >
                <div
                  style={{
                    height: 200,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'flex-end',
                  }}
                >
                  <div className="mono" style={{ fontSize: 12, color: 'var(--brass-dim)', marginBottom: 12 }}>
                    {m.m}
                  </div>
                  <div
                    style={{
                      fontSize: 32,
                      fontStyle: 'italic',
                      color: 'var(--foam)',
                      marginBottom: 16,
                      fontWeight: 300,
                    }}
                  >
                    {m.label}
                  </div>
                </div>
                <div
                  style={{
                    width: 18,
                    height: 18,
                    borderRadius: '50%',
                    background: i === 0 || i === 5 ? 'var(--claret-glow)' : 'var(--brass)',
                    boxShadow: '0 0 14px rgba(201,169,106,0.7)',
                    border: '2px solid var(--abyss)',
                  }}
                />
                <div style={{ height: 220, paddingTop: 28, textAlign: 'center' }}>
                  <p
                    style={{
                      fontSize: 18,
                      color: 'var(--foam-dim)',
                      maxWidth: 200,
                      lineHeight: 1.5,
                      fontWeight: 300,
                    }}
                  >
                    {m.note}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
