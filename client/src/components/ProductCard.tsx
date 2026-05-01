/*
 * FORM Product Card — Quiet Luxury
 * Clean product thumbnail, minimal typography, pricing, hover state.
 */
import { Link } from "wouter";
import type { Product } from "@/lib/products";

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <Link href={`/product/${product.slug}`} className="group block">
      {/* Image */}
      <div className="relative aspect-[3/4] bg-[#E8E2DA] overflow-hidden mb-4">
        <img
          src={product.images[0]}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-700 ease-[cubic-bezier(0.25,0.46,0.45,0.94)] group-hover:scale-[1.03]"
          loading="lazy"
        />
        {product.new && (
          <span className="absolute top-3 left-3 text-[9px] font-sans font-medium tracking-editorial uppercase text-[#111] bg-[#F5F0EB]/90 backdrop-blur-sm px-2.5 py-1">
            New
          </span>
        )}
      </div>

      {/* Info */}
      <div className="flex items-start justify-between gap-4">
        <div>
          <h3 className="text-xs font-sans font-medium text-[#111] group-hover:opacity-70 transition-opacity duration-300">
            {product.name}
          </h3>
          <p className="text-[10px] font-sans text-[#8A847C] mt-0.5">
            {product.category}
          </p>
        </div>
        <span className="text-xs font-mono text-[#111] flex-shrink-0">
          ${product.price}
        </span>
      </div>
    </Link>
  );
}
