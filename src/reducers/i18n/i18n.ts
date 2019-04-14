import { i18n } from 'actions';
import { Action } from 'types/Action';

const DEFAULT_STATE = '';
const DEFAULT_ACTION: Action = {
  type: '',
  payload: DEFAULT_STATE,
};

export default (
  state: string = DEFAULT_STATE,
  action: Action = DEFAULT_ACTION,
): string => {
  switch (action.type) {
    case i18n.SET:
      return action.payload;

    default:
      return state;
  }
};
