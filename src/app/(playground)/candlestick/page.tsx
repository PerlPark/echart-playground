'use client';

import CandlestickChart from '@/components/CandlestickChart';
import useToggle from '@/useToggle';

export default function Candlestick() {
  const [median, toggleMedian] = useToggle();

  return (
    <div className="w-full h-full">
      <h2 className=" text-2xl font-semibold mb-3">Options</h2>
      <ul className="flex gap-4 [&_button]:w-44 mb-4">
        <li>
          <button
            type="button"
            onClick={toggleMedian}
            className="bg-slate-600 text-white h-10 shadow rounded"
          >
            <input
              type="checkbox"
              onChange={toggleMedian}
              readOnly={false}
              checked={median}
            />{' '}
            중앙값
          </button>
        </li>
      </ul>
      <CandlestickChart median={median} />
    </div>
  );
}
