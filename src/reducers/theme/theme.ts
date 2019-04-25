import { Map } from 'immutable';
import { theme } from 'actions';
import { Action } from 'types/Action';
import { ThemeState } from 'types/Theme';

const DEFAULT_STATE: ThemeState = {
  error: false,
  loading: false,
  data: Map(),
};

const DEFAULT_ACTION: Action = {
  type: '',
  payload: DEFAULT_STATE,
};

export default (
  state: ThemeState = DEFAULT_STATE,
  action: Action = DEFAULT_ACTION,
): ThemeState => {
  switch (action.type) {
    case theme.REQUESTED:
      return {
        ...state,
        loading: true,
      };
    case theme.COMPLETED:
      return {
        ...state,
        data: action.payload,
        loading: false,
      };
    case theme.FAILED:
      return {
        ...state,
        error: true,
        loading: false,
      };
    default:
      return state;
  }
};
