import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';

const Layout = () => {
  return (
    <div className="layout-root">
      <div className="ambient-light" />
      
      <Navbar />
      
      <main>
        <Outlet />
      </main>
      
      <Footer />
    </div>
  );
};

export default Layout;
