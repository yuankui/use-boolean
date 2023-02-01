import { useCallback, useMemo, useState } from 'react';


const useBoolean = (v: boolean) => {
  const [value, setValue] = useState(v);

  const toggle = useCallback(() => setValue((prev) => !prev), [setValue]);
  const setFalse = useCallback(() => setValue(false), []);
  const setTrue = useCallback(() => setValue(true), []);

  return useMemo(
    () => ({
      value,
      setValue,
      update: setValue,
      toggle,
      setTrue,
      setFalse,
    }),
    [value, toggle, setTrue, setFalse],
  );
};

export default useBoolean;
