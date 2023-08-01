import null2집계중 from '@/utils';
import tooltipConfig from '@/tooltip';

const rawData1 = [2, 5, 5, 1, null, 3, 4];

const data1 = null2집계중(rawData1);

const barChartOption1 = ({ isSmooth = false }: any) => ({
  mainColor: '#5570c6',
  dimmedColor: '#c0c8e9',
  xAxis: {
    type: 'category',
    data: ['1월', '2월', '3월', '4월', '5월', '6월', '7월'],
  },
  yAxis: {
    type: 'value',
  },
  tooltip: tooltipConfig((obj: any) => {
    return `${
      obj[0].axisValue
    }<br/><strong style="font-weight:600;color:#02FF9A">${
      obj[0].data.label ? '집계중입니다.' : obj[0].value ?? '데이터가 없습니다.'
    }</strong>`;
  }),
  series: [
    {
      data: data1,
      type: 'bar',
      itemStyle: {
        color: '#5570c6',
      },
      emphasis: {
        itemStyle: {
          color: '#5570c6',
        },
      },
    },
    {
      data: [2.5, 5.5, 5.5, 1.5, null, 3.5, 4.5],
      type: 'line',
      smooth: isSmooth,
      zlevel: 1,
    },
  ],
});

export default barChartOption1;
