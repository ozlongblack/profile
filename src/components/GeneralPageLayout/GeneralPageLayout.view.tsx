import React, { FunctionComponent } from 'react';
import { Header, ScrollTracker } from 'components';
import { useScrollStatus } from 'utils';
import { Scroll } from 'types/Scroll';
import { GeneralPageLayoutProps } from './GeneralPageLayout.props';

const GeneralPageLayout: FunctionComponent<GeneralPageLayoutProps> = (
  props: GeneralPageLayoutProps,
): JSX.Element => {
  const scrollState: Scroll = useScrollStatus();

  return (
    <div className="generalPageLayout">
      <ScrollTracker position={scrollState.position} />
      <Header sticky={scrollState.sticky} />
      <section className="generalPageLayout__content">{props.children}</section>
    </div>
  );
};

export default GeneralPageLayout;
