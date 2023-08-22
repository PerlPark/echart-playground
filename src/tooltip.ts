import {
  EChartsOption,
  TooltipComponentFormatterCallback,
  TooltipComponentFormatterCallbackParams,
} from 'echarts';

type Formatter =
  TooltipComponentFormatterCallback<TooltipComponentFormatterCallbackParams>;

const tooltipConfig = (formatter: Formatter): EChartsOption['tooltip'] => ({
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
