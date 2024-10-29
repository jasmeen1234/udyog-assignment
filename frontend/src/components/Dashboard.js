// Dashboard.js
import React from 'react';
import PowerCard from './PowerCard';
import Charts from './Charts';
import './Dashboard.css'; // Ensure this has styles for your layout
import { powerData } from '../data';

function Dashboard() {
  return (
    <div className="dashboard">
      <h2>Dashboard</h2>
      <div className="dashboard-cards" >
        {powerData.map((data, index) => (
          <PowerCard key={index} data={data} />
        ))}
      </div>
      <div></div>
      <div className="charts-section">
        <Charts />
      </div>
    </div>
  );
}

export default Dashboard;
