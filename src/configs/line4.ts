import tooltipConfig from '@/tooltip';
import { EChartsOption } from 'echarts';

const lineChartOption4 = ({ isSmooth = false }: any): EChartsOption => ({
  xAxis: {
    type: 'category',
    data: ['1월', '2월', '3월', '4월', '5월', '6월'],
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
      data: [4, 5],
      type: 'line',
      smooth: isSmooth,
      zlevel: 1,
      markArea: {
        itemStyle: {
          color: '#e0e6f1',
          opacity: 0.4,
        },
        data: [
          [
            // 10~90%이 그래프 안
            {
              name: '',
              x: '25%',
            },
            {
              x: '35%',
            },
          ],
        ],
      },
    },
  ],
});

export default lineChartOption4;
