'use client';

import LineDatasetChart from '@/components/LineDatasetChart';
import data from '@/data';

const converted = Array.from(data, (d) => {
  const date = d.statisticsKey.split('-').map(Number);
  return [date[0], date[1], Number(d.monthlyRevenue)];
});

const dataset = [
  {
    source: converted,
    dimensions: ['year', 'month', 'monthlyRevenue'],
  },
  {
    transform: {
      type: 'filter',
      print: true,
      config: { dimension: 'year', '=': 2023 },
    },
  },
  {
    transform: {
      type: 'filter',
      print: true,
      config: { dimension: 'year', '=': 2022 },
    },
  },
];

export default function CustomTooltip() {
  return (
    <div className="w-full h-full">
      <LineDatasetChart
        dataset={dataset}
        data={[
          {
            type: 'line',
            color: '#FF9A02',
            datasetIndex: 1,
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
            lineStyle: {
              width: 0.5,
            },
            zlevel: 1,
          },
          {
            type: 'line',
            datasetIndex: 2,
            symbol: 'circle',
            symbolSize: 8,
            color: '#B0BEC5',
            encode: {
              x: 'month',
              y: 'monthlyRevenue',
              tooltip: 'monthlyRevenue',
            },
            lineStyle: {
              width: 0.5,
            },
            zlevel: 1,
          },
        ]}
      />
    </div>
  );
}
