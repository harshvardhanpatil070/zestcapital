import { motion } from "framer-motion";
import { useState } from "react";
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

export default function ContactUs() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted:", formData);
    alert("Message Sent Successfully!");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section className="relative w-full min-h-screen flex items-center justify-center bg-gradient-to-br from-[#0C056D] to-[#120A8F]">
      {/* Overlay with Neon Accents */}
      <div className="absolute inset-0 bg-black/30 backdrop-blur-sm"></div>

      {/* Diagonal Neon Lines */}
      <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center pointer-events-none">
        <div className="absolute w-96 h-1 bg-[#433bff] top-20 left-10 rotate-45 opacity-50"></div>
        <div className="absolute w-96 h-1 bg-[#dedcff] bottom-20 right-10 -rotate-45 opacity-50"></div>
      </div>

      <motion.div
        className="relative w-full max-w-4xl p-8 md:p-12 bg-white/10 backdrop-blur-lg shadow-2xl rounded-3xl border border-white/20"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        {/* Title */}
        <h1 className="text-3xl md:text-4xl font-extrabold text-center text-white">
          Let's Connect
        </h1>
        <p className="text-center text-gray-300 mt-2">
          Have a question? We’d love to hear from you!
        </p>

        <div className="grid md:grid-cols-2 gap-10 mt-6">
          {/* Contact Info Section */}
          <motion.div 
            className="space-y-6 text-white"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="flex items-center space-x-4">
              <FaMapMarkerAlt className="text-blue-400 text-2xl" />
              <p className="text-gray-300">123 Street, Pune, India</p>
            </div>

            <div className="flex items-center space-x-4">
              <FaPhone className="text-blue-400 text-2xl" />
              <p className="text-gray-300">+91 98765 43210</p>
            </div>

            <div className="flex items-center space-x-4">
              <FaEnvelope className="text-blue-400 text-2xl" />
              <p className="text-gray-300">contact@yourbrand.com</p>
            </div>
          </motion.div>

          {/* Contact Form Section */}
          <motion.form 
            className="w-full space-y-6"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            onSubmit={handleSubmit}
          >
            <div className="relative">
              <motion.input 
                type="text" 
                name="name" 
                value={formData.name} 
                onChange={handleChange}
                required
                className="w-full p-3 rounded-xl bg-white/20 text-white border border-white/30 focus:ring-2 focus:ring-blue-400 backdrop-blur-md placeholder-gray-200"
                placeholder={formData.name ? "" : "Your Name"}
              />
            </div>

            <div className="relative">
              <motion.input 
                type="email" 
                name="email" 
                value={formData.email} 
                onChange={handleChange}
                required
                className="w-full p-3 rounded-xl bg-white/20 text-white border border-white/30 focus:ring-2 focus:ring-blue-400 backdrop-blur-md placeholder-gray-200"
                placeholder={formData.email ? "" : "Your Email"}
              />
            </div>

            <div className="relative">
              <motion.textarea 
                name="message" 
                value={formData.message} 
                onChange={handleChange}
                required
                className="w-full p-3 h-28 rounded-xl bg-white/20 text-white border border-white/30 focus:ring-2 focus:ring-blue-400 backdrop-blur-md placeholder-gray-200"
                placeholder={formData.message ? "" : "Your Message"}
              />
            </div>

            <motion.button 
              type="submit"
              className="w-full py-3 rounded-xl bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-bold text-lg hover:scale-105 transition-all shadow-md"
              whileTap={{ scale: 0.95 }}
            >
              Send Message
            </motion.button>
          </motion.form>
        </div>
      </motion.div>
    </section>
  );
}