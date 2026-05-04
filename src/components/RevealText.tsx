import { useEffect, useRef, useState } from 'react'
import type { ElementType, CSSProperties } from 'react'

type Props = {
  children: string
  as?: ElementType
  className?: string
  /** Delay between each word, in seconds. */
  stagger?: number
  /** Extra delay before the first word, in seconds. */
  delay?: number
}

/**
 * Editorial word-by-word reveal: each word slides up from below and fades in
 * with a small stagger, when the element first scrolls into view.
 */
export default function RevealText({
  children,
  as: Tag = 'span',
  className = '',
  stagger = 0.06,
  delay = 0,
}: Props) {
  const ref = useRef<HTMLElement>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    if (!ref.current) return
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            setVisible(true)
            observer.disconnect()
          }
        })
      },
      { threshold: 0.25, rootMargin: '0px 0px -80px 0px' }
    )
    observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  const words = children.split(' ')

  return (
    <Tag ref={ref} className={className}>
      {words.map((word, i) => {
        const innerStyle: CSSProperties = {
          display: 'inline-block',
          transform: visible ? 'translateY(0)' : 'translateY(110%)',
          opacity: visible ? 1 : 0,
          transition: `transform 1s cubic-bezier(0.22, 1, 0.36, 1) ${delay + i * stagger}s, opacity 1s ease ${delay + i * stagger}s`,
          willChange: 'transform, opacity',
        }
        return (
          <span
            key={i}
            style={{ display: 'inline-block', overflow: 'hidden', verticalAlign: 'top' }}
          >
            <span style={innerStyle}>
              {word}
              {i < words.length - 1 ? ' ' : ''}
            </span>
          </span>
        )
      })}
    </Tag>
  )
}
