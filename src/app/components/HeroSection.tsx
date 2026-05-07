import { LazyVideo } from "./LazyVideo";

export function HeroSection() {
  const heroVideo =
    "https://videos.pexels.com/video-files/31370995/13386620_2560_1440_50fps.mp4";

  return (
    <section
      id="home"
      className="relative w-full h-[80vh] md:h-[85vh] lg:h-[92vh] overflow-hidden bg-[#06203a]"
    >
      <LazyVideo
        src={heroVideo}
        ariaLabel="Garment factory in motion"
        className="absolute inset-0 w-full h-full"
      />

      <div className="absolute inset-0 bg-gradient-to-b from-[#06203a]/85 via-[#06203a]/55 to-[#06203a]/90" />

      <div className="absolute inset-0 flex items-center">
        <div className="max-w-[1280px] w-full mx-auto px-6 md:px-12">
          <div className="max-w-2xl text-white">
            <span className="inline-flex items-center gap-2 mb-5 px-4 py-1.5 rounded-full border border-white/40 bg-white/10 backdrop-blur-sm text-xs md:text-sm tracking-[0.25em] uppercase font-semibold">
              <span className="inline-block w-2 h-2 rounded-full bg-[#7cc4ff] animate-pulse" />
              Coimbatore, India
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight font-['Playfair_Display',serif] drop-shadow-lg">
              Connecting the World to{" "}
              <span className="text-[#7cc4ff]">India&rsquo;s Best</span>{" "}
              Textile Manufacturing
            </h1>
            <p className="mt-6 text-base md:text-lg lg:text-xl text-white/95 leading-relaxed max-w-xl drop-shadow-md">
              UNICOM GLOBALSOURCING is your strategic sourcing &amp; supply
              chain partner — from rigorous factory auditing and price
              negotiation to on-site quality inspections and global logistics.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="#products"
                className="px-7 py-3 rounded-full bg-[#7cc4ff] text-[#06203a] font-semibold hover:bg-white transition-colors shadow-lg"
              >
                Explore Products
              </a>
              <a
                href="#contact"
                className="px-7 py-3 rounded-full border border-white/70 bg-white/10 backdrop-blur-sm text-white font-semibold hover:bg-white/20 transition-colors"
              >
                Talk to Our Team
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center text-white/80 text-xs tracking-[0.3em] uppercase">
        <span>Scroll</span>
        <span className="mt-2 block h-10 w-[2px] bg-white/60 animate-[scrollLine_2s_ease-in-out_infinite]" />
      </div>
    </section>
  );
}
