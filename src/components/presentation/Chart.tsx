'use client';

import { useEffect, useRef } from 'react';
import * as echarts from 'echarts';

type Props = {
  option: any;
};

const Chart = ({ option }: Props) => {
  const chartRef = useRef(null);
  const echartRef = useRef<echarts.ECharts | null>(null);

  useEffect(() => {
    if (chartRef.current) {
      echartRef.current = echarts.init(chartRef.current);
    }
  }, []);

  useEffect(() => {
    echartRef.current?.setOption(option, false);
  }, [option]);

  return <div ref={chartRef} className="h-80 w-full"></div>;
};

export default Chart;
