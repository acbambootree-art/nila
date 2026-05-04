import Kicker from './Kicker'
import RevealText from './RevealText'
import MagneticButton from './MagneticButton'

export default function Contact() {
  return (
    <section id="contact" className="relative py-28 lg:py-40 bg-navy/15">
      <div className="max-w-3xl mx-auto px-6 lg:px-12 text-center">
        <div className="animate-on-scroll">
          <Kicker>Get in Touch</Kicker>
          <h2 className="mt-6 font-serif text-4xl md:text-5xl lg:text-6xl font-light text-white tracking-wide">
            <RevealText>Begin Your Journey</RevealText>
          </h2>
          <p className="mt-8 text-white/60 text-[15px] font-light leading-relaxed max-w-xl mx-auto">
            NILA is available through private allocation and select partners across Singapore and Southeast Asia.
          </p>
        </div>

        {/* Contact row */}
        <div className="mt-14 flex flex-col sm:flex-row items-center justify-center gap-7 sm:gap-10 animate-on-scroll animate-delay-1">
          <div>
            <p className="text-gold/50 text-[10px] tracking-[0.3em] uppercase mb-2">Email</p>
            <a href="mailto:hello@nilaspirits.com" className="text-white/70 hover:text-gold text-sm transition-colors duration-300 font-light tracking-wide">
              hello@nilaspirits.com
            </a>
          </div>
          <span className="hidden sm:inline text-gold/30 text-xs">✦</span>
          <div>
            <p className="text-gold/50 text-[10px] tracking-[0.3em] uppercase mb-2">Location</p>
            <p className="text-white/70 text-sm font-light tracking-wide">Singapore</p>
          </div>
          <span className="hidden sm:inline text-gold/30 text-xs">✦</span>
          <div className="flex gap-5 items-center pt-4 sm:pt-0">
            <a href="#" className="text-white/45 hover:text-gold transition-colors duration-300" aria-label="Instagram">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
              </svg>
            </a>
            <a href="#" className="text-white/45 hover:text-gold transition-colors duration-300" aria-label="Facebook">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
              </svg>
            </a>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-14 animate-on-scroll animate-delay-2">
          <MagneticButton
            href="https://wa.me/6586993923"
            target="_blank"
            rel="noopener noreferrer"
            className="group items-center gap-4 px-12 py-4 border border-gold/25 text-gold/85 text-[11px] tracking-[0.35em] uppercase font-light hover:bg-gold/5 hover:border-gold/50"
          >
            <span className="text-gold/40 text-[8px] group-hover:text-gold/70 transition-colors">✦</span>
            <span>Private Enquiry</span>
            <span className="text-gold/40 text-[8px] group-hover:text-gold/70 transition-colors">✦</span>
          </MagneticButton>
        </div>
      </div>
    </section>
  )
}
