import { useRef } from 'react'
import { Bubbles, Chrome, useIsActive } from '../components/Primitives'

type Props = { idx: number; total: number; bubbles: boolean }

const factors = [
  { glyph: '◐', title: 'Constant darkness', body: 'No UV. No light damage. Pigments stay alive.' },
  { glyph: '≈', title: 'Tidal micro-motion', body: 'A perpetual, gentle agitation — never violent, never still.' },
  { glyph: '⌬', title: 'Mineral-rich pressure', body: '2.5 atmospheres push molecules into tighter conversation.' },
  { glyph: '◯', title: 'Acoustic silence', body: 'No machinery, no traffic — only the slow knock of current on glass.' },
]

export default function SlideScience({ idx, total, bubbles }: Props) {
  const ref = useRef<HTMLDivElement>(null)
  const active = useIsActive(ref)
  return (
    <div ref={ref} style={{ position: 'absolute', inset: 0 }}>
      <Chrome index={idx} total={total} label="Chapter VI — Science" />
      <Bubbles count={10} enabled={bubbles} />

      <div className="slide-pad">
        <div className="fade-up mono" style={{ fontSize: 16, color: 'var(--brass)', marginBottom: 32 }}>
          Chapter Six
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
          What the sea <span className="serif-italic" style={{ color: 'var(--brass)' }}>gives back.</span>
        </h1>
        <p
          className="fade-up d2"
          style={{
            fontSize: 28,
            color: 'var(--foam-dim)',
            maxWidth: 1000,
            fontWeight: 300,
            marginBottom: 80,
          }}
        >
          Four conditions a cellar cannot copy.
        </p>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 56, flex: 1 }}>
          {factors.map((f, i) => (
            <div
              key={i}
              style={{
                borderLeft: '1px solid var(--brass-dim)',
                paddingLeft: 32,
                opacity: active ? 1 : 0,
                transform: active ? 'translateY(0)' : 'translateY(20px)',
                transition: `opacity 0.8s ${0.4 + i * 0.3}s, transform 0.8s ${0.4 + i * 0.3}s`,
              }}
            >
              <div style={{ fontSize: 80, color: 'var(--brass)', fontWeight: 300, marginBottom: 28, lineHeight: 1 }}>
                {f.glyph}
              </div>
              <div style={{ fontSize: 32, color: 'var(--foam)', marginBottom: 20, fontWeight: 400 }}>{f.title}</div>
              <p style={{ fontSize: 22, lineHeight: 1.55, color: 'var(--foam-dim)', fontWeight: 300 }}>{f.body}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
