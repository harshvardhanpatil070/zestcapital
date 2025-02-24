import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import brandLogo from "../assets/images/capital-logo.png"; // Replace with actual path to your logo image

export default function Navbar() {
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [language, setLanguage] = useState("ENG");
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleDropdown = (dropdown) => {
    setActiveDropdown(activeDropdown === dropdown ? null : dropdown);
  };

  return (
    <>
      {/* Mobile Logo - Visible Only on Small Screens */}
      <div className="sm:block md:hidden fixed top-3 left-3 z-50">
        <Link to="/">
          <img src={brandLogo} alt="Brand Logo" className="h-6 w-auto" />
        </Link>
      </div>

      <nav
        className={`fixed top-0 left-0 w-full z-40 transition-all duration-300 ${
          isScrolled ? "bg-primary shadow-lg" : "bg-transparent backdrop-blur-md"
        } flex justify-between items-center px-6 md:px-16 py-3 text-white font-sans tracking-wide text-xs md:text-sm`}
      >
        {/* Desktop Logo - Hidden on Mobile */}
        <div className="hidden md:block">
          <Link to="/">
            <img src={brandLogo} alt="Brand Logo" className="h-10 w-auto" />
          </Link>
        </div>

        {/* Navigation Links & Buttons */}
        <div className="flex items-center space-x-4 md:space-x-6 ml-auto">
          <ul className="flex space-x-4 md:space-x-6 text-xs md:text-base font-medium">
            <li>
              <Link
                to="/about"
                className="hover:text-gray-400 cursor-pointer transition duration-300"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className="hover:text-gray-400 cursor-pointer transition duration-300"
              >
                Contact
              </Link>
            </li>
          </ul>

          <div className="flex items-center space-x-2 md:space-x-4 relative">
            {/* Login Dropdown */}
            <div className="relative">
              <button
                onClick={() => toggleDropdown("login")}
                className="px-3 py-1 border border-gray-500 text-white rounded-full flex items-center transition-all duration-300 hover:bg-gray-800 hover:border-white text-xs md:text-sm"
              >
                Login <ChevronDown className="ml-1 md:ml-2" size={12} />
              </button>
              {activeDropdown === "login" && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="absolute bg-gray-900 text-white shadow-lg mt-2 p-2 rounded-lg right-0 w-28 md:w-36 z-10 text-xs md:text-sm"
                >
                  <div className="p-2 hover:bg-gray-800 cursor-pointer rounded">
                    Website
                  </div>
                  <div className="p-2 hover:bg-gray-800 cursor-pointer rounded">
                    Mobile App
                  </div>
                </motion.div>
              )}
            </div>

            {/* Signup Dropdown */}
            <div className="relative">
              <button
                onClick={() => toggleDropdown("signup")}
                className="px-3 py-1 border border-gray-500 text-white rounded-full flex items-center transition-all duration-300 hover:bg-gray-800 hover:border-white text-xs md:text-sm"
              >
                Signup <ChevronDown className="ml-1 md:ml-2" size={12} />
              </button>
              {activeDropdown === "signup" && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="absolute bg-gray-900 text-white shadow-lg mt-2 p-2 rounded-lg right-0 w-28 md:w-36 z-10 text-xs md:text-sm"
                >
                  <div className="p-2 hover:bg-gray-800 cursor-pointer rounded">
                    Website
                  </div>
                  <div className="p-2 hover:bg-gray-800 cursor-pointer rounded">
                    Mobile App
                  </div>
                </motion.div>
              )}
            </div>

            {/* Language Toggle Button */}
            <button
              onClick={() => setLanguage(language === "ENG" ? "हिन्दी" : "ENG")}
              className="px-3 py-1 border border-gray-500 text-white rounded-full transition-all duration-300 hover:bg-gray-800 hover:border-white text-xs md:text-sm"
            >
              {language}
            </button>
          </div>
        </div>
      </nav>
    </>
  );
}