// components/DataTable.tsx
import React from 'react';

interface DataTableProps {
  data: Array<{ date: string; userActif: number; vente: number; revenus: number; nouveauxInscrits: number }>;
}

const DataTable: React.FC<DataTableProps> = ({ data }) => {
  return (
    <table className="min-w-full bg-white border border-gray-200 rounded-lg shadow-md">
  <thead className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white">
    <tr>
      <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">Date</th>
      <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">User Actif</th>
      <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">Vente</th>
      <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">Revenus</th>
      <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">Nouveaux Inscrits</th>
    </tr>
  </thead>
  <tbody className="divide-y divide-gray-200">
    {data.map((item, index) => (
      <tr key={index} className="hover:bg-gray-50">
        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{item.date}</td>
        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{item.userActif}</td>
        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{item.vente}</td>
        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{item.revenus}</td>
        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{item.nouveauxInscrits}</td>
      </tr>
    ))}
  </tbody>
</table>

  );
};

export default DataTable;
