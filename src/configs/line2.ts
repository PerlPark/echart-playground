import tooltipConfig from '@/tooltip';
import { EChartsOption } from 'echarts';

const lineChartOption2 = ({ isSmooth = false }: any): EChartsOption => ({
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
      data: [3, 4, 5, 2, 3, 3],
      type: 'line',
      smooth: isSmooth,
      zlevel: 1,
      markArea: {
        itemStyle: {
          color: '#e0e6f1',
          opacity: 0.3,
        },
        data: [
          [
            {
              name: '',
              xAxis: '3월',
            },
            {
              xAxis: '6월',
            },
          ],
        ],
      },
    },
  ],
});

export default lineChartOption2;
