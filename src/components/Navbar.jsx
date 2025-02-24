import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ChevronDown, Menu, X } from "lucide-react";
import brandLogo from "../assets/images/capital-logo.png"; // Replace with actual path to your logo

export default function Navbar() {
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [language, setLanguage] = useState("ENG");
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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

  const handleMobileMenuToggle = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    // Close open dropdowns when toggling the entire menu
    setActiveDropdown(null);
  };

  return (
    <>
      {/* Navbar Container */}
      <nav
        className={`fixed top-0 left-0 w-full z-40 transition-all duration-300 ${
          isScrolled ? "bg-primary shadow-lg" : "bg-transparent backdrop-blur-md"
        } flex items-center px-6 md:px-16 py-3 text-white font-sans tracking-wide`}
      >
        {/* Brand Logo */}
        <div className="flex-shrink-0">
          <Link to="/">
            <img src={brandLogo} alt="Brand Logo" className="h-8 md:h-10 w-auto" />
          </Link>
        </div>

        {/* Desktop Navigation (hidden on mobile) */}
        <div className="hidden md:flex md:items-center md:space-x-6 ml-auto text-sm font-medium">
          <Link
            to="/about"
            className="hover:text-gray-300 transition duration-300"
          >
            About
          </Link>
          <Link
            to="/contact"
            className="hover:text-gray-300 transition duration-300"
          >
            Contact
          </Link>

          {/* Login Dropdown */}
          <div className="relative">
            <button
              onClick={() => toggleDropdown("login")}
              className="px-3 py-1 border border-gray-500 rounded-full flex items-center transition-all duration-300 hover:bg-gray-800 hover:border-white"
            >
              Login <ChevronDown className="ml-1" size={16} />
            </button>
            {activeDropdown === "login" && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="absolute left-0 mt-2 bg-gray-900 text-white shadow-lg rounded-lg w-36 text-sm"
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
              className="px-3 py-1 border border-gray-500 rounded-full flex items-center transition-all duration-300 hover:bg-gray-800 hover:border-white"
            >
              Signup <ChevronDown className="ml-1" size={16} />
            </button>
            {activeDropdown === "signup" && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="absolute left-0 mt-2 bg-gray-900 text-white shadow-lg rounded-lg w-36 text-sm"
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
            className="px-3 py-1 border border-gray-500 rounded-full transition-all duration-300 hover:bg-gray-800 hover:border-white"
          >
            {language}
          </button>
        </div>

        {/* Mobile Actions (Signup + Hamburger) - hidden on desktop */}
        <div className="flex items-center ml-auto md:hidden space-x-2">
          {/* Mobile Signup */}
          <button
            onClick={() => toggleDropdown("signup-mobile")}
            className="px-3 py-1 border border-gray-500 rounded-full flex items-center transition-all duration-300 hover:bg-gray-800 hover:border-white text-xs"
          >
            Signup <ChevronDown className="ml-1" size={12} />
          </button>
          {activeDropdown === "signup-mobile" && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="absolute right-4 top-14 bg-gray-900 text-white shadow-lg rounded-lg w-28 text-sm"
            >
              <div className="p-2 hover:bg-gray-800 cursor-pointer rounded">
                Website
              </div>
              <div className="p-2 hover:bg-gray-800 cursor-pointer rounded">
                Mobile App
              </div>
            </motion.div>
          )}

          {/* Hamburger Icon */}
          <button
            onClick={handleMobileMenuToggle}
            className="p-2 rounded-full border border-gray-500 hover:bg-gray-800 hover:border-white transition duration-300"
          >
            {isMobileMenuOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <motion.div
          initial={{ x: "100%" }}
          animate={{ x: 0 }}
          exit={{ x: "100%" }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
          className="fixed top-0 right-0 w-3/4 sm:w-1/2 h-screen bg-gray-900 text-white z-50 flex flex-col py-6 px-6"
        >
          {/* Close Button at the top of the overlay */}
          <div className="flex justify-end mb-4">
            <button
              onClick={handleMobileMenuToggle}
              className="p-2 rounded-full hover:bg-gray-800 transition duration-300"
            >
              <X size={20} />
            </button>
          </div>

          {/* About & Contact */}
          <Link
            to="/about"
            className="py-2 border-b border-gray-700 mb-2"
            onClick={handleMobileMenuToggle}
          >
            About
          </Link>
          <Link
            to="/contact"
            className="py-2 border-b border-gray-700 mb-2"
            onClick={handleMobileMenuToggle}
          >
            Contact
          </Link>

          {/* Login with Dropdown */}
          <div className="relative">
            <button
              onClick={() => toggleDropdown("login-mobile")}
              className="w-full text-left py-2 border-b border-gray-700 flex items-center justify-between"
            >
              <span>Login</span>
              <ChevronDown size={16} />
            </button>
            {activeDropdown === "login-mobile" && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="bg-gray-800 text-white shadow-lg rounded-lg mt-2 p-2"
              >
                <div className="p-2 hover:bg-gray-700 rounded cursor-pointer">
                  Website
                </div>
                <div className="p-2 hover:bg-gray-700 rounded cursor-pointer">
                  Mobile App
                </div>
              </motion.div>
            )}
          </div>

          {/* Language Toggle */}
          <div className="mt-2">
            <button
              onClick={() => {
                setLanguage(language === "ENG" ? "हिन्दी" : "ENG");
              }}
              className="px-3 py-1 border border-gray-500 rounded-full hover:bg-gray-800 hover:border-white transition duration-300"
            >
              {language}
            </button>
          </div>
        </motion.div>
      )}
    </>
  );
}