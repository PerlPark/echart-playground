'use client';

import { useEffect, useRef, useState } from 'react';
import * as echarts from 'echarts';

type Props = {
  option: any;
  width: number;
};

const Chart = ({ option, width }: Props) => {
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

  useEffect(() => {
    if (!echart) return;

    echart.resize();
  }, [echart, width]);

  return (
    <div ref={chartRef} className="h-72" style={{ width: `${width}px` }}></div>
  );
};

export default Chart;
