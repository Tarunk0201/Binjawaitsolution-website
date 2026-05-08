import React from "react";
import { motion } from "framer-motion";
import {
  BookOpen,
  BarChart3,
  Landmark,
  Calculator,
  ArrowRight,
} from "lucide-react";
import wer from "../../assets/images/wer.jpg";

export function AccountingDetail() {
  return (
    <section
      id="accounting-finance"
      className="py-24 px-8 lg:px-16 bg-[#fcfaf7] scroll-mt-20"
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
            <div className="p-3 bg-white rounded-xl text-amber-600 shadow-sm">
              <BookOpen size={28} />
            </div>
            <span className="text-amber-600 font-bold tracking-widest uppercase text-xs">
              Accounting & Finance
            </span>
          </div>

          <h2 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-6 leading-tight">
            Clear financials. <br />
            <span className="text-amber-600">Confident decisions.</span>
          </h2>

          <p className="text-lg text-gray-600 mb-10 leading-relaxed">
            We solve the "black hole" of business spending. Our CA consultation
            and auditing services provide a 360-degree view of your financial
            standing, making loan approvals and audits effortless.
          </p>

          <div className="space-y-4">
            {[
              {
                title: "Bookkeeping & Financial Statements",
                icon: <Calculator size={18} />,
              },
              {
                title: "Audit & Tax Consultation",
                icon: <Landmark size={18} />,
              },
              {
                title: "Project Reports for Business Loans",
                icon: <BarChart3 size={18} />,
              },
            ].map((item, i) => (
              <div
                key={i}
                className="flex items-center gap-4 bg-white p-5 rounded-2xl border border-amber-100 shadow-sm"
              >
                <div className="text-amber-600">{item.icon}</div>
                <span className="text-gray-700 font-bold text-sm">
                  {item.title}
                </span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Left Visual */}
        <div className="lg:w-1/2 relative lg:sticky lg:top-24">
          <div className="absolute -inset-10 bg-amber-500/5 rounded-full blur-3xl" />
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative z-10"
          >
            <div className="rounded-[2.5rem] overflow-hidden border-8 border-white shadow-2xl">
              <img
                src={wer}
                alt="Accounting Dashboard"
                className="w-full h-auto object-cover aspect-video"
              />
            </div>

            {/* Floating Metric Badge */}
            <div className="absolute -bottom-6 -right-6 bg-gray-900 text-white p-6 rounded-2xl shadow-xl">
              <p className="text-[10px] font-bold text-amber-400 uppercase tracking-widest mb-1">
                Audit Readiness
              </p>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-green-500" />
                <span className="text-sm font-bold">100% Compliant</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
