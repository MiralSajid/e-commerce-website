import { Link } from 'react-router-dom';
import sofaImg from '../assets/images/Sofa.jpg';
import chairImg from '../assets/images/Chair.jpg';
import tableImg from '../assets/images/Table.jpg';
import lampImg from '../assets/images/lamp.jpg';
import tableImg2 from "../assets/images/table3.jpg";
import sofaImg3 from "../assets/images/sofa4.jpeg";
import sofaImg4 from "../assets/images/sofa2.png";
import { useState } from 'react';


const products = [
  { id: 1, name: "Sofa", price: 1200, description: "A comfortable sofa.", image: sofaImg, category: "Sofas", colors: ["White", "Brown", "Gray"] },
  { id: 2, name: "Wooden Chair", price: 300, description: "A stylish chair.", image: chairImg, category: "Chairs", colors: ["Black", "White", "Brown"] },
  { id: 3, name: " Maze Table", price: 500, description: "A sturdy table.", image: tableImg, category: "Tables", colors: ["Brown", "Black", "White"] },
  { id: 4, name: "Round Lamp", price: 150, description: "A modern lamp.", image: lampImg, category: "Lamps", colors: ["White", "Yellow", "Black"] },
  { id: 5, name: "Luxury Sofa", price: 1400, description: "A luxury sofa.", image: sofaImg3, category: "Sofas", colors: ["Gray", "Black", "Cream"] },
    { id: 6, name: "Sofa Chair", price: 1600, description: "A modern sofa.", image: sofaImg4, category: "Sofas", colors: ["Beige", "Navy", "Green"] },
    { id: 7, name: "Round Bottom Table", price: 500, description: "A sturdy table.", image: tableImg2, category: "Tables", colors: ["Brown", "Black", "White"] },
];

const ProductGrid = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = ["All", "Sofas", "Tables","Chairs","Lamps"];

  // Filter products by selected category
  const filteredProducts = products.filter((product) => {
    const matchesCategory = selectedCategory === "All" || product.category === selectedCategory;
    return matchesCategory;
  });

  return (
    <section id="products" className="py-16">
      <div className="container mx-auto">
        <h2 className="text-2xl font-bold mb-6">Trending Products for You</h2>
        <h1 className="text-2xl font-bold mb-3">Categories</h1>

        {/* Category Filter */}
        <div className="mb-6 flex space-x-4">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded ${
                selectedCategory === category ? "bg-teal-600 text-white" : "bg-gray-200 text-gray-800"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Product Grid */}
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
            {filteredProducts.map((product) => (
              <div
                key={product.id}
                className="border p-4 flex flex-col justify-between items-center text-center rounded shadow-lg h-[350px]"
              >
                <img
                  src={product.image}
                  alt={product.name}
                  className="mb-4 w-full h-40 object-cover rounded"
                />
                <div className="flex flex-col flex-grow">
                  <h3 className="text-lg font-bold mb-2">{product.name}</h3>
                  <p className="text-gray-700">{product.price}</p>
                </div>
                <Link to={`/product/${product.id}`}>
                  <button className="bg-yellow-500 text-white py-2 px-4 mt-4 rounded hover:bg-yellow-600">
                    View Details
                  </button>
                </Link>
              </div>
            ))}
          </div>
        ) : (
          <p>No products found.</p>
        )}
        <p>
          Want more options?-
          <Link to="/products" className="text-teal-600">
            Explore All Products.
          </Link>
        </p>
      </div>
    </section>
  );
};

export default ProductGrid;
