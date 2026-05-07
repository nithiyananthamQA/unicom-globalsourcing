import { Link } from "react-router";
import ugsLogo from "../../assets/ugs-logo-full-white.png";

export function Footer() {
  return (
    <footer className="bg-[#06203a] text-white">
      <div className="max-w-[1920px] mx-auto px-6 md:px-12 lg:px-20 py-14 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-12">
          <div className="lg:col-span-1">
            <img
              src={ugsLogo}
              alt="UGS - Unicom Globalsourcing"
              className="h-16 md:h-20 w-auto object-contain mb-6"
            />
            <p className="text-sm leading-relaxed text-white/80">
              Unicom Globalsourcing Private Limited — your strategic sourcing
              and supply chain partner, connecting global buyers with
              India&rsquo;s premier manufacturing capabilities.
            </p>
          </div>

          <div>
            <h4 className="text-base md:text-lg font-bold mb-5 text-[#7cc4ff]">
              Contact
            </h4>
            <div className="space-y-4 text-sm text-white/85">
              <div className="flex items-start gap-3">
                <svg className="w-5 h-5 mt-0.5 flex-shrink-0 text-[#7cc4ff]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a2 2 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <p>Coimbatore, Tamil Nadu, India</p>
              </div>
              <div className="flex items-center gap-3">
                <svg className="w-5 h-5 flex-shrink-0 text-[#7cc4ff]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <a href="tel:+919731913106" className="hover:text-[#7cc4ff] transition-colors">
                  +91 97319 13106
                </a>
              </div>
              <div className="flex items-center gap-3">
                <svg className="w-5 h-5 flex-shrink-0 text-[#7cc4ff]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <a href="mailto:arun@unicomglobalsourcing.com" className="hover:text-[#7cc4ff] transition-colors break-all">
                  arun@unicomglobalsourcing.com
                </a>
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-base md:text-lg font-bold mb-5 text-[#7cc4ff]">
              Quick Links
            </h4>
            <nav className="space-y-2.5 text-sm">
              {[
                ["/", "Home"],
                ["/about", "About"],
                ["/products", "Products"],
                ["/advantage", "UGS Advantage"],
                ["/suppliers", "Suppliers"],
                ["/contact", "Contact"],
              ].map(([to, label]) => (
                <Link
                  key={to}
                  to={to}
                  className="block text-white/80 hover:text-[#7cc4ff] transition-colors"
                >
                  {label}
                </Link>
              ))}
            </nav>
          </div>

          <div>
            <h4 className="text-base md:text-lg font-bold mb-5 text-[#7cc4ff]">
              Product Verticals
            </h4>
            <ul className="space-y-2.5 text-sm text-white/80">
              <li>Hospitality &amp; Home Textiles</li>
              <li>Garment Making</li>
              <li>Mats &amp; Floor Coverings</li>
              <li>Bespoke Sourcing Solutions</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/15 mt-12 pt-6 flex flex-col md:flex-row justify-between items-center gap-3 text-xs md:text-sm text-white/60">
          <p>© {new Date().getFullYear()} UNICOM GLOBALSOURCING PRIVATE LIMITED. All rights reserved.</p>
          <p>Strategic Sourcing &amp; Supply Chain Partner</p>
        </div>
      </div>
    </footer>
  );
}
