import React from "react";
import about from "../assets/images/ab.jpg";
import { motion } from "framer-motion";
import Timeline from "./Timeline";

const About = () => {
  return (
    <>
    <section className="relative w-full min-h-screen flex items-center justify-center bg-gradient-to-br from-[#0C056D] to-[#120A8F] py-20 overflow-hidden">
      {/* Glassmorphism Overlay */}
      <div className="absolute inset-0 bg-black/40 backdrop-blur-xl"></div>
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <div className="absolute w-96 h-1 bg-[#433bff] top-24 left-12 opacity-40 blur-lg animate-pulse"></div>
        <div className="absolute w-96 h-1 bg-[#dedcff] bottom-24 right-12 opacity-40 blur-lg animate-pulse"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 sm:px-10 relative z-10 text-white">
        {/* Title Section with Subtle Animation */}
        <motion.div 
          initial={{ opacity: 0, y: -50 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl font-bold text-white drop-shadow-xl tracking-widest uppercase">
            About Zest Capital LTD
          </h1>
          <p className="mt-4 text-lg text-white opacity-90 max-w-2xl mx-auto leading-relaxed">
            Elevating your trading experience with cutting-edge technology and unparalleled security.
          </p>
        </motion.div>

        {/* Content Section with Glass Effect */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image Section */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }} 
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="relative rounded-xl overflow-hidden shadow-2xl hover:scale-105 transition duration-500 backdrop-blur-xl bg-white/10 border border-white/20 p-4"
          >
            <img
              src={about}
              alt="About Us"
              className="w-full h-full object-cover rounded-lg"
            />
            <div className="absolute top-4 left-4 bg-white text-black px-4 py-1 rounded-full text-sm shadow-lg font-semibold uppercase tracking-wider">
              Established 2024
            </div>
          </motion.div>

          {/* Text Section with Elegant Styling */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="backdrop-blur-lg bg-white/10 border border-white/20 p-6 rounded-xl shadow-xl"
          >
            <h2 className="text-3xl font-semibold text-white mb-4 tracking-wide leading-tight">
              Who We Are
            </h2>
            <p className="text-white opacity-90 mb-4 text-base leading-relaxed">
              At Zest Capital LTD, we pioneer next-gen trading solutions, making financial growth accessible and seamless for all users.
            </p>
            <p className="text-white opacity-90 mb-4 text-base leading-relaxed">
              Our world-class security infrastructure, intuitive UI, and 24/7 customer support set a new standard in trading excellence.
            </p>
            <p className="text-white font-semibold text-base">
              <strong>Registration Number:</strong> 2024-00665<br />
              <strong>Address:</strong> Ground Floor, The Sotheby Building, Rodney Village, 
              Rodney Bay, Gros-Islet, Saint Lucia
            </p>
            <div className="mt-6">
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="bg-white text-black px-8 py-3 rounded-lg font-semibold hover:bg-gray-300 transition-all shadow-lg text-base"
              >
                Learn More
              </motion.button>
            </div>
          </motion.div>
        </div>

        {/* Core Values Section with Glassmorphism */}
        <motion.div 
          initial={{ opacity: 0 }} 
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5, delay: 0.5, ease: "easeOut" }}
          className="mt-16"
        >
          <h2 className="text-3xl font-semibold text-white text-center mb-8 tracking-wide uppercase">
            Our Core Values
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {/* Value 1 */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="backdrop-blur-lg bg-white/10 border border-white/20 shadow-2xl rounded-xl p-6 text-center text-white transform transition duration-500"
            >
              <h3 className="text-2xl font-semibold mb-4">Innovation</h3>
              <p className="text-sm opacity-80">
                Leading the future of trading with groundbreaking solutions.
              </p>
            </motion.div>

            {/* Value 2 */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="backdrop-blur-lg bg-white/10 border border-white/20 shadow-2xl rounded-xl p-6 text-center text-white transform transition duration-500"
            >
              <h3 className="text-2xl font-semibold mb-4">Security</h3>
              <p className="text-sm opacity-80">
                Protecting your assets with state-of-the-art security measures.
              </p>
            </motion.div>

            {/* Value 3 */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="backdrop-blur-lg bg-white/10 border border-white/20 shadow-2xl rounded-xl p-6 text-center text-white transform transition duration-500"
            >
              <h3 className="text-2xl font-semibold mb-4">Accessibility</h3>
              <p className="text-sm opacity-80">
                Making financial growth available to everyone, everywhere.
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>

    </>
  );
};

export default About;
