import null2집계중 from '@/utils';
import tooltipConfig from '@/tooltip';

const rawData1 = [2, 5, 5, 1, null, 3, 4];
const rawData2 = [3, 4, 6, null, null, 3, 4];

const data1 = null2집계중(rawData1);
const data2 = null2집계중(rawData2);

const barChartOption2 = ({ isSmooth = false }: any) => ({
  xAxis: {
    type: 'category',
    data: ['1월', '2월', '3월', '4월', '5월', '6월', '7월'],
  },
  yAxis: {
    type: 'value',
  },
  tooltip: tooltipConfig((obj: any) => {
    console.log(obj);
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
    },
    {
      data: data2,
      type: 'bar',
    },
    {
      data: [2.5, 4.5, 5.5, 3.5, null, 3.5, 4.5],
      type: 'line',
      smooth: isSmooth,
      zlevel: 1,
    },
  ],
});

export default barChartOption2;
