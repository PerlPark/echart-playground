'use client';

import { useEffect, useRef, useState } from 'react';
import * as _echarts from 'echarts';

type Props = {
  option: any;
  width: number;
  events?: (chart: _echarts.ECharts) => void;
};

const Chart = ({ option, width, events }: Props) => {
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

  useEffect(() => {
    if (echarts && events) {
      events(echarts);
    }
  }, [echarts, events]);

  return (
    <div ref={chartRef} className="h-72" style={{ width: `${width}px` }}></div>
  );
};

export default Chart;
