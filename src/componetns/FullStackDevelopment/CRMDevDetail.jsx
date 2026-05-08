import React from "react";
import { motion } from "framer-motion";
import {
  Database,
  BarChart3,
  Users2,
  Workflow,
  ShieldCheck,
  ArrowRight,
} from "lucide-react";
import crm from "../../assets/images/crm.png";

const CRMDevDetail = () => {
  const crmSolutions = [
    {
      title: "Lead & Customer Management",
      desc: "Stop losing prospects in spreadsheets. We build centralized systems to track every interaction from first touch to final sale.",
      icon: <Users2 className="text-orange-500" size={24} />,
    },
    {
      title: "Workflow Automation",
      desc: "Eliminate repetitive manual entry. Our systems automate follow-ups, invoicing, and data syncing across your entire team.",
      icon: <Workflow className="text-orange-500" size={24} />,
    },
    {
      title: "Reporting & Analytics",
      desc: "Make decisions based on facts, not feelings. Custom dashboards provide real-time visibility into your business performance.",
      icon: <BarChart3 className="text-orange-500" size={24} />,
    },
    {
      title: "Role-Based Security",
      desc: "Protect sensitive business data with secure employee portals and granular access controls for different team levels.",
      icon: <ShieldCheck className="text-orange-500" size={24} />,
    },
  ];

  return (
    <section id="crm-dev" className="py-24 px-8 lg:px-16 bg-white scroll-mt-20">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center lg:items-start gap-16">
        {/* Left Content: Business Problem Solving */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="lg:w-1/2"
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="p-3 bg-orange-50 rounded-xl text-orange-500 shadow-sm">
              <Database size={28} />
            </div>
            <span className="text-orange-600 font-bold tracking-widest uppercase text-xs">
              Custom CRM Development
            </span>
          </div>

          <h2 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-6 leading-tight">
            Structure your chaos into <br />
            <span className="text-orange-500">Scalable Success.</span>
          </h2>

          <p className="text-lg text-gray-600 mb-10 leading-relaxed italic">
            Off-the-shelf CRMs are often too complex or too limited. We build
            custom platforms that mirror your specific business processes,
            ensuring your team spends more time closing and less time clicking.
          </p>

          <div className="space-y-4">
            {crmSolutions.map((item, idx) => (
              <div
                key={idx}
                className="flex gap-5 p-6 rounded-2xl border border-gray-100 hover:border-orange-200 hover:bg-orange-50/30 transition-all group"
              >
                <div className="mt-1 group-hover:scale-110 transition-transform">
                  {item.icon}
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-1">{item.title}</h4>
                  <p className="text-sm text-gray-500 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <button className="mt-10 flex items-center gap-3 bg-orange-500 text-white px-8 py-4 rounded-xl font-bold hover:bg-orange-600 transition-all shadow-lg hover:shadow-orange-200">
            Build Your Custom CRM <ArrowRight size={20} />
          </button>
        </motion.div>

        {/* Right Visual Side: Dashboard/Data Visualization Feel */}
        <div className="lg:w-1/2 relative lg:sticky lg:top-24">
          <div className="absolute -inset-10 bg-orange-500/5 rounded-full blur-3xl" />

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative z-10 p-4 bg-white rounded-[2.5rem] shadow-2xl border border-gray-100"
          >
            {/* Using your "chooseimage2" asset to represent complex data/strategy */}
            <div className="rounded-[1.8rem] overflow-hidden border-4 border-gray-50">
              <img
                src={crm}
                alt="CRM Data Management"
                className="w-full h-auto object-cover aspect-video"
              />
            </div>

            {/* Floating Analytics Badges */}
            <motion.div
              animate={{ x: [0, 15, 0] }}
              transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
              className="absolute -top-6 -right-6 bg-indigo-900 text-white p-5 rounded-2xl shadow-xl hidden md:block"
            >
              <p className="text-[10px] font-bold text-orange-400 uppercase tracking-widest mb-1">
                Live Growth
              </p>
              <div className="flex items-end gap-2">
                <span className="text-2xl font-bold">+24%</span>
                <span className="text-xs text-gray-400 mb-1">efficiency</span>
              </div>
            </motion.div>

            <motion.div
              animate={{ y: [0, -15, 0] }}
              transition={{
                repeat: Infinity,
                duration: 6,
                ease: "easeInOut",
                delay: 0.5,
              }}
              className="absolute -bottom-6 -left-6 bg-white p-5 rounded-2xl shadow-xl border border-gray-100 hidden md:block"
            >
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center">
                  <Workflow size={20} className="text-orange-500" />
                </div>
                <div>
                  <p className="text-xs font-bold text-gray-900">
                    Task Automation
                  </p>
                  <p className="text-[10px] text-green-500">Active & Syncing</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CRMDevDetail;