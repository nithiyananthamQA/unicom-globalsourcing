import { Link } from "react-router";
import { PageHero } from "../components/PageHero";
import { Seo } from "../components/Seo";

export function SuppliersPage() {
  const suppliers = [
    {
      name: "Rateria Fabrics",
      focus: "Woven Fabrics",
      desc: "Our partner for woven fabric needs — used across shirting, dresses and home textile applications when the order calls for a specific weave or finish.",
    },
    {
      name: "Artic Blue",
      focus: "Apparel & Knits",
      desc: "Our knitted apparel partner. Used for t-shirts, polos and casualwear orders, especially where consistency across larger production runs matters.",
    },
    {
      name: "Aravind",
      focus: "Home Textiles",
      desc: "Our home textile specialist. Linens, duvet covers and pillowcases for hospitality and home retail — where finish quality has to be repeatable.",
    },
    {
      name: "House 2 Home",
      focus: "Bedding & Linens",
      desc: "Our partner for bedding sets, decorative pieces and home retail SKUs that need to arrive packaging-ready for the shelf.",
    },
    {
      name: "Erbaliving",
      focus: "Lifestyle & Home",
      desc: "Our partner when the order calls for a more design-led, lifestyle-oriented product set — bedsheets, decorative cushions, soft furnishings.",
    },
  ];

  const auditCriteria = [
    "Documented prior export track record",
    "On-site machinery and capacity audit",
    "Ethical labour and worker welfare check",
    "Sample QA — fabric weight, hand-feel, fastness, shrinkage",
    "Reference checks with previous buyers",
    "Consistent on-time delivery history",
  ];

  return (
    <>
      <Seo
        title="Suppliers"
        description="Our deliberately curated network of vetted Indian manufacturing partners — Rateria Fabrics, Artic Blue, Aravind, House 2 Home and Erbaliving — across woven fabrics, knitwear, home textiles and lifestyle goods."
        path="/suppliers"
      />
      <PageHero
        eyebrow="Our Manufacturing Partners"
        title="A small, deliberately chosen network."
        subtitle="We work with a few partners we know well — not a long list of factories we have never visited. Every name on this page has passed our audit and continues to meet it."
        breadcrumb="Suppliers"
      />

      {/* Supplier cards */}
      <section className="bg-white py-16 md:py-20 lg:py-24">
        <div className="max-w-[1280px] mx-auto px-6 md:px-12">
          <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
            <span className="inline-block px-4 py-1 rounded-full bg-[#0b3d6d]/10 text-[#0b3d6d] text-xs md:text-sm tracking-[0.2em] uppercase font-semibold mb-4">
              Our Partners
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl text-[#0b3d6d] font-bold font-['Playfair_Display',serif]">
              Five names. Each chosen for what they do best.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-7">
            {suppliers.map((s) => (
              <article
                key={s.name}
                className="group p-7 md:p-8 rounded-2xl border border-[#0b3d6d]/10 bg-gradient-to-br from-white to-[#f4f8fc] hover:shadow-xl hover:border-[#7cc4ff] transition-all"
              >
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-2xl text-[#0b3d6d] font-bold font-['Playfair_Display',serif] leading-tight">
                    {s.name}
                  </h3>
                  <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-[#7cc4ff]/15 text-[#0b3d6d] text-[10px] tracking-[0.18em] uppercase font-semibold">
                    Vetted
                  </span>
                </div>
                <p className="text-[#7cc4ff] text-sm font-bold mb-3 tracking-wide uppercase">
                  {s.focus}
                </p>
                <p className="text-[#555] text-sm md:text-base leading-relaxed">
                  {s.desc}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Audit criteria */}
      <section className="bg-[#f7fafd] py-16 md:py-20 lg:py-24">
        <div className="max-w-[1100px] mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">
            <div>
              <span className="inline-block px-4 py-1 rounded-full bg-[#0b3d6d]/10 text-[#0b3d6d] text-xs md:text-sm tracking-[0.2em] uppercase font-semibold mb-4">
                How They Get In
              </span>
              <h2 className="text-3xl md:text-4xl text-[#0b3d6d] font-bold font-['Playfair_Display',serif] mb-5">
                What it takes to be a UGS partner
              </h2>
              <p className="text-[#555] text-base md:text-lg leading-relaxed">
                A factory does not become a UGS partner by quoting the lowest
                price. They become a partner by passing every line on this
                list — and staying consistent on it across multiple orders.
              </p>
            </div>
            <div>
              <ul className="space-y-3">
                {auditCriteria.map((c, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-3 bg-white border border-[#0b3d6d]/10 rounded-xl p-4 md:p-5"
                  >
                    <span className="w-7 h-7 rounded-full bg-[#0b3d6d] text-white flex items-center justify-center text-sm font-bold flex-shrink-0">
                      {i + 1}
                    </span>
                    <span className="text-[#444] text-sm md:text-base leading-relaxed pt-0.5">
                      {c}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Become a supplier */}
      <section className="bg-[#06203a] text-white py-16 md:py-20">
        <div className="max-w-[1100px] mx-auto px-6 md:px-12 text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-['Playfair_Display',serif] mb-4">
            Are you a manufacturer?
          </h2>
          <p className="text-white/80 text-base md:text-lg max-w-2xl mx-auto mb-8">
            If you run a factory in India and would like to be considered for
            our network, write to us with your capability profile and recent
            export references.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-7 py-3 rounded-full bg-[#7cc4ff] text-[#06203a] font-semibold hover:bg-white transition-colors shadow-lg"
          >
            Apply to be a Partner
            <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </Link>
        </div>
      </section>
    </>
  );
}
