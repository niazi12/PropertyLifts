"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import Link from "next/link";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-black overflow-hidden">
      {/* Background Video */}
      <div className="absolute inset-0 z-0">
        <video
          src="/videos/background.mp4"
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-black/70" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto text-center space-y-6 sm:space-y-8"
        >
          {/* Heading */}
          <motion.h1
            initial="hidden"
            animate="visible"
            variants={{
              hidden: { opacity: 0, scale: 0.9, y: 20 },
              visible: {
                opacity: 1,
                scale: 1,
                y: 0,
                transition: { duration: 0.8, ease: "easeOut" }
              }
            }}
            className="text-3xl sm:text-5xl font-extrabold text-white leading-tight"
          >
            <motion.span
              variants={{
                hidden: { opacity: 0, y: 40 },
                visible: { opacity: 1, y: 0 }
              }}
              className="block"
            >
              Elevating Properties
            </motion.span>
            <motion.span
              variants={{
                hidden: { opacity: 0, y: 40 },
                visible: { opacity: 1, y: 0 }
              }}
              className="block mt-1 sm:mt-2"
            >
              Through Innovation
            </motion.span>
          </motion.h1>

          {/* Paragraph */}
          <p className="text-gray-300 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto px-2">
            Transforming spaces with modern lift solutions that blend seamlessly with your property's aesthetic.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
            <Link href="/services" className="w-full sm:w-auto">
              <Button
                size="lg"
                className="bg-white text-black hover:bg-gray-100 px-8 w-full sm:w-auto"
              >
                Our Services
              </Button>
            </Link>

            <Link href="/contact" className="w-full sm:w-auto">
              <Button
                size="lg"
                className="border-white text-white hover:bg-white/10 px-8 w-full sm:w-auto"
              >
                Get in Touch
              </Button>
            </Link>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-6 sm:bottom-8 left-1/2 -translate-x-1/2">
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          className="w-1 h-10 sm:h-12 relative"
        >
          <div className="absolute w-full h-full bg-gradient-to-b from-white/50 to-transparent rounded-full" />
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
