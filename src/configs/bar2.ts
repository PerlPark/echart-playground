import convertAddingUp from '@/utils';
import { EChartsOption } from 'echarts';

type Params = {
  isSmooth?: boolean;
  textOpacity: number;
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
const data1 = convertAddingUp(rawData1);
const data2 = convertAddingUp(rawData2);
const data3 = [2.5, 4.5, 5.5, 3.5, 4.5, 2];

type DataType =
  | number
  | {
      value: number;
      itemStyle: { color: string };
      label?:
        | {
            show: boolean;
            position: string;
            color: string;
            fontSize: number;
            formatter: string;
          }
        | undefined;
    }
  | null;

export const data = [data1, data2, data3] as DataType[][];

export const series = (
  isSmooth: boolean = false,
  emphasis: 'none' | 'series' | 'self'
): EChartsOption['series'] => [
  {
    data: data1,
    name: '파랑',
    type: 'bar',
    emphasis: {
      focus: emphasis,
    },
  },
  {
    data: data2,
    name: '초록',
    type: 'bar',
    emphasis: {
      focus: emphasis,
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

const barChartOption2 = ({
  isSmooth = false,
  textOpacity,
}: Params): EChartsOption => ({
  xAxis: {
    type: 'category',
    data: ['1월', '2월', '3월', '4월', '5월', '6월', '7월'],
  },
  yAxis: {
    type: 'value',
  },
  legend: {},
  graphic: {
    elements: [
      {
        type: 'text',
        left: '71.3%',
        y: 126,
        style: {
          text: '집계중',
          fill: '#90A4AE',
          font: '12px',
          opacity: textOpacity,
        },
      },
      {
        type: 'text',
        left: '80%',
        y: 126,
        style: {
          text: '집계중',
          fill: '#90A4AE',
          font: '12px',
          opacity: textOpacity,
        },
      },
    ],
  },
  series: series(isSmooth, 'self'),
});

export default barChartOption2;
