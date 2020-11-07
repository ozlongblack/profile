import { FunctionComponent } from 'react';
import { connect, MapStateToProps } from 'react-redux';
import { TimelineProps } from './TimeLine.props';

const mapStateToProps: MapStateToProps<any, any, TimelineProps> = (
  state: TimelineProps,
): {} => ({
  theme: state.theme,
});

export default function generator(
  BaseComponent: FunctionComponent<TimelineProps>,
) {
  return connect(mapStateToProps)(BaseComponent);
}
