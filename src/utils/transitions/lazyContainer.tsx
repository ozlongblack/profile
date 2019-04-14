import React, { FunctionComponent } from 'react';
import Loadable, { LoadableComponent } from 'react-loadable';
import { Loading } from 'components';

const render = (
  loaded: { default: FunctionComponent },
  props?: {},
): JSX.Element => {
  const BaseComponent: FunctionComponent = loaded.default;
  return (
    <>
      <Loading isLoading={false} />
      <BaseComponent {...props} />
    </>
  );
};

const lazyContainer: Function = (page: string): LoadableComponent =>
  Loadable({
    loader: () => import(`../../containers/${page}`),
    loading: Loading,
    render,
  });

export default lazyContainer;
