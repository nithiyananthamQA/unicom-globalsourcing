import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router";
import ugsLogoFull from "../../assets/ugs-logo-full.png";
import ugsLogoIcon from "../../assets/ugs-logo-icon.png";

const navLinks = [
  { to: "/", label: "Home", end: true },
  { to: "/about", label: "About" },
  { to: "/products", label: "Products" },
  { to: "/advantage", label: "UGS Advantage" },
  { to: "/suppliers", label: "Suppliers" },
  { to: "/contact", label: "Contact" },
];

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="sticky top-0 z-50">
      <div className="h-1 w-full bg-gradient-to-r from-[#0b3d6d] via-[#7cc4ff] to-[#0b3d6d]" />

      <div
        className={`transition-all duration-300 ${
          scrolled
            ? "bg-white/95 backdrop-blur-md shadow-md"
            : "bg-white shadow-sm"
        }`}
      >
        <div className="max-w-[1920px] mx-auto px-5 md:px-10 lg:px-16">
          <div
            className={`flex items-center justify-between transition-all duration-300 ${
              scrolled ? "h-20 lg:h-24" : "h-24 lg:h-28"
            }`}
          >
            <Link to="/" className="flex items-center flex-shrink-0">
              {/* Mobile: icon-only logo (transparent bg) */}
              <img
                src={ugsLogoIcon}
                alt="UGS"
                className={`md:hidden w-auto object-contain transition-all duration-300 ${
                  scrolled ? "h-14" : "h-16"
                }`}
              />
              {/* Desktop: full wordmark logo (transparent bg) */}
              <img
                src={ugsLogoFull}
                alt="UGS - Unicom Globalsourcing Private Limited"
                className={`hidden md:block w-auto object-contain transition-all duration-300 ${
                  scrolled ? "h-14 lg:h-16" : "h-16 lg:h-20"
                }`}
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
                className="w-7 h-7 text-[#0b3d6d]"
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
