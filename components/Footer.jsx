import Link from "next/link";
import { Facebook, Twitter, Linkedin, Instagram } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto flex flex-wrap md:flex-nowrap gap-8 px-6">
        {/* Company Info */}
        <div className="flex-1 text-center md:text-left flex flex-col items-center md:items-start">
          <h2 className="text-lg font-bold mb-4">PROPERTY LIFTS LIMITED</h2>
          <p className="text-sm leading-relaxed">
Thank you for choosing PROPERTY LIFTS LIMITED. We’re committed to delivering reliable, innovative lift solutions tailored to you. Your trust drives our excellence!          </p>
        </div>

        {/* Quick Links */}
        <div className="flex-1 text-center flex flex-col items-center">
          <h2 className="text-lg font-bold mb-4">Quick Links</h2>
          <ul className="space-y-2">
            <li>
              <Link
                href="/about"
                className="hover:text-blue-400 transition transform hover:scale-105"
              >
                About Us
              </Link>
            </li>
            <li>
              <Link
                href="/services"
                className="hover:text-blue-400 transition transform hover:scale-105"
              >
                Our Services
              </Link>
            </li>
            <li>
              <Link
                href="/products"
                className="hover:text-blue-400 transition transform hover:scale-105"
              >
                Products
              </Link>
            </li>
            <li>
              <Link
                href="/career"
                className="hover:text-blue-400 transition transform hover:scale-105"
              >
                Careers
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className="hover:text-blue-400 transition transform hover:scale-105"
              >
                Contact Us
              </Link>
            </li>
            
          </ul>
        </div>

        {/* Contact Information */}
        <div className="flex-1 text-center md:text-left flex flex-col items-center md:items-start">
          <h2 className="text-lg font-bold mb-4">Contact Us</h2>
          <p className="text-sm mb-2">
            42 Allandale Road,
            <br />
            Hornchurch, RM11 1AP,
            <br />
            London, UK
          </p>
          <p className="text-sm mb-2">
            Phone:{" "}
            <a
              href="tel:+447359817484"
              className="hover:text-blue-400 transition transform hover:scale-105"
            >
              +44 7359 817484
            </a>
          </p>
          <p className="text-sm">
            Email:{" "}
            <a
              href="mailto:info@propertylifts.co.uk"
              className="hover:text-blue-400 transition transform hover:scale-105"
            >
              info@propertylifts.co.uk
            </a>
          </p>
        </div>
      </div>

      {/* Social Links */}
      <div className="container mx-auto mt-8 flex justify-center space-x-6">
        <a
          href="https://www.facebook.com/Propertyliftsltd"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white hover:text-blue-500 transition transform hover:scale-125"
        >
          <Facebook className="w-6 h-6" />
        </a>
        <a
          href="https://www.linkedin.com/company/property-lifts-ltd/?viewAsMember=true"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white hover:text-blue-600 transition transform hover:scale-125"
        >
          <Linkedin className="w-6 h-6" />
        </a>
        <a
          href="https://instagram.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white hover:text-pink-500 transition transform hover:scale-125"
        >
          <Instagram className="w-6 h-6" />
        </a>
        
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-700 mt-6 pt-4 text-center text-sm">
        <p>&copy; {new Date().getFullYear()} NEURASYS Ltd. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
