import React from "react";
import master from "../assets/images/master.jpg";
import visa from "../assets/images/visa.jpg";
import net from "../assets/images/net.jpg";
import skrill from "../assets/images/skrill.jpg";

const CenterCard = () => {
  return (
    <section className="bg-gray-900 py-10 sm:py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-12">
        <div className="bg-white shadow-lg rounded-lg text-center p-6 sm:p-8 space-y-6">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">
            Start your journey with Zest AMC
          </h2>
          <p className="text-base sm:text-lg text-gray-700">
            Your trusted partner in secure and transparent financial services.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4">
            <button className="bg-primary text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary-light w-full sm:w-auto">
              Open Account
            </button>
            <button className="bg-secondary text-primary px-6 py-3 rounded-lg font-semibold hover:bg-secondary-light w-full sm:w-auto">
              Try Free Demo
            </button>
          </div>

          {/* Images */}
          <div className="flex justify-center items-center flex-wrap gap-3 mt-6">
            <img src={visa} alt="Visa" className="h-5 w-auto" />
            <img src={master} alt="MasterCard" className="h-5 w-auto" />
            <img src={skrill} alt="Skrill" className="h-5 w-auto" />
            <img src={net} alt="Neteller" className="h-5 w-auto" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CenterCard;