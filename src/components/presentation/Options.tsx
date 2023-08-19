'use client';

import { widthState } from '@/recoil/options';
import { useRecoilState } from 'recoil';
import BarChartIcon from '../icons/BarChartIcon';
import PieChartIcon from '../icons/PieChartIcon';
import useToggle from '@/useToggle';
import LineChartIcon from '../icons/LineChartIcon';
import CandlestickChartIcon from '../icons/CandlestickChartIcon';
import classNames from 'classnames';

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
        <hr className="my-5 border-slate-300" />
        <ul className="flex gap-4">
          <li>
            <button
              type="button"
              onClick={toggleLineChart}
              className={classNames(
                'transition w-full flex items-center gap-2 py-1.5 px-3',
                lineChart
                  ? 'border-slate-500 font-medium text-slate-600'
                  : 'border-slate-300 text-slate-400'
              )}
            >
              <input
                type="checkbox"
                className="h-4 w-4 rounded border-gray-300 text-slate-600 focus:ring-slate-600"
                checked={lineChart}
                readOnly
              />
              <LineChartIcon />
              Line
            </button>
          </li>
          <li>
            <button
              type="button"
              onClick={toggleBarChart}
              className={classNames(
                'transition w-full  flex items-center gap-2 py-1.5 px-3',
                barChart
                  ? 'border-slate-500 font-medium text-slate-600'
                  : 'border-slate-300 text-slate-400'
              )}
            >
              <input
                type="checkbox"
                className="h-4 w-4 rounded border-gray-300 text-slate-600 focus:ring-slate-600"
                checked={barChart}
                readOnly
              />
              <BarChartIcon />
              Bar
            </button>
          </li>
          <li>
            <button
              type="button"
              onClick={togglePieChart}
              className={classNames(
                'transition w-full flex items-center gap-2 py-1.5 px-3',
                pieChart
                  ? 'border-slate-500 font-medium text-slate-600'
                  : 'border-slate-300 text-slate-400'
              )}
            >
              <input
                type="checkbox"
                className="h-4 w-4 rounded border-gray-300 text-slate-600 focus:ring-slate-600"
                checked={pieChart}
                readOnly
              />
              <PieChartIcon />
              Pie
            </button>
          </li>
          <li>
            <button
              type="button"
              onClick={toggleCandleChart}
              className={classNames(
                'transition w-full flex items-center gap-2 py-1.5 px-3',
                candleChart
                  ? 'border-slate-500 font-medium text-slate-600'
                  : 'border-slate-300 text-slate-400'
              )}
            >
              <input
                type="checkbox"
                className="h-4 w-4 rounded border-gray-300 text-slate-600 focus:ring-slate-600"
                checked={candleChart}
                readOnly
              />
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
