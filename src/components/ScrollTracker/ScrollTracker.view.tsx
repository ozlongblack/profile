import React, { FunctionComponent } from 'react';
import { animated, useSpring } from 'react-spring';
import { ScrollTrackerProps } from './ScrollTracker.props';

const ScrollTracker: FunctionComponent<ScrollTrackerProps> = (
  props: ScrollTrackerProps,
): JSX.Element => {
  const style: any = useSpring({
    width: `${props.position}%`,
  });

  return (
    <div className="scroll-tracker">
      <animated.div className="scroll-tracker__gauge" style={style} />
    </div>
  );
};

export default ScrollTracker;
