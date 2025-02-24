import React from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";
import { Link } from "react-router-dom";


const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Company Info */}
          <div className="text-center lg:text-left">
            <h3 className="text-3xl font-bold">Zest Capital</h3>
            <p className="mt-4 text-gray-400 text-sm leading-relaxed">
              Zest Capital is dedicated to empowering individuals and businesses with 
              innovative financial solutions. From trading to wealth management, we 
              deliver cutting-edge tools and services to help you succeed in the dynamic 
              financial landscape.
            </p>
            <p className="mt-6 text-sm text-gray-400">
              © 2024 Zest Capital. All rights reserved.
            </p>
          </div>

          {/* Links Section */}
          <div className="text-center">
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <div className="space-y-2">
              <a href="#about" className="text-sm text-gray-400 hover:text-white block">
                About Us
              </a>
              <a href="#services" className="text-sm text-gray-400 hover:text-white block">
                Services
              </a>
              <a href="#contact" className="text-sm text-gray-400 hover:text-white block">
                Contact
              </a>
              <Link to="/policy" className="text-sm text-gray-400 hover:text-white block">
                Privacy Policy
              </Link>
            </div>
          </div>

          {/* Social Media Icons */}
          <div className="text-center lg:text-right">
            <h4 className="text-lg font-semibold mb-4">Follow Us</h4>
            <div className="flex justify-center lg:justify-end space-x-6">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
                <FaFacebook size={28} />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
                <FaTwitter size={28} />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
                <FaInstagram size={28} />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
                <FaLinkedin size={28} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;