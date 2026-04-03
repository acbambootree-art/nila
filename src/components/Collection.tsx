const products = [
  {
    name: 'NILA Reserve',
    type: 'Sea-Aged Red Wine',
    description:
      'A bold, full-bodied red aged twelve months beneath the South China Sea. Notes of dark cherry, sea salt, and ancient wood.',
    details: '750ml · 14.5% ABV',
    image: '/assets/wine-reserve.jpg',
  },
  {
    name: 'NILA Blanc',
    type: 'Sea-Aged White Wine',
    description:
      'Crisp and luminous, with the ocean\'s mineral kiss. Honeyed citrus, white flowers, and a finish that lingers like a warm tide.',
    details: '750ml · 12.5% ABV',
    image: '/assets/wine-blanc.png',
  },
  {
    name: 'NILA Maritime Gin',
    type: 'Sea-Aged Botanical Gin',
    description:
      'Juniper and coastal botanicals, deepened by months at sea. Samphire, yuzu, and a whisper of brine.',
    details: '700ml · 43% ABV',
    image: '/assets/gin-botanical.jpg',
  },
]

export default function Collection() {
  return (
    <section id="collection" className="relative py-24 lg:py-32 bg-navy/20">
      <div className="relative max-w-7xl mx-auto px-6 lg:px-12">
        {/* Section header */}
        <div className="text-center mb-14 animate-on-scroll">
          <p className="text-gold/60 text-xs tracking-[0.3em] uppercase mb-3 font-light">The Collection</p>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-light text-white">
            Treasures of the Deep
          </h2>
          <div className="gold-line w-16 mx-auto mt-6" />
        </div>

        {/* Product cards */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {products.map((product, i) => (
            <div
              key={product.name}
              className={`animate-on-scroll animate-delay-${i + 1} group`}
            >
              <div className="relative h-full bg-black-deep/40 border border-white/[0.08] hover:border-gold/20 transition-all duration-500 overflow-hidden rounded-sm">
                {/* Product image — taller on mobile */}
                <div className="overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-[240px] sm:h-[260px] md:h-[280px] object-cover object-center group-hover:scale-[1.03] transition-transform duration-700"
                  />
                </div>

                <div className="p-6 sm:p-7 lg:p-8">
                  <p className="text-gold/50 text-[10px] tracking-[0.25em] uppercase mb-2 font-light">
                    {product.type}
                  </p>
                  <h3 className="font-serif text-xl lg:text-2xl text-white font-light tracking-wide group-hover:text-gold-light transition-colors duration-500">
                    {product.name}
                  </h3>

                  <div className="gold-line w-10 opacity-40 my-5" />

                  <p className="text-white/55 leading-relaxed font-light text-sm">
                    {product.description}
                  </p>

                  <div className="mt-6 pt-5 border-t border-white/[0.08] flex items-center justify-between">
                    <span className="text-white/35 text-[10px] tracking-[0.15em] uppercase">
                      {product.details}
                    </span>
                    <a href="#contact" className="text-gold/30 text-[10px] tracking-[0.15em] uppercase group-hover:text-gold/60 transition-colors duration-500">
                      Enquire &rarr;
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <p className="text-center mt-10 text-white/30 text-xs font-light italic animate-on-scroll">
          Each bottle is individually numbered with a certificate of ocean provenance.
        </p>
      </div>
    </section>
  )
}
