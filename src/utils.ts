export type 집계중List = (
  | number
  | { value: number; itemStyle: { color: string } }
  | null
)[];

const sum = (data: 집계중List) =>
  data.reduce<number>(
    (p, c) => (c !== null ? p + (typeof c === 'object' ? c.value : c) : p),
    0
  );

const null2집계중 = (data: 집계중List): 집계중List =>
  data.map((v) =>
    v !== null
      ? v
      : {
          value: sum(data) / data.length,
          itemStyle: {
            color: '#EEF1F3',
          },
          label: {
            show: true,
            position: 'top',
            color: '#90A4AE',
            fontSize: 10,
            formatter: '집계중',
          },
        }
  );

export default null2집계중;
