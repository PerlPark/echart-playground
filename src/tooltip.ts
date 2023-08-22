import { TooltipComponentOption } from 'echarts';
import { CallbackDataParams } from 'echarts/types/src/util/types';

const tooltipConfig = (
  formatter: (params: CallbackDataParams[]) => string
): TooltipComponentOption => ({
  trigger: 'axis',
  formatter: (params) => {
    if (Array.isArray(params)) {
      return formatter(params);
    }
    return '데이터가 없습니다.';
  },
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
