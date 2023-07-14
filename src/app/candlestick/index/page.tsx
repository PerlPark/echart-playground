'use client';

import CandlestickChart from '@/components/CandlestickChart';
import CandlestickIndexChart from '@/components/CandlestickIndexChart';
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

export default function CandlestickIndex() {
  const [slider, setSlider] = useState(false);
  // const [dummyData, setDummyData] = useState([createData(false, 'bar', 1)]);

  // const addData = (type: string) => {
  //   setDummyData((v) => [...v, createData(minMax, type, v.length + 1)]);
  // };

  const toggleSlider = () => {
    setSlider((v) => !v);
  };

  return (
    <div className="w-full h-full">
      <h2 className=" text-2xl font-semibold mb-3">Options</h2>
      <ul className="flex gap-4 [&_button]:w-44 mb-4">
        <li>
          <button
            type="button"
            onClick={toggleSlider}
            className="bg-slate-600 text-white h-10 shadow rounded"
          >
            <input
              type="checkbox"
              onChange={toggleSlider}
              readOnly={false}
              checked={slider}
            />{' '}
            슬라이더
          </button>
        </li>
      </ul>
      <CandlestickIndexChart slider={slider} />
    </div>
  );
}
