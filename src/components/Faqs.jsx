import { useState } from "react";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

const faqs = [
  { question: "What shares CFDs do you offer?", answer: "We offer a wide range of share CFDs, including top global companies across multiple industries. Our platform ensures transparency and flexibility." },
  { question: "What does it mean to trade CFD shares?", answer: "Trading CFD shares allows you to speculate on price movements without owning the underlying asset, providing leverage and flexibility." },
  { question: "What's the difference between shares and share CFDs?", answer: "Shares represent ownership in a company, while share CFDs are contracts that track the price movements of shares without actual ownership." },
  { question: "What is a ‘stop loss’ order & why should I use it?", answer: "A stop-loss order automatically closes a trade at a predetermined level to minimize potential losses, ensuring better risk management." },
  { question: "How can I maximise my returns?", answer: "To maximise returns, use risk management tools, diversify your portfolio, and stay informed about market conditions and trends." },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-white flex items-center justify-center p-6">
      <div className="max-w-2xl w-full">
        <h1 className="text-3xl font-bold text-center mb-6">Frequently Asked Questions</h1>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="border-b border-gray-300 py-4">
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex justify-between items-center text-left focus:outline-none"
              >
                <span className="text-lg font-medium">{faq.question}</span>
                <motion.div animate={{ rotate: openIndex === index ? 180 : 0 }}>
                  <ChevronDown className="h-5 w-5 text-gray-500" />
                </motion.div>
              </button>
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: openIndex === index ? "auto" : 0, opacity: openIndex === index ? 1 : 0 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="overflow-hidden"
              >
                <p className="mt-2 text-gray-600">{faq.answer}</p>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
