"use client";

import { motion } from "framer-motion";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";

const products = [
  {
    id: 1,
    title: "Home Lifts",
    description: "Elegant and compact lifts designed for modern homes.",
    image: "/images/home-lift.jpg",
    features: ["Space-efficient", "Quiet operation", "Modern design"],
    category: "Residential"
  },
  {
    id: 2,
    title: "Commercial Lifts",
    description: "High-capacity lifts for office buildings and commercial spaces.",
    image: "/images/commercial-lift.jpg",
    features: ["Heavy duty", "High speed", "Smart controls"],
    category: "Commercial"
  },
  {
    id: 3,
    title: "Panoramic Lifts",
    description: "Glass-walled lifts offering stunning views during transit.",
    image: "/images/panoramic-lift.jpg",
    features: ["Glass walls", "Scenic view", "Premium finish"],
    category: "Luxury"
  }
];

const Products = () => {
  return (
    <>
    
        <div className="container mx-auto py-16 px-4">
          {/* Header Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl font-bold tracking-tight mb-4">
              Our Premium Lift Solutions
            </h1>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Discover our range of innovative lift solutions designed to meet your specific needs,
              whether residential, commercial, or luxury installations.
            </p>
          </motion.div>

          {/* Products Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="group hover:shadow-lg transition-shadow duration-300">
                  <CardHeader className="relative h-48 overflow-hidden">
                    <Image
                      src={product.image}
                      alt={product.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <Badge className="absolute top-4 right-4">
                      {product.category}
                    </Badge>
                  </CardHeader>
                  <CardContent className="pt-6">
                    <CardTitle className="text-xl mb-2">{product.title}</CardTitle>
                    <CardDescription className="mb-4">
                      {product.description}
                    </CardDescription>
                    <div className="flex flex-wrap gap-2">
                      {product.features.map((feature, i) => (
                        <Badge key={i} variant="secondary">
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
            transition={{ delay: 0.5 }}
            className="text-center mt-16"
          >
            <p className="text-gray-600 mb-4">
              Can't find what you're looking for?
            </p>
            <button className="bg-black text-white px-6 py-2 rounded-md hover:bg-gray-800 transition-colors">
              Contact Our Team
            </button>
          </motion.div>
        </div>
  
    </>
  );
};

export default Products;