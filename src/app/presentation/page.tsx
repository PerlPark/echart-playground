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

import null2집계중 from '@/utils';
import barChartOption3 from '@/configs/bar3';
import pieChartOption1 from '@/configs/pie1';
import pieChartOption2 from '@/configs/pie2';
import candleChartOption1 from '@/configs/candle1';

const Presentation = () => {
  const [color, setColor] = useState('#f68709');
  const [color2, setColor2] = useState('#b177f8');
  const [isSmooth, toggleIsSmooth] = useToggle();

  const rawData1 = [2, 5, 5, 3, 4, 1, null];
  const rawData2 = [3, 4, 6, 3, 4, null, null];
  const data1 = null2집계중(rawData1);
  const data2 = null2집계중(rawData2);
  const data3 = [2.5, 4.5, 5.5, 3.5, 4.5, 2, null];
  const datas = [data1, data2, data3];
  const [tooltip, setTooltip] = useState<any>({
    show: false,
    name: '',
    value: 0,
  });

  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 w-full p-8">
      <div className="border rounded-lg">
        <div className="flex gap-4 items-center h-14 px-4">
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
      <div className="border rounded-lg">
        <div className="flex gap-4 items-center h-14"></div>
        <Chart option={lineChartOption2({})} />
      </div>
      <div className="border rounded-lg">
        <div className="flex gap-4 items-center h-14"></div>
        <Chart option={lineChartOption3({})} />
      </div>
      <div className="border rounded-lg">
        <div className="flex gap-4 items-center h-14"></div>
        <Chart option={lineChartOption4({})} />
      </div>
      <div className="border rounded-lg">
        <div className="flex gap-4 items-center h-14"></div>
        <Chart option={barChartOption1({})} />
      </div>
      <div className="border rounded-lg">
        <div className="flex gap-4 items-center h-14"></div>
        {tooltip.show && (
          <div className="absolute bg-slate-600 text-white px-3 py-2 z-10 rounded">
            {tooltip.name}
            <br />
            {tooltip.value}
          </div>
        )}
        <Chart
          option={barChartOption2({
            data1,
            data2,
            data3,
            selectTooltip: (params) => {
              const valueData = datas[params.seriesIndex][params.dataIndex];
              const value =
                typeof valueData === 'number' ? valueData : '집계중입니다.';

              setTooltip({
                show: true,
                name: params.seriesName + params.name,
                value,
              });
            },
          })}
        />
      </div>
      <div className="border rounded-lg">
        <div className="flex gap-4 items-center h-14"></div>
        <Chart option={barChartOption3} />
      </div>
      <div className="border rounded-lg">
        <div className="flex gap-4 items-center h-14"></div>
        <Chart option={pieChartOption1} />
      </div>
      <div className="border rounded-lg">
        <div className="flex gap-4 items-center h-14"></div>
        <Chart option={pieChartOption2} />
      </div>
      <div className="border rounded-lg">
        <div className="flex gap-4 items-center h-14"></div>
        <Chart option={candleChartOption1} />
      </div>
    </div>
  );
};

export default Presentation;
