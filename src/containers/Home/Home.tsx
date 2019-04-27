import React, { FunctionComponent } from 'react';
import { GeneralPageLayout, Intro, Stack, Experience } from 'components';

const Home: FunctionComponent = (): JSX.Element => {
  return (
    <GeneralPageLayout>
      <Intro />
      <Stack />
      <Experience />
    </GeneralPageLayout>
  );
};

export default Home;
