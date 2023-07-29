type Data = { dataIndex: number; axisValue: string; data: any[] }[];

type Formatter = (obj: Data) => string;

const tooltipConfig = (formatter: Formatter) => ({
  trigger: 'axis',
  formatter: formatter,
  position: function () {
    return [0, -50];
  },
  backgroundColor: '#374151',
  textStyle: {
    color: '#ffffff',
  },
  padding: 20,
  extraCssText: 'width: 100%',
});

export default tooltipConfig;
