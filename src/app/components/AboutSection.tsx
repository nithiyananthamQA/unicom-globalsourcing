export function AboutSection() {
  const highlights = [
    {
      title: "Founded 2024",
      desc: "Born in Coimbatore — India's textile capital — to bridge global buyers with vetted manufacturers.",
    },
    {
      title: "Sourcing Partner",
      desc: "We act as a professional gateway, managing the entire supply chain on your behalf.",
    },
    {
      title: "0% Deviation",
      desc: "On-site, multi-stage inspections that hold every shipment to your specifications.",
    },
  ];

  return (
    <section id="about" className="relative bg-white py-16 md:py-20 lg:py-28 overflow-hidden">
      <div className="absolute -top-20 -right-20 w-80 h-80 rounded-full bg-[#0b3d6d]/5 blur-3xl" />
      <div className="absolute -bottom-20 -left-20 w-80 h-80 rounded-full bg-[#7cc4ff]/10 blur-3xl" />

      <div className="relative max-w-[1200px] mx-auto px-6 md:px-12">
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <span className="inline-block px-4 py-1 rounded-full bg-[#0b3d6d]/10 text-[#0b3d6d] text-xs md:text-sm tracking-[0.2em] uppercase font-semibold mb-4">
            About UGS
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl text-[#0b3d6d] font-bold font-['Playfair_Display',serif] mb-6">
            Your Gateway to India&rsquo;s Premier Manufacturing
          </h2>
          <p className="text-[#555] text-base md:text-lg leading-relaxed">
            Founded in June 2024 and based in Coimbatore, India,{" "}
            <strong>UNICOM GLOBALSOURCING PRIVATE LIMITED</strong> is a dynamic
            strategic sourcing and supply chain partner. We manage the entire
            supply chain on your behalf — from rigorous factory auditing and
            price negotiation to on-site quality inspections and logistics —
            ensuring every product meets international standards and is
            delivered with absolute reliability.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {highlights.map((h, i) => (
            <div
              key={i}
              className="group relative bg-gradient-to-br from-white to-[#f4f8fc] border border-[#0b3d6d]/10 rounded-2xl p-7 md:p-8 shadow-sm hover:shadow-xl transition-shadow"
            >
              <div className="absolute top-0 right-0 w-20 h-20 bg-[#7cc4ff]/15 rounded-bl-[60px] rounded-tr-2xl group-hover:bg-[#7cc4ff]/25 transition-colors" />
              <div className="relative">
                <h3 className="text-xl md:text-2xl text-[#0b3d6d] font-bold mb-3 font-['Playfair_Display',serif]">
                  {h.title}
                </h3>
                <p className="text-[#555] text-sm md:text-base leading-relaxed">
                  {h.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
