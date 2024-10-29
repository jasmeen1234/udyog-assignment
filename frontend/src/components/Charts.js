import React from 'react';
import './Charts.css';
import AverageConsumption from './AverageConsumption';

function Charts() {
  return (
    <div className="charts">
      <div className="chart"><AverageConsumption/></div>
      <div className="chart">Current Power Consumption (kW/h)</div>
    </div>
  );
}

export default Charts;
