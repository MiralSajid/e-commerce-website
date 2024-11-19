
import { useParams } from 'react-router-dom';
import sofaImg from '../assets/images/Sofa.jpg';
import chairImg from '../assets/images/chair.jpg';
import tableImg from '../assets/images/table.jpg';
import lampImg from '../assets/images/lamp.jpg';
import { useCart } from './CartContext';

const products = [
  { id: 1, name: "Sofa", price: "$1200", description: "A comfortable sofa.", image: sofaImg  },
  { id: 2, name: "Chair", price: "$300", description: "A stylish chair.", image: chairImg },
  { id: 3, name: "Table", price: "$500", description: "A sturdy table.", image: tableImg },
  { id: 4, name: "Lamp", price: "$150", description: "A modern lamp.", image:lampImg },
];

const ProductDetails = () => {
  const { state, dispatch } = useCart();
  const { id } = useParams();
  const product = products.find((p) => p.id === parseInt(id));
  const isAddedToCart = state.items.some((item) => item.id === product.id);
  
  const handleAddToCart = () => {
    if (!isAddedToCart) {
      dispatch({ type: 'ADD_TO_CART', payload: product });
    }
  };
  const handleRemoveFromCart = () => {
    if(isAddedToCart){
    dispatch({ type: 'REMOVE_FROM_CART', payload: { id: product.id } });
    }
  };
  if (!product) {
    return <h2>Product not found</h2>;
  }

  return (
    <div className="container mx-auto py-16">
      <div className="flex space-x-6">
        <img src={product.image} alt={product.name} className="w-1/2" />
        <div>
          <h1 className="text-3xl font-bold">{product.name}</h1>
          <p className="text-gray-700 text-lg">{product.description}</p>
          <p className="text-yellow-500 text-xl mt-4">{product.price}</p>
          <button
            onClick={handleAddToCart}
            className={`py-2 px-4 mt-4 rounded ${isAddedToCart ? 'bg-gray-400' : 'bg-yellow-500 hover:bg-yellow-600'} text-white`}
            disabled={isAddedToCart}
          >
            {isAddedToCart ? 'Added to Cart' : 'Add to Cart'}
          </button>
          <br />
          
          {/* Remove from Cart Button */}
          {isAddedToCart && (
            <button
              onClick={handleRemoveFromCart}
              className="py-2 px-4 mt-4 rounded bg-red-500 hover:bg-red-600 text-white"
            >
              Remove From Cart
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
