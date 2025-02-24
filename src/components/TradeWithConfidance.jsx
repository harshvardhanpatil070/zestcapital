import React from "react";
import { motion } from "framer-motion";

const TradeWithConfidence = () => {
  return (
    <section className="relative bg-[#fbfbfe] text-[#050315] py-20 px-6 md:px-12 lg:px-20 overflow-hidden">
      {/* Subtle Background Accent */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#dedcff] to-transparent opacity-50 blur-3xl"></div>

      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative z-10 max-w-5xl mx-auto text-center"
      >
        <h2 className="text-4xl md:text-5xl font-extrabold tracking-wide bg-gradient-to-r from-[#0C056D] to-[#433bff] text-transparent bg-clip-text animate-pulse">
          Trade with Confidence
        </h2>
        <p className="text-lg md:text-xl opacity-80 mt-4">
          World First – Trade world markets with USDT/C
        </p>
        <p className="text-md md:text-lg opacity-70 mt-2">
          Advanced Spot and derivatives trading platform with institutional-grade tools
          and security.
        </p>
      </motion.div>

      {/* Cards Section */}
      <div className="mt-16 flex flex-col md:flex-row justify-center items-center gap-10">
        {/* USDT/C Trading Card */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
          whileHover={{ scale: 1.05, boxShadow: "0px 0px 30px rgba(12, 5, 109, 0.3)" }}
          className="relative w-full md:w-1/2 bg-[#dedcff]/80 backdrop-blur-md rounded-3xl p-8 text-center shadow-lg border border-[#dedcff] hover:border-[#0C056D] transition-all duration-300"
        >
          <h3 className="text-2xl font-semibold mb-3 text-[#0C056D]">
            USDT/C Pairs Trading
          </h3>
          <p className="text-sm opacity-80">
            Trade Indices, Commodities, and more against USDT,tightest spread in world.
          </p>
          <p className="text-sm opacity-80 mt-1">Leveraged Trading up to 200:1</p>
          <button className="mt-6 bg-[#0C056D] px-6 py-2 rounded-lg text-white font-semibold shadow-md hover:bg-[#433bff] transition-all">
          Download App
          </button>
        </motion.div>

        {/* Multi-Asset Crypto Account Card */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
          whileHover={{ scale: 1.05, boxShadow: "0px 0px 30px rgba(67, 59, 255, 0.3)" }}
          className="relative w-full md:w-1/2 bg-[#dedcff]/80 backdrop-blur-md rounded-3xl p-8 text-center shadow-lg border border-[#dedcff] hover:border-[#433bff] transition-all duration-300"
        >
          <h3 className="text-2xl font-semibold mb-3 text-[#433bff]">
            Single Multi-Asset Crypto Account
          </h3>
          <p className="text-sm opacity-80">Crypto Spot Market</p>
          <p className="text-sm opacity-80">Crypto Derivatives</p>
          <p className="text-sm opacity-80">Crypto Futures</p>
          <button className="mt-6 bg-[#433bff] px-6 py-2 rounded-lg text-white font-semibold shadow-md hover:bg-[#0C056D] transition-all">
            Download App
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default TradeWithConfidence;