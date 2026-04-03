export default function Story() {
  return (
    <section id="story" className="relative py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Section label */}
        <div className="text-center mb-14 animate-on-scroll">
          <p className="text-gold/50 text-xs tracking-[0.3em] uppercase mb-3 font-light">Our Heritage</p>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-light text-white">
            Born of Sea & Spirit
          </h2>
          <div className="gold-line w-16 mx-auto mt-6" />
        </div>

        {/* Two images side by side */}
        <div className="animate-on-scroll mb-14 grid md:grid-cols-2 gap-4">
          <div className="overflow-hidden">
            <img
              src="/assets/bottle-ocean.jpeg"
              alt="A bottle submerged in the ocean"
              className="w-full h-[260px] md:h-[340px] object-cover hover:scale-[1.02] transition-transform duration-700"
            />
          </div>
          <div className="overflow-hidden">
            <img
              src="/assets/barrel-coast.jpeg"
              alt="Sea-aged barrel on a dramatic coastline at sunset"
              className="w-full h-[260px] md:h-[340px] object-cover hover:scale-[1.02] transition-transform duration-700"
            />
          </div>
        </div>

        {/* Two-column text + stats */}
        <div className="grid md:grid-cols-2 gap-10 lg:gap-16">
          <div className="space-y-5 animate-on-scroll">
            <p className="text-white/60 leading-[1.85] font-light text-[15px]">
              In the waters surrounding Singapore — where ancient maritime trade routes once connected civilisations — we discovered something extraordinary. The ocean, with its constant motion, pressure, and mineral-rich embrace, transforms spirits in ways no cellar ever could.
            </p>
            <p className="text-white/60 leading-[1.85] font-light text-[15px]">
              NILA draws its name from the deep indigo waters of the Malay Archipelago. Each bottle is submerged beneath the waves, where the sea's gentle currents coax out flavour profiles impossible to replicate on land.
            </p>
          </div>

          <div className="space-y-5 animate-on-scroll animate-delay-1">
            <p className="text-white/60 leading-[1.85] font-light text-[15px]">
              The result is a collection of wines and gins of remarkable depth — spirits that carry the memory of the ocean in every sip.
            </p>

            {/* Stats row */}
            <div className="pt-4 flex items-start gap-8 md:gap-10">
              {[
                { value: '12', unit: 'Months Submerged' },
                { value: '30m', unit: 'Depth Below' },
                { value: '24°C', unit: 'Ocean Temp' },
              ].map((stat) => (
                <div key={stat.unit}>
                  <p className="font-serif text-3xl text-gold/80 font-light">{stat.value}</p>
                  <p className="text-white/30 text-[10px] tracking-[0.2em] uppercase mt-1">{stat.unit}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
