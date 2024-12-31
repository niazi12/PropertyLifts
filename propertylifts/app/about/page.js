  // Import the Layout component

const About = () => {
  return (
    
    
      <div className="bg-gray-100 min-h-screen py-20">
        <section className="text-center">
          <h1 className="text-4xl font-bold mb-4 text-blue-600">About Us</h1>
          <p className="text-xl text-gray-700 mb-12">
            Welcome to Property Lifts Ltd. We specialize in high-quality, custom lift solutions for residential and commercial spaces.
          </p>

          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-semibold mb-4 text-blue-600">Our Mission</h2>
            <p className="text-lg text-gray-600 mb-8">
              At Property Lifts Ltd, our mission is to provide safe, efficient, and innovative lift solutions to enhance your everyday life. We are committed to offering top-quality products and exceptional customer service.
            </p>

            <h2 className="text-2xl font-semibold mb-4 text-blue-600">Why Choose Us?</h2>
            <ul className="list-disc list-inside text-lg text-gray-600">
              <li>Experienced engineers with over 11 years of expertise.</li>
              <li>Customized lift designs tailored to your needs.</li>
              <li>High-quality, durable materials and craftsmanship.</li>
              <li>Reliable and prompt customer support and maintenance services.</li>
            </ul>

            <h2 className="text-2xl font-semibold mt-8 mb-4 text-blue-600">Our History</h2>
            <p className="text-lg text-gray-600 mb-8">
              Founded in 2011, Property Lifts Ltd has been providing innovative lift solutions to customers across various industries. With our experienced team of engineers, we have become a trusted name in the industry.
            </p>
          </div>
        </section>
      </div>
    
  );
};

export default About;
