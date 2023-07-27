'use client';

import * as echarts from 'echarts';
import { useEffect, useMemo, useRef } from 'react';

type Props = {
  data: any[];
};

const BarChartCounting = ({ data }: Props) => {
  const chartRef = useRef(null);
  const echartRef = useRef<echarts.ECharts | null>(null);

  // --------------
  const chartOption = useMemo(
    () => ({
      xAxis: {
        type: 'category',
        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
      },
      yAxis: {
        type: 'value',
        boundaryGap: ['20%', '20%'],
      },
      color: ['#EEF1F3', '#008FFF', '#84FFBA', '#FFA927'],
      series: data,
    }),
    [data]
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

export default BarChartCounting;
