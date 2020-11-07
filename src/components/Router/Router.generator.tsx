import { FunctionComponent } from 'react';
import { connect, MapStateToProps } from 'react-redux';
import { RouterProps } from './Router.props';

const mapStateToProps: MapStateToProps<any, any, RouterProps> = (
  state: RouterProps,
): {} => ({
  location: state.location,
});

export default function generator(
  BaseComponent: FunctionComponent<RouterProps>,
) {
  return connect(mapStateToProps)(BaseComponent);
}
