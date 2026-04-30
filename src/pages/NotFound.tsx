import { Link } from "wouter";
import { ArrowRight } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CartDrawer from "@/components/CartDrawer";

export default function NotFound() {
  return (
    <div className="min-h-screen">
      <Header />
      <CartDrawer />
      <main className="pt-28 md:pt-36 pb-20 md:pb-32">
        <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12 text-center">
          <p className="text-[10px] font-sans font-medium tracking-luxury uppercase text-[#8A847C] mb-6">
            404
          </p>
          <h1 className="font-serif text-4xl md:text-6xl font-light text-[#111] mb-6">
            Page not found.
          </h1>
          <p className="text-sm font-sans text-[#8A847C] mb-10">
            The page you are looking for does not exist or has been moved.
          </p>
          <Link
            href="/"
            className="inline-flex items-center gap-3 bg-[#111] text-[#F5F0EB] px-10 py-4 text-[11px] font-sans font-medium tracking-editorial uppercase hover:bg-[#2C2C2C] transition-colors duration-300 group"
          >
            Return Home
            <ArrowRight
              size={14}
              className="transition-transform duration-300 group-hover:translate-x-1"
            />
          </Link>
        </div>
      </main>
      <Footer />
    </div>
  );
}
