export default function ProductsHeader() {
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

        <div className="text-gray-600 text-sm flex justify-center items-center gap-2">
          <span className="hover:text-green-700 cursor-pointer">All</span>
          <span>/</span>
          <span className="text-gray-900 font-medium">Shop</span>
        </div>

      </div>

    </section>
  );
}