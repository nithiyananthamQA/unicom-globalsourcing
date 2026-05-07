import { useState, FormEvent } from "react";
import { PageHero } from "../components/PageHero";
import { Seo } from "../components/Seo";

export function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    company: "",
    country: "",
    interest: "Hospitality & Home Textiles",
    message: "",
  });

  const onChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const subject = `Sourcing Inquiry — ${form.interest}`;
    const body = `Name: ${form.name}%0AEmail: ${form.email}%0ACompany: ${form.company}%0ACountry: ${form.country}%0AInterest: ${form.interest}%0A%0AMessage:%0A${form.message}`;
    window.location.href = `mailto:arun@unicomglobalsourcing.com?subject=${encodeURIComponent(subject)}&body=${body}`;
    setSubmitted(true);
  };

  return (
    <>
      <Seo
        title="Contact"
        description="Reach UGS directly — Coimbatore, Tamil Nadu, India. Email arun@unicomglobalsourcing.com or call +91 97319 13106 to start a sourcing conversation."
        path="/contact"
      />
      <PageHero
        eyebrow="Talk to UGS"
        title="Tell us what you&rsquo;re looking to source."
        subtitle="Share your product, your target price and your timing. We&rsquo;ll come back with what is realistic from our network and what we&rsquo;d adjust."
        breadcrumb="Contact"
      />

      <section className="bg-white py-16 md:py-20 lg:py-24">
        <div className="max-w-[1280px] mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-16">
            {/* Contact info */}
            <div className="lg:col-span-2">
              <h2 className="text-2xl md:text-3xl text-[#0b3d6d] font-bold font-['Playfair_Display',serif] mb-6">
                Contact Information
              </h2>

              <div className="space-y-5">
                <a
                  href="mailto:arun@unicomglobalsourcing.com"
                  className="flex items-start gap-4 p-5 bg-[#f7fafd] rounded-xl border border-[#0b3d6d]/10 hover:border-[#7cc4ff] transition-colors group"
                >
                  <div className="w-11 h-11 rounded-lg bg-[#0b3d6d] text-white flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs tracking-[0.2em] uppercase text-[#7cc4ff] font-bold mb-1">
                      Email
                    </p>
                    <p className="text-[#0b3d6d] font-semibold group-hover:text-[#7cc4ff] transition-colors break-all">
                      arun@unicomglobalsourcing.com
                    </p>
                  </div>
                </a>

                <a
                  href="tel:+919731913106"
                  className="flex items-start gap-4 p-5 bg-[#f7fafd] rounded-xl border border-[#0b3d6d]/10 hover:border-[#7cc4ff] transition-colors group"
                >
                  <div className="w-11 h-11 rounded-lg bg-[#0b3d6d] text-white flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs tracking-[0.2em] uppercase text-[#7cc4ff] font-bold mb-1">
                      Phone &amp; WhatsApp
                    </p>
                    <p className="text-[#0b3d6d] font-semibold group-hover:text-[#7cc4ff] transition-colors">
                      +91 97319 13106
                    </p>
                  </div>
                </a>

                <div className="flex items-start gap-4 p-5 bg-[#f7fafd] rounded-xl border border-[#0b3d6d]/10">
                  <div className="w-11 h-11 rounded-lg bg-[#0b3d6d] text-white flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a2 2 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs tracking-[0.2em] uppercase text-[#7cc4ff] font-bold mb-1">
                      Headquarters
                    </p>
                    <p className="text-[#0b3d6d] font-semibold leading-snug">
                      UNICOM GLOBALSOURCING PRIVATE LIMITED
                      <br />
                      Coimbatore, Tamil Nadu, India
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-5 bg-[#f7fafd] rounded-xl border border-[#0b3d6d]/10">
                  <div className="w-11 h-11 rounded-lg bg-[#0b3d6d] text-white flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs tracking-[0.2em] uppercase text-[#7cc4ff] font-bold mb-1">
                      Working Hours
                    </p>
                    <p className="text-[#0b3d6d] font-semibold leading-snug">
                      Mon–Sat, 9:30 AM – 7:00 PM IST
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Form */}
            <div className="lg:col-span-3">
              <div className="bg-[#f7fafd] border border-[#0b3d6d]/10 rounded-2xl p-7 md:p-10">
                <h2 className="text-2xl md:text-3xl text-[#0b3d6d] font-bold font-['Playfair_Display',serif] mb-2">
                  Send us a sourcing inquiry
                </h2>
                <p className="text-[#555] mb-6 text-sm md:text-base">
                  Email and WhatsApp are the fastest ways to reach Arun directly.
                </p>

                {submitted ? (
                  <div className="bg-white border border-[#7cc4ff] rounded-xl p-6 text-center">
                    <div className="w-14 h-14 rounded-full bg-[#7cc4ff] text-[#06203a] flex items-center justify-center mx-auto mb-3">
                      <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <p className="text-[#0b3d6d] font-semibold">
                      Your email client should have opened. If not, write to us
                      at{" "}
                      <a
                        href="mailto:arun@unicomglobalsourcing.com"
                        className="underline"
                      >
                        arun@unicomglobalsourcing.com
                      </a>
                      .
                    </p>
                  </div>
                ) : (
                  <form onSubmit={onSubmit} className="space-y-5">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <Field label="Your Name" name="name" value={form.name} onChange={onChange} required />
                      <Field label="Email" type="email" name="email" value={form.email} onChange={onChange} required />
                      <Field label="Company" name="company" value={form.company} onChange={onChange} />
                      <Field label="Country" name="country" value={form.country} onChange={onChange} />
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-[#0b3d6d] mb-2">
                        Sourcing Interest
                      </label>
                      <select
                        name="interest"
                        value={form.interest}
                        onChange={onChange}
                        className="w-full px-4 py-3 rounded-lg bg-white border border-[#0b3d6d]/15 focus:border-[#7cc4ff] focus:ring-2 focus:ring-[#7cc4ff]/30 outline-none text-[#222]"
                      >
                        <option>Hospitality &amp; Home Textiles</option>
                        <option>Garment Making</option>
                        <option>Mats &amp; Floor Coverings</option>
                        <option>Bespoke / Multiple Categories</option>
                        <option>Become a Supplier</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-[#0b3d6d] mb-2">
                        Tell us about your inquiry
                      </label>
                      <textarea
                        name="message"
                        value={form.message}
                        onChange={onChange}
                        rows={5}
                        required
                        placeholder="Brief description, target volumes, target FOB, lead time, any reference samples or tech-packs you can share..."
                        className="w-full px-4 py-3 rounded-lg bg-white border border-[#0b3d6d]/15 focus:border-[#7cc4ff] focus:ring-2 focus:ring-[#7cc4ff]/30 outline-none text-[#222] leading-relaxed resize-none"
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-[#0b3d6d] text-white font-semibold hover:bg-[#06203a] hover:shadow-lg transition-all"
                    >
                      Send Inquiry
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map placeholder */}
      <section className="bg-[#f7fafd] pb-16 md:pb-20 lg:pb-24">
        <div className="max-w-[1280px] mx-auto px-6 md:px-12">
          <div className="rounded-2xl overflow-hidden border border-[#0b3d6d]/10 shadow-md">
            <iframe
              title="UGS HQ — Coimbatore"
              src="https://www.openstreetmap.org/export/embed.html?bbox=76.85,10.95,77.05,11.10&layer=mapnik&marker=11.0168,76.9558"
              className="w-full h-[360px] md:h-[420px] border-0"
              loading="lazy"
            />
          </div>
        </div>
      </section>
    </>
  );
}

interface FieldProps {
  label: string;
  name: string;
  type?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  required?: boolean;
}

function Field({ label, name, type = "text", value, onChange, required }: FieldProps) {
  return (
    <div>
      <label className="block text-sm font-semibold text-[#0b3d6d] mb-2">
        {label}
        {required && <span className="text-[#0b3d6d]/60"> *</span>}
      </label>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        required={required}
        className="w-full px-4 py-3 rounded-lg bg-white border border-[#0b3d6d]/15 focus:border-[#7cc4ff] focus:ring-2 focus:ring-[#7cc4ff]/30 outline-none text-[#222]"
      />
    </div>
  );
}
