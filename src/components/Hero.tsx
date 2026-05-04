import { useEffect, useState } from 'react'

export default function Hero() {
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setLoaded(true), 200)
    return () => clearTimeout(timer)
  }, [])

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Video background */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
        poster="/assets/bottle-ocean.jpeg"
      >
        <source src="/assets/hero-video.mp4" type="video/mp4" />
      </video>

      {/* Overlays */}
      <div className="absolute inset-0 bg-black/35" />
      <div className="absolute inset-0 bg-gradient-to-t from-black-deep/90 via-transparent to-black/20" />

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center px-6 text-center">
        {/* Top brand mark */}
        <div className={`transition-all duration-[1.2s] ease-out ${
          loaded ? 'opacity-100' : 'opacity-0'
        }`}>
          <span className="text-gold/60 text-[8px] tracking-[0.5em]">✦</span>
        </div>

        {/* Main wordmark */}
        <div className={`mt-6 transition-all duration-[1.8s] ease-out ${
          loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <h1 className="font-serif text-6xl md:text-8xl lg:text-9xl font-light tracking-[0.2em] text-white">
            NILA
          </h1>
        </div>

        {/* Kicker + tagline */}
        <div className={`mt-10 transition-all duration-[1.5s] delay-500 ease-out ${
          loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
        }`}>
          <p className="flex items-center justify-center gap-3 text-gold/60 text-[10px] tracking-[0.4em] uppercase font-light">
            <span className="text-gold/40 text-[8px]">✦</span>
            <span className="h-px w-6 bg-gold/25" />
            <span>Sea-Aged Wine &amp; Gin &mdash; Singapore</span>
            <span className="h-px w-6 bg-gold/25" />
            <span className="text-gold/40 text-[8px]">✦</span>
          </p>
          <p className="mt-7 font-serif italic text-xl md:text-2xl lg:text-3xl text-gold-light/90 tracking-[0.1em] font-light">
            Aged by the Sea. Refined by Time.
          </p>
        </div>

        {/* Discover */}
        <div className={`mt-16 transition-all duration-[1.5s] delay-1000 ease-out ${
          loaded ? 'opacity-100' : 'opacity-0'
        }`}>
          <a
            href="#story"
            className="inline-flex items-center gap-2 text-[10px] tracking-[0.4em] uppercase text-gold/50 hover:text-gold/80 transition-colors duration-300"
          >
            <span>Discover</span>
            <svg className="w-3 h-3 animate-bounce" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 9l-7 7-7-7" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  )
}
