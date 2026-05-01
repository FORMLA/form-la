/*
 * FORM Size Guide — Quiet Luxury
 * Minimal overlay with essential measurements.
 * Clean, refined, premium — not technical or cluttered.
 */
import { useEffect } from "react";
import { X } from "lucide-react";

interface SizeGuideProps {
  open: boolean;
  onClose: () => void;
  category?: string;
}

const TOPS_DATA = [
  { size: "S", chest: '38"', length: '27"', shoulder: '17.5"' },
  { size: "M", chest: '40"', length: '28"', shoulder: '18"' },
  { size: "L", chest: '42"', length: '29"', shoulder: '18.5"' },
  { size: "XL", chest: '44"', length: '30"', shoulder: '19"' },
  { size: "XXL", chest: '46"', length: '31"', shoulder: '19.5"' },
];

const BOTTOMS_DATA = [
  { size: "S", waist: '30"', length: '30"', inseam: '28"' },
  { size: "M", waist: '32"', length: '31"', inseam: '29"' },
  { size: "L", waist: '34"', length: '32"', inseam: '30"' },
  { size: "XL", waist: '36"', length: '33"', inseam: '31"' },
  { size: "XXL", waist: '38"', length: '34"', inseam: '32"' },
];

export default function SizeGuide({ open, onClose, category = "tops" }: SizeGuideProps) {
  const isBottoms = category === "bottoms";
  const data = isBottoms ? BOTTOMS_DATA : TOPS_DATA;
  const columns = isBottoms
    ? ["Size", "Waist", "Length", "Inseam"]
    : ["Size", "Chest", "Length", "Shoulder"];

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  if (!open) return null;

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 z-[60] bg-black/20 backdrop-blur-sm transition-opacity duration-500"
        onClick={onClose}
      />

      {/* Overlay Panel */}
      <div className="fixed inset-0 z-[60] flex items-center justify-center px-6">
        <div
          className="bg-[#F5F0EB] w-full max-w-lg shadow-2xl animate-in fade-in zoom-in-95 duration-300"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header */}
          <div className="flex items-center justify-between px-8 pt-8 pb-0">
            <h3 className="text-[10.5px] font-sans font-medium tracking-luxury uppercase text-[#111]">
              Size Guide
            </h3>
            <button
              onClick={onClose}
              className="text-[#111] hover:opacity-40 transition-opacity duration-500"
              aria-label="Close size guide"
            >
              <X size={18} strokeWidth={1.5} />
            </button>
          </div>

          {/* Note */}
          <div className="px-8 pt-5">
            <p className="text-[11px] font-sans text-[#A09A92] leading-relaxed">
              All measurements are in inches. For the best fit, measure a garment you already own and compare.
            </p>
          </div>

          {/* Table */}
          <div className="px-8 pt-7 pb-8">
            <table className="w-full">
              <thead>
                <tr className="border-b border-[#111]/[0.08]">
                  {columns.map((col) => (
                    <th
                      key={col}
                      className="text-[10px] font-sans font-medium tracking-editorial uppercase text-[#A09A92] pb-4 text-left first:pl-0 last:pr-0"
                    >
                      {col}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {data.map((row, i) => (
                  <tr
                    key={row.size}
                    className={
                      i < data.length - 1
                        ? "border-b border-[#111]/[0.04]"
                        : ""
                    }
                  >
                    <td className="py-4 text-[12px] font-sans font-medium text-[#111] tracking-wide">
                      {row.size}
                    </td>
                    <td className="py-4 text-[12px] font-mono text-[#555]">
                      {Object.values(row)[1]}
                    </td>
                    <td className="py-4 text-[12px] font-mono text-[#555]">
                      {Object.values(row)[2]}
                    </td>
                    <td className="py-4 text-[12px] font-mono text-[#555]">
                      {Object.values(row)[3]}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Footer note */}
          <div className="px-8 pb-8">
            <div className="border-t border-[#111]/[0.06] pt-5">
              <p className="text-[10px] font-sans text-[#A09A92] leading-relaxed">
                FORM garments are designed with an intentional oversized fit. If between sizes, we recommend sizing down.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
