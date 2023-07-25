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
              pieces: [
                { min: 0, max: 270, color: '#93CE07' },
                { min: 270, maxOpen: true, color: '#F35E07' },
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
    echartRef.current?.setOption(chartOption, true);
  }, [chartOption]);

  return <div className="w-full h-5/6" ref={chartRef}></div>;
};

export default BarChart;
