/*
 * FORM Lookbook — Editorial Fashion Page
 * Full-width imagery, minimal text, cinematic pacing.
 * All imagery: AI-generated, brand-consistent FORM visuals.
 */
import { useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CartDrawer from "@/components/CartDrawer";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Link } from "wouter";

/* ─── Brand-matched CDN images ─── */
const IMG = {
  hero: "https://d2xsxph8kpxj0f.cloudfront.net/310519663359779761/oJm2PDTFjieAQbMeNBqsvb/form-editorial-couple-K4rLGFCagC5u7NTwMJUoDJ.webp",
  maleStreet: "https://d2xsxph8kpxj0f.cloudfront.net/310519663359779761/oJm2PDTFjieAQbMeNBqsvb/form-editorial-male-street-VBGJCJvrgNyG8Li7CzeuFY.webp",
  female: "https://d2xsxph8kpxj0f.cloudfront.net/310519663359779761/oJm2PDTFjieAQbMeNBqsvb/form-editorial-female-cream-PkCuEjR4jygjspJ9PFnkja.webp",
  hoodieBack: "https://d2xsxph8kpxj0f.cloudfront.net/310519663359779761/oJm2PDTFjieAQbMeNBqsvb/form-editorial-hoodie-back-cdqq6NLb82fDpqCDAR5GSy.webp",
  maleCap: "https://d2xsxph8kpxj0f.cloudfront.net/310519663359779761/oJm2PDTFjieAQbMeNBqsvb/form-editorial-male-cap-back-Ut7WfmcMDnFgquJz4o4skD.webp",
};

function RevealSection({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  const ref = useScrollReveal();
  return (
    <div ref={ref} className={`fade-up ${className}`}>
      {children}
    </div>
  );
}

export default function Lookbook() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-[#F5F0EB]">
      <Header />
      <CartDrawer />

      {/* ─── Opening Hero — Male street editorial ─── */}
      <section className="relative h-screen overflow-hidden">
        <img
          src={IMG.maleStreet}
          alt="FORM Lookbook — Street Editorial"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/20" />
        <div className="absolute inset-0 flex flex-col items-center justify-end pb-20 md:pb-28">
          <p className="text-[10px] font-sans font-medium tracking-luxury uppercase text-white/70 mb-5">
            Volume One
          </p>
          <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl font-light text-white tracking-tight text-center leading-[0.95]">
            Lookbook
          </h1>
        </div>
      </section>

      {/* ─── Brand Statement ─── */}
      <section className="py-28 md:py-40 lg:py-52 px-6 md:px-16 lg:px-24">
        <RevealSection>
          <div className="max-w-3xl mx-auto text-center">
            <p className="font-serif text-3xl md:text-4xl lg:text-[2.75rem] font-light text-[#111] leading-[1.25] tracking-tight">
              Built for presence.<br />
              Designed for everyday discipline.
            </p>
          </div>
        </RevealSection>
      </section>

      {/* ─── Full-Width Image — Female model, cream collection ─── */}
      <RevealSection>
        <section className="px-4 md:px-8 lg:px-12">
          <div className="w-full overflow-hidden">
            <img
              src={IMG.female}
              alt="FORM — Cream Collection"
              className="w-full h-[50vh] md:h-[65vh] lg:h-[75vh] object-cover"
            />
          </div>
        </section>
      </RevealSection>

      {/* ─── Editorial Text Block ─── */}
      <section className="py-24 md:py-36 lg:py-44 px-6 md:px-16 lg:px-24">
        <RevealSection>
          <div className="max-w-2xl">
            <p className="text-[10px] font-sans font-medium tracking-luxury uppercase text-[#A09A92] mb-8">
              The Intention
            </p>
            <p className="font-serif text-2xl md:text-3xl font-light text-[#111] leading-[1.35] tracking-tight">
              Every piece begins with restraint. We remove what doesn't serve the
              silhouette, the fabric, the person wearing it. What remains is
              essential.
            </p>
          </div>
        </RevealSection>
      </section>

      {/* ─── Two-Column Image Grid — Hoodie back + Cap editorial ─── */}
      <section className="px-4 md:px-8 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5">
          <RevealSection>
            <div className="overflow-hidden">
              <img
                src={IMG.hoodieBack}
                alt="FORM Hoodie — Back View, LA Skyline"
                className="w-full h-[65vh] md:h-[80vh] object-cover"
              />
            </div>
          </RevealSection>
          <RevealSection>
            <div className="overflow-hidden">
              <img
                src={IMG.maleCap}
                alt="FORM Cap — LA Skyline"
                className="w-full h-[65vh] md:h-[80vh] object-cover"
              />
            </div>
          </RevealSection>
        </div>
      </section>

      {/* ─── Centered Quote ─── */}
      <section className="py-28 md:py-40 lg:py-52 px-6 md:px-16 lg:px-24">
        <RevealSection>
          <div className="max-w-xl mx-auto text-center">
            <p className="font-serif text-2xl md:text-3xl lg:text-[2.25rem] font-light text-[#111] leading-[1.3] tracking-tight italic">
              "Discipline is the bridge between intention and identity."
            </p>
            <div className="w-12 h-px bg-[#111]/10 mx-auto mt-10" />
          </div>
        </RevealSection>
      </section>

      {/* ─── Full-Width Cinematic Image — Hero rooftop ─── */}
      <RevealSection>
        <section className="px-4 md:px-8 lg:px-12">
          <div className="w-full overflow-hidden">
            <img
              src={IMG.hero}
              alt="FORM — Los Angeles Rooftop"
              className="w-full h-[40vh] md:h-[55vh] lg:h-[65vh] object-cover"
            />
          </div>
        </section>
      </RevealSection>

      {/* ─── Editorial Text Block ─── */}
      <section className="py-24 md:py-36 lg:py-44 px-6 md:px-16 lg:px-24">
        <RevealSection>
          <div className="max-w-2xl ml-auto text-right">
            <p className="text-[10px] font-sans font-medium tracking-luxury uppercase text-[#A09A92] mb-8">
              The Standard
            </p>
            <p className="font-serif text-2xl md:text-3xl font-light text-[#111] leading-[1.35] tracking-tight">
              Heavyweight cotton. Structured seams. Garment-dyed in small batches.
              Every detail considered. Nothing decorative — only deliberate.
            </p>
          </div>
        </RevealSection>
      </section>

      {/* ─── Final Full-Width Image — Male street walk ─── */}
      <RevealSection>
        <section className="px-4 md:px-8 lg:px-12">
          <div className="w-full overflow-hidden">
            <img
              src={IMG.maleStreet}
              alt="FORM — West Hollywood Editorial"
              className="w-full h-[50vh] md:h-[65vh] lg:h-[75vh] object-cover"
            />
          </div>
        </section>
      </RevealSection>

      {/* ─── Closing CTA ─── */}
      <section className="py-28 md:py-40 lg:py-48 px-6 md:px-16 lg:px-24">
        <RevealSection>
          <div className="max-w-xl mx-auto text-center">
            <p className="text-[10px] font-sans font-medium tracking-luxury uppercase text-[#A09A92] mb-8">
              Explore
            </p>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-light text-[#111] tracking-tight mb-10">
              The Collection
            </h2>
            <Link
              href="/collection"
              className="inline-block bg-[#111] text-[#F5F0EB] px-12 py-4 text-[10.5px] font-sans font-medium tracking-luxury uppercase hover:bg-[#2C2C2C] transition-colors duration-500"
            >
              Shop Now
            </Link>
          </div>
        </RevealSection>
      </section>

      <Footer />
    </div>
  );
}
