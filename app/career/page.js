"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function CareerPage() {
  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
      },
    },
  };

  return (
    <section className="min-h-screen bg-blue-50 py-16 px-6 relative">
      <motion.div
        className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Left Column - Text */}
        <div>
          <motion.h1
            variants={itemVariants}
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-6"
          >
            Careers at Property Lifts Ltd
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="text-lg text-gray-700 leading-relaxed mb-8"
          >
            At <span className="font-semibold">Property Lifts Ltd</span>, we believe in
            building not just lifts, but also meaningful careers. We foster a
            culture of innovation, respect, and professional growth — where
            every team member can make a real impact. From engineering to
            customer service, our people are the heart of what we do.
          </motion.p>

          <motion.div
            variants={itemVariants}
            whileHover={{
              scale: 1.02,
              boxShadow: "0 10px 20px rgba(0,0,0,0.1)",
            }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
            className="bg-white p-8 rounded-xl shadow-lg border cursor-pointer"
          >
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Currently No Vacancies
            </h2>
            <p className="text-gray-700 mb-4">
              We’re not actively hiring at the moment, but we’re always on the
              lookout for passionate, talented individuals who share our values.
            </p>
            <p className="text-gray-700">
              If you’d like to be considered for future opportunities, feel free
              to send your CV to{" "}
              <motion.a
                href="mailto:info@propertylifts.co.uk"
                className="text-blue-600 hover:underline font-medium"
                whileHover={{ scale: 1.05, color: "#1e40af" }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                info@propertylifts.co.uk
              </motion.a>
              . We’ll keep your details on file and reach out if a suitable role
              opens up.
            </p>
          </motion.div>
        </div>

        {/* Right Column - Image */}
        <motion.div
          variants={itemVariants}
          className="relative w-full h-[450px] rounded-xl overflow-hidden shadow-lg"
        >
          <Image
            src="/images/career.png"
            alt="Career Opportunities at Property Lifts Ltd"
            fill
            className="object-cover hover:scale-105 transition-transform duration-500"
            priority
          />
        </motion.div>
      </motion.div>
    </section>
  );
}
