import { FunctionComponent } from 'react';
import { connect, MapStateToProps } from 'react-redux';
import { AppProps } from './App.props';

const mapStateToProps: MapStateToProps<{}, {}, AppProps> = (
  state: AppProps,
): {} => ({
  i18n: state.i18n,
});

export default function generator(
  BaseComponent: FunctionComponent<AppProps>,
): Function {
  return connect(mapStateToProps)(BaseComponent);
}
