import React from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend, ErrorBar, ResponsiveContainer } from 'recharts';

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
    <div style={{width: '100%', height: '100vh', padding: '20px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}}>
      <h2 style={{fontSize: '24px', fontWeight: 'bold', marginBottom: '10px'}}>Synthiq: AI Platform Pricing Comparison</h2>
      <p style={{fontSize: '16px', marginBottom: '20px'}}>Estimated Cost for 100 Hours of Usage</p>
      <div style={{width: '100%', height: '400px'}}>
        <ResponsiveContainer>
          <BarChart
            data={data}
            margin={{ top: 20, right: 30, left: 20, bottom: 20 }}
          >
            <XAxis dataKey="name" />
            <YAxis label={{ value: 'Cost ($)', angle: -90, position: 'insideLeft', offset: -5 }} />
            <Tooltip formatter={formatTooltip} />
            <Legend verticalAlign="top" height={36}/>
            <Bar dataKey="cost" fill="#0080FF">
              <ErrorBar dataKey="error" width={4} strokeWidth={2} />
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>
      <p style={{fontSize: '14px', marginTop: '20px', textAlign: 'center', maxWidth: '600px'}}>
        Note: Costs shown are for 100 hours of usage. Additional fees apply as indicated. Analysis by Synthiq.
      </p>
    </div>
  );
};

export default PricingChart;