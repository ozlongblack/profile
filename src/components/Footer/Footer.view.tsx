import React, { FunctionComponent, ReactNode } from 'react';
import { FooterProps } from './Footer.props';

const Footer: FunctionComponent<FooterProps> = (
  props: FooterProps,
): ReactNode => {
  const theme = props.theme.data;
  const footerStyle = theme.get('footer');

  return (
    <footer
      className="footer"
      style={{ backgroundColor: footerStyle.backgroundColor }}
    >
      <span
        style={{
          color: footerStyle.fontColor,
        }}
      >
        Copyright &#9400; 2025 Kihwan. All rights reserved.
      </span>
    </footer>
  );
};

export default Footer;
