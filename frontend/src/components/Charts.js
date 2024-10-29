import React from 'react';
import './Charts.css';
import AverageConsumption from './AverageConsumption';
import GraphConsumption from './GraphConsumption';

function Charts() {
  return (
    <div className="charts">
      <div className="chart">
        <h4>Average Power Consumption</h4>
        <GraphConsumption/></div>
      <div className="chart">
        <h4>Current Power Consumption (kW/h)</h4>
        <AverageConsumption/>
      </div>
    </div>
  );
}

export default Charts;
