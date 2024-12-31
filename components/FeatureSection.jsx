"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { motion } from "framer-motion";
import { Shield, Clock, Banknote } from "lucide-react"; // Import icons

const features = [
  {
    icon: <Shield className="w-10 h-10 text-blue-600" />,
    title: "Expert Engineers",
    description:
      "NVQ Level 5 certified engineers bringing unmatched expertise to every project, ensuring safety and efficiency.",
  },
  {
    icon: <Clock className="w-10 h-10 text-blue-600" />,
    title: "13+ Years Experience",
    description:
      "Delivering reliable lift solutions since 2011, with a proven track record of excellence and satisfaction.",
  },
  {
    icon: <Banknote className="w-10 h-10 text-blue-600" />,
    title: "Competitive Pricing",
    description:
      "Premium quality solutions at transparent, competitive rates tailored to your specific requirements.",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
  },
};

export const FeatureSection = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="space-y-12"
        >
          {/* Section Header */}
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Why Choose Us?
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Experience excellence in lift solutions with our expert team and proven track record
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div key={index} variants={itemVariants}>
                <Card className="border-none shadow-lg hover:shadow-xl transition-shadow duration-300 h-full">
                  <CardHeader className="space-y-6 text-center">
                    <div className="mx-auto bg-blue-50 w-20 h-20 rounded-full flex items-center justify-center">
                      {feature.icon}
                    </div>
                    <CardTitle className="text-xl font-semibold text-gray-900">
                      {feature.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 text-center">
                      {feature.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};