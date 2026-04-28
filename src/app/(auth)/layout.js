import Navbar from '@/components/share/navbar';
import React from 'react';

const AuthLayout = ({ children }) => {
  return (
    <>
      <Navbar />
      {children}
    </>
  );
};

export default AuthLayout;