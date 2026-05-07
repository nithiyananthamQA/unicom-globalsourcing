import { LazyImage } from "./LazyImage";

export function SustainabilitySection() {
  const products = [
    {
      title: "Hospitality & Home Textiles",
      tagline: "Linens, Towels & Bedding",
      description:
        "High-durability linens, duvet covers, pillowcases and professional-grade towels in various GSMs and weaves — built for the premium hotel sector.",
      gif: "https://media.giphy.com/media/XBKNFlTaMsh1ONHOJF/giphy.gif",
      tags: ["Linens", "Duvet Covers", "Towels"],
    },
    {
      title: "Garment Making",
      tagline: "Knitted & Woven Apparel",
      description:
        "Expert sourcing for casual wear, activewear and everyday essentials. Full management of garment production based on buyer-specific technical patterns and branding.",
      gif: "https://media.giphy.com/media/kDGo22EwhY6USKBhJy/giphy.gif",
      tags: ["Knit", "Woven", "Bespoke"],
    },
    {
      title: "Mats & Floor Coverings",
      tagline: "Utility & Decorative",
      description:
        "Durable bath mats, door mats and kitchen mats. Stylish floor accents and textiles for retail and commercial environments — sourced at factory-direct pricing.",
      gif: "https://media.giphy.com/media/uIpUju0W9JaEKFBRBN/giphy.gif",
      tags: ["Bath Mats", "Door Mats", "Decor"],
    },
  ];

  return (
    <section id="products" className="bg-[#f7fafd] py-16 md:py-20 lg:py-28">
      <div className="max-w-[1280px] mx-auto px-6 md:px-12">
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <span className="inline-block px-4 py-1 rounded-full bg-[#0b3d6d]/10 text-[#0b3d6d] text-xs md:text-sm tracking-[0.2em] uppercase font-semibold mb-4">
            Our Core Product Verticals
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl text-[#0b3d6d] font-bold font-['Playfair_Display',serif] mb-6">
            What We Source for You
          </h2>
          <p className="text-[#555] text-base md:text-lg leading-relaxed">
            Three deeply-specialised verticals, each backed by audited factories,
            on-site quality teams and end-to-end supply chain visibility.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
          {products.map((p, i) => (
            <article
              key={i}
              className="group bg-white rounded-2xl shadow-sm hover:shadow-2xl transition-all duration-300 overflow-hidden border border-[#0b3d6d]/5 hover:-translate-y-1"
            >
              <div className="relative h-56 md:h-60 overflow-hidden bg-[#06203a]">
                <LazyImage
                  src={p.gif}
                  alt={p.title}
                  className="absolute inset-0 w-full h-full object-cover opacity-90 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#06203a]/85 via-[#06203a]/20 to-transparent" />
                <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-white/90 backdrop-blur-sm text-[#0b3d6d] text-[11px] tracking-[0.18em] uppercase font-semibold">
                  {p.tagline}
                </div>
              </div>
              <div className="p-6 md:p-7">
                <h3 className="text-xl md:text-2xl text-[#0b3d6d] font-bold mb-3 font-['Playfair_Display',serif]">
                  {p.title}
                </h3>
                <p className="text-[#555] text-sm md:text-base leading-relaxed mb-4">
                  {p.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {p.tags.map((t) => (
                    <span
                      key={t}
                      className="text-xs px-3 py-1 rounded-full bg-[#7cc4ff]/15 text-[#0b3d6d] font-medium"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
