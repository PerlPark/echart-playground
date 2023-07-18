import { useCallback, useState } from 'react';

const useToggle = (
  defaultState: boolean = false
): [boolean, () => void, React.Dispatch<React.SetStateAction<boolean>>] => {
  const [state, setState] = useState(defaultState);

  const toggleState = useCallback(() => {
    setState((v) => !v);
  }, []);

  return [state, toggleState, setState];
};

export default useToggle;
