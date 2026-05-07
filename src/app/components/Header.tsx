import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router";
import ugsLogoFull from "../../assets/ugs-logo-full.png";

const navLinks = [
  { to: "/", label: "Home", end: true },
  { to: "/about", label: "About" },
  { to: "/products", label: "Products" },
  { to: "/advantage", label: "UGS Advantage" },
  { to: "/suppliers", label: "Suppliers" },
  { to: "/contact", label: "Contact" },
];

function useScrollProgress() {
  const [progress, setProgress] = useState(0);
  const { pathname } = useLocation();

  useEffect(() => {
    const update = () => {
      const doc = document.documentElement;
      const scrolled = window.scrollY;
      const max = doc.scrollHeight - doc.clientHeight;
      setProgress(max > 0 ? Math.min(100, (scrolled / max) * 100) : 0);
    };
    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, [pathname]);

  return progress;
}

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const progress = useScrollProgress();

  return (
    <header className="sticky top-0 z-50">
      {/* Scroll-progress bar (replaces the static gradient strip) */}
      <div className="h-1 w-full bg-[#e6ecf3]">
        <div
          className="h-full bg-gradient-to-r from-[#0b3d6d] via-[#7cc4ff] to-[#0b3d6d] transition-[width] duration-100 ease-out"
          style={{ width: `${progress}%` }}
        />
      </div>

      <div className="bg-white shadow-sm">
        <div className="max-w-[1920px] mx-auto px-3 md:px-6 lg:px-10">
          <div className="flex items-center justify-between h-20 md:h-24 lg:h-28">
            <Link to="/" className="flex items-center flex-shrink-0">
              <img
                src={ugsLogoFull}
                alt="UGS - Unicom Globalsourcing Private Limited"
                className="h-16 md:h-20 lg:h-24 w-auto object-contain block -translate-y-0.5 md:-translate-y-1"
              />
            </Link>

            <nav className="hidden lg:flex items-center gap-8 xl:gap-10">
              {navLinks.map((link) => (
                <NavLink
                  key={link.to}
                  to={link.to}
                  end={link.end}
                  className={({ isActive }) =>
                    `group relative text-[15px] xl:text-base font-semibold transition-colors py-2 ${
                      isActive
                        ? "text-[#0b3d6d]"
                        : "text-[#1a1a1a] hover:text-[#0b3d6d]"
                    }`
                  }
                >
                  {({ isActive }) => (
                    <>
                      {link.label}
                      <span
                        className={`absolute left-1/2 -translate-x-1/2 bottom-0 h-[2px] bg-gradient-to-r from-[#0b3d6d] to-[#7cc4ff] transition-all duration-300 ${
                          isActive
                            ? "w-full"
                            : "w-0 group-hover:w-full"
                        }`}
                      />
                    </>
                  )}
                </NavLink>
              ))}
            </nav>

            <div className="hidden lg:flex items-center gap-3">
              <a
                href="tel:+919731913106"
                className="flex items-center gap-2 text-sm font-semibold text-[#0b3d6d] hover:text-[#7cc4ff] transition-colors"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                +91 97319 13106
              </a>
              <Link
                to="/contact"
                className="ml-2 inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#0b3d6d] text-white text-sm font-semibold hover:bg-[#06203a] hover:shadow-lg transition-all"
              >
                Get a Quote
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </Link>
            </div>

            <button
              className="lg:hidden p-2 rounded-md hover:bg-[#0b3d6d]/5 transition-colors"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              <svg
                className="w-6 h-6 text-[#0b3d6d]"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 7h16M4 12h16M4 17h16" />
                )}
              </svg>
            </button>
          </div>

          {isMenuOpen && (
            <nav className="lg:hidden pb-5 border-t border-gray-100 pt-3 space-y-1">
              {navLinks.map((link) => (
                <NavLink
                  key={link.to}
                  to={link.to}
                  end={link.end}
                  className={({ isActive }) =>
                    `block py-2.5 px-3 rounded-md text-base font-semibold transition-colors ${
                      isActive
                        ? "text-[#0b3d6d] bg-[#0b3d6d]/5"
                        : "text-[#1a1a1a] hover:text-[#0b3d6d] hover:bg-[#0b3d6d]/5"
                    }`
                  }
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.label}
                </NavLink>
              ))}
              <Link
                to="/contact"
                className="block mt-3 py-3 px-4 rounded-full bg-[#0b3d6d] text-white text-center text-base font-semibold"
                onClick={() => setIsMenuOpen(false)}
              >
                Get a Quote →
              </Link>
            </nav>
          )}
        </div>
      </div>
    </header>
  );
}
