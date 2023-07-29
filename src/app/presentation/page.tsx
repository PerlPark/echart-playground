'use client';

import Chart from '@/components/presentation/Chart';

const Presentation = () => {
  const lineChartOption1 = {
    xAxis: {
      type: 'category',
      data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    },
    yAxis: {
      type: 'value',
    },
    series: [
      {
        data: [820, 932, 901, 934, 1290, 1330, 1320],
        type: 'line',
        smooth: true,
      },
    ],
  };

  return (
    <div className="grid grid-cols-3 gap-6 w-full p-6">
      <Chart option={lineChartOption1} />
    </div>
  );
};

export default Presentation;
