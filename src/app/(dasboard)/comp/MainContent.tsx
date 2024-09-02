'use client'; // Utiliser le mode client

import React, { useEffect, useState } from 'react';

interface ExcelData {
  Date: string;
  UtilisateursActifs: number;
  Ventes: number;
  Revenus: string;
  NouveauxInscrits: number;
}

const MainContent: React.FC = () => {
  const [data, setData] = useState<ExcelData[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    // Récupérer les données de l'API
    const fetchData = async () => {
      try {
        const response = await fetch('/api/excel/importExcel');
        const result = await response.json();
        setData(result);
      } catch (error) {
        console.error('Erreur lors du fetch des données:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <div>Chargement des données...</div>;
  }

  return (
    <div className="bg-white shadow-lg rounded-lg p-6">
      <h2 className="text-2xl font-semibold text-gray-800 mb-4">Statistiques Utilisateurs</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white">
          <thead>
            <tr>
              <th className="px-4 py-2 border-b-2 border-gray-300 text-left leading-4 text-blue-500 tracking-wider">Date</th>
              <th className="px-4 py-2 border-b-2 border-gray-300 text-left leading-4 text-blue-500 tracking-wider">Utilisateurs Actifs</th>
              <th className="px-4 py-2 border-b-2 border-gray-300 text-left leading-4 text-blue-500 tracking-wider">Ventes</th>
              <th className="px-4 py-2 border-b-2 border-gray-300 text-left leading-4 text-blue-500 tracking-wider">Revenus</th>
              <th className="px-4 py-2 border-b-2 border-gray-300 text-left leading-4 text-blue-500 tracking-wider">Nouveaux Inscrits</th>
            </tr>
          </thead>
          <tbody>
            {data.map((row, index) => (
              <tr key={index} className={index % 2 === 0 ? 'bg-gray-50' : ''}>
                <td className="px-4 py-2 border-b border-gray-200">{row.Date}</td>
                <td className="px-4 py-2 border-b border-gray-200">{row.UtilisateursActifs}</td>
                <td className="px-4 py-2 border-b border-gray-200">{row.Ventes}</td>
                <td className="px-4 py-2 border-b border-gray-200">{row.Revenus}</td>
                <td className="px-4 py-2 border-b border-gray-200">{row.NouveauxInscrits}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MainContent;
