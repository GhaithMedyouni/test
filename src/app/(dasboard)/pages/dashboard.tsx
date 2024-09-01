import React from 'react';

import Sidebar from '../comp/Sidebar';
import MainContent from '../comp/MainContent';
import Footer from '../comp/Footer';

const Dashboard: React.FC = () => {
  return (
    <div className="min-h-screen flex">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        
        <MainContent />
        <Footer />
      </div>
    </div>
  );
};

export default Dashboard;
