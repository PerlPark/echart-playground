'use client';

import * as echarts from 'echarts';
import { useEffect, useMemo, useRef } from 'react';

type Props = {
  data: {
    data: number[];
    type: string;
  }[];
  visualMap: boolean;
  markLine: boolean;
  markArea: boolean;
};

const xAxis = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

const LineChart = ({ data, visualMap, markLine, markArea }: Props) => {
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
        data: xAxis,
      },
      tooltip: { trigger: 'axis' },
      yAxis: {
        type: 'value',
      },
      ...visualMapObj,
      series: [
        {
          type: 'line',
          markLine: {
            silent: true,
            symbol: ['none', 'none'],
            label: { show: false },
            data: markLine ? [{ xAxis: xAxis.length / 2 - 1 }] : [],
            lineStyle: {
              color: '#dddddd',
            },
          },
          markArea: {
            itemStyle: {
              color: 'rgba(255, 173, 177, 0.4)',
            },
            data: markArea
              ? [
                  [
                    {
                      name: 'Morning Peak',
                      xAxis: 'Mon',
                    },
                    {
                      xAxis: 'Tue',
                    },
                  ],
                  [
                    {
                      name: 'Evening Peak',
                      xAxis: 'Thu',
                    },
                    {
                      xAxis: 'Sat',
                    },
                  ],
                ]
              : [],
          },
        },
        ...data,
      ],
    }),
    [data, markArea, markLine, visualMapObj]
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

export default LineChart;
