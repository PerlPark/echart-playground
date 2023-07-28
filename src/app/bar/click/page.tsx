'use client';

import BarChartClick from '@/components/BarChartClick';
import { useState } from 'react';

function rand(min: number, max: number) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function createData(hasMinMax: boolean, type: string, index: number) {
  const newData = Array.from({ length: 7 }, () => rand(0, 300));

  return {
    name: `data ${index}`,
    data: newData,
    label: {
      show: true,
    },
    itemStyle: {
      color: '#008FFF',
      borderWidth: 0,
    },
    selectedMode: 'single',
    select: {
      itemStyle: {
        color: '#008FFF',
      },
    },
    type: type,
    markPoint: {
      data: hasMinMax
        ? [
            { type: 'max', name: 'Max' },
            { type: 'min', name: 'Min' },
          ]
        : [],
    },
  };
}

export default function Bar() {
  const [dummyData] = useState([createData(false, 'bar', 1)]);

  return (
    <div className="w-full h-full">
      <BarChartClick data={dummyData} />
    </div>
  );
}
