export function CertificationsSection() {
  const suppliers = [
    { name: "Rateria Fabrics", focus: "Woven Fabrics" },
    { name: "Artic Blue", focus: "Apparel & Knits" },
    { name: "Aravind", focus: "Home Textiles" },
    { name: "House 2 Home", focus: "Bedding & Linens" },
    { name: "Erbaliving", focus: "Sustainable Living" },
  ];

  // Track duplicated for an infinite-marquee effect
  const track = [...suppliers, ...suppliers];

  return (
    <section id="suppliers" className="bg-white py-16 md:py-20 lg:py-24">
      <div className="max-w-[1280px] mx-auto px-6 md:px-12">
        <div className="text-center max-w-3xl mx-auto mb-10 md:mb-14">
          <span className="inline-block px-4 py-1 rounded-full bg-[#0b3d6d]/10 text-[#0b3d6d] text-xs md:text-sm tracking-[0.2em] uppercase font-semibold mb-4">
            Trusted Supplier Network
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl text-[#0b3d6d] font-bold font-['Playfair_Display',serif] mb-4">
            Our Manufacturing Partners
          </h2>
          <p className="text-[#555] text-base md:text-lg leading-relaxed">
            Audited factories that prioritise ethical labour, global quality
            compliance and the consistency our buyers depend on.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5 md:gap-6 mb-12">
          {suppliers.map((s, i) => (
            <div
              key={i}
              className="group relative bg-gradient-to-br from-white to-[#f4f8fc] border border-[#0b3d6d]/10 rounded-xl p-5 md:p-6 text-center hover:border-[#7cc4ff] hover:shadow-lg transition-all"
            >
              <div className="h-16 md:h-20 flex items-center justify-center mb-3">
                <span className="text-2xl md:text-3xl font-bold text-[#0b3d6d] font-['Playfair_Display',serif] group-hover:text-[#7cc4ff] transition-colors">
                  {s.name.split(" ")[0]}
                </span>
              </div>
              <p className="text-[#0b3d6d] text-sm md:text-base font-semibold">
                {s.name}
              </p>
              <p className="text-[#777] text-xs md:text-sm mt-1">{s.focus}</p>
            </div>
          ))}
        </div>

        <div className="ugs-marquee relative overflow-hidden border-y border-[#0b3d6d]/10 py-6 bg-[#f7fafd]">
          <div className="ugs-marquee-track flex gap-12 whitespace-nowrap will-change-transform">
            {track.map((s, i) => (
              <div
                key={i}
                className="flex items-center gap-3 text-[#0b3d6d] text-base md:text-lg font-semibold tracking-wide"
              >
                <span className="inline-block w-2 h-2 rounded-full bg-[#7cc4ff]" />
                {s.name}
                <span className="text-[#999] mx-4">·</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
