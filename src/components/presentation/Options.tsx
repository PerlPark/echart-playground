'use client';

import { showState, widthState } from '@/recoil/options';
import { useRecoilState } from 'recoil';
import BarChartIcon from '../icons/BarChartIcon';
import PieChartIcon from '../icons/PieChartIcon';
import LineChartIcon from '../icons/LineChartIcon';
import CandlestickChartIcon from '../icons/CandlestickChartIcon';
import classNames from 'classnames';

const Options = () => {
  const [width, setWidth] = useRecoilState(widthState);
  const [show, setShow] = useRecoilState(showState);

  const toggleShow = (type: keyof typeof show) => {
    setShow((v) => ({
      ...v,
      [type]: !v[type],
    }));
  };

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
              onClick={() => toggleShow('line')}
              className={classNames(
                'transition w-full flex items-center gap-2 py-1.5 px-3',
                show.line
                  ? 'border-slate-500 font-medium text-slate-600'
                  : 'border-slate-300 text-slate-400'
              )}
            >
              <input
                type="checkbox"
                className="h-4 w-4 rounded border-gray-300 text-slate-600 focus:ring-slate-600"
                checked={show.line}
                readOnly
              />
              <LineChartIcon />
              Line
            </button>
          </li>
          <li>
            <button
              type="button"
              onClick={() => toggleShow('bar')}
              className={classNames(
                'transition w-full  flex items-center gap-2 py-1.5 px-3',
                show.bar
                  ? 'border-slate-500 font-medium text-slate-600'
                  : 'border-slate-300 text-slate-400'
              )}
            >
              <input
                type="checkbox"
                className="h-4 w-4 rounded border-gray-300 text-slate-600 focus:ring-slate-600"
                checked={show.bar}
                readOnly
              />
              <BarChartIcon />
              Bar
            </button>
          </li>
          <li>
            <button
              type="button"
              onClick={() => toggleShow('pie')}
              className={classNames(
                'transition w-full flex items-center gap-2 py-1.5 px-3',
                show.pie
                  ? 'border-slate-500 font-medium text-slate-600'
                  : 'border-slate-300 text-slate-400'
              )}
            >
              <input
                type="checkbox"
                className="h-4 w-4 rounded border-gray-300 text-slate-600 focus:ring-slate-600"
                checked={show.pie}
                readOnly
              />
              <PieChartIcon />
              Pie
            </button>
          </li>
          <li>
            <button
              type="button"
              onClick={() => toggleShow('candle')}
              className={classNames(
                'transition w-full flex items-center gap-2 py-1.5 px-3',
                show.candle
                  ? 'border-slate-500 font-medium text-slate-600'
                  : 'border-slate-300 text-slate-400'
              )}
            >
              <input
                type="checkbox"
                className="h-4 w-4 rounded border-gray-300 text-slate-600 focus:ring-slate-600"
                checked={show.candle}
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
