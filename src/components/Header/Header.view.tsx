import React, { useState, FunctionComponent } from 'react';
import { SideNavigation } from 'components';
import logo from 'assets/images/h2lab.svg';

import { HeaderProps } from './Header.props';

const Header: FunctionComponent<HeaderProps> = (
  props: HeaderProps,
): JSX.Element => {
  const [show, setShow]: [boolean, Function] = useState(false);

  return (
    <nav className={`header header--${props.sticky ? 'fixed' : 'top'}`}>
      <div className="header__logo">
        <img className="header__logo__img" src={logo} />
      </div>
      <button
        className="header__btn"
        onClick={(): void => {
          setShow(true);
        }}
      >
        <i className="icon ion-md-menu" />
      </button>
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
