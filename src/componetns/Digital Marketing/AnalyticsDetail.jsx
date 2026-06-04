import React from "react";
import { motion } from "framer-motion";
import {
  Users,
  Sparkles,
  CalendarDays,
  Target,
  TrendingUp,
} from "lucide-react";

import Analytics from "../../assets/images/Analytics.png"; // Rename or swap asset if needed

export default function SocialMediaDetail() {
  const platformTools = [
    {
      name: "Profile Optimization & Branding (SMO)",
      desc: "Maximizing organic discovery and establishing cohesive brand profiles.",
      icon: <Sparkles className="text-indigo-500" />,
    },
    {
      name: "Content Strategy & Scheduling",
      desc: "Creating high-engagement asset pipelines scheduled for peak traffic.",
      icon: <CalendarDays className="text-indigo-500" />,
    },
    {
      name: "Meta & Paid Ad Campaigns (SMM)",
      desc: "Precision audience targeting and hyper-optimized scaling on FB & IG.",
      icon: <Target className="text-indigo-500" />,
    },
    {
      name: "Audience Engagement & Growth Tracking",
      desc: "Monitoring key engagement trends to compound community growth.",
      icon: <TrendingUp className="text-indigo-500" />,
    },
  ];

  return (
    <section
      id="platforms-domainplatforms-domain"
      className="py-12 px-8 lg:px-16 bg-white scroll-mt-20"
    >
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row-reverse items-center lg:items-start gap-16">
        {/* Visual Content */}
        <div className="lg:w-1/2 relative lg:sticky lg:top-24">
          <div className="absolute -inset-10" />
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative z-10"
          >
            <div>
              <img
                src={Analytics}
                alt="Social Media Performance Dashboard"
                className="w-full h-auto"
              />
            </div>

            {/* Floating Metric Badge */}
            <div className="absolute -bottom-6 -left-6 bg-indigo-950 text-white p-6 rounded-2xl shadow-xl border border-indigo-900">
              <p className="text-[10px] font-bold text-indigo-400 uppercase tracking-widest mb-1">
                Audience Growth
              </p>
              <div className="flex items-baseline gap-2">
                <span className="text-3xl font-bold text-white">+34.2%</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Content Details */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="lg:w-1/2"
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="p-3 bg-indigo-50 rounded-xl text-indigo-500 shadow-sm">
              <Users size={28} />
            </div>
            <span className="text-indigo-600 font-bold tracking-widest uppercase text-xs">
              SMO & SMM Operations
            </span>
          </div>

          <h2 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-6 leading-tight">
            Dominate the feed with <br />
            <span className="text-indigo-600">Strategic Management.</span>
          </h2>

          <p className="text-lg text-gray-600 mb-10 leading-relaxed">
            Inconsistent posting and unoptimized profiles waste organic reach.
            We solve the audience retention bottleneck through tactical search
            optimization (SMO) coupled with performance-focused ad deployments
            (SMM).
          </p>

          <div className="space-y-4">
            {platformTools.map((tool, idx) => (
              <div
                key={idx}
                className="flex items-center gap-6 p-4 rounded-xl border border-gray-100 hover:bg-indigo-50/30 transition-all"
              >
                <div className="p-3 bg-white rounded-lg shadow-sm border border-gray-50">
                  {React.cloneElement(tool.icon, { size: 20 })}
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 text-sm">
                    {tool.name}
                  </h4>
                  <p className="text-xs text-gray-500 mt-0.5">{tool.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
