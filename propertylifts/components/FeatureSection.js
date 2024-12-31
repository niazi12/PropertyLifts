import React from "react";
import "../styles/animationfeature.css";

const FeatureSection = () => {
  return (
    <section className="py-16 bg-gradient-to-r from-blue-50 to-blue-100">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-8 text-gray-800 fade-in">Why Choose Us?</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="p-6 bg-white rounded-lg shadow-md transform transition duration-500 hover:scale-105 fade-in">
            <h3 className="text-xl font-semibold mb-4">Expert Engineers with Industry-Leading Qualifications</h3>
            <p>
              We have NVQ Level 5 certified engineers who bring unmatched expertise to every project. Their qualifications and years of experience ensure that your lift system is safe, efficient, and tailored to your exact needs.
            </p>
          </div>
          <div className="p-6 bg-white rounded-lg shadow-md transform transition duration-500 hover:scale-105 fade-in">
            <h3 className="text-xl font-semibold mb-4">Trusted Experience Since 2011</h3>
            <p>
              With over 13 years of experience in the lift industry, Property Lifts Ltd has been delivering reliable, high-quality lift solutions since 2011. Our longstanding presence in the industry reflects our commitment to excellence and customer satisfaction.
            </p>
          </div>
          <div className="p-6 bg-white rounded-lg shadow-md transform transition duration-500 hover:scale-105 fade-in">
            <h3 className="text-xl font-semibold mb-4">Competitive Pricing</h3>
            <p>
              We offer exceptional value without compromising on quality. Our transparent pricing ensures you get the best lift solution at a competitive rate, tailored to fit your budget and needs.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;