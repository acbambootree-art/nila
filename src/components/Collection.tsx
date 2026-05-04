import Kicker from './Kicker'
import RevealText from './RevealText'

const products = [
  {
    name: 'NILA Reserve',
    type: 'Sea-Aged Red Wine',
    description:
      'A bold, full-bodied red aged six months beneath the South China Sea. Notes of dark cherry, sea salt, and ancient wood — a bottle that carries the pressure and patience of the deep.',
    details: '750ml · 14.5% ABV',
    image: '/assets/wine-reserve.jpg',
    number: 'N° 01',
  },
  {
    name: 'NILA Blanc',
    type: 'Sea-Aged White Wine',
    description:
      'Crisp and luminous, with the ocean\'s mineral kiss. Honeyed citrus, white flowers, and a finish that lingers like a warm tide.',
    details: '750ml · 12.5% ABV',
    image: '/assets/wine-blanc.png',
    number: 'N° 02',
  },
  {
    name: 'NILA Maritime Gin',
    type: 'Sea-Aged Botanical Gin',
    description:
      'Juniper and coastal botanicals, deepened by months at sea. Samphire, yuzu, and a whisper of brine that speaks of its origins.',
    details: '700ml · 43% ABV',
    image: '/assets/gin-botanical.jpg',
    number: 'N° 03',
  },
]

export default function Collection() {
  return (
    <section id="collection" className="relative py-28 lg:py-40 bg-navy/15">
      <div className="relative max-w-7xl mx-auto px-6 lg:px-12">
        {/* Section header */}
        <div className="text-center mb-20 lg:mb-28 animate-on-scroll">
          <Kicker>The Collection</Kicker>
          <h2 className="mt-6 font-serif text-4xl md:text-5xl lg:text-6xl font-light text-white tracking-wide">
            <RevealText>Treasures of the Deep</RevealText>
          </h2>
          <p className="mt-6 text-white/50 max-w-xl mx-auto text-[14px] leading-relaxed font-light">
            Three expressions, each shaped by the sea. Individually numbered, accompanied by a certificate of ocean provenance.
          </p>
        </div>

        {/* Alternating editorial rows */}
        <div className="space-y-24 lg:space-y-36">
          {products.map((product, i) => {
            const reversed = i % 2 === 1
            return (
              <div
                key={product.name}
                className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-center animate-on-scroll"
              >
                {/* Image */}
                <div
                  className={`lg:col-span-7 ${
                    reversed ? 'lg:order-2' : 'lg:order-1'
                  }`}
                >
                  <div className="overflow-hidden">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-[340px] sm:h-[440px] lg:h-[560px] object-cover object-center hover:scale-[1.01] transition-transform duration-[900ms] ease-out"
                    />
                  </div>
                </div>

                {/* Text */}
                <div
                  className={`lg:col-span-5 ${
                    reversed ? 'lg:order-1 lg:pr-4' : 'lg:order-2 lg:pl-4'
                  }`}
                >
                  <p className="font-serif italic text-gold/60 text-sm tracking-[0.3em]">
                    {product.number}
                  </p>
                  <p className="mt-4 text-gold/55 text-[10px] tracking-[0.35em] uppercase font-light">
                    {product.type}
                  </p>
                  <h3 className="mt-5 font-serif text-3xl md:text-4xl lg:text-5xl text-white font-light tracking-wide leading-[1.15]">
                    {product.name}
                  </h3>

                  <div className="editorial-rule w-16 mt-7 mb-7" />

                  <p className="text-white/60 leading-[1.9] font-light text-[15px] max-w-lg">
                    {product.description}
                  </p>

                  <div className="mt-9 flex items-center gap-7">
                    <span className="text-white/40 text-[10px] tracking-[0.25em] uppercase">
                      {product.details}
                    </span>
                    <a
                      href="#contact"
                      className="text-gold/70 hover:text-gold text-[10px] tracking-[0.35em] uppercase font-light transition-colors duration-300 flex items-center gap-2"
                    >
                      <span>Enquire</span>
                      <span>&rarr;</span>
                    </a>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
