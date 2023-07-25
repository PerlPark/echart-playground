'use client';

import * as echarts from 'echarts';
import { useEffect, useMemo, useRef } from 'react';

type Props = {
  median: boolean;
};

const xAxis = ['2017-10-24', '2017-10-25', '2017-10-26', '2017-10-27'];

const data = [
  [20, 34, 10, 38],
  [40, 35, 30, 50],
  [31, 38, 33, 44],
  [38, 15, 5, 42],
];

const getScatterData = () => {
  return data.map(([a, b], idx) => [xAxis[idx], (a + b) / 2]);
};

const CandlestickChart = ({ median }: Props) => {
  const chartRef = useRef(null);
  const echartRef = useRef<echarts.ECharts | null>(null);

  // --------------
  const chartOption = useMemo(
    () => ({
      xAxis: {
        data: xAxis,
      },
      yAxis: {},
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          type: 'cross',
        },
      },
      series: [
        {
          name: '회전율',
          type: 'candlestick',
          data: data,
        },
        ...(median
          ? [
              {
                name: 'median',
                symbolSize: 20,
                type: 'scatter',
                data: getScatterData(),
              },
            ]
          : []),
      ],
    }),
    [median]
  );

  useEffect(() => {
    if (chartRef.current) {
      echartRef.current = echarts.init(chartRef.current);
    }
  }, []);

  useEffect(() => {
    echartRef.current?.setOption(chartOption, true);
  }, [chartOption]);

  return <div className="w-full h-5/6" ref={chartRef}></div>;
};

export default CandlestickChart;
