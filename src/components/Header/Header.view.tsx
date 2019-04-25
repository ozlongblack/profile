import React, { useState, FunctionComponent } from 'react';
import { SideNavigation } from 'components';
import logo from 'assets/images/h2lab.svg';

import { HeaderProps } from './Header.props';

const Header: FunctionComponent<HeaderProps> = (
  props: HeaderProps,
): JSX.Element => {
  const [show, setShow]: [boolean, Function] = useState(false);
  const theme = props.theme.data;
  const headerStyle = theme.get('header');

  return (
    <nav className={`header header--${props.sticky ? 'fixed' : 'top'}`}>
      <a className="header__logo" href="#top">
        <img className="header__logo__img" src={logo} alt="" />
      </a>
      <div className="header__menu">
        <label className="switch">
          <input
            type="checkbox"
            checked={props.darkMode}
            onChange={(event): void => {
              props.setDarkMode(event.target.checked);
            }}
          />
          <span className="slider slider--round" />
        </label>
        <button
          className="header__btn"
          onClick={(): void => {
            setShow(true);
          }}
          style={{ color: headerStyle.fontColor }}
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
