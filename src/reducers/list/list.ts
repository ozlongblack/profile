import { List } from 'immutable';
import { list } from 'actions';
import { Action } from 'types/Action';
import { ListState } from 'types/List';

const DEFAULT_STATE: ListState = {
  error: false,
  loading: false,
  data: List(),
};
const DEFAULT_ACTION: Action = {
  type: '',
  payload: DEFAULT_STATE,
};

export default (
  state: ListState = DEFAULT_STATE,
  action: Action = DEFAULT_ACTION,
): ListState => {
  switch (action.type) {
    case list.REQUESTED:
      return {
        ...state,
        loading: true,
      };
    case list.COMPLETED:
      return {
        ...state,
        data: action.payload,
        loading: false,
      };
    case list.FAILED:
      return {
        ...state,
        error: true,
        loading: false,
      };
    default:
      return state;
  }
};
