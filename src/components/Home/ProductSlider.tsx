import { useRef } from "react";
import { HiArrowSmallLeft, HiArrowSmallRight } from "react-icons/hi2";
import ProductCard from "../ProductCard";
import { megaCategories } from "../../data/categories";

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
        className="flex relative overflow-x-auto gap-5 p-3 hide-scrollbar scroll-smooth"
      >
        {megaCategories.map((item, index) => (
          <div key={index} className="shrink-0">
            <ProductCard
              image={item?.img}
              title={item?.name}
              items={item?.items}
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

export default ProductSlider;