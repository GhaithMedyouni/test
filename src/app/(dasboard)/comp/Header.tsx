"use client";

import React from 'react';
import Link from 'next/link';
import { Button } from '@nextui-org/react'; // Assurez-vous que ce package est installé
import { signOut } from 'next-auth/react';

const Header: React.FC = () => {
  return (
    <header className="bg-gray-900 text-white flex justify-between items-center p-4 shadow-md">
      <div className="flex items-center space-x-4">
        {/* Logo de l'application */}
        {/* <img src="/logo.png" alt="Logo" className="w-24 h-auto" /> */}
        
        {/* Menu de navigation */}
        <nav className="flex space-x-6">
          <Link href="/admin">
            <span className="hover:text-gray-400">Dashboard</span>
          </Link>
          <Link href="/user">
            <span className="hover:text-gray-400">Users</span>
          </Link>
          <Link href="/setting">
            <span className="hover:text-gray-400">Settings</span>
          </Link>
        </nav>
      </div>

      {/* Bouton de déconnexion */}
      <Button className="bg-red-500 text-white rounded-full px-2 text-xs ml-2"
        onClick={() => signOut({ redirect: true, callbackUrl: `${window.location.origin}/sign-in` })}
        color="danger" // Assurez-vous que "error" est une couleur valide ou remplacez-la par une couleur valide
      >
        SignOut
      </Button>
    </header>
  );
};

export default Header;
