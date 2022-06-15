import React from "react";
import Footer from "./footer";
import Navbar from "./navbar";

const Layout = ({ children }) => {
  return (
    <div className='flex flex-col justify-between min-h-screen bg-neutral-50 text-neutral-900'>
      <div>
        <Navbar />
        {children}
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
