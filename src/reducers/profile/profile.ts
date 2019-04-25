import { Map } from 'immutable';
import { profile } from 'actions';
import { Action } from 'types/Action';
import { ProfileState } from 'types/Profile';

const DEFAULT_STATE: ProfileState = {
  error: false,
  loading: false,
  data: Map(),
};
const DEFAULT_ACTION: Action = {
  type: '',
  payload: DEFAULT_STATE,
};

export default (
  state: ProfileState = DEFAULT_STATE,
  action: Action = DEFAULT_ACTION,
): ProfileState => {
  switch (action.type) {
    case profile.REQUESTED:
      return {
        ...state,
        loading: true,
      };
    case profile.COMPLETED:
      return {
        ...state,
        data: action.payload,
        loading: false,
      };
    case profile.FAILED:
      return {
        ...state,
        error: true,
        loading: false,
      };
    default:
      return state;
  }
};
