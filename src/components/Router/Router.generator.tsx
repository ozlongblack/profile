import { FunctionComponent } from 'react';
import { connect, MapStateToProps } from 'react-redux';
import { RouterProps } from './Router.props';

const mapStateToProps: MapStateToProps<{}, {}, RouterProps> = (
  state: RouterProps,
): {} => ({
  location: state.location,
});

export default function generator(
  BaseComponent: FunctionComponent<RouterProps>,
): Function {
  return connect(mapStateToProps)(BaseComponent);
}
