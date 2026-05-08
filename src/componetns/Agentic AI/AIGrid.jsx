import React from "react";
import { motion } from "framer-motion";
import {
  Bot,
  Cpu,
  Zap,
  LayoutDashboard,
  FileText,
  Network,
  ChevronRight,
} from "lucide-react";

const aiCategories = [
  {
    id: "ai-assistants",
    title: "Custom AI Assistants",
    icon: <Bot className="text-teal-500" />,
    bgColor: "bg-teal-50",
    topics: [
      "Personalized AI agents",
      "Context-aware assistance",
      "Natural language planning",
      "Multi-tool integration",
    ],
  },
  {
    id: "workflow-automation",
    title: "Workflow Automation",
    icon: <Cpu className="text-purple-500" />,
    bgColor: "bg-purple-50",
    topics: [
      "Autonomous task execution",
      "Cross-platform syncing",
      "Self-healing workflows",
      "Decision-making loops",
    ],
  },
  {
    id: "business-process",
    title: "CRM & Business Automation",
    icon: <Network className="text-indigo-500" />,
    bgColor: "bg-indigo-50",
    topics: [
      "AI-Agentic CRM systems",
      "Lead scoring & nurturing",
      "Automated outreach",
      "Client lifecycle management",
    ],
  },
  {
    id: "document-processing",
    title: "Intelligent Document Processing",
    icon: <FileText className="text-blue-500" />,
    bgColor: "bg-blue-50",
    topics: [
      "Automated data extraction",
      "Document summarization",
      "Legal & compliance auditing",
      "Bulk processing",
    ],
  },
];

export default function AIGrid() {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) element.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <section className="py-16 px-8 lg:px-16 bg-white">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        {aiCategories.map((cat, i) => (
          <motion.div
            key={i}
            whileHover={{ y: -10 }}
            onClick={() => scrollToSection(cat.id)}
            className={`${cat.bgColor} p-10 rounded-[2.5rem] hover:shadow-xl border border-black/5 flex flex-col h-full cursor-pointer group shadow-sm transition-all`}
          >
            <div className="mb-6 p-4 bg-white rounded-2xl w-fit shadow-sm">
              {React.cloneElement(cat.icon, { size: 32 })}
            </div>
            <div className="flex justify-between items-start mb-6">
              <h3 className="text-2xl font-bold text-gray-900">{cat.title}</h3>
              <ChevronRight className="opacity-0 group-hover:opacity-100  transition-opacity" />
            </div>
            <ul className="space-y-3 mt-auto">
              {cat.topics.map((topic, j) => (
                <li
                  key={j}
                  className="flex items-center gap-3 text-gray-600 font-medium text-sm"
                >
                  <div className="w-1.5 h-1.5 rounded-full bg-black/20" />
                  {topic}
                </li>
              ))}
            </ul>

            <div className="mt-8 pt-6 border-t border-black/5 opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-2 text-xs font-bold tracking-widest uppercase">
              View Domain Details →
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
