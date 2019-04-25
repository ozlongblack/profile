import { Map } from 'immutable';
import { Action } from 'types/Action';

const NAMESPACE = 'PROFILE';

const FETCH: string = `${NAMESPACE}/FETCH`;
const fetch: Function = (): Action => ({
  type: FETCH,
});

const REQUESTED: string = `${NAMESPACE}/REQUESTED`;
const requested: Function = (): Action => ({
  type: REQUESTED,
});

const COMPLETED: string = `${NAMESPACE}/COMPLETED`;
const completed: Function = (payload: Map<string, any>): Action => ({
  type: COMPLETED,
  payload,
});

const FAILED: string = `${NAMESPACE}/FAILED`;
const failed: Function = (payload: Error): Action => ({
  type: FAILED,
  payload,
});

export default {
  FETCH,
  fetch,
  REQUESTED,
  requested,
  COMPLETED,
  completed,
  FAILED,
  failed,
};
