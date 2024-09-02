// components/DataTable.tsx
import React from 'react';

interface DataTableProps {
  data: Array<{ date: string; userActif: number; vente: number; revenus: number; nouveauxInscrits: number }>;
}

const DataTable: React.FC<DataTableProps> = ({ data }) => {
  return (
    <table className="min-w-full divide-y divide-gray-200">
      <thead className="bg-gray-50">
        <tr>
          <th>Date</th>
          <th>User Actif</th>
          <th>Vente</th>
          <th>Revenus</th>
          <th>Nouveaux Inscrits</th>
        </tr>
      </thead>
      <tbody className="bg-white divide-y divide-gray-200">
        {data.map((item, index) => (
          <tr key={index}>
            <td>{item.date}</td>
            <td>{item.userActif}</td>
            <td>{item.vente}</td>
            <td>{item.revenus}</td>
            <td>{item.nouveauxInscrits}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default DataTable;
