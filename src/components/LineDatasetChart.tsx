'use client';

import type Data from '@/types/eharts/data';
import * as echarts from 'echarts';
import { useEffect, useMemo, useRef } from 'react';

type Props = {
  data?: Data[];
  dataset?: any;
  tooltip?: any;
};

const LineDatasetChart = ({ data, dataset, tooltip }: Props) => {
  const chartRef = useRef(null);
  const echartRef = useRef<echarts.ECharts | null>(null);

  // --------------
  const chartOption = useMemo(
    () => ({
      xAxis: {
        type: 'category',
      },
      tooltip: tooltip ?? { trigger: 'axis' },
      yAxis: {
        show: true,
        axisLabel: {
          show: false,
        },
        splitLine: {
          lineStyle: {
            color: '#B0BEC5',
            type: [1, 3],
          },
        },
      },
      series: [...(data || [])],
      ...({ dataset } || []),
    }),
    [data, dataset, tooltip]
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

export default LineDatasetChart;
