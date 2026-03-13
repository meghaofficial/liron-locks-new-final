import { useRef } from "react";
import { HiArrowSmallLeft, HiArrowSmallRight } from "react-icons/hi2";
import ProductCard from "../ProductCard";

const ProductSlider = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  // auto scroll
  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     if (scrollRef.current) {
  //       scrollRef.current.scrollBy({
  //         left: 320,
  //         behavior: "smooth",
  //       });
  //     }
  //   }, 3000);
  //   return () => clearInterval(interval);
  // }, []);

  const scrollLeft = () => {
    scrollRef.current?.scrollBy({
      left: -320,
      behavior: "smooth",
    });
  };

  const scrollRight = () => {
    scrollRef.current?.scrollBy({
      left: 320,
      behavior: "smooth",
    });
  };

  return (
    <div className="flex flex-col md:w-1/2 w-full gap-3">
      <div
        ref={scrollRef}
        className="flex relative overflow-x-auto gap-5 p-3 scrollbarHide scroll-smooth"
      >
        {highlightedProducts.map((item, index) => (
          <div key={index} className="shrink-0">
            <ProductCard
              image={item.url}
              title={item.name}
              items={item.items}
              price={1500}
            />
          </div>
        ))}
      </div>

      <div className="flex items-center gap-3 ms-3">
        <button
          onClick={scrollLeft}
          className="w-12 h-12 rounded-full bg-brand cursor-pointer flex items-center justify-center text-white text-xl hover:scale-105 transition"
        >
          <HiArrowSmallLeft />
        </button>

        <button
          onClick={scrollRight}
          className="w-12 h-12 rounded-full bg-yellow-500 cursor-pointer flex items-center justify-center text-white text-xl hover:scale-105 transition"
        >
          <HiArrowSmallRight />
        </button>
      </div>
    </div>
  );
};

const highlightedProducts = [
  {
    url: 'https://res.cloudinary.com/dlmdsldqn/image/upload/v1772554791/Picsart_26-03-03_11-38-00-887_lsfakl.png',
    name: 'Cylinders',
    items: 2
  },
  {
    url: 'https://res.cloudinary.com/dlmdsldqn/image/upload/v1772540844/Picsart_26-03-03_17-57-05-864_ll4084.png',
    name: 'Deadlocks',
    items: 5
  },
  {
    url: 'https://res.cloudinary.com/dlmdsldqn/image/upload/v1772390384/Picsart_26-03-01_23-20-35-195_xmax1n.png',
    name: 'Iron Handles',
    items: 54
  },
  {
    url: 'https://res.cloudinary.com/dlmdsldqn/image/upload/v1772554674/Picsart_26-03-03_11-35-01-681_urk5p5.png',
    name: 'Mortise Lock',
    items: 4
  },
  {
    url: 'https://res.cloudinary.com/dlmdsldqn/image/upload/v1772428169/Picsart_26-03-02_10-32-37-914_lqq56d.png',
    name: 'Rose Handles',
    items: 18
  },
  {
    url: 'https://res.cloudinary.com/dlmdsldqn/image/upload/v1772303272/Picsart_26-02-28_23-44-49-151_zsugse.png',
    name: 'Stainless Steel Handles',
    items: 18
  },
  {
    url: 'https://res.cloudinary.com/dlmdsldqn/image/upload/v1772262814/Picsart_26-02-27_23-39-34-264_fwiwbz.png',
    name: 'Stainless Steel Zinc Plated',
    items: 47
  },
]

export default ProductSlider;