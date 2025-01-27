// src/components/layout/Navbar.jsx
import { Link } from 'react-router-dom';

const NavLink = ({ to, children }) => (
  <Link 
    to={to}
    className="text-gray-300 hover:text-white transition-colors"
  >
    {children}
  </Link>
);

// src/components/layout/Navbar.jsx
const Navbar = () => {
    return (
      <nav className="bg-[#0F172A] px-6 py-4 flex items-center justify-between border-b border-gray-800">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-emerald-500 rounded-md flex items-center justify-center">
            <span className="text-white text-xl">✓</span>
          </div>
          <span className="text-white font-semibold">VerifyInfluencers</span>
        </div>
        
        <div className="flex items-center space-x-8">
          <NavLink to="/leaderboard">Leaderboard</NavLink>
          <NavLink to="/products">Products</NavLink>
          <NavLink to="/monetization">Monetization</NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/contact">Contact</NavLink>
          <NavLink to="/admin">Admin</NavLink>
          <button className="text-white hover:text-gray-300">
            Sign Out
          </button>
        </div>
      </nav>
    );
  };
  
export default Navbar;
