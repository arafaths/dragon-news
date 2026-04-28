import React from 'react';
import Logo from '@/assets/logo.png'
import Image from 'next/image';
import { format } from 'date-fns';

const Header = () => {
  return (
    <div className="text-center space-y-1 pt-4">
      <Image src={Logo} alt="Logo" width={350} className="mx-auto" />
      <p className="text-xl text-gray-500">Journalism Without Fear or Favour</p>
      <p className="text-lg font-semibold text-gray-500">
        <span className='text-gray-700'>{format(new Date(), 'EEEE,')}</span>{' '}
        {format(new Date(), 'MMM dd, yyyy')}
      </p>
    </div>
  );
};

export default Header;