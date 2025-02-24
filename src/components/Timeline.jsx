import { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";

const timelineData = [
  {
    year: "Step 1",
    title: "Receiving Customer Funds",
    description:
      "Zest Capital receives investment funds from customers, ensuring secure transactions and compliance.",
  },
  {
    year: "Step 2",
    title: "Market Analysis & Research",
    description:
      "A thorough market analysis is conducted to identify the best investment opportunities and mitigate risks.",
  },
  {
    year: "Step 3",
    title: "Portfolio Allocation",
    description:
      "Funds are allocated strategically across different asset classes to optimize returns and balance risk.",
  },
  {
    year: "Step 4",
    title: "Active Investment Management",
    description:
      "Investments are actively managed by experts to adapt to market changes and maximize gains.",
  },
  {
    year: "Step 5",
    title: "Risk Assessment & Compliance",
    description:
      "Continuous risk assessment is performed to ensure all investments align with risk management strategies.",
  },
  {
    year: "Step 6",
    title: "Profit Realization & Diversification",
    description:
      "Profits are realized and reinvested into diversified assets to sustain long-term growth.",
  },
  {
    year: "Step 7",
    title: "Reporting & Transparency",
    description:
      "Customers receive detailed reports and insights on their investments, ensuring full transparency.",
  },
  {
    year: "Step 8",
    title: "Customer Withdrawals & Returns",
    description:
      "Customers can withdraw their earnings or reinvest profits for continued financial growth.",
  },
  {
    year: "Step 9",
    title: "Continuous Improvement & Growth",
    description:
      "Lessons learned are used to refine strategies, enhancing investment performance for future cycles.",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      delayChildren: 0.2,
      staggerChildren: 0.2, // Stagger the children animations
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 50 },
  show: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.5, ease: "easeOut" } 
  },
};

const Timeline = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const timelineRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (timelineRef.current) {
        const rect = timelineRef.current.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        const progress = Math.max(
          0,
          Math.min(
            100,
            ((windowHeight - rect.top) / (windowHeight + rect.height)) * 100
          )
        );
        setScrollProgress(progress);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      ref={timelineRef}
      // Use a soft gradient background or pattern
      className="relative w-full py-20 flex justify-center bg-gradient-to-b from-white to-gray-100"
    >
      {/* Decorative Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
        {/* Large blurred circle top-left */}
        <div className="absolute top-[-200px] left-[-200px] w-[500px] h-[500px] bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-60 animate-pulse" />
        {/* Large blurred circle bottom-right */}
        <div className="absolute bottom-[-200px] right-[-200px] w-[400px] h-[400px] bg-purple-100 rounded-full mix-blend-multiply filter blur-3xl opacity-60 animate-pulse animation-delay-2000" />
      </div>

      <motion.div 
        className="relative flex items-start max-w-6xl w-full px-4"
        initial="hidden"
        animate="show"
        variants={containerVariants}
      >
        {/* Vertical Timeline Line */}
        <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-gray-300 h-full">
          {/* Progress Indicator */}
          <motion.div
            className="absolute top-0 left-0 w-full bg-gradient-to-b from-blue-500 to-purple-500"
            style={{ height: `${scrollProgress}%` }}
            transition={{ duration: 0.0, ease: "linear" }}
          />
        </div>

        {/* Timeline Events */}
        <div className="relative w-full flex flex-col gap-20 z-10">
          {timelineData.map((event, index) => {
            const isEven = index % 2 === 0;
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                className={`relative flex w-full ${isEven ? "justify-start" : "justify-end"}`}
              >
                {/* Connector Dot */}
                <div
                  className={`absolute top-1/2 transform -translate-y-1/2 w-5 h-5 rounded-full bg-blue-500 ring-4 ring-white shadow-md z-20 ${
                    isEven ? "-left-3" : "-right-3"
                  }`}
                />

                {/* Card Container */}
                <div
                  className={`relative bg-white shadow-2xl rounded-xl p-8 w-full max-w-xl 
                    ${
                      isEven
                        ? "ml-6 border-l-4 border-blue-500"
                        : "mr-6 border-r-4 border-purple-500"
                    }
                  `}
                >
                  {/* Animated gradient highlight / subtle glow behind the card */}
                  <div
                    className={`absolute top-0 left-0 w-full h-full rounded-xl opacity-30 pointer-events-none blur-xl
                      ${
                        isEven
                          ? "bg-gradient-to-r from-blue-200 to-transparent"
                          : "bg-gradient-to-l from-purple-200 to-transparent"
                      }
                    `}
                  />
                  <h3
                    className={`text-sm font-semibold ${
                      isEven ? "text-blue-600" : "text-purple-600"
                    }`}
                  >
                    {event.year}
                  </h3>
                  <h2 className="text-2xl font-bold text-gray-900 mt-1">
                    {event.title}
                  </h2>
                  <p className="text-gray-700 text-lg mt-3">
                    {event.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </motion.div>
    </section>
  );
};

export default Timeline;