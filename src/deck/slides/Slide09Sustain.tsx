import { useRef } from 'react'
import { Bubbles, Chrome, Counter, useIsActive } from '../components/Primitives'

type Props = { idx: number; total: number; bubbles: boolean }

export default function SlideSustain({ idx, total, bubbles }: Props) {
  const ref = useRef<HTMLDivElement>(null)
  const active = useIsActive(ref)
  return (
    <div
      ref={ref}
      style={{
        position: 'absolute',
        inset: 0,
        background: 'linear-gradient(180deg, #0a2230 0%, #1a4a5e 100%)',
      }}
    >
      <Chrome index={idx} total={total} label="Chapter VII — Sustainability" />
      <Bubbles count={16} enabled={bubbles} />

      <div className="slide-pad" style={{ flexDirection: 'row', gap: 100 }}>
        <div style={{ flex: 1.1, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
          <div className="fade-up mono" style={{ fontSize: 16, color: 'var(--brass)', marginBottom: 32 }}>
            Chapter Seven
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
            A cellar that<br />
            <span className="serif-italic" style={{ color: 'var(--brass)' }}>cleans itself.</span>
          </h1>
          <div className="hairline fade-up d2" style={{ marginBottom: 36 }} />
          <p
            className="fade-up d2"
            style={{
              fontSize: 28,
              lineHeight: 1.55,
              fontWeight: 300,
              color: 'var(--foam)',
              maxWidth: 700,
            }}
          >
            Each cradle becomes a small reef. Coral, oysters, and barnacles colonise the steel — filtering water,
            sheltering juvenile fish, and pulling carbon out of the column.
          </p>
          <p
            className="fade-up d3"
            style={{
              marginTop: 28,
              fontSize: 24,
              lineHeight: 1.55,
              fontWeight: 300,
              color: 'var(--foam-dim)',
              maxWidth: 700,
              fontStyle: 'italic',
            }}
          >
            Our cellar is run in partnership with the Sisters' Islands Marine Park. We pay rent in oxygen.
          </p>
        </div>

        {/* Stats column */}
        <div
          style={{
            flex: 0.9,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            gap: 56,
          }}
        >
          <BigStat
            active={active}
            delay={0.6}
            value={1200}
            label="litres of water filtered per cradle, per day"
          />
          <BigStat active={active} delay={1.0} value={42} label="marine species observed at the site" />
          <BigStat
            active={active}
            delay={1.4}
            value={0}
            label="emissions from cooling — the ocean is our refrigerator"
          />
        </div>
      </div>

      {/* Coral silhouettes */}
      <svg
        style={{ position: 'absolute', bottom: 0, left: 0, width: '40%', height: 300, opacity: 0.35 }}
        viewBox="0 0 600 300"
      >
        <g style={{ animation: 'coral-sway 6s ease-in-out infinite', transformOrigin: '300px 300px' }}>
          <path
            d="M150 300 Q150 200 130 150 Q120 130 110 150 M150 300 Q150 220 170 180 Q180 160 190 175 M150 300 Q140 240 120 220 M150 300 Q160 250 175 235"
            fill="none"
            stroke="#7a1f2b"
            strokeWidth="3"
            strokeLinecap="round"
            opacity="0.7"
          />
          <path
            d="M380 300 Q380 220 360 180 Q350 165 340 175 M380 300 Q380 230 400 200 Q415 180 425 195 M380 300 Q370 250 355 230 M380 300 Q390 260 410 240"
            fill="none"
            stroke="#c9a96a"
            strokeWidth="2"
            strokeLinecap="round"
            opacity="0.6"
          />
        </g>
      </svg>
    </div>
  )
}

function BigStat({
  active,
  delay = 0,
  value,
  label,
  suffix = '',
}: {
  active: boolean
  delay?: number
  value: number
  label: string
  suffix?: string
}) {
  return (
    <div
      style={{
        opacity: active ? 1 : 0,
        transform: active ? 'translateX(0)' : 'translateX(40px)',
        transition: `opacity 0.8s ${delay}s, transform 0.8s ${delay}s`,
        borderLeft: '1px solid var(--brass)',
        paddingLeft: 40,
      }}
    >
      <div
        style={{
          fontSize: 130,
          fontWeight: 300,
          color: 'var(--foam)',
          lineHeight: 1,
          fontVariantNumeric: 'tabular-nums',
          letterSpacing: '-0.03em',
        }}
      >
        <Counter
          to={value}
          duration={1800}
          active={active}
          format={(v) => Math.round(v).toLocaleString()}
        />
        {suffix}
      </div>
      <div
        style={{
          fontSize: 22,
          color: 'var(--foam-dim)',
          marginTop: 12,
          fontStyle: 'italic',
          fontWeight: 300,
          maxWidth: 460,
        }}
      >
        {label}
      </div>
    </div>
  )
}
