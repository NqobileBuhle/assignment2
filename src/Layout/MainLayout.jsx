import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import AddButton from '../Components/AddButton'; // Import the AddButton component

const MainLayout = () => {
  return (
    <div>
      <Navbar />
      
      <Outlet />
      <Footer />
    </div>
  );
};

export default MainLayout;

