'use client';

import * as echarts from 'echarts';
import { useEffect, useMemo, useRef } from 'react';

type Props = {
  donut: boolean;
  borderRadius: number;
  borderWidth: number;
  emphasisLabel: boolean;
};

const PieChart = ({
  donut,
  borderRadius,
  borderWidth,
  emphasisLabel,
}: Props) => {
  const chartRef = useRef(null);
  const echartRef = useRef<echarts.ECharts | null>(null);

  const emphasisLabelObj = useMemo(
    () =>
      emphasisLabel
        ? {
            label: {
              show: false,
              position: 'center',
            },
            emphasis: {
              label: {
                show: true,
                fontSize: 40,
                fontWeight: 'bold',
              },
            },
          }
        : {
            emphasis: {
              itemStyle: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: 'rgba(0, 0, 0, 0.5)',
              },
            },
          },
    [emphasisLabel]
  );

  // --------------
  const chartOption = useMemo(
    () => ({
      tooltip: {
        trigger: 'item',
      },
      legend: {
        orient: 'horizontal',
        left: 'center',
        bottom: 'bottom',
      },
      series: [
        {
          name: 'Access From',
          type: 'pie',
          radius: donut ? ['40%', '70%'] : '50%',
          itemStyle: {
            borderRadius: borderRadius,
            borderColor: '#fff',
            borderWidth: borderWidth,
          },
          data: [
            { value: 1048, name: 'Search Engine' },
            { value: 735, name: 'Direct' },
            { value: 580, name: 'Email' },
            { value: 484, name: 'Union Ads' },
            { value: 300, name: 'Video Ads' },
          ],
          ...emphasisLabelObj,
        },
      ],
    }),
    [borderRadius, borderWidth, donut, emphasisLabelObj]
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

export default PieChart;
