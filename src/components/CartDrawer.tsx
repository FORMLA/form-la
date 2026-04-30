/*
 * FORM Cart Drawer — Quiet Luxury
 * Slide-out cart panel from right. Minimal, clean.
 */
import { X, Minus, Plus } from "lucide-react";
import { useCart } from "@/contexts/CartContext";
import { toast } from "sonner";

export default function CartDrawer() {
  const { items, isOpen, closeCart, removeItem, updateQuantity, totalPrice } =
    useCart();

  return (
    <>
      {/* Backdrop */}
      <div
        className={`fixed inset-0 z-50 bg-black/30 backdrop-blur-sm transition-opacity duration-400 ${
          isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        onClick={closeCart}
      />

      {/* Drawer */}
      <div
        className={`fixed top-0 right-0 z-50 h-full w-full max-w-md bg-[#F5F0EB] shadow-2xl transition-transform duration-500 ease-[cubic-bezier(0.25,0.46,0.45,0.94)] ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between px-6 py-5 border-b border-[#111]/[0.06]">
            <span className="text-[11px] font-sans font-medium tracking-editorial uppercase text-[#111]">
              Cart ({items.length})
            </span>
            <button
              onClick={closeCart}
              className="text-[#111] hover:opacity-50 transition-opacity"
            >
              <X size={18} strokeWidth={1.5} />
            </button>
          </div>

          {/* Items */}
          <div className="flex-1 overflow-y-auto px-6 py-6">
            {items.length === 0 ? (
              <div className="flex flex-col items-center justify-center h-full text-center">
                <p className="font-serif text-xl text-[#111] mb-2">
                  Your cart is empty
                </p>
                <p className="text-xs font-sans text-[#8A847C]">
                  Explore the collection to find your essentials.
                </p>
              </div>
            ) : (
              <div className="flex flex-col gap-6">
                {items.map((item) => (
                  <div
                    key={`${item.product.id}-${item.size}`}
                    className="flex gap-4"
                  >
                    <div className="w-20 h-24 bg-[#E8E2DA] flex-shrink-0 overflow-hidden">
                      <img
                        src={item.product.images[0]}
                        alt={item.product.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex-1 flex flex-col justify-between">
                      <div>
                        <p className="text-xs font-sans font-medium text-[#111]">
                          {item.product.name}
                        </p>
                        <p className="text-[10px] font-sans text-[#8A847C] mt-0.5">
                          Size: {item.size}
                        </p>
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <button
                            onClick={() =>
                              updateQuantity(
                                item.product.id,
                                item.size,
                                item.quantity - 1
                              )
                            }
                            className="text-[#8A847C] hover:text-[#111] transition-colors"
                          >
                            <Minus size={12} />
                          </button>
                          <span className="text-xs font-mono text-[#111] w-4 text-center">
                            {item.quantity}
                          </span>
                          <button
                            onClick={() =>
                              updateQuantity(
                                item.product.id,
                                item.size,
                                item.quantity + 1
                              )
                            }
                            className="text-[#8A847C] hover:text-[#111] transition-colors"
                          >
                            <Plus size={12} />
                          </button>
                        </div>
                        <div className="flex items-center gap-3">
                          <span className="text-xs font-mono text-[#111]">
                            ${item.product.price * item.quantity}
                          </span>
                          <button
                            onClick={() =>
                              removeItem(item.product.id, item.size)
                            }
                            className="text-[#8A847C] hover:text-[#111] transition-colors"
                          >
                            <X size={12} />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Footer */}
          {items.length > 0 && (
            <div className="px-6 py-6 border-t border-[#111]/[0.06]">
              <div className="flex items-center justify-between mb-5">
                <span className="text-[11px] font-sans font-medium tracking-editorial uppercase text-[#111]">
                  Total
                </span>
                <span className="text-sm font-mono text-[#111]">
                  ${totalPrice}
                </span>
              </div>
              <button
                onClick={() => toast("Checkout coming soon.")}
                className="w-full bg-[#111] text-[#F5F0EB] py-4 text-[11px] font-sans font-medium tracking-editorial uppercase hover:bg-[#2C2C2C] transition-colors duration-300"
              >
                Checkout
              </button>
              <p className="text-center text-[10px] font-sans text-[#8A847C] mt-3">
                Shipping calculated at checkout
              </p>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
