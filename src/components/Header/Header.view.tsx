import React, { useState, FunctionComponent, ReactNode } from 'react';
import { SideNavigation } from 'components';

import { HeaderProps } from './Header.props';
import { Logos } from 'consts';

const Header: FunctionComponent<HeaderProps> = (
  props: HeaderProps,
): ReactNode => {
  const [show, setShow]: [boolean, Function] = useState(false);
  const theme = props.theme.data;
  const headerStyle = theme.get('header');

  return (
    <nav className={`header header--${props.sticky ? 'fixed' : 'top'}`}>
      <a className="header__logo" href="#top" aria-label="Home">
        <Logos.k
          className="header__logo__img"
          style={{ fill: headerStyle.logoColor }}
        />
      </a>
      <div className="header__menu">
        <label className="switch">
          <input
            type="checkbox"
            checked={props.darkMode}
            onChange={(event): void => {
              props.setDarkMode(event.target.checked);
            }}
            aria-label="Toggle Dark Mode"
          />
          <span className="slider slider--round" />
        </label>
        <button
          className="header__btn"
          onClick={(): void => {
            setShow(true);
          }}
          style={{ color: headerStyle.fontColor }}
          aria-label="Menu"
        >
          <i className="icon ion-md-menu" />
        </button>
      </div>
      <SideNavigation
        show={show}
        close={(): void => {
          setShow(false);
        }}
      />
    </nav>
  );
};

export default Header;
