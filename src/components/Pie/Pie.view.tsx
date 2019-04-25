import React, { useEffect, useRef, useState } from 'react';
import { animated, useSpring } from 'react-spring';
import * as d3 from 'd3';
import { ANIMATIONS } from 'consts';
import { PieProps } from './Pie.props';

const generateData = (value, length = 4): Record<string, number>[] =>
  d3.range(length).map(
    (item: number, index: number): Record<string, number> => ({
      date: index,
      value:
        value === null || value === undefined ? Math.random() * 100 : value,
    }),
  );

const colors = d3.scaleOrdinal(['cyan', 'magenta', 'yellow', 'black']);
const format = d3.format('.2f');
const animationConfig: Record<string, any> = {
  from: { t: 0 },
  to: { t: 1 },
  config: { duration: ANIMATIONS.animationDuration },
  reset: true,
};

const Arc = ({
  index,
  from,
  to,
  createArc,
  colors,
  format,
  animatedProps,
}: Record<string, any>): any => {
  const interpolator = d3.interpolate(from, to);

  return (
    <g key={index} className="arc">
      <animated.path
        className="arc"
        d={animatedProps.t.interpolate(
          (t: number): Record<string, any> => createArc(interpolator(t)),
        )}
        fill={colors(index)}
      />
      <animated.text
        className="label"
        transform={animatedProps.t.interpolate(
          (t: number): string =>
            `translate(${createArc.centroid(interpolator(t))})`,
        )}
      >
        {animatedProps.t.interpolate(
          (t: number): number => format(interpolator(t).value),
        )}
      </animated.text>
    </g>
  );
};

const Pie = (props: PieProps): JSX.Element => {
  const [data, setData] = useState(generateData(0));
  const cache = useRef<any | null>([]);
  const createPie = d3
    .pie()
    .value((d: Record<string, number>): number => d.value)
    .sort(null);
  const createArc = d3
    .arc()
    .innerRadius(props.innerRadius)
    .outerRadius(props.outerRadius);

  const pieData = createPie(data);
  const previousData = createPie(cache.current);

  const [animatedProps, setAnimatedProps] = useSpring(
    (): Record<string, any> => animationConfig,
  );
  setAnimatedProps(animationConfig);

  useEffect((): (() => void) => {
    setData(generateData(null));

    const pieTransition = setInterval((): void => {
      setData(generateData(null));
    }, 5000);

    return (): void => {
      clearInterval(pieTransition);
    };
  }, []);

  useEffect(
    (): void => {
      if (cache.current) {
        cache.current = pieData;
      }
    },
  );

  return (
    <svg className="pie">
      <g transform={`translate(${props.outerRadius} ${props.outerRadius})`}>
        {pieData.map(
          (d: Record<string, any>, i: number): any => (
            <Arc
              key={i}
              index={i}
              from={previousData[i]}
              to={d}
              createArc={createArc}
              colors={colors}
              format={format}
              animatedProps={animatedProps}
            />
          ),
        )}
      </g>
    </svg>
  );
};

export default Pie;
