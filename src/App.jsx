import React from "react";
import Navbar from "./components/Navbar";
import HeroSection from "./components/Hero";
import Footer from "./components/Footer";
import Service from "./components/Service";
import WhyUs from "./components/WhyUs";
import Home from "./components/Home";
import About from "./components/About";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Contact from "./components/Contact";
import Services from "./components/Services";
import ThankYou from "./components/ThankYou";
import Policy from "./components/Policy";
import { ParallaxProvider } from "react-scroll-parallax";

function App() {
  return (
    <ParallaxProvider> {/* ✅ Wrap the entire app here */}
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} /> {/* Now works properly */}
          <Route path="/contact" element={<Contact />} />
          <Route path="/services" element={<Services />} />
          <Route path="/thankyou" element={<ThankYou />} />
          <Route path="/policy" element={<Policy />} />
        </Routes>
        <Footer />
      </Router>
    </ParallaxProvider>
  );
}

export default App;