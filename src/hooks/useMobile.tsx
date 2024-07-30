import { useEffect, useState } from "react";

const MOBILE_MAX_WIDTH = 768;

export default function useMobile() {
  const [isMobile, setIsMobile] = useState(false);

  function handleResize() {
    setIsMobile(window.innerWidth <= MOBILE_MAX_WIDTH);
  }

  useEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return isMobile;
}
