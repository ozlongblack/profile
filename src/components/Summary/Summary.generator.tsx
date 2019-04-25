import { FunctionComponent } from 'react';
import { connect, MapStateToProps } from 'react-redux';
import { SummaryProps } from './Summary.props';

const mapStateToProps: MapStateToProps<{}, {}, SummaryProps> = (
  state: SummaryProps,
): {} => ({
  profile: state.profile,
  theme: state.theme,
});

export default function generator(
  BaseComponent: FunctionComponent<SummaryProps>,
): Function {
  return connect(mapStateToProps)(BaseComponent);
}
