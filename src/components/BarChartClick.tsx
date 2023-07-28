'use client';

import * as echarts from 'echarts';
import { useEffect, useMemo, useRef, useState } from 'react';

type Props = {
  data: {
    data: number[];
    type: string;
  }[];
};

const BarChartClick = ({ data }: Props) => {
  const chartRef = useRef(null);
  const echartRef = useRef<echarts.ECharts | null>(null);

  // --------------
  const chartOption = useMemo(
    () => ({
      xAxis: {
        type: 'category',
        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
      },
      tooltip: { trigger: 'axis' },
      colorBy: 'data',
      yAxis: {
        type: 'value',
      },
      series: data,
    }),
    [data]
  );

  useEffect(() => {
    if (chartRef.current) {
      echartRef.current = echarts.init(chartRef.current);
      echartRef.current.on('selectchanged', function (params: any) {
        if (params.fromAction === 'unselect') {
          echartRef.current?.setOption({
            series: [
              {
                itemStyle: {
                  color: '#008FFF',
                },
              },
            ],
          });
          return;
        }
        echartRef.current?.setOption({
          series: [
            {
              itemStyle: {
                color: '#EEF1F3',
              },
            },
          ],
        });
      });
    }
  }, []);

  useEffect(() => {
    echartRef.current?.setOption(chartOption, true);
  }, [chartOption]);

  return <div className="w-full h-5/6" ref={chartRef}></div>;
};

export default BarChartClick;
