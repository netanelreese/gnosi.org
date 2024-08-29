import React from 'react';
import Sidebar from './Sidebar';

function Dashboard() {
  return (
    <div className="dashboard">
      <Sidebar />
      <div className="content">
        <h1>Dashboard</h1>
        <p>Welcome to your home server dashboard.</p>
      </div>
    </div>
  );
}

export default Dashboard;
