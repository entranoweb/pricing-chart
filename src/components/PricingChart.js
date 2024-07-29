import React from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer, ErrorBar } from 'recharts';

const data = [
  { name: 'Bland AI', cost: 839, error: [0, 0], info: '(+$299/mo subscription)' },
  { name: 'Synthflow', cost: 900, error: [0, 0], info: '(+$900/mo subscription)' },
  { name: 'Air AI', cost: 660, error: [0, 0], info: '(+$25k-$100k license fee)' },
  { name: 'Vapi AI', cost: 750, error: [150, 150], info: '' }
];

const formatTooltip = (value, name, props) => {
  let costString = props.payload.error[0] === 0 && props.payload.error[1] === 0 ? 
    `$${value}` : 
    `$${value - props.payload.error[0]} - $${value + props.payload.error[1]}`;
  return `${costString} ${props.payload.info}`;
};

const PricingChart = () => {
  return (
    <div className="w-full h-96">
      <h2 className="text-2xl font-bold mb-4 text-center">Synthiq: AI Platform Pricing Comparison</h2>
      <p className="text-center mb-4">Estimated Cost for 100 Hours of Usage</p>
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
          <XAxis dataKey="name" />
          <YAxis label={{ value: 'Cost ($)', angle: -90, position: 'insideLeft' }} />
          <Tooltip formatter={formatTooltip} />
          <Legend />
          <Bar dataKey="cost" fill="#0080FF">
            <ErrorBar dataKey="error" width={4} strokeWidth={2} />
          </Bar>
        </BarChart>
      </ResponsiveContainer>
      <p className="text-sm text-center mt-4">
        Note: Costs shown are for 100 hours of usage. Additional fees apply as indicated. Analysis by Synthiq.
      </p>
    </div>
  );
};

export default PricingChart;