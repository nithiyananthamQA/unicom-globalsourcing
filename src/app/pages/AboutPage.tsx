import { Link } from "react-router";
import { PageHero } from "../components/PageHero";
import { Seo } from "../components/Seo";

export function AboutPage() {
  const values = [
    {
      title: "Trust Above All",
      desc: "Our work depends on trust — between us and our buyers, and between us and our factories. We earn it by doing what we said we would do, on the day we said we would do it.",
    },
    {
      title: "Quality Is Non-Negotiable",
      desc: "Your tech pack is our brief. We do not approve a shipment that does not match the approved sample — even if it costs us a delay or a re-make.",
    },
    {
      title: "Transparency End to End",
      desc: "You see the cost breakdown, the inspection photos, the production timeline and the final shipment documents. No black boxes between you and the factory.",
    },
    {
      title: "Long-Term Over One-Time",
      desc: "We care more about being your sourcing partner for the next ten seasons than about closing one big order today.",
    },
  ];

  return (
    <>
      <Seo
        title="About"
        description="UNICOM GLOBALSOURCING was founded in June 2024 in Coimbatore, India — built to be the most reliable bridge between global buyers and India's textile manufacturers."
        path="/about"
      />
      <PageHero
        eyebrow="About UGS"
        title="A focused sourcing partner, based where the work happens."
        subtitle="UNICOM GLOBALSOURCING PRIVATE LIMITED is built around one idea — that buyers should be able to source from India with the same confidence they would have buying from a factory next door."
        breadcrumb="About"
      />

      {/* Story */}
      <section className="bg-white py-16 md:py-20 lg:py-24">
        <div className="max-w-[1100px] mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
            <div className="lg:col-span-4">
              <span className="inline-block px-4 py-1 rounded-full bg-[#0b3d6d]/10 text-[#0b3d6d] text-xs md:text-sm tracking-[0.2em] uppercase font-semibold mb-4">
                Who We Are
              </span>
              <h2 className="text-3xl md:text-4xl text-[#0b3d6d] font-bold font-['Playfair_Display',serif] leading-tight">
                Founded in June 2024. Based in Coimbatore.
              </h2>
            </div>
            <div className="lg:col-span-8 space-y-5 text-[#444] text-base md:text-lg leading-relaxed">
              <p>
                UGS is a sourcing and supply chain company. We connect global
                buyers with manufacturers in India — and we manage the entire
                process from your first inquiry to the final shipment landing
                at your warehouse.
              </p>
              <p>
                We were founded in June 2024 and we are headquartered in
                Coimbatore, Tamil Nadu — a city most international buyers have
                never visited but every textile professional knows. It is one
                of India&rsquo;s largest hubs for woven fabrics, knitwear, home
                textiles and floor coverings, and we are based here for one
                reason: this is where the factories are. We can drive to most
                of our partners in under an hour.
              </p>
              <p>
                Our role is straightforward. We audit factories, negotiate
                pricing on your behalf, run on-site inspections at each stage
                of production, and handle documentation and logistics until
                your order is shipped. You stay focused on selling. We stay
                focused on the supply chain.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission / Vision */}
      <section className="bg-[#f7fafd] py-16 md:py-20 lg:py-24">
        <div className="max-w-[1280px] mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
            <div className="bg-white border border-[#0b3d6d]/10 rounded-2xl p-8 md:p-10 shadow-sm">
              <div className="w-12 h-12 rounded-xl bg-[#0b3d6d] text-white flex items-center justify-center mb-5">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-2xl text-[#0b3d6d] font-bold mb-3 font-['Playfair_Display',serif]">
                What We Do
              </h3>
              <p className="text-[#555] leading-relaxed">
                We act as the bridge between you and the factory. From the
                first sample request to the final container leaving the port,
                every step — audit, negotiation, inspection, paperwork — sits
                with us, so you have one accountable point of contact instead
                of ten.
              </p>
            </div>

            <div className="bg-white border border-[#0b3d6d]/10 rounded-2xl p-8 md:p-10 shadow-sm">
              <div className="w-12 h-12 rounded-xl bg-[#7cc4ff] text-[#06203a] flex items-center justify-center mb-5">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              </div>
              <h3 className="text-2xl text-[#0b3d6d] font-bold mb-3 font-['Playfair_Display',serif]">
                Where We&rsquo;re Going
              </h3>
              <p className="text-[#555] leading-relaxed">
                We&rsquo;re young, and we plan to grow carefully. The goal is
                not to add a hundred clients — it is to be the most reliable
                sourcing partner for a smaller, growing list of buyers who
                want India done right.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-white py-16 md:py-20 lg:py-24">
        <div className="max-w-[1280px] mx-auto px-6 md:px-12">
          <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
            <span className="inline-block px-4 py-1 rounded-full bg-[#0b3d6d]/10 text-[#0b3d6d] text-xs md:text-sm tracking-[0.2em] uppercase font-semibold mb-4">
              How We Work
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl text-[#0b3d6d] font-bold font-['Playfair_Display',serif]">
              Four Things We Refuse to Compromise On
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {values.map((v, i) => (
              <div
                key={i}
                className="group p-7 md:p-8 rounded-2xl border border-[#0b3d6d]/10 hover:border-[#7cc4ff] hover:shadow-xl transition-all bg-gradient-to-br from-white to-[#f4f8fc]"
              >
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-[#0b3d6d] text-white flex items-center justify-center text-sm font-bold flex-shrink-0">
                    {i + 1}
                  </div>
                  <div>
                    <h3 className="text-xl text-[#0b3d6d] font-bold mb-2 font-['Playfair_Display',serif]">
                      {v.title}
                    </h3>
                    <p className="text-[#555] leading-relaxed">{v.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Coimbatore */}
      <section className="bg-[#f7fafd] py-16 md:py-20 lg:py-24">
        <div className="max-w-[1100px] mx-auto px-6 md:px-12">
          <div className="text-center max-w-3xl mx-auto mb-10">
            <span className="inline-block px-4 py-1 rounded-full bg-[#0b3d6d]/10 text-[#0b3d6d] text-xs md:text-sm tracking-[0.2em] uppercase font-semibold mb-4">
              Why Coimbatore
            </span>
            <h2 className="text-3xl md:text-4xl text-[#0b3d6d] font-bold font-['Playfair_Display',serif]">
              We are based in the city we source from.
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {[
              {
                t: "Closer to the loom",
                d: "Most of our partner factories are within a short drive. We can be on the floor the same day a problem comes up.",
              },
              {
                t: "Better factory pricing",
                d: "Being in the cluster means we know the market rate for cotton, yarn and labour at any given week — and we negotiate from that knowledge.",
              },
              {
                t: "On-the-ground QC team",
                d: "Our quality team lives where the factories are. Inspections aren&rsquo;t outsourced — they&rsquo;re run by our own people.",
              },
            ].map((x) => (
              <div
                key={x.t}
                className="bg-white border border-[#0b3d6d]/10 rounded-xl p-6 hover:shadow-md transition-shadow"
              >
                <h3 className="text-lg text-[#0b3d6d] font-bold mb-2 font-['Playfair_Display',serif]">
                  {x.t}
                </h3>
                <p className="text-[#555] text-sm md:text-base leading-relaxed">
                  {x.d}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#06203a] text-white py-16 md:py-20">
        <div className="max-w-[1100px] mx-auto px-6 md:px-12 text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-['Playfair_Display',serif] mb-5">
            Want to talk?
          </h2>
          <p className="text-white/80 text-base md:text-lg max-w-2xl mx-auto mb-8">
            Send us your product details and target price. We&rsquo;ll get
            back to you with a clear, no-obligation sourcing plan.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              to="/contact"
              className="px-7 py-3 rounded-full bg-[#7cc4ff] text-[#06203a] font-semibold hover:bg-white transition-colors shadow-lg"
            >
              Start a Conversation
            </Link>
            <Link
              to="/products"
              className="px-7 py-3 rounded-full border border-white/60 text-white font-semibold hover:bg-white/10 transition-colors"
            >
              See What We Source
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
