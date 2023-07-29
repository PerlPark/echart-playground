'use client';

import CandlestickIndexChart from '@/components/CandlestickIndexChart';
import useToggle from '@/useToggle';

export default function CandlestickIndex() {
  const [slider, toggleSlider] = useToggle();

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
