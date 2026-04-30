/*
 * FORM — Product Data
 * Premium essentials collection. Black garments with FORM branding.
 * All imagery: AI-generated, brand-consistent, cinematic LA aesthetic.
 */

export interface Product {
  id: string;
  slug: string;
  name: string;
  category: string;
  categorySlug: string;
  price: number;
  description: string;
  details: {
    fabric: string;
    fit: string;
    care: string;
  };
  images: string[];
  sizes: string[];
  featured?: boolean;
  signature?: boolean;
  new?: boolean;
}

// FORM brand-matched product images — clean studio flatlay + editorial on-model
const IMAGES = {
  // Product flatlay shots (clean grey studio background)
  hoodieFlat: "https://d2xsxph8kpxj0f.cloudfront.net/310519663359779761/oJm2PDTFjieAQbMeNBqsvb/form-hoodie-real-DNNo7xWwiysBKYW6bURAoJ.webp",
  hoodieNeckLabel: "https://d2xsxph8kpxj0f.cloudfront.net/310519663359779761/oJm2PDTFjieAQbMeNBqsvb/form-hoodie-neck-label-UDx7j6TEfYTyxPb5VVZdNQ.webp",
  teeFlat: "https://d2xsxph8kpxj0f.cloudfront.net/310519663359779761/oJm2PDTFjieAQbMeNBqsvb/form-tee-branded-v2-Y6DqArgmZZv9DLXRiNzGmq.webp",
  sweatpantsFlat: "https://d2xsxph8kpxj0f.cloudfront.net/310519663359779761/oJm2PDTFjieAQbMeNBqsvb/form-sweatpants-real-iBy2a7tbSE2tAAMUHQPFhi.webp",
  shortsFlat: "https://d2xsxph8kpxj0f.cloudfront.net/310519663359779761/oJm2PDTFjieAQbMeNBqsvb/form-shorts-real-ApwB7RqmH53tpJDvipaykh.webp",
  capFlat: "https://d2xsxph8kpxj0f.cloudfront.net/310519663359779761/oJm2PDTFjieAQbMeNBqsvb/form-cap-branded-i82o8oprS7cq8QTTKP6Hou.webp",

  // Editorial on-model / lookbook shots (LA settings)
  maleStreet: "https://d2xsxph8kpxj0f.cloudfront.net/310519663359779761/oJm2PDTFjieAQbMeNBqsvb/form-editorial-male-street-VBGJCJvrgNyG8Li7CzeuFY.webp",
  female: "https://d2xsxph8kpxj0f.cloudfront.net/310519663359779761/oJm2PDTFjieAQbMeNBqsvb/form-editorial-female-cream-PkCuEjR4jygjspJ9PFnkja.webp",
  hoodieBack: "https://d2xsxph8kpxj0f.cloudfront.net/310519663359779761/oJm2PDTFjieAQbMeNBqsvb/form-editorial-hoodie-back-cdqq6NLb82fDpqCDAR5GSy.webp",
  maleCap: "https://d2xsxph8kpxj0f.cloudfront.net/310519663359779761/oJm2PDTFjieAQbMeNBqsvb/form-editorial-male-cap-back-Ut7WfmcMDnFgquJz4o4skD.webp",
  heroRooftop: "https://d2xsxph8kpxj0f.cloudfront.net/310519663359779761/oJm2PDTFjieAQbMeNBqsvb/form-editorial-couple-K4rLGFCagC5u7NTwMJUoDJ.webp",

  // Heavyweight Hoodie (Black) — real product photo
  heavyweightHoodieBlack: "https://d2xsxph8kpxj0f.cloudfront.net/310519663359779761/oJm2PDTFjieAQbMeNBqsvb/form-heavyweight-hoodie-edited_e5cd32d5.png",
};

export const products: Product[] = [
  {
    id: "heavyweight-hoodie-black",
    slug: "heavyweight-hoodie-black",
    name: "The Heavyweight Hoodie",
    category: "Hoodies",
    categorySlug: "hoodies",
    price: 175,
    description: "Our signature heavyweight hoodie in black. An oversized silhouette in premium 450 GSM fleece with a small FORM chest logo. Built for presence — structured, substantial, and designed to be worn every day.",
    details: {
      fabric: "450 GSM premium heavyweight fleece. 100% combed cotton. Brushed interior.",
      fit: "Oversized relaxed fit. Dropped shoulders. Ribbed cuffs and hem.",
      care: "Cold machine wash. Tumble dry low. Do not bleach. Iron on low heat.",
    },
    images: [IMAGES.heavyweightHoodieBlack, IMAGES.hoodieBack, IMAGES.maleStreet],
    sizes: ["S", "M", "L", "XL", "XXL"],
    featured: true,
    signature: true,
    new: true,
  },
  {
    id: "heavyweight-hoodie",
    slug: "heavyweight-hoodie",
    name: "FORM Heavyweight Hoodie",
    category: "Hoodies",
    categorySlug: "hoodies",
    price: 165,
    description: "Designed with an oversized silhouette and structured premium fleece for a refined, relaxed fit. Finished with clean branding and a minimal Los Angeles identity, built as a modern everyday essential.",
    details: {
      fabric: "450 GSM premium heavyweight fleece. 100% combed cotton. Brushed interior.",
      fit: "Oversized relaxed fit. Dropped shoulders. Ribbed cuffs and hem.",
      care: "Cold machine wash. Tumble dry low. Do not bleach. Iron on low heat.",
    },
    images: [IMAGES.hoodieFlat, IMAGES.hoodieNeckLabel, IMAGES.hoodieBack, IMAGES.maleStreet],
    sizes: ["S", "M", "L", "XL", "XXL"],
    featured: true,
    signature: true,
    new: true,
  },
  {
    id: "drop-shoulder-tee",
    slug: "drop-shoulder-tee",
    name: "FORM Drop Shoulder Tee",
    category: "T-Shirts",
    categorySlug: "t-shirts",
    price: 85,
    description: "An oversized drop shoulder silhouette in premium heavyweight cotton. Clean lines, intentional proportions, and a refined hand feel that elevates the essential tee.",
    details: {
      fabric: "280 GSM premium cotton jersey. 100% combed ring-spun cotton.",
      fit: "Oversized fit. Drop shoulder construction. Extended body length.",
      care: "Cold machine wash. Tumble dry low. Do not bleach.",
    },
    images: [IMAGES.teeFlat, IMAGES.maleCap, IMAGES.maleStreet],
    sizes: ["S", "M", "L", "XL", "XXL"],
    featured: true,
    signature: true,
    new: true,
  },
  {
    id: "relaxed-sweatpant",
    slug: "relaxed-sweatpant",
    name: "FORM Sweatpants",
    category: "Sweatpants",
    categorySlug: "sweatpants",
    price: 145,
    description: "A structured relaxed sweatpant in premium heavyweight fleece. Tapered silhouette with an elastic waistband and drawcord. Designed for presence, built for comfort.",
    details: {
      fabric: "400 GSM premium heavyweight fleece. 100% combed cotton. Brushed interior.",
      fit: "Relaxed tapered fit. Elastic waistband with woven drawcord. Ribbed cuffs.",
      care: "Cold machine wash. Tumble dry low. Do not bleach. Iron on low heat.",
    },
    images: [IMAGES.sweatpantsFlat, IMAGES.maleStreet, IMAGES.female],
    sizes: ["S", "M", "L", "XL", "XXL"],
    featured: true,
    signature: true,
    new: true,
  },
  {
    id: "relaxed-short",
    slug: "relaxed-short",
    name: "FORM Shorts",
    category: "Shorts",
    categorySlug: "shorts",
    price: 95,
    description: "A clean, structured short with a relaxed fit and premium weight. Minimal branding and considered proportions for an elevated warm-weather essential.",
    details: {
      fabric: "320 GSM premium French terry. 100% combed cotton.",
      fit: "Relaxed fit. 7-inch inseam. Elastic waistband with woven drawcord.",
      care: "Cold machine wash. Tumble dry low. Do not bleach.",
    },
    images: [IMAGES.shortsFlat, IMAGES.maleCap, IMAGES.maleStreet],
    sizes: ["S", "M", "L", "XL", "XXL"],
    featured: true,
    new: true,
  },
  {
    id: "six-panel-cap",
    slug: "six-panel-cap",
    name: "FORM 6-Panel Cap",
    category: "Hats",
    categorySlug: "hats",
    price: 55,
    description: "A structured 6-panel cap with clean embroidered branding. Premium cotton twill construction with an adjustable strap closure. The finishing detail.",
    details: {
      fabric: "Premium cotton twill. Embroidered logo. Metal clasp closure.",
      fit: "Adjustable. One size fits most.",
      care: "Spot clean only. Do not machine wash.",
    },
    images: [IMAGES.capFlat, IMAGES.maleCap, IMAGES.maleStreet],
    sizes: ["ONE SIZE"],
    featured: true,
    new: true,
  },
];

export const categories = [
  { name: "All", slug: "all" },
  { name: "T-Shirts", slug: "t-shirts" },
  { name: "Hoodies", slug: "hoodies" },
  { name: "Sweatpants", slug: "sweatpants" },
  { name: "Shorts", slug: "shorts" },
  { name: "Hats", slug: "hats" },
];

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}

export function getProductsByCategory(categorySlug: string): Product[] {
  if (categorySlug === "all") return products;
  return products.filter((p) => p.categorySlug === categorySlug);
}

export function getSignatureProducts(): Product[] {
  return products.filter((p) => p.signature);
}

export function getFeaturedProducts(): Product[] {
  return products.filter((p) => p.featured);
}
