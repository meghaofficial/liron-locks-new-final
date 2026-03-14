import { FiMail } from "react-icons/fi";

export default function NewsletterSection() {
  return (
    <section className="relative py-20 bg-gray-100 overflow-hidden">
      
      {/* Decorative dots */}
      <div className="absolute top-6 right-10 opacity-30">
        <div className="grid grid-cols-5 gap-2">
          {[...Array(15)].map((_, i) => (
            <span key={i} className="w-2 h-2 bg-gray-400 rounded-full"></span>
          ))}
        </div>
      </div>

      <div className="absolute bottom-6 left-10 opacity-30">
        <div className="grid grid-cols-5 gap-2">
          {[...Array(15)].map((_, i) => (
            <span key={i} className="w-2 h-2 bg-gray-400 rounded-full"></span>
          ))}
        </div>
      </div>

      <div className="max-w-3xl mx-auto text-center px-6">

        {/* Label */}
        <div className="flex justify-center items-center gap-2 mb-4">
          <span className="w-6 h-0.5 bg-yellow-500"></span>
          <p className="text-gray-500 text-sm font-medium">
            Our Newsletter
          </p>
        </div>

        {/* Heading */}
        <h2 className="text-4xl font-bold leading-tight mb-4">
          Subscribe to Our Newsletter to Get
          <br />
          <span className="text-brand">
            Updates to Our Latest Collection
          </span>
        </h2>

        {/* Subtext */}
        <p className="text-gray-500 mb-8">
          Get 20% off on your first order just by subscribing to our newsletter
        </p>

        {/* Input + Button */}
        <div className="flex justify-center items-center gap-4 flex-col sm:flex-row">

          <div className="relative w-full sm:w-95">
            <FiMail
              className="absolute left-4 top-1/2 -translate-y-1/2 text-green-800"
              size={20}
            />

            <input
              type="email"
              placeholder="Enter Email Address"
              className="w-full pl-12 pr-4 py-4 rounded-full border border-gray-200 focus:outline-none focus:ring-2 focus:ring-brand bg-white"
            />
          </div>

          <button className="bg-yellow-400 hover:bg-yellow-500 cursor-pointer text-black font-semibold px-8 py-4 rounded-full transition">
            Subscribe
          </button>

        </div>

      </div>
    </section>
  );
}