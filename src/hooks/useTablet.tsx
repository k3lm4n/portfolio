import { useEffect, useState } from "react";

const MOBILE_MAX_WIDTH = 425;

export default function useTablet() {
  const [isTablet, setIsTablet] = useState(false);

  function handleResize() {
    setIsTablet(window.innerWidth <= MOBILE_MAX_WIDTH);
  }

  useEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return isTablet;
}
