import { useEffect, useRef, useState } from "react";

export const useClickOutside = (initialState) => {
  const [isVisible, setIsVisible] = useState(initialState);
  const ref = useRef(null);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (ref.current && !ref.current.contains(e.target)) {
        setIsVisible(false);
      }
    };

    document.addEventListener("click", handleClickOutside, true);
    return () => {
      document.removeEventListener("click", handleClickOutside, true);
    };
  }, [ref]);

  return { ref, isVisible, setIsVisible };
};
