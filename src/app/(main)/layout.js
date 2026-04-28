import BreackingNews from '@/components/share/breackingnews';
import Header from '@/components/share/header';
import Navbar from '@/components/share/navbar';
import React from 'react';

const MainLayout = ({ children }) => {
  return (
    <>
      <Header />
      <BreackingNews/>
      <Navbar />
      {children}
    </>
  );
};

export default MainLayout;
