/*
 * FORM Contact Page — Quiet Luxury
 * Minimal contact form. Social links. Wholesale inquiry.
 */
import { useState } from "react";
import { toast } from "sonner";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CartDrawer from "@/components/CartDrawer";
import { useScrollReveal } from "@/hooks/useScrollReveal";

function RevealSection({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const ref = useScrollReveal(0.08);
  return (
    <div ref={ref} className={`fade-up ${className}`}>
      {children}
    </div>
  );
}

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "general",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast("Message sent. We will be in touch.");
    setFormData({ name: "", email: "", subject: "general", message: "" });
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="min-h-screen">
      <Header />
      <CartDrawer />
      <main>
        {/* Header */}
        <section className="pt-28 md:pt-36 pb-12 md:pb-16">
          <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12">
            <RevealSection>
              <p className="text-[10px] font-sans font-medium tracking-luxury uppercase text-[#8A847C] mb-3">
                Get in Touch
              </p>
              <h1 className="font-serif text-3xl md:text-5xl font-light text-[#111]">
                Contact
              </h1>
            </RevealSection>
          </div>
        </section>

        {/* Content */}
        <section className="pb-20 md:pb-32">
          <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">
              {/* Form */}
              <div className="lg:col-span-7">
                <RevealSection>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div>
                        <label className="text-[11px] font-sans font-medium tracking-editorial uppercase text-[#111] block mb-2">
                          Name
                        </label>
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          className="w-full bg-transparent border-b border-[#111]/15 pb-3 text-sm font-sans text-[#111] placeholder:text-[#C4BDB4] focus:outline-none focus:border-[#111]/40 transition-colors"
                          placeholder="Your name"
                        />
                      </div>
                      <div>
                        <label className="text-[11px] font-sans font-medium tracking-editorial uppercase text-[#111] block mb-2">
                          Email
                        </label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className="w-full bg-transparent border-b border-[#111]/15 pb-3 text-sm font-sans text-[#111] placeholder:text-[#C4BDB4] focus:outline-none focus:border-[#111]/40 transition-colors"
                          placeholder="your@email.com"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="text-[11px] font-sans font-medium tracking-editorial uppercase text-[#111] block mb-2">
                        Subject
                      </label>
                      <select
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        className="w-full bg-transparent border-b border-[#111]/15 pb-3 text-sm font-sans text-[#111] focus:outline-none focus:border-[#111]/40 transition-colors"
                      >
                        <option value="general">General Inquiry</option>
                        <option value="order">Order Support</option>
                        <option value="wholesale">Wholesale / Business</option>
                        <option value="press">Press / Media</option>
                        <option value="collaboration">Collaboration</option>
                      </select>
                    </div>

                    <div>
                      <label className="text-[11px] font-sans font-medium tracking-editorial uppercase text-[#111] block mb-2">
                        Message
                      </label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={6}
                        className="w-full bg-transparent border-b border-[#111]/15 pb-3 text-sm font-sans text-[#111] placeholder:text-[#C4BDB4] focus:outline-none focus:border-[#111]/40 transition-colors resize-none"
                        placeholder="Your message"
                      />
                    </div>

                    <button
                      type="submit"
                      className="bg-[#111] text-[#F5F0EB] px-10 py-4 text-[11px] font-sans font-medium tracking-editorial uppercase hover:bg-[#2C2C2C] transition-colors duration-300"
                    >
                      Send Message
                    </button>
                  </form>
                </RevealSection>
              </div>

              {/* Info Sidebar */}
              <div className="lg:col-span-5">
                <RevealSection>
                  <div className="space-y-10">
                    {/* Email */}
                    <div>
                      <h3 className="text-[11px] font-sans font-medium tracking-editorial uppercase text-[#111] mb-3">
                        Email
                      </h3>
                      <a
                        href="mailto:info@wearform.com"
                        className="text-sm font-sans text-[#8A847C] hover:text-[#111] transition-colors"
                      >
                        info@wearform.com
                      </a>
                    </div>

                    {/* Wholesale */}
                    <div>
                      <h3 className="text-[11px] font-sans font-medium tracking-editorial uppercase text-[#111] mb-3">
                        Wholesale & Business
                      </h3>
                      <p className="text-sm font-sans text-[#8A847C] leading-relaxed">
                        For wholesale inquiries, stockist applications, and
                        business partnerships, please reach out directly.
                      </p>
                      <a
                        href="mailto:wholesale@wearform.com"
                        className="text-sm font-sans text-[#8A847C] hover:text-[#111] transition-colors mt-1 inline-block"
                      >
                        wholesale@wearform.com
                      </a>
                    </div>

                    {/* Social */}
                    <div>
                      <h3 className="text-[11px] font-sans font-medium tracking-editorial uppercase text-[#111] mb-3">
                        Follow
                      </h3>
                      <div className="flex flex-col gap-2">
                        <a
                          href="https://instagram.com/form"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-sm font-sans text-[#8A847C] hover:text-[#111] transition-colors"
                        >
                          Instagram
                        </a>
                        <a
                          href="https://tiktok.com/@form"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-sm font-sans text-[#8A847C] hover:text-[#111] transition-colors"
                        >
                          TikTok
                        </a>
                      </div>
                    </div>

                    {/* Location */}
                    <div>
                      <h3 className="text-[11px] font-sans font-medium tracking-editorial uppercase text-[#111] mb-3">
                        Location
                      </h3>
                      <p className="text-sm font-sans text-[#8A847C] leading-relaxed">
                        Los Angeles, California
                      </p>
                    </div>
                  </div>
                </RevealSection>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
