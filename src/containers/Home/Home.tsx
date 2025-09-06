import React, { FunctionComponent, ReactNode } from 'react';
import { GeneralPageLayout, Intro, Stack, Experience } from 'components';

const Home: FunctionComponent = (): ReactNode => {
  return (
    <GeneralPageLayout>
      <Intro />
      <Stack />
      <Experience />
    </GeneralPageLayout>
  );
};

export default Home;
