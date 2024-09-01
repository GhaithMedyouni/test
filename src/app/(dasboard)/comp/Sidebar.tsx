import React from 'react';
import { FiHome, FiUsers, FiSettings } from 'react-icons/fi';
import Link from 'next/link';


const Sidebar: React.FC = () => {
  return (
    <aside className="w-64 bg-gray-900 text-white p-6 space-y-6">
      <ul>
        <li className="flex items-center space-x-3 hover:bg-gray-700 p-3 rounded">
          <FiHome className="text-gray-400 text-lg" />
          <Link href="/">
            Home
          </Link>
        </li>
        <li className="flex items-center space-x-3 hover:bg-gray-700 p-3 rounded">
          <FiUsers className="text-gray-400 text-lg" />
          <Link href="/pages/users" >
            Users
          </Link>
        </li>
        <li className="flex items-center space-x-3 hover:bg-gray-700 p-3 rounded">
          <FiSettings className="text-gray-400 text-lg" />
          <Link href="/pages/settings">
            Settings
          </Link>
        </li>
      </ul>
    </aside>
  );
};

export default Sidebar;
