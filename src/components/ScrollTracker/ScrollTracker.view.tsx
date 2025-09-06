import React, { FunctionComponent, ReactNode } from 'react';
import { animated, useSpring } from 'react-spring';
import { ScrollTrackerProps } from './ScrollTracker.props';

const ScrollTracker: FunctionComponent<ScrollTrackerProps> = (
  props: ScrollTrackerProps,
): ReactNode => {
  const theme = props.theme.data;
  const headerStyle = theme.get('header');

  const style: any = useSpring({
    width: `${props.position}%`,
  });

  return (
    <div className="scroll-tracker">
      <animated.div
        className="scroll-tracker__gauge"
        style={{ ...style, backgroundColor: headerStyle.scrollColor }}
      />
    </div>
  );
};

export default ScrollTracker;
