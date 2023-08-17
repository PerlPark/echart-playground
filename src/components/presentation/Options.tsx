'use client';

import { widthState } from '@/recoil/options';
import { useRecoilState } from 'recoil';
import BarChartIcon from '../icons/BarChartIcon';
import PieChartIcon from '../icons/PieChartIcon';
import useToggle from '@/useToggle';
import LineChartIcon from '../icons/LineChartIcon';
import CandlestickChartIcon from '../icons/CandlestickChartIcon';

const Options = () => {
  const [width, setWidth] = useRecoilState(widthState);

  const [lineChart, toggleLineChart] = useToggle(true);
  const [barChart, toggleBarChart] = useToggle(true);
  const [pieChart, togglePieChart] = useToggle(true);
  const [candleChart, toggleCandleChart] = useToggle(true);

  return (
    <div>
      <div className="m-6 p-5 bg-slate-100 rounded-md">
        <div>
          width:
          <input
            type="text"
            defaultValue={width}
            className="border rounded py-1 px-2 w-16 mx-1 text-right"
            onChange={(e) => {
              const value = Number(e.target.value);
              if (value > 100) {
                setWidth(value);
              }
            }}
          />
          px
        </div>
      </div>
      <div className="m-6 p-5 bg-slate-100 rounded-md">
        <ul className="flex gap-4">
          <li className="w-40">
            <input
              type="checkbox"
              className="peer hidden"
              checked={lineChart}
            />
            <button
              type="button"
              onClick={toggleLineChart}
              className="transition peer-checked:border-slate-500 w-full peer-checked:font-medium peer-checked:text-slate-600 bg-white border border-slate-300 text-slate-400 rounded flex items-center gap-2 py-1.5 px-3"
            >
              <LineChartIcon />
              Line
            </button>
          </li>
          <li className="w-40">
            <input type="checkbox" className="peer hidden" checked={barChart} />
            <button
              type="button"
              onClick={toggleBarChart}
              className="transition peer-checked:border-slate-500 w-full peer-checked:font-medium peer-checked:text-slate-600 bg-white border border-slate-300 text-slate-400 rounded flex items-center gap-2 py-1.5 px-3"
            >
              <BarChartIcon />
              Bar
            </button>
          </li>
          <li className="w-40">
            <input type="checkbox" className="peer hidden" checked={pieChart} />
            <button
              type="button"
              onClick={togglePieChart}
              className="transition peer-checked:border-slate-500 w-full peer-checked:font-medium peer-checked:text-slate-600 bg-white border border-slate-300 text-slate-400 rounded flex items-center gap-2 py-1.5 px-3"
            >
              <PieChartIcon />
              Pie
            </button>
          </li>
          <li className="w-40">
            <input
              type="checkbox"
              className="peer hidden"
              checked={candleChart}
            />
            <button
              type="button"
              onClick={toggleCandleChart}
              className="transition peer-checked:border-slate-500 w-full peer-checked:font-medium peer-checked:text-slate-600 bg-white border border-slate-300 text-slate-400 rounded flex items-center gap-2 py-1.5 px-3"
            >
              <CandlestickChartIcon />
              Candlestick
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Options;
