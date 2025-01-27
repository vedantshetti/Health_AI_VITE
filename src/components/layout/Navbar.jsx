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

const Navbar = () => {
  return (
    <nav className="bg-secondary px-6 py-4 flex items-center justify-between">
      <div className="flex items-center space-x-2">
        <img 
          src="/logo.svg" 
          alt="VerifyInfluencers" 
          className="h-8"
        />
        <span className="text-white font-semibold">VerifyInfluencers</span>
      </div>
      
      <div className="flex items-center space-x-6">
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
