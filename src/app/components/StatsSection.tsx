export function StatsSection() {
  const stats = [
    { value: "100%", label: "Audited & Vetted Vendors" },
    { value: "0%", label: "Deviation From Specifications" },
    { value: "25+", label: "Global Buyers Served" },
    { value: "3", label: "Core Product Verticals" },
  ];

  return (
    <section className="relative overflow-hidden bg-[#06203a]">
      {/* Layered background — gradient + radial glows + subtle dot pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0b3d6d] via-[#0a2f56] to-[#06203a]" />
      <div className="absolute -top-32 -left-32 w-[480px] h-[480px] rounded-full bg-[#7cc4ff]/15 blur-3xl" />
      <div className="absolute -bottom-32 -right-32 w-[520px] h-[520px] rounded-full bg-[#0b3d6d]/40 blur-3xl" />
      <div
        className="absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.6) 1px, transparent 0)",
          backgroundSize: "28px 28px",
        }}
      />

      {/* === TOP slant — \ (high-left → low-right) === */}
      <svg
        className="absolute top-0 left-0 w-full h-24 md:h-32 lg:h-36 z-20"
        viewBox="0 0 1440 160"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <defs>
          <filter id="statsFoldShadowTop" x="-5%" y="-50%" width="110%" height="200%">
            <feGaussianBlur in="SourceAlpha" stdDeviation="6" />
            <feOffset dx="0" dy="4" />
            <feComponentTransfer>
              <feFuncA type="linear" slope="0.35" />
            </feComponentTransfer>
            <feMerge>
              <feMergeNode />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
          <linearGradient id="statsFoldGradientTop" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#ffffff" />
            <stop offset="65%" stopColor="#f3f7fb" />
            <stop offset="100%" stopColor="#ffffff" />
          </linearGradient>
        </defs>
        <path
          d="M0,0 L1440,0 L1440,140 L0,40 Z"
          fill="rgba(0,0,0,0.18)"
          filter="url(#statsFoldShadowTop)"
        />
        <path
          d="M0,0 L1440,0 L1440,130 L0,30 Z"
          fill="url(#statsFoldGradientTop)"
        />
        <path
          d="M0,30 L1440,130"
          stroke="rgba(11,61,109,0.12)"
          strokeWidth="1.5"
          fill="none"
        />
      </svg>

      {/* === BOTTOM slant — \ (matches top) === */}
      <svg
        className="absolute bottom-0 left-0 w-full h-24 md:h-32 lg:h-36 z-20"
        viewBox="0 0 1440 160"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <defs>
          <filter id="statsFoldShadowBottom" x="-5%" y="-50%" width="110%" height="200%">
            <feGaussianBlur in="SourceAlpha" stdDeviation="6" />
            <feOffset dx="0" dy="-4" />
            <feComponentTransfer>
              <feFuncA type="linear" slope="0.35" />
            </feComponentTransfer>
            <feMerge>
              <feMergeNode />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
          <linearGradient id="statsFoldGradientBottom" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#ffffff" />
            <stop offset="35%" stopColor="#f3f7fb" />
            <stop offset="100%" stopColor="#ffffff" />
          </linearGradient>
        </defs>
        <path
          d="M0,40 L1440,140 L1440,160 L0,160 Z"
          fill="rgba(0,0,0,0.18)"
          filter="url(#statsFoldShadowBottom)"
        />
        <path
          d="M0,30 L1440,130 L1440,160 L0,160 Z"
          fill="url(#statsFoldGradientBottom)"
        />
        <path
          d="M0,30 L1440,130"
          stroke="rgba(11,61,109,0.12)"
          strokeWidth="1.5"
          fill="none"
        />
      </svg>

      <div className="relative pt-32 pb-32 md:pt-40 md:pb-40 lg:pt-44 lg:pb-44">
        <div className="max-w-[1280px] mx-auto px-6 md:px-12">
          <div className="text-center mb-12 md:mb-16">
            <span className="inline-block px-4 py-1 rounded-full bg-[#7cc4ff]/15 border border-[#7cc4ff]/30 text-[#7cc4ff] text-xs md:text-sm tracking-[0.2em] uppercase font-semibold mb-4">
              By The Numbers
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl text-white font-bold font-['Playfair_Display',serif]">
              Numbers That Define Us
            </h2>
            <p className="text-white/75 mt-4 max-w-2xl mx-auto text-sm md:text-base lg:text-lg leading-relaxed">
              A new-age sourcing partner backed by deep industry expertise
              across India&rsquo;s textile clusters.
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-7">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="group relative bg-white/[0.06] backdrop-blur-md border border-white/15 rounded-2xl p-6 md:p-8 lg:p-10 text-center overflow-hidden hover:bg-white/[0.1] hover:border-[#7cc4ff]/40 transition-all duration-300"
              >
                <div className="absolute -top-12 -right-12 w-32 h-32 bg-[#7cc4ff]/20 rounded-full blur-2xl group-hover:bg-[#7cc4ff]/35 transition-colors" />
                <div className="relative">
                  <div className="text-4xl md:text-5xl lg:text-[55px] text-white font-bold mb-3 leading-none">
                    {stat.value}
                  </div>
                  <div className="text-white/85 text-sm md:text-base tracking-wide leading-snug">
                    {stat.label}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
