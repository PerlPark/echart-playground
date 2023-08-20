import lineChartOption1 from '@/configs/line1';
import Chart from './Chart';
import SettingButton from './SettingButton';
import useToggle from '@/useToggle';
import { useState } from 'react';

const LineChart1 = ({ className }: { className: string }) => {
  const [chart1Option, toggleChart1Option] = useToggle();

  const [color, setColor] = useState('#f68709');
  const [color2, setColor2] = useState('#b177f8');
  const [isSmooth, toggleIsSmooth] = useToggle();

  return (
    <div className={className}>
      <div className="text-right">
        <SettingButton onClick={() => toggleChart1Option()} />
      </div>
      <Chart option={lineChartOption1({ isSmooth, color, color2 })} />
      {chart1Option && (
        <div className="flex flex-col gap-1 -top-px right-0 z-10 translate-x-full px-4 absolute border bg-white rounded-lg shadow-sm py-2">
          <div>
            <label className="flex gap-2 items-center">
              선 1
              <input
                type="color"
                onChange={(e) => {
                  setColor(e.target.value);
                }}
                defaultValue={color}
              />
            </label>
          </div>
          <div>
            <label className="flex gap-2 items-center">
              선 2
              <input
                type="color"
                onChange={(e) => {
                  setColor2(e.target.value);
                }}
                defaultValue={color2}
              />
            </label>
          </div>
          <div>
            <label className="flex gap-2 items-center">
              부드럽게
              <input type="checkbox" onChange={toggleIsSmooth} />
            </label>
          </div>
        </div>
      )}
    </div>
  );
};

export default LineChart1;
