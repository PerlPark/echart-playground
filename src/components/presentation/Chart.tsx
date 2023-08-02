'use client';

import { useEffect, useRef, useState } from 'react';
import * as echarts from 'echarts';

type Props = {
  option: any;
};

const Chart = ({ option }: Props) => {
  const chartRef = useRef(null);
  const [echart, setEchart] = useState<echarts.ECharts | null>(null);

  useEffect(() => {
    if (chartRef.current) {
      setEchart(echarts.init(chartRef.current));
    }
  }, []);

  useEffect(() => {
    if (!echart) return;

    echart.setOption(option, false);

    if (option.selectTooltip) {
      echart.off('click');
      echart.on('click', function (params) {
        option.selectTooltip(params);
      });
    }

    if (option.mainColor && option.dimmedColor) {
      echart.off('highlight');
      echart.on('highlight', function () {
        echart.setOption(
          {
            series: [
              {
                itemStyle: {
                  color: option.dimmedColor,
                },
                lineStyle: {
                  color: option.dimmedColor,
                },
              },
            ],
          },
          false
        );
      });
      echart.off('downplay');
      echart.on('downplay', function (params) {
        echart.setOption(
          {
            series: [
              {
                itemStyle: {
                  color: option.mainColor,
                },
                lineStyle: {
                  color: option.mainColor,
                },
              },
            ],
          },
          false
        );
      });
    }
  }, [echart, option]);

  return <div ref={chartRef} className="h-80 w-full"></div>;
};

export default Chart;
