'use client';

import CandlestickChart from '@/components/CandlestickChart';
import useCommonOptions from '@/useCommonOptions';
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

export default function Candlestick() {
  return (
    <div className="w-full h-full">
      <CandlestickChart />
    </div>
  );
}
