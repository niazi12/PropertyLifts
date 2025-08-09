import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";

const servicesData = [
  {
    id: 1,
    title: "Residential Lift Installation",
    category: "Installation",
    description:
      "Custom lift solutions for homes and apartments, designed to blend seamlessly with your interior while providing maximum accessibility.",
    features: ["Custom Design", "Space Efficient", "Low Noise", "Energy Saving"],
    estimatedTime: "2-3 weeks",
  },
  {
    id: 2,
    title: "Commercial Lift Maintenance",
    category: "Maintenance",
    description:
      "Regular maintenance and servicing to ensure your lifts operate at peak performance with minimal downtime.",
    features: ["24/7 Support", "Preventive Care", "Safety Checks", "Performance Optimization"],
    estimatedTime: "Ongoing",
  },
  {
    id: 3,
    title: "Lift Modernization",
    category: "Upgrade",
    description:
      "Upgrade your existing lift systems with modern technology and enhanced safety features.",
    features: ["Smart Controls", "Energy Efficiency", "Modern Design", "Enhanced Safety"],
    estimatedTime: "1-2 weeks",
  },
  {
    id: 4,
    title: "Call-Out and Emergency Repairs",
    category: "Emergency Service",
    description:
      "Immediate response for lift breakdowns, ensuring your lift is back in operation with minimal downtime.",
    features: [
      "24/7 Availability",
      "Rapid Response Team",
      "Certified Repair Technicians",
      "Temporary Solutions Until Full Repair",
    ],
    estimatedTime: "Emergency Response",
  },
  {
    id: 5,
    title: "Lift Inspection & Compliance Checks",
    category: "Compliance",
    description:
      "Comprehensive lift inspections to ensure your systems meet legal and safety standards.",
    features: [
      "Certified Safety Audits",
      "Detailed Inspection Reports",
      "Risk Assessments",
      "Compliance with Local and International Standards",
    ],
    estimatedTime: "Ongoing/Periodic",
  },
  {
    id: 6,
    title: "Custom Lift Design & Consultation",
    category: "Design",
    description:
      "Collaborate with experts to create bespoke lift systems tailored to your architectural and functional requirements.",
    features: [
      "3D Design and Planning",
      "Expert Consultation",
      "Space Optimization Solutions",
      "Sustainable Materials",
    ],
    estimatedTime: "4-6 weeks",
  },
  {
    id: 7,
    title: "Lift Dismantling & Removal",
    category: "Decommissioning",
    description:
      "Professional dismantling and removal services for old or non-functional lift systems.",
    features: [
      "Environmentally Friendly Disposal",
      "Safe and Efficient Processes",
      "Minimal Disruption to Property",
      "Site Cleanup",
    ],
    estimatedTime: "1-2 weeks",
  },
  {
    id: 8,
    title: "Platform and Stair Lifts",
    category: "Accessibility",
    description:
      "Install and maintain platform and stair lifts for enhanced mobility in residential and commercial spaces.",
    features: [
      "Wheelchair Accessibility",
      "Compact and Space-Saving",
      "Easy-to-Use Controls",
      "Durable and Long-Lasting",
    ],
    estimatedTime: "1-2 weeks",
  },
  {
    id: 9,
    title: "Energy-Efficient Lift Upgrades",
    category: "Sustainability",
    description:
      "Retrofit existing lifts with energy-efficient components to reduce operational costs and environmental impact.",
    features: [
      "LED Lighting",
      "Energy-Regenerative Drives",
      "Smart Control Systems",
      "Reduced Carbon Footprint",
    ],
    estimatedTime: "2-3 weeks",
  },
];

const ServicesPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-100 via-white to-gray-300">
      {/* Header Section */}
      <div className="bg-white shadow-lg border-b">
        <div className="container mx-auto px-6 py-16 text-center">
          <h1 className="text-4xl font-extrabold text-gray-900 tracking-tight">
            Our Premium Lift Services
          </h1>
          <p className="mt-4 text-lg text-gray-600">
            Delivering cutting-edge lift solutions for residential and commercial properties
          </p>
        </div>
      </div>

      {/* Services Grid */}
      <div className="container mx-auto px-6 py-16">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {servicesData.map((service) => (
            <Card
              key={service.id}
              className={`
                p-8 rounded-2xl bg-white shadow-xl border border-transparent cursor-pointer
                transition-all duration-300
                transform
                hover:scale-105 hover:-translate-y-2 hover:shadow-2xl
                ${
                  service.category === "Emergency Service"
                    ? "hover:border-red-500 hover:bg-red-50"
                    : "hover:border-blue-400 hover:bg-blue-50"
                }
              `}
            >
              <div className="space-y-6">
                {/* Category Badge */}
                <div className="flex items-center space-x-4">
                  <Badge
                    variant="secondary"
                    className={`mb-4 px-3 py-1 rounded-full shadow-md text-white ${
                      service.category === "Emergency Service"
                        ? "bg-red-500"
                        : "bg-gradient-to-r from-blue-500 to-indigo-500"
                    }`}
                  >
                    {service.category}
                  </Badge>
                </div>

                {/* Title and Description */}
                <h3
                  className={`
                    text-2xl font-semibold text-gray-900 transition-colors duration-300
                    hover:${service.category === "Emergency Service" ? "text-red-600" : "text-blue-600"}
                  `}
                >
                  {service.title}
                </h3>
                <p className="text-sm text-gray-700">{service.description}</p>

                {/* Features */}
                <div className="space-y-4">
                  <p className="text-sm font-medium text-gray-800">Key Features:</p>
                  <ul className="grid grid-cols-2 gap-4">
                    {service.features.map((feature, index) => (
                      <li
                        key={index}
                        className={`
                          text-sm text-gray-600 flex items-center transition-colors duration-200
                          hover:${
                            service.category === "Emergency Service" ? "text-red-600" : "text-blue-500"
                          }
                        `}
                      >
                        <span className="mr-2">•</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Estimated Time */}
                <div className="pt-4 border-t border-gray-200">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500">Estimated Time</span>
                    <span className="text-sm font-medium text-gray-900">{service.estimatedTime}</span>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <div className="inline-block p-10 bg-gradient-to-r from-gray-200 to-gray-300 rounded-3xl shadow-lg transition-transform transform hover:-translate-y-1">
            <h3 className="text-xl font-semibold text-gray-900">Need a Custom Solution?</h3>
            <p className="mt-2 text-gray-600">Let us tailor a lift system to your needs.</p>
            <Link href="/contact">
              <button className="mt-6 px-8 py-3 text-lg font-semibold text-white bg-gradient-to-r from-blue-500 to-indigo-500 rounded-lg shadow-xl hover:bg-indigo-600 transition-all duration-300">
                Get in Touch
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesPage;
