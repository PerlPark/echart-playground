import null2집계중 from '@/utils';

type Params = {
  isSmooth?: boolean;
};

const color1 = '#5570c6';
const color2 = '#91cc75';

const rawData1 = [
  { value: 2, itemStyle: { color: color1 } },
  { value: 5, itemStyle: { color: color1 } },
  { value: 5, itemStyle: { color: color1 } },
  { value: 3, itemStyle: { color: color1 } },
  { value: 4, itemStyle: { color: color1 } },
  { value: 1, itemStyle: { color: color1 } },
  null,
];
const rawData2 = [
  { value: 3, itemStyle: { color: color2 } },
  { value: 4, itemStyle: { color: color2 } },
  { value: 6, itemStyle: { color: color2 } },
  { value: 3, itemStyle: { color: color2 } },
  { value: 4, itemStyle: { color: color2 } },
  null,
  null,
];
const data1 = null2집계중(rawData1);
const data2 = null2집계중(rawData2);
const data3 = [2.5, 4.5, 5.5, 3.5, 4.5, 2, null];

export const datas = [data1, data2, data3];

export const series = (isSmooth: boolean = false) => [
  {
    data: data1,
    name: '파랑',
    type: 'bar',
    emphasis: {
      focus: 'series',
    },
  },
  {
    data: data2,
    name: '초록',
    type: 'bar',
    emphasis: {
      focus: 'series',
    },
  },
  {
    data: data3,
    name: '노랑',
    type: 'line',
    smooth: isSmooth,
    zlevel: 1,
  },
];

const barChartOption2 = ({ isSmooth = false }: Params) => ({
  xAxis: {
    type: 'category',
    data: ['1월', '2월', '3월', '4월', '5월', '6월', '7월'],
  },
  yAxis: {
    type: 'value',
  },
  legend: {},
  series: series(isSmooth),
});

export default barChartOption2;
