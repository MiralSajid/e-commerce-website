import { Link, NavLink, useNavigate } from 'react-router-dom';
import { useState } from 'react';
const products = [
  { id: 1, name: "Sofa" },
  { id: 2, name: "Wooden Chair" },
  { id: 3, name: "Maze Table" },
  { id: 4, name: "Round Lamp" },
  { id: 5, name: "Large Sofa" },
  { id: 6, name: "Luxury Sofa" },
  { id: 7, name: "Sofa Chair" },
  { id: 8, name: "Round Bottom Table" },
  { id: 9, name: "Stylish Cross Bottom Table" },
  { id: 10, name: "Round Table" },
  { id: 11, name: "Birds Lamp" },
  { id: 12, name: "Stand Lamp" },
  { id: 13, name: "Designer Lamp" },
  { id: 14, name: "Gray/Blue Chair" },
  { id: 15, name: "Office Chair" },
  { id: 16, name: "Pink Office Chair" },
];

const Header = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();

    // Trim spaces and normalize case
    const trimmedQuery = searchQuery.trim().toLowerCase();

    if (!trimmedQuery) {
      navigate('/products'); // Redirect to products page if search is empty
      return;
    }

    const matchedProducts = products.filter((product) =>
      product.name.toLowerCase().includes(trimmedQuery)
    );

    if (matchedProducts.length === 1) {
      navigate(`/product/${matchedProducts[0].id}`);
    } else if (matchedProducts.length > 1) {
      navigate(`/products?search=${encodeURIComponent(trimmedQuery)}`);
    } else {
      alert('No products found. Redirecting to Products page.');
      navigate('/products');
    }
  };

  return (
    <header className="bg-teal-900 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <h1 className="text-2xl font-bold">
          <Link to="/" className="hover:text-yellow-500">
            FurnitureShop
          </Link>
        </h1>

        {/* Navigation Links */}
        <nav className="flex space-x-4">
        <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? "text-yellow-500 font-bold" : ""
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/products"
            className={({ isActive }) =>
              isActive ? "text-yellow-500 font-bold" : ""
            }
          >
            Products
          </NavLink>
          
          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive ? "text-yellow-500 font-bold" : ""
            }
          >
            About
          </NavLink>
          
          <NavLink
            to="/orders"
            
            className={({ isActive }) =>
              isActive ? "text-yellow-500 font-bold" : ""
            
            }
          >
            Orders
          </NavLink> 
        </nav>

        {/* Search Bar and Cart */}
        <div className="flex items-center space-x-4">
          <form onSubmit={handleSearch} className="flex items-center">
            <input
              type="text"
              placeholder="Search..."
              className="p-2 rounded-md text-black focus:outline-none"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <button
              type="submit"
              className="bg-yellow-500 text-white px-4 ml-2 rounded hover:bg-yellow-600"
            >
              Search
            </button>
          </form>
          <Link to="/cart" className="flex items-center space-x-2 hover:text-yellow-500">
            <span className="material-icons text-2xl">shopping_cart</span>
            <img
              src={new URL('/src/assets/images/cart.png', import.meta.url).href}
              alt="Cart Icon"
              className="w-10 h-10 object-contain"
            />
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;

