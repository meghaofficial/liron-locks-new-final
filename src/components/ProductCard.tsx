import { HiArrowUpRight } from "react-icons/hi2";

type ProductCardProps = {
  image: string;
  title: string;
  items: number;
  price: number;
};

const ProductCard: React.FC<ProductCardProps> = ({
  image,
  title,
  items,
  price=0,
}) => {

  console.log("rr", price)

  return (
    <div className="md:w-[320px] w-55 bg-gray-100 md:rounded-3xl rounded-xl p-4 shadow-md relative">

      {/* Image Section */}
      <div className="relative md:rounded-2xl rounded-xl md:h-55 h-35 overflow-hidden flex items-center justify-center w-full bg-gray-200">
        <img
          src={image}
          alt={title}
          className=" object-cover bg-gray-200"
        />
      </div>

      {/* Bottom Content */}
      <div className="flex justify-between items-center mt-4">

        <div>
          <h3 className="md:text-lg text-md google-sans font-semibold text-gray-800">
            {title}
          </h3>

          <p className="text-gray-600 text-sm google-sans">
            {items.toLocaleString()} Items
          </p>
        </div>

        {/* Arrow Button */}
        <button className="md:w-12 md:h-12 h-8 min-w-8 rounded-full bg-brand cursor-pointer flex items-center justify-center text-white text-xl hover:scale-105 transition">
          <HiArrowUpRight />
        </button>

      </div>
    </div>
  );
};

export default ProductCard;