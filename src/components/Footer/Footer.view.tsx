import React, { FunctionComponent } from 'react';
import { Logos } from 'consts';
import { FooterProps } from './Footer.props';

const Footer: FunctionComponent<FooterProps> = (
  props: FooterProps,
): JSX.Element => {
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
        Copyright &#9400; 2019 Kihwan. All rights reserved.
      </span>
      <div className="footer__browsers">
        <Logos.chrome className="footer__browsers__svg" />
        <Logos.firefox className="footer__browsers__svg" />
        <Logos.safari className="footer__browsers__svg" />
      </div>
    </footer>
  );
};

export default Footer;
