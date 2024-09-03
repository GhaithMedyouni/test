// components/Header.tsx
"use client";
import React from 'react';
import Link from 'next/link';
import { Button } from '@nextui-org/react'; 
import { signOut } from 'next-auth/react';

const Header: React.FC = () => {
  return (
    <header className="fixed top-0 left-64 right-0 h-16 bg-gray-900 text-white flex justify-between items-center p-4 shadow-md z-10">
      <nav className="flex space-x-6">
        <Link href="/admin" passHref>
          <span className="hover:text-gray-400">Dashboard</span>
        </Link>
        <Link href="/user" passHref>
          <span className="hover:text-gray-400">Users</span>
        </Link>
        <Link href="/setting" passHref>
          <span className="hover:text-gray-400">Settings</span>
        </Link>
      </nav>
      <Button
  onClick={() => signOut({ redirect: true, callbackUrl: `${window.location.origin}/sign-in` })}
  className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
>
  SignOut
</Button>

    </header>
  );
};

export default Header;
