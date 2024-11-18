// components/Header.js
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="bg-teal-900 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">FurnitureShop</h1>
        <nav className="flex space-x-4">
          <Link href="/">Home</Link>
          <Link href="/products">Products</Link>
          <Link href="/about">About</Link>
          <Link href="/contact">Contact</Link>
        </nav>
        <div className="flex items-center space-x-4">
          <input
            type="text"
            placeholder="Search..."
            className="p-2 rounded-md"
          />
          <Link href="/cart">
            <span className="material-icons cursor-pointer">shopping_cart</span>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
