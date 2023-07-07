import { useCallback, useState } from 'react';

const useCommonOptions = () => {
  const [visualMap, setVisualMap] = useState(false);
  const [minMax, setMinMax] = useState(false);

  const toggleVisualMap = useCallback(() => {
    setVisualMap((v) => !v);
  }, []);

  const toggleMinMax = useCallback(() => {
    setMinMax((v) => !v);
  }, []);

  return {
    visualMap,
    toggleVisualMap,
    minMax,
    toggleMinMax,
  };
};

export default useCommonOptions;
