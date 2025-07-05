import React, { useState } from "react";
import Navbar from "./Navbar";

const Layout = ({ children }) => {
  const [blur, setBlur] = useState(false);

  return (
    <div className="min-h-screen bg-[#0F172A] overflow-x-hidden relative">
      <Navbar setBlur={setBlur} />
      <div className="h-14 md:h-16" />
      {/* Main content with blur when sidebar is open */}
      <main
        className={`max-w-7xl mx-auto px-4 sm:px-6 py-8 transition-all duration-300 ${
          blur ? "filter blur-sm pointer-events-none select-none" : ""
        }`}
      >
        {children}
      </main>
    </div>
  );
};

export default Layout;
