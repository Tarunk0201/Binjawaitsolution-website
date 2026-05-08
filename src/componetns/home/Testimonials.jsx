import React from "react";
import { motion } from "framer-motion";
import { Play } from "lucide-react"; // For the video testimonial button

const testimonials = [
  {
    type: "text",
    avatar: "https://i.pravatar.cc/150?img=48",
    text: "Partnering with this team was a game-changer for our brand. Their designs are fresh, modern and tailored perfectly to our audience.",
    name: "Meenal Thakkar",
    role: "Mumbai",
  },
  // {
  //   type: "video",
  //   thumbnail: "https://picsum.photos/seed/picsum/400/500", // The image with the woman in the sweater
  //   avatar: "https://i.pravatar.cc/150?img=32",
  //   name: "Pia Pahl",
  //   role: "Product Designer at Lightdash",
  // },
  {
    type: "text",
    avatar: "https://i.pravatar.cc/150?img=11",
    text: "From branding to website design, every piece they created was on-point. Highly recommended for anyone looking for serious results with a creative touch.",
    name: "Divya Kapoor",
    role: "Hyderabad",
  },
  {
    type: "text",
    avatar: "https://i.pravatar.cc/150?img=14",
    text: "I was blown away by their creativity and professionalism. They understood our vision instantly! Our website traffic and engagement doubled after the redesign.",
    name: "Rakesh Yadav",
    role: "Jaipur",
  },
];

const Testimonials = () => {
  return (
    <section className="py-16 bg-[#f3f3f3] overflow-hidden">
      <p className="text-orange-500 block text-center font-bold tracking-[0.2em] uppercase text-xs mb-4">
        Testimonials
      </p>
      <div className="px-8 lg:px-16 mb-16">
        <h2 className="text-4xl md:text-5xl font-medium mt-4 leading-tight text-gray-900">
          Don't take our word for it! <br />
          <span className="text-gray-900">Hear it from our partners.</span>
        </h2>
      </div>

      {/* Horizontal Scroll / Grid Container */}
      <motion.div
        className="flex gap-6 px-8 lg:px-16 overflow-x-auto no-scrollbar pb-10"
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        {testimonials.map((item, index) => (
          <div
            key={index}
            className="min-w-[320px] md:min-w-100 h-125 rounded-xl overflow-hidden relative"
          >
            {item.type === "text" ? (
              <div className="bg-white h-full p-10 flex flex-col justify-between">
                <div>
                  <img
                    src={item.avatar}
                    className="w-12 h-12 rounded-full mb-8 grayscale"
                    alt={item.name}
                  />
                  <p className="text-gray-800 text-lg leading-relaxed font-light italic">
                    "{item.text}"
                  </p>
                </div>
                <div>
                  <p className="text-2xl font-serif italic mb-1">{item.name}</p>
                  <p className="text-xs text-gray-400 uppercase tracking-widest">
                    {item.role}
                  </p>
                </div>
              </div>
            ) : (
              /* Video Card */
              <div className="relative h-full w-full group cursor-pointer">
                <img
                  src={item.thumbnail}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  alt="Video testimonial"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors" />

                {/* Floating Avatar on Video */}
                <div className="absolute top-8 left-8 flex items-center gap-3">
                  <img
                    src={item.avatar}
                    className="w-10 h-10 rounded-full border-2 border-white"
                    alt=""
                  />
                </div>

                {/* Play Button */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-12 h-12 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center border border-white/30 text-white">
                    <Play fill="white" size={20} />
                  </div>
                </div>

                {/* Video Info Overlay */}
                <div className="absolute bottom-10 left-10 text-white">
                  <p className="text-2xl font-serif italic mb-1">{item.name}</p>
                  <p className="text-xs opacity-80 uppercase tracking-widest">
                    {item.role}
                  </p>
                </div>
              </div>
            )}
          </div>
        ))}
      </motion.div>
    </section>
  );
};

export default Testimonials;
