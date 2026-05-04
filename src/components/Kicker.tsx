import type { ReactNode } from 'react'

type Variant = 'center' | 'start'

export default function Kicker({
  children,
  variant = 'center',
}: {
  children: ReactNode
  variant?: Variant
}) {
  return (
    <p
      className={`flex items-center gap-3 text-gold/70 text-[10px] md:text-[11px] tracking-[0.4em] uppercase font-light ${
        variant === 'center' ? 'justify-center' : 'justify-start'
      }`}
    >
      <span className="text-gold/40 text-[8px]">✦</span>
      <span className="h-px w-6 bg-gold/25" />
      <span>{children}</span>
      <span className="h-px w-6 bg-gold/25" />
      <span className="text-gold/40 text-[8px]">✦</span>
    </p>
  )
}
