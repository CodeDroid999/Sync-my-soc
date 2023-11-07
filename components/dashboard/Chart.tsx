'use client';

import { Card, AreaChart, Title, Text } from '@tremor/react';

const data = [
  {
    Month: 'Jan 21',
    Followers: 2890,
    Likes: 2400
  },
  {
    Month: 'Feb 21',
    Followers: 1890,
    Likes: 1398
  },
  {
    Month: 'March 22',
    Followers: 3890,
    Likes: 2980
  },
];

export default function Chart() {
  return (
    <div className="flex-grow w-full ml-auto bg-red" style={{ marginLeft: '400px' }}>
      <Card className="mt-8">
        <Title>Performance</Title>
        <Text>Comparison between Followers and Time</Text>
        <AreaChart
          className="mt-4 h-80 w-180"
          data={data}
          categories={['Followers', 'Likes']}
          index="Month"
          colors={['indigo', 'fuchsia']}
          valueFormatter={(number: number) => number.toString()} 
          yAxisWidth={60}
        />
      </Card>
    </div>
  );
}
