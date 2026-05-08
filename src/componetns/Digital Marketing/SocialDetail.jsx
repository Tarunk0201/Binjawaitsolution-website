import { motion } from "framer-motion";
import { CheckCircle2, TrendingUp, Zap, Target } from "lucide-react";
import sco from "../../assets/images/sco.png";
import Engagement from "../../assets/images/Engagement.jpg";

// 3.1 SEO Section
export function SEODetail() {
  return (
    <section
      id="seo-domain"
      className="py-24 px-8 lg:px-16 bg-white scroll-mt-20"
    >
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center lg:items-start gap-16">
        <div className="lg:w-1/2">
          <h2 className="text-4xl font-serif font-bold text-gray-900 mb-6">
            Be Found When It <br />
            <span className="text-blue-600">Matters Most.</span>
          </h2>
          <p className="text-lg text-gray-600 mb-8 italic">
            Generic content gets lost. We solve your visibility problems by
            aligning your site with search intent and technical excellence.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-5 bg-blue-50 rounded-2xl border border-blue-100">
              <TrendingUp className="text-blue-600 mb-2" size={20} />
              <p className="text-xs font-bold uppercase mb-1">Visibility</p>
              <p className="text-sm text-gray-500 leading-snug">
                Keyword strategies that put you in front of ready-to-buy
                customers.
              </p>
            </div>
            <div className="p-5 bg-blue-50 rounded-2xl border border-blue-100">
              <CheckCircle2 className="text-blue-600 mb-2" size={20} />
              <p className="text-xs font-bold uppercase mb-1">Performance</p>
              <p className="text-sm text-gray-500 leading-snug">
                Technical SEO audits to fix speed and indexing issues.
              </p>
            </div>
          </div>
        </div>
        <motion.div
          className="lg:w-1/2 lg:sticky lg:top-24"
          animate={{
            y: ["0%", "-2%", "0%"],
          }}
          transition={{
            duration: 3,
            ease: "easeInOut",
            repeat: Infinity,
          }}
        >
          <img src={sco} className="rounded-[2.5rem] " alt="SEO Analysis" />
        </motion.div>
      </div>
    </section>
  );
}

// 3.2 Social Media Section
export function SocialDetail() {
  return (
    <section
      id="social-domain"
      className="py-24 px-8 lg:px-16 bg-[#fdf2f0] scroll-mt-20"
    >
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row-reverse items-center lg:items-start gap-16">
        <div className="lg:w-1/2">
          <h2 className="text-4xl font-serif font-bold text-gray-900 mb-6">
            Engagement That <br />
            <span className="text-red-600">Builds Loyalty.</span>
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Stop posting for the sake of posting. We solve the engagement gap by
            creating content that resonates with your specific audience.
          </p>
          <div className="space-y-4">
            {[
              "Strategic social media management across Meta & LinkedIn.",
              "Data-driven brand awareness campaigns.",
              "Consistent engagement & audience growth strategies.",
            ].map((text, i) => (
              <div
                key={i}
                className="flex items-center gap-3 bg-white p-4 rounded-xl shadow-sm"
              >
                <Target className="text-red-500" size={18} />
                <span className="text-gray-700 text-sm font-medium">
                  {text}
                </span>
              </div>
            ))}
          </div>
        </div>
        <div className="lg:w-1/2 lg:sticky lg:top-24">
          <div className=" bg-white rounded-[3rem] border-12 border-gray-900 shadow-2xl max-w-[320px] mx-auto aspect-9/19 overflow-hidden">
            <img
              src={Engagement}
              className="w-full h-full object-cover rounded-4xl"
              alt="Social App Mockup"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
