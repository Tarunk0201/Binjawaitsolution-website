import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  Code2,
  Smartphone,
  Database,
  Bot,
  TrendingUp,
  ShieldCheck,
} from "lucide-react";

const servicesData = {
  title: "Our Services",
  description:
    "We specialize in delivering high-end digital infrastructure and automated solutions. Our methodical approach ensures that whether you are building a new platform or migrating an existing one, your business stays ahead of the curve.",
  services: [
    {
      title: "Web & App Development Suite",
      desc: "experiences, scalable mobile apps, and custom CRM systems with automated workflows to streamline your entire digital ecosystem.",
      icon: <Code2 size={40} />,
      path: "/full-stack-development",
    },
    {
      title: "Agentic AI Solutions",
      desc: "Autonomous AI agents that research, plan, and execute complex tasks to revolutionize your digital workflow.",
      icon: <Bot size={40} />,
      path: "/ai-solutions",
    },
    {
      title: "Digital Marketing",
      desc: "Data-driven SEO and strategic social campaigns designed to boost your visibility and maximize conversion rates.",
      icon: <TrendingUp size={40} />,
      path: "/digital-marketing",
    },
    {
      title: "Compliance Solutions",
      desc: "Expert technical audits and secure frameworks ensuring your platforms meet all necessary industry legal standards.",
      icon: <ShieldCheck size={40} />,
      path: "/compliance",
    },
  ],
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};

const Services = () => {
  return (
    <section className="py-16 px-8 lg:px-16 bg-gray-50 text-gray-900">
      <p className="text-orange-500 block text-center font-bold tracking-[0.2em] uppercase text-xs mb-4">
        Services
      </p>

      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row gap-8 mb-16 items-start">
          <div className="md:w-1/3">
            <div className="h-1 w-12 bg-orange-500 mb-4" />
            <h2 className="text-4xl font-bold leading-tight">
              {servicesData.title}
            </h2>
          </div>
          <div className="md:w-2/3">
            <p className="text-gray-600 text-lg leading-relaxed">
              {servicesData.description}
            </p>
          </div>
        </div>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-1"
        >
          {servicesData.services.map((service, index) => (
            <Link to={service.path} key={index}>
              <motion.div
                variants={itemVariants}
                className="relative group bg-white p-10 border border-gray-100 flex flex-col items-center text-center transition-all duration-300 ease-in-out hover:z-10 hover:shadow-2xl hover:-translate-y-2 h-full"
              >
                {/* Hover Background Overlay */}
                <div className="absolute inset-0 bg-indigo-900 scale-y-0 origin-bottom transition-transform duration-500 ease-in-out group-hover:scale-y-100" />

                {/* Content Container */}
                <div className="relative z-10">
                  <div className="mb-6 text-indigo-900 group-hover:text-orange-400 transition-colors duration-300 flex justify-center">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-4 group-hover:text-white transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-gray-500 text-sm leading-relaxed group-hover:text-gray-200 transition-colors duration-300">
                    {service.desc}
                  </p>
                </div>
              </motion.div>
            </Link>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
