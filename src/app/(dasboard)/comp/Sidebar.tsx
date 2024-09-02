// components/Sidebar.tsx
import React from 'react';
import Link from 'next/link';


const Sidebar: React.FC = () => {
  return (
    <aside className="w-64 bg-gray-800 text-white p-4 flex flex-col h-screen">
      <div className="mb-8">
        <img src="/logo.png" alt="Logo" className="w-32" />
      </div>
      <nav>
        <ul className="flex-1">
          <li className="mb-4">
            <Link href="/admin" className="flex items-center space-x-2">
              <span>Dashboard</span>
            </Link>
          </li>
          <li className="mb-4">
            <Link href="/user" className="flex items-center space-x-2">
              <span>Users</span>
              
            </Link>
          </li>
          <li className="mb-4">
            <Link href="/setting" className="flex items-center space-x-2">
              <span>Settings</span>
            </Link>
          </li>
        </ul>
        
      </nav>
    </aside>
  );
};

export default Sidebar;
