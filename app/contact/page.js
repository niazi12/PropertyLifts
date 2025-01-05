"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");

    try {
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (response.ok) {
        setStatus("Message sent successfully!");
        setFormData({ name: "", email: "", message: "" });
      } else {
        setStatus(`Error: ${result.error || "Something went wrong."}`);
      }
    } catch (error) {
      setStatus(`An error occurred: ${error.message}`);
    }
  };

  return (
    <div className="bg-gradient-to-r from-gray-100 via-gray-200 to-white min-h-screen py-16">
      {/* Hero Section */}
      <div className="text-center mb-12 animate__animated animate__fadeIn animate__delay-1s">
        <h1 className="text-5xl font-semibold text-gray-800 mb-4 transform transition-all duration-300 ease-in-out hover:scale-105">
          Let's Start a Conversation
        </h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Have a question or want to work together? We'd love to hear from you.
        </p>
      </div>

      {/* Contact Form Section */}
      <div className="max-w-3xl mx-auto bg-white p-8 rounded-xl shadow-xl space-y-8 transform transition-all duration-500 hover:scale-105 hover:shadow-2xl">
        {/* Form */}
        <div className="space-y-6">
          <div className="space-y-4">
            <div>
              <label className="block text-lg font-medium text-gray-700" htmlFor="name">
                Your Name
              </label>
              <Input
                id="name"
                type="text"
                placeholder="Enter your name"
                className="h-12 border border-gray-300 rounded-md w-full p-4 mt-2 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300 ease-in-out transform hover:scale-105"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              />
            </div>

            <div>
              <label className="block text-lg font-medium text-gray-700" htmlFor="email">
                Your Email
              </label>
              <Input
                id="email"
                type="email"
                placeholder="Enter your email"
                className="h-12 border border-gray-300 rounded-md w-full p-4 mt-2 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300 ease-in-out transform hover:scale-105"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              />
            </div>

            <div>
              <label className="block text-lg font-medium text-gray-700" htmlFor="message">
                Your Message
              </label>
              <Textarea
                id="message"
                placeholder="Your message"
                className="min-h-[120px] border border-gray-300 rounded-md w-full p-4 mt-2 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300 ease-in-out transform hover:scale-105"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              />
            </div>
          </div>

          {/* Submit Button */}
          <div>
            <Button 
              className="w-full h-12 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300 transform hover:scale-105"
              onClick={handleSubmit}
            >
              Send Message
            </Button>
          </div>

          {/* Status Message */}
          {status && (
            <p className="mt-4 text-center text-lg text-gray-700 animate__animated animate__fadeIn">
              {status}
            </p>
          )}
        </div>
      </div>

      {/* Footer */}
      <div className="text-center mt-16 text-gray-600">
        <p>&copy; 2025 Property Lifts Ltd. All rights reserved.</p>
      </div>
    </div>
  );
};

export default Contact;
