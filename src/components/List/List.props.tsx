import { ListState } from 'types/List';

export interface ListProps {
  fetchList: Function;
  list: ListState;
}
