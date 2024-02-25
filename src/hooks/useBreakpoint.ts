import { useEffect, useRef, useState } from "react";

export enum BreakpointNames {
  mobile,
  aboveMobile,
}

const breakpoints = {
  0: BreakpointNames.mobile,
  600: BreakpointNames.aboveMobile,
};

export const useBreakpoint = () => {
  const [width, setWindowSize] = useState(window.innerWidth);

  const observer = useRef(
    new ResizeObserver(() => {
      setWindowSize(window.innerWidth);
    })
  );

  useEffect(() => {
    const observerCurrent = observer.current;
    observerCurrent.observe(document.documentElement);
    return () => observerCurrent.unobserve(document.documentElement);
  }, []);

  let breakpoint = null;

  if (0 < width && width < 600) {
    breakpoint = breakpoints[0];
  }
  if (width >= 600) {
    breakpoint = breakpoints[600];
  }

  return {
    isMobile: breakpoint === BreakpointNames.mobile,
    isAboveMobile: breakpoint === BreakpointNames.aboveMobile,
  };
};
