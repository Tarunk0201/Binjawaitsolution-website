import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, X } from "lucide-react";

const faqData = [
  {
    question: "How long does a typical project take?",
    answer:
      "Project timelines vary based on complexity. A standard high-performance website usually takes 4-6 weeks, while complex custom CRM or AI integrations may take 8-12 weeks.",
  },
  {
    question: "Do you offer post-launch support?",
    answer:
      "Yes, we don’t disappear after delivery. We offer continuous support, security updates, and performance monitoring to ensure your digital ecosystem evolves alongside your business.",
  },
  {
    question: "Can you integrate AI into my existing website?",
    answer:
      "Absolutely. We specialize in building 'Agentic AI' solutions that can be integrated into your current tech stack to automate workflows or enhance customer interaction.",
  },
  {
    question: "How customizable is the software?",
    answer:
      "Everything we build is tailor-made. We don’t use generic templates, ensuring the final product aligns perfectly with your specific vision and market goals.",
  },
];

const FAQCard = ({ question, answer, isOpen, onClick }) => {
  return (
    <motion.div
      layout
      className={`mb-4 overflow-hidden rounded-xl border border-gray-100 bg-white transition-all duration-300 ${
        isOpen ? "shadow-lg" : "shadow-sm"
      }`}
    >
      <button
        className="flex w-full items-center justify-between p-6 text-left focus:outline-none"
        onClick={onClick}
      >
        <span
          className={`text-lg font-medium transition-colors ${isOpen ? "text-indigo-900" : "text-gray-500"}`}
        >
          {question}
        </span>
        <div
          className={`shrink-0 ml-4 transition-transform duration-300 ${isOpen ? "text-purple-600" : "text-gray-400"}`}
        >
          {isOpen ? <X size={20} /> : <Plus size={20} />}
        </div>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <div className="px-6 pb-6 text-gray-600 text-sm leading-relaxed border-t border-gray-50 pt-4">
              {answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

const SideBySideFAQ = () => {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="bg-[#f9f9f9] py-16 px-8 lg:px-16">
      <p className="text-orange-500 block text-center font-bold tracking-[0.2em] uppercase text-xs mb-4">
        FAQs
      </p>
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:items-start">
          {/* Left Column - Massive Title */}
          <div className="lg:sticky lg:top-32">
            <h2 className="text-[120px] font-sans font-medium leading-none tracking-tighter text-black md:text-[180px]">
              FAQs
            </h2>
          </div>

          {/* Right Column - Stacked Cards */}
          <div className="flex flex-col">
            {faqData.map((faq, index) => (
              <FAQCard
                key={index}
                question={faq.question}
                answer={faq.answer}
                isOpen={openIndex === index}
                onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SideBySideFAQ;
