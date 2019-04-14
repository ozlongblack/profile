import { List } from 'immutable';

export interface ListState {
  error: boolean;
  loading: boolean;
  data: List<any>;
}
