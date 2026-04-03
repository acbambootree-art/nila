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
    <section id="process" className="relative py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Section header */}
        <div className="text-center mb-14 animate-on-scroll">
          <p className="text-gold/50 text-xs tracking-[0.3em] uppercase mb-3 font-light">The Craft</p>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-light text-white">
            From Shore to Sea
          </h2>
          <div className="gold-line w-16 mx-auto mt-6" />
        </div>

        {/* Image + steps grid */}
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-14 items-start">
          {/* Underwater crate image */}
          <div className="animate-on-scroll overflow-hidden">
            <img
              src="/assets/underwater-crate.jpg"
              alt="Bottles ageing on the ocean floor"
              className="w-full h-[320px] lg:h-full lg:max-h-[480px] object-cover"
            />
          </div>

          {/* Steps */}
          <div className="space-y-8">
            {steps.map((step, i) => (
              <div
                key={step.number}
                className={`animate-on-scroll animate-delay-${i + 1} flex gap-5 group`}
              >
                <span className="font-serif text-2xl text-gold/15 font-light shrink-0 w-8 group-hover:text-gold/30 transition-colors duration-500">
                  {step.number}
                </span>
                <div className="border-l border-white/[0.06] pl-5 group-hover:border-gold/20 transition-colors duration-500">
                  <h3 className="font-serif text-lg text-white/90 font-light tracking-wide mb-2">
                    {step.title}
                  </h3>
                  <p className="text-white/35 text-sm leading-relaxed font-light">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
