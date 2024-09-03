// components/Sidebar.tsx
"use client";
import React from 'react';
import Link from 'next/link';
import { HandMetal } from 'lucide-react';



const Sidebar: React.FC = () => {
  return (
    <aside className="fixed top-0 left-0 h-screen w-64 bg-gray-800 text-white p-4">
      <div className="mb-8">
      <Link href='/'>
          <HandMetal/>
         </Link>
      </div>
      <nav>
        <ul>
          <li className="mb-4">
            <Link href="/admin" passHref>
              <span className="flex items-center space-x-2 hover:text-gray-400">Dashboard</span>
            </Link>
          </li>
          <li className="mb-4">
            <Link href="/user" passHref>
              <span className="flex items-center space-x-2 hover:text-gray-400">Users</span>
            </Link>
          </li>
          <li className="mb-4">
            <Link href="/setting" passHref>
              <span className="flex items-center space-x-2 hover:text-gray-400">Settings</span>
            </Link>
          </li>
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
