"use client";

import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import { LinkedinIcon } from "lucide-react"; // Make sure to install lucide-react

const teamMembers = [
  {
    name: "Niazi Mahrab",
    role: "IT Manager",
    company: "Property Lifts Ltd",
    imageSrc: "/images/niazi.jpg",
    linkedIn: "https://www.linkedin.com/in/niazi-mahrab-b16a96203/",
    bio: "IT expert specializing in ERP development and customer-focused solutions.",
  },
  {
    name: "Shuruzzaman Siddique",
    role: "Technical Engineer",
    company: "Property Lifts Ltd",
    imageSrc: "/images/shuruzzaman.jpeg", // Update with the correct image path
    linkedIn: "#",
    bio: "18+ years of experience in lift system design, installation, and maintenance, ensuring safety and efficiency.",
  },
  // Add more team members as needed
];

const TeamMember = ({ name, role, company, imageSrc, linkedIn, bio }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      <Card className="group hover:shadow-xl transition-all duration-300 h-full bg-gradient-to-b from-white to-gray-50 border border-gray-200 hover:border-blue-200">
        <CardContent className="p-6 h-full flex flex-col">
          <div className="flex flex-col items-center text-center flex-grow">
            {/* Image with hover effect */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
              className="relative w-48 h-48 mb-6 rounded-full overflow-hidden border-4 border-white shadow-lg"
            >
              <Image
                src={imageSrc}
                alt={name}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
            </motion.div>

            {/* Content */}
            <div className="space-y-3 flex-grow">
              <h3 className="text-2xl font-bold text-gray-900">{name}</h3>
              <Badge variant="secondary" className="font-medium bg-blue-100 text-blue-800">
                {role}
              </Badge>
              <p className="text-sm text-gray-600">{company}</p>
              <p className="text-sm text-gray-500 leading-relaxed">{bio}</p>
            </div>

            {/* LinkedIn Button with hover effect */}
            <motion.a
              href={linkedIn}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
              className="inline-flex items-center gap-2 text-sm text-blue-600 hover:text-blue-700 transition-colors mt-4"
            >
              <LinkedinIcon className="w-5 h-5" />
              <span>Connect on LinkedIn</span>
            </motion.a>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
};

const TeamMembers = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4 max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16 space-y-4"
        >
          <h2 className="text-4xl font-bold text-gray-900">
            Meet Our Leadership
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            The innovative minds shaping the future of vertical transportation
            solutions at Property Lifts Ltd.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <TeamMember key={index} {...member} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamMembers;