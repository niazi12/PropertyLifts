import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const servicesData = [
  {
    id: 1,
    title: "Residential Lift Installation",
    category: "Installation",
    description: "Custom lift solutions for homes and apartments, designed to blend seamlessly with your interior while providing maximum accessibility.",
    features: ["Custom Design", "Space Efficient", "Low Noise", "Energy Saving"],
    estimatedTime: "2-3 weeks",
  },
  {
    id: 2,
    title: "Commercial Lift Maintenance",
    category: "Maintenance",
    description: "Regular maintenance and servicing to ensure your lifts operate at peak performance with minimal downtime.",
    features: ["24/7 Support", "Preventive Care", "Safety Checks", "Performance Optimization"],
    estimatedTime: "Ongoing",
  },
  {
    id: 3,
    title: "Lift Modernization",
    category: "Upgrade",
    description: "Upgrade your existing lift systems with modern technology and enhanced safety features.",
    features: ["Smart Controls", "Energy Efficiency", "Modern Design", "Enhanced Safety"],
    estimatedTime: "1-2 weeks",
  }
]

const ServicesPage = () => {
  return (
    <div className="min-h-screen bg-gray-50/50">
      {/* Header Section */}
      <div className="bg-white border-b">
        <div className="container mx-auto px-6 py-16">
          <h1 className="text-3xl font-medium text-gray-900">Our Services</h1>
          <p className="mt-2 text-gray-600">
            Comprehensive lift solutions for residential and commercial properties
          </p>
        </div>
      </div>

      {/* Services Grid */}
      <div className="container mx-auto px-6 py-12">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {servicesData.map((service) => (
            <Card key={service.id} className="p-6 hover:shadow-lg transition-shadow">
              <div className="space-y-4">
                <div className="space-y-2">
                  <Badge variant="secondary" className="mb-2">
                    {service.category}
                  </Badge>
                  <h3 className="text-xl font-medium">{service.title}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {service.description}
                  </p>
                </div>

                <div className="space-y-3">
                  <p className="text-sm font-medium text-gray-900">Key Features:</p>
                  <ul className="grid grid-cols-2 gap-2">
                    {service.features.map((feature, index) => (
                      <li key={index} className="text-sm text-gray-600 flex items-center">
                        <span className="mr-2">•</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-4 border-t">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500">
                      Estimated Time
                    </span>
                    <span className="text-sm font-medium text-gray-900">
                      {service.estimatedTime}
                    </span>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Contact Section */}
        <div className="mt-16 text-center">
          <div className="inline-block p-6 bg-white rounded-lg shadow-sm">
            <h3 className="text-lg font-medium text-gray-900">
              Need a Custom Solution?
            </h3>
            <p className="mt-2 text-gray-600">
              Contact our team for personalized service options
            </p>
            <div className="mt-4">
              <button className="px-4 py-2 text-sm font-medium text-white bg-black rounded-md hover:bg-gray-800 transition-colors">
                Get in Touch
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ServicesPage