import { useEffect, useState } from 'react'

const WHATSAPP_URL = 'https://wa.me/6586993923'

/**
 * Floating WhatsApp action button. Fades in after the user has scrolled past
 * the hero, sits bottom-right above the fold, with a subtle gold ring.
 * Larger tap target on mobile, more compact on desktop.
 */
export default function FloatingWhatsApp() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const onScroll = () => {
      // Show once the user has scrolled past ~70% of the first viewport
      setVisible(window.scrollY > window.innerHeight * 0.7)
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Enquire on WhatsApp"
      className={`fixed z-40 bottom-5 right-5 sm:bottom-7 sm:right-7 transition-all duration-500 ${
        visible
          ? 'opacity-100 translate-y-0 pointer-events-auto'
          : 'opacity-0 translate-y-3 pointer-events-none'
      }`}
    >
      <span className="relative flex items-center justify-center w-14 h-14 sm:w-13 sm:h-13 rounded-full bg-[#0c0c0e] border border-gold/35 shadow-[0_8px_30px_rgba(0,0,0,0.6)] hover:border-gold/70 hover:bg-[#15151a] transition-all duration-300">
        {/* Pulse ring */}
        <span className="absolute inset-0 rounded-full border border-gold/30 animate-[ping_2.6s_ease-in-out_infinite] opacity-60" />
        {/* WhatsApp glyph in gold */}
        <svg
          viewBox="0 0 24 24"
          className="w-6 h-6 text-gold"
          fill="currentColor"
          aria-hidden="true"
        >
          <path d="M.057 24l1.687-6.163a11.867 11.867 0 0 1-1.587-5.946C.16 5.335 5.495 0 12.05 0a11.82 11.82 0 0 1 8.413 3.488 11.82 11.82 0 0 1 3.48 8.414c-.003 6.557-5.338 11.892-11.893 11.892a11.9 11.9 0 0 1-5.688-1.448L.057 24zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884a9.86 9.86 0 0 0 1.512 5.26l-.999 3.648 3.976-.607zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.149-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.625.712.227 1.36.195 1.872.118.571-.085 1.758-.719 2.006-1.413.247-.694.247-1.289.173-1.413z" />
        </svg>
      </span>
    </a>
  )
}
