import React from "react";
import { motion } from "framer-motion";
import { MessageSquare, Megaphone, Layers, Bot, Sliders } from "lucide-react";
import AIenabled from "../../assets/images/AI-enabled.png";

export function AIDocumentDetail() {
  return (
    <section
      id="document-processing"
      className="py-12 px-8 lg:px-16 bg-[#f7fafc] scroll-mt-20"
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
            <div className="p-3 bg-white rounded-xl text-emerald-500 shadow-sm">
              <MessageSquare size={28} />
            </div>
            <span className="text-emerald-600 font-bold tracking-widest uppercase text-xs">
              WhatsApp & API Automation
            </span>
          </div>

          <h2 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-6 leading-tight">
            Scale your engagement with <br />
            <span className="text-emerald-600">Intelligent Workflows.</span>
          </h2>

          <p className="text-lg text-gray-600 mb-10 leading-relaxed">
            Manual client communication limits your growth. We eliminate the
            conversation bottleneck by deploying automated WhatsApp workflows
            and custom API integrations to engage leads and broadcast updates
            instantly.
          </p>

          <div className="space-y-4">
            {[
              {
                title: "Bulk broadcast & notifications",
                icon: <Megaphone size={18} />,
              },
              {
                title: "Interactive chat menus & triggers",
                icon: <Sliders size={18} />,
              },
              {
                title: "CRM & lead tracking integration",
                icon: <Layers size={18} />,
              },
              {
                title: "Automated customer support & FAQs",
                icon: <Bot size={18} />,
              },
            ].map((item, i) => (
              <div
                key={i}
                className="flex items-center gap-4 bg-white p-5 rounded-2xl border border-emerald-100 shadow-sm"
              >
                <div className="text-emerald-500">{item.icon}</div>
                <span className="text-gray-700 font-bold text-sm">
                  {item.title}
                </span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Left Visual */}
        <div className="lg:w-1/2 relative lg:sticky lg:top-24">
          <div className="absolute -inset-10 " />
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative z-10 w-full"
          >
            <div className="relative">
              <img
                src={AIenabled}
                alt="WhatsApp and API Automation"
                className="w-full rounded-[2.5rem] object-contain  grayscale-[0.3] hover:grayscale-0 transition-all duration-700"
              />

              {/* Floating Status Badge */}
              <div className="absolute top-[68%] -right-3 bg-white p-6 rounded-2xl shadow-xl border border-emerald-50">
                <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1">
                  API Gateway Status
                </p>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                  <span className="text-sm font-bold text-gray-900">
                    Connected & Live
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
