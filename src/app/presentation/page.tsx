'use client';

import Chart from '@/components/presentation/Chart';
import barChartOption1 from '@/configs/bar1';
import barChartOption2, { datas } from '@/configs/bar2';
import lineChartOption2 from '@/configs/line2';
import lineChartOption3 from '@/configs/line3';
import lineChartOption4 from '@/configs/line4';
import { useState } from 'react';

import barChartOption3 from '@/configs/bar3';
import pieChartOption1 from '@/configs/pie1';
import pieChartOption2 from '@/configs/pie2';
import candleChartOption1 from '@/configs/candle1';
import candleChartOption2 from '@/configs/candle2';
import LineChart1 from '@/components/presentation/LineChart1';
import { showState } from '@/recoil/options';
import { useRecoilState } from 'recoil';
import classNames from 'classnames';

const Presentation = () => {
  const [tooltip, setTooltip] = useState<any>({
    show: false,
    name: '',
    value: 0,
  });
  const [textOpacity, setTextOpacity] = useState(1);
  const [show] = useRecoilState(showState);

  const getClassNames = (type: keyof typeof show) =>
    classNames('border rounded-lg flex flex-col justify-end relative', {
      ['hidden']: !show[type],
    });

  return (
    <div className="flex flex-wrap gap-6 w-full p-8">
      <LineChart1 className={getClassNames('line')} />
      <div className={getClassNames('line')}>
        <Chart option={lineChartOption2({})} />
      </div>
      <div className={getClassNames('line')}>
        <Chart option={lineChartOption3({})} />
      </div>
      <div className={getClassNames('line')}>
        <Chart option={lineChartOption4({})} />
      </div>

      {show.bar && (
        <>
          <div className="border rounded-lg flex flex-col justify-end">
            <Chart option={barChartOption1({})} />
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
            <Chart option={barChartOption3} />
          </div>
        </>
      )}

      {show.pie && (
        <>
          <div className="border rounded-lg flex flex-col justify-end">
            <Chart option={pieChartOption1} />
          </div>
          <div className="border rounded-lg flex flex-col justify-end">
            <Chart option={pieChartOption2} />
          </div>
        </>
      )}

      {show.candle && (
        <>
          <div className="border rounded-lg flex flex-col justify-end">
            <Chart option={candleChartOption1} />
          </div>
          <div className="border rounded-lg flex flex-col justify-end">
            <Chart option={candleChartOption2} />
          </div>
        </>
      )}
    </div>
  );
};

export default Presentation;
