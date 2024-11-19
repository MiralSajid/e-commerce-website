import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-blue-500 p-4">
      <div className="flex gap-5">
        
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? 'text-yellow-500 font-bold' : 'text-white'
          }
        >
          Home
        </NavLink>

        {/* Products Link */}
        <NavLink
          to="/products"
          className={({ isActive }) =>
            isActive ? 'text-yellow-500 font-bold' : 'text-white'
          }
        >
          Products
        </NavLink>

        {/* Contact Link */}
        <NavLink
          to="/contact"
          className={({ isActive }) =>
            isActive ? 'text-yellow-500 font-bold' : 'text-white'
          }
        >
          Contact
        </NavLink>

        {/* About Link */}
        <NavLink
          to="/about"
          className={({ isActive }) =>
            isActive ? 'text-yellow-500 font-bold' : 'text-white'
          }
        >
          About
        </NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
