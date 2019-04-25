import { NOT_FOUND } from 'redux-first-router';

const NAMESPACE = 'ROUTER';

export const PATHS: { [key: string]: string } = {
  ROOT: `${NAMESPACE}/ROOT`,
  NOT_FOUND,
};

export const routesMap: { [key: string]: string } = {
  [PATHS.ROOT]: '/',
  [NOT_FOUND]: '/404',
};
