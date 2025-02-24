import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ChevronDown, Menu, X } from "lucide-react";
import brandLogo from "../assets/images/capital-logo.png";

export default function Navbar() {
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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
    <nav
      className={`fixed top-0 left-0 w-full z-40 transition-all duration-300 ${
        isScrolled ? "bg-primary shadow-lg" : "bg-transparent backdrop-blur-md"
      } flex justify-between items-center px-6 py-3 text-white font-sans tracking-wide text-xs`}
    >
      {/* Logo */}
      <div>
        <Link to="/">
          <img src={brandLogo} alt="Brand Logo" className="h-10 w-auto" />
        </Link>
      </div>

      <div className="flex items-center space-x-2">
        {/* Signup Button */}
        <div className="relative">
          <button
            onClick={() => toggleDropdown("signup")}
            className="px-3 py-1 border border-gray-500 text-white rounded-full flex items-center transition-all duration-300 hover:bg-gray-800 hover:border-white text-xs"
          >
            Signup <ChevronDown className="ml-1" size={12} />
          </button>
          {activeDropdown === "signup" && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="absolute bg-gray-900 text-white shadow-lg mt-2 p-2 rounded-lg right-0 w-28 z-50 text-xs"
            >
              <div className="p-2 hover:bg-gray-800 cursor-pointer rounded">Website</div>
              <div className="p-2 hover:bg-gray-800 cursor-pointer rounded">Mobile App</div>
            </motion.div>
          )}
        </div>

        {/* Hamburger Menu Button (Mobile Only) */}
        <button
          className="md:hidden text-white"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu - Fullscreen Background */}
      {isMenuOpen && (
        <motion.div
          initial={{ x: "100%" }}
          animate={{ x: 0 }}
          exit={{ x: "100%" }}
          className="fixed inset-0 h-screen bg-gray-900 text-white shadow-lg p-6 z-50 flex flex-col space-y-6 md:hidden"
        >
          <button className="self-end" onClick={() => setIsMenuOpen(false)}>
            <X size={24} />
          </button>
          <ul className="space-y-4 text-lg">
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
            <li className="relative">
              <button
                onClick={() => toggleDropdown("login")}
                className="w-full text-left px-3 py-1 border border-gray-500 text-white rounded-full flex items-center transition-all duration-300 hover:bg-gray-800 hover:border-white text-xs"
              >
                Login <ChevronDown className="ml-1" size={12} />
              </button>
              {activeDropdown === "login" && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="absolute bg-gray-800 text-white shadow-lg mt-2 p-2 rounded-lg w-full text-xs"
                >
                  <div className="p-2 hover:bg-gray-700 cursor-pointer rounded">Website</div>
                  <div className="p-2 hover:bg-gray-700 cursor-pointer rounded">Mobile App</div>
                </motion.div>
              )}
            </li>
          </ul>
        </motion.div>
      )}
    </nav>
  );
}