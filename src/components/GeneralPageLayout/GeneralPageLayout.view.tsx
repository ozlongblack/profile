import React, { FunctionComponent } from 'react';
import { Footer, Header, ScrollTracker } from 'components';
import { useScrollStatus } from 'utils';
import { Scroll } from 'types/Scroll';
import { GeneralPageLayoutProps } from './GeneralPageLayout.props';

const GeneralPageLayout: FunctionComponent<GeneralPageLayoutProps> = (
  props: GeneralPageLayoutProps,
): JSX.Element => {
  const scrollState: Scroll = useScrollStatus();
  const theme = props.theme.data;
  const generalStyle = theme.get('general');

  return (
    <section
      className="generalPageLayout"
      style={{
        backgroundColor: generalStyle.backgroundColor,
      }}
    >
      <ScrollTracker position={scrollState.position} />
      <Header sticky={scrollState.sticky} />
      <div className="generalPageLayout__content">{props.children}</div>
      <Footer />
    </section>
  );
};

export default GeneralPageLayout;
