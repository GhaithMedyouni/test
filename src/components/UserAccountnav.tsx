'use client';
import { Button } from "./ui/button";
import { signOut } from "next-auth/react";
import { FiLogOut, FiSettings, FiUsers, FiHome } from 'react-icons/fi';
import React from 'react';

const UserAccountnav: React.FC = () => {
  return (
    <header className="bg-white shadow-md p-4 flex justify-between items-center">
      <div className="text-2xl font-bold text-blue-600">Dashboard</div>
      <nav>
        <ul className="flex space-x-4">
          <li className="flex items-center space-x-2">
            <FiHome className="text-blue-500 text-lg" />
            <a href="/" className="text-gray-700 hover:text-blue-600">Home</a>
          </li>
          <li className="flex items-center space-x-2">
            <FiUsers className="text-blue-500 text-lg" />
            <a href="/users" className="text-gray-700 hover:text-blue-600">Users</a>
          </li>
          <li className="flex items-center space-x-2">
            <FiSettings className="text-blue-500 text-lg" />
            <a href="/settings" className="text-gray-700 hover:text-blue-600">Settings</a>
          </li>
        </ul>
      </nav>
      <Button onClick={() => signOut({
        redirect: true,
        callbackUrl: `${window.location.origin}/sign-in`,
       })} variant='destructive'>Sign out</Button>
        
    </header>
    )
  }
    

export default UserAccountnav