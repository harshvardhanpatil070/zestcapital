import React from 'react';
import about from "../assets/images/about.jpg";
import forex from "../assets/images/forex.jpg";
import indices from "../assets/images/indices.jpg";
import Commodities from "../assets/images/Commodities.jpg";
import Shares from "../assets/images/Shares.jpg";
import future from "../assets/images/future.jpg";
import etfs from "../assets/images/etfs.jpg"
import crypto from "../assets/images/crypto.jpg"
const Service = () => {
  return (
    <section className="bg-primary py-16 px-4">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl sm:text-5xl font-semibold text-white mb-8">Our Services</h2>
        <p className="text-lg sm:text-xl text-white mb-16">Trillions are traded daily, and we’ve selected the best CFD instruments to give you a competitive advantage.</p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
          {/* Service 1 */}
          <div className="service-card bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition-shadow duration-300">
            <div className="mb-4">
              <img src={forex} alt="Service 1" className="mx-auto w-16 h-16 sm:w-10 sm:h-10" />
            </div>
            <h3 className="text-xl sm:text-2xl font-semibold text-primary mb-2">Forex Trading</h3>
            <p className="text-sm sm:text-base text-text">Buy and sell from over 60 FX pairs, including EURUSD, GBPUSD, AUDJPY, AUDUSD, and USDCHF.</p>
          </div>

          {/* Service 2 */}
          <div className="service-card bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition-shadow duration-300">
            <div className="mb-4">
              <img src={indices} alt="Service 2" className="mx-auto w-16 h-16 sm:w-10 sm:h-10" />
            </div>
            <h3 className="text-xl sm:text-2xl font-semibold text-primary mb-2">Indices Trading</h3>
            <p className="text-sm sm:text-base text-text">Speculate on major sectors such as US500, UK100, AU50, and EU50 from a single position.</p>
          </div>
           {/* Service 3 */}
           <div className="service-card bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition-shadow duration-300">
            <div className="mb-4">
              <img src={Commodities} alt="Service 2" className="mx-auto w-16 h-16 sm:w-10 sm:h-10" />
            </div>
            <h3 className="text-xl sm:text-2xl font-semibold text-primary mb-2">Commodities Trading</h3>
            <p className="text-sm sm:text-base text-text">Trade on the price movements of oil, gold, silver, coffee, and more, with lots starting from 0.01*.</p>
          </div>
           {/* Service 4 */}
           <div className="service-card bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition-shadow duration-300">
            <div className="mb-4">
              <img src={future} alt="Service 2" className="mx-auto w-16 h-16 sm:w-10 sm:h-10" />
            </div>
            <h3 className="text-xl sm:text-2xl font-semibold text-primary mb-2">Futures Trading</h3>
            <p className="text-sm sm:text-base text-text">Forecast future price movements on dynamic indices and commodity assets, including Sing30.</p>
          </div>
           {/* Service 5 */}
           <div className="service-card bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition-shadow duration-300">
            <div className="mb-4">
              <img src={etfs} alt="Service 2" className="mx-auto w-16 h-16 sm:w-10 sm:h-10" />
            </div>
            <h3 className="text-xl sm:text-2xl font-semibold text-primary mb-2">ETFs Trading</h3>
            <p className="text-sm sm:text-base text-text">Predict the performance of entire sectors such as robotics, big data, and biotech.</p>
          </div>
               {/* Service 6 */}
               <div className="service-card bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition-shadow duration-300">
            <div className="mb-4">
              <img src={crypto} alt="Service 2" className="mx-auto w-16 h-16 sm:w-10 sm:h-10" />
            </div>
            <h3 className="text-xl sm:text-2xl font-semibold text-primary mb-2">Crypto CFDs</h3>
            <p className="text-sm sm:text-base text-text">Take long or short positions on crypto CFDs with spreads under 1%, including just $5 on BTCUSD.</p>
          </div>

          {/* Service 7 */}
          <div className="service-card bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition-shadow duration-300">
            <div className="mb-4">
              <img src={Shares} alt="Service 3" className="mx-auto w-16 h-16 sm:w-10 sm:h-10" />
            </div>
            <h3 className="text-xl sm:text-2xl font-semibold text-primary mb-2">300+ Shares</h3>
            <p className="text-sm sm:text-base text-text">Trade the performance of leading companies like Apple, Meta, Disney, LVMH, and Tesla.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Service;