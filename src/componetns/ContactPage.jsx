import React, { useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail } from "lucide-react";
import toast from "react-hot-toast";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    const toastId = toast.loading("Sending message...");

    try {
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (result.success) {
        toast.success("Message sent successfully!", { id: toastId });
        setFormData({ name: "", email: "", message: "" }); // Clear form
      } else {
        throw new Error(result.message || "Failed to send message.");
      }
    } catch (error) {
      toast.error(error.message || "An error occurred.", { id: toastId });
    } finally {
      setIsSubmitting(false);
    }
  };
  return (
    <section className="min-h-screen bg-white py-24 px-8 lg:px-16 flex items-center">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
        {/* Left Column: Contact Info */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-12"
        >
          <div>
            <h1 className="text-4xl leading-tight font-bold text-gray-900 mb-6">
              Contact Us
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed max-w-md">
              Tell us a little bit about who you are, and we'll tell you a whole
              lot more about who we are.
            </p>
          </div>

          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-gray-900">
              Talk to our team today
            </h2>
            <ol className="space-y-4 text-gray-600 list-decimal list-inside marker:font-bold">
              <li>Understanding how our product may fulfill your need</li>
              <li>
                Discover the capabilities and get answers to your questions
              </li>
              <li>Get a customized quote</li>
            </ol>
          </div>

          <div className="space-y-8 pt-4">
            <h2 className="text-2xl font-bold text-gray-900">
              Find Binjwa IT Solutions
            </h2>
            <div className="space-y-6">
              <div className="flex items-center gap-4 group">
                <div className="bg-orange-400 p-3 rounded-lg shadow-md group-hover:bg-orange-500 transition-colors">
                  <MapPin size={24} className="text-white" />
                </div>
                <span className="text-gray-700 font-medium">
                  301, Atulya IT park, Indore, Madhya Pradesh, India
                </span>
              </div>

              <div className="flex items-center gap-4 group">
                <div className="bg-orange-400 p-3 rounded-lg shadow-md group-hover:bg-orange-500 transition-colors">
                  <Phone size={24} className="text-white" />
                </div>
                <span className="text-gray-700 font-medium">
                  +91 98266 56189
                </span>
                <span className="text-gray-700 font-medium">
                  +91 81031 74722
                </span>
              </div>

              <div className="flex items-center gap-4 group">
                <div className="bg-orange-400 p-3 rounded-lg shadow-md group-hover:bg-orange-500 transition-colors">
                  <Mail size={24} className="text-white" />
                </div>
                <span className="text-gray-700 font-medium">
                  binjwaitsolutions@gmail.com
                </span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Right Column: Contact Form */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative"
        >
          {/* Form Container with the Teal background and grid pattern */}
          <div className="bg-[#8ecbc8] p-10 rounded-3xl shadow-[20px_20px_0px_0px_rgba(0,0,0,0.1)] relative overflow-hidden">
            {/* Subtle Grid Pattern Overlay */}
            <div
              className="absolute inset-0 opacity-10 pointer-events-none"
              style={{
                backgroundImage:
                  "radial-gradient(#000 0.5px, transparent 0.5px)",
                backgroundSize: "20px 20px",
              }}
            ></div>

            <form onSubmit={handleSubmit} className="relative z-10 space-y-6">
              <div className="space-y-2">
                <label className="text-gray-800 font-bold text-sm">
                  Full Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="Enter Your Full Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full p-4 rounded-xl border-none focus:ring-2 focus:ring-orange-400 shadow-inner bg-[#fff9f0]"
                />
              </div>

              <div className="space-y-2">
                <label className="text-gray-800 font-bold text-sm">
                  Your Email <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="Enter Your Email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full p-4 rounded-xl border-none focus:ring-2 focus:ring-orange-400 shadow-inner bg-[#fff9f0]"
                />
              </div>

              <div className="space-y-2">
                <label className="text-gray-800 font-bold text-sm">
                  Your Message <span className="text-red-500">*</span>
                </label>
                <textarea
                  name="message"
                  rows="5"
                  placeholder="Tell us how we can help"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="w-full p-4 rounded-xl border-none focus:ring-2 focus:ring-orange-400 shadow-inner bg-[#fff9f0] resize-none"
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="bg-orange-400 hover:bg-orange-500 text-black font-bold py-4 px-12 rounded-xl transition-all duration-300 shadow-lg transform hover:-translate-y-1 active:scale-95 disabled:bg-gray-400 disabled:cursor-not-allowed"
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </button>
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactPage;
