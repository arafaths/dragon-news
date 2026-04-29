import Header from '@/components/share/header';
import React from 'react';

const LayoutNews = ({children}) => {
  return (
    <>
      <Header />
      {children}
    </>
  );
};

export default LayoutNews;