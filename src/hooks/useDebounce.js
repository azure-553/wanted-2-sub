import { useEffect, useState } from "react";

export const useDebounce = (callback, delay) => {
  const [debouncedCallback, setDebouncedCallback] = useState(() => callback);

  useEffect(() => {
    setDebouncedCallback(() => callback);
  }, [callback]);

  useEffect(() => {
    const debounceHandler = setTimeout(() => {
      debouncedCallback();
    }, delay);

    return () => {
      clearTimeout(debounceHandler);
    };
  }, [debouncedCallback, delay]);

  return debouncedCallback;
};
