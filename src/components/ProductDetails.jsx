import { useDispatch } from 'react-redux';
import { addToCart } from '../features/cartSlice';
import { useParams, Link } from 'react-router-dom';
import sofaImg from '../assets/images/Sofa.jpg';
import chairImg from '../assets/images/Chair.jpg';
import chairImg2 from '../assets/images/chair2.jpeg';
import chairImg3 from '../assets/images/chair3.png';
import chairImg4 from '../assets/images/chair4.jpg';
import tableImg from '../assets/images/Table.jpg';
import lampImg from '../assets/images/Lamp.jpg';
import sofaImg4 from "../assets/images/sofa2.png";
import tableImg4 from "../assets/images/table2.jpg";
import lampImg4 from "../assets/images/lamp2.jpg";
import sofaImg2 from "../assets/images/sofa3.jpg";
import tableImg2 from "../assets/images/table3.jpg";
import lampImg2 from "../assets/images/lamp3.jpg";
import sofaImg3 from "../assets/images/sofa4.jpeg";
import tableImg3 from "../assets/images/table4.jpg";
import lampImg3 from "../assets/images/lamp4.jpg";
import { useState } from 'react';

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

const ProductDetails = () => {
  const { id } = useParams();
  const product = products.find((p) => p.id === parseInt(id, 10));
  const dispatch = useDispatch();
  const [selectedColor, setSelectedColor] = useState(product?.colors[0] || ""); // Default to the first color

  if (!product) {
    return <h2>Product not found</h2>;
  }

  const handleAddToCart = () => {
    dispatch(addToCart({ ...product, selectedColor, uniqueKey: `${product.id}-${selectedColor}` }));
  };

  return (
    <div className="container mx-auto py-16">
      <div className="flex space-x-6">
        <img src={product.image} alt={product.name} className="w-1/2" />
        <div>
          <h1 className="text-3xl font-bold">{product.name}</h1>
          <p className="text-gray-700 text-lg">{product.description}</p>
          <p className="text-yellow-500 text-xl mt-4">${product.price}</p>

          {/* Color Selection */}
          <div className="mt-4">
            <label className="block text-lg font-bold mb-2">Select Color:</label>
            <select
              value={selectedColor}
              onChange={(e) => setSelectedColor(e.target.value)}
              className="border rounded px-4 py-2"
            >
              {product.colors.map((color) => (
                <option key={color} value={color}>
                  {color}
                </option>
              ))}
            </select>
          </div>

          {/* Add to Cart Button */}
          <button
            onClick={handleAddToCart}
            className={`py-2 px-4 mt-4 rounded bg-yellow-500 hover:bg-yellow-600 text-white`}
          >
            Add to Cart
          </button>

          <Link to="/cart">
            <button className="py-2 px-4 mt-4 ml-4 rounded bg-blue-500 hover:bg-blue-600 text-white">
              Go to Cart
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
