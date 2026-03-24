import { useEffect, useState } from "react"
import ProductCard2 from "../cards/ProductCard2";
import { allFewProducts } from "../../data/categories";
import { FiExternalLink } from "react-icons/fi";
import { useNavigate } from "react-router-dom";

const navItems: Record<string, string> = {
  'Iron Handles': 'iron_handles',
  'Rose Handles': 'rose_handles',
  'SS Handle': 'ss_handles',
};

const OurProducts = () => {

  const [upperList, setUpperList] = useState<string[]>([]);
  const [activeTab, setActiveTab] = useState<string>('Iron Handles');
  const navigate = useNavigate();

  useEffect(() => {
    if (allFewProducts) {
      const arr: string[] = Object.keys(allFewProducts);
      setUpperList(arr);
    }
  }, []);

  return (
    <>
      <div className="w-full flex flex-col items-center gap-6 md:px-10 sm:px-8 px-4 md:pb-10 sm:pb-8 pb-4 bg-white">

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
        <div className="flex flex-wrap justify-center sm:gap-4 gap-2">
          {upperList?.map((item, index) => (
            <button className={`px-6 py-3 rounded-full border cursor-pointer border-gray-300 text-gray-700 ${activeTab === item ? 'bg-brand text-white' : 'hover:bg-gray-100'} transition`} key={index} onClick={() => setActiveTab(item)}>
              {item}
            </button>
          ))}
          <button className={`px-6 py-3 cursor-pointer transition flex items-center gap-2 underline`} 
          onClick={() => navigate('/products')}
          >
            More <FiExternalLink />
          </button>
        </div>

        <div className="flex items-center gap-2 w-full overflow-x-auto md:relative -right-4 hide-scrollbar">
          {allFewProducts?.[activeTab]?.map((item, index) => (
            <div key={index}>
              <ProductCard2
                name={item?.name}
                category={item?.category}
                price={item?.price}
                discount={item?.discount}
                discounted_price={item?.discounted_price}
                rating={item?.rating}
                url={item?.url}
              />
            </div>
          ))}
          <button className="flex items-center gap-2 px-6 py-3 cursor-pointer bg-gray-300 rounded-full font-medium hover:bg-gray-400 transition me-4"  onClick={() => navigate(`/products/${navItems[activeTab]}`)}>
            <p className="text-nowrap text-[10px] tracking-wider uppercase font-semibold">View All</p>
            <span className="text-lg">→</span>
          </button>
        </div>
      </div>
    </>
  )
}

export default OurProducts
