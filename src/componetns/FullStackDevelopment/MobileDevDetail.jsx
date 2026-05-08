import React from "react";
import { motion } from "framer-motion";
import {
  Smartphone,
  Zap,
  ShieldCheck,
  RefreshCw,
  ArrowRight,
} from "lucide-react";
import mob from "../../assets/images/mob.jpg";

const MobileDevDetail = () => {
  const problemSolvers = [
    {
      title: "Fragmented User Reach",
      desc: "We build high-performance cross-platform apps that ensure your brand looks and feels consistent on both Android and iOS devices.",
      icon: <Smartphone className="text-red-500" size={24} />,
    },
    {
      title: "Delayed User Engagement",
      desc: "Integration of real-time features and push notifications to keep your users connected and informed the second something happens.",
      icon: <Zap className="text-red-500" size={24} />,
    },
    {
      title: "Security & Trust Risks",
      desc: "Implementation of secure biometric authentication and encrypted data handling to protect your users' most sensitive information.",
      icon: <ShieldCheck className="text-red-500" size={24} />,
    },
    {
      title: "Stagnant Performance",
      desc: "Continuous maintenance and support cycles to ensure your application stays compatible with the latest OS updates and hardware.",
      icon: <RefreshCw className="text-red-500" size={24} />,
    },
  ];

  return (
    <section
      id="mobile-dev"
      className="py-24 px-8 lg:px-16 bg-[#fdf2f0] scroll-mt-20"
    >
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row-reverse items-center lg:items-start gap-16">
        {/* Left Content: The Problem/Solution Messaging */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="lg:w-1/2"
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="p-3 bg-white rounded-xl text-red-500 shadow-sm">
              <Smartphone size={28} />
            </div>
            <span className="text-red-600 font-bold tracking-widest uppercase text-xs">
              Mobile App Development
            </span>
          </div>

          <h2 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-6 leading-tight">
            Put your business in the <br />
            <span className="text-red-600">palm of their hand.</span>
          </h2>

          <p className="text-lg text-gray-600 mb-10 leading-relaxed">
            Mobile accessibility isn't just an option,it's where your customers
            live. We specialize in building scalable applications that combine
            native performance with seamless cross-platform efficiency.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {problemSolvers.map((item, idx) => (
              <div
                key={idx}
                className="bg-white p-6 rounded-2xl border border-red-100 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="mb-4">{item.icon}</div>
                <h4 className="font-bold text-gray-900 mb-2">{item.title}</h4>
                <p className="text-sm text-gray-500 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>

          <button className="mt-10 flex items-center gap-3 bg-red-500 text-white px-8 py-4 rounded-xl font-bold hover:bg-red-600 transition-all shadow-lg hover:shadow-red-200">
            Launch Your App <ArrowRight size={20} />
          </button>
        </motion.div>

        {/* Right Visual Side */}
        <div className="lg:w-1/2 relative lg:sticky lg:top-24">
          {/* Decorative Background Element */}
          <div className="absolute -inset-10 bg-red-500/5 rounded-full blur-3xl" />

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative z-10"
          >
            {/* Main Mockup Container */}
            <div className="bg-white rounded-4xl shadow-[0_50px_100px_-20px_rgba(0,0,0,0.3)] w-full max-w-[320px] mx-auto overflow-hidden aspect-9/19">
              <img
                src={mob}
                alt="Mobile App Interface"
                className="w-full h-full object-cover rounded-4xl"
              />
            </div>

            {/* Floating UI Badges */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
              className="absolute -top-6 -right-4 bg-white p-4 rounded-2xl shadow-xl border border-gray-100 hidden md:block"
            >
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center text-green-600">
                  <ShieldCheck size={18} />
                </div>
                <span className="text-xs font-bold text-gray-700">
                  Verified Secure
                </span>
              </div>
            </motion.div>

            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{
                repeat: Infinity,
                duration: 4,
                ease: "easeInOut",
                delay: 1,
              }}
              className="absolute bottom-10 -left-10 bg-white p-4 rounded-2xl shadow-xl border border-gray-100 hidden md:block"
            >
              <p className="text-[10px] font-bold text-red-500 uppercase tracking-widest mb-1">
                Performance
              </p>
              <p className="text-sm font-bold text-gray-900">99.9% Uptime</p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default MobileDevDetail;
