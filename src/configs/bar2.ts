import { 집계중List } from '@/utils';

type Params = {
  isSmooth?: boolean;
  selectTooltip: (params: any) => void;
  data1: 집계중List;
  data2: 집계중List;
  data3: (number | null)[];
};

const barChartOption2 = ({
  isSmooth = false,
  selectTooltip,
  data1,
  data2,
  data3,
}: Params) => ({
  xAxis: {
    type: 'category',
    data: ['1월', '2월', '3월', '4월', '5월', '6월', '7월'],
  },
  yAxis: {
    type: 'value',
  },
  legend: {},
  selectTooltip: selectTooltip,
  series: [
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
  ],
});

export default barChartOption2;
