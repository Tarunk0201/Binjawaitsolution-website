import React from "react";
import { motion } from "framer-motion";

const heroData = {
  subheadline: "Complete Digital Solution under one Roof",
  headline: "Efficient Solutions for Your Problems",
  paragraph:
    "We provide complete IT solutions including websites, apps, CRM, AI automation, digital marketing, and compliance support to help businesses build, manage, and grow efficiently",
  videoSrc: "/Hero-Video.mp4",
};

const textContainerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.5,
    },
  },
};

const textItemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const Hero = () => {
  return (
    <div className="relative w-full pt-30 h-screen flex items-center justify-start text-white overflow-hidden">
      {/* Video Background */}
      <video
        autoPlay
        muted
        loop
        playsInline
        poster={heroData.posterSrc}
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
      >
        <source src={heroData.videoSrc} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="absolute top-0 left-0 w-full h-full bg-black/60 z-1" />

      {/* Content */}
      <motion.div
        className="relative z-10 px-8 lg:px-16 flex flex-col items-start"
        initial="hidden"
        animate="visible"
        variants={textContainerVariants}
      >
        <motion.p
          variants={textItemVariants}
          className="text-orange-400 text-sm font-semibold tracking-wider uppercase"
        >
          {heroData.subheadline}
        </motion.p>
        <motion.h1
          variants={textItemVariants}
          className="text-2xl md:text-5xl font-serif font-bold my-4 leading-tight"
        >
          {heroData.headline}
        </motion.h1>
        <motion.p
          variants={textItemVariants}
          className="max-w-xl text-md md:text-lg text-gray-200 mb-8"
        >
          {heroData.paragraph}
        </motion.p>

        {/* CTAs */}
        <motion.div variants={textItemVariants} className="flex gap-4 mb-8">
          <button className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-3 md:px-6 py-3 rounded-md transition-colors">
            Get a Free Quote
          </button>
          <button className="bg-transparent border border-white hover:bg-white/10 text-white font-semibold px-6 py-3 rounded-md transition-colors">
            Contact Us
          </button>
        </motion.div>

        {/* Customer Reviews */}
        <motion.div
          variants={textItemVariants}
          className="flex items-center gap-4"
        >
          <div className="flex -space-x-2">
            <img
              className="w-10 h-10 rounded-full border-2 border-white"
              src="https://i.pravatar.cc/150?img=48"
              alt="Customer 1"
            />
            <img
              className="w-10 h-10 rounded-full border-2 border-white"
              src="https://i.pravatar.cc/150?img=48"
              alt="Customer 2"
            />
            <img
              className="w-10 h-10 rounded-full border-2 border-white"
              src="https://i.pravatar.cc/150?img=48"
              alt="Customer 3"
            />
          </div>
          <div className="text-sm">
            <p className="font-bold">1K+ Customer Review</p>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Hero;
