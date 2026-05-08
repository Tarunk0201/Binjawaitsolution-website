import React from "react";
import { motion } from "framer-motion";
import {
  Target,
  Zap,
  Users,
  IndianRupee,
  Rocket,
  Headphones,
  Check,
} from "lucide-react";
import allInOne from "../../assets/images/All-in-One.jpg";
import solutions from "../../assets/images/chooseimage2.jpg";
import team from "../../assets/images/type-4.png";
import finance from "../../assets/images/chooseimage3.png";
import values from "../../assets/images/Hire-our-people.jpg";
import support from "../../assets/images/itservices.jpg";

const whyChooseData = [
  {
    id: "1/6",
    label: "Goal",
    title: "All-in-One Business Partner",
    points: [
      "Stunning websites and high-converting marketing.",
      "Integrated legal and compliance support.",
      "Single destination for complete startup solutions.",
    ],
    bgColor: "bg-blue-50",
    iconColor: "text-blue-500",
    icon: <Target size={24} />,
    image: allInOne,
  },
  {
    id: "2/6",
    label: "Approach",
    title: "Solutions That Work for You",
    points: [
      "No generic templates,only tailor-made strategies.",
      "Alignment with your specific vision and market goals.",
      "Every project is customized to be truly yours.",
    ],
    bgColor: "bg-red-50",
    iconColor: "text-red-500",
    icon: <Zap size={24} />,
    image: solutions,
  },
  {
    id: "3/6",
    label: "Team",
    title: "Expert Team, Real Results",
    points: [
      "Led by industry experts blending innovation and execution.",
      "Comprehensive experience ranging from tech to tax.",
      "Proven track record in driving business growth.",
    ],
    bgColor: "bg-orange-50",
    iconColor: "text-orange-500",
    icon: <Users size={24} />,
    image: team,
  },
  {
    id: "4/6",
    label: "Finance",
    title: "Value-Driven Pricing",
    points: [
      "Startup-friendly packages with transparent rates.",
      "Zero hidden costs,maximizing your real ROI.",
      "Pricing models that grow only when you do.",
    ],
    bgColor: "bg-green-50",
    iconColor: "text-green-500",
    icon: <IndianRupee size={24} />,
    image: finance,
  },
  {
    id: "5/6",
    label: "Values",
    title: "Speed + Quality = Delivery",
    points: [
      "Streamlined processes for fast project turnaround.",
      "Zero compromises on technical or design quality.",
      "Respecting your time and budget as our own.",
    ],
    bgColor: "bg-purple-50",
    iconColor: "text-purple-500",
    icon: <Rocket size={24} />,
    image: values,
  },
  {
    id: "6/6",
    label: "Support",
    title: "Support That Stays",
    points: [
      "Continuous support long after the final delivery.",
      "Regular updates and strategic scaling guidance.",
      "A long-term partner for your business evolution.",
    ],
    bgColor: "bg-yellow-50",
    iconColor: "text-yellow-600",
    icon: <Headphones size={24} />,
    image: support,
  },
];

const FeatureCard = ({ feature }) => (
  <motion.div
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-50px" }}
    transition={{ duration: 0.6, ease: "easeOut" }}
    className={`w-full ${feature.bgColor} rounded-2xl p-8 md:p-12 mb-6 flex flex-col md:flex-row items-center gap-12 overflow-hidden border border-black/5`}
  >
    {/* Left Content */}
    <div className="flex-1 text-left">
      <div
        className={`flex items-center gap-3 mb-6 ${feature.iconColor} font-bold text-sm tracking-widest uppercase`}
      >
        <div className="p-2 bg-white rounded-lg shadow-sm">{feature.icon}</div>
        <span>
          {feature.label} , {feature.id}
        </span>
      </div>

      <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-tight">
        {feature.title}
      </h3>

      <ul className="space-y-4">
        {feature.points.map((point, idx) => (
          <li
            key={idx}
            className="flex items-start gap-3 text-gray-700 text-base md:text-lg"
          >
            <div className={`mt-1.5 ${feature.iconColor} shrink-0`}>
              <Check size={20} strokeWidth={3} />
            </div>
            <span>{point}</span>
          </li>
        ))}
      </ul>
    </div>

    {/* Right Visual/Image */}
    <div className="flex-1 w-full flex justify-center items-center">
      <motion.div className="relative rounded-xl overflow-hidden shadow-2xl shadow-black/10 border-[6px] border-white max-w-md">
        <img
          src={feature.image}
          alt={feature.title}
          className="w-full h-auto object-cover aspect-video"
        />
      </motion.div>
    </div>
  </motion.div>
);

const WhyChooseUsStack = () => {
  return (
    <section className="py-16 px-6 lg:px-20 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-orange-500 font-bold tracking-[0.2em] uppercase text-xs mb-4">
            Why Us
          </p>
          <h2 className="text-4xl font-bold leading-tight text-gray-900 mb-4">
            A Partnership Built <br />
            <span className="text-indigo-900">for Your Success 🚀</span>
          </h2>
        </div>

        <div className="flex flex-col">
          {whyChooseData.map((feature, index) => (
            <FeatureCard key={index} feature={feature} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsStack;
