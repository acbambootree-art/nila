import { useEffect, useRef, useState } from 'react'

const TRACK = '/audio/nila-theme.mp3'
const VOLUME = 0.5
const GOLD = 'rgba(201, 169, 110, 0.9)'

/**
 * Full-screen "Enter" page. Browsers only allow sound after a click, so the
 * visitor's click on Enter is what starts the music. Also doubles as the
 * legal-drinking-age confirmation. After entry, a small sound toggle stays
 * bottom-left. Inline styles so it works in both the site and the deck.
 */
export default function EnterGate() {
  const audio = useRef<HTMLAudioElement | null>(null)
  const [entered, setEntered] = useState(false)
  const [gone, setGone] = useState(false)
  const [playing, setPlaying] = useState(false)

  const fadeTo = (target: number) => {
    const a = audio.current
    if (!a) return
    const step = () => {
      const d = target - a.volume
      if (Math.abs(d) < 0.02) {
        a.volume = target
        if (target === 0) a.pause()
        return
      }
      a.volume = Math.min(1, Math.max(0, a.volume + Math.sign(d) * 0.02))
      requestAnimationFrame(step)
    }
    step()
  }

  const play = () => {
    const a = audio.current
    if (!a) return
    a.volume = 0
    a.play().then(() => { setPlaying(true); fadeTo(VOLUME) }).catch(() => setPlaying(false))
  }

  const enter = () => {
    if (entered) return
    setEntered(true)
    play()
    setTimeout(() => setGone(true), 1200)
  }

  const toggle = () => {
    if (playing) { setPlaying(false); fadeTo(0) } else play()
  }

  // Enter/Space also enters; capture phase so the deck's key handlers don't move slides first
  useEffect(() => {
    if (entered) return
    const onKey = (e: KeyboardEvent) => {
      e.stopPropagation()
      if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); enter() }
    }
    window.addEventListener('keydown', onKey, true)
    return () => window.removeEventListener('keydown', onKey, true)
  })

  // Lock scroll until entered
  useEffect(() => {
    if (entered) return
    const prev = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => { document.body.style.overflow = prev }
  }, [entered])

  // Pause when the tab is hidden, resume when back (only if the visitor had it on)
  useEffect(() => {
    const onVis = () => {
      const a = audio.current
      if (!a || !playing) return
      if (document.hidden) a.pause()
      else a.play().catch(() => {})
    }
    document.addEventListener('visibilitychange', onVis)
    return () => document.removeEventListener('visibilitychange', onVis)
  }, [playing])

  return (
    <>
      <audio ref={audio} src={TRACK} loop preload="auto" />

      {!gone && (
        <div
          role="dialog"
          aria-label="Enter NILA"
          style={{
            position: 'fixed', inset: 0, zIndex: 1000,
            display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
            background: '#0c0c0e', color: GOLD, textAlign: 'center', padding: 24,
            opacity: entered ? 0 : 1,
            transition: 'opacity 1.2s cubic-bezier(0.22, 1, 0.36, 1)',
            pointerEvents: entered ? 'none' : 'auto',
            fontFamily: '"Cormorant Garamond", Georgia, serif',
          }}
        >
          <span style={{ fontSize: 28, animation: 'nilaGlow 3s ease-in-out infinite' }}>✦</span>
          <span style={{ marginTop: 28, fontSize: 40, letterSpacing: '0.5em', paddingLeft: '0.5em', fontWeight: 300 }}>
            NILA
          </span>
          <span style={{ marginTop: 14, fontSize: 15, fontStyle: 'italic', color: 'rgba(244, 237, 224, 0.55)' }}>
            Aged by the sea. Refined by time.
          </span>

          <button
            onClick={enter}
            autoFocus
            style={{
              marginTop: 56, padding: '14px 44px', background: 'transparent', cursor: 'pointer',
              border: '1px solid rgba(201, 169, 110, 0.6)', color: GOLD,
              fontFamily: 'Inter, system-ui, sans-serif', fontSize: 11, letterSpacing: '0.4em',
              paddingLeft: 'calc(44px + 0.4em)',
            }}
          >
            ENTER
          </button>

          <span style={{ marginTop: 28, maxWidth: 320, fontFamily: 'Inter, system-ui, sans-serif', fontSize: 10, letterSpacing: '0.15em', lineHeight: 1.8, color: 'rgba(244, 237, 224, 0.35)' }}>
            BY ENTERING YOU CONFIRM YOU ARE OF LEGAL DRINKING AGE. BEST WITH SOUND ON.
          </span>
          <style>{'@keyframes nilaGlow{0%,100%{opacity:.5}50%{opacity:1}}'}</style>
        </div>
      )}

      {gone && (
        <button
          onClick={toggle}
          aria-label={playing ? 'Mute music' : 'Play music'}
          title={playing ? 'Sound off' : 'Sound on'}
          style={{
            position: 'fixed', left: 20, bottom: 20, zIndex: 900,
            width: 40, height: 40, borderRadius: 999, cursor: 'pointer',
            background: 'rgba(12, 12, 14, 0.6)', border: '1px solid rgba(201, 169, 110, 0.45)',
            display: 'flex', alignItems: 'flex-end', justifyContent: 'center', gap: 3, padding: '0 0 13px',
            backdropFilter: 'blur(6px)',
          }}
        >
          {[0, 1, 2, 3].map((i) => (
            <span
              key={i}
              style={{
                width: 2, height: 12, background: GOLD, transformOrigin: 'bottom',
                transform: playing ? undefined : 'scaleY(0.2)',
                animation: playing ? `nilaBar 1s ${i * 0.15}s ease-in-out infinite alternate` : 'none',
              }}
            />
          ))}
          <style>{'@keyframes nilaBar{from{transform:scaleY(.25)}to{transform:scaleY(1)}}'}</style>
        </button>
      )}
    </>
  )
}
