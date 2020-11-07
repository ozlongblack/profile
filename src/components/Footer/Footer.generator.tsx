import { FunctionComponent } from 'react';
import { connect, MapStateToProps } from 'react-redux';
import { FooterProps } from './Footer.props';

const mapStateToProps: MapStateToProps<any, any, FooterProps> = (
  state: FooterProps,
): {} => ({
  theme: state.theme,
});

export default function generator(
  BaseComponent: FunctionComponent<FooterProps>,
) {
  return connect(mapStateToProps)(BaseComponent);
}
