'use client';

import type Data from '@/types/eharts/data';
import * as echarts from 'echarts';
import { useEffect, useMemo, useRef, useState } from 'react';

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
      ...({ dataset } || []),
      grid: {
        top: 190,
        height: 260,
      },
      xAxis: {
        type: 'category',
        axisLine: {
          lineStyle: {
            color: '#EAEAEA',
          },
        },
        axisTick: {
          show: false,
        },
        axisLabel: {
          formatter: '{value}월',
          color: '#9C9C9C',
        },
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
      series: [
        {
          type: 'line',
          datasetIndex: 1,
          symbol: 'circle',
          symbolSize: 8,
          itemStyle: {
            color: '#B0BEC5',
          },
          lineStyle: {
            width: 0.5,
            color: '#B0BEC5',
          },
          emphasis: {
            itemStyle: {
              color: '#B0BEC5',
            },
            lineStyle: {
              color: '#F1F1F1',
            },
          },
          encode: {
            x: 'month',
            y: 'monthlyRevenue',
            tooltip: 'monthlyRevenue',
          },
          zlevel: 1,
        },
        {
          type: 'line',
          itemStyle: {
            color: '#FF9A02',
          },
          lineStyle: {
            width: 0.5,
            color: '#FF9A02',
          },
          emphasis: {
            itemStyle: {
              color: '#FF9A02',
            },
            lineStyle: {
              color: '#F1F1F1',
            },
          },
          datasetIndex: 2,
          symbol: 'circle',
          symbolSize: 8,
          encode: {
            x: 'month',
            y: 'monthlyRevenue',
            tooltip: 'monthlyRevenue',
          },
          markLine: {
            silent: true,
            symbol: ['none', 'none'],
            label: { show: false },
            data: [
              {
                xAxis: 'max',
              },
            ],
            lineStyle: {
              width: 2,
              type: 'solid',
              color: '#BBE2FF',
            },
          },
          zlevel: 1,
        },
      ],
    }),
    [dataset, tooltip]
  );

  useEffect(() => {
    if (chartRef.current) {
      echartRef.current = echarts.init(chartRef.current);
      echartRef.current.on('highlight', function (params) {
        echartRef.current?.setOption(
          {
            series: [
              {
                itemStyle: {
                  color: '#F1F1F1',
                },
                lineStyle: {
                  color: '#F1F1F1',
                },
              },
              {
                itemStyle: {
                  color: '#F1F1F1',
                },
                lineStyle: {
                  color: '#F1F1F1',
                },
              },
            ],
          },
          false
        );
      });
      echartRef.current.on('downplay', function (params) {
        echartRef.current?.setOption(
          {
            series: [
              {
                itemStyle: {
                  color: '#B0BEC5',
                },
                lineStyle: {
                  color: '#B0BEC5',
                },
              },
              {
                itemStyle: {
                  color: '#FF9A02',
                },
                lineStyle: {
                  color: '#FF9A02',
                },
              },
            ],
          },
          false
        );
      });
    }
  }, []);

  useEffect(() => {
    echartRef.current?.setOption(chartOption, true);
  }, [chartOption]);

  return <div className="w-full h-5/6" ref={chartRef}></div>;
};

export default LineDatasetChart;
