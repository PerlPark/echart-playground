'use client';

import BarChart from '@/components/BarChart';
import { useState } from 'react';

function rand(min: number, max: number) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function createData() {
  const newData = Array.from({ length: 7 }, () => rand(0, 300));
  return {
    data: newData,
    type: 'line',
    markPoint: {
      data: [
        { type: 'max', name: 'Max' },
        { type: 'min', name: 'Min' },
      ],
    },
  };
}

export default function Home() {
  const [dummyData, setDummyData] = useState([createData()]);

  const addData = () => {
    setDummyData((v) => [...v, createData()]);
  };

  return (
    <div className="w-full h-full">
      <h2 className=" text-2xl font-semibold mb-2">Options</h2>
      <ul className="grid grid-cols-6 border rounded p-4">
        <li>
          <button
            type="button"
            onClick={addData}
            className="bg-slate-600 text-white w-28 h-10 shadow rounded"
          >
            데이터 추가
          </button>
        </li>
      </ul>
      <BarChart data={dummyData} />
    </div>
  );
}
