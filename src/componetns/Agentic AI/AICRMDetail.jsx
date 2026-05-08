import React from "react";
import { motion } from "framer-motion";
import { Network, Target, Workflow, BarChart3, ArrowRight } from "lucide-react";
import crm from "../../assets/images/crm.jpg";

export default function AICRMDetail() {
  const crmAIPoints = [
    {
      label: "Lead Scoring",
      detail:
        "Autonomous agents that qualify and score leads based on intent and behavior.",
      icon: <Target className="text-indigo-500" size={20} />,
    },
    {
      label: "Lifecycle Management",
      detail:
        "Automated nurturing sequences that adapt based on client interaction history.",
      icon: <Workflow className="text-indigo-500" size={20} />,
    },
  ];

  return (
    <section
      id="business-process"
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
            <div className="p-3 bg-indigo-50 rounded-xl text-indigo-500 shadow-sm">
              <Network size={28} />
            </div>
            <span className="text-indigo-600 font-bold tracking-widest uppercase text-xs">
              CRM & Process Automation
            </span>
          </div>

          <h2 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-6 leading-tight">
            CRMs that don't just store data, <br />
            <span className="text-indigo-600">They drive growth.</span>
          </h2>

          <p className="text-lg text-gray-600 mb-10 leading-relaxed italic">
            Most businesses suffer from "Passive CRM Syndrome",data goes in, but
            nothing happens. We solve this by building Agentic AI layers that
            proactively manage your client relationships and scoring.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {crmAIPoints.map((item, idx) => (
              <div
                key={idx}
                className="p-6 bg-indigo-50/50 border border-indigo-100 rounded-2xl"
              >
                <div className="mb-3">{item.icon}</div>
                <h4 className="font-bold text-gray-900 mb-2">{item.label}</h4>
                <p className="text-sm text-gray-500 leading-relaxed">
                  {item.detail}
                </p>
              </div>
            ))}
          </div>

          <button className="mt-10 flex items-center gap-3 bg-indigo-600 text-white px-8 py-4 rounded-xl font-bold hover:bg-indigo-700 transition-all shadow-lg">
            Upgrade Your CRM <ArrowRight size={20} />
          </button>
        </motion.div>

        {/* Right Visual: Using DreamWheel/Complex project style visuals */}
        <div className="lg:w-1/2 relative lg:sticky lg:top-24">
          <div className="absolute -inset-10 bg-indigo-500/5 rounded-full blur-3xl" />
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative z-10 rounded-[2.5rem] overflow-hidden border-8 border-white shadow-2xl"
          >
            <img
              src={crm}
              alt="Agentic CRM Interface"
              className="w-full h-auto object-cover aspect-video"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
