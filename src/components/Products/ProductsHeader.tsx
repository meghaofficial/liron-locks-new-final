import { useNavigate } from "react-router-dom";

const navItems: Record<string, string> = {
  'Cylinders': 'cylinders',
  'Dead & Latch Locks': 'dead_lock',
  'Iron Handles': 'iron_handles',
  'Mortise Locks': 'mortise_lock',
  'Rose Handles': 'rose_handles',
  'SS Handle': 'ss_handles',
  'SS Zinc Plate Handles': 'ss_plate_zinc'
};

export default function ProductsHeader() {

  const navigate = useNavigate();

  return (
    <section className="relative bg-gray-100 py-14 overflow-hidden">

      {/* Top Right Dots */}
      <div className="absolute top-8 right-10 opacity-30">
        <div className="grid grid-cols-6 gap-2">
          {[...Array(18)].map((_, i) => (
            <span key={i} className="w-2 h-2 bg-gray-400 rounded-full"></span>
          ))}
        </div>
      </div>

      {/* Bottom Left Dots */}
      <div className="absolute bottom-8 left-10 opacity-30">
        <div className="grid grid-cols-6 gap-2">
          {[...Array(18)].map((_, i) => (
            <span key={i} className="w-2 h-2 bg-gray-400 rounded-full"></span>
          ))}
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-6 text-center">

        <h1 className="text-4xl font-bold text-gray-900 mb-3">
          Products
        </h1>

        <div className="text-gray-600 text-sm flex flex-wrap justify-center items-center gap-2">
          {/* <span className={`cursor-pointer ${location.pathname.includes('all') && 'font-semibold mt-0.5'}`} onClick={() => navigate(`/products/all`)}>All</span>
          <span>|</span> */}
          {Object.keys(navItems).map((key, index) => (
            <>
              <span className={`font-medium cursor-pointer ${location.pathname.includes(navItems[key]) && 'font-semibold mt-0.5'}`} key={index} onClick={() => navigate(`/products/${navItems[key]}`)}>{key}</span>
              {index < Object.values(navItems).length - 1 && <span>|</span>}
            </>
          ))}
        </div>

      </div>

    </section>
  );
}