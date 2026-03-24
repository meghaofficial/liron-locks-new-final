import { HiArrowUpRight } from "react-icons/hi2";
import { useNavigate } from "react-router-dom";

type ProductCardProps = {
  image?: string;
  title?: string;
  items?: number;
};

const navItems: Record<string, string> = {
  'Cylinders': 'cylinders',
  'Dead & Latch Locks': 'dead_lock',
  'Handles': 'iron_handles',
  'Mortise Locks': 'mortise_lock',
};

const ProductCard: React.FC<ProductCardProps> = ({
  image,
  title,
  items,
}) => {

  const navigate = useNavigate();

  return (
    <div className="md:w-[320px] w-55 bg-gray-100 md:rounded-3xl rounded-xl p-2 shadow-md relative">

      {/* Image Section */}
      <div className="relative md:rounded-2xl rounded-xl md:h-55 h-35 overflow-hidden flex items-center justify-center w-full bg-gray-200">
        <img
          src={image}
          alt={title}
          className="md:h-50 h-30 object-cover bg-gray-200"
        />
      </div>

      {/* Bottom Content */}
      <div className="flex justify-between items-center mt-4 p-2">

        <div>
          <h3 className="md:text-lg text-md google-sans font-semibold text-gray-800">
            {title}
          </h3>

          <p className="text-gray-600 text-sm google-sans">
            {items?.toLocaleString()} Items
          </p>
        </div>

        {/* Arrow Button */}
        <button className="md:w-12 md:h-12 h-8 min-w-8 rounded-full bg-brand cursor-pointer flex items-center justify-center text-white text-xl hover:scale-105 transition" onClick={() => title && navigate(`/products/${navItems?.[title]}`)}>
          <HiArrowUpRight />
        </button>

      </div>
    </div>
  );
};

export default ProductCard;