import ProductCard2 from "../cards/ProductCard2"
import Layout from "../Layout"
import FreeShipping from "../shared/FreeShipping"
import ProductsHeader from "./ProductsHeader"

const ProductsPage = () => {

  return (
    <>
      <Layout>
        <ProductsHeader />


        <section className="py-10 bg-white">
          <div className="grid grid-cols-4">
            {Array.from({ length: 9 }).map((_, i) => (
              <div key={i} className="flex items-center justify-center">
                <ProductCard2 name="Dead Lock" category="Dead Lock" price={3000} discount={10}
                  discounted_price={3500}
                  rating={4.5}
                  url='https://res.cloudinary.com/dlmdsldqn/image/upload/v1772540840/Picsart_26-03-03_11-38-46-972_sf9cgp.png' />
              </div>
            ))}
          </div>
        </section>

        <div className="md:p-18 p-8 md:pb-18 pb-18 bg-white">
          <FreeShipping />
        </div>
      </Layout>
    </>
  )
}

export default ProductsPage
