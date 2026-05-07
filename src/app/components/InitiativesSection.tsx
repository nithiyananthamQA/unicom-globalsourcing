import { LazyImage } from "./LazyImage";

export function InitiativesSection() {
  const advantages = [
    {
      title: "Strategic Vendor Vetting",
      description:
        "We partner only with audited factories that prioritise ethical labour and global quality compliance.",
      gif: "https://media.giphy.com/media/j3QUOqKv4EQJR3fbJN/giphy.gif",
      icon: "🏭",
    },
    {
      title: "On-Site Quality Assurance",
      description:
        "Our dedicated team conducts multi-stage inspections to ensure 0% deviation from your specifications.",
      gif: "https://media.giphy.com/media/6OD4dYdNDZ70vObD9k/giphy.gif",
      icon: "✓",
    },
    {
      title: "Competitive Costing",
      description:
        "Our local presence in Coimbatore secures factory-direct pricing — no middlemen, full transparency.",
      gif: "https://media.giphy.com/media/JliiJ72xQ9jZEmywUT/giphy.gif",
      icon: "₹",
    },
    {
      title: "Full Supply Chain Visibility",
      description:
        "We handle the process from initial sampling to final shipment and documentation — one accountable partner.",
      gif: "https://media.giphy.com/media/l54QBV4yIBWOsZwZTa/giphy.gif",
      icon: "🌐",
    },
  ];

  return (
    <section id="advantage" className="relative overflow-hidden bg-[#06203a]">
      {/* Layered background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#06203a] via-[#0a2f56] to-[#0b3d6d]" />
      <div className="absolute -top-40 right-1/4 w-[520px] h-[520px] rounded-full bg-[#7cc4ff]/10 blur-3xl" />
      <div className="absolute -bottom-40 left-1/4 w-[520px] h-[520px] rounded-full bg-[#0b3d6d]/40 blur-3xl" />
      <div
        className="absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.6) 1px, transparent 0)",
          backgroundSize: "28px 28px",
        }}
      />

      {/* === TOP slant — / (low-left → high-right) === */}
      <svg
        className="absolute top-0 left-0 w-full h-24 md:h-32 lg:h-36 z-20"
        viewBox="0 0 1440 160"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <defs>
          <filter id="advFoldShadowTop" x="-5%" y="-50%" width="110%" height="200%">
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
          <linearGradient id="advFoldGradientTop" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#ffffff" />
            <stop offset="65%" stopColor="#f3f7fb" />
            <stop offset="100%" stopColor="#ffffff" />
          </linearGradient>
        </defs>
        <path
          d="M0,0 L1440,0 L1440,40 L0,140 Z"
          fill="rgba(0,0,0,0.18)"
          filter="url(#advFoldShadowTop)"
        />
        <path
          d="M0,0 L1440,0 L1440,30 L0,130 Z"
          fill="url(#advFoldGradientTop)"
        />
        <path
          d="M0,130 L1440,30"
          stroke="rgba(11,61,109,0.12)"
          strokeWidth="1.5"
          fill="none"
        />
      </svg>

      {/* === BOTTOM slant — / (matches top) === */}
      <svg
        className="absolute bottom-0 left-0 w-full h-24 md:h-32 lg:h-36 z-20"
        viewBox="0 0 1440 160"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <defs>
          <filter id="advFoldShadowBottom" x="-5%" y="-50%" width="110%" height="200%">
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
          <linearGradient id="advFoldGradientBottom" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#ffffff" />
            <stop offset="35%" stopColor="#f3f7fb" />
            <stop offset="100%" stopColor="#ffffff" />
          </linearGradient>
        </defs>
        <path
          d="M0,140 L1440,40 L1440,160 L0,160 Z"
          fill="rgba(0,0,0,0.18)"
          filter="url(#advFoldShadowBottom)"
        />
        <path
          d="M0,130 L1440,30 L1440,160 L0,160 Z"
          fill="url(#advFoldGradientBottom)"
        />
        <path
          d="M0,130 L1440,30"
          stroke="rgba(11,61,109,0.12)"
          strokeWidth="1.5"
          fill="none"
        />
      </svg>

      <div className="relative pt-32 pb-32 md:pt-40 md:pb-40 lg:pt-44 lg:pb-44">
        <div className="max-w-[1280px] mx-auto px-6 md:px-12">
          <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
            <span className="inline-block px-4 py-1 rounded-full bg-white/10 border border-white/20 text-white text-xs md:text-sm tracking-[0.2em] uppercase font-semibold mb-4">
              The UGS Advantage
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl text-white font-bold font-['Playfair_Display',serif]">
              Why Global Buyers Choose Us
            </h2>
            <p className="text-white/75 mt-4 text-base md:text-lg">
              Four pillars that make us a reliable extension of your team —
              right inside India&rsquo;s textile capital.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {advantages.map((a, i) => (
              <div
                key={i}
                className="group relative bg-white/10 backdrop-blur-md border border-white/15 rounded-2xl overflow-hidden hover:bg-white/15 transition-all hover:-translate-y-1"
              >
                <div className="relative h-40 overflow-hidden">
                  <LazyImage
                    src={a.gif}
                    alt={a.title}
                    className="absolute inset-0 w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0b3d6d]/30 to-[#0b3d6d]/95" />
                  <div className="absolute bottom-3 left-4 w-10 h-10 rounded-full bg-[#7cc4ff] text-[#06203a] flex items-center justify-center text-lg font-bold shadow-lg">
                    {a.icon}
                  </div>
                </div>
                <div className="p-5 md:p-6">
                  <h3 className="text-lg md:text-xl text-white font-bold mb-2 font-['Playfair_Display',serif]">
                    {a.title}
                  </h3>
                  <p className="text-white/80 text-sm leading-relaxed">
                    {a.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
