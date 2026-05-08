import React from "react";
import {
  Scale,
  FileCheck,
  Landmark,
  BookOpen,
  ChevronRight,
} from "lucide-react";
import { motion } from "framer-motion";

const complianceCategories = [
  {
    id: "tax-compliance",
    title: "Tax and Compliance",
    icon: <Landmark className="text-amber-600" />,
    bgColor: "bg-amber-50",
    topics: [
      "GST Registration & Filing",
      "ITR & TDS Returns",
      "ESI & PF Registration",
      "Annual LLP Compliance",
    ],
  },
  {
    id: "licenses",
    title: "Licenses & Certification",
    icon: <FileCheck className="text-amber-600" />,
    bgColor: "bg-amber-50",
    topics: [
      "FSSAI Food License",
      "MSME Registration",
      "ISO Certification",
      "Trademark Registration",
    ],
  },
  {
    id: "legal-doc",
    title: "Legal & Documentation",
    icon: <Scale className="text-amber-600" />,
    bgColor: "bg-amber-50",
    topics: [
      "Business Agreements",
      "MOA & AOA Drafting",
      "Partnership Deeds",
      "Legal Notices",
    ],
  },
  {
    id: "accounting-finance",
    title: "Accounting and Finance",
    icon: <BookOpen className="text-amber-600" />,
    bgColor: "bg-amber-50",
    topics: [
      "Bookkeeping & Audit",
      "Financial Statements",
      "Project Reports",
      "CA Consultation",
    ],
  },
];

export function ComplianceGrid() {
  const handleScroll = (e, id) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) element.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <section className="py-24 px-8 lg:px-16 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-serif font-bold text-gray-900">
            Business Integrity Services
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {complianceCategories.map((cat, i) => (
            <motion.a
              key={i}
              href={`#${cat.id}`}
              onClick={(e) => handleScroll(e, cat.id)}
              whileHover={{ y: -10 }}
              className={`${cat.bgColor} hover:shadow-xl p-10 rounded-[2.5rem] border border-amber-100 flex flex-col h-full group cursor-pointer transition-all`}
            >
              <div className="mb-6 p-4 bg-white rounded-2xl w-fit shadow-sm">
                {React.cloneElement(cat.icon, { size: 32 })}
              </div>
              <div className="flex justify-between items-start mb-6">
                <h3 className="text-2xl font-bold text-gray-900">
                  {cat.title}
                </h3>
                <ChevronRight className="opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-auto">
                {cat.topics.map((topic, j) => (
                  <li
                    key={j}
                    className="flex items-center gap-2 text-gray-600 text-sm"
                  >
                    <div className="w-1 h-1 rounded-full bg-amber-400" />
                    {topic}
                  </li>
                ))}
              </ul>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
