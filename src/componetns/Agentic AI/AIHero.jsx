import React from "react";
import { motion } from "framer-motion";
import ai from "../../assets/images/ai.png";

export default function AIHero() {
  return (
    <section className="relative py-24 px-8 lg:px-16 bg-white text-black overflow-hidden flex lg:h-screen justify-center items-center">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          className="lg:w-1/2 z-10"
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="h-px w-12 bg-teal-400" />
            <span className="text-teal-400 font-bold tracking-widest uppercase text-xs">
              The Future of Autonomy
            </span>
          </div>
          <h1 className="text-5xl md:text-7xl font-serif font-bold mb-8 leading-tight">
            Agentic <br />
            <span className="text-gray-400">AI Solutions</span>
          </h1>
          <p className="text-xl text-gray-400 leading-relaxed max-w-xl">
            We build autonomous AI agents that don't just chat,they research,
            plan, and execute complex business workflows to revolutionize your
            digital productivity.
          </p>
        </motion.div>

        <div className="lg:w-1/2 relative">
          <div className="absolute inset-0 blur-[120px] rounded-full" />
          {/* Using your existing asset itservices.webp to represent high-tech infrastructure */}
          <img
            src={ai}
            alt="AI Neural Network"
            className="relative z-10 rounded-4xl "
          />
        </div>
      </div>
    </section>
  );
}
