import { motion } from "framer-motion";
import { ShieldCheck, Zap, BarChart, Bell, Headphones, Globe } from "lucide-react";

const features = [
  {
    icon: <ShieldCheck size={32} />,
    title: "Premier Security",
    description: "Your assets are always safe with our industry-leading encryption."
  },
  {
    icon: <Zap size={32} />,
    title: "High Performance",
    description: "Seamless execution with ultra-low fees for fast, efficient trades."
  },
  {
    icon: <BarChart size={32} />,
    title: "Advanced Charts",
    description: "Professional-grade charting tools at your fingertips."
  },
  {
    icon: <Bell size={32} />,
    title: "Real-time Price Alerts",
    description: "Stay ahead of the market with instant price alerts."
  },
  {
    icon: <Headphones size={32} />,
    title: "24/7 Expert Support",
    description: "Get assistance anytime from our dedicated support team."
  },
  // New card
  {
    icon: <Globe size={32} />,
    title: "Global Market Access",
    description: "Trade seamlessly across multiple markets around the world."
  },
];

const WhyUs = () => {
  return (
    <section className="py-10 px-4 sm:px-6 bg-white">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
          Why Trade With Us?
        </h2>
        <p className="text-base sm:text-lg text-gray-600 mb-8">
          Experience the best trading platform with security, speed, and advanced tools.
        </p>

        {/* 
          2 columns by default (mobile), 
          3 columns on medium (md) and up 
        */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="bg-gray-100 rounded-2xl p-5 sm:p-6 text-center shadow-lg flex flex-col items-center"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <div className="text-blue-600 mb-3 sm:mb-4">
                {feature.icon}
              </div>
              <h3 className="text-lg sm:text-xl font-semibold text-gray-900">
                {feature.title}
              </h3>
              <p className="text-sm sm:text-base text-gray-600 mt-2">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyUs;