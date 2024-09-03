"use client";

import React, { useEffect, useState } from 'react';
import LineChart from './LineChart'; // Adjust the import path
import ColumnChart from './ColumnChart'; // Adjust the import path
import PieChart from './PieChart'; // Adjust the import path
import DataTable from './DataTable'; // Adjust the import path

const DashboardPage: React.FC = () => {
  const [data, setData] = useState<any[]>([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch('/api/getData'); // Replace with your API endpoint
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const result = await response.json();
        setData(result);
      } catch (error) {
        console.error('Fetch data failed:', error);
      }
    }

    fetchData();
    const interval = setInterval(fetchData, 60000); // Refresh data every minute
    return () => clearInterval(interval);
  }, []);

  const lineChartData = data.map((item: any) => ({
    date: item.date,
    value: item.userActif
  }));

  const columnChartData = data.map((item: any) => ({
    date: item.date,
    value: item.vente
  }));

  const pieChartData = [
    { category: 'Ventes', value: data.reduce((sum, item) => sum + item.vente, 0) },
    { category: 'Revenus', value: data.reduce((sum, item) => sum + item.revenus, 0) }
  ];

  // Define the DataTable data and columns
  const datatableData = data.map((item: any) => ({
    date: item.date,
    userActif: item.userActif,
    vente: item.vente,
    revenus: item.revenus,
    nouveauxInscrits: item.nouveauxInscrits
  }));

  const datatableColumns = [
    { header: 'Date', accessor: 'date' },
    { header: 'Utilisateurs Actifs', accessor: 'userActif' },
    { header: 'Ventes', accessor: 'vente' },
    { header: 'Revenus', accessor: 'revenus' },
    { header: 'Nouveaux Inscrits', accessor: 'nouveauxInscrits' }
  ];

  return (
    <div className="container mx-auto p-4" style={{ padding: '100px', margin: 'auto' }}>
      {/* <h1 className="text-2xl font-bold mb-4">Dashboard</h1> */}

      <div className="mb-8">
      <h2 className="text-lg font-semibold text-red-600 mb-4">Utilisateurs Actifs au Fil du Temps</h2>

        <LineChart data={lineChartData} />
      </div>

      <div className="mb-12 pt-6"> {/* Adjusted margin-top and padding-top */}
        <h2 className="text-lg font-semibold text-red-600 mb-4">Table des Utilisateurs Actifs</h2>
        <DataTable
       // Ensure to pass columns to DataTable
          data={datatableData}
        />
      </div>

      <div className="mb-8">
        <h2 className="text-lg font-semibold text-red-600 mb-4">Ventes par Jour</h2>
        <ColumnChart data={columnChartData} />
      </div>

      <div className="mb-8">
        <h2 className="text-lg font-semibold text-red-600 mb-4">Répartition des Revenus</h2>
        <PieChart data={pieChartData} />
      </div>
    </div>
  );
};

export default DashboardPage;
