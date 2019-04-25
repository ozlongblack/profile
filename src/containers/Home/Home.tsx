import React, { FunctionComponent } from 'react';
import { GeneralPageLayout, Intro, Stack } from 'components';

const Home: FunctionComponent = (): JSX.Element => {
  return (
    <GeneralPageLayout>
      <Intro />
      <Stack />
    </GeneralPageLayout>
  );
};

export default Home;
