import { Action } from 'types/Action';

const NAMESPACE = 'DARKMODE';

const SET: string = `${NAMESPACE}/SET`;
const set: Function = (payload: boolean): Action => ({
  type: SET,
  payload,
});

export default {
  SET,
  set,
};
