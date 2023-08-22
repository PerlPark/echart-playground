import { EChartsOption } from 'echarts';

const lowest = [10, 30, 23, 5, 10, 30, 23, 5, 10, 30, 23, 5, 10, 30, 23, 5];
const open = [20, 40, 36, 15, 20, 40, 36, 15, 20, 40, 36, 15, 20, 40, 36, 15];
const close = [34, 50, 42, 38, 34, 50, 42, 38, 34, 50, 42, 38, 34, 50, 42, 38];
const highest = [
  38, 60, 46, 42, 38, 60, 46, 42, 38, 60, 46, 42, 38, 60, 46, 42,
];

const transparent = (data: number[], stack: string) => ({
  name: 'Placeholder',
  type: 'bar',
  stack: stack,
  silent: true,
  itemStyle: {
    borderColor: 'transparent',
    color: 'transparent',
  },
  emphasis: {
    itemStyle: {
      borderColor: 'transparent',
      color: 'transparent',
    },
  },
  data: data,
});

const candleChartOption2: EChartsOption = {
  xAxis: {
    type: 'category',
  },
  yAxis: {
    type: 'value',
  },
  series: [
    transparent(lowest, 'low/high'),
    {
      type: 'bar',
      stack: 'low/high',
      data: lowest.map((v, i) => highest[i] - v),
      barWidth: 6,
      silent: true,
      itemStyle: {
        color: '#BAFFD5',
        borderRadius: 5,
      },
    },
    transparent(open, 'open/close'),
    {
      type: 'bar',
      stack: 'open/close',
      data: open.map((v, i) => close[i] - v),
      barGap: '-100%',
      barWidth: 6,
      itemStyle: {
        color: '#00E494',
        borderRadius: 5,
      },
    },
    {
      type: 'scatter',
      symbol:
        'image://data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAiIGhlaWdodD0iMTAiIHZpZXdCb3g9IjAgMCAxMCAxMCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0xMCA2SDBWNEgxMFY2WiIgZmlsbD0id2hpdGUiLz4KPC9zdmc+Cg==',
      data: [23, 45, 38, 24, 24, 45, 35, 25, 23, 45, 38, 24, 24, 45, 35, 25],
      symbolOffset: [0, '-50%'],
      itemStyle: {
        opacity: 1,
      },
    },
  ],
};

export default candleChartOption2;
