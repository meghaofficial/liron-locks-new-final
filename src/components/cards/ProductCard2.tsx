import { FiHeart, FiShoppingBag } from "react-icons/fi";
import { FiMaximize } from "react-icons/fi";
import { FaStar } from "react-icons/fa";
import { FiExternalLink } from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";
import type { ProductCardType } from "../../types";
import { useEffect, useState } from "react";
import { InputField } from "../shared/InputField";

const backdropVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

const modalVariants = {
  hidden: {
    opacity: 0,
    scale: 0.95,
    y: 40,
  },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 25,
    },
  },
  exit: {
    opacity: 0,
    scale: 0.95,
    y: 20,
    transition: {
      duration: 0.2,
    },
  },
};

export default function ProductCard2({ name, category, price, discount, discounted_price, rating, url }: ProductCardType) {

  const [isOpen, setIsOpen] = useState(false);
  const [form, setForm] = useState({
    name: "",
    address: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleSend = () => {
    const phoneNumber = "919927772017"; // include country code

    const message = `
      New Inquiry For

      Product: ${name}
      Category: ${category}
      Image: ${url}
      Phone: ${'phone'}
      Email: ${'email'}
      Message: ${'messageInput'}
    `;

    const encodedMessage = encodeURIComponent(message);

    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

    window.open(whatsappURL, "_blank");

  }

  useEffect(() => {
    handleSend()
  }, [form]);

  // FOR INQUIRY FORM
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(form);
  };

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

      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 z-50 flex justify-center bg-black/40 backdrop-blur-sm"
            variants={backdropVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
            onClick={() => setIsOpen(false)}
          >
            <motion.div
              className="bg-white rounded-2xl shadow-xl p-6 w-[90%] max-w-md overflow-y-hidden"
              initial="hidden"
              animate="visible"
              exit="exit"
              onClick={(e) => e.stopPropagation()}
            >
              <form
                onSubmit={handleSubmit}
                className="w-full max-w-2xl space-y-5 overflow-y-auto h-100"
              >
                <h2 className="text-2xl font-semibold text-[#123458]">
                  Contact Details
                </h2>

                {/* Name */}
                <InputField
                  label="Full Name"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                />

                {/* Address */}
                <InputField
                  label="Full Address"
                  name="address"
                  value={form.address}
                  onChange={handleChange}
                />

                {/* Email + Phone Grid */}
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

                {/* Message */}
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
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
}