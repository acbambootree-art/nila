import { useState, useEffect } from 'react'

const leftLinks = [
  { label: 'Our Story', href: '#story' },
  { label: 'The Process', href: '#process' },
]

const rightLinks = [
  { label: 'Collection', href: '#collection' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const linkClass =
    'text-[11px] tracking-[0.35em] uppercase text-white/55 hover:text-gold transition-colors duration-300 font-light'

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-black-deep/85 backdrop-blur-xl border-b border-gold/10'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12 h-20 grid grid-cols-[1fr_auto_1fr] items-center">
        {/* Left nav */}
        <div className="hidden md:flex items-center gap-10">
          {leftLinks.map((link) => (
            <a key={link.href} href={link.href} className={linkClass}>
              {link.label}
            </a>
          ))}
        </div>

        {/* Mobile left spacer */}
        <div className="md:hidden" />

        {/* Centered wordmark */}
        <a
          href="#"
          className="justify-self-center font-serif text-xl tracking-[0.45em] text-gold font-medium hover:text-gold-light transition-colors duration-300"
        >
          NILA
        </a>

        {/* Right nav */}
        <div className="hidden md:flex items-center gap-10 justify-self-end">
          {rightLinks.map((link) => (
            <a key={link.href} href={link.href} className={linkClass}>
              {link.label}
            </a>
          ))}
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden justify-self-end flex flex-col gap-1.5 p-2"
          aria-label="Toggle menu"
        >
          <span className={`block w-6 h-px bg-gold transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-[3.5px]' : ''}`} />
          <span className={`block w-6 h-px bg-gold transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`} />
          <span className={`block w-6 h-px bg-gold transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-[3.5px]' : ''}`} />
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-500 ${
          menuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        } bg-black-deep/95 backdrop-blur-xl`}
      >
        <div className="px-6 py-6 flex flex-col gap-6 items-center">
          {[...leftLinks, ...rightLinks].map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className={linkClass}
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  )
}
