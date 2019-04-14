import { Action } from 'types/Action';

const link: Function = (nextRoute: string, payload: {}): Action => ({
  type: nextRoute,
  payload,
});

export default {
  link,
};
