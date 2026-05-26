import { useRef } from 'react'
import { Bubbles, Chrome, Counter, Stat2, useIsActive } from '../components/Primitives'

type Props = { idx: number; total: number; bubbles: boolean }

export default function SlideDepth({ idx, total, bubbles }: Props) {
  const ref = useRef<HTMLDivElement>(null)
  const active = useIsActive(ref)
  return (
    <div
      ref={ref}
      style={{
        position: 'absolute',
        inset: 0,
        background: 'linear-gradient(180deg, #0a2230 0%, #06131c 60%, #020a10 100%)',
      }}
    >
      <Chrome index={idx} total={total} label="Chapter IV — Depth" />
      <Bubbles count={26} enabled={bubbles} />

      <div className="slide-pad" style={{ flexDirection: 'row', gap: 80 }}>
        {/* Depth gauge */}
        <div
          className="fade-up"
          style={{
            width: 280,
            position: 'relative',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            paddingTop: 60,
          }}
        >
          <div className="mono" style={{ fontSize: 13, color: 'var(--brass-dim)', marginBottom: 24 }}>
            DEPTH GAUGE
          </div>
          <div
            style={{
              position: 'relative',
              width: 100,
              height: 600,
              background: 'linear-gradient(180deg, rgba(244,237,224,0.08), rgba(244,237,224,0.02))',
              border: '1px solid var(--brass-dim)',
            }}
          >
            {[0, 5, 10, 15, 20].map((d) => (
              <div
                key={d}
                style={{
                  position: 'absolute',
                  left: -50,
                  right: -50,
                  top: `${(d / 20) * 100}%`,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  fontFamily: 'JetBrains Mono',
                  fontSize: 12,
                  color: d === 15 ? 'var(--claret-glow)' : 'var(--brass-dim)',
                  fontWeight: d === 15 ? 600 : 300,
                }}
              >
                <span>{d}m</span>
                <div
                  style={{
                    width: 30,
                    height: 1,
                    background: d === 15 ? 'var(--claret-glow)' : 'var(--brass-dim)',
                  }}
                />
              </div>
            ))}
            {/* fluid */}
            <div
              style={{
                position: 'absolute',
                left: 0,
                right: 0,
                top: 0,
                height: active ? '75%' : '0%',
                background: 'linear-gradient(180deg, rgba(122,31,43,0.5), rgba(168,48,64,0.7))',
                transition: 'height 3s cubic-bezier(0.6, 0.05, 0.3, 0.95)',
              }}
            />
            {/* bottle marker at 15m */}
            <div
              style={{
                position: 'absolute',
                left: '50%',
                top: '75%',
                transform: 'translate(-50%, -50%)',
                width: 16,
                height: 40,
                background: 'var(--claret)',
                borderRadius: '4px 4px 8px 8px',
                boxShadow: '0 0 20px rgba(168,48,64,0.8)',
                opacity: active ? 1 : 0,
                transition: 'opacity 1s 3s',
              }}
            />
          </div>
        </div>

        {/* Right text */}
        <div
          style={{
            flex: 1,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            paddingLeft: 80,
          }}
        >
          <div className="fade-up mono" style={{ fontSize: 16, color: 'var(--brass)', marginBottom: 32 }}>
            Chapter Four — Resting Place
          </div>
          <div style={{ display: 'flex', alignItems: 'baseline', gap: 24 }}>
            <h1
              className="fade-up d1"
              style={{
                fontSize: 320,
                lineHeight: 0.85,
                fontWeight: 300,
                letterSpacing: '-0.05em',
                color: 'var(--foam)',
                fontVariantNumeric: 'tabular-nums',
              }}
            >
              <Counter to={15} duration={2400} active={active} format={(v) => Math.round(v).toString()} />
            </h1>
            <span
              className="fade-up d2"
              style={{ fontSize: 80, color: 'var(--brass)', fontStyle: 'italic' }}
            >
              m
            </span>
          </div>
          <p
            className="fade-up d3"
            style={{
              fontSize: 36,
              lineHeight: 1.4,
              fontWeight: 300,
              color: 'var(--foam-dim)',
              maxWidth: 720,
              marginTop: 32,
            }}
          >
            Below the surface — past the wave-line, past the light — the bottles settle on a steel cradle. Cold. Dark.
            Constant.
          </p>
          <div
            className="fade-up d4"
            style={{
              marginTop: 48,
              display: 'flex',
              gap: 56,
              paddingTop: 32,
              borderTop: '1px solid var(--brass-dim)',
            }}
          >
            <Stat2 label="Pressure" value="2.5 atm" />
            <Stat2 label="Temperature" value="26 °C" />
            <Stat2 label="Light" value="None" />
            <Stat2 label="Motion" value="Tidal sway" />
          </div>
        </div>
      </div>
    </div>
  )
}
