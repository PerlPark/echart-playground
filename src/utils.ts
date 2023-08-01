const sum = (data: (number | null)[]) =>
  data.reduce<number>((p, c) => (c !== null ? p + c : p), 0);

const null2집계중 = (data: (number | null)[]) =>
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
