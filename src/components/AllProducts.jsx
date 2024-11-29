import { Link } from "react-router-dom";
import sofaImg from '../assets/images/Sofa.jpg';
import chairImg from '../assets/images/chair.jpg';
import chairImg2 from '../assets/images/chair2.jpeg';
import chairImg3 from '../assets/images/chair3.png';
import chairImg4 from '../assets/images/chair4.jpg';
import tableImg from '../assets/images/table.jpg';
import lampImg from '../assets/images/lamp.jpg';
import sofaImg4 from "../assets/images/sofa2.png";
import tableImg4 from "../assets/images/table2.jpg";
import lampImg4 from "../assets/images/lamp2.jpg";
import sofaImg2 from "../assets/images/sofa3.jpg";
import tableImg2 from "../assets/images/table3.jpg";
import lampImg2 from "../assets/images/lamp3.jpg";
import sofaImg3 from "../assets/images/sofa4.jpeg";
import tableImg3 from "../assets/images/table4.jpg";
import lampImg3 from "../assets/images/lamp4.jpg";
import { useState } from "react";

const products = [
    { id: 1, name: "Sofa", price: 1200, description: "A comfortable sofa.", image: sofaImg, category: "Sofas", colors: ["White", "Brown", "Gray"] },
    { id: 2, name: "Wooden Chair", price: 300, description: "A stylish chair.", image: chairImg, category: "Chairs", colors: ["Black", "White", "Brown"] },
    { id: 3, name: " Maze Table", price: 500, description: "A sturdy table.", image: tableImg, category: "Tables", colors: ["Brown", "Black", "White"] },
    { id: 4, name: "Round Lamp", price: 150, description: "A modern lamp.", image: lampImg, category: "Lamps", colors: ["White", "Yellow", "Black"] },
    { id: 5, name: "Large Sofa", price: 1200, description: "A comfortable sofa.", image: sofaImg2, category: "Sofas", colors: ["White", "Brown", "Gray"] },
    { id: 6, name: "Luxury Sofa", price: 1400, description: "A luxury sofa.", image: sofaImg3, category: "Sofas", colors: ["Gray", "Black", "Cream"] },
    { id: 7, name: "Sofa Chair", price: 1600, description: "A modern sofa.", image: sofaImg4, category: "Sofas", colors: ["Beige", "Navy", "Green"] },
    { id: 8, name: "Round Bottom Table", price: 500, description: "A sturdy table.", image: tableImg2, category: "Tables", colors: ["Brown", "Black", "White"] },
    { id: 9, name: "Stylish Cross Bottom Table", price: 600, description: "A sleek table.", image: tableImg3, category: "Tables", colors: ["Oak", "Walnut", "Maple"] },
    { id: 10, name: "Round Table", price: 700, description: "A stylish table.", image: tableImg4, category: "Tables", colors: ["Teak", "Espresso", "Cherry"] },
    { id: 11, name: "Birds Lamp", price: 150, description: "A modern lamp.", image: lampImg2, category: "Lamps", colors: ["White", "Yellow", "Black"] },
    { id: 12, name: "Stand Lamp", price: 200, description: "A vintage lamp.", image: lampImg3, category: "Lamps", colors: ["Gold", "Silver", "Bronze"] },
    { id: 13, name: "Designer Lamp", price: 250, description: "A designer lamp.", image: lampImg4, category: "Lamps", colors: ["Blue", "Green", "Red"] },
    { id: 14, name: "Gray/Blue Chair", price: 350, image: chairImg2, category: "Chairs", colors: ["Gray", "Blue"] },
    { id: 15, name: "Office Chair ", price: 400, image: chairImg3, category: "Chairs", colors: ["Brown", "Black", "Red"] },
    { id: 16, name: "Pink Office Chair", price: 450, image: chairImg4, category: "Chairs", colors: ["Pink","Black"] },
];

const AllProducts = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredProducts =
    selectedCategory === "All"
      ? products
      : products.filter((product) => product.category === selectedCategory);

  const categories = ["All", "Sofas", "Tables", "Lamps", "Chairs"];

  return (
    <section id="all-products" className="py-16">
      <div className="container mx-auto">
        <h2 className="text-2xl font-bold mb-6">Explore Our Products</h2>
        <h1 className="text-2xl font-bold mb-3">Categories</h1>

        {/* Category Filter */}
        <div className="mb-6 flex space-x-4">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded ${
                selectedCategory === category
                  ? "bg-teal-600 text-white"
                  : "bg-gray-200 text-gray-800 hover:bg-gray-300"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Product Grid */}
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {filteredProducts.map((product) => (
              <div
                key={product.id}
                className="border p-4 flex flex-col justify-between items-center text-center rounded shadow-lg"
              >
                <img
                  src={product.image}
                  alt={product.name}
                  className="mb-4 w-full h-full object-cover rounded"
                />
                <h3 className="text-lg font-bold mb-2">{product.name}</h3>
                <p className="text-gray-700">${product.price}</p>
                <p className="text-sm text-gray-500">{product.description}</p>
                <Link to={`/product/${product.id}`}>
                  <button className="bg-yellow-500 text-white py-2 px-4 mt-4 rounded hover:bg-yellow-600">
                    View Details
                  </button>
                </Link>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-gray-500">No products found.</p>
        )}
      </div>
    </section>
  );
};

export default AllProducts;
