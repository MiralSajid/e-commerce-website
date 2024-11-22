import { useSelector, useDispatch } from 'react-redux';
import { addToCart } from '../features/cartSlice';
import { useParams } from 'react-router-dom';
import sofaImg from '../assets/images/Sofa.jpg';
import chairImg from '../assets/images/chair.jpg';
import tableImg from '../assets/images/table.jpg';
import lampImg from '../assets/images/lamp.jpg';
const products = [
  { id: 1, name: "Sofa", price: "1200", description: "A comfortable sofa.", image: sofaImg  },
  { id: 2, name: "Chair", price: "300", description: "A stylish chair.", image: chairImg },
  { id: 3, name: "Table", price: "500", description: "A sturdy table.", image: tableImg },
  { id: 4, name: "Lamp", price: "150", description: "A modern lamp.", image:lampImg },
];
const ProductDetails = () => {
  const { id } = useParams();
  const product = products.find((p) => p.id === parseInt(id,10));
  const cartItems = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();

  if (!product) {
    return <h2>Product not found</h2>;
  }

  const isAddedToCart = cartItems.some((item) => item.id === product.id);

  const handleAddToCart = () => {
    dispatch(addToCart(product));
  };

  return (
    <div className="container mx-auto py-16">
      <div className="flex space-x-6">
        <img src={product.image} alt={product.name} className="w-1/2" />
        <div>
          <h1 className="text-3xl font-bold">{product.name}</h1>
          <p className="text-gray-700 text-lg">{product.description}</p>
          <p className="text-yellow-500 text-xl mt-4">${product.price}</p>
          <button
            onClick={handleAddToCart}
            className={`py-2 px-4 mt-4 rounded ${
              isAddedToCart ? 'bg-gray-400' : 'bg-yellow-500 hover:bg-yellow-600'
            } text-white`}
            disabled={isAddedToCart}
          >
            {isAddedToCart ? 'Added to Cart' : 'Add to Cart'}
          </button>
        </div>
      </div>
    </div>
  );
};



export default ProductDetails;
