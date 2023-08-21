'use client';

import { useEffect, useRef, useState } from 'react';
import * as _echarts from 'echarts';
import { widthState } from '@/recoil/options';
import { useRecoilState } from 'recoil';

type Props = {
  option: any;
  events?: (chart: _echarts.ECharts) => void;
};

const Chart = ({ option, events }: Props) => {
  const chartRef = useRef(null);
  const [echarts, setEcharts] = useState<_echarts.ECharts | null>(null);
  const [width] = useRecoilState(widthState);

  useEffect(() => {
    if (chartRef.current) {
      setEcharts(_echarts.init(chartRef.current));
    }
  }, []);

  useEffect(() => {
    if (!echarts) return;

    echarts.setOption(option, false);
  }, [echarts, option]);

  useEffect(() => {
    if (echarts && events) {
      events(echarts);
    }
  }, [echarts, events]);

  return (
    <div ref={chartRef} className="h-72" style={{ width: `${width}px` }} />
  );
};

export default Chart;
