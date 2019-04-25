import { FunctionComponent } from 'react';
import { connect, MapStateToProps, MapDispatchToProps } from 'react-redux';
import { darkMode } from 'actions';
import { HeaderProps } from './Header.props';

const mapStateToProps: MapStateToProps<{}, {}, HeaderProps> = (
  state: HeaderProps,
): {} => ({
  darkMode: state.darkMode,
  theme: state.theme,
});

const mapDispatchToProps: MapDispatchToProps<{}, {}> = (
  dispatch: Function,
): {} => ({
  setDarkMode: (state: boolean): void => {
    dispatch(darkMode.set(state));
  },
});

export default function generator(
  BaseComponent: FunctionComponent<HeaderProps>,
): Function {
  return connect(
    mapStateToProps,
    mapDispatchToProps,
  )(BaseComponent);
}
