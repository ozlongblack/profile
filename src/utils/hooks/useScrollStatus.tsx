import { useEffect, useState } from 'react';
import { Scroll } from 'types/Scroll';
import { NAVIGATIONS } from 'consts';

const isSticky: Function = (
  scroll: number,
  target: number = NAVIGATIONS.md - NAVIGATIONS.sm,
): boolean => scroll > target;

const calcPosition: Function = (
  scroll: number,
  height: number = document.body.scrollHeight - window.innerHeight,
): number => ((scroll / height) * 100) | 0;

const useScrollStatus: Function = (scroll: number = window.scrollY): Scroll => {
  const [stickyState, setStickyState]: [boolean, Function] = useState(
    isSticky(scroll),
  );
  const [positionState, setPositionState]: [number, Function] = useState(
    calcPosition(scroll),
  );

  function handleScrollChange(): void {
    setStickyState(isSticky(window.scrollY));
    setPositionState(calcPosition(window.scrollY));
  }

  useEffect((): (() => void | undefined) => {
    window.addEventListener('scroll', handleScrollChange);

    return function cleanup(): void {
      window.removeEventListener('scroll', handleScrollChange);
    };
  }, []);

  return {
    sticky: stickyState,
    position: positionState,
  };
};

export default useScrollStatus;
