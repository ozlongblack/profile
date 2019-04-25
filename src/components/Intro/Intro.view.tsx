import React, { useRef } from 'react';
import { useSpring } from 'react-spring';
import { Fibonacci, Keyword } from 'components';
import { Logos } from 'consts';
import { ReactComponent as Scrolldown } from 'assets/images/scrolldown.svg';
import { IntroProps } from './Intro.props';

const calc = (x: number, y: number): number[] => [
  x - window.innerWidth / 2,
  y - window.innerHeight / 2,
];

const Intro = (props: IntroProps): JSX.Element => {
  const profile = props.profile.data;
  const theme = props.theme.data;
  const generalStyle = theme.get('general');

  const viewRef = useRef<HTMLDivElement | null>(null);
  const [animatedProps, set] = useSpring(
    (): Record<string, any> => ({
      xy: [0, 0],
      config: { mass: 10, tension: 550, friction: 140 },
    }),
  );

  return (
    <div
      ref={viewRef}
      id="intro"
      className="intro"
      onMouseMove={({ clientX: x, clientY: y }): void => {
        set({ xy: calc(x, y) });
      }}
    >
      <div
        className="intro__container"
        style={{ color: generalStyle.fontLabelColor }}
      >
        <Fibonacci />
        <span className="intro__text">Hello, I am {profile.get('name')},</span>
        <span className="intro__text">
          {profile.get('role')} based in {profile.get('location')},
        </span>
        <span className="intro__text">who loves</span>
        <Keyword
          keywords={profile.get('keywords')}
          animatedProps={animatedProps}
        />
        <div className="intro__links">
          <a
            className="intro__link"
            href={profile.has('links') ? profile.get('links').linkedin : ''}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Logos.linkedin
              className="intro__logo"
              fill={generalStyle.fontLabelColor}
            />
          </a>
          <a
            className="intro__link"
            href={profile.has('links') ? profile.get('links').github : ''}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Logos.github
              className="intro__logo"
              fill={generalStyle.fontLabelColor}
            />
          </a>
          <a
            className="intro__link"
            href={profile.has('links') ? profile.get('links').codesandbox : ''}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Logos.codesandbox
              className="intro__logo"
              fill={generalStyle.fontLabelColor}
            />
          </a>
        </div>
        <div
          className="intro__scroll"
          tabIndex={0}
          onClick={(): void => {
            if (viewRef.current) {
              window.scrollTo({
                behavior: 'smooth',
                top: viewRef.current.clientHeight,
                left: 0,
              });
            }
          }}
        >
          <Scrolldown
            width="16"
            height="48"
            fill={generalStyle.fontLabelColor}
          />
        </div>
      </div>
    </div>
  );
};

export default Intro;
