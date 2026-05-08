import React from "react";
import { motion } from "framer-motion";
import { FileText, Search, ShieldCheck, Zap, ArrowRight } from "lucide-react";
import AIenabled from "../../assets/images/AI-enabled.jpg";

export function AIDocumentDetail() {
  return (
    <section
      id="document-processing"
      className="py-24 px-8 lg:px-16 bg-[#f7fafc] scroll-mt-20"
    >
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row-reverse items-center lg:items-start gap-16">
        {/* Right Content */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="lg:w-1/2"
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="p-3 bg-white rounded-xl text-blue-500 shadow-sm">
              <FileText size={28} />
            </div>
            <span className="text-blue-600 font-bold tracking-widest uppercase text-xs">
              Document Intelligence
            </span>
          </div>

          <h2 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-6 leading-tight">
            Turn your documents into <br />
            <span className="text-blue-600">Actionable Insights.</span>
          </h2>

          <p className="text-lg text-gray-600 mb-10 leading-relaxed">
            Manual document auditing is slow and error-prone. We solve the data
            extraction bottleneck by deploying AI agents that categorize,
            summarize, and audit your files with 99% accuracy.
          </p>

          <div className="space-y-4">
            {[
              {
                title: "Automated Data Extraction",
                icon: <Search size={18} />,
              },
              {
                title: "Legal & Compliance Auditing",
                icon: <ShieldCheck size={18} />,
              },
              {
                title: "Bulk Document Categorization",
                icon: <Zap size={18} />,
              },
            ].map((item, i) => (
              <div
                key={i}
                className="flex items-center gap-4 bg-white p-5 rounded-2xl border border-blue-100 shadow-sm"
              >
                <div className="text-blue-500">{item.icon}</div>
                <span className="text-gray-700 font-bold text-sm">
                  {item.title}
                </span>
              </div>
            ))}
          </div>

          <button className="mt-10 flex items-center gap-3 bg-blue-600 text-white px-8 py-4 rounded-xl font-bold hover:bg-blue-700 transition-all shadow-lg">
            Start Intelligent Processing <ArrowRight size={20} />
          </button>
        </motion.div>

        {/* Left Visual: Using itservices.webp for a technical/infrastructure feel */}
        <div className="lg:w-1/2 relative lg:sticky lg:top-24">
          <div className="absolute -inset-10 bg-blue-500/5 rounded-full blur-3xl" />
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative z-10"
          >
            <div className="">
              <img
                src={AIenabled}
                alt="AI Document Processing"
                className="rounded-[2.5rem]  shadow-2xl object-cover aspect-video grayscale-[0.3] hover:grayscale-0 transition-all duration-700"
              />
            </div>

            {/* Floating Status Badge */}
            <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-2xl shadow-xl border border-blue-50">
              <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1">
                Audit Status
              </p>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                <span className="text-sm font-bold text-gray-900">
                  Compliant & Processed
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
