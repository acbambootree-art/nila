import Kicker from './Kicker'
import RevealText from './RevealText'

const steps = [
  {
    number: '01',
    title: 'Selection',
    description:
      'Exceptional wines and coastal botanicals sourced from Singapore\'s shores and the spice gardens of Southeast Asia.',
  },
  {
    number: '02',
    title: 'Encasement',
    description:
      'Sealed within engineered marine casings — designed to withstand pressure while allowing micro-oxygenation through the cork.',
  },
  {
    number: '03',
    title: 'Submersion',
    description:
      'Lowered to the seabed off Singapore\'s southern coast, where constant temperatures and gentle currents work their quiet alchemy.',
  },
  {
    number: '04',
    title: 'Recovery',
    description:
      'Carefully retrieved by hand after months submerged. The ocean\'s patina on the glass — a signature of its journey.',
  },
]

export default function Process() {
  return (
    <section id="process" className="relative py-28 lg:py-40">
      {/* Full-bleed video with overlay text */}
      <div className="relative w-full h-[380px] sm:h-[480px] lg:h-[620px] overflow-hidden animate-on-scroll">
        <video
          autoPlay
          muted
          loop
          playsInline
          poster="/assets/underwater-crate.jpg"
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/assets/sea.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-black-deep/60 via-black-deep/20 to-black-deep" />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
          <Kicker>The Craft</Kicker>
          <h2 className="mt-6 font-serif text-4xl md:text-6xl lg:text-7xl font-light text-white tracking-wide">
            <RevealText>From Shore to Sea</RevealText>
          </h2>
          <p className="mt-6 text-white/60 max-w-xl text-[14px] leading-relaxed font-light italic">
            Four chapters, one slow act of transformation.
          </p>
        </div>
      </div>

      {/* Steps row */}
      <div className="max-w-7xl mx-auto px-6 lg:px-12 mt-16 lg:mt-20">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
          {steps.map((step, i) => (
            <div
              key={step.number}
              className={`animate-on-scroll animate-delay-${i + 1}`}
            >
              <p className="font-serif text-gold/60 text-sm tracking-[0.3em] italic">N° {step.number}</p>
              <div className="editorial-rule w-10 mt-4 mb-5" />
              <h3 className="font-serif text-xl lg:text-2xl text-white font-light tracking-wide">
                {step.title}
              </h3>
              <p className="mt-4 text-white/50 text-[14px] leading-[1.8] font-light">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
