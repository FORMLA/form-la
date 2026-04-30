/*
 * FORM Collection Page — Quiet Luxury
 * Clean product grid, category filters, sort options, editorial spacing.
 */
import { useState, useMemo } from "react";
import { useSearch } from "wouter";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CartDrawer from "@/components/CartDrawer";
import ProductCard from "@/components/ProductCard";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { products, categories } from "@/lib/products";

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

export default function Collection() {
  const search = useSearch();
  const params = new URLSearchParams(search);
  const initialCategory = params.get("category") || "all";

  const [activeCategory, setActiveCategory] = useState(initialCategory);
  const [sortBy, setSortBy] = useState<"default" | "price-asc" | "price-desc">(
    "default"
  );

  const filteredProducts = useMemo(() => {
    let filtered =
      activeCategory === "all"
        ? [...products]
        : products.filter((p) => p.categorySlug === activeCategory);

    if (sortBy === "price-asc") {
      filtered.sort((a, b) => a.price - b.price);
    } else if (sortBy === "price-desc") {
      filtered.sort((a, b) => b.price - a.price);
    }

    return filtered;
  }, [activeCategory, sortBy]);

  return (
    <div className="min-h-screen">
      <Header />
      <CartDrawer />
      <main>
        {/* Page Header */}
        <section className="pt-28 md:pt-36 pb-8 md:pb-12">
          <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12">
            <RevealSection>
              <p className="text-[10px] font-sans font-medium tracking-luxury uppercase text-[#8A847C] mb-3">
                Collection 001
              </p>
              <h1 className="font-serif text-3xl md:text-5xl font-light text-[#111]">
                The Essentials
              </h1>
            </RevealSection>
          </div>
        </section>

        {/* Filters & Sort */}
        <section className="pb-8 md:pb-12">
          <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 border-b border-[#111]/[0.06] pb-6">
              {/* Category filters */}
              <div className="flex flex-wrap gap-4 md:gap-6">
                {categories.map((cat) => (
                  <button
                    key={cat.slug}
                    onClick={() => setActiveCategory(cat.slug)}
                    className={`text-[11px] font-sans font-medium tracking-editorial uppercase transition-all duration-300 pb-0.5 ${
                      activeCategory === cat.slug
                        ? "text-[#111] border-b border-[#111]"
                        : "text-[#8A847C] hover:text-[#111]"
                    }`}
                  >
                    {cat.name}
                  </button>
                ))}
              </div>

              {/* Sort */}
              <div className="flex items-center gap-2">
                <span className="text-[10px] font-sans text-[#8A847C] tracking-editorial uppercase">
                  Sort:
                </span>
                <select
                  value={sortBy}
                  onChange={(e) =>
                    setSortBy(
                      e.target.value as "default" | "price-asc" | "price-desc"
                    )
                  }
                  className="bg-transparent text-[11px] font-sans font-medium text-[#111] focus:outline-none cursor-pointer"
                >
                  <option value="default">Featured</option>
                  <option value="price-asc">Price: Low to High</option>
                  <option value="price-desc">Price: High to Low</option>
                </select>
              </div>
            </div>
          </div>
        </section>

        {/* Product Grid */}
        <section className="pb-20 md:pb-32">
          <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12">
            <RevealSection>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6 lg:gap-8">
                {filteredProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            </RevealSection>

            {filteredProducts.length === 0 && (
              <div className="text-center py-20">
                <p className="font-serif text-xl text-[#111] mb-2">
                  No products found
                </p>
                <p className="text-xs font-sans text-[#8A847C]">
                  Try selecting a different category.
                </p>
              </div>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
