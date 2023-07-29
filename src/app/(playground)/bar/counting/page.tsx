'use client';

import BarChartCounting from '@/components/BarChartCounting';
import { useState } from 'react';

export default function Bar() {
  const [dummyData] = useState([
    {
      data: [null, null, null, null, null, 300, 300],
      stack: 'a',
      label: {
        show: true,
        position: 'top',
        color: '#90A4AE',
        formatter: '집계중',
      },
      type: 'bar',
      itemStyle: {
        borderRadius: [10, 10, 0, 0],
      },
    },
    {
      name: `data 1`,
      data: [100, 200, 300, 400, 500],
      stack: 'a',
      label: {
        show: false,
      },
      type: 'bar',
    },
    {
      name: `data 2`,
      data: [500, 400, 300, 200, 100],
      stack: 'a',
      label: {
        show: false,
      },
      type: 'bar',
      itemStyle: {
        borderRadius: [10, 10, 0, 0],
      },
    },
  ]);

  return (
    <div className="w-full h-full">
      <BarChartCounting data={dummyData} />
    </div>
  );
}
