/*
 * FORM Product Page — Quiet Luxury
 * Large imagery, size selector, add to cart, fabric details, related products.
 * Size Guide overlay integrated.
 */
import { useState } from "react";
import { useParams, Link } from "wouter";
import { Minus, Plus, ArrowLeft } from "lucide-react";
import { toast } from "sonner";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CartDrawer from "@/components/CartDrawer";
import ProductCard from "@/components/ProductCard";
import SizeGuide from "@/components/SizeGuide";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { useCart } from "@/contexts/CartContext";
import { getProductBySlug, products } from "@/lib/products";

function RevealSection({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const ref = useScrollReveal(0.05);
  return (
    <div ref={ref} className={`fade-up ${className}`}>
      {children}
    </div>
  );
}

function getSizeCategory(categorySlug: string): string {
  if (categorySlug === "sweatpants" || categorySlug === "shorts") {
    return "bottoms";
  }
  return "tops";
}

export default function ProductPage() {
  const { slug } = useParams<{ slug: string }>();
  const product = getProductBySlug(slug || "");
  const { addItem } = useCart();
  const [selectedSize, setSelectedSize] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [activeImage, setActiveImage] = useState(0);
  const [expandedSection, setExpandedSection] = useState<string | null>(null);
  const [sizeGuideOpen, setSizeGuideOpen] = useState(false);

  if (!product) {
    return (
      <div className="min-h-screen">
        <Header />
        <div className="pt-32 text-center">
          <p className="font-serif text-2xl text-[#111]">Product not found</p>
          <Link
            href="/collection"
            className="mt-4 inline-block text-xs font-sans text-[#8A847C] hover:text-[#111] transition-colors"
          >
            Return to Collection
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  const relatedProducts = products
    .filter((p) => p.id !== product.id)
    .slice(0, 4);

  const handleAddToCart = () => {
    if (!selectedSize) {
      toast("Please select a size.");
      return;
    }
    addItem(product, selectedSize, quantity);
    toast(`${product.name} added to cart.`);
  };

  const toggleSection = (section: string) => {
    setExpandedSection(expandedSection === section ? null : section);
  };

  return (
    <div className="min-h-screen">
      <Header />
      <CartDrawer />
      <SizeGuide
        open={sizeGuideOpen}
        onClose={() => setSizeGuideOpen(false)}
        category={getSizeCategory(product.categorySlug)}
      />
      <main>
        {/* Breadcrumb */}
        <section className="pt-24 md:pt-28 pb-4">
          <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12">
            <Link
              href="/collection"
              className="inline-flex items-center gap-2 text-[10px] font-sans text-[#8A847C] hover:text-[#111] transition-colors tracking-editorial uppercase"
            >
              <ArrowLeft size={12} />
              Back to Collection
            </Link>
          </div>
        </section>

        {/* Product Detail */}
        <section className="pb-16 md:pb-24">
          <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16">
              {/* Image Gallery */}
              <div className="lg:col-span-7">
                {/* Main Image */}
                <div className="aspect-[3/4] bg-[#E8E2DA] overflow-hidden mb-3">
                  <img
                    src={product.images[activeImage]}
                    alt={product.name}
                    className="w-full h-full object-cover transition-opacity duration-500"
                  />
                </div>

                {/* Thumbnails */}
                <div className="flex gap-2">
                  {product.images.map((img, i) => (
                    <button
                      key={i}
                      onClick={() => setActiveImage(i)}
                      className={`w-16 h-20 md:w-20 md:h-24 bg-[#E8E2DA] overflow-hidden transition-opacity duration-300 ${
                        activeImage === i
                          ? "opacity-100 ring-1 ring-[#111]"
                          : "opacity-50 hover:opacity-80"
                      }`}
                    >
                      <img
                        src={img}
                        alt={`${product.name} view ${i + 1}`}
                        className="w-full h-full object-cover"
                      />
                    </button>
                  ))}
                </div>
              </div>

              {/* Product Info */}
              <div className="lg:col-span-5 lg:sticky lg:top-28 lg:self-start">
                <div className="lg:max-w-md">
                  <p className="text-[10px] font-sans font-medium tracking-luxury uppercase text-[#8A847C] mb-3">
                    {product.category}
                  </p>
                  <h1 className="font-serif text-3xl md:text-4xl font-light text-[#111] mb-3">
                    {product.name}
                  </h1>
                  <p className="text-lg font-mono text-[#111] mb-6">
                    ${product.price}
                  </p>

                  <p className="text-sm font-sans text-[#5A554F] leading-relaxed mb-8">
                    {product.description}
                  </p>

                  {/* Size Selector */}
                  <div className="mb-6">
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-[11px] font-sans font-medium tracking-editorial uppercase text-[#111]">
                        Size
                      </span>
                      <button
                        onClick={() => setSizeGuideOpen(true)}
                        className="text-[10px] font-sans text-[#8A847C] underline underline-offset-2 hover:text-[#111] transition-colors duration-500"
                      >
                        Size Guide
                      </button>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {product.sizes.map((size) => (
                        <button
                          key={size}
                          onClick={() => setSelectedSize(size)}
                          className={`min-w-[48px] h-11 px-4 text-xs font-sans font-medium transition-all duration-300 ${
                            selectedSize === size
                              ? "bg-[#111] text-[#F5F0EB]"
                              : "bg-transparent border border-[#111]/15 text-[#111] hover:border-[#111]/40"
                          }`}
                        >
                          {size}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Quantity */}
                  <div className="mb-8">
                    <span className="text-[11px] font-sans font-medium tracking-editorial uppercase text-[#111] block mb-3">
                      Quantity
                    </span>
                    <div className="inline-flex items-center border border-[#111]/15">
                      <button
                        onClick={() => setQuantity(Math.max(1, quantity - 1))}
                        className="w-11 h-11 flex items-center justify-center text-[#8A847C] hover:text-[#111] transition-colors"
                      >
                        <Minus size={14} />
                      </button>
                      <span className="w-11 h-11 flex items-center justify-center text-xs font-mono text-[#111] border-x border-[#111]/15">
                        {quantity}
                      </span>
                      <button
                        onClick={() => setQuantity(quantity + 1)}
                        className="w-11 h-11 flex items-center justify-center text-[#8A847C] hover:text-[#111] transition-colors"
                      >
                        <Plus size={14} />
                      </button>
                    </div>
                  </div>

                  {/* Add to Cart */}
                  <button
                    onClick={handleAddToCart}
                    className="w-full bg-[#111] text-[#F5F0EB] py-4 text-[11px] font-sans font-medium tracking-editorial uppercase hover:bg-[#2C2C2C] transition-colors duration-300 mb-4"
                  >
                    Add to Cart
                  </button>

                  {/* Accordion Details */}
                  <div className="mt-8 border-t border-[#111]/[0.06]">
                    {[
                      {
                        key: "fabric",
                        title: "Fabric & Materials",
                        content: product.details.fabric,
                      },
                      {
                        key: "fit",
                        title: "Fit & Sizing",
                        content: product.details.fit,
                      },
                      {
                        key: "care",
                        title: "Care Instructions",
                        content: product.details.care,
                      },
                      {
                        key: "shipping",
                        title: "Shipping & Returns",
                        content:
                          "Complimentary shipping on orders over $200. Standard shipping 5-7 business days. Free returns within 30 days of delivery. Items must be unworn with tags attached.",
                      },
                    ].map((section) => (
                      <div
                        key={section.key}
                        className="border-b border-[#111]/[0.06]"
                      >
                        <button
                          onClick={() => toggleSection(section.key)}
                          className="w-full flex items-center justify-between py-4 text-left"
                        >
                          <span className="text-xs font-sans font-medium text-[#111]">
                            {section.title}
                          </span>
                          <Plus
                            size={14}
                            className={`text-[#8A847C] transition-transform duration-300 ${
                              expandedSection === section.key
                                ? "rotate-45"
                                : ""
                            }`}
                          />
                        </button>
                        <div
                          className={`overflow-hidden transition-all duration-400 ${
                            expandedSection === section.key
                              ? "max-h-40 pb-4"
                              : "max-h-0"
                          }`}
                        >
                          <p className="text-xs font-sans text-[#8A847C] leading-relaxed">
                            {section.content}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Related Products */}
        <section className="section-spacing bg-[#F5F0EB]">
          <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12">
            <RevealSection>
              <p className="text-[10px] font-sans font-medium tracking-luxury uppercase text-[#8A847C] mb-10 md:mb-14">
                You May Also Like
              </p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
                {relatedProducts.map((p) => (
                  <ProductCard key={p.id} product={p} />
                ))}
              </div>
            </RevealSection>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
