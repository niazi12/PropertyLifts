import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";

const AboutSection = ({ title, children }) => (
  <Card className="p-6 hover:shadow-2xl transition-all duration-300 bg-gradient-to-br from-white/60 to-gray-200 backdrop-blur-lg border border-gray-200 animate-fade-in-up">
    <h2 className="text-2xl font-semibold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent animate-text-fade">
      {title}
    </h2>
    {children}
  </Card>
);

const OurValuesSection = () => (
  <section className="max-w-5xl mx-auto px-4 py-16">
    <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
      Our Values
    </h2>
    <div className="space-y-10 text-gray-700 leading-relaxed text-lg">
      {[
        {
          title: "Engineering with Heart",
          content:
            "We're more than just experts; we're innovators who put people first. Our deep engineering knowledge allows us to build products that aren't just good, they're the best. We take the time to truly understand what you need, making sure our solutions fit seamlessly into your life. We're proud to lead our industry by upholding the highest standards of safety and ethics."
        },
        {
          title: "Honesty is Our Compass",
          content:
            "We're a company with a clear purpose, and it's not just about the bottom line. Our independence means we can always do what's right for you. We listen carefully, act with transparency, and build trust through a genuine sense of responsibility. Your needs are at the core of every decision we make."
        },
        {
          title: "A Better Future for All",
          content:
            "We believe in a world where everyone has the freedom to live life to the fullest. Our work is all about creating that world, one solution at a time. By improving access and convenience, we're not just making things easier—we're making a real difference in people's lives. We champion a better way of living, because we know our innovations can help create a more equal and fulfilling future."
        }
      ].map(({ title, content }, idx) => (
        <div
          key={idx}
          className="group cursor-default transform transition duration-300 ease-in-out hover:scale-[1.04] hover:shadow-2xl hover:bg-blue-50 p-6 rounded-lg bg-white/80 border border-gray-200"
          style={{ animationDelay: `${idx * 0.15}s` }}
        >
          <h3 className="font-semibold text-xl mb-2 text-blue-700 group-hover:text-purple-600 transition-colors duration-300">
            {title}
          </h3>
          <p className="text-gray-700">{content}</p>
        </div>
      ))}
    </div>
  </section>
);

const About = () => {
  const stats = [
    { number: "13+", label: "Years Experience" },
    { number: "200+", label: "Projects Completed" },
    { number: "98%", label: "Client Satisfaction" },
    { number: "24/7", label: "Support" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-200 relative overflow-hidden">
      {/* Background Animation */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-blue-300 to-indigo-400 rounded-full blur-3xl opacity-40 animate-pulse"></div>
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-gradient-to-br from-purple-300 to-pink-400 rounded-full blur-3xl opacity-30 animate-pulse"></div>
      </div>

      {/* Hero Section */}
      <div className="relative min-h-[60vh] md:h-[60vh] flex items-center justify-center mb-16 px-4">
        <div className="absolute inset-0 overflow-hidden">
          <Image
            src="/images/background.webp"
            alt="Elevator background"
            fill
            className="object-cover blur-sm"
            priority
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>
        <div className="relative z-10 text-center space-y-4">
          <h1 className="text-4xl md:text-5xl font-bold text-white drop-shadow-lg animate-fade-in-down">
            About Us
          </h1>
          <p className="text-lg md:text-xl text-gray-200 max-w-xl mx-auto animate-fade-in-up">
            London-based Property Lifts Ltd. is committed to providing premium lift services at competitive rates. From regular maintenance to complete installations, our extensive service options cover it all.
          </p>
        </div>
      </div>

      {/* Stats Section */}
      <div className="container mx-auto px-4 pb-20 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <Card
              key={index}
              className="p-6 text-center bg-gradient-to-br from-white/50 to-gray-100 backdrop-blur-md shadow-lg hover:scale-105 transition-transform duration-300"
            >
              <h3 className="text-2xl md:text-3xl font-bold text-blue-600">{stat.number}</h3>
              <p className="text-sm md:text-base text-gray-600">{stat.label}</p>
            </Card>
          ))}
        </div>

        {/* Content Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <AboutSection title="Our Mission">
            <p className="text-gray-700 leading-relaxed">
              At Property Lifts Ltd, we're committed to providing safe, efficient, and innovative lift solutions to enhance your everyday life. Our focus is on delivering excellence through quality products and exceptional service.
            </p>
          </AboutSection>

          <AboutSection title="Why Choose Us">
            <div className="space-y-3">
              {[
                "Expert engineers with decade-plus experience",
                "Customized lift designs for your needs",
                "Premium materials and craftsmanship",
                "24/7 customer support and maintenance",
              ].map((point, index) => (
                <div
                  key={index}
                  className="flex items-center gap-2 hover:translate-x-1 transition-transform duration-200"
                >
                  <Badge
                    variant="default"
                    className="bg-blue-100 text-blue-700 hover:bg-blue-200"
                  >
                    ✓
                  </Badge>
                  <span className="text-gray-700">{point}</span>
                </div>
              ))}
            </div>
          </AboutSection>

          <AboutSection title="Our History">
            <p className="text-gray-700 leading-relaxed">
              Since our founding in 2011, Property Lifts Ltd has grown to become a trusted name in innovative lift solutions. Our journey is marked by continuous improvement and unwavering commitment to excellence.
            </p>
          </AboutSection>

          <AboutSection title="Our Approach">
            <div className="space-y-4">
              <p className="text-gray-700 leading-relaxed">
                We believe in a collaborative approach, working closely with our clients to understand their unique requirements and deliver solutions that exceed expectations.
              </p>
              <div className="flex flex-wrap gap-2">
                {["Innovation", "Quality", "Safety", "Reliability"].map((value, index) => (
                  <Badge
                    key={index}
                    variant="secondary"
                    className="bg-blue-50 text-blue-700 hover:scale-110 transition-transform"
                  >
                    {value}
                  </Badge>
                ))}
              </div>
            </div>
          </AboutSection>
        </div>

        {/* Our Values Section */}
        <OurValuesSection />
      </div>
    </div>
  );
};

export default About;
