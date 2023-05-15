import { useEffect, useRef, useState } from "react";

export const useClickOutside = (initialState) => {
  const [isValue, setIsValue] = useState(initialState);
  const ref = useRef(null);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (ref.current && !ref.current.contains(e.target)) {
        setIsValue(false);
      }

      document.addEventListener("click", handleClickOutside, true);

      return () => {
        document.addEventListener("click", handleClickOutside, true);
      };
    };
  }, [ref]);

  return { ref, isValue, setIsValue };
};
