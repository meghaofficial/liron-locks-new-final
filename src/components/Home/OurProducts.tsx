const OurProducts = () => {
  return (
    <>
      <div className="w-full flex flex-col items-center gap-6 md:px-18 px-8 md:pb-18 pb-18 bg-white">

        {/* Subtitle */}
        <div className="flex items-center gap-3 text-gray-600">
          <div className="w-8 h-0.5 bg-yellow-500"></div>
          <span className="text-sm">Our Products</span>
        </div>

        {/* Heading */}
        <h2 className="text-4xl font-bold text-gray-800 text-center">
          Our <span className="text-brand">Products Collections</span>
        </h2>

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-4">
          <button className="px-6 py-3 rounded-full border border-gray-300 text-gray-700 hover:bg-gray-100 transition">
            All Products
          </button>
          <button className="px-6 py-3 rounded-full bg-brand text-white shadow-md">
            Latest Products
          </button>
          <button className="px-6 py-3 rounded-full border border-gray-300 text-gray-700 hover:bg-gray-100 transition">
            Best Sellers
          </button>
          <button className="px-6 py-3 rounded-full border border-gray-300 text-gray-700 hover:bg-gray-100 transition">
            Featured Products
          </button>
        </div>

      </div>
    </>
  )
}

export default OurProducts
