import React from 'react';

const MainContent: React.FC = () => {
  return (
    <div className="bg-white shadow-lg rounded-lg p-6">
      <h2 className="text-2xl font-semibold text-gray-800 mb-4">User Statistics</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white">
          <thead>
            <tr>
              <th className="px-4 py-2 border-b-2 border-gray-300 text-left leading-4 text-blue-500 tracking-wider">Name</th>
              <th className="px-4 py-2 border-b-2 border-gray-300 text-left leading-4 text-blue-500 tracking-wider">Email</th>
              <th className="px-4 py-2 border-b-2 border-gray-300 text-left leading-4 text-blue-500 tracking-wider">Role</th>
              <th className="px-4 py-2 border-b-2 border-gray-300 text-left leading-4 text-blue-500 tracking-wider">Status</th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-gray-50">
              <td className="px-4 py-2 border-b border-gray-200">John Doe</td>
              <td className="px-4 py-2 border-b border-gray-200">john@example.com</td>
              <td className="px-4 py-2 border-b border-gray-200">Admin</td>
              <td className="px-4 py-2 border-b border-gray-200 text-green-600">Active</td>
            </tr>
            <tr>
              <td className="px-4 py-2 border-b border-gray-200">Jane Doe</td>
              <td className="px-4 py-2 border-b border-gray-200">jane@example.com</td>
              <td className="px-4 py-2 border-b border-gray-200">User</td>
              <td className="px-4 py-2 border-b border-gray-200 text-red-600">Inactive</td>
            </tr>
            <tr className="bg-gray-50">
              <td className="px-4 py-2 border-b border-gray-200">Mike Ross</td>
              <td className="px-4 py-2 border-b border-gray-200">mike@example.com</td>
              <td className="px-4 py-2 border-b border-gray-200">Editor</td>
              <td className="px-4 py-2 border-b border-gray-200 text-green-600">Active</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MainContent;
