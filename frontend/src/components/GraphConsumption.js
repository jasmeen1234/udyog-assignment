import React from 'react';
import { LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid, ResponsiveContainer } from 'recharts';

const data = [
  { year: 2009, value: 4000 },
  { year: 2010, value: 3000 },
  { year: 2011, value: 2000 },
  { year: 2012, value: 1000 },
  { year: 2013, value: 1500 },
  { year: 2014, value: 500 },
  { year: 2015, value: 1000 },
  { year: 2016, value: 4000 },
  { year: 2017, value: 3000 },
  { year: 2018, value: 8000 },
];

const GraphConsumption = () => {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <LineChart data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="year" />
        <YAxis domain={[0, 4000]} tickFormatter={(value) => value} />
        <Tooltip />
        <Line 
          type="monotone" 
          dataKey="value" 
          stroke="#8884d8" 
          activeDot={{ r: 8 }} 
          dot={props => (props.index % 2 === 0 ? <circle {...props} r={4} /> : null)}
        />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default GraphConsumption;
