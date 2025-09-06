import React, { FunctionComponent, ReactNode } from 'react';
import { SideNavigationProps } from './SideNavigation.props';

const SideNavigation: FunctionComponent<SideNavigationProps> = (
  props: SideNavigationProps,
): ReactNode => {
  return (
    <section
      className={`sideNavigation sideNavigation--${
        props.show ? 'open' : 'closed'
      }`}
    >
      <div className="sideNavigation__header">
        <button
          className="sideNavigation__close"
          onClick={(): void => {
            props.close();
          }}
          tabIndex={props.show ? 0 : -1}
        >
          <i className="icon ion-md-close" />
        </button>
      </div>
      <div className="sideNavigation__body">
        <a
          className="sideNavigation__item"
          href="#intro"
          tabIndex={props.show ? 0 : -1}
        >
          Intro
        </a>
        <a
          className="sideNavigation__item"
          href="#about"
          tabIndex={props.show ? 0 : -1}
        >
          About Me
        </a>
        <a
          className="sideNavigation__item"
          href="#tool"
          tabIndex={props.show ? 0 : -1}
        >
          Tech Stack
        </a>
        <a
          className="sideNavigation__item"
          href="#experience"
          tabIndex={props.show ? 0 : -1}
        >
          Experience
        </a>
      </div>
    </section>
  );
};

export default SideNavigation;
