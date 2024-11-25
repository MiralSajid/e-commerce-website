
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { useState } from 'react';

// Mock products for search functionality
const products = [
  { id: 1, name: "Sofa" },
  { id: 2, name: "Chair" },
  { id: 3, name: "Table" },
  { id: 4, name: "Lamp" },
];

const Header = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();


    const product = products.find(
      (item) => item.name.toLowerCase() === searchQuery.toLowerCase()
    );

    if (product) {
      // Navigate to the product's details page
      navigate(`/product/${product.id}`);
    } else {
      // Navigate to the products page with the search query
      navigate(`/products?search=${searchQuery}`);
    }
  };

  return (
    <header className="bg-teal-900 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <h1 className="text-2xl font-bold">
          <Link to="/">FurnitureShop</Link>
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
            to="/contact"
            
            className={({ isActive }) =>
              isActive ? "text-yellow-500 font-bold" : ""
            
            }
          >
            Contact
          </NavLink> 
        </nav>

        {/* Search Bar and Cart */}
        <div className="flex items-center space-x-4">
          <form onSubmit={handleSearch} className="flex">
            <input
              type="text"
              placeholder="Search..."
              className="p-2 rounded-md text-black"
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
          <Link to="/cart" className="flex items-center space-x-2">
            <span className="material-icons text-2xl">shopping_cart</span>
            <img
              src="/src/assets/images/cart.png"
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
