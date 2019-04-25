import React, { FunctionComponent } from 'react';
import { SideNavigationProps } from './SideNavigation.props';

const SideNavigation: FunctionComponent<SideNavigationProps> = (
  props: SideNavigationProps,
): JSX.Element => {
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
        >
          <i className="icon ion-md-close" />
        </button>
      </div>
      <div className="sideNavigation__body">
        <a className="sideNavigation__item" href="#intro">
          Intro
        </a>
        <a className="sideNavigation__item" href="#stack">
          Stack
        </a>
      </div>
    </section>
  );
};

export default SideNavigation;
