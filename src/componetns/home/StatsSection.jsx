import React from "react";
import { motion } from "framer-motion";

const statsData = {
  headline: "Real Results We're Proud To Share",
  stats: [
    {
      value: "600+",
      label: "Happy Customers",
      description:
        "We've successfully served over fifty thousand individuals and businesses worldwide, helping them achieve their goals.",
    },
    {
      value: "98%",
      label: "Customer Satisfaction",
      description:
        "Our commitment to excellence is reflected in our high customer satisfaction rate based on recent surveys.",
    },
    {
      value: "3 Years",
      label: "In Business",
      description:
        "Celebrating a decade of innovation, growth, and building strong relationships in the industry.",
    },
  ],
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: "easeOut" },
  },
};

const StatsSection = () => {
  return (
    <section className="py-16 px-8 lg:px-16  bg-white text-black">
      <p className="text-orange-500 block text-center font-bold tracking-[0.2em] uppercase text-xs mb-4">
        Achievement
      </p>
      <div className="max-w-7xl mx-auto ">
        <motion.div className="md:w-1/3 pb-10">
          <div className="h-1 w-12 bg-orange-500 mb-4" />
          <h2 className="text-4xl font-bold leading-tight">
            {statsData.headline}
          </h2>
        </motion.div>

        {/* Stats Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {statsData.stats.map((item, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              className="bg-black/5 p-8 rounded-2xl backdrop-blur-sm transition-all duration-300 ease-out hover:-translate-y-2 hover:shadow-xl hover:shadow-black/10"
            >
              <h3 className="text-5xl font-bold mb-4 tracking-tight">
                {item.value}
              </h3>
              <p className="text-orange-400 font-semibold mb-3 uppercase tracking-wide text-sm">
                {item.label}
              </p>
              <p className="text-gray-700 leading-relaxed text-sm md:text-base">
                {item.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default StatsSection;
