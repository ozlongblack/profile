import { lazy, FunctionComponent, LazyExoticComponent } from 'react';

const lazyContainer: Function = (
  page: string,
): LazyExoticComponent<FunctionComponent> =>
  lazy((): Promise<any> => import(`../../containers/${page}`));

export default lazyContainer;
