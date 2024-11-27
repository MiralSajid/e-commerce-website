import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { removeFromCart, updateQuantity, clearCart } from '../features/cartSlice';
import { useState } from 'react';

const CartPage = () => {
  const items = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState('');
  const [paymentError, setPaymentError] = useState('');

  // Fixing Total Cost Calculation
  const totalCost = items.reduce((sum, item) => sum + parseFloat(item.price) * item.quantity, 0);

  const handleQuantityChange = (uniqueKey, quantity) => {
    if (quantity >= 1) {
      dispatch(updateQuantity({ uniqueKey, quantity }));
    }
  };
  const handleRemove = (uniqueKey) => {
    dispatch(removeFromCart({ uniqueKey }));
  };

  const handlePayment = () => {
    if (!selectedPaymentMethod) {
      setPaymentError('Please select a payment method.');
    } else {
      setPaymentError('');
      alert(`Payment successful via ${selectedPaymentMethod}. Total: ${totalCost.toFixed(2)}`);
      dispatch(clearCart());
    }
  };

  return (
    <div className="container mx-auto py-16">
      <h1 className="text-2xl font-bold mb-6">Shopping Cart</h1>
      {items.length === 0 ? (
        <p>
          Your cart is empty.{' '}
          <Link to="/products" className="text-teal-600">
            Continue shopping
          </Link>
        </p>
      ) : (
        <div>
          <ul className="mb-6">
            {items.map((item) => (
              <li
                key={item.uniqueKey}
                className="flex justify-between items-center mb-4 border-b pb-4"
              >
                <div>
                  <h2 className="text-lg font-bold">{item.name}</h2>
                  <p>Colour:{item.selectedColor}</p>
                  <p>Price: ${item.price}</p>
                  <div className="flex items-center space-x-4">
                    <label>
                      Quantity:
                      <input
                        type="number"
                        value={item.quantity}
                        min="1"
                        onChange={(e) =>
                          handleQuantityChange(item.uniqueKey, parseInt(e.target.value))
                        }
                        className="ml-2 border rounded px-2 w-16"
                      />
                    </label>
                  </div>
                </div>
                <button
                 onClick={() => handleRemove(item.uniqueKey)}
                 className="bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600"
               >
                  Remove
                </button>
              </li>
            ))}
          </ul>
          <h2 className="text-xl font-bold">Total: ${totalCost.toFixed(2)}</h2>

          {/* Payment Section */}
          <div className="mt-8">
            <h3 className="text-lg font-bold mb-4">Select Payment Method:</h3>
            <div className="flex flex-col space-y-4">
              <label className="flex items-center">
                <input
                  type="radio"
                  name="paymentMethod"
                  value="Credit Card"
                  onChange={(e) => setSelectedPaymentMethod(e.target.value)}
                  className="mr-2"
                />
                Credit Card
              </label>
              <label className="flex items-center">
                <input
                  type="radio"
                  name="paymentMethod"
                  value="PayPal"
                  onChange={(e) => setSelectedPaymentMethod(e.target.value)}
                  className="mr-2"
                />
                PayPal
              </label>
              <label className="flex items-center">
                <input
                  type="radio"
                  name="paymentMethod"
                  value="Cash on Delivery"
                  onChange={(e) => setSelectedPaymentMethod(e.target.value)}
                  className="mr-2"
                />
                Cash on Delivery
              </label>
            </div>
            {paymentError && (
              <p className="text-red-500 mt-2">{paymentError}</p>
            )}
            <button
              onClick={handlePayment}
              className="mt-6 py-2 px-4 rounded bg-green-500 hover:bg-green-600 text-white"
            >
              Pay Now
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CartPage;
