import Link from "next/link";
import Image from "next/image"; // Import the Image component from Next.js

const Navbar = () => {
  return (
    <nav className="bg-white shadow-lg p-4 sticky top-0 z-50 transition-all duration-500 ease-in-out">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo Section */}
        <Link href="/" className="flex items-center group">
          <Image
            src="/images/logo.jpeg"
            alt="Logo"
            width={60}
            height={40}
            className="mr-2 rounded-lg transition-transform duration-300 group-hover:scale-110 group-hover:rotate-12"
          />
          <span className="text-2xl font-bold text-gray-800 group-hover:text-blue-600 transition duration-300 text-shadow-md hover:text-lg">
            Property Lifts Ltd
          </span>
        </Link>

        {/* Navigation Links */}
        <div className="flex space-x-6">
          {["about", "products", "blog", "contact", "services"].map((link, index) => (
            <Link
              key={index}
              href={`/${link}`}
              className="relative text-gray-800 font-medium transition duration-300 ease-in-out transform hover:scale-105"
            >
              <span className="transition-all duration-300 hover:tracking-wide">
                {link.charAt(0).toUpperCase() + link.slice(1)}
              </span>
              <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 hover:w-full"></span>
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
