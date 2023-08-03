'use client';

import Chart from '@/components/presentation/Chart';
import barChartOption1 from '@/configs/bar1';
import barChartOption2, { datas } from '@/configs/bar2';
import lineChartOption1 from '@/configs/line1';
import lineChartOption2 from '@/configs/line2';
import lineChartOption3 from '@/configs/line3';
import lineChartOption4 from '@/configs/line4';
import useToggle from '@/useToggle';
import { useState } from 'react';

import barChartOption3 from '@/configs/bar3';
import pieChartOption1 from '@/configs/pie1';
import pieChartOption2 from '@/configs/pie2';
import candleChartOption1 from '@/configs/candle1';
import candleChartOption2 from '@/configs/candle2';

const Presentation = () => {
  const [width, setWidth] = useState(375);

  const [color, setColor] = useState('#f68709');
  const [color2, setColor2] = useState('#b177f8');
  const [isSmooth, toggleIsSmooth] = useToggle();

  const [tooltip, setTooltip] = useState<any>({
    show: false,
    name: '',
    value: 0,
  });

  const [chart1Option, toggleChart1Option] = useToggle();

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
      <div className="flex flex-wrap gap-6 w-full p-8">
        <div className="border rounded-lg relative">
          <div className="text-right">
            <button
              type="button"
              className="text-slate-500 p-2 rounded-sm"
              onClick={() => toggleChart1Option()}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M10.343 3.94c.09-.542.56-.94 1.11-.94h1.093c.55 0 1.02.398 1.11.94l.149.894c.07.424.384.764.78.93.398.164.855.142 1.205-.108l.737-.527a1.125 1.125 0 011.45.12l.773.774c.39.389.44 1.002.12 1.45l-.527.737c-.25.35-.272.806-.107 1.204.165.397.505.71.93.78l.893.15c.543.09.94.56.94 1.109v1.094c0 .55-.397 1.02-.94 1.11l-.893.149c-.425.07-.765.383-.93.78-.165.398-.143.854.107 1.204l.527.738c.32.447.269 1.06-.12 1.45l-.774.773a1.125 1.125 0 01-1.449.12l-.738-.527c-.35-.25-.806-.272-1.203-.107-.397.165-.71.505-.781.929l-.149.894c-.09.542-.56.94-1.11.94h-1.094c-.55 0-1.019-.398-1.11-.94l-.148-.894c-.071-.424-.384-.764-.781-.93-.398-.164-.854-.142-1.204.108l-.738.527c-.447.32-1.06.269-1.45-.12l-.773-.774a1.125 1.125 0 01-.12-1.45l.527-.737c.25-.35.273-.806.108-1.204-.165-.397-.505-.71-.93-.78l-.894-.15c-.542-.09-.94-.56-.94-1.109v-1.094c0-.55.398-1.02.94-1.11l.894-.149c.424-.07.765-.383.93-.78.165-.398.143-.854-.107-1.204l-.527-.738a1.125 1.125 0 01.12-1.45l.773-.773a1.125 1.125 0 011.45-.12l.737.527c.35.25.807.272 1.204.107.397-.165.71-.505.78-.929l.15-.894z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
            </button>
          </div>
          <Chart
            width={width}
            option={lineChartOption1({ isSmooth, color, color2 })}
          />
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
        <div className="border rounded-lg">
          <Chart width={width} option={lineChartOption2({})} />
        </div>
        <div className="border rounded-lg">
          <Chart width={width} option={lineChartOption3({})} />
        </div>
        <div className="border rounded-lg">
          <Chart width={width} option={lineChartOption4({})} />
        </div>
        <div className="border rounded-lg">
          <Chart width={width} option={barChartOption1({})} />
        </div>
        <div className="border rounded-lg">
          {tooltip.show && (
            <div className="absolute bg-slate-600 text-white px-3 py-2 z-10 rounded">
              {tooltip.name}
              <br />
              {tooltip.value}
            </div>
          )}
          <Chart
            width={width}
            option={barChartOption2({})}
            events={(echarts) => {
              const selectTooltip = (params: any) => {
                const valueData = datas[params.seriesIndex][params.dataIndex];
                const value =
                  typeof valueData === 'number' ? valueData : '집계중입니다.';

                setTooltip({
                  show: true,
                  name: params.seriesName + params.name,
                  value,
                });
              };

              echarts.off('click');
              echarts.on('click', function (params) {
                selectTooltip(params);
              });
            }}
          />
        </div>
        <div className="border rounded-lg">
          <Chart width={width} option={barChartOption3} />
        </div>
        <div className="border rounded-lg">
          <Chart width={width} option={pieChartOption1} />
        </div>
        <div className="border rounded-lg">
          <Chart width={width} option={pieChartOption2} />
        </div>
        <div className="border rounded-lg">
          <Chart width={width} option={candleChartOption1} />
        </div>
        <div className="border rounded-lg">
          <Chart width={width} option={candleChartOption2} />
        </div>
      </div>
    </div>
  );
};

export default Presentation;
