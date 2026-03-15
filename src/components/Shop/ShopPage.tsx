import ProductCard2 from "../cards/ProductCard2"
import Layout from "../Layout"
import FreeShipping from "../shared/FreeShipping"
import ShopHeader from "./ShopHeader"

const ShopPage = () => {
  return (
    <>
      <Layout>
        <ShopHeader />


        <section className="py-10 bg-white">
          <div className="max-w-7xl mx-auto px-6 grid grid-cols-12 gap-8">

            {/* Sidebar */}
            <aside className="col-span-3 space-y-8">

              <h3 className="text-lg font-semibold">Filter Options</h3>

              {/* Category */}
              <div>
                <h4 className="font-medium mb-3">Category</h4>

                <div className="space-y-2 text-sm">
                  {[
                    "Bedroom",
                    "Living Room",
                    "Office",
                    "Lighting",
                    "Kitchen",
                    "Outdoor",
                    "Decor",
                  ].map((item) => (
                    <label key={item} className="flex items-center gap-2">
                      <input type="checkbox" />
                      {item}
                    </label>
                  ))}
                </div>
              </div>

              {/* Price */}
              <div>
                <h4 className="font-medium mb-3">Price</h4>

                <p className="text-sm mb-3">$25.00 - $125.00</p>

                <input type="range" className="w-full" />
              </div>

              {/* Material */}
              <div>
                <h4 className="font-medium mb-3">Material</h4>

                <div className="space-y-2 text-sm">
                  {["Metal", "Wood", "Upholstered", "Glass", "Plastic"].map(
                    (item) => (
                      <label key={item} className="flex items-center gap-2">
                        <input type="checkbox" />
                        {item}
                      </label>
                    )
                  )}
                </div>
              </div>

              {/* Availability */}
              <div>
                <h4 className="font-medium mb-3">Availability</h4>

                <div className="space-y-2 text-sm">
                  <label className="flex items-center gap-2">
                    <input type="checkbox" />
                    In Stock
                  </label>

                  <label className="flex items-center gap-2">
                    <input type="checkbox" />
                    Out of Stock
                  </label>
                </div>
              </div>
            </aside>

            {/* Product Section */}
            <div className="col-span-9">

              {/* Top Bar */}
              <div className="flex items-center justify-between mb-6">

                <p className="text-sm">
                  Showing 1–12 of 240 results
                </p>

                <div className="flex items-center gap-3 text-sm">
                  <span>Sort by :</span>

                  <select className="border px-3 py-2 rounded">
                    <option>Default Sorting</option>
                    <option>Price Low to High</option>
                    <option>Price High to Low</option>
                    <option>Newest</option>
                  </select>
                </div>

              </div>

              {/* Active Filters */}
              <div className="flex flex-wrap gap-3 mb-6 text-sm">

                <span className="px-3 py-1 border rounded">
                  Price : $25.00 - $125.00
                </span>

                <span className="px-3 py-1 border rounded">
                  Brown
                </span>

                <span className="px-3 py-1 border rounded">
                  In Stock
                </span>

                <button className="underline">
                  Clear All
                </button>

              </div>

              {/* Product Grid */}
              <div className="grid grid-cols-3 gap-6">

                {Array.from({ length: 9 }).map((_, i) => (
                  <div key={i}>
                    <ProductCard2 name="Dead Lock" category="Dead Lock" price={3000} discount={10}
                      discounted_price={3500}
                      rating={4.5}
                      url='https://res.cloudinary.com/dlmdsldqn/image/upload/v1772540840/Picsart_26-03-03_11-38-46-972_sf9cgp.png' />
                  </div>
                ))}

              </div>

            </div>

          </div>
        </section>

        <div className="md:p-18 p-8 md:pb-18 pb-18 bg-white">
          <FreeShipping />
        </div>
      </Layout>
    </>
  )
}

export default ShopPage
