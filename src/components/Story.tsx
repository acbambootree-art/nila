import Kicker from './Kicker'
import RevealText from './RevealText'

export default function Story() {
  return (
    <section id="story" className="relative py-28 lg:py-40">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Editorial asymmetric grid */}
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-14">
          {/* LEFT — tall hero image + secondary image/stats */}
          <div className="lg:col-span-7 space-y-6 lg:space-y-8">
            <div className="animate-on-scroll overflow-hidden">
              <img
                src="/assets/island-overview.jpg"
                alt="Golden sunset over NILA's island waters"
                className="w-full h-[280px] sm:h-[360px] lg:h-[520px] object-cover kenburns"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-8 items-center">
              <div className="animate-on-scroll animate-delay-1 overflow-hidden">
                <img
                  src="/assets/barrel-coast.jpeg"
                  alt="Sea-aged barrel on a tropical island coastline"
                  className="w-full h-[220px] lg:h-[260px] object-cover kenburns"
                  style={{ animationDelay: '-8s' }}
                />
              </div>

              <div className="animate-on-scroll animate-delay-2 flex items-start gap-6 sm:gap-8 sm:pl-2">
                {[
                  { value: '6', unit: 'Months' },
                  { value: '15m', unit: 'Depth' },
                  { value: '24°C', unit: 'Temp' },
                ].map((stat) => (
                  <div key={stat.unit}>
                    <p className="font-serif text-4xl lg:text-5xl text-gold font-light">{stat.value}</p>
                    <p className="text-white/35 text-[10px] tracking-[0.3em] uppercase mt-2">{stat.unit}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* RIGHT — editorial prose */}
          <div className="lg:col-span-5 lg:pt-8 animate-on-scroll animate-delay-1">
            <div className="lg:sticky lg:top-32">
              <div className="lg:flex lg:justify-start">
                <Kicker variant="start">Our Heritage</Kicker>
              </div>

              <h2 className="mt-6 font-serif text-4xl md:text-5xl lg:text-6xl font-light text-white leading-[1.1] tracking-wide">
                <RevealText>Born of Sea</RevealText>
                <br />
                <RevealText delay={0.18}>&amp; Spirit</RevealText>
              </h2>

              <div className="editorial-rule w-24 mt-8 mb-8" />

              <p className="text-white/65 leading-[1.9] font-light text-[15px]">
                In the waters surrounding Singapore — where ancient maritime trade routes once connected civilisations — we discovered something extraordinary. The ocean, with its constant motion, pressure, and mineral-rich embrace, transforms spirits in ways no cellar ever could.
              </p>

              <p className="mt-5 text-white/65 leading-[1.9] font-light text-[15px]">
                NILA draws its name from the deep indigo waters of the Malay Archipelago. Each bottle is submerged beneath the waves, where the sea's gentle currents coax out flavour profiles impossible to replicate on land.
              </p>

              <p className="mt-5 text-white/50 leading-[1.9] font-light italic text-[14px]">
                A collection of wines and gins of remarkable depth — spirits that carry the memory of the ocean in every sip.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
