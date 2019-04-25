import { Action } from 'types/Action';

const NAMESPACE = 'THEME';

const COMPLETED: string = `${NAMESPACE}/COMPLETED`;
const completed: Function = (payload: string): Action => ({
  type: COMPLETED,
  payload,
});

const FAILED: string = `${NAMESPACE}/FAILED`;
const failed: Function = (payload: Error): Action => ({
  type: COMPLETED,
  payload,
});

export default {
  COMPLETED,
  completed,
  FAILED,
  failed,
};
