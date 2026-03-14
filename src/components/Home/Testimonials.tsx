import { useEffect, useState } from "react";
import { IoIosStar } from "react-icons/io";
import { RiDoubleQuotesL } from "react-icons/ri";
import { motion } from "framer-motion";

const testimonials = [
  {
    name: "Leslie Alexander",
    role: "Architecture",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    review:
      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.",
  },
  {
    name: "Jenny Wilson",
    role: "Interior Designer",
    image: "https://randomuser.me/api/portraits/women/68.jpg",
    review:
      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.",
  },
  {
    name: "Robert Fox",
    role: "Builder",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    review:
      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.",
  },
  {
    name: "Esther Howard",
    role: "Engineer",
    image: "https://randomuser.me/api/portraits/women/12.jpg",
    review:
      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.",
  },
  {
    name: "Leslie Alexander",
    role: "Architecture",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    review:
      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.",
  },
  {
    name: "Jenny Wilson",
    role: "Interior Designer",
    image: "https://randomuser.me/api/portraits/women/68.jpg",
    review:
      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.",
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
          <span className="w-6 h-[2px] bg-yellow-500"></span>
          <p className="text-gray-500 text-sm font-medium">Testimonial</p>
        </div>

        {/* Heading */}
        <h2 className="text-4xl font-bold mb-12">
          What <span className="text-brand">Our Clients Say</span>
        </h2>

        {/* Slider */}
        <div className="relative overflow-hidden sm:px-10 px-5">
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
                      <div className="bg-brand p-3 rounded-r-full absolute top-0 left-0">
                        <img
                          src={item.image}
                          className="w-20 h-20 rounded-full border-4 border-white object-cover"
                        />
                      </div>

                      <div className="relative md:left-25 left-20 -top-3">
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