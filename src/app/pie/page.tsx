'use client';

import PieChart from '@/components/PieChart';
import { useState } from 'react';

export default function Bar() {
  const [donut, setDonut] = useState(false);
  const toggleDonut = () => {
    setDonut((v) => !v);
  };

  const [emphasisLabel, setEmphasisLabel] = useState(false);
  const toggleEmphasisLabel = () => {
    setEmphasisLabel((v) => !v);
  };

  const [borderRadius, setBorderRadius] = useState(0);
  const [borderWidth, setBoardWidth] = useState(0);

  return (
    <div className="w-full h-full">
      <h2 className=" text-2xl font-semibold mb-3">Options</h2>
      <ul className="flex gap-4 [&_button]:w-44 mb-4 flex-wrap">
        <li>
          <button
            type="button"
            onClick={toggleDonut}
            className="bg-slate-600 text-white h-10 shadow rounded"
          >
            <input
              type="checkbox"
              onChange={toggleDonut}
              readOnly={false}
              checked={donut}
            />{' '}
            도넛 모양
          </button>
        </li>
        <li>
          <button
            type="button"
            onClick={toggleEmphasisLabel}
            className="bg-slate-600 text-white h-10 shadow rounded"
          >
            <input
              type="checkbox"
              onChange={toggleEmphasisLabel}
              readOnly={false}
              checked={emphasisLabel}
            />{' '}
            레이블 강조
          </button>
        </li>
        <li>
          <span className="font-medium">Border Radius</span>
          <input
            type="number"
            className="border rounded h-10 px-3 w-20 ml-2"
            defaultValue={0}
            min={0}
            step={2}
            onChange={(e) => {
              setBorderRadius(Number(e.target.value));
            }}
          />
        </li>
        <li>
          <span className="font-medium">Border Width</span>
          <input
            type="number"
            className="border rounded h-10 px-3 w-20 ml-2"
            defaultValue={0}
            step={2}
            min={0}
            onChange={(e) => {
              setBoardWidth(Number(e.target.value));
            }}
          />
        </li>
      </ul>
      <PieChart
        donut={donut}
        borderRadius={borderRadius}
        borderWidth={borderWidth}
        emphasisLabel={emphasisLabel}
      />
    </div>
  );
}
