'use client';

import BarChart from '@/components/BarChart';
import useToggle from '@/useToggle';
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

export default function Bar() {
  const [visualMap, toggleVisualMap] = useToggle();
  const [minMax, toggleMinMax] = useToggle();

  const [dummyData, setDummyData] = useState([createData(false, 'bar', 1)]);

  const addData = (type: string) => {
    setDummyData((v) => [...v, createData(minMax, type, v.length + 1)]);
  };

  return (
    <div className="w-full h-full">
      <h2 className=" text-2xl font-semibold mb-3">Options</h2>
      <ul className="flex gap-4 [&_button]:w-44 mb-4">
        <li>
          <button
            type="button"
            onClick={() => addData('bar')}
            className="bg-slate-600 text-white h-10 shadow rounded"
          >
            데이터 추가
          </button>
        </li>
        <li>
          <button
            type="button"
            onClick={() => addData('line')}
            className="bg-slate-600 text-white h-10 shadow rounded"
          >
            라인 데이터 추가
          </button>
        </li>
        <li>
          <button
            type="button"
            onClick={toggleVisualMap}
            className="bg-slate-600 text-white h-10 shadow rounded"
          >
            <input
              type="checkbox"
              onChange={toggleVisualMap}
              readOnly={false}
              checked={visualMap}
            />{' '}
            색상 일부분 바꾸기
          </button>
        </li>
        <li>
          <button
            type="button"
            onClick={toggleMinMax}
            className="bg-slate-600 text-white h-10 shadow rounded"
          >
            <input
              type="checkbox"
              onChange={toggleMinMax}
              readOnly={false}
              checked={minMax}
            />{' '}
            최소/최대 포인트 추가
          </button>
        </li>
      </ul>
      <BarChart data={dummyData} visualMap={visualMap} />
    </div>
  );
}
