import React from 'react';
import { LineChart, Line, XAxis, YAxis, Label, ResponsiveContainer } from 'recharts';
import Title from './Title';

// Generate Sales Data
function createData(time, amount) {
  return { time, amount };
}

const data = [
  createData('1', 300),
  createData('2', 600),
  createData('3', 700),
  createData('4', 1000),
  createData('5', 1200),
  createData('6', 1400),
  createData('7', 2000),
  createData('8', 1900),
  createData('9', 1000),
  createData('10', 1300),
  createData('11', 1500),
  createData('12', 1800),
  createData('13', 1900),
  createData('14', 2000),
  createData('15', 2500),
  createData('16', 2300),
  createData('17', 2400),
  createData('18', 2600),
  createData('19', 2600),
  createData('20', 2700),
  createData('21', 3000),
  createData('22', 3400),
  createData('23', 3500),
  createData('24', 3900),
  createData('25', 4000),
  createData('26', 4300),
  createData('27', 4100),
  createData('28', 4300),
  createData('29', 4400),
  createData('20', 4500),


];

export default function ChartDias() {
  return (
    <React.Fragment>
      <Title>Ultimos 30 dias</Title>
      <ResponsiveContainer>
        <LineChart
          data={data}
          margin={{
            top: 16,
            right: 16,
            bottom: 0,
            left: 24,
          }}
        >
          <XAxis dataKey="time" />
          <YAxis>
            <Label angle={270} position="left" style={{ textAnchor: 'middle' }}>
              Reais (R$)
            </Label>
          </YAxis>
          <Line type="monotone" dataKey="amount" stroke="#556CD6" dot={false} />
        </LineChart>
      </ResponsiveContainer>
    </React.Fragment>
  );
}