import styles from '../styles/HeroSection.module.css'; // Update the path

const HeroSection = () => {
  return (
    <section
      className="bg-cover bg-center h-screen flex items-center"
      style={{ backgroundImage: "url('/images/background.webp')" }}
    >
      <div className="container mx-auto text-white text-center">
        <h1 className={`text-5xl font-bold mb-4 ${styles['animate-shake-blur']}`}>
            Welcome to Property Lifts Ltd
        </h1>
        <p className="text-xl mb-6">
            Let us take your experience to the next level!
        </p>
        <button className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg">
            Explore Our Products
        </button>
      </div>
    </section>
  );
};

export default HeroSection;
