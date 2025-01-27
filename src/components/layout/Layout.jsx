import Navbar from "./Navbar";

// src/components/layout/Layout.jsx
const Layout = ({ children }) => {
    return (
      <div className="min-h-screen bg-[#0F172A]"> {/* Darker background */}
        <Navbar />
        <main className="max-w-7xl mx-auto px-6 py-8">
          {children}
        </main>
      </div>
    );
  };

  export default Layout;    
  