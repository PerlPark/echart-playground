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
import SettingButton from '@/components/presentation/SettingButton';

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
  const [textOpacity, setTextOpacity] = useState(1);

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
            <SettingButton onClick={() => toggleChart1Option()} />
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
        <div className="border rounded-lg flex flex-col justify-end">
          <Chart width={width} option={lineChartOption2({})} />
        </div>
        <div className="border rounded-lg flex flex-col justify-end">
          <Chart width={width} option={lineChartOption3({})} />
        </div>
        <div className="border rounded-lg flex flex-col justify-end">
          <Chart width={width} option={lineChartOption4({})} />
        </div>
        <div className="border rounded-lg flex flex-col justify-end">
          <Chart width={width} option={barChartOption1({})} />
        </div>
        <div className="border rounded-lg flex flex-col justify-end relative">
          {tooltip.show && (
            <div className="absolute top-0 w-full bg-slate-600 text-white px-3 py-2 z-10 rounded">
              {tooltip.name}
              <br />
              {tooltip.value}
            </div>
          )}
          <Chart
            width={width}
            option={barChartOption2({ textOpacity })}
            events={(echarts) => {
              const selectTooltip = (params: any) => {
                const valueData = datas[params.seriesIndex][params.dataIndex];
                const value =
                  typeof valueData === 'number'
                    ? valueData
                    : valueData?.label?.formatter === '집계중'
                    ? '집계중입니다.'
                    : valueData?.value;

                setTooltip({
                  show: true,
                  name: params.seriesName + params.name,
                  value,
                });
              };

              echarts.off('mouseover');
              echarts.on('mouseover', function (params) {
                if (params.componentSubType === 'bar') {
                  setTextOpacity(0.3);
                  selectTooltip(params);
                }
              });
              echarts.off('mouseout');
              echarts.on('mouseout', function (params) {
                if (params.componentSubType === 'bar') {
                  setTextOpacity(1);
                }
              });
              echarts.off('globalout');
              echarts.on('globalout', function (params) {
                setTooltip({
                  show: false,
                  name: '',
                  value: 0,
                });
              });
            }}
          />
        </div>
        <div className="border rounded-lg flex flex-col justify-end">
          <Chart width={width} option={barChartOption3} />
        </div>
        <div className="border rounded-lg flex flex-col justify-end">
          <Chart width={width} option={pieChartOption1} />
        </div>
        <div className="border rounded-lg flex flex-col justify-end">
          <Chart width={width} option={pieChartOption2} />
        </div>
        <div className="border rounded-lg flex flex-col justify-end">
          <Chart width={width} option={candleChartOption1} />
        </div>
        <div className="border rounded-lg flex flex-col justify-end">
          <Chart width={width} option={candleChartOption2} />
        </div>
      </div>
    </div>
  );
};

export default Presentation;
