import { FiHeart, FiShoppingBag } from "react-icons/fi";
import { FiMaximize } from "react-icons/fi";
import { FaStar } from "react-icons/fa";

type ProductCardType = {
  name: string,
  category: string,
  price: number,
  discount?: number,
  discounted_price?: number,
  rating: number,
  url: string
}

export default function ProductCard2({ name, category, price, discount, discounted_price, rating, url }: ProductCardType) {
  return (
    <div className="w-65 rounded-3xl p-4">

      {/* Image Section */}
      <div className="relative bg-gray-200 rounded-2xl p-6 flex justify-center">

        {/* Discount Badge */}
        {discount && (
          <span className="absolute left-3 top-3 bg-brand text-white text-sm px-4 py-1 rounded-full">
            {discount}% off
          </span>
        )}

        {/* Right Icons */}
        <div className="absolute right-3 top-3 flex flex-col gap-3">

          <button className="w-9 h-9 bg-white rounded-full flex items-center justify-center shadow cursor-pointer">
            <FiHeart />
          </button>

          <button className="w-9 h-9 bg-white rounded-full flex items-center justify-center shadow cursor-pointer">
            <FiMaximize />
          </button>

          <button className="w-9 h-9 bg-white rounded-full flex items-center justify-center shadow cursor-pointer">
            <FiShoppingBag />
          </button>

        </div>

        {/* Product Image */}
        <img
          src={url}
          alt="chair"
          className="h-50 object-contain"
        />

      </div>

      {/* Product Info */}
      <div className="mt-4 space-y-1">

        {/* Category + Rating */}
        <div className="flex justify-between items-center text-sm text-gray-500">

          <span>{category}</span>

          <div className="flex items-center gap-1 text-yellow-500">
            <FaStar />
            <span className="text-gray-700 font-medium">{rating}</span>
          </div>

        </div>

        {/* Product Name */}
        <h3 className="text-lg font-semibold text-gray-800">
          {name}
        </h3>

        {/* Price */}
        <div className="flex items-center gap-2">

          <span className="text-lg font-semibold text-gray-900">
            Rs. {discounted_price || price}
          </span>

          {discounted_price && (
            <span className="text-gray-400 line-through">
              Rs. {price}
            </span>
          )}

        </div>

      </div>

    </div>
  );
}