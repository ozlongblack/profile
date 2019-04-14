import { FunctionComponent } from 'react';
import { connect, MapStateToProps, MapDispatchToProps } from 'react-redux';
import { list } from 'actions';
import { ListProps } from './List.props';

const mapStateToProps: MapStateToProps<{}, {}, ListProps> = (
  state: ListProps,
): {} => ({
  list: state.list,
});

const mapDispatchToProps: MapDispatchToProps<{}, {}> = (
  dispatch: Function,
): {} => ({
  fetchList: (): void => {
    dispatch(list.fetch());
  },
});

export default function generator(
  BaseComponent: FunctionComponent<ListProps>,
): Function {
  return connect(
    mapStateToProps,
    mapDispatchToProps,
  )(BaseComponent);
}
