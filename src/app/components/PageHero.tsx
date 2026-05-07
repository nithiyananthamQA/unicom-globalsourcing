import { Link } from "react-router";

interface PageHeroProps {
  eyebrow: string;
  title: string;
  subtitle?: string;
  breadcrumb: string;
}

export function PageHero({ eyebrow, title, subtitle, breadcrumb }: PageHeroProps) {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[#0b3d6d] via-[#0a2f56] to-[#06203a] text-white">
      <div className="absolute -top-32 -left-32 w-[420px] h-[420px] rounded-full bg-[#7cc4ff]/15 blur-3xl" />
      <div className="absolute -bottom-32 -right-32 w-[420px] h-[420px] rounded-full bg-[#0b3d6d]/40 blur-3xl" />
      <div
        className="absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.6) 1px, transparent 0)",
          backgroundSize: "28px 28px",
        }}
      />

      <div className="relative max-w-[1280px] mx-auto px-6 md:px-12 py-20 md:py-28 lg:py-32">
        <nav className="flex items-center gap-2 text-sm text-white/70 mb-6">
          <Link to="/" className="hover:text-[#7cc4ff] transition-colors">
            Home
          </Link>
          <span>/</span>
          <span className="text-white">{breadcrumb}</span>
        </nav>

        <span className="inline-block px-4 py-1 rounded-full bg-[#7cc4ff]/15 border border-[#7cc4ff]/30 text-[#7cc4ff] text-xs md:text-sm tracking-[0.2em] uppercase font-semibold mb-5">
          {eyebrow}
        </span>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-['Playfair_Display',serif] leading-tight max-w-3xl">
          {title}
        </h1>
        {subtitle && (
          <p className="mt-5 text-base md:text-lg lg:text-xl text-white/80 max-w-2xl leading-relaxed">
            {subtitle}
          </p>
        )}
      </div>
    </section>
  );
}
