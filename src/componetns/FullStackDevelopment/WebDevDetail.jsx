import React from "react";
import { motion } from "framer-motion";
import { Globe, CheckCircle2, ArrowRight } from "lucide-react";

import dashboard from "../../assets/images/dashboard.webp";

const WebDevDetail = () => {
  const solutions = [
    {
      problem: "Slow, outdated legacy sites",
      solution:
        "High-performance React-based architectures for instant load times.",
    },
    {
      problem: "Fragmented business data",
      solution:
        "Custom Admin Dashboards & Portals to centralize your operations.",
    },
    {
      problem: "Poor mobile experience",
      solution:
        "Responsive UI/UX implementation ensuring a seamless look on any device.",
    },
    {
      problem: "Manual repetitive tasks",
      solution:
        "API integrations and SaaS platforms that automate your digital workflow.",
    },
  ];

  return (
    <section id="web-dev" className="py-24 px-8 lg:px-16 bg-white scroll-mt-20">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center lg:items-start gap-16">
        {/* Left: Content & Problem Solver */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="lg:w-1/2"
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="p-3 bg-blue-50 rounded-xl text-blue-500 shadow-sm">
              <Globe size={28} />
            </div>
            <span className="text-blue-600 font-bold tracking-widest uppercase text-xs">
              Web Application Development
            </span>
          </div>

          <h2 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-6 leading-tight">
            We don't just build websites,we build{" "}
            <span className="text-blue-600">Business Engines.</span>
          </h2>

          <p className="text-lg text-gray-600 mb-10 leading-relaxed italic">
            In today's digital economy, your website is your hardest-working
            employee. We solve your growth bottlenecks by developing custom web
            applications that are scalable, secure, and intuitive.
          </p>

          <div className="space-y-6">
            {solutions.map((item, idx) => (
              <div
                key={idx}
                className="group p-5 bg-gray-50 rounded-2xl border border-transparent hover:border-blue-100 hover:bg-blue-50/30 transition-all"
              >
                <div className="flex items-start gap-4">
                  <div className="mt-1 text-blue-500">
                    <CheckCircle2 size={20} />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-gray-400 uppercase tracking-tighter mb-1">
                      The Problem: {item.problem}
                    </p>
                    <p className="text-base text-gray-900 font-medium">
                      {item.solution}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <button className="mt-10 flex items-center gap-3 bg-blue-600 text-white px-8 py-4 rounded-xl font-bold hover:bg-blue-700 transition-all shadow-lg hover:shadow-blue-200">
            Start Your Web Project <ArrowRight size={20} />
          </button>
        </motion.div>

        {/* Right: Visual Element */}
        <div className="lg:w-1/2 relative lg:sticky lg:top-24">
          <div className="absolute -inset-6 bg-blue-500/5 rounded-[3rem] rotate-3" />
          <div className="relative z-10 rounded-[2.5rem] overflow-hidden border-8 border-white shadow-2xl">
            {/* Context: Highlighting your work like DreamWheel or SwasthFit backend */}
            <img
              src={dashboard}
              alt="Web Development Dashboard"
              className="w-full h-auto object-cover aspect-4/3 grayscale-[0.2] hover:grayscale-0 transition-all duration-700"
            />
            {/* Floating Tech Badge */}
            <div className="absolute bg-amber-100 bottom-6 right-6 backdrop-blur-md p-4 rounded-2xl shadow-xl border border-white/20">
              <p className="text-[10px] font-bold text-blue-600 uppercase tracking-widest mb-2">
                Core Tech Stack
              </p>
              <div className="flex gap-3  font-bold text-gray-900 text-sm">
                <span>React</span>
                <span className="text-gray-300">|</span>
                <span>Node.js</span>
                <span className="text-gray-300">|</span>
                <span>MongoDB</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WebDevDetail;
