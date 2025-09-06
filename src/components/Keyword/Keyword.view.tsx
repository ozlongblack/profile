import React, { ReactNode, useEffect, useRef, useState } from 'react';
import { useSpring, animated } from 'react-spring';
import { ANIMATIONS } from 'consts';
import { generateRandomString } from 'utils';
import { KeywordProps } from './Keyword.props';

const trans1 = (x: number, y: number): string =>
  `translate3d(${x / 500}px,${y / 50}px,0)`;
const trans2 = (x: number, y: number): string =>
  `translate3d(${x / 500}px,${y / 100}px,0)`;
const trans3 = (x: number, y: number): string =>
  `translate3d(${x / 500}px,${y / 150}px,0)`;

const Keyword = (props: KeywordProps): ReactNode => {
  const [keyword, setKeyword] = useState((): string => '');
  const [loading, setLoading] = useState((): number => 0);
  const counter = useRef(0);
  const loadingProps = useSpring({
    width: loading ? '100%' : '0%',
    config: {
      mass: 1,
      tension: 210,
      friction: 20,
      duration: ANIMATIONS.animationDuration,
    },
  });

  useEffect((): (() => void) => {
    const keywords = props.keywords;
    let keywordTransition: any;

    if (keywords) {
      setKeyword(keywords[counter.current].toUpperCase());
      setLoading(1);

      keywordTransition = setInterval((): void => {
        setKeyword(keywords[counter.current].toUpperCase());
        setLoading(0);
        counter.current = (counter.current + 1) % keywords.length;

        const length = keywords[counter.current].length;
        const loop = setInterval((): void => {
          setKeyword(generateRandomString(length));
        }, 10);
        setTimeout((): void => {
          clearInterval(loop);
          setKeyword(keywords[counter.current].toUpperCase());
          setLoading(1);
          counter.current = (counter.current + 1) % keywords.length;
        }, 1000);
      }, 5000);
    }

    return (): void => {
      clearInterval(keywordTransition);
    };
  }, [props.keywords]);

  useEffect((): void => {
    if (loading === 1) {
    }
  }, [loading]);

  return (
    <div className="keywords">
      <animated.span
        className="keywords__item"
        style={{
          color: 'cyan',
          transform: props.animatedProps.xy.interpolate(trans1),
        }}
      >
        {keyword}
      </animated.span>
      <animated.span
        className="keywords__item"
        style={{
          top: 4,
          left: 1,
          color: 'magenta',
          transform: props.animatedProps.xy.interpolate(trans2),
        }}
      >
        {keyword}
      </animated.span>
      <animated.span
        className="keywords__item"
        style={{
          top: 6,
          left: 2,
          color: 'yellow',
          transform: props.animatedProps.xy.interpolate(trans3),
        }}
      >
        {keyword}
        <animated.div className="keywords__loading" style={loadingProps} />
      </animated.span>
    </div>
  );
};

export default Keyword;
