import { useEffect, useState } from "react";
import { IoIosStar } from "react-icons/io";
import { RiDoubleQuotesL } from "react-icons/ri";
import { motion } from "framer-motion";

const testimonials = [
  {
    name: "Chandra Prakash Sharma",
    role: "Chief Executive Officer",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    review:
      "As CEO, I am committed to building a brand that stands for trust, durability, and innovation in every product we offer. Our vision is to continuously grow while delivering reliable solutions that meet the evolving needs of our customers.",
  },
  {
    name: "Yash Wardhan",
    role: "Managing Director",
    image: "https://randomuser.me/api/portraits/women/68.jpg",
    review:
      "Our goal is to provide dependable security solutions backed by quality and experience. We are dedicated to growing our business while upholding trust and integrity in every product.",
  },
  {
    name: "Devendri Sharma",
    role: "Accountant",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    review:
      "As an Accountant, I ensure that all financial operations are managed with accuracy, transparency, and compliance. My focus is on maintaining strong financial discipline to support the company’s steady growth.",
  },
  {
    name: "Varsha Sharma",
    role: "Business Partner",
    image: "https://randomuser.me/api/portraits/women/12.jpg",
    review:
      "As a Business Partner, I am committed to strengthening relationships and driving sustainable growth for the company. My focus is on building trust, expanding opportunities, and ensuring long-term success.",
  },
  {
    name: "Megha Sharma",
    role: "Digital Operations Manager",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    review:
      "As Digital Operations Manager, I focus on enhancing our online presence and ensuring a seamless digital experience. My goal is to drive growth through efficient systems, user-focused design, and continuous improvement.",
  },
  {
    name: "Khushi Sharma",
    role: "Business Supporter",
    image: "https://randomuser.me/api/portraits/women/68.jpg",
    review:
      "As a Business Supporter, I contribute to the smooth functioning of operations and day-to-day activities. My focus is on providing reliable support to ensure the business runs efficiently and effectively.",
  },
];

export default function Testimonials() {
  const [index, setIndex] = useState(0);
  const [cardsPerSlide, setCardsPerSlide] = useState(2);
  const slides = [];


  useEffect(() => {
    const updateCards = () => {
      if (window.innerWidth < 640) {
        setCardsPerSlide(1); // mobile
      } else {
        setCardsPerSlide(2); // desktop
      }
    };

    updateCards(); // run once
    window.addEventListener("resize", updateCards);

    return () => window.removeEventListener("resize", updateCards);
  }, []);

  for (let i = 0; i < testimonials.length; i += cardsPerSlide) {
    slides.push(testimonials.slice(i, i + cardsPerSlide));
  }

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, 6000);

    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <section className="bg-gray-100 md:py-20 py-10 overflow-hidden">
      <div className="max-w-6xl mx-auto text-center">

        {/* Label */}
        <div className="flex justify-center items-center gap-2 mb-3">
          <span className="w-6 h-0.5 bg-yellow-500"></span>
          <p className="text-gray-500 text-sm font-medium">Our Team</p>
        </div>

        {/* Heading */}
        <h2 className="text-4xl font-bold mb-12">
          The <span className="text-brand">People Behind Our Work</span>
        </h2>

        {/* Slider */}
        <div className="relative overflow-hidden sm:px-10 px-5 pb-1">
          <motion.div
            className="flex"
            animate={{ x: `-${index * 100}%` }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
          >
            {slides.map((group, slideIndex) => (
              <div key={slideIndex} className="min-w-full grid grid-cols-1 sm:grid-cols-2 gap-8 sm:px-5 px-2">

                {group.map((item, i) => (
                  <div
                    key={i}
                    className="relative bg-white rounded-2xl p-8 text-left shadow-sm overflow-hidden"
                  >

                    {/* Profile */}
                    <div className="flex items-center gap-4 mb-4">
                      {/* <div className="bg-brand p-3 rounded-r-full absolute top-0 left-0">
                        <img
                          src={item.image}
                          className="w-20 h-20 rounded-full border-4 border-white object-cover"
                        />
                      </div> */}

                      <div className="relative -top-3">
                        <h4 className="font-semibold text-lg">{item.name}</h4>
                        <p className="text-gray-500 text-sm">{item.role}</p>

                        <div className="flex items-center gap-1 mt-1">
                          {[...Array(5)].map((_, index) => (
                            <IoIosStar
                              key={index}
                              size={16}
                              className="text-yellow-400"
                            />
                          ))}
                          <span className="ml-1 text-sm">5.0</span>
                        </div>
                      </div>
                    </div>

                    {/* Quote */}
                    <div className="absolute right-6 top-6 h-12 w-12 md:flex hidden items-center justify-center bg-gray-100 rounded-full">
                      <RiDoubleQuotesL className="text-brand" size={30} />
                    </div>

                    {/* Review */}
                    <p className="text-gray-500 leading-relaxed">
                      {item.review}
                    </p>

                  </div>
                ))}

              </div>
            ))}
          </motion.div>
        </div>

        {/* Progress Bars */}
        <div className="flex justify-center gap-2 mt-10">
          {slides.map((_, i) => (
            <div key={i} className="w-10 h-1 bg-gray-300 rounded overflow-hidden">
              {index === i && (
                <motion.div
                  className="h-full bg-brand"
                  initial={{ width: "0%" }}
                  animate={{ width: "100%" }}
                  transition={{ duration: 6, ease: "linear" }}
                />
              )}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}