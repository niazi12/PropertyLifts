"use client"; // Add this to enable client-side features

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { ContactForm } from "./contactform";

const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");

    try {
      const response = await fetch("/api/send-mail", {
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
      <ContactForm/>

      {/* Footer */}
      <div className="text-center mt-16 text-gray-600">
        <p>&copy; 2025 Property Lifts Ltd. All rights reserved.</p>
      </div>
    </div>
  );
};

export default Contact;