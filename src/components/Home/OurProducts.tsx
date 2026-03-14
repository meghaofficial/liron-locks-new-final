import { useEffect, useState } from "react"
import ProductCard2 from "../cards/ProductCard2";

interface Product {
  name: string;
  category: string;
  price: number;
  discount: number;
  discounted_price: number;
  rating: number;
  url: string;
}

const OurProducts = () => {

  const [data, setData] = useState<Record<string, Product[]>>({
    ['All Products']: [
      {
        name: "Dead Lock",
        category: "Dead Lock",
        price: 5000,
        discount: 10,
        discounted_price: 4500,
        rating: 4.5,
        url: "https://res.cloudinary.com/dlmdsldqn/image/upload/v1772540840/Picsart_26-03-03_11-38-46-972_sf9cgp.png"
      },
      {
        name: "Dead Lock",
        category: "Dead Lock",
        price: 5000,
        discount: 10,
        discounted_price: 4500,
        rating: 4.5,
        url: "https://res.cloudinary.com/dlmdsldqn/image/upload/v1772540840/Picsart_26-03-03_11-38-46-972_sf9cgp.png"
      },
      {
        name: "Dead Lock",
        category: "Dead Lock",
        price: 5000,
        discount: 10,
        discounted_price: 4500,
        rating: 4.5,
        url: "https://res.cloudinary.com/dlmdsldqn/image/upload/v1772540840/Picsart_26-03-03_11-38-46-972_sf9cgp.png"
      },
      {
        name: "Dead Lock",
        category: "Dead Lock",
        price: 5000,
        discount: 10,
        discounted_price: 4500,
        rating: 4.5,
        url: "https://res.cloudinary.com/dlmdsldqn/image/upload/v1772540840/Picsart_26-03-03_11-38-46-972_sf9cgp.png"
      },
      {
        name: "Dead Lock",
        category: "Dead Lock",
        price: 5000,
        discount: 10,
        discounted_price: 4500,
        rating: 4.5,
        url: "https://res.cloudinary.com/dlmdsldqn/image/upload/v1772540840/Picsart_26-03-03_11-38-46-972_sf9cgp.png"
      },
      {
        name: "Dead Lock",
        category: "Dead Lock",
        price: 5000,
        discount: 10,
        discounted_price: 4500,
        rating: 4.5,
        url: "https://res.cloudinary.com/dlmdsldqn/image/upload/v1772540840/Picsart_26-03-03_11-38-46-972_sf9cgp.png"
      },
    ],
    ['Latest Products']: [
      {
        name: "Handle",
        category: "Handle",
        price: 5000,
        discount: 10,
        discounted_price: 4500,
        rating: 4.5,
        url: "https://res.cloudinary.com/dlmdsldqn/image/upload/v1772390393/Picsart_26-03-01_23-07-11-494_o4ainm.png"
      },
      {
        name: "Handle",
        category: "Handle",
        price: 5000,
        discount: 10,
        discounted_price: 4500,
        rating: 4.5,
        url: "https://res.cloudinary.com/dlmdsldqn/image/upload/v1772390393/Picsart_26-03-01_23-07-11-494_o4ainm.png"
      },
      {
        name: "Handle",
        category: "Handle",
        price: 5000,
        discount: 10,
        discounted_price: 4500,
        rating: 4.5,
        url: "https://res.cloudinary.com/dlmdsldqn/image/upload/v1772390393/Picsart_26-03-01_23-07-11-494_o4ainm.png"
      },
      {
        name: "Handle",
        category: "Handle",
        price: 5000,
        discount: 10,
        discounted_price: 4500,
        rating: 4.5,
        url: "https://res.cloudinary.com/dlmdsldqn/image/upload/v1772390393/Picsart_26-03-01_23-07-11-494_o4ainm.png"
      },
      {
        name: "Handle",
        category: "Handle",
        price: 5000,
        discount: 10,
        discounted_price: 4500,
        rating: 4.5,
        url: "https://res.cloudinary.com/dlmdsldqn/image/upload/v1772390393/Picsart_26-03-01_23-07-11-494_o4ainm.png"
      },
      {
        name: "Handle",
        category: "Handle",
        price: 5000,
        discount: 10,
        discounted_price: 4500,
        rating: 4.5,
        url: "https://res.cloudinary.com/dlmdsldqn/image/upload/v1772390393/Picsart_26-03-01_23-07-11-494_o4ainm.png"
      },
    ],
    ['Best Sellers']: [
      {
        name: "Rose Handle",
        category: "Rose Handle",
        price: 5000,
        discount: 10,
        discounted_price: 4500,
        rating: 4.5,
        url: "https://res.cloudinary.com/dlmdsldqn/image/upload/v1772428146/Picsart_26-03-02_10-23-02-963_cyqe8a.png"
      },
      {
        name: "Rose Handle",
        category: "Rose Handle",
        price: 5000,
        discount: 10,
        discounted_price: 4500,
        rating: 4.5,
        url: "https://res.cloudinary.com/dlmdsldqn/image/upload/v1772428146/Picsart_26-03-02_10-23-02-963_cyqe8a.png"
      },
      {
        name: "Rose Handle",
        category: "Rose Handle",
        price: 5000,
        discount: 10,
        discounted_price: 4500,
        rating: 4.5,
        url: "https://res.cloudinary.com/dlmdsldqn/image/upload/v1772428146/Picsart_26-03-02_10-23-02-963_cyqe8a.png"
      },
      {
        name: "Rose Handle",
        category: "Rose Handle",
        price: 5000,
        discount: 10,
        discounted_price: 4500,
        rating: 4.5,
        url: "https://res.cloudinary.com/dlmdsldqn/image/upload/v1772428146/Picsart_26-03-02_10-23-02-963_cyqe8a.png"
      },
      {
        name: "Rose Handle",
        category: "Rose Handle",
        price: 5000,
        discount: 10,
        discounted_price: 4500,
        rating: 4.5,
        url: "https://res.cloudinary.com/dlmdsldqn/image/upload/v1772428146/Picsart_26-03-02_10-23-02-963_cyqe8a.png"
      },
      {
        name: "Rose Handle",
        category: "Rose Handle",
        price: 5000,
        discount: 10,
        discounted_price: 4500,
        rating: 4.5,
        url: "https://res.cloudinary.com/dlmdsldqn/image/upload/v1772428146/Picsart_26-03-02_10-23-02-963_cyqe8a.png"
      },
    ],
    ['Featured Products']: [
      {
        name: "SS Zinc Plated",
        category: "SS Zinc Plated",
        price: 5000,
        discount: 10,
        discounted_price: 4500,
        rating: 4.5,
        url: "https://res.cloudinary.com/dlmdsldqn/image/upload/v1772262814/Picsart_26-02-27_23-39-34-264_fwiwbz.png"
      },
      {
        name: "SS Zinc Plated",
        category: "SS Zinc Plated",
        price: 5000,
        discount: 10,
        discounted_price: 4500,
        rating: 4.5,
        url: "https://res.cloudinary.com/dlmdsldqn/image/upload/v1772262814/Picsart_26-02-27_23-39-34-264_fwiwbz.png"
      },
      {
        name: "SS Zinc Plated",
        category: "SS Zinc Plated",
        price: 5000,
        discount: 10,
        discounted_price: 4500,
        rating: 4.5,
        url: "https://res.cloudinary.com/dlmdsldqn/image/upload/v1772262814/Picsart_26-02-27_23-39-34-264_fwiwbz.png"
      },
      {
        name: "SS Zinc Plated",
        category: "SS Zinc Plated",
        price: 5000,
        discount: 10,
        discounted_price: 4500,
        rating: 4.5,
        url: "https://res.cloudinary.com/dlmdsldqn/image/upload/v1772262814/Picsart_26-02-27_23-39-34-264_fwiwbz.png"
      },
      {
        name: "SS Zinc Plated",
        category: "SS Zinc Plated",
        price: 5000,
        discount: 10,
        discounted_price: 4500,
        rating: 4.5,
        url: "https://res.cloudinary.com/dlmdsldqn/image/upload/v1772262814/Picsart_26-02-27_23-39-34-264_fwiwbz.png"
      },
      {
        name: "SS Zinc Plated",
        category: "SS Zinc Plated",
        price: 5000,
        discount: 10,
        discounted_price: 4500,
        rating: 4.5,
        url: "https://res.cloudinary.com/dlmdsldqn/image/upload/v1772262814/Picsart_26-02-27_23-39-34-264_fwiwbz.png"
      },
    ]
  });
  const [upperList, setUpperList] = useState<string[]>([]);
  const [activeTab, setActiveTab] = useState<string>('All Products');

  useEffect(() => {
    if (data) {
      const arr: string[] = Object.keys(data);
      setUpperList(arr);
    }
  }, [data]);

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
        </div>

        <div className="flex items-center gap-2 w-full overflow-x-auto md:relative -right-4 hide-scrollbar">
          {data?.[activeTab]?.map((item, index) => (
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
          <button className="flex items-center gap-2 px-6 py-3 cursor-pointer bg-gray-300 rounded-full font-medium hover:bg-gray-400 transition me-4">
            <p className="text-nowrap text-[10px] tracking-wider uppercase font-semibold">View All</p>
            <span className="text-lg">→</span>
          </button>
        </div>
      </div>
    </>
  )
}

export default OurProducts
