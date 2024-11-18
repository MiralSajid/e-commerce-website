// components/ProductCard.js
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const ProductCard = ({ product }) => {
  if (!product) return null;

  const { id, name, price, image } = product;

  return (
    <div className="border p-4 rounded-md shadow-md">
      <img
        src={image || '/placeholder.png'}
        alt={name || 'Product Image'}
        className="w-full h-48 object-cover rounded-md"
      />
      <h3 className="text-xl font-bold my-2">{name || 'Product Name'}</h3>
      <p className="text-gray-700">{price ? `$${price}` : 'Price Unavailable'}</p>
      <Link href={`/product/${id || ''}`}>
        <button
          className="bg-teal-600 text-white px-4 py-2 rounded-md mt-4 hover:bg-teal-500"
          disabled={!id}
        >
          View Details
        </button>
      </Link>
    </div>
  );
};

// Validate props
ProductCard.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    name: PropTypes.string,
    price: PropTypes.number,
    image: PropTypes.string,
  }),
};

export default ProductCard;
