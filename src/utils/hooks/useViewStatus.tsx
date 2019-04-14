import { useEffect, useState } from 'react';
import { BREAKPOINTS } from 'consts';

const covertBreakpoint: Function = (width: number): string => {
  if (width <= BREAKPOINTS.sm) {
    return 'mobile';
  } else if (BREAKPOINTS.sm < width && width <= BREAKPOINTS.md) {
    return 'tablet';
  } else {
    return 'desktop';
  }
};

const useViewStatus: Function = (width: number = window.innerWidth): string => {
  const [viewState, setViewState]: [string, Function] = useState(
    covertBreakpoint(width),
  );

  function handleWidthChange(): void {
    setViewState(covertBreakpoint(window.innerWidth));
  }

  useEffect((): (() => void | undefined) => {
    window.addEventListener('resize', handleWidthChange);

    return function cleanup(): void {
      window.removeEventListener('resize', handleWidthChange);
    };
  }, []);

  return viewState;
};

export default useViewStatus;
