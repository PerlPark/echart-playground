'use client';

import Chart from '@/components/presentation/Chart';
import barChartOption1 from '@/configs/bar1';
import barChartOption2 from '@/configs/bar2';
import lineChartOption1 from '@/configs/line1';
import lineChartOption2 from '@/configs/line2';
import lineChartOption3 from '@/configs/line3';
import lineChartOption4 from '@/configs/line4';
import useToggle from '@/useToggle';
import { useState } from 'react';

const Presentation = () => {
  const [color, setColor] = useState('#f68709');
  const [color2, setColor2] = useState('#b177f8');
  const [isSmooth, toggleIsSmooth] = useToggle();

  return (
    <div className="grid grid-cols-3 gap-6 w-full p-8">
      <div className="border-r">
        <div className="flex gap-4 items-center h-14">
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
        <Chart option={lineChartOption1({ isSmooth, color, color2 })} />
      </div>
      <div className="border-r">
        <div className="flex gap-4 items-center h-14"></div>
        <Chart option={lineChartOption2({})} />
      </div>
      <div className="border-r">
        <div className="flex gap-4 items-center h-14"></div>
        <Chart option={lineChartOption3({})} />
      </div>
      <div className="border-r">
        <div className="flex gap-4 items-center h-14"></div>
        <Chart option={lineChartOption4({})} />
      </div>
      <div className="border-r">
        <div className="flex gap-4 items-center h-14"></div>
        <Chart option={barChartOption1({})} />
      </div>
      <div className="border-r">
        <div className="flex gap-4 items-center h-14"></div>
        <Chart option={barChartOption2({})} />
      </div>
    </div>
  );
};

export default Presentation;
