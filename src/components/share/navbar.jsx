'use client';
import Link from 'next/link';
import React from 'react';
import User from '@/assets/user.png';
import Image from 'next/image';
import NavLink from './navlink';
import { authClient } from '@/lib/auth-client';

const Navbar = () => {
  const { data: session, isPending } = authClient.useSession();
  const user = session?.user;

  console.log(user);

  return (
    <div className="flex items-center justify-between container mx-auto mt-2 px-5 pb-2">
      <ul className="absolute left-1/2 transform -translate-x-1/2 flex gap-6 text-gray-600">
        <li>
          <NavLink href={'/'}>Home</NavLink>
        </li>
        <li>
          <NavLink href={'/about'}>About</NavLink>
        </li>
        <li>
          <NavLink href={'/career'}>Career</NavLink>
        </li>
      </ul>

      {isPending ? (
        <span className="loading loading-dots loading-xl"></span>
      ) : user ? (
        <div className="flex gap-3 ml-auto items-center">
          <p className="text-lg font-semibold text-gray-700">
            Hello, <span>{user?.name}</span>
          </p>
          <Image src={User} width={30} alt="User icon" />
          <Link href={'/signin'}>
            <button className=" bg-gray-800 text-white font-semibold rounded-none text-lg py-1 px-4">
              Logout
            </button>
          </Link>
        </div>
      ) : (
        <div className="flex gap-3 ml-auto items-center">
          <Link href={'/signin'}>
            <button className=" bg-gray-800 text-white font-semibold rounded-none text-lg py-1 px-4">
              Login
            </button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Navbar;
