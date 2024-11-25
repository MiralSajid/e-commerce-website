import { useDispatch } from 'react-redux';
import { addToCart } from '../features/cartSlice';
import { useParams, Link } from 'react-router-dom';
import sofaImg from '../assets/images/Sofa.jpg';
import chairImg from '../assets/images/chair.jpg';
import tableImg from '../assets/images/table.jpg';
import lampImg from '../assets/images/lamp.jpg';
import { useState } from 'react';

const products = [
  { id: 1, name: "Sofa", price: 1200, description: "A comfortable sofa.", image: sofaImg, category: "Furniture", colors: ["Red", "Blue", "Gray"] },
  { id: 2, name: "Chair", price: 300, description: "A stylish chair.", image: chairImg, category: "Furniture", colors: ["Black", "White", "Green"] },
  { id: 3, name: "Table", price: 500, description: "A sturdy table.", image: tableImg, category: "Furniture", colors: ["Brown", "Black", "White"] },
  { id: 4, name: "Lamp", price: 150, description: "A modern lamp.", image: lampImg, category: "Lighting", colors: ["Yellow", "White", "Orange"] },
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
