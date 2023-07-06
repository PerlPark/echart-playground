'use client';

import * as echarts from 'echarts';
import { useEffect, useMemo, useRef } from 'react';

type Props = {
  data: {
    data: number[];
    type: string;
  }[];
  visualMap: boolean;
};

const BarChart = ({ data, visualMap }: Props) => {
  const chartRef = useRef(null);
  const echartRef = useRef<echarts.ECharts | null>(null);

  const visualMapObj = useMemo(
    () =>
      visualMap
        ? {
            visualMap: {
              show: false,
              dimension: 0,
              pieces: [
                {
                  lte: 1,
                  color: '#F35E07',
                },
                {
                  gt: 1,
                  lte: 3,
                  color: '#93CE07',
                },
                {
                  gt: 3,
                  lte: 5,
                  color: '#F35E07',
                },
                {
                  gt: 5,
                  lte: 6,
                  color: '#93CE07',
                },
              ],
            },
          }
        : {},
    [visualMap]
  );

  // --------------
  const chartOption = useMemo(
    () => ({
      xAxis: {
        type: 'category',
        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
      },
      tooltip: { trigger: 'axis' },
      yAxis: {
        type: 'value',
      },
      ...visualMapObj,
      series: data,
    }),
    [data, visualMapObj]
  );

  useEffect(() => {
    if (chartRef.current) {
      echartRef.current = echarts.init(chartRef.current);
    }
  }, []);

  useEffect(() => {
    console.log(chartOption);
    echartRef.current?.setOption(chartOption, true);
  }, [chartOption]);

  return <div className="w-full h-5/6" ref={chartRef}></div>;
};

export default BarChart;
