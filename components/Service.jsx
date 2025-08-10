import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";

const servicesData = [
  {
    id: 1,
    title: "Lift Installation",
    category: "Installation",
    description:
      "Custom lift solutions for homes and apartments, designed to blend seamlessly with your interior while providing maximum accessibility.",
    features: ["Custom Design", "Space Efficient", "Low Noise", "Energy Saving"],
    estimatedTime: "2-4 weeks",
  },
  {
    id: 2,
    title: "Call Out and Repair",
    category: "Emergency Service",
    description:
      "Fast, reliable repair services for lift breakdowns and emergency call-outs to ensure minimal disruption.",
    features: [
      "24/7 Availability",
      "Quick Diagnostics",
      "On-Site Repairs/On call",
      "Guaranteed Repair – fixed right the first time, every time",
    ],
    estimatedTime: "Depends on Issue",
  },
  {
    id: 4,
    title: "Lift Maintenance",
    category: "Maintenance",
    description:
      "Regular maintenance and servicing to ensure your lifts operate at peak performance with minimal downtime.",
    features: ["Preventive Care", "Safety Checks", "Performance Optimization"],
    estimatedTime: "Ongoing",
  },
  {
    id: 3,
    title: "Lift Refurbishment & Modernization",
    category: "Upgrade",
    description:
      "Upgrade your existing lift systems with modern technology and enhanced safety features.",
    features: ["Smart Controls", "Energy Efficiency", "Modern Design", "Enhanced Safety"],
    estimatedTime: "1-2 weeks",
  },
  {
    id: 5,
    title: "Lift Inspection & Testing",
    category: "Inspection & Safety",
    description:
      "Routine safety inspections and testing to ensure your lift system complies with safety regulations and operates efficiently.",
    features: ["Certified Inspectors", "Regulatory Compliance", "Performance Testing", "Safety Certification"],
    estimatedTime: "2-3 days",
  },
  {
    id: 6,
    title: "Custom Lift Design & Consultation",
    category: "Consultation",
    description:
      "Expert consultation for designing custom lifts tailored to your specific needs, style, and space requirements.",
    features: ["Tailored Design", "Space Optimization", "Interior Coordination", "Expert Consultation"],
    estimatedTime: "Varies Based on Design",
  },
];

const ServicesSection = () => {
  return (
    <div className="py-16 bg-gradient-to-b from-gray-100 via-gray-200 to-gray-300">
      <div className="container mx-auto px-6 text-gray-900">
        <h2 className="text-4xl font-bold text-center mb-12 tracking-wider">Our Premium Services</h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {servicesData.map((service) => (
            <Card
              key={service.id}
              className={`
                p-8 rounded-lg border transition-all duration-300 cursor-pointer
                shadow-md
                ${
                  service.category === "Emergency Service"
                    ? "bg-red-50 border-red-400 text-red-700"
                    : "bg-white border-transparent text-gray-900"
                }
                hover:shadow-2xl
                hover:scale-105
                hover:-translate-y-2
                ${
                  service.category === "Emergency Service"
                    ? "hover:border-red-600 hover:bg-red-100"
                    : "hover:border-teal-400 hover:bg-teal-50"
                }
              `}
            >
              <div className="space-y-6">
                {/* Category Badge */}
                <div className="space-y-2">
                  <Badge
                    variant={service.category === "Emergency Service" ? "destructive" : "secondary"}
                    className={`mb-2 px-4 py-2 rounded-full shadow-md ${
                      service.category === "Emergency Service"
                        ? "bg-red-500 text-white"
                        : "bg-teal-400 text-white"
                    }`}
                  >
                    {service.category}
                  </Badge>
                  <h3
                    className={`text-2xl font-semibold ${
                      service.category === "Emergency Service" ? "text-red-700" : "text-gray-800"
                    }`}
                  >
                    {service.title}
                  </h3>
                  <p className="text-lg text-gray-700 leading-relaxed">{service.description}</p>
                </div>

                {/* Features */}
                <div className="space-y-4">
                  <p className="text-lg font-semibold text-gray-800">Key Features:</p>
                  <ul className="list-disc pl-6 text-gray-700">
                    {service.features.map((feature, index) => (
                      <li
                        key={index}
                        className={`text-lg hover:transition-colors duration-300 ${
                          service.category === "Emergency Service"
                            ? "text-red-600 hover:text-red-800"
                            : "text-gray-600 hover:text-teal-500"
                        }`}
                      >
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Estimated Time */}
                <div className="pt-6 border-t border-gray-300">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500">Estimated Time</span>
                    <span
                      className={`text-lg font-semibold ${
                        service.category === "Emergency Service" ? "text-red-700" : "text-gray-800"
                      }`}
                    >
                      {service.estimatedTime}
                    </span>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>

      {/* Load More Button */}
      <div className="mt-12 text-center">
        <Link href="/services">
          <button className="px-8 py-3 text-lg font-semibold text-white bg-gradient-to-r from-teal-500 to-green-500 rounded-full shadow-lg hover:bg-teal-600 transition-all duration-300 transform hover:scale-105">
            Discover More Services
          </button>
        </Link>
      </div>

      {/* Call to Action */}
      <div className="mt-16 text-center">
        <div className="inline-block p-10 bg-gradient-to-r from-gray-100 via-gray-200 to-gray-300 rounded-lg shadow-lg transition-transform transform hover:-translate-y-2">
          <h3 className="text-2xl font-semibold text-gray-900">Need a Custom Lift Solution?</h3>
          <p className="mt-4 text-gray-700">Our experts can help you with custom lift designs and installations.</p>
          <Link href="/contact">
            <button className="mt-6 px-8 py-3 text-lg font-semibold text-white bg-gradient-to-r from-teal-500 to-green-500 rounded-full shadow-lg hover:bg-teal-600 transition-all duration-300">
              Get in Touch
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ServicesSection;
