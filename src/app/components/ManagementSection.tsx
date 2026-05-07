import { LazyVideo } from "./LazyVideo";

export function ManagementSection() {
  const capabilities = [
    "Factory Audit & Compliance",
    "Price Negotiation",
    "Sample Development",
    "Multi-Stage QC",
    "Logistics & Documentation",
    "Vendor Onboarding",
  ];

  return (
    <section className="bg-white py-16 md:py-20 lg:py-28">
      <div className="max-w-[1280px] mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="relative">
            <div className="aspect-[4/5] rounded-3xl overflow-hidden bg-gradient-to-br from-[#0b3d6d] to-[#06203a] relative shadow-2xl">
              <LazyVideo
                src="https://videos.pexels.com/video-files/35469631/15027063_2560_1440_30fps.mp4"
                ariaLabel="Textile manufacturing in motion"
                className="absolute inset-0 w-full h-full"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#06203a] via-[#06203a]/30 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-8 md:p-10 text-white">
                <p className="text-xs md:text-sm tracking-[0.25em] uppercase text-[#7cc4ff] mb-2 font-semibold">
                  Based In
                </p>
                <h3 className="text-2xl md:text-3xl font-bold font-['Playfair_Display',serif]">
                  Coimbatore, Tamil Nadu
                </h3>
                <p className="text-sm md:text-base text-white/85 mt-2">
                  India&rsquo;s textile capital — at the heart of woven fabrics,
                  knits, garments and home textile manufacturing.
                </p>
              </div>
            </div>
            <div className="absolute -top-4 -right-4 w-24 h-24 rounded-2xl bg-[#7cc4ff] flex items-center justify-center text-[#06203a] shadow-xl ugs-float">
              <div className="text-center">
                <div className="text-2xl font-bold">2024</div>
                <div className="text-[10px] tracking-[0.2em] uppercase font-semibold">
                  Founded
                </div>
              </div>
            </div>
          </div>

          <div>
            <span className="inline-block px-4 py-1 rounded-full bg-[#0b3d6d]/10 text-[#0b3d6d] text-xs md:text-sm tracking-[0.2em] uppercase font-semibold mb-4">
              Our Mission
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl text-[#0b3d6d] font-bold font-['Playfair_Display',serif] mb-6">
              One partner. End-to-end accountability.
            </h2>
            <p className="text-[#555] text-base md:text-lg leading-relaxed mb-6">
              We act as a professional gateway between global businesses and
              India&rsquo;s premier manufacturing capabilities. Whether
              you&rsquo;re sourcing premium hotel linens, bespoke garments or
              decorative floor coverings, UGS manages every step of the supply
              chain on your behalf.
            </p>

            <div className="bg-[#f7fafd] border border-[#0b3d6d]/10 rounded-2xl p-6 md:p-7">
              <h4 className="text-base md:text-lg font-bold text-[#0b3d6d] mb-4">
                What we handle for you
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {capabilities.map((c) => (
                  <div key={c} className="flex items-center gap-3 text-[#444] text-sm md:text-base">
                    <span className="flex items-center justify-center w-6 h-6 rounded-full bg-[#7cc4ff]/25 text-[#0b3d6d] flex-shrink-0">
                      <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                    </span>
                    <span>{c}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
