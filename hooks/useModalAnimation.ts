import { useState, useEffect } from "react";

export function useModalAnimation(isOpen: boolean, duration: number = 1000) {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setIsMounted(true);
      document.body.style.overflow = "hidden";
    } else {
      const timer = setTimeout(() => {
        setIsMounted(false);
        document.body.style.overflow = "unset";
      }, duration);
      return () => clearTimeout(timer);
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen, duration]);

  return isMounted;
}