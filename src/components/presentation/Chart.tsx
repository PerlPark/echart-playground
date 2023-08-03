'use client';

import { useEffect, useRef, useState } from 'react';
import * as _echarts from 'echarts';

type Props = {
  option: any;
  width: number;
};

const Chart = ({ option, width }: Props) => {
  const chartRef = useRef(null);
  const [echarts, setEcharts] = useState<_echarts.ECharts | null>(null);

  useEffect(() => {
    if (chartRef.current) {
      setEcharts(_echarts.init(chartRef.current));
    }
  }, []);

  useEffect(() => {
    if (!echarts) return;

    echarts.setOption(option, false);

    if (option.selectTooltip) {
      echarts.off('click');
      echarts.on('click', function (params) {
        option.selectTooltip(params);
      });
    }

    if (option.mainColor && option.dimmedColor) {
      echarts.off('highlight');
      echarts.on('highlight', function () {
        echarts.setOption(
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
      echarts.off('downplay');
      echarts.on('downplay', function (params) {
        echarts.setOption(
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
  }, [echarts, option]);

  useEffect(() => {
    if (echarts) {
      echarts.resize();
    }
  }, [echarts, width]);

  return (
    <div ref={chartRef} className="h-72" style={{ width: `${width}px` }}></div>
  );
};

export default Chart;
