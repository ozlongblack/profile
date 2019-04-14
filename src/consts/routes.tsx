import { NOT_FOUND } from 'redux-first-router';

const NAMESPACE = 'ROUTER';

export const PATHS: { [key: string]: string } = {
  ROOT: `${NAMESPACE}/ROOT`,
  PROFILE: `${NAMESPACE}/PROFILE`,
  NOT_FOUND,
};

export const routesMap: { [key: string]: string } = {
  [PATHS.ROOT]: '/',
  [PATHS.PROFILE]: '/profile',
  [NOT_FOUND]: '/404',
};
