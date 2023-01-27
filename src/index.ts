import { useState, useMemo, useCallback } from "react";

export const useBoolean = (v: boolean) => {
  const [value, setValue] = useState(v);

  const toggle = useCallback(() => setValue((prev) => !prev), [setValue]);
  const setFalse = useCallback(() => setValue(false), []);
  const setTrue = useCallback(() => setValue(true), []);

  const cached = useMemo(
    () => ({
      value,
      setValue,
      update: setValue,
      toggle,
      setTrue,
      setFalse,
    }),
    [value, toggle, setTrue, setFalse]
  );

  return cached;
};
