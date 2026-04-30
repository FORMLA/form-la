/*
 * FORM Footer — Quiet Luxury
 * Matches brand reference: logo | tagline | social | subscribe | bottom links
 */
import { Link } from "wouter";
import { toast } from "sonner";

export default function Footer() {
  return (
    <footer className="bg-[#F5F0EB] text-[#111]">
      {/* Main footer bar */}
      <div className="border-t border-[#111]/10">
        <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12 py-8 md:py-10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8 md:gap-4">
            {/* Brand logo */}
            <div className="flex-shrink-0">
              <Link href="/" className="font-sans text-lg md:text-xl font-semibold tracking-[0.2em] uppercase text-[#111]">
                Form
              </Link>
            </div>

            {/* Divider + Tagline */}
            <div className="hidden md:flex items-center gap-6">
              <div className="w-px h-5 bg-[#111]/20" />
              <p className="text-[10px] font-sans font-medium tracking-luxury uppercase text-[#8A847C]">
                Minimal. Luxury. Los Angeles.
              </p>
            </div>
            <p className="md:hidden text-[10px] font-sans font-medium tracking-luxury uppercase text-[#8A847C]">
              Minimal. Luxury. Los Angeles.
            </p>

            {/* Social + Subscribe */}
            <div className="flex items-center gap-6">
              <span className="text-[10px] font-sans font-medium tracking-editorial uppercase text-[#8A847C]">
                Follow Us
              </span>
              <div className="flex items-center gap-4">
                <a
                  href="https://instagram.com/form"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#111] hover:opacity-60 transition-opacity"
                  aria-label="Instagram"
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                    <circle cx="12" cy="12" r="5"/>
                    <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/>
                  </svg>
                </a>
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#111] hover:opacity-60 transition-opacity"
                  aria-label="Facebook"
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"/>
                  </svg>
                </a>
              </div>
              <button
                onClick={() => {
                  const el = document.querySelector('input[type="email"]');
                  if (el) {
                    el.scrollIntoView({ behavior: 'smooth', block: 'center' });
                    (el as HTMLInputElement).focus();
                  } else {
                    toast("Subscribe feature coming soon.");
                  }
                }}
                className="border border-[#111]/20 px-5 py-2 text-[10px] font-sans font-medium tracking-editorial uppercase text-[#111] hover:bg-[#111] hover:text-[#F5F0EB] transition-all duration-300"
              >
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom links bar */}
      <div className="border-t border-[#111]/10">
        <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12 py-5">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <nav className="flex items-center gap-6">
              <Link
                href="/contact"
                className="text-[10px] font-sans font-medium tracking-editorial uppercase text-[#8A847C] hover:text-[#111] transition-colors"
              >
                Contact
              </Link>
              <button
                onClick={() => toast("Coming soon.")}
                className="text-[10px] font-sans font-medium tracking-editorial uppercase text-[#8A847C] hover:text-[#111] transition-colors"
              >
                FAQ
              </button>
              <button
                onClick={() => toast("Coming soon.")}
                className="text-[10px] font-sans font-medium tracking-editorial uppercase text-[#8A847C] hover:text-[#111] transition-colors"
              >
                Policies
              </button>
            </nav>
            <p className="text-[10px] font-sans text-[#8A847C]">
              &copy; {new Date().getFullYear()} FORM. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
