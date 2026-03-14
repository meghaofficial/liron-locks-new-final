import { useState } from "react";
import { FiPlus, FiMinus } from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
  {
    question: "What types of furniture do you offer?",
    answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    question: "What payment methods do you accept?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua eiusmod tempor incididunt ut labore et dolore magna aliqua",
  },
  {
    question: "Can I track my furniture delivery?",
    answer: "Yes, once your order ships you will receive a tracking link.",
  },
  {
    question: "What is your return policy?",
    answer: "You can return products within 30 days of delivery.",
  },
  {
    question: "What materials are used in your furniture?",
    answer: "We use high quality wood, engineered wood and premium fabrics.",
  },
  {
    question: "Are there any discounts or promotions available?",
    answer: "Yes, we frequently run seasonal promotions and discounts.",
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(-1);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <section className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-6">

        {/* Label */}
        <div className="flex justify-center items-center gap-2 mb-3">
          <span className="w-6 h-0.5 bg-yellow-500"></span>
          <p className="text-gray-500 text-sm font-medium">Faqs</p>
        </div>

        {/* Heading */}
        <h2 className="text-4xl font-bold text-center mb-12">
          Question? <span className="text-brand">Look here.</span>
        </h2>

        {/* FAQ List */}
        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={index}
                className={`rounded-xl border transition cursor-pointer ${
                  isOpen
                    ? "bg-brand text-white border-brand"
                    : "bg-white border-gray-200"
                }`}
              >
                {/* Question */}
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full flex justify-between items-center px-6 py-5 text-left font-semibold tracking-wider text-[14px]"
                >
                  {faq.question}

                  {isOpen ? (
                    <FiMinus className="text-yellow-400 text-xl" />
                  ) : (
                    <FiPlus className="text-xl text-gray-600" />
                  )}
                </button>

                {/* Animated Answer */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-6 text-sm text-gray-200 leading-relaxed">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}