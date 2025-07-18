import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { clearAuth } from "../../store/authSlice";

const NavLink = ({ to, children, onClick }) => (
  <Link
    to={to}
    className="block px-4 py-3 rounded text-gray-300 hover:text-white hover:bg-emerald-600 transition-colors text-lg"
    onClick={onClick}
  >
    {children}
  </Link>
);

const navLinks = [
  { to: "/leaderboard", label: "Leaderboard" },
  { to: "/claims", label: "Claims" },
  { to: "/influencers", label: "Influencers" },
  { to: "/research-tasks", label: "Research Tasks" },
  { to: "/journals", label: "Scientific Journals" },
];

const Navbar = ({ setBlur }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const { user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const openSidebar = () => {
    setSidebarOpen(true);
    setBlur(true);
  };
  const closeSidebar = () => {
    setSidebarOpen(false);
    setBlur(false);
  };

  const handleSignOut = () => {
    dispatch(clearAuth());

    closeSidebar();
    navigate("/login");
  };

  return (
    <>
      {!sidebarOpen && (
        <nav className="bg-[#0F172A] px-2 sm:px-4 py-3 flex items-center justify-between border-b border-gray-800 fixed top-0 left-0 w-full z-50">
          <Link to="/" className="flex items-center space-x-2 min-w-0">
            <div className="w-7 h-7 bg-emerald-500 rounded-md flex items-center justify-center">
              <span className="text-white text-lg">✓</span>
            </div>
            <span className="text-white font-semibold text-base truncate">
              VerifyInfluencers
            </span>
          </Link>
          <button
            className="md:hidden flex flex-col justify-center items-center w-8 h-8 focus:outline-none"
            onClick={openSidebar}
            aria-label="Open menu"
          >
            <span className="block h-0.5 w-6 bg-white mb-1"></span>
            <span className="block h-0.5 w-6 bg-white mb-1"></span>
            <span className="block h-0.5 w-6 bg-white"></span>
          </button>
          <div className="hidden md:flex items-center space-x-4 lg:space-x-8">
            {navLinks.map((link) => (
              <NavLink key={link.to} to={link.to}>
                {link.label}
              </NavLink>
            ))}
            {user ? (
              <button
                className="text-white hover:text-gray-300 px-4 py-2 rounded transition-colors"
                onClick={handleSignOut}
              >
                Sign Out
              </button>
            ) : (
              <Link
                to="/signup"
                className="text-white hover:text-gray-300 px-4 py-2 rounded transition-colors"
              >
                Sign Up
              </Link>
            )}
          </div>
        </nav>
      )}

      {/* Sidebar Drawer for Mobile (Right Side) */}
      <div
        className={`fixed inset-0 z-40 bg-black bg-opacity-40 transition-opacity duration-300 ${
          sidebarOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
        onClick={closeSidebar}
        aria-hidden={!sidebarOpen}
      />

      {sidebarOpen && (
        <aside
          className={`fixed top-0 right-0 h-full w-3/4 max-w-xs
            bg-gradient-to-br from-blue-50 via-green-50 to-blue-100
            dark:from-gray-900 dark:via-gray-900 dark:to-gray-900
            shadow-lg z-50 transform transition-transform duration-300 ${
              sidebarOpen ? "translate-x-0" : "translate-x-full"
            } overflow-y-auto`}
          aria-label="Sidebar"
        >
          <div className="flex items-center justify-between px-6 py-4 border-b border-gray-800">
            <Link
              to="/"
              className="flex items-center space-x-2 min-w-0"
              onClick={closeSidebar}
            >
              <div className="w-7 h-7 bg-emerald-500 rounded-md flex items-center justify-center">
                <span className="text-white text-lg">✓</span>
              </div>
              <span className="text-white font-semibold text-base truncate">
                VerifyInfluencers
              </span>
            </Link>
            <button
              className="text-gray-300 hover:text-white text-2xl focus:outline-none"
              onClick={closeSidebar}
              aria-label="Close menu"
            >
              &times;
            </button>
          </div>
          <nav className="flex flex-col space-y-2 mt-6 px-2">
            {navLinks.map((link) => (
              <NavLink key={link.to} to={link.to} onClick={closeSidebar}>
                {link.label}
              </NavLink>
            ))}
            <hr className="my-2 border-gray-700" />
            {user ? (
              <button
                className="text-white hover:text-gray-300 px-4 py-3 text-left w-full rounded transition-colors"
                onClick={handleSignOut}
              >
                Sign Out
              </button>
            ) : (
              <Link
                to="/signup"
                className="text-white hover:text-gray-300 px-4 py-3 text-left w-full rounded transition-colors"
                onClick={closeSidebar}
              >
                Sign Up
              </Link>
            )}
          </nav>
        </aside>
      )}
    </>
  );
};

export default Navbar;
