/*
 * FORM About Page — Quiet Luxury
 * Aspirational brand story. Editorial imagery. Premium tone.
 */
import { Link } from "wouter";
import { ArrowRight } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CartDrawer from "@/components/CartDrawer";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const EDITORIAL_IMG =
  "https://d2xsxph8kpxj0f.cloudfront.net/310519663359779761/oJm2PDTFjieAQbMeNBqsvb/form-editorial-female-cream-PkCuEjR4jygjspJ9PFnkja.webp";
const ARCHITECTURE_IMG =
  "https://d2xsxph8kpxj0f.cloudfront.net/310519663359779761/oJm2PDTFjieAQbMeNBqsvb/form-editorial-hoodie-back-cdqq6NLb82fDpqCDAR5GSy.webp";
const HERO_IMG =
  "https://d2xsxph8kpxj0f.cloudfront.net/310519663359779761/oJm2PDTFjieAQbMeNBqsvb/form-editorial-couple-K4rLGFCagC5u7NTwMJUoDJ.webp";

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

export default function About() {
  return (
    <div className="min-h-screen">
      <Header />
      <CartDrawer />
      <main>
        {/* Hero */}
        <section className="relative h-[60vh] min-h-[400px] max-h-[600px] overflow-hidden">
          <img
            src={HERO_IMG}
            alt="FORM — About"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/10 to-black/40" />
          <div className="absolute inset-0 flex items-end pb-12 md:pb-16 px-5 sm:px-8 lg:px-12 max-w-[1440px] mx-auto">
            <div>
              <p className="text-[10px] font-sans font-medium tracking-luxury uppercase text-white/70 mb-3">
                The Brand
              </p>
              <h1 className="font-serif text-4xl md:text-6xl font-light text-white">
                About FORM
              </h1>
            </div>
          </div>
        </section>

        {/* Brand Story */}
        <section className="section-spacing">
          <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
              <div className="lg:col-span-5">
                <RevealSection>
                  <p className="text-[10px] font-sans font-medium tracking-luxury uppercase text-[#8A847C] mb-6">
                    Origin
                  </p>
                  <h2 className="font-serif text-3xl md:text-4xl font-light text-[#111] leading-[1.2]">
                    Born from the discipline of form.
                  </h2>
                </RevealSection>
              </div>
              <div className="lg:col-span-7">
                <RevealSection>
                  <div className="space-y-6">
                    <p className="text-sm font-sans text-[#5A554F] leading-[1.8]">
                      FORM was founded on a simple conviction: that what you wear
                      should reflect how you move through the world. Not loudly. Not
                      for attention. But with the quiet confidence that comes from
                      knowing every detail has been considered.
                    </p>
                    <p className="text-sm font-sans text-[#5A554F] leading-[1.8]">
                      Rooted in Los Angeles — a city defined by light, architecture,
                      and the tension between ambition and ease — the label exists at
                      the intersection of luxury and restraint. Each piece is designed
                      to embody presence: structured enough to hold its form, relaxed
                      enough to move with you.
                    </p>
                    <p className="text-sm font-sans text-[#5A554F] leading-[1.8]">
                      We believe in the power of essentials. In fabrics that improve
                      with wear. In silhouettes that transcend seasons. In the idea
                      that discipline and simplicity are not limitations — they are
                      the foundation of something lasting.
                    </p>
                  </div>
                </RevealSection>
              </div>
            </div>
          </div>
        </section>

        {/* Full-width Image */}
        <section className="relative h-[400px] md:h-[500px] overflow-hidden">
          <img
            src={ARCHITECTURE_IMG}
            alt="Los Angeles Architecture — FORM"
            className="w-full h-full object-cover"
            loading="lazy"
          />
        </section>

        {/* Values */}
        <section className="section-spacing">
          <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12">
            <RevealSection>
              <p className="text-[10px] font-sans font-medium tracking-luxury uppercase text-[#8A847C] mb-12 md:mb-16">
                Principles
              </p>
            </RevealSection>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-16">
              {[
                {
                  title: "Elevated Simplicity",
                  desc: "We strip away the unnecessary. Every stitch, every seam, every proportion is intentional. Luxury is not about addition — it is about refinement.",
                },
                {
                  title: "Disciplined Craft",
                  desc: "Premium heavyweight fabrics. Considered construction. Each piece is built to hold its form and improve with time. We do not cut corners.",
                },
                {
                  title: "Los Angeles Identity",
                  desc: "Concrete and sunlight. Shadow and warmth. FORM carries the energy of the city — ambitious, relaxed, and unmistakably its own.",
                },
              ].map((value) => (
                <RevealSection key={value.title}>
                  <div>
                    <h3 className="font-serif text-xl font-light text-[#111] mb-4">
                      {value.title}
                    </h3>
                    <p className="text-xs font-sans text-[#8A847C] leading-[1.8]">
                      {value.desc}
                    </p>
                  </div>
                </RevealSection>
              ))}
            </div>
          </div>
        </section>

        {/* Editorial Image + Quote */}
        <section className="grid grid-cols-1 md:grid-cols-2 min-h-[500px]">
          <div className="relative h-[350px] md:h-auto">
            <img
              src={EDITORIAL_IMG}
              alt="FORM Lifestyle"
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>
          <div className="bg-[#111] flex items-center px-8 md:px-16 lg:px-24 py-16 md:py-0">
            <RevealSection>
              <div className="max-w-md">
                <p className="font-serif text-2xl md:text-3xl font-light text-[#F5F0EB] leading-[1.4] italic mb-8">
                  &ldquo;We don&rsquo;t design for trends. We design for the
                  person who has already decided who they are.&rdquo;
                </p>
                <p className="text-[10px] font-sans font-medium tracking-editorial uppercase text-[#8A847C]">
                  FORM
                </p>
              </div>
            </RevealSection>
          </div>
        </section>

        {/* CTA */}
        <section className="section-spacing">
          <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12 text-center">
            <RevealSection>
              <p className="text-[10px] font-sans font-medium tracking-luxury uppercase text-[#8A847C] mb-6">
                The Collection
              </p>
              <h2 className="font-serif text-3xl md:text-4xl font-light text-[#111] mb-8">
                Experience FORM.
              </h2>
              <Link
                href="/collection"
                className="inline-flex items-center gap-3 bg-[#111] text-[#F5F0EB] px-10 py-4 text-[11px] font-sans font-medium tracking-editorial uppercase hover:bg-[#2C2C2C] transition-colors duration-300 group"
              >
                Shop the Collection
                <ArrowRight
                  size={14}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </Link>
            </RevealSection>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
