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
      config: { dimension: 'year', '=': 2022 },
    },
  },
  {
    transform: {
      type: 'filter',
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

          let message = `지난해 ${month}월 총 매출<br/><strong style="font-weight:600;color:#02FF9A">${lastYearRevenue.toLocaleString(
            'ko-KR'
          )}원</strong>`;

          if (obj.length > 1) {
            message =
              `올해 ${month}월 총 매출<br/><strong style="font-weight:600;color:#02FF9A">${thisYearRevenue.toLocaleString(
                'ko-KR'
              )}원</strong><br/><strong style="font-weight:600;color:#FF3B30">${arrow}${diff.toLocaleString(
                'ko-KR'
              )}원 ${rate.toFixed(1)}%</strong><br/><br/>` + message;
          }

          return message;
        })}
      />
    </div>
  );
}
