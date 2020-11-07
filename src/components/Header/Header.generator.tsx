import { FunctionComponent } from 'react';
import { connect, MapStateToProps, MapDispatchToProps } from 'react-redux';
import { darkMode } from 'actions';
import { HeaderProps } from './Header.props';

const mapStateToProps: MapStateToProps<any, any, HeaderProps> = (
  state: HeaderProps,
): {} => ({
  darkMode: state.darkMode,
  theme: state.theme,
});

const mapDispatchToProps: MapDispatchToProps<any, any> = (
  dispatch: any,
): {} => ({
  setDarkMode: (state: boolean): void => {
    dispatch(darkMode.set(state));
  },
});

export default function generator(
  BaseComponent: FunctionComponent<HeaderProps>,
) {
  return connect(
    mapStateToProps,
    mapDispatchToProps,
  )(BaseComponent);
}
