import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <section className="relative w-full h-screen flex items-center justify-center bg-gradient-to-br from-[#0C056D] to-[#120A8F]">
      {/* Overlay with Neon Accents */}
      <div className="absolute inset-0 bg-black/30 backdrop-blur-sm"></div>

      {/* Diagonal Neon Lines */}
      <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center pointer-events-none">
        <div className="absolute w-96 h-1 bg-[#433bff] top-20 left-10 rotate-45 opacity-50"></div>
        <div className="absolute w-96 h-1 bg-[#dedcff] bottom-20 right-10 -rotate-45 opacity-50"></div>
      </div>

      <motion.div
        className="relative text-center text-white px-6 md:px-12 lg:px-24"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <h1 className="text-4xl md:text-6xl font-extrabold drop-shadow-lg leading-tight">
        Trade Beyond Limits with Zest Capital
        </h1>
        <p className="mt-4 text-lg md:text-xl opacity-90 text-[#dedcff] max-w-2xl mx-auto">
        Crypto & Indices. USDT-Powered. No Compromises.
        </p>

        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="mt-8 px-6 py-3 text-lg font-semibold border-2 border-[#433bff] text-white rounded-full shadow-lg hover:bg-[#433bff] transition-all"
        >
          CONNECT WITH US →
        </motion.button>
      </motion.div>
    </section>
  );
};

export default HeroSection;