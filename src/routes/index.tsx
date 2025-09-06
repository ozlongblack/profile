import React, { ComponentType, LazyExoticComponent, ReactElement } from 'react';
import { PATHS } from 'consts';
import { lazyContainer } from 'utils';

const Components: { [key: string]: Function } = {
  [PATHS.ROOT]: (): ReactElement => {
    const Home: LazyExoticComponent<ComponentType> = lazyContainer('Home/Home');
    return <Home />;
  },
  [PATHS.NOT_FOUND]: (): ReactElement => {
    const NotFound: LazyExoticComponent<ComponentType> =
      lazyContainer('NotFound/NotFound');
    return <NotFound />;
  },
};

export default Components;
