import React from 'react';
import './PowerCard.css';

function PowerCard({ data }) {
  return (
    <div className="power-card">
      <h3>{data.device}</h3>
      <p>Power Consumption: {data.consumption}</p>
    </div>
  );
}

export default PowerCard;
