import { useParams } from "react-router-dom"
import ProductCard2 from "../cards/ProductCard2"
import Layout from "../Layout"
import FreeShipping from "../shared/FreeShipping"
import ProductsHeader from "./ProductsHeader"
import { useEffect, useState } from "react"
import type { Product } from "../../types"
import { cylinders, dead_lock, iron_handles, mortise_lock, rose_handles, ss_handles, ss_plate_zinc } from "../../data/products"

const ProductsPage = () => {

  const { category } = useParams();
  const [activeList, setActiveList] = useState<Product[]>([]);

useEffect(() => {
  if (!category) return;

  switch (category) {
    case 'cylinders':
      setActiveList(cylinders);
      break;
    case 'dead_lock':
      setActiveList(dead_lock);
      break;
    case 'iron_handles':
      setActiveList(iron_handles);
      break;
    case 'mortise_lock':
      setActiveList(mortise_lock);
      break;
    case 'rose_handles':
      setActiveList(rose_handles);
      break;
    case 'ss_handles':
      setActiveList(ss_handles);
      break;
    case 'ss_plate_zinc':
      setActiveList(ss_plate_zinc);
      break;
    default:
      setActiveList([]);
  }
}, [category]);


  return (
    <>
      <Layout>
        <ProductsHeader />


        <section className="py-10 bg-white">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {activeList.map((item, i) => (
              <div key={i} className="flex items-center justify-center">
                <ProductCard2 name={item.name} category={item.category} url={item.url} />
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
