import { useState, useEffect } from "react";

function useDebounce(value: string, delay: number) {
  const [debouncedValue, setDebouncedValue] = useState(value);
  useEffect(() => {
    const debouncer = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);
    return () => {
      clearTimeout(debouncer);
    };
  }, [value, delay]);
  return debouncedValue;
}

export default useDebounce;
