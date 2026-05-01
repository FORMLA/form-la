/*
 * FORM Homepage — Quiet Luxury
 * All imagery: AI-generated, brand-consistent FORM visuals
 */
import { useState } from "react";
import { Link } from "wouter";
import { ArrowRight } from "lucide-react";
import { toast } from "sonner";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CartDrawer from "@/components/CartDrawer";
import ProductCard from "@/components/ProductCard";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { getFeaturedProducts, getSignatureProducts } from "@/lib/products";

/* ─── Brand-matched CDN images ─── */
const IMG = {
  hero: "https://d2xsxph8kpxj0f.cloudfront.net/310519663359779761/oJm2PDTFjieAQbMeNBqsvb/form-editorial-couple-K4rLGFCagC5u7NTwMJUoDJ.webp",
  hoodieFlat: "https://d2xsxph8kpxj0f.cloudfront.net/310519663359779761/oJm2PDTFjieAQbMeNBqsvb/form-hoodie-real-DNNo7xWwiysBKYW6bURAoJ.webp",
  heavyweightHoodieBlack: "https://d2xsxph8kpxj0f.cloudfront.net/310519663359779761/oJm2PDTFjieAQbMeNBqsvb/form-heavyweight-hoodie-edited_e5cd32d5.png",
  teeFlat: "https://d2xsxph8kpxj0f.cloudfront.net/310519663359779761/oJm2PDTFjieAQbMeNBqsvb/form-tee-branded-v2-Y6DqArgmZZv9DLXRiNzGmq.webp",
  sweatpantsFlat: "https://d2xsxph8kpxj0f.cloudfront.net/310519663359779761/oJm2PDTFjieAQbMeNBqsvb/form-sweatpants-real-iBy2a7tbSE2tAAMUHQPFhi.webp",
  maleStreet: "https://d2xsxph8kpxj0f.cloudfront.net/310519663359779761/oJm2PDTFjieAQbMeNBqsvb/form-editorial-male-street-VBGJCJvrgNyG8Li7CzeuFY.webp",
  female: "https://d2xsxph8kpxj0f.cloudfront.net/310519663359779761/oJm2PDTFjieAQbMeNBqsvb/form-editorial-female-cream-PkCuEjR4jygjspJ9PFnkja.webp",
  hoodieBack: "https://d2xsxph8kpxj0f.cloudfront.net/310519663359779761/oJm2PDTFjieAQbMeNBqsvb/form-editorial-hoodie-back-cdqq6NLb82fDpqCDAR5GSy.webp",
  maleCap: "https://d2xsxph8kpxj0f.cloudfront.net/310519663359779761/oJm2PDTFjieAQbMeNBqsvb/form-editorial-male-cap-back-Ut7WfmcMDnFgquJz4o4skD.webp",
};

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

/* ─── Hero ─── */
function HeroSection() {
  return (
    <section className="relative h-screen min-h-[600px] max-h-[1000px] overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={IMG.hero}
          alt="FORM — Elevated Essentials"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/25 via-black/5 to-black/50" />
      </div>
      <div className="relative z-10 h-full flex flex-col justify-end pb-16 md:pb-24 px-5 sm:px-8 lg:px-12 max-w-[1440px] mx-auto">
        <div className="max-w-xl">
          <p className="text-[10px] font-sans font-medium tracking-luxury uppercase text-white/70 mb-4">
            Los Angeles
          </p>
          <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl font-light text-white leading-[1.05] mb-3">
            Elevated Essentials.
          </h1>
          <p className="text-sm md:text-base font-serif font-light text-white/80 italic mb-8">
            Minimal Style. Los Angeles Edge.
          </p>
          <Link
            href="/collection"
            className="inline-flex items-center gap-3 text-[11px] font-sans font-medium tracking-editorial uppercase text-white border-b border-white/40 pb-1 hover:border-white transition-all duration-300 group"
          >
            Shop the Collection
            <ArrowRight
              size={14}
              className="transition-transform duration-300 group-hover:translate-x-1"
            />
          </Link>
        </div>
      </div>
    </section>
  );
}

/* ─── Brand Statement ─── */
function BrandStatement() {
  return (
    <section className="section-spacing">
      <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12">
        <RevealSection>
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-[10px] font-sans font-medium tracking-luxury uppercase text-[#8A847C] mb-8">
              The Label
            </p>
            <p className="font-serif text-2xl md:text-3xl lg:text-4xl font-light text-[#111] leading-[1.35]">
              FORM is a modern Los Angeles lifestyle label built on
              confidence, discipline, and elevated simplicity. Designed for
              everyday wear with a luxury feel — each piece is made to embody
              presence, comfort, and effortless style.
            </p>
            <div className="luxury-rule w-12 mx-auto mt-10" />
          </div>
        </RevealSection>
      </div>
    </section>
  );
}

/* ─── Shop the Collection — 3-column product showcase ─── */
function ShopCollection() {
  const signatureProducts = getSignatureProducts();
  const showcase = [
    {
      product: signatureProducts[1],
      image: IMG.teeFlat,
      name: "FORM Tee",
    },
    {
      product: signatureProducts[0],
      image: IMG.hoodieFlat,
      name: "FORM Hoodie",
    },
    {
      product: signatureProducts[2],
      image: IMG.sweatpantsFlat,
      name: "FORM Sweatpants",
    },
  ];

  return (
    <section className="section-spacing bg-[#F5F0EB]">
      <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12">
        <RevealSection>
          <h2 className="text-[11px] font-sans font-medium tracking-luxury uppercase text-[#111] text-center mb-12 md:mb-16">
            Shop the Collection
          </h2>
        </RevealSection>

        <RevealSection>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 md:gap-8">
            {showcase.map((item) => (
              <Link
                key={item.name}
                href={`/product/${item.product?.slug || "heavyweight-hoodie"}`}
                className="group text-center"
              >
                <div className="aspect-[3/4] bg-[#EDEAE6] overflow-hidden mb-5">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                    loading="lazy"
                  />
                </div>
                <h3 className="text-[11px] font-sans font-medium tracking-editorial uppercase text-[#111] mb-3">
                  {item.name}
                </h3>
                <span className="inline-block text-[10px] font-sans font-medium tracking-editorial uppercase text-[#111] border border-[#111]/20 px-5 py-2 group-hover:bg-[#111] group-hover:text-[#F5F0EB] transition-all duration-300">
                  Shop Now
                </span>
              </Link>
            ))}
          </div>
        </RevealSection>
      </div>
    </section>
  );
}

/* ─── Lookbook Section — 3-column editorial grid ─── */
function LookbookSection() {
  const images = [
    { src: IMG.maleStreet, alt: "FORM — Street Editorial" },
    { src: IMG.female, alt: "FORM — Cream Collection" },
    { src: IMG.maleCap, alt: "FORM — Cap Editorial" },
  ];

  return (
    <section className="section-spacing">
      <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12">
        <RevealSection>
          <h2 className="text-[11px] font-sans font-medium tracking-luxury uppercase text-[#111] text-center mb-12 md:mb-16">
            Lookbook
          </h2>
        </RevealSection>

        <RevealSection>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-6">
            {images.map((img, i) => (
              <Link href="/lookbook" key={i} className="group">
                <div className="aspect-[3/4] overflow-hidden">
                  <img
                    src={img.src}
                    alt={img.alt}
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                    loading="lazy"
                  />
                </div>
              </Link>
            ))}
          </div>
        </RevealSection>
      </div>
    </section>
  );
}

/* ─── Full Collection Grid ─── */
function FullCollection() {
  const products = getFeaturedProducts();
  return (
    <section className="section-spacing bg-[#F5F0EB]">
      <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12">
        <RevealSection>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-12 md:mb-16">
            <div>
              <p className="text-[10px] font-sans font-medium tracking-luxury uppercase text-[#8A847C] mb-3">
                Collection 001
              </p>
              <h2 className="font-serif text-3xl md:text-4xl font-light text-[#111]">
                The Essentials
              </h2>
            </div>
            <Link
              href="/collection"
              className="mt-4 md:mt-0 inline-flex items-center gap-2 text-[11px] font-sans font-medium tracking-editorial uppercase text-[#111] hover:opacity-60 transition-opacity group"
            >
              View All
              <ArrowRight
                size={13}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </Link>
          </div>
        </RevealSection>

        <RevealSection>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </RevealSection>
      </div>
    </section>
  );
}

/* ─── Editorial / Lifestyle ─── */
function EditorialSection() {
  return (
    <section className="relative overflow-hidden">
      <div className="grid grid-cols-1 md:grid-cols-2 min-h-[600px] md:min-h-[700px]">
        {/* Image — hoodie back with LA skyline */}
        <div className="relative h-[400px] md:h-auto">
          <img
            src={IMG.hoodieBack}
            alt="FORM — Hoodie Back View, Los Angeles"
            className="w-full h-full object-cover"
            loading="lazy"
          />
        </div>

        {/* Content */}
        <div className="bg-[#111] flex items-center px-8 md:px-16 lg:px-24 py-16 md:py-0">
          <RevealSection>
            <div className="max-w-md">
              <p className="text-[10px] font-sans font-medium tracking-luxury uppercase text-[#8A847C] mb-6">
                Campaign 001
              </p>
              <h2 className="font-serif text-3xl md:text-4xl font-light text-[#F5F0EB] leading-[1.2] mb-6">
                Designed for<br />
                everyday discipline.
              </h2>
              <p className="text-sm font-sans text-[#8A847C] leading-relaxed mb-8">
                Los Angeles light. Concrete and shadow. The quiet confidence of
                knowing what you wear reflects who you are. FORM exists at the
                intersection of luxury and restraint — where every detail is
                intentional and nothing is excess.
              </p>
              <Link
                href="/about"
                className="inline-flex items-center gap-2 text-[11px] font-sans font-medium tracking-editorial uppercase text-[#F5F0EB] border-b border-[#F5F0EB]/30 pb-0.5 hover:border-[#F5F0EB] transition-all duration-300 group"
              >
                The Story
                <ArrowRight
                  size={13}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </Link>
            </div>
          </RevealSection>
        </div>
      </div>
    </section>
  );
}

/* ─── FORM Women ─── */
function FormWomen() {
  return (
    <section className="section-spacing">
      <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12">
        <RevealSection>
          <div className="text-center mb-12 md:mb-16">
            <p className="text-[10px] font-sans font-medium tracking-luxury uppercase text-[#8A847C] mb-6">
              Introducing
            </p>
            <h2 className="font-serif text-3xl md:text-5xl font-light text-[#111] mb-4">
              FORM Women
            </h2>
            <p className="font-serif text-base md:text-lg font-light text-[#8A847C] italic max-w-md mx-auto">
              Designed for strength, presence, and femininity.
            </p>
          </div>
        </RevealSection>

        <RevealSection>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
            <div className="aspect-[3/4] overflow-hidden group">
              <img
                src="https://d2xsxph8kpxj0f.cloudfront.net/310519663359779761/oJm2PDTFjieAQbMeNBqsvb/form-women-editorial-gvSJHbJ27KTCMg9FRdN4Ui.webp"
                alt="FORM Women — Cream Collection"
                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                loading="lazy"
              />
            </div>
            <div className="aspect-[3/4] overflow-hidden group">
              <img
                src="https://d2xsxph8kpxj0f.cloudfront.net/310519663359779761/oJm2PDTFjieAQbMeNBqsvb/form-women-editorial-2-jz9T3L3yUYVnqcpvnwT8W7.webp"
                alt="FORM Women — Black Collection"
                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                loading="lazy"
              />
            </div>
          </div>
        </RevealSection>

        <RevealSection>
          <div className="text-center mt-10 md:mt-14">
            <p className="text-xs font-sans text-[#8A847C] leading-relaxed max-w-lg mx-auto mb-8">
              A refined, feminine extension of the FORM identity. Clean silhouettes,
              neutral tones, and premium fabrics — designed with the same intention
              and elevated simplicity.
            </p>
            <span
              onClick={() => toast("FORM Women — Coming Soon")}
              className="inline-block cursor-pointer text-[11px] font-sans font-medium tracking-editorial uppercase text-[#111] border border-[#111]/20 px-8 py-3 hover:bg-[#111] hover:text-[#F5F0EB] transition-all duration-300"
            >
              Coming Soon
            </span>
          </div>
        </RevealSection>
      </div>
    </section>
  );
}

/* ——— Why FORM ——— */
function WhyForm() {
  const points = [
    {
      number: "01",
      title: "Premium Fabrics",
      desc: "Heavyweight construction. Every piece is crafted from carefully sourced materials that hold their form and improve with wear.",
    },
    {
      number: "02",
      title: "Elevated Fit",
      desc: "Oversized silhouettes with intentional proportions. Designed to drape with structure, not just hang.",
    },
    {
      number: "03",
      title: "Minimal Luxury",
      desc: "Clean branding. Refined details. The confidence of restraint — where less communicates more.",
    },
    {
      number: "04",
      title: "Everyday Discipline",
      desc: "Designed for the modern everyday. From the studio to the street, each piece transitions with purpose.",
    },
  ];

  return (
    <section className="section-spacing">
      <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12">
        <RevealSection>
          <p className="text-[10px] font-sans font-medium tracking-luxury uppercase text-[#8A847C] mb-12 md:mb-16">
            The Standard
          </p>
        </RevealSection>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {points.map((point) => (
            <RevealSection key={point.number}>
              <div>
                <span className="text-[10px] font-mono text-[#C4BDB4] block mb-4">
                  {point.number}
                </span>
                <h3 className="text-sm font-sans font-medium text-[#111] mb-3">
                  {point.title}
                </h3>
                <p className="text-xs font-sans text-[#8A847C] leading-relaxed">
                  {point.desc}
                </p>
              </div>
            </RevealSection>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── Social Proof ─── */
function SocialProof() {
  const testimonials = [
    {
      quote:
        "The weight of the fabric alone tells you this is different. FORM understands that luxury is felt, not announced.",
      author: "Editorial Review",
      source: "Highsnobiety",
    },
    {
      quote:
        "Finally, a brand that treats basics as something worth perfecting. The hoodie is the best I own.",
      author: "Community",
      source: "@form.community",
    },
    {
      quote:
        "Clean, considered, and unmistakably LA. This is what modern essentials should look like.",
      author: "Press",
      source: "Hypebeast",
    },
  ];

  return (
    <section className="section-spacing bg-[#F5F0EB]">
      <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12">
        <RevealSection>
          <p className="text-[10px] font-sans font-medium tracking-luxury uppercase text-[#8A847C] mb-12 md:mb-16 text-center">
            Voices
          </p>
        </RevealSection>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {testimonials.map((t, i) => (
            <RevealSection key={i}>
              <div className="text-center">
                <p className="font-serif text-lg md:text-xl font-light text-[#111] leading-[1.5] mb-6 italic">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <p className="text-[10px] font-sans font-medium tracking-editorial uppercase text-[#8A847C]">
                  {t.author}
                </p>
                <p className="text-[10px] font-sans text-[#C4BDB4] mt-1">
                  {t.source}
                </p>
              </div>
            </RevealSection>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── Email Capture ─── */
function EmailCapture() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      toast("Welcome to the FORM world.");
      setEmail("");
    }
  };

  return (
    <section className="section-spacing">
      <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12">
        <RevealSection>
          <div className="max-w-lg mx-auto text-center">
            <p className="text-[10px] font-sans font-medium tracking-luxury uppercase text-[#8A847C] mb-6">
              Stay Connected
            </p>
            <h2 className="font-serif text-2xl md:text-3xl font-light text-[#111] mb-4">
              Join the FORM world.
            </h2>
            <p className="text-xs font-sans text-[#8A847C] leading-relaxed mb-8">
              Be first to access new drops, exclusive releases, and campaign
              updates.
            </p>
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email address"
                required
                className="flex-1 bg-transparent border border-[#111]/15 px-4 py-3.5 text-xs font-sans text-[#111] placeholder:text-[#C4BDB4] focus:outline-none focus:border-[#111]/40 transition-colors"
              />
              <button
                type="submit"
                className="bg-[#111] text-[#F5F0EB] px-8 py-3.5 text-[11px] font-sans font-medium tracking-editorial uppercase hover:bg-[#2C2C2C] transition-colors duration-300 flex-shrink-0"
              >
                Subscribe
              </button>
            </form>
          </div>
        </RevealSection>
      </div>
    </section>
  );
}

/* ─── Home Page ─── */
export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <CartDrawer />
      <main>
        <HeroSection />
        <BrandStatement />
        <ShopCollection />
        <LookbookSection />
        <EditorialSection />
        <FormWomen />
        <WhyForm />
        <SocialProof />
        <EmailCapture />
      </main>
      <Footer />
    </div>
  );
}
