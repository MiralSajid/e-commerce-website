
import { Link } from 'react-router-dom';
import sofaImg from '../assets/images/Sofa.jpg';
import chairImg from '../assets/images/chair.jpg';
import tableImg from '../assets/images/table.jpg';
import lampImg from '../assets/images/lamp.jpg';

const products = [
  { id: 1, name: "Sofa", price: "$1200", image: sofaImg },
  { id: 2, name: "Chair", price: "$300", image: chairImg },
  { id: 3, name: "Table", price: "$500", image: tableImg },
  { id: 4, name: "Lamp", price: "$150", image: lampImg },
];

const ProductGrid = () => {
  return (
    <section id="products" className="py-16">
      <div className="container mx-auto">
        <h2 className="text-2xl font-bold mb-6">Trending Products for You</h2>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
          {products.map((product) => (
            <div key={product.id} className="border p-4 text-center">
              <img src={product.image} alt={product.name} className="mb-4 w-full h-49 object-cover" />
              <h3 className="text-lg font-bold">{product.name}</h3>
              <p className="text-gray-700">{product.price}</p>
              <Link to={`/product/${product.id}`}>
                <button className="bg-yellow-500 text-white py-2 px-4 mt-4 rounded hover:bg-yellow-600">
                  View Details
                </button>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductGrid;
