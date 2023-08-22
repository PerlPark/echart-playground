import { BarSeriesOption } from 'echarts';

const sum = (data: (number | null | { value: number })[]) =>
  data.reduce<number>(
    (p, c) => (c !== null ? p + (typeof c === 'object' ? c.value : c) : p),
    0
  );

const null2집계중 = (
  data: (number | { value: number; itemStyle: { color: string } } | null)[]
): BarSeriesOption['data'] =>
  data.map((v) =>
    v !== null
      ? v
      : {
          value: sum(data) / data.length,
          itemStyle: {
            color: '#EEF1F3',
          },
          label: {
            show: false,
            position: 'top',
            color: '#90A4AE',
            fontSize: 10,
            formatter: '집계중',
          },
        }
  );

export default null2집계중;
