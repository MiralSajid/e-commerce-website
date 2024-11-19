import { useCart } from "../components/CartContext";

const CartPage = () => {
  const { state } = useCart();
  const totalAmount = state.items.reduce((total, item) => {
    const price = parseFloat(item.price.replace('$', ''));
    return total + price;
  }, 0);

  if (state.items.length === 0) {
    return <h2 className="text-center mt-8">Your cart is empty!</h2>;
  }

  return (
    <div className="container mx-auto py-16">
      <h2 className="text-2xl font-bold mb-6">Your Shopping Cart</h2>
      <table className="w-full border">
        <thead>
          <tr>
            <th className="border p-4">Product</th>
            <th className="border p-4">Price</th>
          </tr>
        </thead>
        <tbody>
          {state.items.map((item) => (
            <tr key={item.id}>
              <td className="border p-4">{item.name}</td>
              <td className="border p-4">{item.price}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="mt-6">
        <h3 className="text-xl font-bold">Total Amount: ${totalAmount.toFixed(2)}</h3>
      </div>
      <div className="mt-8">
        <h3 className="text-lg font-bold">Choose a Payment Method:</h3>
        <div className="flex space-x-4 mt-4">
          <button className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600">
            PayPal
          </button>
          <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
            Credit Card
          </button>
          <button className="bg-yellow-500 text-white px-4 py-2 rounded hover:bg-yellow-600">
            Cash on Delivery
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
