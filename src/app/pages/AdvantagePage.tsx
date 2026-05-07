import { Link } from "react-router";
import { PageHero } from "../components/PageHero";
import { Seo } from "../components/Seo";

export function AdvantagePage() {
  const pillars = [
    {
      icon: "🏭",
      title: "Strategic Vendor Vetting",
      desc: "We do not put your name in front of just any factory. Every partner in our network has been audited for machinery, capacity, ethical labour and prior export performance before they get to quote on your inquiry.",
    },
    {
      icon: "✓",
      title: "On-Site Quality Assurance",
      desc: "Our QC team visits the factory in person — at the start of production, mid-run and again before packing. Issues get caught at the loom, not at your warehouse.",
    },
    {
      icon: "₹",
      title: "Competitive Costing",
      desc: "Because we are based in Coimbatore and deal with factories directly, you get factory-level pricing. We share the breakdown openly — fabric, trims, labour, overheads — instead of one black-box number.",
    },
    {
      icon: "🌐",
      title: "Full Supply Chain Visibility",
      desc: "From the first sample to the final shipping document, every step runs through one accountable team. You always know where your order is and what is happening next.",
    },
  ];

  const process = [
    {
      step: "01",
      title: "We Understand the Brief",
      desc: "You share what you want to source — product, target price, quantity and any reference samples or tech packs. We come back with what is realistic and what we&rsquo;d adjust.",
    },
    {
      step: "02",
      title: "Factory Shortlist & Sampling",
      desc: "We pick the right factory for your product from our vetted network and run development samples until you approve the look, feel and finish.",
    },
    {
      step: "03",
      title: "Open Costing & PO",
      desc: "Once samples are approved, we share the full costing breakdown and place the production order on your behalf at the agreed factory-direct rate.",
    },
    {
      step: "04",
      title: "Pre-Production Inspection",
      desc: "Before bulk production starts, we audit the raw materials, fabric lots, trims and the production line to make sure everything matches the approved sample.",
    },
    {
      step: "05",
      title: "In-Line and Final QC",
      desc: "We run random in-line checks during production and a full inspection on the packed goods. You receive a written report with photographs.",
    },
    {
      step: "06",
      title: "Shipping & Documentation",
      desc: "We coordinate with your forwarder (or arrange one), and prepare invoices, packing lists, certificates of origin and any compliance paperwork.",
    },
    {
      step: "07",
      title: "After Shipment",
      desc: "If anything is off after delivery, we handle it — defect tracking, factory follow-up and continuous supplier improvement so your next order runs smoother.",
    },
  ];

  return (
    <>
      <Seo
        title="UGS Advantage"
        description="Four pillars and a seven-step process — from strategic vendor vetting through on-site QC to shipping documentation, end-to-end accountability under one team."
        path="/advantage"
      />
      <PageHero
        eyebrow="Why Buyers Work With Us"
        title="One partner. Real accountability. End to end."
        subtitle="The UGS Advantage isn&rsquo;t a marketing line. It is the four things we promise on every order, and the seven steps we walk through to deliver them."
        breadcrumb="UGS Advantage"
      />

      {/* Four Pillars */}
      <section className="bg-white py-16 md:py-20 lg:py-24">
        <div className="max-w-[1280px] mx-auto px-6 md:px-12">
          <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
            <span className="inline-block px-4 py-1 rounded-full bg-[#0b3d6d]/10 text-[#0b3d6d] text-xs md:text-sm tracking-[0.2em] uppercase font-semibold mb-4">
              Four Pillars
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl text-[#0b3d6d] font-bold font-['Playfair_Display',serif]">
              The promise behind every order
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-8">
            {pillars.map((p, i) => (
              <div
                key={i}
                className="group p-7 md:p-8 rounded-2xl border border-[#0b3d6d]/10 bg-gradient-to-br from-white to-[#f4f8fc] hover:shadow-xl hover:border-[#7cc4ff] transition-all"
              >
                <div className="w-14 h-14 rounded-xl bg-[#7cc4ff] text-[#06203a] flex items-center justify-center text-2xl font-bold mb-5 group-hover:scale-110 transition-transform">
                  {p.icon}
                </div>
                <h3 className="text-xl md:text-2xl text-[#0b3d6d] font-bold mb-3 font-['Playfair_Display',serif]">
                  {p.title}
                </h3>
                <p className="text-[#555] leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7-step process */}
      <section className="bg-[#f7fafd] py-16 md:py-20 lg:py-24">
        <div className="max-w-[1100px] mx-auto px-6 md:px-12">
          <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
            <span className="inline-block px-4 py-1 rounded-full bg-[#0b3d6d]/10 text-[#0b3d6d] text-xs md:text-sm tracking-[0.2em] uppercase font-semibold mb-4">
              Our Sourcing Process
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl text-[#0b3d6d] font-bold font-['Playfair_Display',serif]">
              From your brief to your warehouse
            </h2>
          </div>

          <div className="space-y-5 md:space-y-6">
            {process.map((p, i) => (
              <div
                key={p.step}
                className="group flex gap-5 md:gap-7 items-start bg-white border border-[#0b3d6d]/10 rounded-2xl p-6 md:p-7 hover:shadow-lg hover:border-[#7cc4ff] transition-all"
              >
                <div className="text-3xl md:text-4xl lg:text-5xl font-black text-[#7cc4ff] leading-none flex-shrink-0 group-hover:text-[#0b3d6d] transition-colors">
                  {p.step}
                </div>
                <div className="flex-1">
                  <h3 className="text-xl md:text-2xl text-[#0b3d6d] font-bold mb-2 font-['Playfair_Display',serif]">
                    {p.title}
                  </h3>
                  <p className="text-[#555] text-base md:text-lg leading-relaxed">
                    {p.desc}
                  </p>
                </div>
                {i < process.length - 1 && (
                  <div className="hidden md:flex w-10 h-10 rounded-full bg-[#0b3d6d]/5 items-center justify-center text-[#0b3d6d]">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Coverage stats */}
      <section className="bg-gradient-to-br from-[#0b3d6d] to-[#06203a] py-16 md:py-20 text-white">
        <div className="max-w-[1280px] mx-auto px-6 md:px-12">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-8">
            {[
              { v: "100%", l: "Audited Factories" },
              { v: "0%", l: "Specification Deviation" },
              { v: "3", l: "QC Stages per Order" },
              { v: "1", l: "Accountable Team" },
            ].map((s) => (
              <div key={s.l} className="text-center">
                <div className="text-4xl md:text-5xl lg:text-[55px] text-[#7cc4ff] font-bold mb-2 leading-none">
                  {s.v}
                </div>
                <div className="text-white/85 text-sm md:text-base">{s.l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-white py-16 md:py-20">
        <div className="max-w-[1100px] mx-auto px-6 md:px-12 text-center">
          <h2 className="text-3xl md:text-4xl text-[#0b3d6d] font-bold font-['Playfair_Display',serif] mb-4">
            Try us with one order.
          </h2>
          <p className="text-[#555] text-base md:text-lg max-w-2xl mx-auto mb-8">
            The fastest way to see how UGS works is to source one product
            through us. Start small, see the difference, then decide.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-7 py-3 rounded-full bg-[#0b3d6d] text-white font-semibold hover:bg-[#06203a] transition-colors shadow-lg"
          >
            Start with One Order
            <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </Link>
        </div>
      </section>
    </>
  );
}
