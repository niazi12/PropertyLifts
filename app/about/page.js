import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"

const AboutSection = ({ title, children }) => (
  <Card className="p-6 hover:shadow-lg transition-all duration-300 bg-white/50 backdrop-blur-sm">
    <h2 className="text-2xl font-semibold mb-4 bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
      {title}
    </h2>
    {children}
  </Card>
)

const About = () => {
  const stats = [
    { number: "11+", label: "Years Experience" },
    { number: "500+", label: "Projects Completed" },
    { number: "98%", label: "Client Satisfaction" },
    { number: "24/7", label: "Support" },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
      {/* Hero Section */}
      <div className="relative h-[40vh] flex items-center justify-center mb-16">
        <div className="absolute inset-0 overflow-hidden">
          <Image
            src="/images/elevator-bg.jpg" // Add your image
            alt="Elevator background"
            fill
            className="object-cover blur-sm"
            priority
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>
        
        <div className="relative z-10 text-center space-y-4">
          <h1 className="text-5xl font-bold text-white">About Us</h1>
          <p className="text-xl text-gray-200 max-w-2xl mx-auto px-4">
            Elevating spaces with innovative lift solutions since 2011
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 pb-20">
        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <Card key={index} className="p-6 text-center bg-white/50 backdrop-blur-sm">
              <h3 className="text-3xl font-bold text-blue-600">{stat.number}</h3>
              <p className="text-gray-600">{stat.label}</p>
            </Card>
          ))}
        </div>

        {/* Content Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          <AboutSection title="Our Mission">
            <p className="text-gray-600 leading-relaxed">
              At Property Lifts Ltd, we're committed to providing safe, efficient, 
              and innovative lift solutions to enhance your everyday life. Our focus 
              is on delivering excellence through quality products and exceptional service.
            </p>
          </AboutSection>

          <AboutSection title="Why Choose Us">
            <div className="space-y-3">
              {[
                "Expert engineers with decade-plus experience",
                "Customized lift designs for your needs",
                "Premium materials and craftsmanship",
                "24/7 customer support and maintenance"
              ].map((point, index) => (
                <div key={index} className="flex items-center gap-2">
                  <Badge variant="default" className="bg-blue-100 text-blue-700 hover:bg-blue-200">
                    ✓
                  </Badge>
                  <span className="text-gray-600">{point}</span>
                </div>
              ))}
            </div>
          </AboutSection>

          <AboutSection title="Our History">
            <p className="text-gray-600 leading-relaxed">
              Since our founding in 2011, Property Lifts Ltd has grown to become 
              a trusted name in innovative lift solutions. Our journey is marked by 
              continuous improvement and unwavering commitment to excellence.
            </p>
          </AboutSection>

          <AboutSection title="Our Approach">
            <div className="space-y-4">
              <p className="text-gray-600 leading-relaxed">
                We believe in a collaborative approach, working closely with our clients 
                to understand their unique requirements and deliver solutions that exceed 
                expectations.
              </p>
              <div className="flex flex-wrap gap-2">
                {["Innovation", "Quality", "Safety", "Reliability"].map((value, index) => (
                  <Badge key={index} variant="secondary" className="bg-blue-50 text-blue-700">
                    {value}
                  </Badge>
                ))}
              </div>
            </div>
          </AboutSection>
        </div>
      </div>
    </div>
  )
}

export default About