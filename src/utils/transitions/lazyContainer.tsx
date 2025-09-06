import { lazy } from 'react';

const lazyContainer: Function = (page: string) =>
  lazy((): Promise<any> => import(`../../containers/${page}`));

export default lazyContainer;
