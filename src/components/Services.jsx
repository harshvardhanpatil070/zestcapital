import React from "react";

const Services = () => {
  const services = [
    {
      title: "Financial Planning",
      description:
        "Strategic financial planning to help you achieve your business and personal goals.",
      icon: "https://via.placeholder.com/80?text=FP",
    },
    {
      title: "Investment Management",
      description:
        "Comprehensive investment solutions tailored to your needs.",
      icon: "https://via.placeholder.com/80?text=IM",
    },
    {
      title: "Market Analysis",
      description:
        "Detailed market insights to help you make informed decisions.",
      icon: "https://via.placeholder.com/80?text=MA",
    },
    {
      title: "Tax Advisory",
      description: "Expert tax advice to minimize liabilities and maximize gains.",
      icon: "https://via.placeholder.com/80?text=TA",
    },
  ];

  return (
    <div className="min-h-screen bg-background text-text">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <h1 className="text-4xl font-bold text-primary text-center mb-10">
          Our Services
        </h1>
        <p className="text-lg text-center text-gray-600 mb-16">
          Explore the range of services we offer to help you succeed.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition-shadow duration-300 flex flex-col items-center text-center"
            >
              <img
                src={service.icon}
                alt={service.title}
                className="w-20 h-20 mb-6"
              />
              <h3 className="text-xl font-semibold text-primary mb-2">
                {service.title}
              </h3>
              <p className="text-gray-600 text-sm">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;