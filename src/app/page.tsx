'use client';

import LineChart from '@/components/LineChart';
import { useState } from 'react';

function rand(min: number, max: number) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function createData(hasMinMax: boolean) {
  const newData = Array.from({ length: 7 }, () => rand(0, 300));
  return {
    data: newData,
    type: 'line',
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

export default function Home() {
  const [visualMap, setVisualMap] = useState(false);
  const [markArea, setMarkArea] = useState(false);
  const [minMax, setMinMax] = useState(false);
  const [dummyData, setDummyData] = useState([createData(false)]);

  const addData = () => {
    setDummyData((v) => [...v, createData(minMax)]);
  };

  return (
    <div className="w-full h-full">
      <h2 className=" text-2xl font-semibold mb-3">Options</h2>
      <ul className="flex gap-4 [&_button]:w-44 mb-4">
        <li>
          <button
            type="button"
            onClick={addData}
            className="bg-slate-600 text-white h-10 shadow rounded"
          >
            데이터 추가
          </button>
        </li>
        <li>
          <button
            type="button"
            onClick={() => {
              setVisualMap((v) => !v);
            }}
            className="bg-slate-600 text-white h-10 shadow rounded"
          >
            <input type="checkbox" checked={visualMap} /> 색상 일부분 바꾸기
          </button>
        </li>
        <li>
          <button
            type="button"
            onClick={() => {
              setMarkArea((v) => !v);
            }}
            className="bg-slate-600 text-white h-10 shadow rounded"
          >
            <input type="checkbox" checked={markArea} /> 영역 강조 추가
          </button>
        </li>
        <li>
          <button
            type="button"
            onClick={() => {
              setMinMax((v) => !v);
            }}
            className="bg-slate-600 text-white h-10 shadow rounded"
          >
            <input type="checkbox" checked={minMax} /> 최소/최대 포인트 추가
          </button>
        </li>
      </ul>
      <LineChart data={dummyData} visualMap={visualMap} markArea={markArea} />
    </div>
  );
}
