import tooltipConfig from '@/tooltip';
import { EChartsOption } from 'echarts';

const lineChartOption1 = ({ isSmooth, color, color2 }: any): EChartsOption => ({
  xAxis: {
    type: 'category',
    data: ['1월', '2월', '3월', '4월', '5월', '6월', '7월', '8월'],
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
      data: [5, 7, 8, 7],
      type: 'line',
      smooth: isSmooth,
      color,
      zlevel: 1,
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
    },
    {
      data: [3, 4, 5, 4, 4, 2, 3, 3],
      type: 'line',
      smooth: isSmooth,
      color: color2,
      zlevel: 1,
    },
  ],
});

export default lineChartOption1;
