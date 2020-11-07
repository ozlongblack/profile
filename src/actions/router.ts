import { Action } from 'types/Action';

const link = (nextRoute: string, payload: {}): Action => ({
  type: nextRoute,
  payload,
});

export default {
  link,
};
