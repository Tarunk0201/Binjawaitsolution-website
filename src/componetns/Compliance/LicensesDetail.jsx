import React from "react";
import { motion } from "framer-motion";
import { FileCheck, ShieldCheck, Award, Zap, ArrowRight } from "lucide-react";
import Concept from "../../assets/images/Concept.jpg";

export default function LicensesDetail() {
  const licensePoints = [
    {
      label: "Regulatory Licenses",
      detail:
        "FSSAI Food Licenses, Trade Licenses, and MSME/Udyam registrations for legal operations.",
      icon: <Award className="text-amber-600" size={20} />,
    },
    {
      label: "Intellectual Property",
      detail:
        "Trademark registration to protect your brand identity and ISO certification for quality standards.",
      icon: <ShieldCheck className="text-amber-600" size={20} />,
    },
  ];

  return (
    <section
      id="licenses"
      className="py-24 px-8 lg:px-16 bg-white scroll-mt-20"
    >
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center lg:items-start gap-16">
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="lg:w-1/2"
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="p-3 bg-amber-50 rounded-xl text-amber-500 shadow-sm">
              <FileCheck size={28} />
            </div>
            <span className="text-amber-600 font-bold tracking-widest uppercase text-xs">
              Licenses & Certification
            </span>
          </div>

          <h2 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-6 leading-tight">
            Get the green light <br />
            <span className="text-amber-600">to scale globally.</span>
          </h2>

          <p className="text-lg text-gray-600 mb-10 leading-relaxed italic">
            Missing a single certification can stall your business for months.
            We solve the licensing bottleneck by managing your FSSAI, MSME, and
            Trademark applications from start to finish.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {licensePoints.map((item, idx) => (
              <div
                key={idx}
                className="p-6 bg-amber-50/50 border border-amber-100 rounded-2xl"
              >
                <div className="mb-3">{item.icon}</div>
                <h4 className="font-bold text-gray-900 mb-2">{item.label}</h4>
                <p className="text-sm text-gray-500 leading-relaxed">
                  {item.detail}
                </p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Right Visual */}
        <div className="lg:w-1/2 relative lg:sticky lg:top-24">
          <div className="absolute -inset-10 bg-amber-500/5 rounded-full blur-3xl" />
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative z-10 rounded-[2.5rem] overflow-hidden border-8 border-white shadow-2xl"
          >
            <img
              src={Concept}
              alt="Compliance Certification"
              className="w-full h-auto object-cover aspect-video grayscale-[0.2] hover:grayscale-0 transition-all"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
