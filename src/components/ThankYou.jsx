import React from "react";
import { FaArrowLeft } from "react-icons/fa";
import { Link } from "react-router-dom";

const ThankYou = () => {
  return (
    <section className="bg-background min-h-screen flex items-center justify-center py-16">
      <div className="text-center max-w-md bg-white shadow-lg rounded-lg p-8">
        <h1 className="text-4xl font-semibold text-primary mb-4">
          Thank You!
        </h1>
        <p className="text-lg text-text mb-8">
          Your message has been successfully sent. We’ll get back to you as soon as possible.
        </p>
        <Link
          to="/"
          className="inline-flex items-center px-6 py-3 text-white bg-primary rounded-md shadow hover:bg-primary-dark transition-all"
        >
          <FaArrowLeft className="mr-2" />
          Back to Home
        </Link>
      </div>
    </section>
  );
};

export default ThankYou;