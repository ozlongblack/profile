import { FunctionComponent } from 'react';
import { connect, MapStateToProps } from 'react-redux';
import { ScrollTrackerProps } from './ScrollTracker.props';

const mapStateToProps: MapStateToProps<any, any, ScrollTrackerProps> = (
  state: ScrollTrackerProps,
): {} => ({
  theme: state.theme,
});

export default function generator(
  BaseComponent: FunctionComponent<ScrollTrackerProps>,
) {
  return connect(mapStateToProps)(BaseComponent);
}
