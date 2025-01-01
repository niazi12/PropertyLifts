"use client";

import { motion } from "framer-motion";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";

const products = [
  {
    id: 1,
    title: "Home Lifts",
    description: "Elegant and compact lifts designed to seamlessly integrate into your home, enhancing accessibility and adding a touch of sophistication. These space-efficient and energy-saving lifts ensure quiet operation and can be customized to match your interior decor.",
    image: "/images/resident.webp",
    features: ["Space-efficient", "Quiet operation", "Modern design"],
    category: "Residential",
  },
  {
    id: 2,
    title: "Commercial Lifts",
    description:
      "High-capacity lifts engineered for demanding commercial spaces such as offices, malls, and healthcare facilities. Featuring heavy-duty construction, smart controls, and exceptional speed, these lifts provide reliable and efficient performance while minimizing downtime.",
    image: "/images/commertial.webp",
    features: ["Heavy duty", "High speed", "Smart controls"],
    category: "Commercial",
  },
  {
    id: 3,
    title: "Dumbwaiters",
    description:
      "treamline your operations with our versatile dumbwaiters, ideal for restaurants, hotels, and homes. Compact yet robust, they ensure efficient and safe transportation of goods between floors, saving time and labor.",
    image: "/images/dumb.png",
    features: ["Compact Design", "Efficient", "Durable"],
    category: "Utility",
  },
];

const Products = () => {
  return (
    <div className="bg-gray-50 py-16">
      <div className="container mx-auto px-4">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h1 className="text-5xl font-extrabold mb-4 text-gray-800">
            Explore Our Lift Solutions
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            From residential elegance to commercial efficiency, we provide lift
            solutions tailored to your needs.
          </p>
        </motion.div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.2, duration: 0.5 }}
            >
              <Card className="group relative bg-white overflow-hidden shadow-xl rounded-xl transform transition-transform duration-300 hover:scale-105">
                {/* Image Section */}
                <CardHeader className="relative h-64 overflow-hidden">
                  <Image
                    src={product.image}
                    alt={product.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <Badge className="absolute top-4 right-4 bg-indigo-600 text-white px-3 py-1 rounded-full">
                    {product.category}
                  </Badge>
                </CardHeader>

                {/* Details Section */}
                <CardContent className="p-6">
                  <CardTitle className="text-2xl font-semibold mb-2">
                    {product.title}
                  </CardTitle>
                  <CardDescription className="text-gray-600 mb-4">
                    {product.description}
                  </CardDescription>
                  <div className="flex flex-wrap gap-2">
                    {product.features.map((feature, i) => (
                      <Badge
                        key={i}
                        variant="secondary"
                        className="bg-gray-200 text-gray-800 px-2 py-1 rounded"
                      >
                        {feature}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="text-center mt-16"
        >
          <p className="text-gray-600 text-lg mb-4">
            Looking for a custom solution?
          </p>
          <button className="bg-black text-white text-lg px-8 py-3 rounded-lg shadow-lg hover:bg-gray-800 transition duration-300">
            Contact Us
          </button>
        </motion.div>
      </div>
    </div>
  );
};

export default Products;
