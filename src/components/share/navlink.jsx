'use client'
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

const NavLink = ({ href, children }) => {
  const pathname = usePathname();
  return <Link href={href} className={`${href === pathname ? 'border-b-2 border-b-gray-500' : ''}`}>{ children}</Link>;
};

export default NavLink;