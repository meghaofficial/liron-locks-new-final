import { FiExternalLink } from "react-icons/fi";
import type { ProductCardType } from "../../types";
import { useEffect, useState } from "react";
import Popup from "../shared/Popup";
import { InputField } from "../shared/InputField";

export default function ProductCard2({ name, category,
  // price, discount, discounted_price, rating, 
  url }: ProductCardType) {

  const [isOpen, setIsOpen] = useState(false);
  const [form, setForm] = useState({
    name: "",
    address: "",
    email: "",
    phone: "",
    message: "",
  });

  const [loading, setLoading] = useState(true);

  const handleSend = () => {
    const phoneNumber = "919927772017"; // include country code

    const message = `
      New Inquiry For - ${url}

      Product: ${name}
      Category: ${category}

      Client Details :-

      From: ${form.name}
      Address: ${form.address}
      Phone: ${form.phone}
      Email: ${form.email}
      Message: ${form.message}
    `;
    const encodedMessage = encodeURIComponent(message);
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

    window.open(whatsappURL, "_blank");
  }

  // FOR INQUIRY FORM
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    e.preventDefault();
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    handleSend();
  };

  // useEffect(() => {
  //   setLoading(true);
  // }, [url]);

  return (
    <div className="w-65 rounded-3xl p-4">

      {/* Image Section */}
      <div className="relative bg-gray-200 rounded-2xl p-6 flex justify-center">

        {/* Discount Badge */}
        {/* {discount && (
          <span className="absolute left-3 top-3 bg-brand text-white text-sm px-4 py-1 rounded-full">
            {discount}% off
          </span>
        )} */}

        {/* Right Icons */}
        {/* <div className="absolute right-3 top-3 flex flex-col gap-3">
          <button className="w-9 h-9 bg-white rounded-full flex items-center justify-center shadow cursor-pointer">
            <FiHeart />
          </button>
          <button className="w-9 h-9 bg-white rounded-full flex items-center justify-center shadow cursor-pointer">
            <FiMaximize />
          </button>
          <button className="w-9 h-9 bg-white rounded-full flex items-center justify-center shadow cursor-pointer">
            <FiShoppingBag />
          </button>
        </div> */}

        {/* Product Image */}
        <div className="relative h-50 flex items-center justify-center">
          {/* Skeleton */}
          {loading && (
            <p className="relative left-1/3">Loading...</p>
          )}

          {/* Image */}
          <img
            src={url}
            alt="chair"
            className={`h-50 object-contain transition-opacity duration-300 ${loading ? "opacity-0" : "opacity-100"
              }`}
            onLoad={() => setLoading(false)}
          />
        </div>

      </div>

      {/* Product Info */}
      <div className="mt-4 space-y-1">

        {/* Category + Rating */}
        <div className="flex justify-between items-center text-sm text-gray-500">

          <span>{category}</span>

          {/* <div className="flex items-center gap-1 text-yellow-500">
            <FaStar />
            <span className="text-gray-700 font-medium">{rating}</span>
          </div> */}

        </div>

        {/* Product Name */}
        <h3 className="text-lg font-semibold text-gray-800">
          {name}
        </h3>

        {/* inquiry now */}
        <span className="text-sm underline cursor-pointer flex items-center gap-2" onClick={() => setIsOpen(true)}>
          Enquiry Now <FiExternalLink />
        </span>

        {/* Price */}
        {/* <div className="flex items-center gap-2">
          <span className="text-lg font-semibold text-gray-900">
            Rs. {discounted_price || price}
          </span>
          {discounted_price && (
            <span className="text-gray-400 line-through">
              Rs. {price}
            </span>
          )}
        </div> */}

      </div>

      <Popup isOpen={isOpen} setIsOpen={setIsOpen} type="Inquiry Form">
        <form
          onSubmit={handleSubmit}
          className="w-full max-w-2xl space-y-5 overflow-y-auto"
        >
          <div className="flex items-center justify-center flex-col">
            <img src={url} alt="lock-url" className="w-30 mb-6" />
            <span className="text-[10px]">Inquiry for above product</span>
          </div>
          <InputField
            label="Full Name"
            name="name"
            value={form.name}
            onChange={handleChange}
          />
          <InputField
            label="Full Address"
            name="address"
            value={form.address}
            onChange={handleChange}
          />
          <div className="grid md:grid-cols-2 gap-4">
            <InputField
              label="Email"
              name="email"
              type="email"
              value={form.email}
              onChange={handleChange}
            />
            <InputField
              label="Alternate Phone"
              name="phone"
              type="tel"
              value={form.phone}
              onChange={handleChange}
            />
          </div>
          <div className="relative">
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              required
              rows={4}
              className="peer w-full px-4 pt-5 pb-2 bg-transparent border border-gray-300 rounded-xl outline-none focus:border-[#123458]"
            />
            <label className="absolute left-4 top-2 text-sm text-gray-500 transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-focus:top-2 peer-focus:text-sm">
              Message
            </label>
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="w-full py-3 rounded-xl bg-[#123458] text-white font-medium hover:opacity-90 transition"
          >
            Submit Inquiry
          </button>
        </form>
      </Popup>

    </div>
  );
}