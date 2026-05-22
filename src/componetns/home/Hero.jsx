import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const heroData = {
  subheadline: "Efficient Solutions for Your Problems",
  headline: "Complete Digital Solution under one Roof",
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
          <Link to="/contact">
            <button className="bg-transparent border border-white hover:bg-white/10 text-white font-semibold px-6 py-3 rounded-md transition-colors">
              Contact Us
            </button>
          </Link>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Hero;
