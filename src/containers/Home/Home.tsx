import React, { FunctionComponent } from 'react';
import { GeneralPageLayout, List } from 'components';

const Home: FunctionComponent = (): JSX.Element => {
  return (
    <GeneralPageLayout>
      <List />
    </GeneralPageLayout>
  );
};

export default Home;
