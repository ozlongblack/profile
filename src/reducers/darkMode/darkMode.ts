import { darkMode } from 'actions';
import { Action } from 'types/Action';

const DEFAULT_STATE = false;
const DEFAULT_ACTION: Action = {
  type: '',
  payload: DEFAULT_STATE,
};

export default (
  state: boolean = DEFAULT_STATE,
  action: Action = DEFAULT_ACTION,
): boolean => {
  switch (action.type) {
    case darkMode.SET:
      return action.payload;

    default:
      return state;
  }
};
