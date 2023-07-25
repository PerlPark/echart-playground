type Data = {
  type: string;
  datasetIndex?: number;
  encode?: {
    x?: string;
    y?: string;
    tooltip?: string;
  };
  color?: string;
  symbolSize?: number;
  symbol?: string;
  markLine?: {
    silent?: boolean;
    symbol?: [string, string];
    label?: { show?: boolean };
    data?: {
      xAxis?: string;
    }[];
    lineStyle?: {
      width?: number;
      type?: string;
      color?: string;
    };
  };
  lineStyle?: {
    width?: number;
  };
  zlevel?: number;
};

export default Data;
