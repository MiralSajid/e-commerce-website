import ProductGrid from "../components/ProductGrid";

const Home = () => {
  return (
    <div>
      <header className="bg-gray-900 text-white py-10 text-center">
        <h1 className="text-4xl font-bold">Welcome to FurnitureShop</h1>
        <p className="text-lg mt-4">Discover high-quality furniture for your dream home.</p>
      </header>
      <ProductGrid />
    </div>
  );
};

export default Home;
