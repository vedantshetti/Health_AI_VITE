import React, { useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { clearAuth } from "@/store/authSlice";
import logo from "@/assets/logo.png"; // your uploaded logo

const navLinks = [
  { to: "/leaderboard", label: "Leaderboard" },
  { to: "/claims", label: "Claims" },
  { to: "/influencers", label: "Influencers" },
  { to: "/research-tasks", label: "Research Tasks" },
  { to: "/journals", label: "Scientific Journals" },
];

const NavLink = ({ to, children, onClick }) => {
  const location = useLocation();
  const isActive = location.pathname === to;

  return (
    <Link
      to={to}
      onClick={onClick}
      className={`block px-4 py-2 rounded-md text-base font-medium transition-all duration-200 
        ${
          isActive
            ? "text-white bg-emerald-600/30"
            : "text-gray-300 hover:text-white hover:bg-emerald-600/20"
        }`}
    >
      {children}
    </Link>
  );
};

const Navbar = ({ setBlur }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const { user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const openSidebar = () => {
    setSidebarOpen(true);
    setBlur?.(true);
  };

  const closeSidebar = () => {
    setSidebarOpen(false);
    setBlur?.(false);
  };

  const handleSignOut = () => {
    dispatch(clearAuth());
    closeSidebar();
    navigate("/login");
  };

  return (
    <>
      {/* Navbar */}
      <nav className="backdrop-blur-md bg-[#0F172A]/80 border-b border-gray-800 px-4 sm:px-6 py-3 flex items-center justify-between fixed top-0 left-0 w-full z-50 shadow-lg">
        {/* Logo + Brand */}
        <Link to="/" className="flex items-center space-x-3 min-w-0 group">
          <div className="flex items-center">
            <img
              src={logo}
              alt="VerifyInfluencers Logo"
              className="w-14 h-14 md:w-16 md:h-16 object-scale-down"
              style={{ transform: "scale(1.15)", transformOrigin: "center" }}
            />
          </div>
          <span className="text-white font-semibold text-2xl tracking-wide group-hover:text-emerald-400 transition-colors duration-200">
            VerifyInfluencers
          </span>
        </Link>

        {/* Hamburger Menu (Mobile) */}
        <button
          className="md:hidden flex flex-col justify-center items-center w-8 h-8 focus:outline-none"
          onClick={openSidebar}
          aria-label="Open menu"
        >
          <span className="block h-0.5 w-6 bg-white mb-1"></span>
          <span className="block h-0.5 w-6 bg-white mb-1"></span>
          <span className="block h-0.5 w-6 bg-white"></span>
        </button>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-4 lg:space-x-8">
          {navLinks.map((link) => (
            <NavLink key={link.to} to={link.to}>
              {link.label}
            </NavLink>
          ))}
          {user ? (
            <button
              onClick={handleSignOut}
              className="text-white hover:text-gray-300 px-4 py-2 rounded-md border border-emerald-500 hover:bg-emerald-600/20 transition-all duration-200"
            >
              Sign Out
            </button>
          ) : (
            <Link
              to="/signup"
              className="text-white hover:text-gray-300 px-4 py-2 rounded-md border border-emerald-500 hover:bg-emerald-600/20 transition-all duration-200"
            >
              Sign Up
            </Link>
          )}
        </div>
      </nav>

      {/* Sidebar Overlay */}
      <div
        className={`fixed inset-0 z-40 bg-black bg-opacity-50 transition-opacity duration-300 ${
          sidebarOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
        onClick={closeSidebar}
        aria-hidden={!sidebarOpen}
      />

      {/* Sidebar Drawer */}
      <aside
        className={`fixed top-0 right-0 h-full w-3/4 max-w-xs bg-[#0F172A] shadow-lg z-50 transform transition-transform duration-300 ${
          sidebarOpen ? "translate-x-0" : "translate-x-full"
        } overflow-y-auto border-l border-gray-800`}
        aria-label="Sidebar"
      >
        <div className="flex items-center justify-between px-6 py-4 border-b border-gray-700">
          <Link
            to="/"
            className="flex items-center space-x-3"
            onClick={closeSidebar}
          >
            <img
              src={logo}
              alt="VerifyInfluencers Logo"
              className="w-10 h-10 object-contain"
            />
            <span className="text-white font-semibold text-base truncate">
              VerifyInfluencers
            </span>
          </Link>
          <button
            className="text-gray-300 hover:text-white text-3xl focus:outline-none"
            onClick={closeSidebar}
            aria-label="Close menu"
          >
            &times;
          </button>
        </div>

        <nav className="flex flex-col mt-4 space-y-1 px-4">
          {navLinks.map((link) => (
            <NavLink key={link.to} to={link.to} onClick={closeSidebar}>
              {link.label}
            </NavLink>
          ))}
          <hr className="my-2 border-gray-700" />
          {user ? (
            <button
              onClick={handleSignOut}
              className="text-white hover:text-gray-300 px-4 py-3 text-left w-full rounded-md transition-all duration-200 border border-emerald-500 hover:bg-emerald-600/20"
            >
              Sign Out
            </button>
          ) : (
            <Link
              to="/signup"
              onClick={closeSidebar}
              className="text-white hover:text-gray-300 px-4 py-3 text-left w-full rounded-md transition-all duration-200 border border-emerald-500 hover:bg-emerald-600/20"
            >
              Sign Up
            </Link>
          )}
        </nav>
      </aside>
    </>
  );
};

export default Navbar;
