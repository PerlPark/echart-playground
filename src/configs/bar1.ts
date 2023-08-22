import null2집계중 from '@/utils';
import tooltipConfig from '@/tooltip';
import { EChartsOption } from 'echarts';

const rawData1 = [2, 5, 5, 1, null, 3, 4];

const data1 = null2집계중(rawData1);

type Props = {
  isSmooth?: boolean;
  color: string;
};

const barChartOption1 = ({
  isSmooth = false,
  color,
}: Props): EChartsOption => ({
  xAxis: {
    type: 'category',
    data: ['1월', '2월', '3월', '4월', '5월', '6월', '7월'],
  },
  yAxis: {
    type: 'value',
  },
  tooltip: tooltipConfig(
    (params) =>
      `${params[0].name}<br/><strong style="font-weight:600;color:#02FF9A">${
        params[0].value ?? '데이터가 없습니다.'
      }</strong>`
  ),
  series: [
    {
      data: data1,
      type: 'bar',
      itemStyle: {
        color: color,
      },
      emphasis: {
        itemStyle: {
          color: color,
        },
      },
    },
    {
      data: [2.5, 5.5, 5.5, 1.5, 3.5, 4.5],
      type: 'line',
      smooth: isSmooth,
      zlevel: 1,
    },
  ],
});

export default barChartOption1;
