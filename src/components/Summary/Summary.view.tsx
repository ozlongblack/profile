import React from 'react';
import { useSpring, animated } from 'react-spring';
import { map, nth } from 'lodash/fp';
import { Pie } from 'components';
import { Feature } from 'types/Feature';
import { ReactComponent as Lambda } from 'assets/images/lambda.svg';
import { SummaryProps } from './Summary.props';

const trans1 = (x: number, y: number): string =>
  `translate3d(${x / 50}px,${y / 50}px,0)`;
const trans2 = (x: number, y: number): string =>
  `translate3d(${2 + x / 100}px,${4 + y / 100}px,0)`;
const trans3 = (x: number, y: number): string =>
  `translate3d(${4 + x / 150}px,${8 + y / 150}px,0)`;
const trans4 = (x: number, y: number): string =>
  `translate3d(${x / 50}px,${y / 50}px,0)`;
const trans5 = (x: number, y: number): string =>
  `translate3d(${-26 + x / 50}px,${50 + y / 50}px,0)`;
const trans6 = (x: number, y: number): string =>
  `translate3d(${26 + x / 50}px,${50 + y / 50}px,0)`;
const calc = (x: number, y: number): number[] => [
  x - window.innerWidth / 2,
  y - window.innerHeight / 2,
];

const renderFeatures = (
  features: Feature[],
  style: Record<string, string>,
): JSX.Element[] =>
  map(
    (feature: Feature): JSX.Element => {
      return (
        <div className="stack__summary__item__desc">
          <h3 style={{ color: style.fontLabelColor }}>{feature.title}</h3>
          <p style={{ color: style.fontDescriptionColor }}>{feature.summary}</p>
        </div>
      );
    },
  )(features);

const Summary = (props: SummaryProps): JSX.Element => {
  const profile = props.profile.data;
  const features = profile.get('features');

  const theme = props.theme.data;
  const generalStyle = theme.get('general');
  const featureNodes = renderFeatures(features, generalStyle);

  const [animatedProps, set] = useSpring(
    (): Record<string, any> => ({
      xy: [0, 0],
      config: { mass: 10, tension: 550, friction: 140 },
    }),
  );

  return (
    <div
      className="stack__summary"
      onMouseMove={({ clientX: x, clientY: y }): void => {
        set({ xy: calc(x, y) });
      }}
    >
      <h3 className="tool__header">About Me</h3>
      <div className="stack__summary__item">
        <div
          className="stack__summary__placeholder"
          style={{
            backgroundColor: generalStyle.placeholderColor,
          }}
        >
          <animated.div
            className="stack__summary__item__logo"
            style={{
              fill: 'cyan',
              transform: animatedProps.xy.interpolate(trans1),
            }}
          >
            <Lambda />
          </animated.div>
          <animated.div
            className="stack__summary__item__logo"
            style={{
              fill: 'magenta',
              transform: animatedProps.xy.interpolate(trans2),
            }}
          >
            <Lambda />
          </animated.div>
          <animated.div
            className="stack__summary__item__logo"
            style={{
              fill: 'yellow',
              transform: animatedProps.xy.interpolate(trans3),
            }}
          >
            <Lambda />
          </animated.div>
        </div>
        {nth(0)(featureNodes)}
      </div>
      <div className="stack__summary__item">
        <div
          className="stack__summary__placeholder"
          style={{
            backgroundColor: generalStyle.placeholderColor,
          }}
        >
          <animated.div
            className="stack__summary__item__circle stack__summary__item__circle--1"
            style={{
              borderColor: 'yellow',
              backgroundColor: 'yellow',
              transform: animatedProps.xy.interpolate(trans4),
            }}
          />
          <animated.div
            className="stack__summary__item__circle stack__summary__item__circle--2"
            style={{
              borderColor: 'magenta',
              backgroundColor: 'magenta',
              transform: animatedProps.xy.interpolate(trans5),
            }}
          />
          <animated.div
            className="stack__summary__item__circle stack__summary__item__circle--3"
            style={{
              borderColor: 'cyan',
              backgroundColor: 'cyan',
              transform: animatedProps.xy.interpolate(trans6),
            }}
          />
        </div>
        {nth(1)(featureNodes)}
      </div>
      <div className="stack__summary__item">
        <div
          className="stack__summary__placeholder"
          style={{
            backgroundColor: generalStyle.placeholderColor,
          }}
        >
          <animated.div
            className="stack__summary__item__logo"
            style={{
              transform: animatedProps.xy.interpolate(trans4),
            }}
          >
            <Pie innerRadius={32} outerRadius={60} />
          </animated.div>
        </div>
        {nth(2)(featureNodes)}
      </div>
    </div>
  );
};

export default Summary;
