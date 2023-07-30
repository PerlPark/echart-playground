import tooltipConfig from '@/tooltip';

const lineChartOption3 = ({ isSmooth = false }: any) => ({
  xAxis: {
    type: 'category',
    data: ['1월', '2월', '3월', '4월', '5월', '6월'],
  },
  yAxis: {
    type: 'value',
  },
  tooltip: tooltipConfig(
    (obj: any) =>
      `${obj[0].axisValue}<br/><strong style="font-weight:600;color:#02FF9A">${
        obj[0].value ?? '데이터가 없습니다.'
      }</strong>`
  ),
  series: [
    {
      data: [3, 4, 5, null, null, null],
      type: 'line',
      smooth: isSmooth,
      zlevel: 1,
    },
  ],
});

export default lineChartOption3;
