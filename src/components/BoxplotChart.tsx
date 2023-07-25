'use client';

import * as echarts from 'echarts';
import { useEffect, useMemo, useRef } from 'react';

type Props = {};

const xAxis = ['2017-10-24', '2017-10-25', '2017-10-26', '2017-10-27'];

const data = [
  [10, 15, 17.5, 20, 25],
  [10, 15, 17.5, 20, 25],
  [10, 15, 17.5, 20, 25],
  [10, 15, 17.5, 20, 25],
];

const getScatterData = () => {
  return data.map(([a, b], idx) => [xAxis[idx], (a + b) / 2]);
};

const BoxplotChart = ({}: Props) => {
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
          type: 'boxplot',
          data: data,
        },
      ],
    }),
    []
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

export default BoxplotChart;
