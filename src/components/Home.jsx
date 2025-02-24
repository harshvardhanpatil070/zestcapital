import React from "react";
import Navbar from "./Navbar";
import HeroSection from "./Hero";
import Footer from "./Footer";
import Service from "./Service";
import WhyUs from "./WhyUs";
import CenterCard from "./CenterCard";
import Faqs from "./Faqs";
import TradeWithConfidence from "./TradeWithConfidance";
import Timeline from "./Timeline";

function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      
      <HeroSection />
      <main className="flex-grow">
        <TradeWithConfidence/>
        <WhyUs/>
       <Timeline/>
        <Faqs/>
        <CenterCard/>
        
      </main>

    </div>
  );
}

export default Home;
