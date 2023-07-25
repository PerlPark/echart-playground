'use client';

import LineDatasetChart from '@/components/LineDatasetChart';
import data from '@/data';
import tooltipConfig from '@/tooltip';

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
      config: { dimension: 'year', '=': 2022 },
    },
  },
  {
    transform: {
      type: 'filter',
      print: true,
      config: { dimension: 'year', '=': 2023 },
    },
  },
];

export default function CustomTooltip() {
  return (
    <div className="w-full h-full">
      <LineDatasetChart
        dataset={dataset}
        tooltip={tooltipConfig((obj) => {
          const month = obj[0].axisValue;
          const lastYearRevenue = obj[0].data[2];
          const thisYearRevenue = obj[1]?.data[2];

          const rate = 100 - (lastYearRevenue / thisYearRevenue) * 100;
          const arrow = rate > 0 ? '▲' : rate === 0 ? '-' : '▼';
          const diff = thisYearRevenue - lastYearRevenue;

          let message = `지난해 ${month}월 총 매출<br/>${lastYearRevenue.toLocaleString(
            'ko-KR'
          )}원`;

          if (obj.length > 1) {
            message =
              `올해 ${month}월 총 매출<br/>${thisYearRevenue.toLocaleString(
                'ko-KR'
              )}원<br/>${arrow}${diff.toLocaleString('ko-KR')}원 ${rate.toFixed(
                1
              )}%<br/><br/>` + message;
          }

          return message;
        })}
        data={[
          {
            type: 'line',
            datasetIndex: 1,
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
          {
            type: 'line',
            color: '#FF9A02',
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
