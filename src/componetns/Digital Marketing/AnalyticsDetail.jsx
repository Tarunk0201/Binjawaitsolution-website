import React from "react";
import { motion } from "framer-motion";
import {
  BarChart3,
  PieChart,
  Search,
  Globe,
  LineChart,
  ArrowRight,
} from "lucide-react";

import Analytics from "../../assets/images/Analytics.jpg";

export default function AnalyticsDetail() {
  const platformTools = [
    {
      name: "Google Analytics",
      desc: "Tracking user behavior to optimize conversion paths.",
      icon: <BarChart3 className="text-green-500" />,
    },
    {
      name: "Search Console",
      desc: "Monitoring organic search health and indexing.",
      icon: <Search className="text-green-500" />,
    },
    {
      name: "Meta Ad Manager",
      desc: "Precision targeting for Facebook and Instagram ads.",
      icon: <PieChart className="text-green-500" />,
    },
    {
      name: "YouTube Performance",
      desc: "Analyzing video engagement and reach metrics.",
      icon: <LineChart className="text-green-500" />,
    },
  ];

  return (
    <section
      id="platforms-domain"
      className="py-24 px-8 lg:px-16 bg-white scroll-mt-20"
    >
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row-reverse items-center lg:items-start gap-16">
        {/* Visual: Using 'itservices.webp' for a tech-focused feel */}
        <div className="lg:w-1/2 relative lg:sticky lg:top-24">
          <div className="absolute -inset-10 bg-green-500/5 rounded-full blur-3xl" />
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative z-10"
          >
            <div className="rounded-[2.5rem] overflow-hidden border-8 border-gray-50 shadow-2xl">
              <img
                src={Analytics}
                alt="Marketing Analytics Dashboard"
                className="w-full h-auto object-cover aspect-video"
              />
            </div>

            {/* Floating Metric Badge */}
            <div className="absolute -bottom-6 -left-6 bg-indigo-900 text-white p-6 rounded-2xl shadow-xl">
              <p className="text-[10px] font-bold text-green-400 uppercase tracking-widest mb-1">
                Conversion Rate
              </p>
              <div className="flex items-baseline gap-2">
                <span className="text-3xl font-bold">+18.5%</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="lg:w-1/2"
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="p-3 bg-green-50 rounded-xl text-green-500 shadow-sm">
              <BarChart3 size={28} />
            </div>
            <span className="text-green-600 font-bold tracking-widest uppercase text-xs">
              Analytics & Platforms
            </span>
          </div>

          <h2 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-6 leading-tight">
            Decisions driven by <br />
            <span className="text-green-600">Facts, not Feelings.</span>
          </h2>

          <p className="text-lg text-gray-600 mb-10 leading-relaxed">
            We solve the "blind spending" problem. By integrating advanced
            tracking across all platforms, we ensure every marketing dollar is
            accounted for and optimized for the highest possible return.
          </p>

          <div className="space-y-4">
            {platformTools.map((tool, idx) => (
              <div
                key={idx}
                className="flex items-center gap-6 p-4 rounded-xl border border-gray-100 hover:bg-green-50/30 transition-all"
              >
                <div className="p-3 bg-white rounded-lg shadow-sm">
                  {React.cloneElement(tool.icon, { size: 20 })}
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 text-sm">
                    {tool.name}
                  </h4>
                  <p className="text-xs text-gray-500">{tool.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <button className="mt-10 flex items-center gap-3 bg-green-600 text-white px-8 py-4 rounded-xl font-bold hover:bg-green-700 transition-all shadow-lg hover:shadow-green-200">
            View Analytics Suite <ArrowRight size={20} />
          </button>
        </motion.div>
      </div>
    </section>
  );
}
