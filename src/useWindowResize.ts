import { useState, useEffect } from "react";

type Breakpoint = "xs" | "sm" | "md" | "lg" | "xl";

export function useWindowResize() {
  const getSize = () => {
    const width = window.innerWidth;
    const height = window.innerHeight;

    let breakpoint: Breakpoint = "xs";
    if (width >= 1280) breakpoint = "xl";
    else if (width >= 1024) breakpoint = "lg";
    else if (width >= 768) breakpoint = "md";
    else if (width >= 640) breakpoint = "sm";

    return { width, height, breakpoint };
  };

  const [size, setSize] = useState(getSize);

  // biome-ignore lint/correctness/useExhaustiveDependencies: <intended>
  useEffect(() => {
    function handleResize() {
      setSize(getSize());
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return size;
}
