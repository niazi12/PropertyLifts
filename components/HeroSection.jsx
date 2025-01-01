"use client";  // Add this at the top since we're using client-side animations

import { Button } from "@/components/ui/button"
import Image from "next/image"
import { motion } from "framer-motion"

const HeroSection = () => {
  return (
    <section className="relative h-screen flex items-center justify-center bg-black">
      {/* Background with Gradient Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/background.webp"
          alt="Background"
          fill
          priority
          className="object-cover object-center opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-black/70" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl mx-auto text-center space-y-8"
        >
          <h1 className="text-4xl md:text-5xl font-light text-white">
            Elevating Properties
            <span className="block font-medium mt-2">Through Innovation</span>
          </h1>

          <p className="text-gray-300 text-lg leading-relaxed">
            Transforming spaces with modern lift solutions that blend 
            seamlessly with your property's aesthetic.
          </p>

          <div className="flex items-center justify-center gap-4">
            <Button 
              size="lg" 
              className="bg-white text-black hover:bg-gray-100 px-8"
            >
              Our Services
            </Button>
            <Button 
              
              size="lg"
              className="border-white text-white hover:bg-white/10 px-8"
            >
              Get in Touch
            </Button>
          </div>
        </motion.div>
      </div>

      {/* Decorative Element */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          className="w-1 h-12 relative"
        >
          <div className="absolute w-full h-full bg-gradient-to-b from-white/50 to-transparent rounded-full" />
        </motion.div>
      </div>
    </section>
  )
}

export default HeroSection