import { FunctionComponent } from 'react';
import { connect, MapStateToProps } from 'react-redux';
import { SummaryProps } from './Summary.props';

const mapStateToProps: MapStateToProps<any, any, SummaryProps> = (
  state: SummaryProps,
): {} => ({
  profile: state.profile,
  theme: state.theme,
});

export default function generator(
  BaseComponent: FunctionComponent<SummaryProps>,
) {
  return connect(mapStateToProps)(BaseComponent);
}
