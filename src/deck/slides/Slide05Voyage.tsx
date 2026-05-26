import { useEffect, useRef, useState, type ReactNode } from 'react'
import { Bubbles, Chrome, Stat, useIsActive } from '../components/Primitives'

type Props = { idx: number; total: number; bubbles: boolean }

export default function SlideVoyage({ idx, total, bubbles }: Props) {
  const ref = useRef<HTMLDivElement>(null)
  const active = useIsActive(ref)
  return (
    <div ref={ref} style={{ position: 'absolute', inset: 0 }}>
      <Chrome index={idx} total={total} label="Chapter III — The Cellar" coords="01°24'N  103°57'E" />
      <Bubbles count={10} enabled={bubbles} />

      <div className="slide-pad" style={{ flexDirection: 'row', gap: 80 }}>
        <div style={{ flex: 0.85, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
          <div className="fade-up mono" style={{ fontSize: 16, color: 'var(--brass)', marginBottom: 32 }}>
            Chapter Three
          </div>
          <h1
            className="fade-up d1"
            style={{
              fontSize: 100,
              lineHeight: 0.95,
              fontWeight: 300,
              letterSpacing: '-0.02em',
              marginBottom: 48,
              color: 'var(--foam)',
            }}
          >
            Our cellar is<br />
            an <span className="serif-italic" style={{ color: 'var(--brass)' }}>island.</span>
          </h1>
          <div className="hairline fade-up d2" style={{ marginBottom: 36 }} />
          <p
            className="fade-up d2"
            style={{
              fontSize: 28,
              lineHeight: 1.6,
              fontWeight: 300,
              color: 'var(--foam-dim)',
              maxWidth: 580,
            }}
          >
            Off the eastern coast of Pulau Ubin, where the strait holds quiet between mainland Singapore and Malaysia,
            our cradles rest in fifteen metres of water — lowered by hand, by a six-person dive crew, every season.
          </p>

          <div className="fade-up d3" style={{ marginTop: 56, display: 'flex', gap: 48 }}>
            <Stat label="Site" value="Pulau Ubin" />
            <Stat label="Depth" value="15 metres" />
            <Stat label="Crew" value="Six divers" />
          </div>
        </div>

        <div className="fade-up d2" style={{ flex: 1.15, position: 'relative' }}>
          <UbinMap active={active} />
        </div>
      </div>
    </div>
  )
}

function UbinMap({ active }: { active: boolean }) {
  // X location on the natural map image (in % of natural dimensions).
  // Values landed by the user in the design chat (final iteration).
  const X_LEFT = 67.8
  const X_TOP = 55

  return (
    <div
      style={{
        position: 'relative',
        width: '100%',
        height: '100%',
        minHeight: 700,
        boxShadow: '0 30px 80px rgba(0,0,0,0.5), 0 0 0 1px var(--brass-dim)',
        overflow: 'hidden',
        background: '#0a2230',
      }}
    >
      {/* Inner image-fitter — uses background-size: contain so % coords map to natural image */}
      <div style={{ position: 'absolute', inset: 0 }}>
        <div
          style={{
            position: 'absolute',
            inset: 0,
            backgroundImage: 'url(/deck/map-pulau-ubin.png)',
            backgroundSize: 'contain',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            transform: active ? 'scale(1.0)' : 'scale(1.04)',
            transition: 'transform 6s ease-out',
          }}
        />
        <ImageOverlay naturalRatio={1536 / 1024}>
          <div
            style={{
              position: 'absolute',
              left: `${X_LEFT}%`,
              top: `${X_TOP}%`,
              transform: 'translate(-50%, -50%)',
              opacity: active ? 1 : 0,
              transition: 'opacity 1.2s 0.8s',
              pointerEvents: 'none',
            }}
          >
            <div
              style={{
                position: 'absolute',
                left: '50%',
                top: '50%',
                transform: 'translate(-50%, -50%)',
                width: 80,
                height: 80,
                borderRadius: '50%',
                border: '1px solid #a83040',
                animation: 'pulse 2s ease-in-out infinite',
              }}
            />
            <div
              style={{
                position: 'absolute',
                left: '50%',
                top: '50%',
                transform: 'translate(-50%, -50%)',
                width: 50,
                height: 50,
                borderRadius: '50%',
                border: '1px solid #a83040',
                opacity: 0.6,
              }}
            />
            <div
              style={{
                position: 'absolute',
                left: '50%',
                top: '50%',
                transform: 'translate(-50%, -50%)',
                width: 14,
                height: 14,
                borderRadius: '50%',
                background: '#a83040',
                boxShadow: '0 0 16px #a83040',
              }}
            />
            <div
              style={{
                position: 'absolute',
                left: 50,
                top: -10,
                fontFamily: 'JetBrains Mono',
                fontSize: 11,
                color: '#f4ede0',
                letterSpacing: '0.25em',
                background: 'rgba(6,19,28,0.85)',
                padding: '6px 12px',
                border: '1px solid #c9a96a',
                whiteSpace: 'nowrap',
              }}
            >
              NILA CELLAR · 15M
            </div>
          </div>
        </ImageOverlay>
      </div>

      {/* corner registration marks */}
      <div
        style={{
          position: 'absolute',
          top: 14,
          left: 14,
          width: 18,
          height: 18,
          borderTop: '1px solid var(--brass)',
          borderLeft: '1px solid var(--brass)',
          opacity: 0.8,
        }}
      />
      <div
        style={{
          position: 'absolute',
          top: 14,
          right: 14,
          width: 18,
          height: 18,
          borderTop: '1px solid var(--brass)',
          borderRight: '1px solid var(--brass)',
          opacity: 0.8,
        }}
      />
      <div
        style={{
          position: 'absolute',
          bottom: 14,
          left: 14,
          width: 18,
          height: 18,
          borderBottom: '1px solid var(--brass)',
          borderLeft: '1px solid var(--brass)',
          opacity: 0.8,
        }}
      />
      <div
        style={{
          position: 'absolute',
          bottom: 14,
          right: 14,
          width: 18,
          height: 18,
          borderBottom: '1px solid var(--brass)',
          borderRight: '1px solid var(--brass)',
          opacity: 0.8,
        }}
      />

      {/* Caption */}
      <div
        style={{
          position: 'absolute',
          bottom: 30,
          left: 30,
          right: 30,
          fontFamily: 'JetBrains Mono',
          fontSize: 11,
          color: '#f4ede0',
          letterSpacing: '0.3em',
          display: 'flex',
          justifyContent: 'space-between',
          textShadow: '0 2px 8px rgba(0,0,0,0.9)',
          zIndex: 5,
        }}
      >
        <span>PULAU UBIN · SINGAPORE</span>
        <span>01°24'N · 103°57'E</span>
      </div>
    </div>
  )
}

// Wraps children in a box that matches the displayed bounds of an
// object-fit: contain image, so % coords inside align with the image.
function ImageOverlay({ naturalRatio, children }: { naturalRatio: number; children: ReactNode }) {
  const ref = useRef<HTMLDivElement>(null)
  const [box, setBox] = useState<{ w: number; h: number; l: number; t: number } | null>(null)
  useEffect(() => {
    const calc = () => {
      const el = ref.current
      if (!el) return
      const cw = el.clientWidth
      const ch = el.clientHeight
      const cr = cw / ch
      let w: number, h: number, l: number, t: number
      if (naturalRatio > cr) {
        w = cw
        h = cw / naturalRatio
        l = 0
        t = (ch - h) / 2
      } else {
        h = ch
        w = ch * naturalRatio
        t = 0
        l = (cw - w) / 2
      }
      setBox({ w, h, l, t })
    }
    calc()
    const ro = new ResizeObserver(calc)
    if (ref.current) ro.observe(ref.current)
    return () => ro.disconnect()
  }, [naturalRatio])
  return (
    <div ref={ref} style={{ position: 'absolute', inset: 0 }}>
      {box && (
        <div
          style={{
            position: 'absolute',
            left: box.l,
            top: box.t,
            width: box.w,
            height: box.h,
          }}
        >
          {children}
        </div>
      )}
    </div>
  )
}
