import { Link } from "react-router";
import { PageHero } from "../components/PageHero";
import { Seo } from "../components/Seo";
import { LazyImage } from "../components/LazyImage";

export function ProductsPage() {
  const verticals = [
    {
      id: "hospitality",
      title: "Hospitality & Home Textiles",
      tagline: "For hotels, resorts and home retail",
      gif: "https://media.giphy.com/media/XBKNFlTaMsh1ONHOJF/giphy.gif",
      intro:
        "We source linens and towels for the hotel sector and for home-textile retailers. The brief here is always the same — durability that survives industrial laundry, with a hand-feel that doesn&rsquo;t disappear after twenty washes.",
      items: [
        {
          name: "Hotel Linens",
          detail:
            "Flat sheets, fitted sheets, pillowcases and duvet covers in cotton, cotton-rich and blended fabrics. Thread counts to your specification.",
        },
        {
          name: "Duvet Covers & Pillowcases",
          detail:
            "Plain, sateen and dobby finishes. Custom colour, embroidery and labelling supported.",
        },
        {
          name: "Bath Towels",
          detail:
            "Bath towels, hand towels and face cloths across a range of GSMs and weave structures.",
        },
        {
          name: "Pool & Spa Towels",
          detail:
            "Larger format towels for pool, gym and spa use, with optional cabana-stripe or branded woven labels.",
        },
        {
          name: "Home Bedding",
          detail:
            "Bedding sets and individual SKUs intended for retail packaging and direct-to-consumer use.",
        },
      ],
    },
    {
      id: "garments",
      title: "Garment Making",
      tagline: "Knitted and woven apparel",
      gif: "https://media.giphy.com/media/kDGo22EwhY6USKBhJy/giphy.gif",
      intro:
        "We manage garment production for buyers who want to outsource the entire process — fabric, trims, stitching, finishing and packing — based on your tech pack and brand specifications.",
      items: [
        {
          name: "Knitted Apparel",
          detail:
            "T-shirts, polos, sweatshirts and basics in single jersey, pique, interlock and fleece constructions.",
        },
        {
          name: "Woven Apparel",
          detail:
            "Shirts, dresses, trousers and shorts in cotton, linen, viscose and blended woven fabrics.",
        },
        {
          name: "Casualwear & Activewear",
          detail:
            "Everyday-wear basics and activewear constructed for performance, comfort and easy care.",
        },
        {
          name: "Buyer-Specific Patterns",
          detail:
            "Production runs based on your tech pack, measurement chart and approved fit samples.",
        },
        {
          name: "White-Label Branding",
          detail:
            "Your labels, hangtags, packaging and care instructions — handled at the factory before shipment.",
        },
      ],
    },
    {
      id: "mats",
      title: "Mats & Floor Coverings",
      tagline: "Utility mats and decorative pieces",
      gif: "https://media.giphy.com/media/uIpUju0W9JaEKFBRBN/giphy.gif",
      intro:
        "We source two kinds of floor coverings — utility mats designed to handle daily wear, and decorative pieces designed to anchor a space. Both go through the same audit, sampling and inspection workflow.",
      items: [
        {
          name: "Bath Mats",
          detail:
            "Cotton, microfiber and tufted bath mats with anti-slip backings, in standard and custom sizes.",
        },
        {
          name: "Door Mats",
          detail:
            "Coir, rubber-backed and printed door mats for residential and commercial entrances.",
        },
        {
          name: "Kitchen Mats",
          detail:
            "Anti-fatigue and runner-style kitchen mats, with options across PVC, cotton and synthetic blends.",
        },
        {
          name: "Decorative Floor Pieces",
          detail:
            "Floor accents and statement rugs intended for retail and commercial display.",
        },
      ],
    },
  ];

  return (
    <>
      <Seo
        title="Products"
        description="UGS sources hospitality & home textiles, knitted and woven garments, and mats & floor coverings from audited Indian factories — built to your specifications."
        path="/products"
      />
      <PageHero
        eyebrow="What We Source"
        title="Three product lines. One sourcing process behind all of them."
        subtitle="Each vertical is supported by the same audit, sampling, inspection and shipment workflow — so the experience is consistent regardless of what you&rsquo;re buying."
        breadcrumb="Products"
      />

      {/* Vertical Quick-Nav */}
      <section className="bg-white py-10 border-b border-[#0b3d6d]/10 sticky top-[81px] lg:top-[97px] z-30">
        <div className="max-w-[1280px] mx-auto px-6 md:px-12">
          <div className="flex flex-wrap justify-center gap-3 md:gap-5">
            {verticals.map((v) => (
              <a
                key={v.id}
                href={`#${v.id}`}
                className="px-5 py-2 rounded-full bg-[#f4f8fc] border border-[#0b3d6d]/10 text-[#0b3d6d] text-sm md:text-base font-semibold hover:bg-[#0b3d6d] hover:text-white hover:border-[#0b3d6d] transition-colors"
              >
                {v.title}
              </a>
            ))}
          </div>
        </div>
      </section>

      {verticals.map((v, idx) => (
        <section
          key={v.id}
          id={v.id}
          className={`py-16 md:py-20 lg:py-24 ${
            idx % 2 === 0 ? "bg-white" : "bg-[#f7fafd]"
          }`}
        >
          <div className="max-w-[1280px] mx-auto px-6 md:px-12">
            <div className={`grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center mb-12`}>
              <div className={idx % 2 === 1 ? "lg:order-2" : ""}>
                <span className="inline-block px-3 py-1 rounded-full bg-[#7cc4ff]/15 text-[#0b3d6d] text-xs tracking-[0.2em] uppercase font-semibold mb-4">
                  Vertical {idx + 1} of 3
                </span>
                <h2 className="text-3xl md:text-4xl lg:text-5xl text-[#0b3d6d] font-bold font-['Playfair_Display',serif] mb-3">
                  {v.title}
                </h2>
                <p className="text-[#7cc4ff] text-base md:text-lg font-semibold mb-5">
                  {v.tagline}
                </p>
                <p className="text-[#555] text-base md:text-lg leading-relaxed">
                  {v.intro}
                </p>
              </div>

              <div className={`relative h-72 md:h-80 lg:h-96 rounded-2xl overflow-hidden bg-[#06203a] shadow-xl ${idx % 2 === 1 ? "lg:order-1" : ""}`}>
                <LazyImage
                  src={v.gif}
                  alt={v.title}
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#06203a]/70 via-transparent to-transparent" />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {v.items.map((item) => (
                <div
                  key={item.name}
                  className="bg-white border border-[#0b3d6d]/10 rounded-xl p-5 md:p-6 hover:shadow-lg hover:border-[#7cc4ff] transition-all"
                >
                  <div className="flex items-start gap-3 mb-2">
                    <span className="w-2 h-2 rounded-full bg-[#7cc4ff] mt-2.5 flex-shrink-0" />
                    <h3 className="text-lg md:text-xl text-[#0b3d6d] font-bold">
                      {item.name}
                    </h3>
                  </div>
                  <p className="text-[#555] text-sm md:text-base leading-relaxed">
                    {item.detail}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      ))}

      {/* Custom orders CTA */}
      <section className="bg-gradient-to-br from-[#0b3d6d] to-[#06203a] text-white py-16 md:py-20">
        <div className="max-w-[1100px] mx-auto px-6 md:px-12 text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-['Playfair_Display',serif] mb-4">
            Don&rsquo;t see your product?
          </h2>
          <p className="text-white/80 text-base md:text-lg max-w-2xl mx-auto mb-8">
            If your product fits within textiles and home furnishings,
            there&rsquo;s a good chance we can source it. Send us a brief and
            we&rsquo;ll tell you what&rsquo;s feasible.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-7 py-3 rounded-full bg-[#7cc4ff] text-[#06203a] font-semibold hover:bg-white transition-colors shadow-lg"
          >
            Send Us a Brief
            <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </Link>
        </div>
      </section>
    </>
  );
}
