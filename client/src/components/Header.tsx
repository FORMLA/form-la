/*
 * FORM Header — Quiet Luxury (Refined Desktop + Mobile)
 * Minimal sticky navigation. Logo left, nav center, utility right.
 * Transparent on hero, solid on scroll.
 * Desktop: wider spacing, editorial tracking, refined typography.
 * Mobile: editorial overlay with staggered fade-in, brand presence.
 */
import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { ShoppingBag, Menu, X } from "lucide-react";
import { useCart } from "@/contexts/CartContext";

const NAV_LINKS = [
  { href: "/collection", label: "Shop" },
  { href: "/lookbook", label: "Lookbook" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [location] = useLocation();
  const { totalItems, toggleCart } = useCart();
  const isHome = location === "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location]);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const headerBg =
    scrolled || !isHome
      ? "bg-[#F5F0EB]/95 backdrop-blur-md border-b border-[#111]/[0.04]"
      : "bg-transparent";

  const textColor = scrolled || !isHome ? "text-[#111]" : "text-white";

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ease-[cubic-bezier(0.25,0.46,0.45,0.94)] ${headerBg}`}
      >
        <div className="mx-auto max-w-[1440px] px-6 sm:px-10 lg:px-16">
          <div className="flex items-center justify-between h-16 md:h-[76px]">
            {/* Mobile menu toggle */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className={`md:hidden ${textColor} transition-colors duration-500`}
              aria-label="Menu"
            >
              {mobileOpen ? (
                <X size={20} strokeWidth={1.5} />
              ) : (
                <Menu size={20} strokeWidth={1.5} />
              )}
            </button>

            {/* Logo */}
            <Link
              href="/"
              className={`${textColor} transition-colors duration-500 absolute left-1/2 -translate-x-1/2 md:static md:translate-x-0 flex flex-col items-center md:items-start`}
            >
              <span className="font-sans text-[13px] font-medium tracking-luxury uppercase">
                Form
              </span>
              <span className="font-sans text-[8px] font-light tracking-[0.12em] uppercase text-[#A09A92]">
                Los Angeles
              </span>
            </Link>

            {/* Desktop Nav — wider gaps, refined tracking */}
            <nav className="hidden md:flex items-center gap-14 absolute left-1/2 -translate-x-1/2">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`${textColor} text-[10.5px] font-sans font-medium tracking-[0.14em] uppercase transition-all duration-500 ease-[cubic-bezier(0.25,0.46,0.45,0.94)] hover:opacity-40`}
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            {/* Utility — cart only, clean */}
            <div
              className={`flex items-center ${textColor} transition-colors duration-500`}
            >
              <button
                onClick={toggleCart}
                className="relative hover:opacity-40 transition-opacity duration-500"
                aria-label="Cart"
              >
                <ShoppingBag size={17} strokeWidth={1.5} />
                {totalItems > 0 && (
                  <span className="absolute -top-1.5 -right-1.5 w-4 h-4 bg-[#111] text-white text-[9px] font-sans font-medium flex items-center justify-center">
                    {totalItems}
                  </span>
                )}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* ─── Mobile Menu Overlay ─── */}
      <div
        className={`fixed inset-0 z-40 bg-[#F5F0EB] transition-opacity duration-700 ease-[cubic-bezier(0.25,0.46,0.45,0.94)] ${
          mobileOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      >
        <div className="flex flex-col justify-between h-full pt-28 pb-12 px-10">
          {/* Navigation links */}
          <div className="flex-1 flex flex-col justify-center gap-[3.25rem]">
            {NAV_LINKS.map((link, i) => (
              <Link
                key={link.href}
                href={link.href}
                className="block font-serif text-[2.75rem] font-light text-[#111] tracking-[0.04em] leading-none hover:opacity-40 transition-all duration-700 ease-[cubic-bezier(0.25,0.46,0.45,0.94)]"
                style={{
                  transitionDelay: mobileOpen ? `${i * 120 + 200}ms` : "0ms",
                  transform: mobileOpen ? "translateY(0)" : "translateY(18px)",
                  opacity: mobileOpen ? 1 : 0,
                }}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Bottom brand presence */}
          <div
            className="transition-all duration-700 ease-[cubic-bezier(0.25,0.46,0.45,0.94)]"
            style={{
              transitionDelay: mobileOpen ? "750ms" : "0ms",
              opacity: mobileOpen ? 1 : 0,
              transform: mobileOpen ? "translateY(0)" : "translateY(10px)",
            }}
          >
            <div className="border-t border-[#111]/[0.06] pt-7 flex items-end justify-between">
              <p className="text-[10px] font-sans font-medium tracking-luxury uppercase text-[#A09A92] leading-relaxed">
                Los Angeles Luxury Essentials
              </p>
              <a
                href="https://instagram.com/form"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[10px] font-sans text-[#A09A92] tracking-editorial hover:text-[#111] transition-colors duration-500"
              >
                @form
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
