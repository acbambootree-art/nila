import { useRef } from 'react'
import { Bubbles, Chrome, useIsActive } from '../components/Primitives'

type Props = { idx: number; total: number; bubbles: boolean }

const items = [
  { name: 'Gin', italian: 'Botanical', price: '$198', img: '/deck/bottle-gin.png' },
  { name: 'Blanc', italian: 'White Wine', price: '$248', img: '/deck/bottle-white.png' },
  { name: 'Rouge', italian: 'Red Wine', price: '$268', img: '/deck/bottle-red.png' },
  { name: 'Brut', italian: 'Champagne', price: '$348', img: '/deck/bottle-champagne.png' },
]

export default function SlideCollection({ idx, total, bubbles }: Props) {
  const ref = useRef<HTMLDivElement>(null)
  const active = useIsActive(ref)
  return (
    <div ref={ref} style={{ position: 'absolute', inset: 0 }}>
      <Chrome index={idx} total={total} label="The Collection" />
      <Bubbles count={8} enabled={bubbles} />

      <div className="slide-pad">
        <div className="fade-up mono" style={{ fontSize: 16, color: 'var(--brass)', marginBottom: 32 }}>
          Inaugural Release — 2026
        </div>
        <h1
          className="fade-up d1"
          style={{
            fontSize: 100,
            lineHeight: 1,
            fontWeight: 300,
            letterSpacing: '-0.02em',
            marginBottom: 24,
            color: 'var(--foam)',
          }}
        >
          Four bottles, <span className="serif-italic" style={{ color: 'var(--brass)' }}>one ocean.</span>
        </h1>
        <p
          className="fade-up d2"
          style={{
            fontSize: 26,
            color: 'var(--foam-dim)',
            fontWeight: 300,
            marginBottom: 70,
            maxWidth: 1000,
          }}
        >
          Each varietal aged for a minimum of six months at fifteen metres.
        </p>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 48, flex: 1 }}>
          {items.map((it, i) => (
            <div
              key={i}
              style={{
                opacity: active ? 1 : 0,
                transform: active ? 'translateY(0)' : 'translateY(30px)',
                transition: `opacity 0.7s ${0.4 + i * 0.2}s, transform 0.7s ${0.4 + i * 0.2}s`,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
              }}
            >
              <BottlePhoto src={it.img} />
              <div
                className="mono"
                style={{ fontSize: 12, color: 'var(--brass-dim)', marginTop: 24, marginBottom: 6 }}
              >
                NO. 0{i + 1}
              </div>
              <div style={{ fontSize: 44, color: 'var(--foam)', fontStyle: 'italic', fontWeight: 300 }}>
                {it.name}
              </div>
              <div style={{ fontSize: 18, color: 'var(--foam-dim)', marginTop: 4, marginBottom: 24 }}>
                {it.italian}
              </div>
              <div
                style={{
                  paddingTop: 20,
                  borderTop: '1px solid var(--brass-dim)',
                  width: 80,
                  textAlign: 'center',
                  fontSize: 22,
                  color: 'var(--brass)',
                  fontVariantNumeric: 'tabular-nums',
                }}
              >
                from {it.price}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

function BottlePhoto({ src }: { src: string }) {
  return (
    <div
      style={{
        width: 240,
        height: 380,
        display: 'flex',
        alignItems: 'flex-end',
        justifyContent: 'center',
        filter: 'drop-shadow(0 40px 50px rgba(0,0,0,0.7))',
      }}
    >
      <img
        src={src}
        style={{
          maxWidth: '100%',
          maxHeight: '100%',
          objectFit: 'contain',
        }}
      />
    </div>
  )
}
