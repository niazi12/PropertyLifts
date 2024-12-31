"use client";

import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import { LinkedinIcon } from "lucide-react"; // Make sure to install lucide-react

const teamMembers = [
  {
    name: "Niazi Mahrab",
    role: "CEO",
    company: "Property Lifts Ltd",
    imageSrc: "/images/niazi.jpg",
    linkedIn: "#",
    bio: "Visionary leader with over 10 years of experience in elevator solutions.",
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
      <Card className="group hover:shadow-lg transition-all duration-300">
        <CardContent className="p-6">
          <div className="flex flex-col items-center text-center">
            {/* Image with proper aspect ratio */}
            <div className="relative w-48 h-48 mb-6">
              <div className="absolute inset-0 rounded-full overflow-hidden">
                <Image
                  src={imageSrc}
                  alt={name}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
            </div>

            {/* Content */}
            <div className="space-y-3">
              <h3 className="text-2xl font-semibold text-gray-900">{name}</h3>
              <Badge variant="secondary" className="font-medium">
                {role}
              </Badge>
              <p className="text-sm text-gray-600">{company}</p>
              <p className="text-sm text-gray-500 leading-relaxed">{bio}</p>

              {/* LinkedIn Button */}
              <a
                href={linkedIn}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm text-gray-600 hover:text-blue-600 transition-colors mt-4"
              >
                <LinkedinIcon className="w-5 h-5" />
                <span>Connect on LinkedIn</span>
              </a>
            </div>
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