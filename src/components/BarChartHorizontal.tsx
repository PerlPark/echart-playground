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

const BarChartHorizontal = ({ data, visualMap }: Props) => {
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
        type: 'value',
      },
      tooltip: { trigger: 'axis' },
      yAxis: {
        type: 'category',
        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
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

export default BarChartHorizontal;
