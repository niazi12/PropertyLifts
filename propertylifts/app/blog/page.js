import Navbar from "../../components/Navbar";

const Products = () => {
  return (
    <>
      <Navbar />
      <main className="container mx-auto py-10">
        <h1 className="text-3xl font-bold">Our Products</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
          <div className="border p-4 rounded shadow">
            <h2 className="text-xl font-bold">Home Lifts</h2>
            <p className="mt-2 text-gray-700">
              Compact and stylish lifts for your home.
            </p>
          </div>
          <div className="border p-4 rounded shadow">
            <h2 className="text-xl font-bold">Commercial Lifts</h2>
            <p className="mt-2 text-gray-700">
              Robust lifts designed for businesses.
            </p>
          </div>
        </div>
      </main>
    </>
  );
};

export default Products;