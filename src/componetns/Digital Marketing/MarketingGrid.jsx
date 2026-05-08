import React from "react";
import { Search, Share2, Palette, BarChart, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";

const marketingCategories = [
  {
    id: "seo-domain",
    title: "Search Engine Optimization",
    icon: <Search className="text-blue-500" />,
    bgColor: "bg-blue-50",
    topics: [
      "Technical SEO audits",
      "Keyword strategy",
      "Local SEO optimization",
      "SEO content planning",
    ],
  },
  {
    id: "social-domain",
    title: "Social Media Marketing",
    icon: <Share2 className="text-red-500" />,
    bgColor: "bg-red-50",
    topics: [
      "Instagram & Facebook",
      "LinkedIn campaigns",
      "Engagement growth",
      "Brand awareness",
    ],
  },
  {
    id: "branding-domain",
    title: "Content & Branding",
    icon: <Palette className="text-orange-500" />,
    bgColor: "bg-orange-50",
    topics: [
      "Creative post designs",
      "Marketing copywriting",
      "Brand positioning",
      "Email campaigns",
    ],
  },
  {
    id: "platforms-domain",
    title: "Analytics & Platforms",
    icon: <BarChart className="text-green-500" />,
    bgColor: "bg-green-50",
    topics: [
      "Google Analytics",
      "Search Console",
      "Meta Ad Manager",
      "YouTube Performance",
    ],
  },
];

export function MarketingGrid() {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) element.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <section className="py-24 px-8 lg:px-16 bg-white">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        {marketingCategories.map((cat, i) => (
          <motion.div
            key={i}
            whileHover={{ y: -10 }}
            onClick={() => scrollToSection(cat.id)}
            className={`${cat.bgColor} p-10 rounded-[2.5rem] hover:shadow-xl border border-black/5 flex flex-col h-full cursor-pointer group`}
          >
            <div className="mb-6 p-4 bg-white rounded-2xl w-fit shadow-sm">
              {React.cloneElement(cat.icon, { size: 32 })}
            </div>
            <div className="flex justify-between items-start mb-6">
              <h3 className="text-2xl font-bold text-gray-900">{cat.title}</h3>
              <ChevronRight className="opacity-0 group-hover:opacity-100 transition-opacity" />
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
