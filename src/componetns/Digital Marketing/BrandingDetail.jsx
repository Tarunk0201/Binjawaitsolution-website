import React from "react";
import { motion } from "framer-motion";
import { Palette, PenTool, Layout, Mail, ArrowRight } from "lucide-react";
import graphic from "../../assets/images/graphic.jpg";

export default function BrandingDetail() {
  const brandingServices = [
    {
      title: "Creative Post Designs",
      desc: "High-impact visuals for social media that stop the scroll and build brand recall.",
      icon: <Layout className="text-orange-500" size={24} />,
    },
    {
      title: "Marketing Copywriting",
      desc: "Persuasive storytelling and ad copy that converts browsers into loyal customers.",
      icon: <PenTool className="text-orange-500" size={24} />,
    },
    {
      title: "Brand Positioning",
      desc: "Defining your unique voice and market presence to stand out from the competition.",
      icon: <Palette className="text-orange-500" size={24} />,
    },
    {
      title: "Email Campaigns",
      desc: "Strategic email marketing sequences designed to nurture leads and drive repeat sales.",
      icon: <Mail className="text-orange-500" size={24} />,
    },
  ];

  return (
    <section
      id="branding-domain"
      className="py-24 px-8 lg:px-16 bg-[#fdf2f0] scroll-mt-20"
    >
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center lg:items-start gap-16">
        {/* Left Visual: Using 'Hire-our-people.jpg' to represent creative planning */}
        <div className="lg:w-1/2 relative lg:sticky lg:top-24">
          <div className="absolute -inset-10 bg-orange-500/5 rounded-full blur-3xl" />
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative z-10"
          >
            <div className="rounded-[2.5rem] overflow-hidden border-8 border-white shadow-2xl">
              <img
                src={graphic}
                alt="Creative Branding Session"
                className="w-full h-auto object-cover aspect-video hover:scale-105 transition-transform duration-700"
              />
            </div>
          </motion.div>
        </div>

        {/* Right Content */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="lg:w-1/2"
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="p-3 bg-white rounded-xl text-orange-500 shadow-sm">
              <Palette size={28} />
            </div>
            <span className="text-orange-600 font-bold tracking-widest uppercase text-xs">
              Content & Branding
            </span>
          </div>

          <h2 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-6 leading-tight">
            Design that speaks. <br />
            <span className="text-orange-500">Brands that lead.</span>
          </h2>

          <p className="text-lg text-gray-600 mb-10 leading-relaxed italic">
            Visuals are the first impression; content is the lasting
            relationship. We solve the problem of "generic branding" by crafting
            a unique identity that resonates with your target audience.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {brandingServices.map((item, idx) => (
              <div
                key={idx}
                className="bg-white/60 backdrop-blur-sm p-6 rounded-2xl border border-orange-100 shadow-sm hover:shadow-md transition-all"
              >
                <div className="mb-4">{item.icon}</div>
                <h4 className="font-bold text-gray-900 mb-2">{item.title}</h4>
                <p className="text-sm text-gray-500 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>

          <button className="mt-10 flex items-center gap-3 bg-orange-500 text-white px-8 py-4 rounded-xl font-bold hover:bg-orange-600 transition-all shadow-lg hover:shadow-orange-200">
            Define Your Brand <ArrowRight size={20} />
          </button>
        </motion.div>
      </div>
    </section>
  );
}
