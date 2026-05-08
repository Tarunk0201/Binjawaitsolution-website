import React from "react";
import { motion } from "framer-motion";
import marketingstrategy from "../../assets/images/marketingstrategy.jpg";

export default function MarketingHero() {
  return (
    <section className="relative py-24 lg:h-screen px-8 lg:px-10 bg-[#EEEADA] text-black overflow-hidden flex justify-center items-center">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          className="lg:w-1/2 z-10"
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="h-px w-12 bg-orange-500" />
            <span className="text-orange-500 font-bold tracking-widest uppercase text-xs">
              Data-Driven Growth
            </span>
          </div>
          <h1 className="text-5xl md:text-7xl font-serif font-bold mb-8 leading-tight">
            Digital <br />
            <span className="text-gray-400">Marketing</span>
          </h1>
          <p className="text-xl text-gray-400 leading-relaxed max-w-xl">
            We don't just chase likes; we chase ROI. Our strategic campaigns
            leverage SEO, social media, and elite branding to scale your
            business with confidence and clarity.
          </p>
        </motion.div>

        <div className="lg:w-1/2 relative">
          <div className="absolute inset-0  blur-[120px] rounded-full" />
          {/* Using your existing asset assets/images/chooseimage3.png which represents phone/engagement */}
          <img
            src={marketingstrategy}
            alt="Marketing Strategy"
            className="relative z-10 rounded-4xl"
          />
        </div>
      </div>
    </section>
  );
}
