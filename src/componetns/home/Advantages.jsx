import React from "react";
import { motion } from "framer-motion";

const advantageData = {
  title: "Unlock Your Brand's Potential: My",
  highlight: "Design & Development Advantages.",
  items: [
    {
      id: "01.",
      title: "Competitive prices",
      description:
        "We offer competitive rates without compromising on quality or service.",
      icon: "💰", // Replace with your SVG/Image
    },
    {
      id: "02.",
      title: "Long-term partnership",
      description:
        "We strive to build long-term partnerships with my clients, providing ongoing support.",
      icon: "🤝", // Replace with your SVG/Image
    },
    {
      id: "03.",
      title: "Performance-driven solutions",
      description:
        "We focus on speed, security, and scalability to ensure your website delivers results.",
      icon: "⚡", // Replace with your SVG/Image
    },
  ],
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

const Advantages = () => {
  return (
    <section className="py-8 px-8 lg:px-16 bg-white text-gray-900">
      <p className="text-orange-500 block text-center font-bold tracking-[0.2em] uppercase text-xs mb-4">
        Advantages
      </p>
      <div className="max-w-7xl mx-auto text-center">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold inline-block relative">
            {advantageData.title} <br />
            <span className="text-indigo-900">{advantageData.highlight}</span>
            {/* Custom Underline Image/SVG */}
            <div className="mt-2 flex justify-center">
              <div className="h-1 w-48 bg-gray-900 rounded-full opacity-20" />
            </div>
          </h2>
        </motion.div>

        {/* Advantage Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-12"
        >
          {advantageData.items.map((item, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="flex flex-col items-center group"
            >
              {/* Icon Container */}
              <div className="h-24 flex items-center justify-center mb-6 text-5xl">
                {/* You can replace this with the <img> tag for your specific illustrations */}
                <div className="transform group-hover:scale-120 transition-transform duration-300">
                  {item.icon}
                </div>
              </div>

              {/* Text Content */}
              <h3 className="text-xl font-bold mb-3">{item.title}</h3>
              <p className="text-gray-600 text-sm md:text-base leading-relaxed mb-6 max-w-xs">
                {item.description}
              </p>

              {/* Background Number */}
              <span className="text-6xl font-black text-gray-200/90 select-none">
                {item.id}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Advantages;
